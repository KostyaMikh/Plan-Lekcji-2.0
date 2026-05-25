#!/usr/bin/env python3
"""Serwer statyczny + proxy do EduPage (omija CORS w przeglądarce)."""

from __future__ import annotations

import json
import urllib.error
import urllib.request
from http import HTTPStatus
from http.cookiejar import CookieJar
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urljoin

UPSTREAM = "https://autonomiczne.edupage.org"
PORT = int(__import__("os").environ.get("PORT", 5173))
ROOT = Path(__file__).resolve().parent

_opener: urllib.request.OpenerDirector | None = None


def edupage_opener() -> urllib.request.OpenerDirector:
    """Sesja z ciasteczkiem PHPSESSID (wymagane przez RPC EduPage)."""
    global _opener
    if _opener is None:
        jar = CookieJar()
        _opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))
        for path in ("timetable/", "substitution/"):
            req = urllib.request.Request(
                urljoin(UPSTREAM + "/", path),
                headers={"User-Agent": "Plan-Lekcji-Viewer/1.0"},
            )
            _opener.open(req, timeout=30)
    return _opener


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_GET(self) -> None:
        if self.path.startswith("/api/edupage/"):
            self._proxy_edupage("GET")
            return
        super().do_GET()

    def do_POST(self) -> None:
        if self.path.startswith("/api/edupage/"):
            self._proxy_edupage("POST")
            return
        self.send_error(HTTPStatus.METHOD_NOT_ALLOWED, "POST niedozwolony dla plików statycznych")

    def _proxy_edupage(self, method: str) -> None:
        upstream_path = self.path.removeprefix("/api/edupage")
        if not upstream_path.startswith("/"):
            upstream_path = "/" + upstream_path
        url = urljoin(UPSTREAM + "/", upstream_path.lstrip("/"))

        body = None
        if method == "POST":
            length = int(self.headers.get("Content-Length", "0") or 0)
            body = self.rfile.read(length) if length else b""

        req = urllib.request.Request(
            url,
            data=body,
            method=method,
            headers={
                "Content-Type": self.headers.get("Content-Type", "application/json; charset=utf-8"),
                "User-Agent": "Plan-Lekcji-Viewer/1.0",
            },
        )

        try:
            with edupage_opener().open(req, timeout=60) as resp:
                data = resp.read()
                self.send_response(resp.status)
                self.send_header("Content-Type", resp.headers.get("Content-Type", "application/json"))
                self.send_header("Content-Length", str(len(data)))
                self.end_headers()
                self.wfile.write(data)
        except urllib.error.HTTPError as e:
            err_body = e.read()
            self.send_response(e.code)
            self.send_header("Content-Type", e.headers.get("Content-Type", "text/plain"))
            self.send_header("Content-Length", str(len(err_body)))
            self.end_headers()
            self.wfile.write(err_body)
        except urllib.error.URLError as e:
            payload = json.dumps({"e": "ProxyError", "em": str(e.reason)}).encode("utf-8")
            self.send_response(HTTPStatus.BAD_GATEWAY)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)

    def log_message(self, fmt: str, *args) -> None:
        if str(args[0]).startswith("GET /api/edupage"):
            return
        super().log_message(fmt, *args)


def main() -> None:
    try:
        httpd = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    except OSError as e:
        if getattr(e, "errno", None) == 48:
            raise SystemExit(
                f"Port {PORT} jest zajęty. Zatrzymaj poprzedni serwer (Ctrl+C w terminalu)\n"
                f"lub proces na porcie {PORT}, potem uruchom ponownie: python3 server.py"
            ) from e
        raise
    with httpd:
        print(f"Plan lekcji: http://localhost:{PORT}")
        print("Proxy EduPage: /api/edupage/ →", UPSTREAM)
        httpd.serve_forever()


if __name__ == "__main__":
    main()

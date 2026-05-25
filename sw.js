// Service Worker — Plan Lekcji 2.0
const CACHE = 'plan-lekcji-v1';
const STATIC = ['/', '/index.html', '/app.js', '/styles.css', '/favicon.svg', '/manifest.json'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(STATIC))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // API запросы — только сеть, без кеша
  if (url.pathname.startsWith('/api/')) {
    e.respondWith(fetch(e.request));
    return;
  }

  // Статика — сначала кеш, потом сеть
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});

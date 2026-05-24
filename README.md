# Plan Lekcji 2.0 — GSA

Nieoficjalny, nowoczesny podgląd planu lekcji **Gdańskich Szkół Autonomicznych**.  
Dane pobierane z publicznego EduPage: [autonomiczne.edupage.org](https://autonomiczne.edupage.org/timetable/)

## Funkcje

- Kolorowe karty lekcji z ikonami przedmiotów
- Wiele klas naraz, widok dnia i tygodnia
- Wyszukiwarka (przedmiot, nauczyciel, sala, klasa)
- Zastępstwa z EduPage
- Plan dla nauczycieli
- Zakładki (ulubione klasy i nauczyciele)
- Prace domowe klasy 5A
- Obsługa języków: PL / RU / EN
- Działa na telefonie i komputerze

## Uruchomienie lokalnie (Mac / PC)

```bash
git clone https://github.com/TWOJ_LOGIN/Plan-Lekcji-2.0.git
cd Plan-Lekcji-2.0
python3 server.py
```

Otwórz w przeglądarce: **http://localhost:5173**

> **Telefon w tej samej sieci Wi-Fi:**  
> Wpisz `http://ADRES_IP_MACA:5173` (np. `http://192.168.1.23:5173`)

## Deployment na Railway (bez komputera 24/7)

1. Wgraj projekt na GitHub
2. Wejdź na [railway.app](https://railway.app) → **New Project → Deploy from GitHub**
3. Wybierz to repozytorium
4. Railway automatycznie uruchomi `python3 server.py`
5. Kliknij **Generate Domain** — dostaniesz publiczny link

Darmowy plan Railway daje $5 kredytów miesięcznie — wystarczy na cały miesiąc dla lekkiego serwera Python.

## Struktura projektu

```
Plan-Lekcji-2.0/
├── index.html      # Główna strona
├── app.js          # Logika aplikacji
├── styles.css      # Style
├── server.py       # Serwer Python + proxy EduPage (omija CORS)
├── favicon.svg     # Ikona
├── Procfile        # Konfiguracja Railway
└── requirements.txt
```

## Jak to działa

Przeglądarka nie może bezpośrednio odpytywać EduPage (blokada CORS).  
`server.py` działa jako proxy — odbiera żądania z przeglądarki i przekazuje je do EduPage, zwracając dane z powrotem.

## Autor

**KM** — fan przyjaznego planu, nie strona szkoły.  
E-mail: [independent.k.d.mikhailov@gmail.com](mailto:independent.k.d.mikhailov@gmail.com)  
Scratch: [REAL-FLIER637](https://scratch.mit.edu/users/REAL-FLIER637/)

const EDUPAGE_BASE = '/api/edupage';
const CREATOR_EMAIL = 'independent.k.d.mikhailov@gmail.com';
const STORAGE_CLASSES = 'plan-lekcji:classes';
const STORAGE_TEACHERS = 'plan-lekcji:teachers';
const STORAGE_VIEW = 'plan-lekcji:view';
const STORAGE_DAY = 'plan-lekcji:day';
const STORAGE_PANEL = 'plan-lekcji:panel';
const STORAGE_BOOKMARKS = 'plan-lekcji:bookmarks';
const STORAGE_SUBST_DATE = 'plan-lekcji:substDate';
const STORAGE_WELCOME = 'plan-lekcji:welcomeSeen';
const STORAGE_LANG = 'plan-lekcji:lang';

// ─── i18n ────────────────────────────────────────────────────────────────────
const TRANSLATIONS = {
  pl: {
    'nav.plan': 'Plan', 'nav.homework': 'PD', 'nav.contact': 'Autor',
    'nav.more': 'Więcej ▾', 'nav.guide': '? Przewodnik',
    'nav.teachers': 'Dla nauczycieli', 'nav.subst': 'Zastępstwa',
    'nav.fun': 'Fun', 'nav.bookmarks': '★ Zakładki',
    'welcome.badge': 'Witaj!', 'welcome.text': 'To wygodny podgląd planu lekcji GSA — kolorowe karty, wiele klas naraz, zastępstwa i więcej.',
    'welcome.guide': 'Zobacz przewodnik', 'welcome.skip': 'Przejdź od razu do planu',
    'guide.title': 'Przewodnik', 'guide.meta': 'Plan Lekcji 2.0 — co to jest i jak korzystać',
    'guide.what.title': 'Czym jest Plan Lekcji 2.0?',
    'guide.run.title': 'Jak uruchomić (Mac / komputer)',
    'guide.tabs.title': 'Zakładki u góry',
    'guide.tabs.plan': 'klasy, dzień lub tydzień, wyszukiwarka',
    'guide.tabs.pd': 'prace domowe (klasa 5A, WhatsApp, Gmail)',
    'guide.tabs.contact': 'kontakt szkoły i twórcy',
    'guide.tabs.more': 'przewodnik, nauczyciele, zastępstwa, fun, zakładki',
    'guide.basics.title': 'Plan lekcji — podstawy',
    'guide.tips.title': 'Wskazówki', 'guide.goplan': 'Przejdź do planu lekcji',
    'status.loading': 'Ładowanie', 'status.ok': 'Gotowe', 'status.err': 'Błąd',
    'label.classes': 'Klasy', 'label.teachers': 'Nauczyciele',
    'label.day': 'Dzień', 'label.date': 'Data', 'label.weekAB': 'Tydzień A / B',
    'btn.all': 'Wszystkie', 'btn.clear': 'Wyczyść',
    'view.day': 'Dzień', 'view.week': 'Tydzień',
    'week.all': 'Wszystkie', 'week.a': 'Tydzień A', 'week.b': 'Tydzień B',
    'teachers.title': 'Dla nauczycieli', 'teachers.meta': 'Jak na stronie EduPage — wybierz nauczyciela',
    'subst.title': 'Zastępstwa', 'subst.meta': 'Dane ze strony szkoły (EduPage)',
    'subst.loading': 'Ładowanie zastępstw…',
    'hw.title': 'Prace domowe', 'hw.meta': 'Na razie tylko klasa 5A',
    'hw.wa.title': 'Grupa WhatsApp — nieobecni z lekcji',
    'hw.wa.text': 'Otworzy się Gmail z gotową wiadomością do twórcy — uzupełnij tylko imię i nazwisko.',
    'hw.wa.btn': 'Wyślij prośbę w Gmail',
    'hw.arch.title': 'Archiwum prac domowych (nieobecni)',
    'hw.arch.text': 'Kanał WhatsApp z pracami domowymi na dziś i archiwum dla osób nieobecnych:',
    'hw.arch.btn': 'Praca Domowa Na Dziś! — WhatsApp',
    'fun.title': 'Fun', 'fun.meta': 'Kanały i linki od twórcy',
    'fun.clash.text': 'Kanał WhatsApp z darmowymi prezentami do Clash Royale i Brawl Stars.',
    'fun.clash.btn': 'Otwórz kanał WhatsApp',
    'fun.scratch.text': 'Projekty twórcy na Scratch — gry i animacje.',
    'fun.scratch.btn': 'Otwórz Scratch',
    'bm.title': 'Zakładki', 'bm.meta': 'Dotknij ★ przy klasie lub nauczycielu, aby dodać',
    'bm.empty': 'Brak zakładek', 'bm.emptySub': 'Dotknij ☆ przy klasie lub nauczycielu.',
    'contact.title': 'Kontakt', 'contact.school': 'Szkoła', 'contact.creator': 'Twórca aplikacji',
    'contact.address': 'Adres', 'contact.phone': 'Telefon', 'contact.site': 'Strona', 'contact.author': 'Autor',
    'footer.source': 'Źródło: EduPage GSA',
    'server.online': 'Online', 'server.offline': 'Offline', 'server.checking': '…',
    'empty.noclass': 'Wybierz klasę', 'empty.noteacher': 'Wybierz nauczyciela',
    'empty.noresults': 'Brak wyników', 'empty.nolessons': 'Brak lekcji',
    'search.placeholder': 'Szukaj: przedmiot, nauczyciel, sala, klasa…',
    'days': ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'],
    'days.short': ['Pon', 'Wt', 'Śr', 'Czw', 'Pt'],
    'today': 'dziś', 'now': 'TERAZ', 'subst.badge': 'ZASTĘPSTWO',
  },
  ru: {
    'nav.plan': 'Расписание', 'nav.homework': 'ДЗ', 'nav.contact': 'Автор',
    'nav.more': 'Ещё ▾', 'nav.guide': '? Справка',
    'nav.teachers': 'Для учителей', 'nav.subst': 'Замены',
    'nav.fun': 'Fun', 'nav.bookmarks': '★ Закладки',
    'welcome.badge': 'Привет!', 'welcome.text': 'Удобный просмотр расписания GSA — цветные карточки, несколько классов, замены и многое другое.',
    'welcome.guide': 'Открыть справку', 'welcome.skip': 'Сразу к расписанию',
    'guide.title': 'Справка', 'guide.meta': 'Plan Lekcji 2.0 — что это и как пользоваться',
    'guide.what.title': 'Что такое Plan Lekcji 2.0?',
    'guide.run.title': 'Как запустить (Mac / компьютер)',
    'guide.tabs.title': 'Вкладки вверху',
    'guide.tabs.plan': 'классы, день или неделя, поиск',
    'guide.tabs.pd': 'домашние задания (класс 5A, WhatsApp, Gmail)',
    'guide.tabs.contact': 'контакт школы и автора',
    'guide.tabs.more': 'справка, учителя, замены, fun, закладки',
    'guide.basics.title': 'Расписание — основы',
    'guide.tips.title': 'Советы', 'guide.goplan': 'Перейти к расписанию',
    'status.loading': 'Загрузка', 'status.ok': 'Готово', 'status.err': 'Ошибка',
    'label.classes': 'Классы', 'label.teachers': 'Учителя',
    'label.day': 'День', 'label.date': 'Дата', 'label.weekAB': 'Неделя A / B',
    'btn.all': 'Все', 'btn.clear': 'Сбросить',
    'view.day': 'День', 'view.week': 'Неделя',
    'week.all': 'Все', 'week.a': 'Неделя A', 'week.b': 'Неделя B',
    'teachers.title': 'Для учителей', 'teachers.meta': 'Как на EduPage — выберите учителя',
    'subst.title': 'Замены', 'subst.meta': 'Данные со страницы школы (EduPage)',
    'subst.loading': 'Загрузка замен…',
    'hw.title': 'Домашние задания', 'hw.meta': 'Пока только класс 5A',
    'hw.wa.title': 'Группа WhatsApp — отсутствующие',
    'hw.wa.text': 'Откроется Gmail с готовым письмом — укажи только имя и фамилию.',
    'hw.wa.btn': 'Отправить запрос в Gmail',
    'hw.arch.title': 'Архив домашних заданий (отсутствующие)',
    'hw.arch.text': 'Канал WhatsApp с домашними заданиями на сегодня и архивом:',
    'hw.arch.btn': 'Домашнее задание — WhatsApp',
    'fun.title': 'Fun', 'fun.meta': 'Каналы и ссылки от автора',
    'fun.clash.text': 'Канал WhatsApp с бесплатными подарками для Clash Royale и Brawl Stars.',
    'fun.clash.btn': 'Открыть канал WhatsApp',
    'fun.scratch.text': 'Проекты автора на Scratch — игры и анимации.',
    'fun.scratch.btn': 'Открыть Scratch',
    'bm.title': 'Закладки', 'bm.meta': 'Нажми ★ рядом с классом или учителем',
    'bm.empty': 'Нет закладок', 'bm.emptySub': 'Нажми ☆ рядом с классом или учителем.',
    'contact.title': 'Контакт', 'contact.school': 'Школа', 'contact.creator': 'Автор приложения',
    'contact.address': 'Адрес', 'contact.phone': 'Телефон', 'contact.site': 'Сайт', 'contact.author': 'Автор',
    'footer.source': 'Источник: EduPage GSA',
    'server.online': 'Онлайн', 'server.offline': 'Офлайн', 'server.checking': '…',
    'empty.noclass': 'Выберите класс', 'empty.noteacher': 'Выберите учителя',
    'empty.noresults': 'Нет результатов', 'empty.nolessons': 'Нет уроков',
    'search.placeholder': 'Поиск: предмет, учитель, кабинет, класс…',
    'days': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'],
    'days.short': ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
    'today': 'сегодня', 'now': 'СЕЙЧАС', 'subst.badge': 'ЗАМЕНА',
  },
  en: {
    'nav.plan': 'Schedule', 'nav.homework': 'HW', 'nav.contact': 'Author',
    'nav.more': 'More ▾', 'nav.guide': '? Guide',
    'nav.teachers': 'For teachers', 'nav.subst': 'Substitutions',
    'nav.fun': 'Fun', 'nav.bookmarks': '★ Bookmarks',
    'welcome.badge': 'Welcome!', 'welcome.text': 'A convenient timetable viewer for GSA — colourful cards, multiple classes, substitutions and more.',
    'welcome.guide': 'View guide', 'welcome.skip': 'Go straight to schedule',
    'guide.title': 'Guide', 'guide.meta': 'Plan Lekcji 2.0 — what it is and how to use it',
    'guide.what.title': 'What is Plan Lekcji 2.0?',
    'guide.run.title': 'How to run (Mac / PC)',
    'guide.tabs.title': 'Top tabs',
    'guide.tabs.plan': 'classes, day or week, search',
    'guide.tabs.pd': 'homework (class 5A, WhatsApp, Gmail)',
    'guide.tabs.contact': 'school and creator contact',
    'guide.tabs.more': 'guide, teachers, substitutions, fun, bookmarks',
    'guide.basics.title': 'Schedule — basics',
    'guide.tips.title': 'Tips', 'guide.goplan': 'Go to schedule',
    'status.loading': 'Loading', 'status.ok': 'Ready', 'status.err': 'Error',
    'label.classes': 'Classes', 'label.teachers': 'Teachers',
    'label.day': 'Day', 'label.date': 'Date', 'label.weekAB': 'Week A / B',
    'btn.all': 'All', 'btn.clear': 'Clear',
    'view.day': 'Day', 'view.week': 'Week',
    'week.all': 'All', 'week.a': 'Week A', 'week.b': 'Week B',
    'teachers.title': 'For teachers', 'teachers.meta': 'Like on EduPage — select a teacher',
    'subst.title': 'Substitutions', 'subst.meta': 'Data from school website (EduPage)',
    'subst.loading': 'Loading substitutions…',
    'hw.title': 'Homework', 'hw.meta': 'Currently only class 5A',
    'hw.wa.title': 'WhatsApp group — absent students',
    'hw.wa.text': 'Opens Gmail with a ready message — just fill in your name.',
    'hw.wa.btn': 'Send request via Gmail',
    'hw.arch.title': 'Homework archive (absent)',
    'hw.arch.text': 'WhatsApp channel with today\'s homework and archive for absent students:',
    'hw.arch.btn': 'Homework Today! — WhatsApp',
    'fun.title': 'Fun', 'fun.meta': 'Channels and links from the creator',
    'fun.clash.text': 'WhatsApp channel with free gifts for Clash Royale and Brawl Stars.',
    'fun.clash.btn': 'Open WhatsApp channel',
    'fun.scratch.text': 'Creator\'s projects on Scratch — games and animations.',
    'fun.scratch.btn': 'Open Scratch',
    'bm.title': 'Bookmarks', 'bm.meta': 'Tap ★ next to a class or teacher to add',
    'bm.empty': 'No bookmarks', 'bm.emptySub': 'Tap ☆ next to a class or teacher.',
    'contact.title': 'Contact', 'contact.school': 'School', 'contact.creator': 'App creator',
    'contact.address': 'Address', 'contact.phone': 'Phone', 'contact.site': 'Website', 'contact.author': 'Author',
    'footer.source': 'Source: EduPage GSA',
    'server.online': 'Online', 'server.offline': 'Offline', 'server.checking': '…',
    'empty.noclass': 'Select a class', 'empty.noteacher': 'Select a teacher',
    'empty.noresults': 'No results', 'empty.nolessons': 'No lessons',
    'search.placeholder': 'Search: subject, teacher, room, class…',
    'days': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    'days.short': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    'today': 'today', 'now': 'NOW', 'subst.badge': 'SUBSTITUTION',
  },
};

let currentLang = localStorage.getItem(STORAGE_LANG) || 'pl';

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS.pl)[key] || (TRANSLATIONS.pl)[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    const val = t(key);
    if (val === undefined || val === key) return;
    if (typeof val !== 'string') return; // skip arrays (days etc.)
    // Only set textContent on leaf nodes (no element children)
    if (node.children.length === 0) {
      node.textContent = val;
    }
  });
  const si = document.getElementById('searchInput');
  if (si) si.placeholder = t('search.placeholder');
  // Update day selects
  const days = t('days');
  if (Array.isArray(days)) {
    ['daySelect', 'teacherDaySelect'].forEach((id) => {
      const sel = document.getElementById(id);
      if (!sel) return;
      const cur = sel.value;
      sel.innerHTML = days.map((d, i) => `<option value="${i}">${d}</option>`).join('');
      sel.value = cur;
    });
  }
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_LANG, lang);
  document.querySelectorAll('.langBtn').forEach((b) => {
    b.classList.toggle('langBtn--active', b.dataset.lang === lang);
  });
  applyTranslations();
}

// ─── Constants & palettes ────────────────────────────────────────────────────
const SUBJECT_PALETTE = [
  { accent: '#66f0ff', bg: 'rgba(102,240,255,.18)' },
  { accent: '#b26cff', bg: 'rgba(178,108,255,.18)' },
  { accent: '#4dffb7', bg: 'rgba(77,255,183,.16)' },
  { accent: '#ffcf5a', bg: 'rgba(255,207,90,.16)' },
  { accent: '#ff7eb3', bg: 'rgba(255,126,179,.16)' },
  { accent: '#7eb8ff', bg: 'rgba(126,184,255,.16)' },
  { accent: '#ff9f6b', bg: 'rgba(255,159,107,.16)' },
  { accent: '#c4ff6b', bg: 'rgba(196,255,107,.14)' },
];

const CLASS_PALETTE = [
  '#66f0ff', '#b26cff', '#4dffb7', '#ffcf5a', '#ff7eb3', '#7eb8ff', '#ff9f6b', '#c4ff6b', '#f472b6', '#a78bfa',
];

const SUBJECT_RULES = [
  { test: /informat|komput|programow|cyfrow|info\b|\.inf/i, theme: 'informatics', icon: '💻', flair: 'console', tag: 'lekcja.exe' },
  { test: /matemat|algebra|geometr|mat\b|\.mat/i, theme: 'math', icon: '🔢', flair: 'math', tag: '∑ + π' },
  { test: /fizyk|fiz\b/i, theme: 'physics', icon: '⚛️', flair: 'physics', tag: 'E=mc²' },
  { test: /chem/i, theme: 'chemistry', icon: '🧪', flair: 'lab', tag: 'H₂O' },
  { test: /biolog|bio\b/i, theme: 'biology', icon: '🧬', flair: 'bio', tag: 'DNA' },
  { test: /geograf|geo\b/i, theme: 'geo', icon: '🌍', flair: 'globe', tag: 'GPS' },
  { test: /histor|hist\b/i, theme: 'history', icon: '🏛️', flair: 'history', tag: '∞ lat' },
  { test: /angiel|english|ang\b|j\.ang/i, theme: 'english', icon: '💬', flair: 'chat', tag: 'Hello!' },
  { test: /polski|polon|pol\b|j\.pol/i, theme: 'polish', icon: '📖', flair: 'book', tag: '„…"' },
  { test: /niemiec|deutsch|niem\b/i, theme: 'german', icon: '🇩🇪', flair: 'chat', tag: 'Guten Tag' },
  { test: /rosyjs|ros\b/i, theme: 'russian', icon: '🇷🇺', flair: 'chat', tag: 'Привет' },
  { test: /hiszp|franc|wlos|jezyk obcy/i, theme: 'lang', icon: '🗣️', flair: 'chat', tag: 'Hola' },
  { test: /wf\b|wychowanie fiz|sport/i, theme: 'pe', icon: '⚽', flair: 'sport', tag: 'GO!' },
  { test: /muzyk/i, theme: 'music', icon: '💀', flair: 'skull', tag: '💀' },
  { test: /plastyk|sztuk/i, theme: 'art', icon: '🎨', flair: 'art', tag: 'RGB' },
  { test: /technik/i, theme: 'tech', icon: '🔧', flair: 'gear', tag: '⚙️' },
  { test: /relig|katechez/i, theme: 'religion', icon: '🕯️', flair: 'candle', tag: '✦' },
  { test: /etyk/i, theme: 'ethics', icon: '⚖️', flair: 'scale', tag: '≋' },
  { test: /wos|spolecz|ekonom/i, theme: 'civics', icon: '🏛️', flair: 'civics', tag: '§' },
  { test: /filozof/i, theme: 'philosophy', icon: '💭', flair: 'think', tag: '?' },
];

// ─── DOM refs ────────────────────────────────────────────────────────────────
const el = {
  classPicker: document.getElementById('classPicker'),
  teacherPicker: document.getElementById('teacherPicker'),
  selectAllBtn: document.getElementById('selectAllBtn'),
  clearAllBtn: document.getElementById('clearAllBtn'),
  selectAllTeachersBtn: document.getElementById('selectAllTeachersBtn'),
  clearAllTeachersBtn: document.getElementById('clearAllTeachersBtn'),
  weekSelect: document.getElementById('weekSelect'),
  daySelect: document.getElementById('daySelect'),
  teacherDaySelect: document.getElementById('teacherDaySelect'),
  dayPickWrap: document.getElementById('dayPickWrap'),
  reloadBtn: document.getElementById('reloadBtn'),
  schedule: document.getElementById('schedule'),
  teacherSchedule: document.getElementById('teacherSchedule'),
  schoolName: document.getElementById('schoolName'),
  metaLine: document.getElementById('metaLine'),
  statusPill: document.getElementById('statusPill'),
  errorBox: document.getElementById('errorBox'),
  dateTime: document.getElementById('dateTime'),
  searchInput: document.getElementById('searchInput'),
  searchClear: document.getElementById('searchClear'),
  substDate: document.getElementById('substDate'),
  substContent: document.getElementById('substContent'),
  bookmarksList: document.getElementById('bookmarksList'),
  welcomeOverlay: document.getElementById('welcomeOverlay'),
  welcomeGuideBtn: document.getElementById('welcomeGuideBtn'),
  welcomeSkipBtn: document.getElementById('welcomeSkipBtn'),
  guideToPlanBtn: document.getElementById('guideToPlanBtn'),
  serverStatus: document.getElementById('serverStatus'),
  panels: {
    guide: document.getElementById('panelGuide'),
    plan: document.getElementById('panelPlan'),
    teachers: document.getElementById('panelTeachers'),
    subst: document.getElementById('panelSubst'),
    homework: document.getElementById('panelHomework'),
    fun: document.getElementById('panelFun'),
    bookmarks: document.getElementById('panelBookmarks'),
    contact: document.getElementById('panelContact'),
  },
};

let viewMode = 'today';
let activePanel = 'plan';
let onRerender = null;
let searchQuery = '';
let appData = null;
let substCache = new Map();
let nowPeriodTimer = null;
// Week swipe state
let weekSwipeIdx = 0;

const mobileMq = window.matchMedia('(max-width: 899px)');

// ─── Server status ───────────────────────────────────────────────────────────
async function checkServerStatus() {
  const statusEl = el.serverStatus;
  if (!statusEl) return;
  try {
    const res = await fetch('/api/edupage/timetable/', { method: 'GET', cache: 'no-store' });
    const ok = res.ok || res.status < 500;
    statusEl.className = `serverStatus serverStatus--${ok ? 'online' : 'offline'}`;
    statusEl.querySelector('.serverStatus__label').textContent = t(ok ? 'server.online' : 'server.offline');
  } catch {
    statusEl.className = 'serverStatus serverStatus--offline';
    statusEl.querySelector('.serverStatus__label').textContent = t('server.offline');
  }
}

function startServerStatusPolling() {
  checkServerStatus();
  setInterval(checkServerStatus, 30000);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function hashStr(s) {
  let h = 0;
  for (let i = 0; i < String(s).length; i++) h = (h * 31 + String(s).charCodeAt(i)) >>> 0;
  return h;
}

function subjectColor(subject) {
  return SUBJECT_PALETTE[hashStr(subject) % SUBJECT_PALETTE.length];
}

function classColor(id) {
  return CLASS_PALETTE[hashStr(id) % CLASS_PALETTE.length];
}

function normalizeSubject(name) {
  return String(name).normalize('NFD').replace(/\p{M}/gu, '').toLowerCase();
}

function resolveSubjectTheme(subject) {
  const n = normalizeSubject(subject);
  for (const r of SUBJECT_RULES) if (r.test.test(n)) return r;
  return { theme: 'default', icon: '📚', flair: 'spark', tag: '●' };
}

function lessonFlairHTML(flair) {
  const flairs = {
    console: `<div class="lesson__flair lesson__flair--console" aria-hidden="true"><div class="miniConsole"><div class="miniConsole__dots"><i></i><i></i><i></i></div><div class="miniConsole__screen"><div class="miniConsole__line"><span class="miniConsole__prompt">C:\\&gt;</span> lekcja.exe</div><div class="miniConsole__line miniConsole__line--green">print("Hello!")</div><span class="miniConsole__cursor">▋</span></div></div></div>`,
    math: `<div class="lesson__flair lesson__flair--math" aria-hidden="true"><span class="flairFloat">∑</span><span class="flairFloat">π</span><span class="flairFloat">√</span></div>`,
    physics: `<div class="lesson__flair lesson__flair--physics" aria-hidden="true"><span class="atom"><i></i><i></i><i></i></span></div>`,
    lab: `<div class="lesson__flair lesson__flair--lab" aria-hidden="true"><span class="flask">🧪</span><span class="bubble"></span></div>`,
    bio: `<div class="lesson__flair lesson__flair--bio" aria-hidden="true"><span class="helix">🧬</span></div>`,
    globe: `<div class="lesson__flair lesson__flair--globe" aria-hidden="true"><span class="globeSpin">🌍</span></div>`,
    history: `<div class="lesson__flair lesson__flair--history" aria-hidden="true"><span class="pillar"></span><span class="pillar"></span></div>`,
    chat: `<div class="lesson__flair lesson__flair--chat" aria-hidden="true"><span class="chatBubble">…</span></div>`,
    book: `<div class="lesson__flair lesson__flair--book" aria-hidden="true"><span class="bookStack"><i></i><i></i></span></div>`,
    sport: `<div class="lesson__flair lesson__flair--sport" aria-hidden="true"><span class="sportBall">⚽</span></div>`,
    skull: `<div class="lesson__flair lesson__flair--skull" aria-hidden="true"><span class="skullEmoji">💀</span></div>`,
    art: `<div class="lesson__flair lesson__flair--art" aria-hidden="true"><span class="swatch" style="--c:#ff5a7a"></span><span class="swatch" style="--c:#66f0ff"></span></div>`,
    gear: `<div class="lesson__flair lesson__flair--gear" aria-hidden="true"><span class="gearIcon">⚙️</span></div>`,
    candle: `<div class="lesson__flair lesson__flair--candle" aria-hidden="true"><span class="candleFlame">🕯️</span></div>`,
    scale: `<div class="lesson__flair lesson__flair--scale" aria-hidden="true"><span class="scaleIcon">⚖️</span></div>`,
    civics: `<div class="lesson__flair lesson__flair--civics" aria-hidden="true"><span class="civicsIcon">🏛️</span></div>`,
    think: `<div class="lesson__flair lesson__flair--think" aria-hidden="true"><span class="thinkCloud">💭</span></div>`,
    spark: `<div class="lesson__flair lesson__flair--spark" aria-hidden="true"><span class="sparkle">✦</span></div>`,
  };
  return flairs[flair] || flairs.spark;
}

function getTodayDayIndex() {
  const d = new Date().getDay();
  if (d >= 1 && d <= 5) return d - 1;
  return null;
}

function getPlanDayIdx() {
  const v = Number(el.daySelect?.value);
  return Number.isFinite(v) ? v : getTodayDayIndex() ?? 0;
}

function getTeacherDayIdx() {
  const v = Number(el.teacherDaySelect?.value);
  return Number.isFinite(v) ? v : getTodayDayIndex() ?? 0;
}

function isRealToday(dayIdx) {
  return getTodayDayIndex() === dayIdx;
}

function parseTimeToMin(timeStr) {
  if (!timeStr) return null;
  const [h, m] = String(timeStr).split(':').map(Number);
  if (!Number.isFinite(h) || !Number.isFinite(m)) return null;
  return h * 60 + m;
}

function getCurrentPeriodKey(periods) {
  const now = new Date();
  const mins = now.getHours() * 60 + now.getMinutes();
  for (const p of periods) {
    const start = parseTimeToMin(p.starttime);
    const end = parseTimeToMin(p.endtime);
    if (start != null && end != null && mins >= start && mins < end) return String(p.period);
  }
  return null;
}

function escapeHTML(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

// ─── Bookmarks ───────────────────────────────────────────────────────────────
function loadBookmarks() {
  try { return JSON.parse(localStorage.getItem(STORAGE_BOOKMARKS) || '{}'); }
  catch { return {}; }
}

function saveBookmarks(bm) {
  localStorage.setItem(STORAGE_BOOKMARKS, JSON.stringify(bm));
}

function isBookmarked(type, id) {
  const bm = loadBookmarks();
  return (bm[type] || []).some((x) => String(x.id) === String(id));
}

function toggleBookmark(type, id, label) {
  const bm = loadBookmarks();
  if (!bm[type]) bm[type] = [];
  const i = bm[type].findIndex((x) => String(x.id) === String(id));
  if (i >= 0) bm[type].splice(i, 1);
  else bm[type].push({ id: String(id), label });
  saveBookmarks(bm);
  renderBookmarksList();
  if (appData) {
    renderClassPicker(appData.classes, getSelectedClassIds());
    renderTeacherPicker(appData.teachers, getSelectedTeacherIds());
  }
}

function renderBookmarksList() {
  const bm = loadBookmarks();
  const items = [
    ...(bm.classes || []).map((x) => ({ ...x, type: 'classes', icon: '🏫' })),
    ...(bm.teachers || []).map((x) => ({ ...x, type: 'teachers', icon: '👤' })),
  ];
  if (!items.length) {
    el.bookmarksList.innerHTML =
      `<div class="scheduleEmpty"><strong>${t('bm.empty')}</strong>${t('bm.emptySub')}</div>`;
    return;
  }
  el.bookmarksList.innerHTML = items
    .map((x) => `
    <button type="button" class="bookmarkItem" data-type="${x.type}" data-id="${escapeHTML(x.id)}">
      <span class="bookmarkItem__icon">${x.icon}</span>
      <span class="bookmarkItem__label">${escapeHTML(x.label)}</span>
      <span class="bookmarkItem__remove" data-remove title="Usuń">×</span>
    </button>`)
    .join('');

  el.bookmarksList.querySelectorAll('.bookmarkItem').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (e.target.closest('[data-remove]')) {
        toggleBookmark(btn.dataset.type, btn.dataset.id, '');
        return;
      }
      const { type, id } = btn.dataset;
      if (type === 'classes') {
        switchPanel('plan');
        ensureChipOn(el.classPicker, id);
        saveSelectedClasses();
      } else {
        switchPanel('teachers');
        ensureChipOn(el.teacherPicker, id);
        saveSelectedTeachers();
      }
      onRerender?.();
    });
  });
}

function ensureChipOn(picker, id) {
  picker.querySelectorAll('.classChip').forEach((b) => {
    const on = b.dataset.id === String(id);
    b.classList.toggle('classChip--on', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

function getSelectedClassIds() {
  return [...el.classPicker.querySelectorAll('.classChip--on')].map((b) => b.dataset.id);
}

function getSelectedTeacherIds() {
  return [...el.teacherPicker.querySelectorAll('.classChip--on')].map((b) => b.dataset.id);
}

function saveSelectedClasses() {
  localStorage.setItem(STORAGE_CLASSES, JSON.stringify(getSelectedClassIds()));
}

function saveSelectedTeachers() {
  localStorage.setItem(STORAGE_TEACHERS, JSON.stringify(getSelectedTeacherIds()));
}

function matchesSearch(item, q) {
  if (!q) return true;
  const hay = [item.subject, item.teachers, item.rooms, item.group, item.classLabel, item.teacherLabel]
    .filter(Boolean).join(' ').toLowerCase();
  return hay.includes(q);
}

// ─── Clock & pill ────────────────────────────────────────────────────────────
function startClock() {
  const tick = () => {
    const d = new Date();
    const locale = currentLang === 'ru' ? 'ru-RU' : currentLang === 'en' ? 'en-GB' : 'pl-PL';
    el.dateTime.textContent = mobileMq.matches
      ? d.toLocaleString(locale, { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
      : d.toLocaleString(locale, { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };
  tick();
  setInterval(tick, 1000);
  mobileMq.addEventListener('change', tick);
}

function setPill(kind, textKey) {
  el.statusPill.className = `pill pill--${kind}`;
  el.statusPill.textContent = t(textKey);
}

function showError(err) {
  el.errorBox.hidden = false;
  el.errorBox.textContent = typeof err === 'string' ? err : err?.stack || String(err);
}

function clearError() {
  el.errorBox.hidden = true;
  el.errorBox.textContent = '';
}

// ─── RPC ─────────────────────────────────────────────────────────────────────
async function rpc(modulePath, func, args) {
  const url = new URL(`${EDUPAGE_BASE}${modulePath}`, window.location.origin);
  url.searchParams.set('__func', func);
  let res;
  try {
    res = await fetch(url.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ __args: args, __gsh: '00000000' }),
    });
  } catch (e) {
    throw new Error('Brak połączenia. Uruchom: python3 server.py → http://localhost:5173\n\n' + String(e?.message || e));
  }
  const txt = await res.text();
  let json;
  try { json = JSON.parse(txt); }
  catch { throw new Error(`Nieprawidłowa odpowiedź (${func})`); }
  if (json?.reload) throw new Error('Serwer poprosił o przeładowanie.');
  if (json?.e || json?.en || json?.em) throw new Error(`Błąd: ${json?.e || json?.en || ''} ${json?.em || ''}`.trim());
  if (!('r' in json)) throw new Error(`Brak danych (${func}).`);
  return json.r;
}

// ─── Data helpers ─────────────────────────────────────────────────────────────
function getTableRows(tables, tableId) {
  const tbl = tables.find((x) => x?.id === tableId);
  return tbl?.data_rows || [];
}

function rowsToIdMap(rows) {
  const m = new Map();
  for (const r of rows) m.set(r.id, r);
  return m;
}

function safeJoin(arr, sep = ', ') {
  return (arr || []).filter(Boolean).join(sep);
}

function parseDayBits(bits) {
  const s = String(bits || '');
  const out = [];
  for (let i = 0; i < Math.min(5, s.length); i++) if (s[i] === '1') out.push(i);
  return out;
}

function parseWeekBits(bits) {
  const s = String(bits || '');
  if (s === '1' || s === '' || s == null) return 'all';
  if (s.includes('1') && s.includes('2')) return 'all';
  if (s.includes('1')) return '1';
  if (s.includes('2')) return '2';
  return 'all';
}

function resolveTimetableNum(viewer) {
  const reg = viewer?.regular || {};
  const def = reg.default_num;
  if (def != null && String(def).trim() !== '') return String(def);
  const visible = (reg.timetables || []).filter((t) => !t.hidden);
  if (!visible.length) return null;
  visible.sort((a, b) => String(b.datefrom || '').localeCompare(String(a.datefrom || '')));
  return String(visible[0].tt_num);
}

function lessonHasClass(lesson, classId) {
  return (lesson.classids || []).some((id) => String(id) === String(classId));
}

function lessonHasTeacher(lesson, teacherId) {
  return (lesson.teacherids || []).some((id) => String(id) === String(teacherId));
}

function fmtPeriodTimes(p) {
  const start = p?.starttime || '';
  const end = p?.endtime || '';
  return { num: p.period, range: start && end ? `${start}–${end}` : null, start, end };
}

// ─── Lesson rendering ─────────────────────────────────────────────────────────
function lessonBlockHTML(item, { showClass, nowPeriod, dayIdx }) {
  const subj = resolveSubjectTheme(item.subject);
  const { accent, bg } =
    subj.theme === 'music'
      ? { accent: '#94a3b8', bg: 'rgba(148,163,184,.14)' }
      : subjectColor(item.subject);
  const isNow = isRealToday(dayIdx) && nowPeriod && String(item.period) === String(nowPeriod);
  const badges = [];
  if (isNow) badges.push(`<span class="lesson__badge lesson__badge--now">${t('now')}</span>`);
  if (item.isSubst) badges.push(`<span class="lesson__badge lesson__badge--subst">${t('subst.badge')}</span>`);

  const classBadge =
    showClass && item.classLabel
      ? `<span class="lesson__class" style="--chip:${item.classAccent}">${escapeHTML(item.classLabel)}</span>`
      : '';

  return `
    <div class="lesson lesson--${subj.theme}${isNow ? ' lesson--now' : ''}" style="--accent:${accent};--accent-bg:${bg}">
      ${lessonFlairHTML(subj.flair)}
      <div class="lesson__bar" aria-hidden="true"></div>
      <div class="lesson__main">
        <div class="lesson__iconWrap" aria-hidden="true"><span class="lesson__icon">${subj.icon}</span></div>
        <div class="lesson__body">
          <div class="lesson__head">
            <div class="lesson__titleRow">
              <div class="lesson__subject">${escapeHTML(item.subject || '—')}</div>
              <span class="lesson__tag">${escapeHTML(subj.tag)}</span>
              ${badges.join('')}
            </div>
            ${classBadge}
          </div>
          <div class="lesson__meta">
            ${item.teachers ? `<div class="metaRow"><span class="metaRow__icon metaRow__icon--teacher"></span><span>${escapeHTML(item.teachers)}</span></div>` : ''}
            ${item.rooms ? `<div class="metaRow"><span class="metaRow__icon metaRow__icon--room"></span><span>${escapeHTML(item.rooms)}</span></div>` : ''}
            ${item.group ? `<div class="metaRow"><span class="metaRow__icon metaRow__icon--group"></span><span>${escapeHTML(item.group)}</span></div>` : ''}
            ${item.substNote ? `<div class="metaRow metaRow--subst"><span class="metaRow__icon">↻</span><span>${escapeHTML(item.substNote)}</span></div>` : ''}
          </div>
        </div>
      </div>
    </div>`.trim();
}

function slotsHTML(periods, grid, dayIdx, opts = {}) {
  const { showClass, nowPeriod } = opts;
  const q = searchQuery.trim().toLowerCase();
  const slots = [];

  for (const p of periods) {
    let items = (grid.get(`${dayIdx}:${String(p.period)}`) || []).map((x) => ({ ...x, period: p.period }));
    if (q) items = items.filter((x) => matchesSearch(x, q));
    if (!items.length) continue;

    const { num, range } = fmtPeriodTimes(p);
    const slotNow = isRealToday(dayIdx) && nowPeriod && String(p.period) === String(nowPeriod);

    slots.push(`
      <article class="slot${slotNow ? ' slot--now' : ''}">
        <div class="slot__time">
          <span class="slot__num">${escapeHTML(String(num))}.</span>
          ${range ? `<span class="slot__range">${escapeHTML(range)}</span>` : ''}
          ${slotNow ? '<span class="slot__live">●</span>' : ''}
        </div>
        <div class="slot__body">${items.map((x) => lessonBlockHTML(x, { showClass, nowPeriod, dayIdx })).join('')}</div>
      </article>`);
  }
  return slots.join('');
}

function mergedGridForDay(grids, infos, dayIdx, labelKey = 'classLabel') {
  const merged = new Map();
  for (const info of infos) {
    const grid = grids.get(info.id);
    if (!grid) continue;
    for (const key of grid.keys()) {
      if (!key.startsWith(`${dayIdx}:`)) continue;
      if (!merged.has(key)) merged.set(key, []);
      for (const item of grid.get(key)) {
        merged.get(key).push({ ...item, [labelKey]: info.label, classAccent: info.accent });
      }
    }
  }
  for (const items of merged.values()) {
    items.sort((a, b) => {
      const c = String(a[labelKey] || '').localeCompare(String(b[labelKey] || ''), 'pl');
      if (c) return c;
      return String(a.subject).localeCompare(String(b.subject), 'pl');
    });
  }
  return merged;
}

function emptyDayHTML(dayName) {
  const q = searchQuery.trim();
  if (q) return `<div class="scheduleEmpty"><strong>${t('empty.noresults')}</strong>Nic nie pasuje do „${escapeHTML(q)}".</div>`;
  return `<div class="scheduleEmpty"><strong>${t('empty.nolessons')}</strong></div>`;
}

// ─── Schedule rendering ───────────────────────────────────────────────────────
function renderDaySchedule(container, { periods, grids, infos, dayIdx, labelKey }) {
  const nowPeriod = getCurrentPeriodKey(periods);
  let html = '';
  if (infos.length === 1) {
    html = slotsHTML(periods, grids.get(infos[0].id), dayIdx, { showClass: false, nowPeriod });
  } else {
    html = slotsHTML(periods, mergedGridForDay(grids, infos, dayIdx, labelKey), dayIdx, { showClass: true, nowPeriod });
  }
  const days = t('days');
  const dayTitle = days[dayIdx] || '';
  const todayBadge = isRealToday(dayIdx) ? ` <span class="dayBlock__badge">${t('today')}</span>` : '';
  const body = html || emptyDayHTML(dayTitle);
  container.innerHTML = `
    <div class="dayBlock dayBlock--single ${isRealToday(dayIdx) ? 'dayBlock--today' : ''}">
      <h2 class="dayBlock__title">${escapeHTML(dayTitle)}${todayBadge}</h2>
      <div class="dayBlock__body">${body}</div>
    </div>`;
}

// Week view with horizontal swipe
function renderWeekSchedule(container, { periods, grids, infos, labelKey }) {
  const todayIdx = getTodayDayIndex();
  const nowPeriod = getCurrentPeriodKey(periods);
  const days = t('days');
  const daysShort = t('days.short');
  // Safety: ensure these are arrays
  const daysArr = Array.isArray(days) ? days : ['Pon','Wt','Śr','Czw','Pt'];
  const daysShortArr = Array.isArray(daysShort) ? daysShort : ['Pon','Wt','Śr','Czw','Pt'];

  // Build day sections
  const parts = [];
  for (let dayIdx = 0; dayIdx < 5; dayIdx++) {
    let inner = '';
    if (infos.length === 1) {
      inner = slotsHTML(periods, grids.get(infos[0].id), dayIdx, { showClass: false, nowPeriod });
    } else {
      inner = slotsHTML(periods, mergedGridForDay(grids, infos, dayIdx, labelKey), dayIdx, { showClass: true, nowPeriod });
    }
    if (!inner) inner = `<p class="dayEmpty">${searchQuery.trim() ? t('empty.noresults') : t('empty.nolessons')}</p>`;
    parts.push(`
      <section class="weekDay" id="weekDay-${dayIdx}" data-day="${dayIdx}">
        <div class="dayBlock__body">${inner}</div>
      </section>`);
  }

  // Tab bar for days
  const tabBar = `<div class="weekTabBar" id="weekTabBar">
    ${daysArr.map((d, i) => `
      <button type="button" class="weekTab${i === weekSwipeIdx ? ' weekTab--active' : ''}${i === todayIdx ? ' weekTab--today' : ''}" data-day="${i}">
        <span class="weekTab__short">${escapeHTML(daysShortArr[i] || d)}</span>
        <span class="weekTab__full">${escapeHTML(d)}</span>
        ${i === todayIdx ? `<span class="weekTab__dot"></span>` : ''}
      </button>`).join('')}
  </div>`;

  container.innerHTML = `
    ${tabBar}
    <div class="weekSwiper" id="weekSwiper">
      <div class="weekSwiper__track" id="weekSwiperTrack" style="transform:translateX(-${weekSwipeIdx * 100}%)">
        ${parts.join('')}
      </div>
    </div>`;

  // Wire tab clicks
  container.querySelectorAll('.weekTab').forEach((btn) => {
    btn.addEventListener('click', () => {
      weekSwipeIdx = Number(btn.dataset.day);
      updateWeekSwiper(container);
    });
  });

  // Wire swipe
  initWeekSwipe(container);
}

function updateWeekSwiper(container) {
  const track = container.querySelector('#weekSwiperTrack');
  if (track) track.style.transform = `translateX(-${weekSwipeIdx * 100}%)`;
  container.querySelectorAll('.weekTab').forEach((btn) => {
    btn.classList.toggle('weekTab--active', Number(btn.dataset.day) === weekSwipeIdx);
  });
}

function initWeekSwipe(container) {
  const swiper = container.querySelector('#weekSwiper');
  if (!swiper) return;
  let startX = 0, startY = 0, dragging = false;

  swiper.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    dragging = true;
  }, { passive: true });

  swiper.addEventListener('touchend', (e) => {
    if (!dragging) return;
    dragging = false;
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) < 40 || Math.abs(dy) > Math.abs(dx)) return;
    if (dx < 0 && weekSwipeIdx < 4) weekSwipeIdx++;
    else if (dx > 0 && weekSwipeIdx > 0) weekSwipeIdx--;
    updateWeekSwiper(container);
  }, { passive: true });

  // Mouse drag for desktop
  swiper.addEventListener('mousedown', (e) => { startX = e.clientX; startY = e.clientY; dragging = true; });
  swiper.addEventListener('mouseup', (e) => {
    if (!dragging) return;
    dragging = false;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) < 40 || Math.abs(dy) > Math.abs(dx)) return;
    if (dx < 0 && weekSwipeIdx < 4) weekSwipeIdx++;
    else if (dx > 0 && weekSwipeIdx > 0) weekSwipeIdx--;
    updateWeekSwiper(container);
  });
}

// ─── Picker rendering ─────────────────────────────────────────────────────────
function pickerChipHTML({ id, label, accent, on, bookmarked, starType }) {
  return `
    <div class="pickerChip">
      <button type="button" class="classChip ${on ? 'classChip--on' : ''}" data-id="${escapeHTML(id)}" aria-pressed="${on}" style="--chip:${accent}">${escapeHTML(label)}</button>
      <button type="button" class="pickerChip__star ${bookmarked ? 'pickerChip__star--on' : ''}" data-star="${starType}" data-id="${escapeHTML(id)}" data-label="${escapeHTML(label)}" aria-label="Zakładka" title="Zakładka">${bookmarked ? '★' : '☆'}</button>
    </div>`;
}

function wirePicker(picker, { getSelected, saveSelected, minOne = true }) {
  picker.querySelectorAll('.classChip').forEach((btn) => {
    btn.addEventListener('click', () => {
      const willOn = !btn.classList.contains('classChip--on');
      if (!willOn && getSelected().length <= (minOne ? 1 : 0)) return;
      btn.classList.toggle('classChip--on', willOn);
      btn.setAttribute('aria-pressed', willOn ? 'true' : 'false');
      saveSelected();
      onRerender?.();
    });
  });
  picker.querySelectorAll('[data-star]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleBookmark(btn.dataset.star, btn.dataset.id, btn.dataset.label);
    });
  });
}

function renderClassPicker(classes, selectedIds) {
  el.classPicker.innerHTML = classes
    .map((c) => {
      const id = String(c.id);
      return pickerChipHTML({
        id, label: c.short || c.name, accent: classColor(id),
        on: selectedIds.includes(id), bookmarked: isBookmarked('classes', id), starType: 'classes',
      });
    }).join('');
  wirePicker(el.classPicker, { getSelected: getSelectedClassIds, saveSelected: saveSelectedClasses });
  el.selectAllBtn.disabled = false;
  el.clearAllBtn.disabled = false;
}

function renderTeacherPicker(teachers, selectedIds) {
  el.teacherPicker.innerHTML = teachers
    .map((teacher) => {
      const id = String(teacher.id);
      return pickerChipHTML({
        id, label: teacher.short || teacher.name, accent: classColor(id),
        on: selectedIds.includes(id), bookmarked: isBookmarked('teachers', id), starType: 'teachers',
      });
    }).join('');
  wirePicker(el.teacherPicker, { getSelected: getSelectedTeacherIds, saveSelected: saveSelectedTeachers });
  el.selectAllTeachersBtn.disabled = false;
  el.clearAllTeachersBtn.disabled = false;
}

function initDaySelects() {
  const days = t('days');
  const opts = days.map((d, i) => `<option value="${i}">${d}</option>`).join('');
  el.daySelect.innerHTML = opts;
  el.teacherDaySelect.innerHTML = opts;
  const saved = localStorage.getItem(STORAGE_DAY);
  const today = getTodayDayIndex();
  const def = saved != null && saved !== '' ? saved : today != null ? String(today) : '0';
  el.daySelect.value = def;
  el.teacherDaySelect.value = def;
  // Set initial week swipe to today
  if (today != null) weekSwipeIdx = today;
}

function applyViewMode(mode) {
  viewMode = mode === 'week' ? 'week' : 'today';
  document.querySelectorAll('.seg__btn').forEach((b) => {
    const on = b.dataset.view === viewMode;
    b.classList.toggle('seg__btn--active', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  if (el.dayPickWrap) el.dayPickWrap.hidden = viewMode === 'week';
}

// ─── Panel switching ──────────────────────────────────────────────────────────
function dismissWelcome(goGuide) {
  localStorage.setItem(STORAGE_WELCOME, '1');
  if (el.welcomeOverlay) el.welcomeOverlay.hidden = true;
  document.body.classList.remove('welcome-open');
  switchPanel(goGuide ? 'guide' : 'plan');
}

function showWelcomeIfNeeded() {
  if (localStorage.getItem(STORAGE_WELCOME)) return false;
  if (el.welcomeOverlay) el.welcomeOverlay.hidden = false;
  document.body.classList.add('welcome-open');
  return true;
}

// ─── Panel switching ──────────────────────────────────────────────────────────
function switchPanel(panel) {
  activePanel = panel;
  localStorage.setItem(STORAGE_PANEL, panel);

  // Update nav buttons
  document.querySelectorAll('.mainNav__btn[data-panel]').forEach((b) => {
    b.classList.toggle('mainNav__btn--active', b.dataset.panel === panel);
  });

  for (const [key, node] of Object.entries(el.panels)) {
    node.hidden = key !== panel;
  }
  if (panel === 'subst') loadSubstitutions(el.substDate.value);
  if (panel === 'bookmarks') renderBookmarksList();
  if (panel !== 'plan' && panel !== 'teachers') return;
  onRerender?.();
}

// ─── Substitutions ────────────────────────────────────────────────────────────
async function loadSubstitutions(dateStr) {
  if (!dateStr) return;
  el.substContent.innerHTML = `<div class="scheduleEmpty">${t('subst.loading')}</div>`;
  localStorage.setItem(STORAGE_SUBST_DATE, dateStr);

  try {
    let html = substCache.get(dateStr);
    if (!html) {
      html = await rpc('/substitution/server/viewer.js', 'getSubstViewerDayDataHtml', [
        null, { date: dateStr, mode: 'classes', kiosk: false },
      ]);
      substCache.set(dateStr, html);
    }
    if (!html || html.includes('nie ma żadnych zastępstw') || html.includes('nie zostały')) {
      el.substContent.innerHTML = `<div class="scheduleEmpty"><strong>${t('subst.title')}</strong>Na ${escapeHTML(dateStr)} nie ma opublikowanych zastępstw.</div>`;
      return;
    }
    el.substContent.innerHTML = `<div class="substHtml">${html}</div>`;
    applySubstToPlan(dateStr, html);
    onRerender?.();
  } catch (e) {
    el.substContent.innerHTML = `<div class="scheduleEmpty"><strong>Błąd</strong>${escapeHTML(String(e.message || e))}</div>`;
  }
}

function parseSubstHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const map = new Map();
  doc.querySelectorAll('.section').forEach((section) => {
    const className = section.querySelector('.header')?.textContent?.trim();
    section.querySelectorAll('.row').forEach((row) => {
      if (row.classList.contains('nosubst')) return;
      const info = row.querySelector('.info')?.textContent?.trim();
      const periodText = row.querySelector('.period')?.textContent?.trim() || '';
      if (!info || !className) return;
      const key = `${normalizeSubject(className)}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push({ periodText, info });
    });
  });
  return map;
}

function applySubstToPlan(dateStr, html) {
  if (!appData) return;
  const today = getTodayDayIndex();
  if (today == null) return;
  const planDate = getDateForDayIdx(getPlanDayIdx());
  if (planDate !== dateStr) { appData.substByClass = null; return; }
  appData.substByClass = parseSubstHtml(html);
}

function getDateForDayIdx(dayIdx) {
  const now = new Date();
  const dow = now.getDay();
  const currentIdx = dow >= 1 && dow <= 5 ? dow - 1 : 0;
  const d = new Date(now);
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + (dayIdx - currentIdx));
  return d.toISOString().slice(0, 10);
}

function enrichWithSubst(items, classLabel) {
  const map = appData?.substByClass;
  if (!map) return items;
  const key = normalizeSubject(classLabel);
  for (const [k, subs] of map.entries()) {
    if (key.includes(k) || k.includes(key)) {
      return items.map((it) => ({ ...it, isSubst: true, substNote: subs.map((s) => s.info).join('; ') }));
    }
  }
  return items;
}

// ─── Main data loading ────────────────────────────────────────────────────────
async function loadData() {
  clearError();
  setPill('loading', 'status.loading');
  substCache.clear();

  const yearCandidates = [new Date().getFullYear(), new Date().getFullYear() - 1, new Date().getFullYear() + 1];
  let viewer, ttNum, lastErr;
  for (const y of yearCandidates) {
    try {
      const v = await rpc('/timetable/server/ttviewer.js', 'getTTViewerData', [null, y]);
      const num = resolveTimetableNum(v);
      if (num) { viewer = v; ttNum = num; break; }
      if (!viewer) viewer = v;
    } catch (e) { lastErr = e; }
  }
  if (!viewer) throw lastErr || new Error('Nie udało się pobrać planu.');
  if (!ttNum) ttNum = resolveTimetableNum(viewer);
  if (!ttNum) throw new Error('Brak aktywnego planu.');

  const ttList = viewer?.regular?.timetables || [];
  const currentTT = ttList.find((x) => String(x.tt_num) === String(ttNum)) || ttList.find((x) => !x.hidden) || null;
  const ttdata = await rpc('/timetable/server/regulartt.js', 'regularttGetData', [null, String(ttNum)]);
  const tables = ttdata?.dbiAccessorRes?.tables || [];

  const globals = getTableRows(tables, 'globals')[0] || {};
  const periods = getTableRows(tables, 'periods').slice().sort((a, b) => Number(a.period) - Number(b.period));
  const classes = getTableRows(tables, 'classes').slice().sort((a, b) => String(a.short || a.name).localeCompare(String(b.short || b.name), 'pl'));
  const teachers = getTableRows(tables, 'teachers').slice().sort((a, b) => String(a.short || a.name).localeCompare(String(b.short || b.name), 'pl'));
  const lessons = rowsToIdMap(getTableRows(tables, 'lessons'));
  const cards = getTableRows(tables, 'cards');
  const teachersById = rowsToIdMap(getTableRows(tables, 'teachers'));
  const subjectsById = rowsToIdMap(getTableRows(tables, 'subjects'));
  const roomsById = rowsToIdMap(getTableRows(tables, 'classrooms'));
  const classesById = rowsToIdMap(classes);

  el.schoolName.textContent = globals?.reg_name || viewer?.school_name || 'Plan lekcji';
  el.metaLine.textContent = [globals?.settings?.m_strPrintHeaderText, currentTT?.text].filter(Boolean).join(' • ');

  appData = { periods, classes, teachers, lessons, cards, teachersById, subjectsById, roomsById, classesById, substByClass: null };

  let selectedClassIds = [];
  let selectedTeacherIds = [];
  try { selectedClassIds = JSON.parse(localStorage.getItem(STORAGE_CLASSES) || '[]'); } catch { selectedClassIds = []; }
  try { selectedTeacherIds = JSON.parse(localStorage.getItem(STORAGE_TEACHERS) || '[]'); } catch { selectedTeacherIds = []; }
  selectedClassIds = selectedClassIds.filter((id) => classes.some((c) => String(c.id) === id));
  selectedTeacherIds = selectedTeacherIds.filter((id) => teachers.some((t) => String(t.id) === id));
  if (!selectedClassIds.length && classes[0]) selectedClassIds = [String(classes[0].id)];
  if (!selectedTeacherIds.length && teachers[0]) selectedTeacherIds = [String(teachers[0].id)];

  renderClassPicker(classes, selectedClassIds);
  renderTeacherPicker(teachers, selectedTeacherIds);
  renderBookmarksList();

  const substDate = localStorage.getItem(STORAGE_SUBST_DATE) || new Date().toISOString().slice(0, 10);
  el.substDate.value = substDate;

  function buildGridForClass(classId, weekFilter) {
    const grid = new Map();
    const classRow = classesById.get(classId);
    const classLabel = classRow?.short || classRow?.name || classId;
    for (const card of cards) {
      const lesson = lessons.get(card.lessonid);
      if (!lesson || !lessonHasClass(lesson, classId)) continue;
      const week = parseWeekBits(card.weeks);
      if (weekFilter !== 'all' && week !== 'all' && week !== String(weekFilter)) continue;
      const subject = subjectsById.get(lesson.subjectid);
      const subjectLabel = subject?.short || subject?.name || '—';
      const teacherLabels = (lesson.teacherids || []).map((id) => teachersById.get(id)?.short || teachersById.get(id)?.name).filter(Boolean);
      const roomLabels = (card.classroomids || []).map((id) => roomsById.get(id)?.short || roomsById.get(id)?.name).filter(Boolean);
      const days = parseDayBits(card.days);
      const periodKey = String(card.period);
      for (const dayIdx of days) {
        const key = `${dayIdx}:${periodKey}`;
        if (!grid.has(key)) grid.set(key, []);
        const item = { subject: subjectLabel, teachers: safeJoin(teacherLabels, ', '), rooms: safeJoin(roomLabels, ', '), group: safeJoin(lesson.groupnames || [], ', '), classLabel, classAccent: classColor(classId) };
        grid.get(key).push(...enrichWithSubst([item], classLabel));
      }
    }
    for (const items of grid.values()) items.sort((a, b) => String(a.subject).localeCompare(String(b.subject), 'pl'));
    return grid;
  }

  function buildGridForTeacher(teacherId, weekFilter) {
    const grid = new Map();
    const teacherRow = teachersById.get(teacherId);
    const teacherLabel = teacherRow?.short || teacherRow?.name || teacherId;
    for (const card of cards) {
      const lesson = lessons.get(card.lessonid);
      if (!lesson || !lessonHasTeacher(lesson, teacherId)) continue;
      const week = parseWeekBits(card.weeks);
      if (weekFilter !== 'all' && week !== 'all' && week !== String(weekFilter)) continue;
      const subject = subjectsById.get(lesson.subjectid);
      const subjectLabel = subject?.short || subject?.name || '—';
      const classLabels = (lesson.classids || []).map((id) => classesById.get(id)?.short || classesById.get(id)?.name).filter(Boolean);
      const roomLabels = (card.classroomids || []).map((id) => roomsById.get(id)?.short || roomsById.get(id)?.name).filter(Boolean);
      const days = parseDayBits(card.days);
      const periodKey = String(card.period);
      for (const dayIdx of days) {
        const key = `${dayIdx}:${periodKey}`;
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push({ subject: subjectLabel, teachers: teacherLabel, rooms: safeJoin(roomLabels, ', '), group: safeJoin(lesson.groupnames || [], ', '), classLabel: safeJoin(classLabels, ', '), classAccent: classColor(teacherId), teacherLabel });
      }
    }
    for (const items of grid.values()) items.sort((a, b) => String(a.subject).localeCompare(String(b.subject), 'pl'));
    return grid;
  }

  function rerender() {
    if (!appData) return;
    const { periods } = appData;
    const weekFilter = el.weekSelect.value;

    if (activePanel === 'plan') {
      const ids = getSelectedClassIds();
      if (!ids.length) {
        el.schedule.innerHTML = `<div class="scheduleEmpty"><strong>${t('empty.noclass')}</strong></div>`;
        return;
      }
      const grids = new Map();
      const infos = ids.map((id) => {
        const row = classes.find((c) => String(c.id) === id);
        grids.set(id, buildGridForClass(id, weekFilter));
        return { id, label: row?.short || row?.name || id, accent: classColor(id) };
      });
      if (viewMode === 'week') {
        renderWeekSchedule(el.schedule, { periods, grids, infos, labelKey: 'classLabel', showClass: infos.length > 1 });
      } else {
        renderDaySchedule(el.schedule, { periods, grids, infos, dayIdx: getPlanDayIdx(), labelKey: 'classLabel', showClass: infos.length > 1 });
      }
    }

    if (activePanel === 'teachers') {
      const ids = getSelectedTeacherIds();
      if (!ids.length) {
        el.teacherSchedule.innerHTML = `<div class="scheduleEmpty"><strong>${t('empty.noteacher')}</strong></div>`;
        return;
      }
      const grids = new Map();
      const infos = ids.map((id) => {
        const row = teachers.find((tr) => String(tr.id) === id);
        grids.set(id, buildGridForTeacher(id, weekFilter));
        return { id, label: row?.short || row?.name || id, accent: classColor(id) };
      });
      renderDaySchedule(el.teacherSchedule, { periods, grids, infos, dayIdx: getTeacherDayIdx(), labelKey: 'classLabel', showClass: infos.length > 1 });
    }

    if (nowPeriodTimer) clearInterval(nowPeriodTimer);
    nowPeriodTimer = setInterval(() => {
      if (isRealToday(getPlanDayIdx()) || isRealToday(getTeacherDayIdx())) onRerender?.();
    }, 60000);
  }

  onRerender = rerender;

  el.selectAllBtn.onclick = () => {
    el.classPicker.querySelectorAll('.classChip').forEach((b) => { b.classList.add('classChip--on'); b.setAttribute('aria-pressed', 'true'); });
    saveSelectedClasses(); rerender();
  };
  el.clearAllBtn.onclick = () => {
    el.classPicker.querySelectorAll('.classChip').forEach((b) => { b.classList.remove('classChip--on'); b.setAttribute('aria-pressed', 'false'); });
    saveSelectedClasses(); rerender();
  };
  el.selectAllTeachersBtn.onclick = () => {
    el.teacherPicker.querySelectorAll('.classChip').forEach((b) => { b.classList.add('classChip--on'); b.setAttribute('aria-pressed', 'true'); });
    saveSelectedTeachers(); rerender();
  };
  el.clearAllTeachersBtn.onclick = () => {
    el.teacherPicker.querySelectorAll('.classChip').forEach((b) => { b.classList.remove('classChip--on'); b.setAttribute('aria-pressed', 'false'); });
    saveSelectedTeachers(); rerender();
  };

  el.weekSelect.onchange = rerender;
  const onDayChange = (fromPlan) => {
    const val = fromPlan ? el.daySelect.value : el.teacherDaySelect.value;
    el.daySelect.value = val;
    el.teacherDaySelect.value = val;
    localStorage.setItem(STORAGE_DAY, val);
    const planDate = getDateForDayIdx(Number(val));
    if (substCache.has(planDate)) applySubstToPlan(planDate, substCache.get(planDate));
    else if (appData) appData.substByClass = null;
    rerender();
  };
  el.daySelect.onchange = () => onDayChange(true);
  el.teacherDaySelect.onchange = () => onDayChange(false);

  await loadSubstitutions(el.substDate.value);
  rerender();
  setPill('ok', 'status.ok');
}

// ─── Chat swipe (Fun panel) ───────────────────────────────────────────────────
function initChatSwipe() {
  const track = document.getElementById('chatSwipeTrack');
  const dotsContainer = document.getElementById('chatSwipeDots');
  if (!track) return;
  const cards = track.querySelectorAll('.chatSwipeCard');
  const total = cards.length;
  let idx = 0;

  function updateDots() {
    if (!dotsContainer) return;
    dotsContainer.querySelectorAll('.chatSwipeDot').forEach((d, i) => {
      d.classList.toggle('chatSwipeDot--active', i === idx);
    });
  }

  function goTo(i) {
    idx = Math.max(0, Math.min(total - 1, i));
    track.style.transform = `translateX(-${idx * 100}%)`;
    updateDots();
  }

  let startX = 0;
  track.parentElement.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.parentElement.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < 40) return;
    goTo(dx < 0 ? idx + 1 : idx - 1);
  }, { passive: true });
  track.parentElement.addEventListener('mousedown', (e) => { startX = e.clientX; });
  track.parentElement.addEventListener('mouseup', (e) => {
    const dx = e.clientX - startX;
    if (Math.abs(dx) < 40) return;
    goTo(dx < 0 ? idx + 1 : idx - 1);
  });
}

// ─── Gmail helper ─────────────────────────────────────────────────────────────
function openGmailHomeworkRequest() {
  const subject = 'Prośba o dostęp - grupa nieobecni 5A';
  const body = `Cześć!\n\nProszę o dostęp do grupy WhatsApp dla nieobecnych z lekcji.\n\nImię i nazwisko: \nKlasa: 5A\n\nPozdrawiam`;
  const url = 'https://mail.google.com/mail/?view=cm&fs=1'
    + `&to=${encodeURIComponent(CREATOR_EMAIL)}`
    + `&su=${encodeURIComponent(subject)}`
    + `&body=${encodeURIComponent(body)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ─── UI init ──────────────────────────────────────────────────────────────────
function initUI() {
  // Language switcher
  document.querySelectorAll('.langBtn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      // Re-init day selects with new language
      initDaySelects();
      onRerender?.();
    });
  });
  // Apply saved language
  setLang(currentLang);

  initDaySelects();
  renderBookmarksList();

  document.getElementById('homeworkEmailBtn')?.addEventListener('click', openGmailHomeworkRequest);
  el.welcomeGuideBtn?.addEventListener('click', () => dismissWelcome(true));
  el.welcomeSkipBtn?.addEventListener('click', () => dismissWelcome(false));
  el.guideToPlanBtn?.addEventListener('click', () => switchPanel('plan'));

  // Nav buttons
  document.querySelectorAll('.mainNav__btn[data-panel]').forEach((btn) => {
    btn.addEventListener('click', () => switchPanel(btn.dataset.panel));
  });

  switchPanel('plan');
  if (!showWelcomeIfNeeded()) {
    const savedPanel = localStorage.getItem(STORAGE_PANEL);
    if (savedPanel && el.panels[savedPanel]) switchPanel(savedPanel);
  }

  const savedView = localStorage.getItem(STORAGE_VIEW);
  if (savedView) applyViewMode(savedView);
  document.querySelectorAll('.seg__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyViewMode(btn.dataset.view);
      localStorage.setItem(STORAGE_VIEW, viewMode);
      onRerender?.();
    });
  });

  el.searchInput?.addEventListener('input', () => {
    searchQuery = el.searchInput.value;
    el.searchClear.hidden = !searchQuery;
    onRerender?.();
  });
  el.searchClear?.addEventListener('click', () => {
    el.searchInput.value = '';
    searchQuery = '';
    el.searchClear.hidden = true;
    onRerender?.();
  });

  el.substDate?.addEventListener('change', () => loadSubstitutions(el.substDate.value));

  initChatSwipe();
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
initUI();
startClock();
startServerStatusPolling();

el.reloadBtn?.addEventListener('click', () => {
  loadData().catch((e) => {
    setPill('err', 'status.err');
    showError(e);
  });
});

loadData().catch((e) => {
  setPill('err', 'status.err');
  showError(e);
});

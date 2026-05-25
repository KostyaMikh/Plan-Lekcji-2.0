const EDUPAGE_BASE = '/api/edupage';
const CREATOR_EMAIL = 'independent.k.d.mikhailov@gmail.com';
const STORAGE_CLASSES = 'plan-lekcji:classes';
const STORAGE_VIEW = 'plan-lekcji:view';
const STORAGE_DAY = 'plan-lekcji:day';
const STORAGE_PANEL = 'plan-lekcji:panel';

// ─── Translations (Polish only) ──────────────────────────────────────────────
const t = {
  'status.loading': 'Ładowanie',
  'status.ok': 'Gotowe',
  'status.err': 'Błąd',
  'label.classes': 'Klasy',
  'label.day': 'Dzień',
  'label.weekAB': 'Tydzień A / B',
  'btn.all': 'Wszystkie',
  'btn.clear': 'Wyczyść',
  'view.day': 'Dzień',
  'view.week': 'Tydzień',
  'week.all': 'Wszystkie',
  'week.a': 'Tydzień A',
  'week.b': 'Tydzień B',
  'server.online': 'Online',
  'server.offline': 'Offline',
  'server.checking': '…',
  'empty.noclass': 'Wybierz klasę',
  'empty.noresults': 'Brak wyników',
  'empty.nolessons': 'Brak lekcji',
  'search.placeholder': 'Szukaj: przedmiot, nauczyciel, sala, klasa…',
  'days': ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek'],
  'days.short': ['Pon', 'Wt', 'Śr', 'Czw', 'Pt'],
  'today': 'dziś',
  'now': 'TERAZ',
  'subst.badge': 'ZASTĘPSTWO',
  'footer.source': 'Źródło: EduPage GSA',
};

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
  selectAllBtn: document.getElementById('selectAllBtn'),
  clearAllBtn: document.getElementById('clearAllBtn'),
  weekSelect: document.getElementById('weekSelect'),
  daySelect: document.getElementById('daySelect'),
  dayPickWrap: document.getElementById('dayPickWrap'),
  reloadBtn: document.getElementById('reloadBtn'),
  schedule: document.getElementById('schedule'),
  schoolName: document.getElementById('schoolName'),
  metaLine: document.getElementById('metaLine'),
  statusPill: document.getElementById('statusPill'),
  errorBox: document.getElementById('errorBox'),
  dateTime: document.getElementById('dateTime'),
  searchInput: document.getElementById('searchInput'),
  searchClear: document.getElementById('searchClear'),
  serverStatus: document.getElementById('serverStatus'),
  panels: {
    plan: document.getElementById('panelPlan'),
    contact: document.getElementById('panelContact'),
  },
};

let viewMode = 'today';
let activePanel = 'plan';
let onRerender = null;
let searchQuery = '';
let appData = null;
let nowPeriodTimer = null;
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
    statusEl.querySelector('.serverStatus__label').textContent = t[ok ? 'server.online' : 'server.offline'];
  } catch {
    statusEl.className = 'serverStatus serverStatus--offline';
    statusEl.querySelector('.serverStatus__label').textContent = t['server.offline'];
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

function getSelectedClassIds() {
  return [...el.classPicker.querySelectorAll('.classChip--on')].map((b) => b.dataset.id);
}

function saveSelectedClasses() {
  localStorage.setItem(STORAGE_CLASSES, JSON.stringify(getSelectedClassIds()));
}

function matchesSearch(item, q) {
  if (!q) return true;
  const hay = [item.subject, item.teachers, item.rooms, item.group, item.classLabel]
    .filter(Boolean).join(' ').toLowerCase();
  return hay.includes(q);
}

// ─── Clock & pill ────────────────────────────────────────────────────────────
function startClock() {
  const tick = () => {
    const d = new Date();
    el.dateTime.textContent = mobileMq.matches
      ? d.toLocaleString('pl-PL', { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
      : d.toLocaleString('pl-PL', { weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };
  tick();
  setInterval(tick, 1000);
  mobileMq.addEventListener('change', tick);
}

function setPill(kind, textKey) {
  el.statusPill.className = `pill pill--${kind}`;
  el.statusPill.textContent = t[textKey];
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
  const classChip = showClass && item.classLabel
    ? `<span class="lesson__class" style="--chip:${classColor(item.classid)}">${escapeHTML(item.classLabel)}</span>`
    : '';

  const badges = [];
  if (isNow) badges.push(`<span class="lesson__badge lesson__badge--now">${t['now']}</span>`);
  if (item.isSubst) badges.push(`<span class="lesson__badge lesson__badge--subst">${t['subst.badge']}</span>`);

  return `
    <div class="lesson lesson--${subj.theme} ${isNow ? 'lesson--now' : ''}" style="--accent:${accent}; --accent-bg:${bg}">
      <div class="lesson__bar"></div>
      ${lessonFlairHTML(subj.flair)}
      <div class="lesson__main">
        <div class="lesson__iconWrap">
          <span class="lesson__icon">${subj.icon}</span>
        </div>
        <div class="lesson__body">
          <div class="lesson__head">
            <div class="lesson__titleRow">
              <div class="lesson__subject">${escapeHTML(item.subject)}</div>
              <span class="lesson__tag">${subj.tag}</span>
              ${badges.join('')}
            </div>
            ${classChip}
          </div>
          <div class="lesson__meta">
            ${item.teachers ? `<div class="metaRow ${item.isSubst ? 'metaRow--subst' : ''}"><i class="metaRow__icon metaRow__icon--teacher"></i>${escapeHTML(item.teachers)}</div>` : ''}
            ${item.rooms ? `<div class="metaRow"><i class="metaRow__icon metaRow__icon--room"></i>${escapeHTML(item.rooms)}</div>` : ''}
            ${item.group ? `<div class="metaRow"><i class="metaRow__icon metaRow__icon--group"></i>${escapeHTML(item.group)}</div>` : ''}
          </div>
        </div>
      </div>
    </div>`;
}

// ─── Panel switching ─────────────────────────────────────────────────────────
function switchPanel(panelName) {
  activePanel = panelName;
  localStorage.setItem(STORAGE_PANEL, panelName);

  document.querySelectorAll('.mainNav__btn').forEach((btn) => {
    btn.classList.toggle('mainNav__btn--active', btn.dataset.panel === panelName);
  });

  Object.entries(el.panels).forEach(([name, panel]) => {
    if (panel) panel.hidden = name !== panelName;
  });
}

// ─── Init ────────────────────────────────────────────────────────────────────
async function init() {
  startClock();
  startServerStatusPolling();

  // Panel switching
  document.querySelectorAll('.mainNav__btn').forEach((btn) => {
    btn.addEventListener('click', () => switchPanel(btn.dataset.panel));
  });

  // Restore last panel
  const savedPanel = localStorage.getItem(STORAGE_PANEL);
  if (savedPanel && el.panels[savedPanel]) {
    switchPanel(savedPanel);
  }

  // Load timetable data
  try {
    setPill('loading', 'status.loading');
    const data = await rpc('/timetable/', 'regulartt', []);
    appData = processData(data);
    renderClassPicker(appData.classes);
    renderSchedule();
    setPill('ok', 'status.ok');
  } catch (err) {
    setPill('err', 'status.err');
    showError(err);
  }
}

function processData(data) {
  // Process EduPage data structure
  const tables = data?.r?.tables || [];
  const classes = getTableRows(tables, 'classes');
  const teachers = getTableRows(tables, 'teachers');
  const classrooms = getTableRows(tables, 'classrooms');
  const subjects = getTableRows(tables, 'subjects');
  const periods = getTableRows(tables, 'periods');
  const cards = data?.r?.ttitems || [];

  return { classes, teachers, classrooms, subjects, periods, cards, tables };
}

function renderClassPicker(classes) {
  const saved = JSON.parse(localStorage.getItem(STORAGE_CLASSES) || '[]');

  el.classPicker.innerHTML = classes.map((cls) => {
    const isOn = saved.includes(String(cls.id));
    const color = classColor(cls.id);
    return `<button type="button" class="classChip ${isOn ? 'classChip--on' : ''}" 
      data-id="${cls.id}" style="--chip:${color}" aria-pressed="${isOn}">${escapeHTML(cls.short || cls.name)}</button>`;
  }).join('');

  el.classPicker.querySelectorAll('.classChip').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('classChip--on');
      btn.setAttribute('aria-pressed', btn.classList.contains('classChip--on'));
      saveSelectedClasses();
      renderSchedule();
    });
  });

  el.selectAllBtn.addEventListener('click', () => {
    el.classPicker.querySelectorAll('.classChip').forEach((b) => {
      b.classList.add('classChip--on');
      b.setAttribute('aria-pressed', 'true');
    });
    saveSelectedClasses();
    renderSchedule();
  });

  el.clearAllBtn.addEventListener('click', () => {
    el.classPicker.querySelectorAll('.classChip').forEach((b) => {
      b.classList.remove('classChip--on');
      b.setAttribute('aria-pressed', 'false');
    });
    saveSelectedClasses();
    renderSchedule();
  });
}

function renderSchedule() {
  const selectedIds = getSelectedClassIds();
  if (!selectedIds.length) {
    el.schedule.innerHTML = `<div class="scheduleEmpty"><strong>${t['empty.noclass']}</strong></div>`;
    return;
  }

  // Render schedule based on selected classes
  el.schedule.innerHTML = '<div class="scheduleEmpty"><strong>Plan lekcji</strong>Funkcja renderowania planu będzie dodana</div>';
}

// Start app
init();

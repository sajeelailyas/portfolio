// --- Nav: mobile menu toggle ---
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

// --- Footer year ---
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// --- Theme toggle (manual) ---
// We use the HTML element's data-theme attribute: <html data-theme="light"> or "dark"
const themeToggle = document.getElementById('themeToggle');
const htmlEl = document.documentElement;

function applyTheme(mode) {
  // mode = 'dark' or 'light'
  htmlEl.setAttribute('data-theme', mode);
  localStorage.setItem('site-theme', mode);
  if (themeToggle) themeToggle.textContent = mode === 'dark' ? '🌙' : '☀️';
}

// init theme: prefer saved, else system preference, else default 'dark'
const saved = localStorage.getItem('site-theme');
if (saved === 'light' || saved === 'dark') {
  applyTheme(saved);
} else {
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(prefersLight ? 'light' : 'dark');
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = htmlEl.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    applyTheme(current === 'light' ? 'dark' : 'light');
  });
}

// --- Chip filter (Skills) ---
const chipSearch = document.getElementById('chipSearch');
if (chipSearch) {
  chipSearch.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    const chips = document.querySelectorAll('#skills .chip');
    chips.forEach(ch => {
      const text = (ch.textContent || '').toLowerCase();
      ch.style.display = text.includes(q) || !q ? '' : 'none';
    });
  });
}

// --- About details modal ---
document.querySelectorAll('[data-open]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-open');
    const dlg = document.getElementById(id);
    if (dlg && typeof dlg.showModal === 'function') dlg.showModal();
  });
});

// --- Projects modal content ---
const projectModal = document.getElementById('projectModal');
const titleEl = document.getElementById('projectTitle');
const descEl = document.getElementById('projectDesc');

const projectData = {
  'AutoVisionHub': 'An AI-based automotive marketplace and community platform with AR visualization, AI chatbot, and marketplace features. Stack: Flutter • Firebase • AI services.',
  'Budget Tracker': 'A Java OOP desktop app to manage income/expenses and calculate remaining balance.',
  'EmotiCam': 'Real-time app that detects facial expressions via webcam and generates emoticons. Built with Python + OpenCV.',
  'Eventify': 'Online platform for booking event decoration services using HTML, CSS, and JS.',
  'Blood Donation System': 'Hybrid system using SQL + MongoDB to manage donors, recipients, inventory, and transfusions.'
};

document.querySelectorAll('.chip.project').forEach(chip => {
  chip.addEventListener('click', () => {
    const key = chip.getAttribute('data-project');
    if (!key || !projectModal) return;
    titleEl.textContent = key;
    descEl.textContent = projectData[key] || 'Project details coming soon.';
    if (typeof projectModal.showModal === 'function') projectModal.showModal();
  });
});

// --- Close buttons for dialogs ---
document.querySelectorAll('dialog [data-close]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const dlg = e.target.closest('dialog');
    if (dlg) dlg.close();
  });
});

// --- Contact form (dummy local capture) ---
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
if (form && msg) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = 'Thanks! Your message has been captured locally.';
    form.reset();
  });
}

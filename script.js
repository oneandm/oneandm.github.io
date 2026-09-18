const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

// Load the premium visual layer without mixing it into the editable base stylesheet.
const premium = document.createElement('link');
premium.rel = 'stylesheet';
premium.href = 'premium.css';
document.head.appendChild(premium);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
qsa('.reveal').forEach((element) => observer.observe(element));

const sections = qsa('main section[id]');
const navLinks = qsa('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => sectionObserver.observe(section));

const mobileMenu = qs('#mobileMenu');
qs('#menuToggle').addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  qs('#menuToggle').setAttribute('aria-expanded', String(open));
});
qsa('.mobile-menu a').forEach((link) => link.addEventListener('click', () => mobileMenu.classList.remove('open')));

qs('#themeToggle').addEventListener('click', () => document.body.classList.toggle('light-theme'));

const soundToggle = qs('#soundToggle');
const soundIcon = qs('#soundIcon');
const audio = new Audio();
audio.loop = true;
// Isi URL file audio kamu di sini, contoh: audio.src = 'assets/music.mp3';
soundToggle.addEventListener('click', () => {
  if (!audio.src) { soundIcon.textContent = '♪'; soundToggle.title = 'Tambahkan URL audio di script.js'; return; }
  if (audio.paused) { audio.play(); soundIcon.textContent = '♫'; } else { audio.pause(); soundIcon.textContent = '⌁'; }
});

let playing = false;
qs('#playButton').addEventListener('click', (event) => { playing = !playing; event.currentTarget.textContent = playing ? 'Ⅱ' : '▶'; });

const lightbox = qs('#lightbox');
qsa('.gallery-item').forEach((item) => item.addEventListener('click', () => {
  qs('#lightboxCaption').textContent = item.dataset.caption;
  const pseudo = getComputedStyle(item, ':before');
  qs('#lightboxImage').style.background = pseudo.background;
  lightbox.classList.add('open');
}));
qs('#lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.classList.remove('open'); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') lightbox.classList.remove('open'); });

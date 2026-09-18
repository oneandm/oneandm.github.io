const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

// Reveal elements when they enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.12 });
qsa('.reveal').forEach((element) => observer.observe(element));

// Keep the navigation state synced with the current section.
const sections = qsa('main section[id]');
const navLinks = qsa('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach((section) => sectionObserver.observe(section));

// Mobile navigation.
const mobileMenu = qs('#mobileMenu');
qs('#menuToggle').addEventListener('click', () => mobileMenu.classList.toggle('open'));
qsa('.mobile-menu a').forEach((link) => link.addEventListener('click', () => mobileMenu.classList.remove('open')));

// Light / dark appearance.
qs('#themeToggle').addEventListener('click', () => document.body.classList.toggle('light-theme'));

// The browser blocks audible autoplay, so this control starts the background audio after interaction.
const soundToggle = qs('#soundToggle');
const soundIcon = qs('#soundIcon');
const audio = new Audio();
audio.loop = true;
// Isi URL file audio kamu di sini, contoh: audio.src = 'assets/music.mp3';
soundToggle.addEventListener('click', () => {
  if (!audio.src) {
    soundIcon.textContent = '♪';
    soundToggle.title = 'Tambahkan URL audio di script.js';
    return;
  }
  if (audio.paused) { audio.play(); soundIcon.textContent = '♫'; } else { audio.pause(); soundIcon.textContent = '⌁'; }
});

// Small player interaction.
let playing = false;
qs('#playButton').addEventListener('click', (event) => {
  playing = !playing;
  event.currentTarget.textContent = playing ? 'Ⅱ' : '▶';
});

// Gallery preview.
const lightbox = qs('#lightbox');
qsa('.gallery-item').forEach((item) => item.addEventListener('click', () => {
  qs('#lightboxCaption').textContent = item.dataset.caption;
  qs('#lightboxImage').style.background = getComputedStyle(item, ':before').background;
  lightbox.classList.add('open');
}));
qs('#lightboxClose').addEventListener('click', () => lightbox.classList.remove('open'));
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.classList.remove('open'); });

// Theme toggle with persistence
(function () {
  const toggle = document.getElementById('themeToggle');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const saved = localStorage.getItem('theme');
  const initial = saved || (prefersLight ? 'light' : 'dark');
  if (initial === 'light') document.body.classList.add('light');
  toggle.textContent = document.body.classList.contains('light') ? '🌙' : '☀️';

  toggle.addEventListener('click', function () {
    document.body.classList.toggle('light');
    const mode = document.body.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
    toggle.textContent = mode === 'light' ? '🌙' : '☀️';
  });
})();

// Smooth scroll fallback for older browsers
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
})();

// Footer year
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();



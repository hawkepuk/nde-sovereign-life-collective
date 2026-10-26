(() => {
  'use strict';
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menuToggle && nav) {
    const closeMenu = () => { nav.classList.remove('is-open'); menuToggle.setAttribute('aria-expanded','false'); };
    menuToggle.addEventListener('click', () => {
      const next = menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(next));
      nav.classList.toggle('is-open', next);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    document.addEventListener('click', e => { if (!nav.contains(e.target) && !menuToggle.contains(e.target)) closeMenu(); });
    window.matchMedia('(min-width:1001px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
  }
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = String(new Date().getFullYear());
  const dialog = document.getElementById('image-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    const largeImage = dialog.querySelector('.lightbox-image');
    const caption = dialog.querySelector('.lightbox-caption');
    document.querySelectorAll('[data-lightbox-src]').forEach(button => button.addEventListener('click', () => {
      largeImage.src = button.dataset.lightboxSrc;
      largeImage.alt = button.dataset.lightboxAlt || 'Expanded concept illustration';
      caption.textContent = button.dataset.lightboxCaption || '';
      dialog.showModal();
    }));
    dialog.querySelector('[data-lightbox-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
    dialog.addEventListener('close', () => largeImage.removeAttribute('src'));
  }
})();
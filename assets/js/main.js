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

  // The Progress & Updates timeline is the source for the homepage ticker.
  // Static markup remains readable if a network request or JavaScript fails.
  const ticker = document.getElementById('latest-news-ticker');
  if (ticker) {
    const items = document.getElementById('news-ticker-items');
    const track = document.getElementById('news-ticker-track');
    const toggle = document.getElementById('news-ticker-toggle');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let paused = false;
    const setPause = next => {
      paused = next;
      ticker.dataset.paused = String(next);
      toggle.setAttribute('aria-pressed', String(next));
      toggle.setAttribute('aria-label', next ? 'Resume scrolling updates' : 'Pause scrolling updates');
      toggle.textContent = next ? 'Resume' : 'Pause';
    };
    toggle.addEventListener('click', () => setPause(!paused));
    const configureMotion = () => {
      track.querySelectorAll('[data-ticker-duplicate]').forEach(node => node.remove());
      ticker.classList.remove('is-ready');
      toggle.hidden = true;
      if (reducedMotion.matches || items.children.length < 2) return;
      const duplicate = items.cloneNode(true);
      duplicate.removeAttribute('id');
      duplicate.setAttribute('data-ticker-duplicate', '');
      duplicate.setAttribute('aria-hidden', 'true');
      duplicate.querySelectorAll('a').forEach(link => { link.tabIndex = -1; });
      track.append(duplicate);
      toggle.hidden = false;
      ticker.classList.add('is-ready');
      setPause(paused);
    };
    const syncHomepageNews = async () => {
      try {
        const response = await fetch('updates.html', {cache:'no-cache'});
        if (!response.ok) throw new Error('Could not read the progress timeline');
        const page = new DOMParser().parseFromString(await response.text(), 'text/html');
        const recent = Array.from(page.querySelectorAll('.milestone-timeline > .milestone-item'))
          .map(item => {
            const date = item.querySelector('.milestone-date time');
            const heading = item.querySelector('.milestone-panel h3');
            const description = item.querySelector('.milestone-panel p');
            if (!date || !heading) return null;
            return {
              date: date.getAttribute('datetime'),
              title: heading.textContent.trim(),
              summary: description ? description.textContent.trim() : '',
              url: 'updates.html#' + encodeURIComponent(item.id || 'milestones')
            };
          })
          .filter(entry => entry && /^\d{4}-\d{2}-\d{2}$/.test(entry.date))
          .sort((a,b) => b.date.localeCompare(a.date))
          .slice(0,4);
        if (!recent.length) return;
        const showDate = (iso, style) => new Intl.DateTimeFormat('en-US', {
          timeZone: 'UTC', month: style, day: 'numeric', year: 'numeric'
        }).format(new Date(iso + 'T12:00:00Z'));
        items.replaceChildren(...recent.map(entry => {
          const link = document.createElement('a');
          link.className = 'news-ticker-item';
          link.href = entry.url;
          const date = document.createElement('time');
          date.dateTime = entry.date;
          date.textContent = showDate(entry.date, 'short').toUpperCase();
          const title = document.createElement('span');
          title.textContent = entry.title;
          link.append(date,title);
          return link;
        }));
        // Also refresh the larger feature so it never contradicts the latest item.
        const latest = recent[0];
        const label = document.getElementById('homepage-latest-meta');
        const heading = document.getElementById('homepage-latest-title');
        const summary = document.getElementById('homepage-latest-summary');
        const link = document.getElementById('homepage-latest-link');
        if (label) label.textContent = 'LATEST FROM NSLC · ' + showDate(latest.date,'long').toUpperCase();
        if (heading) heading.textContent = latest.title;
        if (summary && latest.summary) summary.textContent = latest.summary;
        if (link) link.href = latest.url;
      } catch (error) {
        // Continue showing the static headlines and feature from the HTML.
      } finally {
        configureMotion();
      }
    };
    if (typeof reducedMotion.addEventListener === 'function') {
      reducedMotion.addEventListener('change',configureMotion);
    }
    // Start the ticker right away, using the built-in headlines.
    // Mobile browsers can delay loading updates.html or serving cached files;
    // the animation must never depend on that request finishing.
    configureMotion();
    syncHomepageNews();
  }
})();
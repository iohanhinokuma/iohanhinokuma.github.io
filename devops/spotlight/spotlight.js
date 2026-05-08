// Shared logic for all spotlight presentation pages.
// Each edition's spotlight.html just includes this file.

class SpotlightPresentation {
  constructor() {
    this.slides = [...document.querySelectorAll('.slide')];
    this.current = 0;
    this.timerSeconds = 0;
    this.timerRunning = false;
    this.timerInterval = null;

    this._buildSidebar();
    this._buildTabs();
    this._buildDots();
    this._goTo(0, false);
    this._bindEvents();
  }

  // ─── Sidebar ─────────────────────────────────────────────

  _buildSidebar() {
    const container = document.getElementById('sidebar-files');
    if (!container) return;
    container.innerHTML = '';

    // Collect sections preserving order of first appearance
    const sections = new Map();
    this.slides.forEach((slide, i) => {
      const section = slide.dataset.section ?? '';
      if (!sections.has(section)) sections.set(section, []);
      sections.get(section).push({ slide, i });
    });

    for (const [section, items] of sections) {
      if (section) {
        const h = document.createElement('div');
        h.className = 'sidebar-section-title';
        h.textContent = section;
        container.appendChild(h);
      }
      for (const { slide, i } of items) {
        const el = document.createElement('div');
        el.className = 'sidebar-file';
        el.dataset.idx = i;
        el.innerHTML =
          `<span class="file-icon">${slide.dataset.icon ?? '📄'}</span>` +
          `<span class="file-name">${slide.dataset.file ?? `slide-${i + 1}`}</span>`;
        el.addEventListener('click', () => this._goTo(i));
        container.appendChild(el);
      }
    }
  }

  // ─── Tabs ─────────────────────────────────────────────────

  _buildTabs() {
    const container = document.getElementById('tabbar');
    if (!container) return;
    container.innerHTML = '';

    this.slides.forEach((slide, i) => {
      const tab = document.createElement('div');
      tab.className = 'tab';
      tab.dataset.idx = i;
      tab.innerHTML =
        `<span>${slide.dataset.icon ?? '📄'}</span>` +
        `<span>${slide.dataset.file ?? `slide-${i + 1}`}</span>`;
      tab.addEventListener('click', () => this._goTo(i));
      container.appendChild(tab);
    });
  }

  // ─── Dots ─────────────────────────────────────────────────

  _buildDots() {
    const container = document.getElementById('nav-dots');
    if (!container) return;
    container.innerHTML = '';

    this.slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'nav-dot';
      dot.dataset.idx = i;
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => this._goTo(i));
      container.appendChild(dot);
    });
  }

  // ─── Navigate ─────────────────────────────────────────────

  _goTo(n, animate = true) {
    this.current = Math.max(0, Math.min(n, this.slides.length - 1));
    const slide = this.slides[this.current];

    // Slides
    this.slides.forEach((s, i) => s.classList.toggle('active', i === this.current));

    // Sidebar
    document.querySelectorAll('.sidebar-file').forEach(el => {
      el.classList.toggle('active', Number(el.dataset.idx) === this.current);
    });
    const activeSF = document.querySelector('.sidebar-file.active');
    activeSF?.scrollIntoView({ block: 'nearest' });

    // Tabs
    document.querySelectorAll('.tab').forEach(el => {
      el.classList.toggle('active', Number(el.dataset.idx) === this.current);
    });
    document.querySelector('.tab.active')?.scrollIntoView({ inline: 'nearest', behavior: 'smooth' });

    // Dots
    document.querySelectorAll('.nav-dot').forEach(el => {
      el.classList.toggle('active', Number(el.dataset.idx) === this.current);
    });

    // Counter
    const counter = document.getElementById('nav-counter');
    if (counter) counter.textContent = `${this.current + 1} / ${this.slides.length}`;

    // Prev/next buttons
    const prev = document.getElementById('nav-prev');
    const next = document.getElementById('nav-next');
    if (prev) prev.disabled = this.current === 0;
    if (next) next.disabled = this.current === this.slides.length - 1;

    // Status bar
    const sfEl = document.getElementById('status-file');
    if (sfEl) sfEl.textContent = slide.dataset.file ?? '';
    const spEl = document.getElementById('status-presenter');
    if (spEl) {
      const p = slide.dataset.presenter;
      spEl.textContent = p ? `● host:${p}` : '';
    }
  }

  prev() { this._goTo(this.current - 1); }
  next() { this._goTo(this.current + 1); }

  // ─── Timer ────────────────────────────────────────────────

  toggleTimer() {
    if (this.timerRunning) {
      clearInterval(this.timerInterval);
      this.timerRunning = false;
    } else {
      this.timerRunning = true;
      this.timerInterval = setInterval(() => {
        this.timerSeconds++;
        this._renderTimer();
      }, 1000);
    }
    this._renderTimer();
    document.getElementById('timer-btn')?.classList.toggle('running', this.timerRunning);
  }

  _renderTimer() {
    const btn = document.getElementById('timer-btn');
    if (!btn) return;
    const m = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
    const s = String(this.timerSeconds % 60).padStart(2, '0');
    btn.textContent = `${this.timerRunning ? '▶' : '■'} ${m}:${s}`;
  }

  // ─── Fullscreen ───────────────────────────────────────────

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  // ─── Events ───────────────────────────────────────────────

  _bindEvents() {
    document.getElementById('nav-prev')?.addEventListener('click', () => this.prev());
    document.getElementById('nav-next')?.addEventListener('click', () => this.next());
    document.getElementById('timer-btn')?.addEventListener('click', () => this.toggleTimer());

    document.addEventListener('keydown', e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          e.preventDefault(); this.next(); break;
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault(); this.prev(); break;
        case 'f': case 'F': this.toggleFullscreen(); break;
        case 't': case 'T': this.toggleTimer(); break;
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.presentation = new SpotlightPresentation();
});

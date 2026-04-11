/* ═══════════════════════════════════════════════════
   SaaSNova Lead Popup, popup.js  v1.0
   Triggers 15s after page load. Once per session.
   Skips /contact and /newsletter pages.
   Submits to Netlify Forms as "popup-capture".
   ═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  const SKIP_PATHS  = ['/contact', '/newsletter', 'contact.html', 'newsletter.html'];
  const SESSION_KEY = 'sn_popup_shown';
  const DELAY_MS    = 15000;

  function shouldShow() {
    if (sessionStorage.getItem(SESSION_KEY)) return false;
    const path = window.location.pathname.toLowerCase() + window.location.href.toLowerCase();
    return !SKIP_PATHS.some(p => path.includes(p));
  }

  function buildPopup() {
    const root = document.getElementById('sn-popup-root');
    if (!root) return;

    root.innerHTML = `
      <div id="sn-popup-overlay" role="dialog" aria-modal="true" aria-label="Subscribe to The Nova Brief" aria-hidden="true">
        <div id="sn-popup-card">
          <button id="sn-popup-close" aria-label="Close popup">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
          </button>
          <div id="sn-popup-badge">The Nova Brief</div>
          <h2 id="sn-popup-headline">Get the cloud GTM intelligence your competitors are already reading.</h2>
          <p id="sn-popup-sub">Weekly co-sell tactics, field motion intelligence, and marketplace execution across AWS, Azure, and GCP. From Jen Dawson, practitioner-grade, not agency copy.</p>
          <div id="sn-popup-proof">
            <span>Trusted by 100+ ISVs</span>
            <span aria-hidden="true">·</span>
            <span>No spam. Unsubscribe anytime.</span>
          </div>
          <form id="sn-popup-form" name="popup-capture" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="popup-capture"/>
            <input type="text" name="bot-field" style="display:none" aria-hidden="true" tabindex="-1"/>
            <div id="sn-popup-fields">
              <input type="email" name="email" id="sn-popup-email" placeholder="Enter your work email" autocomplete="email" required style="width:100%"/>
            </div>
            <button type="submit" id="sn-popup-submit">
              Get The Nova Brief
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </form>
          <div id="sn-popup-success" style="display:none">
            <div id="sn-popup-success-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#34A853" stroke-width="2"/><path d="M9 16l5 5 9-9" stroke="#34A853" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <div id="sn-popup-success-text">You are subscribed.</div>
            <div id="sn-popup-success-sub">First issue coming soon. Check your inbox.</div>
          </div>
        </div>
      </div>`;

    attachEvents();
  }

  function attachEvents() {
    document.getElementById('sn-popup-overlay').addEventListener('click', e => { if (e.target.id === 'sn-popup-overlay') closePopup(); });
    document.getElementById('sn-popup-close').addEventListener('click', closePopup);
    document.getElementById('sn-popup-form').addEventListener('submit', handleSubmit);
    document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { closePopup(); document.removeEventListener('keydown', esc); } });
  }

  function openPopup() {
    const overlay = document.getElementById('sn-popup-overlay');
    if (!overlay) return;
    overlay.classList.add('sn-popup-visible');
    overlay.setAttribute('aria-hidden', 'false');
    sessionStorage.setItem(SESSION_KEY, '1');
    setTimeout(() => { const n = document.getElementById('sn-popup-name'); if (n) n.focus(); }, 300);
  }

  function closePopup() {
    const overlay = document.getElementById('sn-popup-overlay');
    if (!overlay) return;
    overlay.classList.remove('sn-popup-visible');
    overlay.classList.add('sn-popup-closing');
    setTimeout(() => { overlay.classList.remove('sn-popup-closing'); overlay.setAttribute('aria-hidden', 'true'); }, 280);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const btn  = document.getElementById('sn-popup-submit');
    btn.textContent = 'Subscribing…';
    btn.disabled = true;
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
    } catch (_) { /* fail silently, still show success */ }
    form.style.display = 'none';
    document.getElementById('sn-popup-success').style.display = 'flex';
    setTimeout(closePopup, 3200);
  }

  function init() {
    if (!shouldShow()) return;
    buildPopup();
    setTimeout(openPopup, DELAY_MS);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

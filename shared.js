/* SaaSNova V5, shared.js */

const CALENDLY = "https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03";

const SVG = {
  chevDown: `<svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2.5 4l3 3 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  services: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="var(--blue)" stroke-width="1.2"/><path d="M4.5 7h5M7 4.5v5" stroke="var(--blue)" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  ignite: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="var(--blue)" stroke-width="1.2"/><path d="M6 3.5v2.5l1.5 1.5" stroke="var(--blue)" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  supernova: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1l1 2.8 3 .3-2.1 2 .6 3L6 8 3.5 9.1l.6-3L2.1 4.1l3-.3z" stroke="var(--orange)" stroke-width="1.2" stroke-linejoin="round"/></svg>`,
  novax: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4.5" stroke="var(--pink)" stroke-width="1.2"/><path d="M4 6h4M6 4v4" stroke="var(--pink)" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  play: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1.5" width="10" height="7.5" rx="1.5" stroke="var(--blue)" stroke-width="1.1"/><path d="M4.5 4.5l3 1.5-3 1.5v-3z" fill="var(--blue)"/></svg>`,
  mail: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2.5" width="10" height="7" rx="1.5" stroke="var(--orange)" stroke-width="1.1"/><path d="M1 4.5l5 3 5-3" stroke="var(--orange)" stroke-width="1.1"/></svg>`,
  blog: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 3h8M2 5.5h6M2 8h4" stroke="var(--blue)" stroke-width="1.3" stroke-linecap="round"/></svg>`,
  casestudy: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.5 12.5h11M2.5 9.5l3-3 2 2 4-5M9 3.5h2.5v2.5" stroke="var(--blue)" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  webinar: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="2" width="10" height="7" rx="1.5" stroke="var(--blue)" stroke-width="1.1"/><path d="M1 4l5 3 5-3" stroke="var(--blue)" stroke-width="1.1"/></svg>`,
  bars: `<svg width="22" height="16" viewBox="0 0 22 16" fill="none"><rect width="22" height="2" rx="1" fill="#0F1923"/><rect y="7" width="16" height="2" rx="1" fill="#0F1923"/><rect y="14" width="22" height="2" rx="1" fill="#0F1923"/></svg>`,
};

const NAV_HTML = `
<style>
  /* Alignment Fix: Pushes links to the right */
  .nav-links { margin-left: auto; margin-right: 32px; }
  
  .nested-dropdown { position: relative; }
  .nested-trigger { display: flex; align-items: center; justify-content: space-between; width: 100%; cursor: default; font-weight: 600; }
  .nested-menu { position: absolute; left: 100%; top: -6px; min-width: 220px; background: #fff; border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); padding: 6px; opacity: 0; visibility: hidden; transform: translateX(-8px); transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s; z-index: 100; }
  .nested-dropdown:hover .nested-menu { opacity: 1; visibility: visible; transform: translateX(4px); }

  .mob-accordion { border-bottom: 1px solid rgba(0,0,0,0.04); }
  .mob-accordion-btn { display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 18px 20px; font-size: 18px; font-weight: 600; color: var(--text-primary); background: none; border: none; cursor: pointer; text-align: left; }
  .mob-accordion-btn svg { transition: transform 0.3s ease; color: var(--text-muted); }
  .mob-accordion-btn.open svg { transform: rotate(180deg); color: var(--blue); }
  .mob-accordion-content { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-in-out; background: #F8FAFC; }
  .mob-accordion-content.open { max-height: 1200px; }
  .mob-icon-wrap { display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 8px; margin-right: 12px; flex-shrink: 0; }
  .mob-sub-link { display: flex; align-items: center; padding: 14px 20px 14px 24px; color: var(--text-secondary); font-size: 16px; font-weight: 500; text-decoration: none; border-bottom: 1px solid rgba(0,0,0,0.03); }
  .mob-sub-link:last-child { border-bottom: none; }

  .mob-nested-btn { display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 14px 20px 14px 30px; font-size: 16px; font-weight: 600; color: var(--text-primary); background: none; border: none; border-bottom: 1px solid rgba(0,0,0,0.03); cursor: pointer; text-align: left; }
  .mob-nested-btn svg { transition: transform 0.3s ease; color: var(--text-muted); width: 14px; height: 14px;}
  .mob-nested-btn.open svg { transform: rotate(180deg); color: var(--blue); }
  .mob-nested-content { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-in-out; background: #F1F5F9; }
  .mob-nested-content.open { max-height: 600px; }
  .mob-nested-link { display: flex; align-items: center; padding: 12px 20px 12px 64px; color: var(--text-secondary); font-size: 15px; font-weight: 500; text-decoration: none; border-bottom: 1px solid rgba(0,0,0,0.03); }
  .mob-nested-link:last-child { border-bottom: none; }
</style>

<nav id="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo" aria-label="SaaSNova Home">
      <img src="images/logo-color.png" alt="SaaSNova" style="height:48px;width:auto;object-fit:contain"/>
    </a>
    <nav class="nav-links" aria-label="Main">
      <a href="index.html" class="nav-link">Home</a>
      
      <div class="dropdown">
        <button class="dropdown-trigger" aria-expanded="false" aria-haspopup="true">
          Services ${SVG.chevDown}
        </button>
        <div class="dropdown-menu" role="menu">
          <a href="services.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon">${SVG.services}</div> All Services
          </a>
          <a href="ignite.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#EBF5FF">${SVG.ignite}</div> <span>Ignite</span>
          </a>
          <a href="supernova.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#FEF3E8">${SVG.supernova}</div> <span>SuperNova</span>
          </a>
          <a href="novax.html" class="dropdown-item" role="menuitem">
            <div class="dropdown-item-icon" style="background:#FEE6F5">${SVG.novax}</div> <span>NovaX</span>
          </a>
        </div>
      </div>
      
      <a href="about.html" class="nav-link">About</a>
      
      <div class="dropdown">
        <a href="partners.html" class="dropdown-trigger" style="text-decoration:none;">
          Partners ${SVG.chevDown}
        </a>
        <div class="dropdown-menu" role="menu" style="min-width:200px; padding: 6px;">
          
          <a href="partners.html" class="dropdown-item" style="font-weight:700; color:var(--blue);">
            <div class="dropdown-item-icon" style="background:transparent;"><img src="images/partner-icon.png" alt="All Partners" style="width:18px;height:18px;object-fit:contain;"/></div> All Partners
          </a>
          <hr style="border:none;border-top:1px solid var(--border-light);margin:4px 0"/>
          
          <div class="nested-dropdown">
            <div class="dropdown-item nested-trigger">
              3PI <svg width="10" height="10" viewBox="0 0 11 11" fill="none" style="transform: rotate(-90deg); color: var(--text-muted, #888);"><path d="M2.5 4l3 3 3-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </div>
            <div class="nested-menu">
              <a href="partner-saasify.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-item-icon" style="background:transparent;"><img src="images/saasify-logo.png" alt="SaaSify" style="width:18px;height:18px;object-fit:contain;border-radius:3px;"/></div> SaaSify
              </a>
              <a href="partner-workspan.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-item-icon" style="background:transparent;"><img src="images/workspan-logo.jpeg" alt="Workspan" style="width:18px;height:18px;object-fit:contain;border-radius:3px;"/></div> Workspan
              </a>
              <a href="partner-labra.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-item-icon" style="background:transparent;"><img src="images/labra-logo.png" alt="Labra" style="width:18px;height:18px;object-fit:contain;border-radius:3px;"/></div> Labra
              </a>
              <a href="partner-tackle.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-item-icon" style="background:transparent;"><img src="images/tackle-logo.png" alt="Tackle.io" style="width:18px;height:18px;object-fit:contain;border-radius:3px;"/></div> Tackle.io
              </a>
            </div>
          </div>

          <div class="nested-dropdown">
            <div class="dropdown-item nested-trigger">
              SI / GSI <svg width="10" height="10" viewBox="0 0 11 11" fill="none" style="transform: rotate(-90deg); color: var(--text-muted, #888);"><path d="M2.5 4l3 3 3-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </div>
            <div class="nested-menu">
              <a href="partner-rysun.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-item-icon" style="background:transparent;"><img src="images/Rysun_High_Res_Logo.png" alt="Rysun" style="width:18px;height:18px;object-fit:contain;border-radius:3px;"/></div> Rysun
              </a>
              <a href="partner-pronix.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-item-icon" style="background:transparent;"><img src="images/pronix_inc_logo.jpeg" alt="Pronix" style="width:18px;height:18px;object-fit:contain;border-radius:3px;"/></div> Pronix
              </a>
            </div>
          </div>

          <div class="nested-dropdown">
            <div class="dropdown-item nested-trigger">
              Distributors <svg width="10" height="10" viewBox="0 0 11 11" fill="none" style="transform: rotate(-90deg); color: var(--text-muted, #888);"><path d="M2.5 4l3 3 3-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
            </div>
            <div class="nested-menu">
              <a href="partner-redington.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-item-icon" style="background:transparent;"><img src="images/redington-logo.png" alt="Redington" style="width:18px;height:18px;object-fit:contain;border-radius:3px;"/></div> Redington
              </a>
              <a href="partner-ingram-micro.html" class="dropdown-item" role="menuitem">
                <div class="dropdown-item-icon" style="background:transparent;"><img src="images/Ingram_Micro_logo.jpg" alt="Ingram Micro" style="width:18px;height:18px;object-fit:contain;border-radius:3px;"/></div> Ingram Micro
              </a>
            </div>
          </div>

        </div>
      </div>

      <div class="dropdown">
        <button class="dropdown-trigger">Resources ${SVG.chevDown}</button>
        <div class="dropdown-menu" role="menu">
          <a href="blog.html" class="dropdown-item"><div class="dropdown-item-icon">${SVG.blog}</div>Blog</a>
          <a href="results.html" class="dropdown-item"><div class="dropdown-item-icon">${SVG.casestudy}</div>Case Studies</a>
          <a href="show.html" class="dropdown-item"><div class="dropdown-item-icon" style="background:#EBF5FF">${SVG.play}</div>The Jen GTM Show</a>
          <a href="webinars.html" class="dropdown-item"><div class="dropdown-item-icon">${SVG.webinar}</div>Webinars</a>
          <a href="newsletter.html" class="dropdown-item"><div class="dropdown-item-icon" style="background:#FEF3E8">${SVG.mail}</div>The Nova Brief</a>
        </div>
      </div>
      <a href="contact.html" class="nav-link">Contact</a>
    </nav>
  
    <div class="nav-cta">
      <a href="${CALENDLY}" target="_blank" rel="noopener"
         class="btn btn-primary"
         style="padding:13px 28px;font-size:15px;font-weight:800;letter-spacing:-.01em;background-color:var(--pink);color:#fff;border-radius:12px;border:none;box-shadow: 0 8px 24px rgba(0, 139, 248, 0.4), 0 4px 12px rgba(250, 15, 156, 0.3);">
        Get Started
      </a>
    </div>

    <button id="hamburger" onclick="toggleMob()" aria-label="Open menu">${SVG.bars}</button>
  </div>
</nav>

<div id="mob-menu" role="dialog" aria-label="Mobile navigation" aria-hidden="true">
  <a href="index.html" class="mob-link" style="padding:18px 20px; font-weight:600; text-decoration:none; color:var(--text-primary); border-bottom:1px solid rgba(0,0,0,0.04); display:block;">Home</a>
  
  <div class="mob-accordion">
    <button class="mob-accordion-btn">Services ${SVG.chevDown}</button>
    <div class="mob-accordion-content">
      <a href="services.html" class="mob-sub-link" style="color:var(--blue);font-weight:700">
        <div class="mob-icon-wrap" style="background:#EBF5FF">${SVG.services}</div> All Services
      </a>
      <a href="ignite.html" class="mob-sub-link">
        <div class="mob-icon-wrap" style="background:#EBF5FF">${SVG.ignite}</div> Ignite
      </a>
      <a href="supernova.html" class="mob-sub-link">
        <div class="mob-icon-wrap" style="background:#FEF3E8">${SVG.supernova}</div> SuperNova
      </a>
      <a href="novax.html" class="mob-sub-link">
        <div class="mob-icon-wrap" style="background:#FEE6F5">${SVG.novax}</div> NovaX
      </a>
    </div>
  </div>
  
  <a href="about.html" class="mob-link" style="padding:18px 20px; font-weight:600; text-decoration:none; color:var(--text-primary); border-bottom:1px solid rgba(0,0,0,0.04); display:block;">About</a>
  
  <div class="mob-accordion">
    <button class="mob-accordion-btn">Partners ${SVG.chevDown}</button>
    <div class="mob-accordion-content">
      <a href="partners.html" class="mob-sub-link" style="color:var(--blue);font-weight:700">
        <div class="mob-icon-wrap" style="background:transparent;"><img src="images/partner-icon.png" alt="All Partners" style="width:20px;height:20px;object-fit:contain;"/></div> All Partners
      </a>
      
      <button class="mob-nested-btn">3PI ${SVG.chevDown}</button>
      <div class="mob-nested-content">
        <a href="partner-saasify.html" class="mob-nested-link"><img src="images/saasify-logo.png" alt="SaaSify" style="width:16px;height:16px;margin-right:12px;object-fit:contain;border-radius:2px;"/> SaaSify</a>
        <a href="partner-workspan.html" class="mob-nested-link"><img src="images/workspan-logo.jpeg" alt="Workspan" style="width:16px;height:16px;margin-right:12px;object-fit:contain;border-radius:2px;"/> Workspan</a>
        <a href="partner-labra.html" class="mob-nested-link"><img src="images/labra-logo.png" alt="Labra" style="width:16px;height:16px;margin-right:12px;object-fit:contain;border-radius:2px;"/> Labra</a>
        <a href="partner-tackle.html" class="mob-nested-link"><img src="images/tackle-logo.png" alt="Tackle.io" style="width:16px;height:16px;margin-right:12px;object-fit:contain;border-radius:2px;"/> Tackle.io</a>
      </div>
      
      <button class="mob-nested-btn">SI / GSI ${SVG.chevDown}</button>
      <div class="mob-nested-content">
        <a href="partner-rysun.html" class="mob-nested-link"><img src="images/Rysun_High_Res_Logo.png" alt="Rysun" style="width:16px;height:16px;margin-right:12px;object-fit:contain;border-radius:2px;"/> Rysun</a>
        <a href="partner-pronix.html" class="mob-nested-link"><img src="images/pronix_inc_logo.jpeg" alt="Pronix" style="width:16px;height:16px;margin-right:12px;object-fit:contain;border-radius:2px;"/> Pronix</a>
      </div>
      
      <button class="mob-nested-btn">Distributors ${SVG.chevDown}</button>
      <div class="mob-nested-content">
        <a href="partner-redington.html" class="mob-nested-link"><img src="images/redington-logo.png" alt="Redington" style="width:16px;height:16px;margin-right:12px;object-fit:contain;border-radius:2px;"/> Redington</a>
        <a href="partner-ingram-micro.html" class="mob-nested-link"><img src="images/Ingram_Micro_logo.jpg" alt="Ingram Micro" style="width:16px;height:16px;margin-right:12px;object-fit:contain;border-radius:2px;"/> Ingram Micro</a>
      </div>
    </div>
  </div>
  
  <div class="mob-accordion">
    <button class="mob-accordion-btn">Resources ${SVG.chevDown}</button>
    <div class="mob-accordion-content">
      <a href="results.html" class="mob-sub-link">
         <div class="mob-icon-wrap" style="background:#F0F4F8">${SVG.casestudy}</div> Case Studies
      </a>
      <a href="show.html" class="mob-sub-link">
         <div class="mob-icon-wrap" style="background:#EBF5FF">${SVG.play}</div> The Jen GTM Show
      </a>
      <a href="webinars.html" class="mob-sub-link">
         <div class="mob-icon-wrap" style="background:#F0F4F8">${SVG.webinar}</div> Webinars
      </a>
      <a href="blog.html" class="mob-sub-link">
         <div class="mob-icon-wrap" style="background:#F0F4F8">${SVG.blog}</div> Blog
      </a>
      <a href="newsletter.html" class="mob-sub-link">
         <div class="mob-icon-wrap" style="background:#FEF3E8">${SVG.mail}</div> The Nova Brief
      </a>
    </div>
  </div>
  
  <a href="contact.html" class="mob-link" style="padding:18px 20px; font-weight:600; text-decoration:none; color:var(--text-primary); border-bottom:none; display:block;">Contact</a>
  
  <div style="padding:24px 20px 80px">
    <a href="${CALENDLY}" target="_blank" rel="noopener"
       class="btn btn-primary w-full"
       style="justify-content:center;display:flex;font-weight:800;padding:14px;background-color:var(--pink);color:#fff;border-radius:12px;border:none;box-shadow: 0 8px 24px rgba(0, 139, 248, 0.4), 0 4px 12px rgba(250, 15, 156, 0.3);">
      Get Started
    </a>
  </div>
</div>`;

const FOOTER_HTML = `
<footer id="footer" role="contentinfo">
  <div class="container" style="padding-top:52px;padding-bottom:28px">
    <div class="footer-grid">
      <div>
        <div style="margin-bottom:14px">
          <img src="images/logo-white.png" alt="SaaSNova" style="height:34px;width:auto;object-fit:contain"/>
        </div>
        <p class="footer-tagline">The world's first GTM execution engine for SaaS ISVs scaling through AWS, Azure, and GCP Marketplace.</p>
        <div style="display:flex;gap:8px;margin-bottom:18px;flex-wrap:wrap">
          <div style="display:flex;align-items:center;gap:6px;padding:5px 10px;border-radius:7px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)">
            <img src="images/aws-logo.png" alt="AWS" style="height:14px;width:auto;object-fit:contain;filter:brightness(0) invert(1);opacity:.75"/>
          </div>
          <div style="display:flex;align-items:center;gap:6px;padding:5px 10px;border-radius:7px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)">
            <img src="images/azure-logo.png" alt="Azure" style="height:14px;width:auto;object-fit:contain;opacity:.8"/>
          </div>
          <div style="display:flex;align-items:center;gap:6px;padding:5px 10px;border-radius:7px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)">
            <img src="images/gcp-logo.png" alt="GCP" style="height:14px;width:auto;object-fit:contain;opacity:.8"/>
          </div>
        </div>
        <form name="footer-newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field" onsubmit="handleFooterNewsletter(event)" style="display:flex;gap:8px">
          <input type="hidden" name="form-name" value="footer-newsletter"/>
          <input type="text" name="bot-field" style="display:none" aria-hidden="true"/>
          <input type="email" name="email" placeholder="The Nova Brief" style="flex:1;padding:9px 12px;border:1px solid rgba(255,255,255,.12);border-radius:8px;font-size:13px;font-family:inherit;color:#fff;background:rgba(255,255,255,.06);outline:none;min-width:0"/>
          <button type="submit" class="btn btn-primary" style="padding:9px 14px;font-size:13px;flex-shrink:0">Join</button>
        </form>
      </div>
      <div>
        <div class="footer-col-title">Services</div>
        <a href="services.html" class="footer-link">All Services</a>
        <a href="ignite.html" class="footer-link">Ignite</a>
        <a href="supernova.html" class="footer-link">SuperNova</a>
        <a href="novax.html" class="footer-link">NovaX</a>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <a href="about.html" class="footer-link">About &amp; Team</a>
        <a href="results.html" class="footer-link">Case Studies</a>
        <a href="show.html" class="footer-link">The Jen GTM Show</a>
        <a href="partners.html" class="footer-link">Partners</a>
        <a href="contact.html" class="footer-link">Contact</a>
      </div>
      <div>
        <div class="footer-col-title">Resources</div>
        <a href="webinars.html" class="footer-link">Webinars</a>
        <a href="blog.html" class="footer-link">Blog</a>
        <a href="newsletter.html" class="footer-link">The Nova Brief</a>
      </div>
    </div>
    <hr class="divider-dark" style="margin:44px 0 22px"/>
    <div class="footer-bottom" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
      <span class="footer-legal" style="font-size:13px; color:rgba(255,255,255,.45);">&copy; 2026 SaaSNova. All rights reserved.</span>
      <div style="display:flex;gap:20px;flex-wrap:wrap">
        <a href="privacy.html" class="footer-legal" style="font-size:13px; color:rgba(255,255,255,.45); text-decoration:none;">Privacy Policy</a>
        <a href="terms.html" class="footer-legal" style="font-size:13px; color:rgba(255,255,255,.45); text-decoration:none;">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>
<div class="mobile-sticky-cta" style="position:fixed; bottom:0; left:0; right:0; padding:16px; background:#fff; box-shadow:0 -4px 20px rgba(0,0,0,0.1); z-index:100; display:none;">
  <a href="${CALENDLY}" target="_blank" rel="noopener" class="btn btn-primary w-full" style="justify-content:center;display:flex;font-weight:800;background-color:var(--pink);color:#fff;border-radius:12px;border:none;box-shadow: 0 -8px 24px rgba(0, 139, 248, 0.35), 0 -4px 12px rgba(250, 15, 156, 0.2);">Get Started</a>
</div>`;

const navEl = document.getElementById('nav-placeholder');
if(navEl) navEl.innerHTML = NAV_HTML;
const footerEl = document.getElementById('footer-placeholder');
if(footerEl) footerEl.innerHTML = FOOTER_HTML;

window.addEventListener('scroll', () => {
  document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

function toggleMob() {
  const menu = document.getElementById('mob-menu');
  const btn = document.getElementById('hamburger');
  const isOpen = menu.classList.toggle('open');
  menu.setAttribute('aria-hidden', !isOpen);
  btn.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

document.addEventListener('click', e => {
  if(e.target.closest('#mob-menu a')) {
    document.getElementById('mob-menu')?.classList.remove('open');
    document.body.style.overflow = '';
  }
  const mobBtn = e.target.closest('.mob-accordion-btn');
  if(mobBtn) {
    mobBtn.classList.toggle('open');
    mobBtn.nextElementSibling.classList.toggle('open');
  }
  const nestedBtn = e.target.closest('.mob-nested-btn');
  if(nestedBtn) {
    nestedBtn.classList.toggle('open');
    nestedBtn.nextElementSibling.classList.toggle('open');
  }
});

const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(l => {
  const href = l.getAttribute('href');
  if(href && href === page) l.classList.add('active');
});

const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.classList.add('visible');
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -20px 0px' });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
  
  if(window.innerWidth <= 640) {
      const stickyCta = document.querySelector('.mobile-sticky-cta');
      if(stickyCta) stickyCta.style.display = 'block';
  }
});
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

// ── DESKTOP NAV & GLOBAL STYLES ──
const NAV_STYLE_AND_DESKTOP = `
<style>
  /* Layout Fallbacks & Mobile Nav Fixes */
  .nav-inner { display: flex; align-items: center; justify-content: space-between; width: 100%; }
  #hamburger { display: none; background: transparent; border: none; cursor: pointer; padding: 8px; }
  
  @media (max-width: 1024px) {
    #nav .nav-links, #nav .nav-cta { display: none !important; }
    #nav #hamburger { 
      display: flex !important; 
      align-items: center !important; 
      justify-content: center !important; 
      width: 44px !important; 
      height: 44px !important; 
      background: #EEF2F8 !important; 
      border-radius: 8px !important;
      border: 1px solid #D0DAE6 !important;
      margin-left: auto !important;
    }
  }

  /* Alignment Fix: Pushes links to the right */
  .nav-links { margin-left: auto; margin-right: 32px; }
  
  .nested-dropdown { position: relative; }
  .nested-trigger { display: flex; align-items: center; justify-content: space-between; width: 100%; cursor: default; font-weight: 600; }
  .nested-menu { position: absolute; left: 100%; top: -6px; min-width: 220px; background: #fff; border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); padding: 6px; opacity: 0; visibility: hidden; transform: translateX(-8px); transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s; z-index: 100; }
  .nested-dropdown:hover .nested-menu { opacity: 1; visibility: visible; transform: translateX(4px); }

  /* ── NUCLEAR CACHE BUSTER FOR MOBILE MENU ── */
  #sn-mob-menu {
    display: none !important;
    position: fixed !important;
    top: 64px !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    background: #ffffff !important;
    z-index: 9999 !important;
    padding: 24px !important;
    flex-direction: column !important;
    gap: 2px !important;
    overflow-y: auto !important;
    border-top: 1px solid #E8EEF4 !important;
  }
  #sn-mob-menu.open {
    display: flex !important;
  }

  .mob-accordion { border-bottom: 1px solid rgba(0,0,0,0.04) !important; display: block !important; visibility: visible !important; }
  .mob-accordion-btn { display: flex !important; justify-content: space-between !important; align-items: center !important; width: 100% !important; padding: 18px 20px !important; font-size: 18px !important; font-weight: 600 !important; color: #0F1923 !important; background: none !important; border: none !important; cursor: pointer !important; text-align: left !important; visibility: visible !important; font-family: inherit !important;}
  .mob-accordion-btn svg { transition: transform 0.3s ease !important; color: #6B7E8F !important; }
  .mob-accordion-btn.open svg { transform: rotate(180deg) !important; color: #008BF8 !important; }
  .mob-accordion-content { max-height: 0 !important; overflow: hidden !important; transition: max-height 0.4s ease-in-out !important; background: #F8FAFC !important; display: block !important; }
  .mob-accordion-content.open { max-height: 1200px !important; }
  .mob-icon-wrap { display: inline-flex !important; align-items: center !important; justify-content: center !important; width: 26px !important; height: 26px !important; border-radius: 8px !important; margin-right: 12px !important; flex-shrink: 0 !important; }
  .mob-sub-link { display: flex !important; align-items: center !important; padding: 14px 20px 14px 24px !important; color: #3D4E5C !important; font-size: 16px !important; font-weight: 500 !important; text-decoration: none !important; border-bottom: 1px solid rgba(0,0,0,0.03) !important; }
  .mob-sub-link:last-child { border-bottom: none !important; }

  .mob-nested-btn { display: flex !important; justify-content: space-between !important; align-items: center !important; width: 100% !important; padding: 14px 20px 14px 30px !important; font-size: 16px !important; font-weight: 600 !important; color: #0F1923 !important; background: none !important; border: none !important; border-bottom: 1px solid rgba(0,0,0,0.03) !important; cursor: pointer !important; text-align: left !important; font-family: inherit !important; }
  .mob-nested-btn svg { transition: transform 0.3s ease !important; color: #6B7E8F !important; width: 14px !important; height: 14px !important;}
  .mob-nested-btn.open svg { transform: rotate(180deg) !important; color: #008BF8 !important; }
  .mob-nested-content { max-height: 0 !important; overflow: hidden !important; transition: max-height 0.4s ease-in-out !important; background: #F1F5F9 !important; display: block !important; }
  .mob-nested-content.open { max-height: 600px !important; }
  .mob-nested-link { display: flex !important; align-items: center !important; padding: 12px 20px 12px 64px !important; color: #3D4E5C !important; font-size: 15px !important; font-weight: 500 !important; text-decoration: none !important; border-bottom: 1px solid rgba(0,0,0,0.03) !important; }
  .mob-nested-link:last-child { border-bottom: none !important; }
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
`;

// ── MOBILE MENU (Injected separately to bypass HTML DOM issues) ──
const NAV_MOBILE = `
<div id="sn-mob-menu" role="dialog" aria-label="Mobile navigation" aria-hidden="true">
  <a href="index.html" class="mob-link" style="padding:18px 20px !important; font-weight:600 !important; text-decoration:none !important; color:#0F1923 !important; border-bottom:1px solid rgba(0,0,0,0.04) !important; display:block !important;">Home</a>
  
  <div class="mob-accordion">
    <button class="mob-accordion-btn">Services ${SVG.chevDown}</button>
    <div class="mob-accordion-content">
      <a href="services.html" class="mob-sub-link" style="color:#008BF8 !important; font-weight:700 !important;">
        <div class="mob-icon-wrap" style="background:#EBF5FF !important;">${SVG.services}</div> All Services
      </a>
      <a href="ignite.html" class="mob-sub-link">
        <div class="mob-icon-wrap" style="background:#EBF5FF !important;">${SVG.ignite}</div> Ignite
      </a>
      <a href="supernova.html" class="mob-sub-link">
        <div class="mob-icon-wrap" style="background:#FEF3E8 !important;">${SVG.supernova}</div> SuperNova
      </a>
      <a href="novax.html" class="mob-sub-link">
        <div class="mob-icon-wrap" style="background:#FEE6F5 !important;">${SVG.novax}</div> NovaX
      </a>
    </div>
  </div>
  
  <a href="about.html" class="mob-link" style="padding:18px 20px !important; font-weight:600 !important; text-decoration:none !important; color:#0F1923 !important; border-bottom:1px solid rgba(0,0,0,0.04) !important; display:block !important;">About</a>
  
  <div class="mob-accordion">
    <button class="mob-accordion-btn">Partners ${SVG.chevDown}</button>
    <div class="mob-accordion-content">
      <a href="partners.html" class="mob-sub-link" style="color:#008BF8 !important; font-weight:700 !important;">
        <div class="mob-icon-wrap" style="background:transparent !important;"><img src="images/partner-icon.png" alt="All Partners" style="width:20px;height:20px;object-fit:contain;"/></div> All Partners
      </a>
      
      <button class="mob-nested-btn">3PI ${SVG.chevDown}</button>
      <div class="mob-nested-content">
        <a href="partner-saasify.html" class="mob-nested-link"><img src="images/saasify-logo.png" alt="SaaSify" style="width:16px;height:16px;margin-right:12px;object-fit:contain;border-radius:2px;"/> SaaSify</a>
        <a href="partner-workspan.html" class="mob-nested-link"><img src="images/workspan-logo.jpeg" alt="Workspan" style="width:16px;height:16px;margin-right:12px;object-fit:contain;border-radius:2px;"/> Workspan</a>
        <a href="partner-labra.html" class="mob-nested-link"><img src="images/labra-logo.png" alt="Labra" style="width:16px;height:16px;margin-right:12px;object-fit:contain;border-radius:2px;"/> Labra</a>
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
         <div class="mob-icon-wrap" style="background:#F0F4F8 !important;">${SVG.casestudy}</div> Case Studies
      </a>
      <a href="show.html" class="mob-sub-link">
         <div class="mob-icon-wrap" style="background:#EBF5FF !important;">${SVG.play}</div> The Jen GTM Show
      </a>
      <a href="webinars.html" class="mob-sub-link">
         <div class="mob-icon-wrap" style="background:#F0F4F8 !important;">${SVG.webinar}</div> Webinars
      </a>
      <a href="blog.html" class="mob-sub-link">
         <div class="mob-icon-wrap" style="background:#F0F4F8 !important;">${SVG.blog}</div> Blog
      </a>
      <a href="newsletter.html" class="mob-sub-link">
         <div class="mob-icon-wrap" style="background:#FEF3E8 !important;">${SVG.mail}</div> The Nova Brief
      </a>
    </div>
  </div>
  
  <a href="contact.html" class="mob-link" style="padding:18px 20px !important; font-weight:600 !important; text-decoration:none !important; color:#0F1923 !important; border-bottom:none !important; display:block !important;">Contact</a>
  
  <div style="padding:24px 20px 80px !important; display:block !important;">
    <a href="${CALENDLY}" target="_blank" rel="noopener"
       class="btn btn-primary w-full"
       style="justify-content:center;display:flex;font-weight:800;padding:14px;background-color:#FA0F9C;color:#fff;border-radius:12px;border:none;box-shadow: 0 8px 24px rgba(0, 139, 248, 0.4), 0 4px 12px rgba(250, 15, 156, 0.3);">
      Get Started
    </a>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer id="footer" role="contentinfo">
  <div class="container" style="padding-top:64px;padding-bottom:32px">
    <div class="footer-grid">
      <div>
        <a href="index.html" aria-label="SaaSNova Home" style="display:inline-block;margin-bottom:16px;">
          <img src="images/logo-white.png" alt="SaaSNova" style="height:36px;width:auto;object-fit:contain"/>
        </a>
        <p class="footer-tagline" style="margin-bottom:24px">The world's first GTM execution engine for SaaS ISVs scaling through AWS, Azure, and GCP Marketplace.</p>
        
        <div style="display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap">
          <div style="display:flex;align-items:center;justify-content:center;padding:6px 12px;border-radius:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)">
            <img src="images/aws-logo.png" alt="AWS" style="height:14px;width:auto;object-fit:contain;filter:brightness(0) invert(1);opacity:.75"/>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;padding:6px 12px;border-radius:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)">
            <img src="images/azure-logo.png" alt="Azure" style="height:14px;width:auto;object-fit:contain;opacity:.8"/>
          </div>
          <div style="display:flex;align-items:center;justify-content:center;padding:6px 12px;border-radius:6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)">
            <img src="images/gcp-logo.png" alt="GCP" style="height:14px;width:auto;object-fit:contain;opacity:.8"/>
          </div>
        </div>

        <form name="footer-newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field" style="display:flex;gap:8px;margin-bottom:24px;max-width:320px">
          <input type="hidden" name="form-name" value="footer-newsletter"/>
          <input type="text" name="bot-field" style="display:none" aria-hidden="true"/>
          <input type="email" name="email" placeholder="The Nova Brief" required style="flex:1;padding:10px 14px;border:1px solid rgba(255,255,255,0.1);border-radius:8px;background:rgba(255,255,255,0.05);color:#fff;font-size:14px;outline:none;"/>
          <button type="submit" class="btn btn-primary" style="padding:10px 18px;font-size:14px;background:var(--pink, #FA0F9C);border:none;border-radius:8px;">Join</button>
        </form>

        <div style="display:flex;gap:16px;align-items:center;">
          <a href="#" style="color:#0A66C2;" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="#" style="color:#FF0000;" aria-label="YouTube">
            <svg width="26" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 6.186c-.23-.86-.908-1.538-1.768-1.768C18.254 4 12 4 12 4s-6.254 0-7.814.418c-.86.23-1.538.908-1.768 1.768C2 7.746 2 12 2 12s0 4.254.418 5.814c.23.86.908 1.538 1.768 1.768 1.56.418 7.814.418 7.814.418s6.254 0 7.814-.418c.86-.23 1.538-.908 1.768-1.768C22 16.254 22 12 22 12s0-4.254-.418-5.814zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/></svg>
          </a>
        </div>
      </div>
      
      <div>
        <div class="footer-col-title" style="letter-spacing:1px;font-size:12px;margin-bottom:20px;">SERVICES</div>
        <a href="services.html" class="footer-link">All Services</a>
        <a href="ignite.html" class="footer-link">Ignite</a>
        <a href="supernova.html" class="footer-link">SuperNova</a>
        <a href="novax.html" class="footer-link">NovaX</a>
      </div>
      
      <div>
        <div class="footer-col-title" style="letter-spacing:1px;font-size:12px;margin-bottom:20px;">COMPANY</div>
        <a href="about.html" class="footer-link">About &amp; Team</a>
        <a href="results.html" class="footer-link">Case Studies</a>
        <a href="show.html" class="footer-link">The Jen GTM Show</a>
        <a href="partners.html" class="footer-link">Partners</a>
        <a href="contact.html" class="footer-link">Contact</a>
      </div>
      
      <div>
        <div class="footer-col-title" style="letter-spacing:1px;font-size:12px;margin-bottom:20px;">RESOURCES</div>
        <a href="webinars.html" class="footer-link">Webinars</a>
        <a href="blog.html" class="footer-link">Blog</a>
        <a href="newsletter.html" class="footer-link">The Nova Brief</a>
        
        <div class="footer-col-title" style="letter-spacing:1px;font-size:12px;margin-top:40px;margin-bottom:20px;">CONTACT</div>
        <a href="mailto:jen@saasnova.ai" class="footer-link" style="text-transform:none;">jen@saasnova.ai</a>
        <a href="tel:+12017555369" class="footer-link" style="text-transform:none;">+1 (201) 755-5369</a>
        <a href="mailto:operations@saasnova.ai" class="footer-link" style="text-transform:none;">operations@saasnova.ai</a>
      </div>
    </div>
    
    <hr class="divider-dark" style="margin:48px 0 24px; border:none; height:1px; background:linear-gradient(90deg, #008BF8 0%, #FA0F9C 50%, rgba(255,255,255,0.05) 100%);"/>
    
    <div class="footer-bottom" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">
      <span class="footer-legal" style="font-size:14px;color:rgba(255,255,255,0.45);">&copy; 2026 SaaSNova. All rights reserved.</span>
      <div style="display:flex;gap:24px;flex-wrap:wrap">
        <a href="privacy.html" class="footer-legal" style="font-size:14px;color:rgba(255,255,255,0.45);text-decoration:none;">Privacy Policy</a>
        <a href="terms.html" class="footer-legal" style="font-size:14px;color:rgba(255,255,255,0.45);text-decoration:none;">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>
`;

// DOM Injections
const navEl = document.getElementById('nav-placeholder');
if(navEl) navEl.innerHTML = NAV_STYLE_AND_DESKTOP;

// CRITICAL FIX: Append the mobile menu directly to the BODY tag to completely bypass 
// any malformed or unclosed HTML tags (like <a> or <p>) located in index.html that were deleting <div> elements.
if (!document.getElementById('sn-mob-menu')) {
  document.body.insertAdjacentHTML('beforeend', NAV_MOBILE);
}

const footerEl = document.getElementById('footer-placeholder');
if(footerEl) footerEl.innerHTML = FOOTER_HTML;

// Navigation Scroll Effect
window.addEventListener('scroll', () => {
  document.getElementById('nav')?.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

// Mobile Menu Toggle
function toggleMob() {
  const menu = document.getElementById('sn-mob-menu');
  const btn = document.getElementById('hamburger');
  if(!menu) return;
  const isOpen = menu.classList.toggle('open');
  menu.setAttribute('aria-hidden', !isOpen);
  if(btn) btn.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Global Click Handlers
document.addEventListener('click', e => {
  if(e.target.closest('#sn-mob-menu a')) {
    document.getElementById('sn-mob-menu')?.classList.remove('open');
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

// Active Link Setup
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(l => {
  const href = l.getAttribute('href');
  if(href && href === page) l.classList.add('active');
});

// Intersection Observer for Reveal Animations
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.classList.add('visible');
      revObs.unobserve(e.target);
    }
  });
}, { threshold: 0.07, rootMargin: '0px 0px -20px 0px' });

// Scroll FAB Feature Implementation
function initScrollFab() {
  const fabHTML = `
    <style>
      .sn-scroll-fab {
        position: fixed; bottom: 30px; right: 30px; z-index: 99;
        display: flex; align-items: center; gap: 10px;
        background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(0, 0, 0, 0.05); padding: 8px 16px 8px 8px; border-radius: 40px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--text-primary); text-decoration: none;
      }
      .sn-scroll-fab:hover {
        transform: translateY(-4px); box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
        background: rgba(255, 255, 255, 0.95);
      }
      .sn-fab-icon {
        display: flex; align-items: center; justify-content: center;
        width: 32px; height: 32px; border-radius: 50%;
        background: linear-gradient(135deg, var(--blue, #008BF8), var(--pink, #FA0F9C));
        color: white; transition: transform 0.4s ease;
      }
      .sn-fab-label { font-size: 14px; font-weight: 600; white-space: nowrap; }
      .sn-fab-up .sn-fab-icon { transform: rotate(180deg); }
      
      /* Bulletproof Mobile Override for FAB */
      @media (max-width: 1024px) {
        #sn-scroll-fab {
          width: 50px !important;
          height: 50px !important;
          padding: 0 !important;
          border-radius: 50% !important;
          justify-content: center !important;
          bottom: 24px !important;
          right: 24px !important;
        }
        #sn-scroll-fab .sn-fab-label { 
          display: none !important; 
        }
        #sn-scroll-fab .sn-fab-icon {
          margin: 0 !important;
        }
      }
    </style>
    <button id="sn-scroll-fab" class="sn-scroll-fab" aria-label="Scroll down">
      <div class="sn-fab-icon">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <span class="sn-fab-label">Scroll Down</span>
    </button>
  `;
  document.body.insertAdjacentHTML('beforeend', fabHTML);

  const fab = document.getElementById('sn-scroll-fab');
  const label = fab.querySelector('.sn-fab-label');
  let isUp = false;

  function getSections() {
    return Array.from(document.querySelectorAll('section, footer')).filter(s => s.offsetHeight > 100);
  }

  fab.addEventListener('click', () => {
    if (isUp) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const sections = getSections();
      const scrollY = window.scrollY + window.innerHeight * 0.3; 
      let nextSectionIndex = -1;
      
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop > scrollY) {
          nextSectionIndex = i;
          break;
        }
      }

      if (nextSectionIndex !== -1) {
        sections[nextSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }
    }
  });

  function onScroll() {
    const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 150);

    if (isAtBottom && !isUp) {
      isUp = true;
      fab.classList.add('sn-fab-up');
      fab.setAttribute('aria-label', 'Back to top');
      label.textContent = 'Back to Top';
    } else if (!isAtBottom && isUp) {
      isUp = false;
      fab.classList.remove('sn-fab-up');
      fab.setAttribute('aria-label', 'Scroll down');
      label.textContent = 'Scroll Down';
    }
  }
  
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.reveal').forEach(el => revObs.observe(el));
  
  // Initialize the Scroll FAB
  initScrollFab();
});

/* ── NEWSLETTER INLINE FORM ── */
function handleNewsletterSubmit(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('[type="submit"]');
  if (btn) { btn.textContent = 'Subscribing...'; btn.disabled = true; }
  fetch('/', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams(new FormData(form)).toString()
  }).then(function(){
    form.style.display = 'none';
    var thanks = form.parentNode.querySelector('.newsletter-thanks');
    if (thanks) thanks.style.display = 'flex';
  }).catch(function(){
    if (btn) { btn.textContent = 'Try again'; btn.disabled = false; }
  });
}

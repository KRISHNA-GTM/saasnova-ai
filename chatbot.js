/* ═══════════════════════════════════════════════════
   SaaSNova Chatbot, OFFLINE / NO-API VERSION v2.1
   
   Works 100% on Netlify free. No API key. No server.
   Users tap preset question chips → instant answers.

   *NEW*: Auto-injects its HTML container.
   ═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  const CALENDLY = 'https://calendly.com/jen-saasnova/founder-strategy-session-scale-your-gtm-via-aws?month=2026-03';

  /* ─────────────────────────────────────────────────
     KNOWLEDGE BASE, Edit answers here in VS Code.
     q  = button label shown to user
     a  = HTML answer displayed in chat
     follow = array of topic IDs to show as next chips
     isBooking = true opens Calendly link
  ───────────────────────────────────────────────── */
  const KB = {
    welcome: "Hi! I'm the SaaSNova assistant. Ask me about our execution programs, pricing, or how to get started.",

    topics: [
      {
        id: 'whois',
        q: 'What is SaaSNova?',
        a: `<strong>SaaSNova</strong> is the world's first operator-led cloud marketplace GTM execution engine for SaaS ISVs scaling across AWS, Azure, and GCP.<br><br>
Founded by Jen Dawson, a 25+ year cloud GTM practitioner behind 100+ ISV activations including New Relic, Freshworks, Arctic Wolf, and Dataminr.<br><br>
<strong>The problem we solve:</strong> ISVs don't fail at listing. They fail at execution. You're listed, but cloud field teams don't respond, and the board sees no attributable pipeline.<br><br>
<strong>What SaaSNova does:</strong> We act as an extension of your team to activate field relationships, drive co-sell to closed-won, and deliver verified revenue evidence. Not advice. Execution.`,
        follow: ['programs','jen','clouds','booking']
      },
      {
        id: 'programs',
        q: 'What services do you offer?',
        a: `SaaSNova runs three core execution programs, tailored to your GTM maturity and cloud mix:<br><br>
<strong>Ignite (3 Months):</strong><br>For ISVs establishing their first cloud-attributable traction.<br><br>
<strong>SuperNova (4 Months):</strong><br>For global ISVs targeting US market entry and US-based co-sell revenue.<br><br>
<strong>NovaX (6 Months):</strong><br>For ISVs operationalizing and scaling multi-cloud co-sell (AWS, Azure, GCP).<br><br>
Every program is customized to your starting point and delivers board-ready GTM pipeline evidence.`,
        follow: ['ignite','supernova','novax','whichprogram']
      },
      {
        id: 'ignite',
        q: 'Tell me about Ignite',
        a: `<strong>SaaSNova Ignite (3 Months)</strong><br><br>
<strong>Ideal Stage:</strong> Pre-Series A &rarr; Series A. For ISVs launching, relaunching, or proving first attributable revenue.<br><br>
<strong>Core Outcomes:</strong><br>
• Your first cloud-attributable signal<br>
• Validated co-sell opportunities<br>
• PRM implementation & ACE hygiene<br>
• Board-ready GTM evidence report<br>
• Early proof points for ISV Accelerate readiness`,
        follow: ['supernova','novax','whichprogram','booking']
      },
      {
        id: 'supernova',
        q: 'Tell me about SuperNova',
        a: `<strong>SaaSNova SuperNova (4 Months)</strong><br><br>
<strong>Ideal Stage:</strong> Series A &rarr; Series B. For global APAC/EMEA ISVs entering the US market with cloud-attributed revenue goals.<br><br>
<strong>Core Outcomes:</strong><br>
• Verified US co-sell opportunities<br>
• US partner & Channel map (CPPO)<br>
• Executive-ready US GTM evidence package<br>
• 2-4X stronger US field engagement<br>
• 40-60% fewer US co-sell rejections`,
        follow: ['ignite','novax','whichprogram','booking']
      },
      {
        id: 'novax',
        q: 'Tell me about NovaX',
        a: `<strong>SaaSNova NovaX (6 Months)</strong><br><br>
<strong>Ideal Stage:</strong> Series B &rarr; Series C. For ISVs expanding beyond early traction into repeatable, multi-cloud revenue.<br><br>
<strong>Core Outcomes:</strong><br>
• Multi-cloud co-sell orchestration (AWS, Azure, GCP)<br>
• Partner-led pipeline activation (SIs/GSIs)<br>
• Scalable tagging and attribution model<br>
• PRM-powered partner lifecycle automation<br>
• Quarterly board performance reporting`,
        follow: ['ignite','supernova','whichprogram','booking']
      },
      {
        id: 'whichprogram',
        q: 'Which program is right for me?',
        a: `<strong>Choose Ignite if:</strong><br>
You are launching or need to establish your first cloud-attributable pipeline.<br><br>
<strong>Choose SuperNova if:</strong><br>
You are an international ISV penetrating the US market and need investor-grade US traction evidence.<br><br>
<strong>Choose NovaX if:</strong><br>
You are ready to operationalize co-sell across multiple clouds and require a dedicated, embedded execution team.<br><br>
The fastest way to confirm the right fit is to book a 30-minute discovery call with Jen Dawson.`,
        follow: ['booking','programs']
      },
      {
        id: 'pricing',
        q: 'How does pricing work?',
        a: `Pricing is based on your specific requirements, internal readiness, and eligibility. There is no standard rate card.<br><br>
Every engagement is scoped directly to your cloud mix and GTM stage.<br><br>
<strong>Two ways to proceed:</strong><br>
• Book a 30-min discovery call with Jen Dawson for a custom quote.<br>
• Request a private offer directly via AWS Marketplace (SaaSNova services can be procured via AWS).`,
        isBooking: true,
        follow: ['ignite','supernova','novax']
      },
      {
        id: 'cosell',
        q: 'What is co-sell?',
        a: `Co-sell is a joint sales motion where your ISV and a cloud provider's field team pursue a deal together.<br><br>
On <strong>AWS</strong> this runs through ACE.<br>
On <strong>Azure</strong> through the Partner Center co-sell portal.<br>
On <strong>GCP</strong> through Partner Advantage.<br><br>
Most ISVs file submissions that get ignored. SaaSNova structures submissions with the exact customer context, cloud consumption angle, and field messaging that makes hyperscaler AEs actually engage.`,
        follow: ['isvacc','programs','booking']
      },
      {
        id: 'isvacc',
        q: 'What is ISV Accelerate?',
        a: `ISV Accelerate is AWS's premium co-sell program. Accepted ISVs get direct support from AWS Partner Development Representatives (PDRs) and enhanced ACE visibility.<br><br>
<strong>To qualify you need:</strong><br>
• A software product listing on AWS Marketplace<br>
• AWS Select Partner Network tier or above<br>
• Active ACE co-sell submission history<br>
• AWS-integrated product architecture<br><br>
Most ISVs fail because they apply before establishing an ACE history. We generate the proof points required for ISV Accelerate progression.`,
        follow: ['cosell','programs','booking']
      },
      {
        id: 'boardreport',
        q: 'What is a board pipeline report?',
        a: `Every SaaSNova program delivers a board-ready pipeline report your leadership can present directly to investors. It includes:<br><br>
• <strong>Co-sell opportunity log:</strong> Submissions, stages, values, and assigned cloud reps.<br>
• <strong>WinWire record:</strong> Submitted wins documenting cloud involvement.<br>
• <strong>Field enablement log:</strong> Sessions run with cloud teams.<br>
• <strong>Revenue attribution summary:</strong> Hard data on cloud-influenced and partner-sourced deals.<br><br>
NovaX delivers this continually on a quarterly cadence.`,
        follow: ['programs','booking']
      },
      {
        id: 'jen',
        q: 'Who is Jen Dawson?',
        a: `Jen Dawson is the Founder and CEO of SaaSNova.<br><br>
She brings 25+ years of cloud GTM experience across AWS, Azure, and GCP, having built scalable co-sell programs and managed ISV Accelerate motions directly.<br><br>
She has personally activated over 100 ISVs including Arctic Wolf, Dataminr, Safe Security, and Freshworks.<br><br>
Unlike advisory firms, Jen and her team operate as embedded GTM executors alongside your own organization.`,
        follow: ['programs','booking']
      },
      {
        id: 'clouds',
        q: 'Which clouds do you cover?',
        a: `SaaSNova executes across all three major hyperscalers:<br><br>
• <strong>AWS:</strong> ACE optimization, ISV Accelerate, WinWires, PDM alignment.<br>
• <strong>Azure:</strong> IP co-sell, deal registration, Microsoft field enablement.<br>
• <strong>GCP:</strong> Partner Advantage activation, field engagement, pipeline attribution.<br><br>
NovaX handles multi-cloud orchestration across all three simultaneously.`,
        follow: ['cosell','programs','booking']
      },
      {
        id: 'proof',
        q: 'Do you have client results?',
        a: `Yes, we generate verifiable pipeline and alignment.<br><br>
<em>"Jen's GTM architecture fundamentally changed how Arctic Wolf engaged with AWS. The clarity and discipline she brought created alignment we rarely see."</em><br>
— John McElhone, Partner Development Manager, AWS<br><br>
<em>"The architecture gave Dataminr the credibility sellers and AWS senior leaders needed to lean in."</em><br>
— Fraser Charles, Senior Director Partner Ecosystems, Dataminr<br><br>
<em>"SaaSNova isn't a platform, they're the operator behind our AWS Marketplace success. They bring the GTM clarity no tool can provide."</em><br>
— Gary Cronk, Director Strategic Partners, Safe Security`,
        follow: ['programs','booking']
      },
      {
        id: 'booking',
        q: 'How do I book a call?',
        a: `You can book a 30-minute discovery call directly with Jen Dawson.<br><br>
On the call, Jen will:<br>
• Review your cloud mix and listing status<br>
• Identify exactly where your co-sell motion is stalling<br>
• Recommend the right program (Ignite, SuperNova, or NovaX)<br>
• Outline clear next steps for execution<br><br>
Jen reviews every submission personally.`,
        isBooking: true,
        follow: ['programs','jen']
      }
    ]
  };

  /* ── STATE ─────────────────────────────────────── */
  let isOpen   = false;
  let navDepth = 0;

  function findTopic(id) {
    return KB.topics.find(t => t.id === id);
  }

  /* ── BUILD DOM ──────────────────────────────────── */
  function buildChatbot() {
    // Automatically inject HTML root if it doesn't exist
    let root = document.getElementById('sn-chatbot-root');
    if (!root) {
      root = document.createElement('div');
      root.id = 'sn-chatbot-root';
      document.body.appendChild(root);
    }

    root.innerHTML = `
      <div id="sn-cb-launcher" role="button" tabindex="0" aria-label="Open chat">
        <div id="sn-cb-launcher-icon">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2C6.03 2 2 5.69 2 10.2c0 2.3 1.05 4.38 2.75 5.88L4 20l4.5-2.2c.8.23 1.63.35 2.5.35 4.97 0 9-3.69 9-8.2S15.97 2 11 2z" fill="white"/>
          </svg>
        </div>
        <div id="sn-cb-launcher-close" style="display:none">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="white" stroke-width="2.2" stroke-linecap="round"/>
          </svg>
        </div>
        <span id="sn-cb-badge">1</span>
      </div>

      <div id="sn-cb-window" aria-hidden="true" role="dialog" aria-label="SaaSNova assistant">
        <div id="sn-cb-header">
          <div id="sn-cb-header-left">
            <img src="images/jen-dp.jpg" alt="SaaSNova" id="sn-cb-avatar"
                 onerror="this.style.display='none'"/>
            <div>
              <div id="sn-cb-name">SaaSNova Assistant</div>
              <div id="sn-cb-status">
                <span id="sn-cb-dot"></span> Online now
              </div>
            </div>
          </div>
          <a href="${CALENDLY}" target="_blank" rel="noopener" id="sn-cb-book-btn">Book a Call</a>
        </div>

        <div id="sn-cb-messages" role="log" aria-live="polite"></div>
        <div id="sn-cb-suggestions" role="group" aria-label="Question suggestions"></div>
      </div>`;

    setTimeout(() => {
      addBotMsg(KB.welcome);
      renderChips(KB.topics.slice(0, 7));
    }, 600);

    const launcher = document.getElementById('sn-cb-launcher');
    launcher.addEventListener('click', toggleChat);
    launcher.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleChat(); }
    });
  }

  /* ── TOGGLE ─────────────────────────────────────── */
  function toggleChat() {
    isOpen = !isOpen;
    const win       = document.getElementById('sn-cb-window');
    const iconOpen  = document.getElementById('sn-cb-launcher-icon');
    const iconClose = document.getElementById('sn-cb-launcher-close');
    const badge     = document.getElementById('sn-cb-badge');

    win.classList.toggle('sn-cb-open', isOpen);
    win.setAttribute('aria-hidden', String(!isOpen));
    iconOpen.style.display  = isOpen ? 'none' : 'flex';
    iconClose.style.display = isOpen ? 'flex' : 'none';
    if (isOpen) { badge.style.display = 'none'; scrollBottom(); }
  }

  /* ── MESSAGES ───────────────────────────────────── */
  function addBotMsg(html) {
    const c = document.getElementById('sn-cb-messages');
    const d = document.createElement('div');
    d.className = 'sn-cb-msg sn-cb-msg-bot';
    d.innerHTML = html;
    c.appendChild(d);
    scrollBottom();
  }

  function addUserMsg(text) {
    const c = document.getElementById('sn-cb-messages');
    const d = document.createElement('div');
    d.className = 'sn-cb-msg sn-cb-msg-user';
    d.textContent = text;
    c.appendChild(d);
    scrollBottom();
  }

  /* ── CHIPS ──────────────────────────────────────── */
  function renderChips(topics) {
    const area = document.getElementById('sn-cb-suggestions');
    area.innerHTML = '';

    if (navDepth > 0) {
      const back = document.createElement('button');
      back.className = 'sn-cb-chip sn-cb-chip-back';
      back.innerHTML = '&#8592; Main menu';
      back.addEventListener('click', () => {
        navDepth = 0;
        renderChips(KB.topics.slice(0, 7));
      });
      area.appendChild(back);
    }

    topics.forEach(topic => {
      if (!topic) return;
      const btn = document.createElement('button');
      btn.className = 'sn-cb-chip' + (topic.isBooking ? ' sn-cb-chip-cta' : '');
      btn.textContent = topic.q;

      btn.addEventListener('click', () => {
        addUserMsg(topic.q);
        navDepth++;

        if (topic.isBooking) {
          addBotMsg(
            topic.a +
            `<br><br><a href="${CALENDLY}" target="_blank" rel="noopener" class="sn-cb-cta-link">Book Your Discovery Call </a>`
          );
        } else {
          addBotMsg(topic.a);
        }

        const follows = topic.follow
          ? topic.follow.map(id => findTopic(id)).filter(Boolean)
          : [];

        if (follows.length) {
          renderChips(follows);
        } else {
          renderChips([findTopic('booking')].filter(Boolean));
        }
      });

      area.appendChild(btn);
    });

    // Always add book-a-call at bottom if not already included
    const hasBooking = topics.some(t => t && t.id === 'booking');
    if (!hasBooking && navDepth > 0) {
      const bookBtn = document.createElement('button');
      bookBtn.className = 'sn-cb-chip sn-cb-chip-cta';
      bookBtn.textContent = 'Book a discovery call';
      bookBtn.addEventListener('click', () => window.open(CALENDLY, '_blank', 'noopener'));
      area.appendChild(bookBtn);
    }

    scrollBottom();
  }

  function scrollBottom() {
    const msgs = document.getElementById('sn-cb-messages');
    if (msgs) setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 50);
  }

  /* ── INIT ───────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildChatbot);
  } else {
    buildChatbot();
  }
})();
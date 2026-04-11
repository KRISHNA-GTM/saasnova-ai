/* ═══════════════════════════════════════════════════
   SaaSNova Chatbot, OFFLINE / NO-API VERSION v2.0
   chatbot.js

   Works 100% on Netlify free. No API key. No server.
   Users tap preset question chips → instant answers.

   TO EDIT CONTENT: find the KB object below and
   update the 'a' (answer) fields. HTML is supported.
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
    welcome: "Hi! I'm the SaaSNova assistant. Ask me about our services, pricing, or how to get started.",

    topics: [
      {
        id: 'whois',
        q: 'What is SaaSNova?',
        a: `<strong>SaaSNova</strong> is a cloud marketplace GTM execution engine for SaaS ISVs scaling through AWS, Azure, and GCP, AWS is our flagship hyperscaler.<br><br>
Founded by Jen Dawson, a 25+ year cloud GTM practitioner behind 100+ ISV activations including New Relic, Druva, Freshworks, Arctic Wolf, and Dataminr.<br><br>
<strong>The problem we solve:</strong> ISVs don't fail at listing. They fail at execution. You're listed. You're active. But there's no predictable, attributable revenue coming from the hyperscaler ecosystem. Cloud field teams don't respond. MDF is fragmented. The board sees nothing they can present to investors.<br><br>
<strong>What SaaSNova does:</strong> We activate cloud field relationships, drive co-sell conversations to actual deals, and deliver the verified revenue evidence your board needs, customised to your ISV's GTM stage and cloud mix.`,
        follow: ['programs','jen','clouds','booking']
      },
      {
        id: 'programs',
        q: 'What services do you offer?',
        a: `SaaSNova has three services, each customised to your GTM stage. You pick one based on where you are:<br><br>
<strong>Ignite, 3 Months</strong><br>Cloud GTM activation. For ISVs at any stage, from pre-listing to reactivating a stalled listing.<br><br>
<strong>SuperNova, 4 Months</strong><br>US Market Entry. Built for global ISVs (APAC, EMEA, EU) entering the US market across hyperscalers.<br><br>
<strong>NovaX, 6 Months</strong><br>Global embedded execution. Premium programme for scale-stage ISVs with quarterly board reporting.<br><br>
Every programme is customised to your cloud mix and revenue goals, not a one-size-fits-all approach.`,
        follow: ['ignite','supernova','novax','whichprogram']
      },
      {
        id: 'ignite',
        q: 'Tell me about Ignite',
        a: `<strong>SaaSNova Ignite, 3 Month Programme</strong><br><br>
Best for: Any-stage ISVs, starting fresh, reactivating a stalled listing, or generating first attributable cloud revenue within 90 days.<br><br>
<strong>Customised execution includes:</strong><br>
• Cloud field relationship activation across your target hyperscalers<br>
• Co-sell execution and WinWires<br>
• Revenue attribution framework<br>
• Board-ready GTM evidence report<br><br>
Every engagement is tailored to your cloud mix and GTM starting point. Jen Dawson reviews every engagement personally.`,
        follow: ['supernova','novax','whichprogram','booking']
      },
      {
        id: 'supernova',
        q: 'Tell me about SuperNova',
        a: `<strong>SaaSNova SuperNova, 4 Month Programme</strong><br><br>
Best for: Global ISVs (APAC, EMEA, EU) entering the US market, or ISVs in fundraising who need investor-grade cloud revenue evidence.<br><br>
<strong>Customised execution includes:</strong><br>
• US co-sell activation across AWS, Azure, and GCP<br>
• NAMER GTM activation via channel partners, distributors, and SIs<br>
• US field team relationship building<br>
• Investor-ready GTM evidence deck<br>
• US market revenue attribution framework<br><br>
SuperNova is designed specifically for US market entry. If you are based outside the US and need to build US cloud revenue, this is the programme.`,
        follow: ['ignite','novax','whichprogram','booking']
      },
      {
        id: 'novax',
        q: 'Tell me about NovaX',
        a: `<strong>SaaSNova NovaX, 6 Month Programme</strong><br><br>
Best for: Scale-stage ISVs where cloud marketplace is a primary revenue channel, globally, and quarterly board accountability on cloud revenue is required.<br><br>
<strong>Customised execution includes:</strong><br>
• Embedded global GTM execution as part of your team<br>
• Full cloud field relationship management<br>
• Quarterly board revenue reports ×4<br>
• Holistic GTM ROI narrative for investors and board<br><br>
SaaSNova operates as an extension of your team, attending alliance calls and managing field relationships directly.`,
        follow: ['ignite','supernova','whichprogram','booking']
      },
      {
        id: 'whichprogram',
        q: 'Which programme is right for me?',
        a: `<strong>Choose Ignite if:</strong><br>
You need cloud GTM activation, whether you're pre-listing, newly listed, or have a listing generating no attributable revenue.<br><br>
<strong>Choose SuperNova if:</strong><br>
You are based outside the US (APAC, EMEA, EU) and need to build US co-sell revenue across hyperscalers, or you are in a fundraising process and need investor-grade GTM evidence.<br><br>
<strong>Choose NovaX if:</strong><br>
Cloud marketplace is a core global revenue channel and you need embedded execution with quarterly board reporting.<br><br>
The fastest way to find the right fit: book a 30-minute discovery call with Jen Dawson.`,
        follow: ['booking','programs']
      },
,
      {
        id: 'pricing',
        q: 'How does pricing work?',
        a: `Pricing is based on your specific requirements and eligibility. There is no fixed rate card.<br><br>
Every engagement is scoped to your cloud mix, listing status, and GTM stage. To get a custom quote, book a discovery call with Jen Dawson or request a private offer via AWS Marketplace.<br><br>
<strong>Two ways to proceed:</strong><br>
• Book a 30-min discovery call with Jen<br>
• Request a private offer via AWS Marketplace`,
        isBooking: true,
        follow: ['ignite','supernova','novax']
      },
      {
        id: 'cosell',
        q: 'What is co-sell?',
        a: `Co-sell is a joint sales motion where your ISV and a cloud provider's field team pursue a deal together.<br><br>
On <strong>AWS</strong> this runs through ACE (Partner Opportunity Management).<br>
On <strong>Azure</strong> through the co-sell portal in Partner Center.<br>
On <strong>GCP</strong> through Partner Advantage.<br><br>
SaaSNova writes and submits co-sell opportunities on your behalf, with the customer context, cloud consumption angle, and specific ask that cloud field teams actually respond to.<br><br>
Most ISVs file submissions that get ignored. We structure them so they do not.`,
        follow: ['isvacc','programs','booking']
      },
      {
        id: 'isvacc',
        q: 'What is ISV Accelerate?',
        a: `ISV Accelerate is AWS's co-sell program for qualified ISV partners. Accepted ISVs get direct support from AWS Partner Development Representatives (PDRs) and access to the ACE co-sell program.<br><br>
<strong>To qualify you need:</strong><br>
• A software product listing on AWS Marketplace (not a services listing)<br>
• AWS Select Partner Network tier or above<br>
• Active ACE co-sell submission history<br>
• AWS-native or AWS-integrated product architecture<br><br>
Most ISVs miss the program because they apply before establishing an ACE history. SaaSNova handles ISV Accelerate activation as part of every program.`,
        follow: ['cosell','programs','booking']
      },
      {
        id: 'boardreport',
        q: 'What is a board-ready pipeline report?',
        a: `Every SaaSNova program ends with a board pipeline report your leadership team can present directly. It contains:<br><br>
• <strong>Co-sell opportunity log</strong>, named submissions per cloud, stage, value, assigned field partner<br>
• <strong>WinWire record</strong>, submitted wins with cloud involvement documented<br>
• <strong>Field enablement log</strong>, sessions run, date, attendance, cloud<br>
• <strong>Field relationship map</strong>, named cloud contacts and last touchpoint<br>
• <strong>Revenue attribution summary</strong>, deals where cloud co-sell influenced outcome<br><br>
NovaX delivers this report every quarter throughout the 6-month engagement.`,
        follow: ['programs','booking']
      },
      {
        id: 'jen',
        q: 'Who is Jen Dawson?',
        a: `Jen Dawson is the Founder and CEO of SaaSNova.<br><br>
25+ years of cloud GTM experience across AWS, Azure, and GCP, having built co-sell programs at scale and managed ISV Accelerate motions directly.<br><br>
She has activated 100+ ISVs including New Relic, Druva, Freshworks, Postman, HashiCorp, Arctic Wolf, and Dataminr.<br><br>
Jen personally reviews every co-sell submission, leads field enablement sessions, and signs off on every board pipeline report across all SaaSNova programs.`,
        follow: ['programs','booking']
      },
      {
        id: 'clouds',
        q: 'Which clouds do you cover?',
        a: `All three, AWS, Azure, and GCP, with equal execution depth.<br><br>
<strong>AWS:</strong> ACE co-sell submissions, ISV Accelerate activation, WinWires, PDM trust-building.<br><br>
<strong>Azure:</strong> Co-sell ready activation, IP co-sell and deal registration, Microsoft field engagement.<br><br>
<strong>GCP:</strong> Partner Advantage activation, Google Cloud field enablement, pipeline attribution.<br><br>
Every program is scoped to your target cloud mix, one cloud, two, or all three.`,
        follow: ['cosell','programs','booking']
      },
      {
        id: 'proof',
        q: 'Do you have client results?',
        a: `Yes, real, named results from real clients.<br><br>
<em>"Jen's GTM architecture fundamentally changed how Arctic Wolf engaged with AWS. The structure, clarity, and discipline she brought created a level of alignment we rarely see with security partners."</em><br>
, John McElhone, Partner Development Manager, AWS<br><br>
<em>"The architecture gave Dataminr the credibility sellers and AWS senior leaders needed to lean in."</em><br>
, Fraser Charles, Senior Director Partner Ecosystems, Dataminr<br><br>
<em>"The co-sell scoring discussion was eye-opening to us."</em><br>
, Odin Olson, VP Partnerships &amp; Alliances, Arctic Wolf Networks`,
        follow: ['programs','booking']
      },
      {
        id: 'booking',
        q: 'How do I book a discovery call?',
        a: `Book a 30-minute discovery call with Jen Dawson directly.<br><br>
On the call, Jen will:<br>
• Score your cloud GTM readiness across 8 dimensions<br>
• Identify exactly where your co-sell motion is stalling<br>
• Recommend the right program for your ISV<br>
• Outline clear next steps, no pressure<br><br>
Jen reviews every submission personally and responds within 24 hours.`,
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
    const root = document.getElementById('sn-chatbot-root');
    if (!root) return;

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
            <img src="/images/jen-dp.jpg" alt="SaaSNova" id="sn-cb-avatar"
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

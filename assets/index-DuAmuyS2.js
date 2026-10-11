(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),window.handleBetaSubmit=function(e){e.preventDefault();let t=e.target,n=!0,r=null;t.querySelectorAll(`.error-msg`).forEach(e=>e.remove()),t.querySelectorAll(`.has-error`).forEach(e=>e.classList.remove(`has-error`));let i=(e,t,n)=>{let i=document.createElement(`div`);i.className=`error-msg`,i.innerText=t,e.classList.contains(`radio-group`)||e.classList.contains(`checkbox-group`)?e.parentElement.appendChild(i):(e.parentElement.appendChild(i),e.classList.add(`has-error`)),r||=n||e.closest(`.form-group`)};t.querySelectorAll(`input[type="text"], input[type="email"], select`).forEach(e=>{e.value.trim()?e.type===`email`&&!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(e.value)&&(i(e,`Please enter a valid email address`),n=!1):(i(e,`This field is required`),n=!1)});let a=t.querySelectorAll(`input[name="entry.261106749"]`);Array.from(a).some(e=>e.checked)||(i(t.querySelector(`.radio-group`),`Please select a device`),n=!1);let o=t.querySelectorAll(`input[name="entry.610551536"]`);if(Array.from(o).some(e=>e.checked)||(i(t.querySelector(`.checkbox-group`),`Please select at least one app`),n=!1),!n){let e=t.querySelector(`.error-msg`);return e&&e.closest(`.form-group`).scrollIntoView({behavior:`smooth`,block:`center`}),!1}window.betaSubmitted=!0;let s=document.getElementById(`submit-btn`);s.innerHTML=`Submitting...`,s.style.opacity=`0.5`,s.disabled=!0,t.submit()},window.clearBetaError=function(e){let t=e.target,n=t.closest(`.form-group`);if(n){let e=n.querySelector(`.error-msg`);e&&e.remove()}t.classList.remove(`has-error`)};var e=[{id:`calculator`,title:`Calculator+`,category:`Health Tools`,badge:`BETA`,tagline:`Standard & specialized health math`,desc:`A powerful standard calculator featuring a vast marketplace of specialized calculators. Manage favorites, browse by categories, and customize with dynamic themes.`,icon:`./icons/calculator.png`,accentColor:`#8b5cf6`,glowColor:`rgba(139, 92, 246, 0.45)`,status:`beta`,stores:{apple:`#`,google:`#`},privacyLink:`/privacy/calculator`},{id:`cycle`,title:`Cycle`,category:`Women's Health`,badge:`BETA`,tagline:`Intelligent rhythm & symptom tracking`,desc:`Comprehensive cycle tracking featuring an interactive calendar, daily symptom logging, personalized insights, and an intuitive tracking dashboard.`,icon:`./icons/cycle.png`,accentColor:`#f43f5e`,glowColor:`rgba(244, 63, 94, 0.45)`,status:`beta`,stores:{apple:`#`,google:`#`},privacyLink:`/privacy/cycle`},{id:`activity`,title:`Activity`,category:`Fitness & Motion`,badge:`COMING SOON`,tagline:`Real-time performance metrics`,desc:`Track your daily movements, record detailed workouts, and stay active with effortless progress metrics and real-time performance insights.`,icon:`./icons/activity.png`,accentColor:`#38bdf8`,glowColor:`rgba(56, 189, 248, 0.4)`,status:`development`},{id:`nutrition`,title:`Nutrition`,category:`Diet & Vitality`,badge:`COMING SOON`,tagline:`Effortless caloric & nutrient balance`,desc:`Monitor your daily caloric intake, discover wholesome recipes, and maintain a perfectly balanced diet effortlessly.`,icon:`./icons/nutrition.png`,accentColor:`#fb923c`,glowColor:`rgba(251, 146, 60, 0.4)`,status:`development`}],t=()=>`
  <!-- Architectural Portal Hero Section -->
  <header class="hero-portal">
    <div class="hero-portal-media">
      <img src="./hero-bg.jpg" alt="EVLOME Architectural Horizon" class="hero-backdrop" />
      <div class="hero-vignette"></div>
      <div class="hero-sun-glow"></div>
    </div>

    <div class="hero-portal-content">
      <div class="hero-eyebrow">
        <span class="eyebrow-text">REAL TOOLS. REAL PROGRESS.</span>
        <span class="eyebrow-bar"></span>
      </div>

      <h1 class="hero-title">
        BETA TESTING<br>
        <span class="gradient-headline">IS LIVE.</span>
      </h1>

      <p class="hero-subtitle">
        Meet <strong>Calculator+</strong> and <strong>Cycle</strong>.<br>
        Be among the first to experience EVLOME.
      </p>

      <div class="hero-ctas">
        <a href="/beta" class="btn-primary glow-pill">Join the Beta &rarr;</a>
        <a href="javascript:void(0)" class="btn-secondary glass-pill" onclick="document.getElementById('suite-section').scrollIntoView({behavior: 'smooth'})">Explore the Suite</a>
      </div>

      <div class="hero-pillars">
        <span class="pillar-item">MIND</span>
        <span class="pillar-divider">/</span>
        <span class="pillar-item">BODY</span>
        <span class="pillar-divider">/</span>
        <span class="pillar-item">HABITS</span>
        <span class="pillar-divider">/</span>
        <span class="pillar-item">PEOPLE</span>
      </div>
    </div>
  </header>

  <!-- The Suite Showcase -->
  <section id="suite-section" class="apps-section">
    <div class="section-tag-wrap">
      <span class="pill-tag">THE ECOSYSTEM</span>
    </div>
    <h2 class="section-heading">Two new apps.<br><span class="gradient-text-sub">Available now in Beta.</span></h2>
    <p class="section-description">Beautifully crafted tools that connect the pieces of your daily well-being.</p>
    
    <!-- Featured Beta Apps -->
    <div class="apps-grid beta-featured-grid">
      ${e.filter(e=>e.status===`beta`).map(e=>`
        <a href="/${e.id}" class="app-card featured-app-card" style="--accent-glow: ${e.glowColor}; --accent-color: ${e.accentColor};">
          <div class="card-ambient-glow"></div>
          <div class="card-glass-panel">
            <div class="app-badge-pill">${e.badge}</div>
            
            <div class="app-icon-squircle">
              <img src="${e.icon}" alt="${e.title} App Icon" class="app-icon-img" />
            </div>

            <div class="app-card-meta">
              <h3 class="app-card-title">${e.title}</h3>
              <div class="app-category-label">${e.category}</div>
            </div>

            <p class="app-desc">${e.desc}</p>
            
            <div class="card-cta-footer">
              <span class="card-cta-link">Explore ${e.title} &rarr;</span>
            </div>
          </div>
        </a>
      `).join(``)}
    </div>

    <!-- Coming Soon Apps -->
    <div class="coming-soon-divider">
      <div class="cs-divider-line"></div>
      <span class="cs-divider-label">COMING SOON</span>
      <div class="cs-divider-line"></div>
    </div>

    <div class="apps-grid coming-soon-grid">
      ${e.filter(e=>e.status===`development`).map(e=>`
        <div class="app-card in-dev-card" style="--accent-glow: ${e.glowColor}; --accent-color: ${e.accentColor};">
          <div class="card-ambient-glow"></div>
          <div class="card-glass-panel">
            <div class="app-badge-pill pill-subtle">${e.badge}</div>
            
            <div class="app-icon-squircle in-dev-squircle">
              <img src="${e.icon}" alt="${e.title} App Icon" class="app-icon-img" />
            </div>

            <div class="app-card-meta">
              <h3 class="app-card-title">${e.title}</h3>
              <div class="app-category-label">${e.category}</div>
            </div>

            <p class="app-desc">${e.desc}</p>
            
            <div class="card-cta-footer">
              <span class="card-status-label">In Active Development</span>
            </div>
          </div>
        </div>
      `).join(``)}
    </div>
  </section>

  <!-- Philosophy & Principles Section -->
  <section id="philosophy-section" class="values-section">
    <div class="section-tag-wrap">
      <span class="pill-tag">OUR PHILOSOPHY</span>
    </div>
    <h2 class="section-heading">Tools. Insights. Progress.</h2>
    <p class="section-description">Five foundational pillars guiding every algorithm and interaction we create.</p>
    
    <div class="values-grid">
      <div class="value-card">
        <div class="value-num-pill">01</div>
        <div class="value-body">
          <h4 class="value-title">Make It Understandable</h4>
          <p class="value-text"><strong>Health can be complicated. EVLOME should not be.</strong> We turn dense data into approachable, intuitive tools that anyone can use.</p>
        </div>
      </div>

      <div class="value-card">
        <div class="value-num-pill">02</div>
        <div class="value-body">
          <h4 class="value-title">Make It Useful</h4>
          <p class="value-text"><strong>Every feature should earn its place.</strong> We build utilities that solve real everyday problems and support thoughtful decisions.</p>
        </div>
      </div>

      <div class="value-card">
        <div class="value-num-pill">03</div>
        <div class="value-body">
          <h4 class="value-title">Put People First</h4>
          <p class="value-text"><strong>Technology should adapt to people.</strong> We listen, iterate, and evolve continuously based on the real lived experiences of our members.</p>
        </div>
      </div>

      <div class="value-card">
        <div class="value-num-pill">04</div>
        <div class="value-body">
          <h4 class="value-title">Connect the Pieces</h4>
          <p class="value-text"><strong>Well-being is an interconnected web.</strong> Our ecosystem unifies motion, rhythm, nutrition, and mental space into one harmonious picture.</p>
        </div>
      </div>

      <div class="value-card">
        <div class="value-num-pill">05</div>
        <div class="value-body">
          <h4 class="value-title">Evolve With You</h4>
          <p class="value-text"><strong>Your needs change as you grow.</strong> EVLOME evolves alongside your journey — unlocking deeper insights for a healthier tomorrow.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Beta CTA Banner -->
  <section id="beta-section" class="beta-cta-section">
    <div class="beta-banner-card">
      <div class="beta-banner-backdrop"></div>
      <div class="beta-banner-glow"></div>
      <div class="beta-banner-content">
        <span class="pill-tag">BETA ACCESS</span>
        <h3 class="beta-banner-title">Shape the future<br>of personal health.</h3>
        <p class="beta-banner-desc">Join our testing community. Experience new capabilities before anyone else and guide our product roadmap.</p>
        <a href="/beta" class="btn-primary glow-pill">Apply for Beta Testing &rarr;</a>
      </div>
    </div>
  </section>
`,n=()=>`
  <div class="page-container beta-page">
    <a href="/#suite-section" class="back-link" onclick="window.handleBackToSuite(event)">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      Back to Suite
    </a>
    
    <div class="beta-header">
      <h1 class="app-page-title">Beta Testing Program</h1>
      <p class="app-page-desc">We're thrilled you want to help shape Evlome by applying for early access to our upcoming apps and features.</p>
    </div>
    
    <div class="beta-form-container">
      <!-- Hidden iframe to capture the Google Forms redirect invisibly -->
      <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(window.betaSubmitted) { document.getElementById('beta-form-wrap').style.display='none'; document.getElementById('success-message').style.display='flex'; window.scrollTo({top: 0, behavior: 'smooth'}); }"></iframe>
      
      <div id="success-message" style="display:none; flex-direction: column; align-items: center; justify-content: center; padding: 6rem 2rem; text-align: center;">
        <div class="success-icon" style="width: 80px; height: 80px; border-radius: 50%; background: rgba(0, 255, 128, 0.1); color: #00ff80; display: flex; align-items: center; justify-content: center; margin-bottom: 2rem;">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--text-primary); font-weight: 800; letter-spacing: -0.05em;">Application Received</h2>
        <p style="color: var(--text-secondary); max-width: 400px; line-height: 1.6; font-size: 1.2rem; font-weight: 300;">Thank you for your interest in the EVLOME Beta Program. We will be in touch soon.</p>
      </div>

      <div id="beta-form-wrap">
        <form class="custom-beta-form" action="https://docs.google.com/forms/d/e/1FAIpQLSekI29k1t9_IqrNwZvtcHeIEebY7HNj471CspOid_TlKLoJ9Q/formResponse" method="post" target="hidden_iframe" novalidate onsubmit="return window.handleBetaSubmit(event)" oninput="window.clearBetaError(event)" onchange="window.clearBetaError(event)">
          
          <div class="form-row">
            <div class="form-group">
              <label>First Name</label>
              <input type="text" name="entry.1026423473" required placeholder="Jane" class="form-input" />
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input type="text" name="entry.2072277110" required placeholder="Doe" class="form-input" />
            </div>
          </div>

          <div class="form-group">
            <label>Email Address</label>
            <input type="email" name="entry.1247363008" required placeholder="jane@example.com" class="form-input" />
          </div>

          <div class="form-group">
            <label>What device do you use?</label>
            <div class="radio-group">
              <label class="custom-radio">
                <input type="radio" name="entry.261106749" value="iOS" required />
                <span class="radio-dot"></span>
                <span class="radio-text">iOS</span>
              </label>
              <label class="custom-radio">
                <input type="radio" name="entry.261106749" value="Android" required />
                <span class="radio-dot"></span>
                <span class="radio-text">Android</span>
              </label>
            </div>
          </div>

          <div class="form-group">
            <label>Which apps would you like early access to?</label>
            <div class="radio-group" style="margin-bottom: 1.5rem;">
              <label class="custom-radio">
                <input type="radio" name="app_selection_type" value="all" checked onchange="document.getElementById('specific-apps-list').style.display = 'none'; document.getElementById('all-apps-hidden').checked = true; Array.from(document.querySelectorAll('.specific-app-checkbox')).forEach(cb => cb.checked = false);" />
                <span class="radio-dot"></span>
                <span class="radio-text">All EVLOME apps</span>
              </label>
              <label class="custom-radio">
                <input type="radio" name="app_selection_type" value="specific" id="specific-apps-radio" onchange="document.getElementById('specific-apps-list').style.display = 'flex'; document.getElementById('all-apps-hidden').checked = false;" />
                <span class="radio-dot"></span>
                <span class="radio-text">Specific apps</span>
              </label>
            </div>
            
            <input type="checkbox" name="entry.610551536" value="All EVLOME apps" id="all-apps-hidden" style="display:none;" checked />

            <div id="specific-apps-list" class="checkbox-group" style="display: none; margin-left: 1rem; padding-left: 1rem; border-left: 1px solid rgba(255,255,255,0.1);">
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.610551536" value="EVLOME Calculator+" class="specific-app-checkbox" />
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Calculator+</span>
              </label>
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.610551536" value="EVLOME Cycle" class="specific-app-checkbox" />
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Cycle</span>
              </label>
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.610551536" value="EVLOME Nutrition" class="specific-app-checkbox" />
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Nutrition</span>
              </label>
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.610551536" value="EVLOME Activity" class="specific-app-checkbox" />
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Activity</span>
              </label>
            </div>
          </div>

          <div class="form-group">
            <label>How often would you be willing to test the apps?</label>
            <select name="entry.454575922" required class="form-input custom-select">
              <option value="" disabled selected>Select frequency...</option>
              <option value="Daily">Daily</option>
              <option value="A few times a week">A few times a week</option>
              <option value="Once a week">Once a week</option>
              <option value="Occasionally">Occasionally</option>
            </select>
          </div>

          <div class="form-group">
            <label>Anything you'd like us to know? (Optional)</label>
            <textarea name="entry.1265301105" rows="4" placeholder="Share your feedback, ideas, aspirations, or anything else..." class="form-input"></textarea>
          </div>

          <button id="submit-btn" type="submit" class="btn-primary form-submit">Submit Application</button>
        </form>
      </div>
    </div>
  </div>
`,r=e=>`
  <div class="page-container app-detail-page" style="--app-glow: ${e.glowColor||`rgba(168, 85, 247, 0.4)`}; --app-accent: ${e.accentColor||`#ec4899`};">
    <a href="/#suite-section" class="back-link" onclick="window.handleBackToSuite(event)">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      Back to Suite
    </a>
    
    <div class="app-detail-hero">
      <div class="app-detail-badge-wrap">
        <span class="pill-tag">${e.category||`HEALTH ECOSYSTEM`}</span>
        ${e.status===`beta`?`<span class="app-badge-pill inline-pill">BETA</span>`:``}
      </div>

      <div class="app-detail-icon-wrapper">
        <div class="app-detail-glow" style="background: radial-gradient(circle, var(--app-glow) 0%, transparent 70%);"></div>
        <img src="${e.icon}" alt="${e.title} icon" class="app-detail-icon">
      </div>
      
      <h1 class="app-page-title">${e.title}</h1>
      <p class="app-page-desc">${e.desc}</p>
      
      ${e.status===`beta`?`
        <div class="app-detail-actions">
          <a href="/beta?app=${e.id}" class="btn-primary glow-pill">Join the Beta &rarr;</a>
        </div>
      `:``}

      ${e.status===`production`&&e.stores?`
      <div class="store-links centered-stores">
        ${e.stores.apple?`
          <a href="${e.stores.apple}" target="_blank" class="store-badge">
            <svg viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            <div class="store-text">
              <span class="store-small">Download on the</span>
              <span class="store-large">App Store</span>
            </div>
          </a>
        `:``}
        ${e.stores.google?`
          <a href="${e.stores.google}" target="_blank" class="store-badge">
            <svg viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            <div class="store-text">
              <span class="store-small">GET IT ON</span>
              <span class="store-large">Google Play</span>
            </div>
          </a>
        `:``}
      </div>
      `:``}

      ${e.privacyLink?`<div class="privacy-link-container"><a href="${e.privacyLink}" class="privacy-link">Privacy Policy</a></div>`:``}
    </div>
  </div>
`,i=e=>`
  <div class="page-container">
    <a href="/#suite-section" class="back-link" onclick="window.handleBackToSuite(event)">← Back to Suite</a>
    <div class="privacy-content">
      <h1>Privacy Policy for ${e}</h1>
      <p>Last updated: October 2026</p>
      <br>
      <p>This is a placeholder for the full privacy policy. You can store your detailed terms and privacy information here.</p>
      <br>
      <p><strong>1. Information Collection</strong></p>
      <p>We believe in privacy first. Your data is stored locally on your device whenever possible...</p>
    </div>
  </div>
`;`scrollRestoration`in history&&(history.scrollRestoration=`manual`);var a=0,o=new Map;window.addEventListener(`scroll`,()=>{if(u){o.set(u,window.scrollY);try{let e=window.history.state||{};window.history.replaceState({...e,scrollY:window.scrollY},``)}catch{}}},{passive:!0});var s=()=>{window.scrollTo({top:0,left:0,behavior:`instant`}),document.documentElement.scrollTop=0,document.body.scrollTop=0},c=e=>{let t=()=>{window.scrollTo({top:e,left:0,behavior:`instant`}),document.documentElement.scrollTop=e,document.body.scrollTop=e};t(),requestAnimationFrame(t),setTimeout(t,20),setTimeout(t,80)};window.handleBackToSuite=e=>{e&&e.preventDefault(),a>0?window.history.back():l(`/`)};var l=e=>{let t=window.location.pathname===`/`?`/`:window.location.pathname.replace(/\/$/,``),n=(e.split(`?`)[0].startsWith(`/`)?e.split(`?`)[0]:`/`+e.split(`?`)[0]).replace(/\/$/,``)||`/`;if(t===n){if(n===`/`){window.scrollTo({top:0,left:0,behavior:`smooth`}),o.set(`/`,0);try{let e=window.history.state||{};window.history.replaceState({...e,scrollY:0},``)}catch{}}e.includes(`?`)&&window.location.search!==`?`+e.split(`?`)[1]&&(window.history.replaceState({scrollY:0},``,e),d({isBack:!1}));return}if(u){o.set(u,window.scrollY);try{let e=window.history.state||{};window.history.replaceState({...e,scrollY:window.scrollY},``)}catch{}}a++,window.history.pushState({scrollY:0},``,e),d({isBack:!1})},u=null,d=(a={isBack:!1})=>{let l=window.location.pathname;if(l.length>1&&l.endsWith(`/`)&&(l=l.slice(0,-1)),window.location.hash&&window.location.hash.startsWith(`#/`)){let e=window.location.hash.slice(1);window.history.replaceState(null,``,e),l=e.split(`?`)[0]}let d=new URLSearchParams(window.location.search),f=document.getElementById(`content-area`);if(u=l,f){if(l===``||l===`/`)f.innerHTML=t();else if(l===`/beta`){f.innerHTML=n();let e=d.get(`app`);if(e){let t={calculator:`EVLOME Calculator+`,cycle:`EVLOME Cycle`,nutrition:`EVLOME Nutrition`,activity:`EVLOME Activity`};if(t[e]){let n=document.getElementById(`specific-apps-radio`);n&&(n.checked=!0,document.getElementById(`specific-apps-list`).style.display=`flex`,Array.from(document.querySelectorAll(`input[name="entry.610551536"]`)).forEach(e=>e.checked=!1));let r=document.querySelector(`input[value="${t[e]}"]`);r&&(r.checked=!0)}}}else if(l.startsWith(`/privacy/`)){let n=l.replace(`/privacy/`,``),r=e.find(e=>e.id===n);f.innerHTML=r?i(r.title):t()}else{let n=l.slice(1),i=e.find(e=>e.id===n);f.innerHTML=i&&i.status!==`development`?r(i):t()}if(window.location.hash&&!window.location.hash.startsWith(`#/`)){let e=window.location.hash.slice(1),t=document.getElementById(e);if(t){setTimeout(()=>{t.scrollIntoView({behavior:`smooth`})},50);return}}a.isBack?c(a.targetY??window.history.state?.scrollY??o.get(l)??0):(s(),requestAnimationFrame(s))}};window.addEventListener(`popstate`,e=>{a>0&&a--,d({isBack:!0,targetY:e.state?.scrollY??o.get(window.location.pathname)??0})}),window.addEventListener(`DOMContentLoaded`,()=>d({isBack:!1})),document.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(!t)return;let n=t.getAttribute(`href`);if(n&&!(t.target===`_blank`||n.startsWith(`http://`)||n.startsWith(`https://`)||n.startsWith(`mailto:`)||n.startsWith(`javascript:`))){if(n.startsWith(`#`)||n.startsWith(`/#`)){let t=n.replace(/^\/?#/,``);if(window.location.pathname===`/`&&t){e.preventDefault(),f(t);return}}n.startsWith(`/`)&&(e.preventDefault(),l(n))}});var f=e=>{let t=()=>{let t=document.getElementById(e);t&&t.scrollIntoView({behavior:`smooth`})};window.location.pathname===`/`?t():(a++,window.history.pushState({scrollY:0},``,`/`),d({isBack:!1}),setTimeout(t,60))};window.scrollToSection=f,window.toggleMobileMenu=()=>{let e=document.querySelector(`.site-nav`),t=document.querySelector(`.nav-burger-btn`);if(e){e.classList.toggle(`menu-open`);let n=e.classList.contains(`menu-open`);t&&t.classList.toggle(`active`,n),document.body.style.overflow=n?`hidden`:``}},window.closeMobileMenu=()=>{let e=document.querySelector(`.site-nav`),t=document.querySelector(`.nav-burger-btn`);e&&e.classList.contains(`menu-open`)&&(e.classList.remove(`menu-open`),t&&t.classList.remove(`active`),document.body.style.overflow=``)},document.querySelector(`#app`).innerHTML=`
  <div class="ambient-glow glow-top-left"></div>
  <div class="ambient-glow glow-top-right"></div>
  <div class="ambient-glow glow-sunset-center"></div>

  <nav class="site-nav">
    <div class="nav-inner">
      <a href="/" class="logo-link" onclick="window.closeMobileMenu()">
        <img src="./logo-wordmark.png" alt="EVLOME" class="nav-logo" />
      </a>
      
      <!-- Desktop Menu -->
      <div class="nav-menu">
        <button type="button" class="nav-link-btn" onclick="window.scrollToSection('suite-section')">Suite</button>
        <button type="button" class="nav-link-btn" onclick="window.scrollToSection('philosophy-section')">Philosophy</button>
        <a href="/beta" class="nav-pill-btn">Join Beta</a>
      </div>

      <!-- Mobile Hamburger Button (3 horizontal lines morphing into X) -->
      <button type="button" class="nav-burger-btn" id="nav-burger-btn" aria-label="Toggle navigation menu" onclick="window.toggleMobileMenu()">
        <span class="burger-box">
          <span class="burger-line line-top"></span>
          <span class="burger-line line-middle"></span>
          <span class="burger-line line-bottom"></span>
        </span>
      </button>
    </div>

    <!-- Mobile Drawer Overlay -->
    <div class="mobile-nav-drawer" onclick="if(event.target === this) window.closeMobileMenu();">
      <!-- Dedicated Drawer Close Button at top right -->
      <button type="button" class="mobile-drawer-close-btn" aria-label="Close navigation menu" onclick="window.closeMobileMenu()">
        <span class="drawer-close-icon">
          <span class="close-line close-line-1"></span>
          <span class="close-line close-line-2"></span>
        </span>
      </button>

      <div class="mobile-drawer-content">
        <button type="button" class="mobile-drawer-link" onclick="window.closeMobileMenu(); window.scrollToSection('suite-section');">Suite</button>
        <button type="button" class="mobile-drawer-link" onclick="window.closeMobileMenu(); window.scrollToSection('philosophy-section');">Philosophy</button>
        <a href="/beta" class="btn-primary glow-pill mobile-drawer-cta" onclick="window.closeMobileMenu();">Join the Beta &rarr;</a>
        
        <div class="mobile-drawer-footer">
          <div class="mobile-drawer-domain">evlome.com</div>
        </div>
      </div>
    </div>
  </nav>

  <div id="content-area"></div>

  <footer class="site-footer">
    <div class="footer-brand-signature">
      <span class="signature-line"></span>
      <span class="signature-domain">evlome.com</span>
      <span class="signature-line"></span>
    </div>

    <div class="footer-content">
      <div class="footer-brand">&copy; ${new Date().getFullYear()} Evlome. All rights reserved.</div>
      <div class="footer-contact">
        <a href="mailto:hello@evlome.com" class="social-pill">
          <svg viewBox="0 0 512 512" fill="currentColor"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
          <span>hello@evlome.com</span>
        </a>
        <a href="https://instagram.com/evlomeofficial" target="_blank" rel="noopener noreferrer" class="social-pill">
          <svg viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          <span>@evlomeofficial</span>
        </a>
      </div>
    </div>
  </footer>
`,d();
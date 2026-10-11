import './style.css'

window.handleBetaSubmit = function(event) {
  event.preventDefault();
  const form = event.target;
  let isValid = true;
  let firstInvalidElement = null;

  form.querySelectorAll('.error-msg').forEach(el => el.remove());
  form.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));

  const showError = (element, message, scrollTarget) => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-msg';
    errorDiv.innerText = message;
    
    if (element.classList.contains('radio-group') || element.classList.contains('checkbox-group')) {
      element.parentElement.appendChild(errorDiv);
    } else {
      element.parentElement.appendChild(errorDiv);
      element.classList.add('has-error');
    }

    if (!firstInvalidElement) firstInvalidElement = scrollTarget || element.closest('.form-group');
  };

  const requiredInputs = form.querySelectorAll('input[type="text"], input[type="email"], select');
  requiredInputs.forEach(input => {
    if (!input.value.trim()) {
      showError(input, 'This field is required');
      isValid = false;
    } else if (input.type === 'email' && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value)) {
      showError(input, 'Please enter a valid email address');
      isValid = false;
    }
  });

  const deviceRadios = form.querySelectorAll('input[name="entry.261106749"]');
  if (!Array.from(deviceRadios).some(r => r.checked)) {
    showError(form.querySelector('.radio-group'), 'Please select a device');
    isValid = false;
  }

  const appCheckboxes = form.querySelectorAll('input[name="entry.610551536"]');
  if (!Array.from(appCheckboxes).some(c => c.checked)) {
    showError(form.querySelector('.checkbox-group'), 'Please select at least one app');
    isValid = false;
  }

  if (!isValid) {
    const firstError = form.querySelector('.error-msg');
    if (firstError) {
      firstError.closest('.form-group').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return false;
  }

  window.betaSubmitted = true;
  const btn = document.getElementById('submit-btn');
  btn.innerHTML = 'Submitting...';
  btn.style.opacity = '0.5';
  btn.disabled = true;
  form.submit();
};

window.clearBetaError = function(event) {
  const input = event.target;
  const wrapper = input.closest('.form-group');
  if (wrapper) {
    const errorMsg = wrapper.querySelector('.error-msg');
    if (errorMsg) errorMsg.remove();
  }
  input.classList.remove('has-error');
};
const appsData = [
  {
    id: 'calculator',
    title: 'Calculator+',
    category: 'Health Tools',
    badge: 'BETA',
    tagline: 'Standard & specialized health math',
    desc: 'A powerful standard calculator featuring a vast marketplace of specialized calculators. Manage favorites, browse by categories, and customize with dynamic themes.',
    icon: './icons/calculator.png',
    accentColor: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.45)',
    status: 'beta',
    stores: { apple: '#', google: '#' },
    privacyLink: '/privacy/calculator'
  },
  {
    id: 'cycle',
    title: 'Cycle',
    category: "Women's Health",
    badge: 'BETA',
    tagline: 'Intelligent rhythm & symptom tracking',
    desc: 'Comprehensive cycle tracking featuring an interactive calendar, daily symptom logging, personalized insights, and an intuitive tracking dashboard.',
    icon: './icons/cycle.png',
    accentColor: '#f43f5e',
    glowColor: 'rgba(244, 63, 94, 0.45)',
    status: 'beta',
    stores: { apple: '#', google: '#' },
    privacyLink: '/privacy/cycle'
  },
  {
    id: 'activity',
    title: 'Activity',
    category: 'Fitness & Motion',
    badge: 'COMING SOON',
    tagline: 'Real-time performance metrics',
    desc: 'Track your daily movements, record detailed workouts, and stay active with effortless progress metrics and real-time performance insights.',
    icon: './icons/activity.png',
    accentColor: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    status: 'development'
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    category: 'Diet & Vitality',
    badge: 'COMING SOON',
    tagline: 'Effortless caloric & nutrient balance',
    desc: 'Monitor your daily caloric intake, discover wholesome recipes, and maintain a perfectly balanced diet effortlessly.',
    icon: './icons/nutrition.png',
    accentColor: '#fb923c',
    glowColor: 'rgba(251, 146, 60, 0.4)',
    status: 'development'
  }
];

const renderHome = () => `
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
      ${appsData.filter(app => app.status === 'beta').map(app => `
        <a href="/${app.id}" class="app-card featured-app-card" style="--accent-glow: ${app.glowColor}; --accent-color: ${app.accentColor};">
          <div class="card-ambient-glow"></div>
          <div class="card-glass-panel">
            <div class="app-badge-pill">${app.badge}</div>
            
            <div class="app-icon-squircle">
              <img src="${app.icon}" alt="${app.title} App Icon" class="app-icon-img" />
            </div>

            <div class="app-card-meta">
              <h3 class="app-card-title">${app.title}</h3>
              <div class="app-category-label">${app.category}</div>
            </div>

            <p class="app-desc">${app.desc}</p>
            
            <div class="card-cta-footer">
              <span class="card-cta-link">Explore ${app.title} &rarr;</span>
            </div>
          </div>
        </a>
      `).join('')}
    </div>

    <!-- Coming Soon Apps -->
    <div class="coming-soon-divider">
      <div class="cs-divider-line"></div>
      <span class="cs-divider-label">COMING SOON</span>
      <div class="cs-divider-line"></div>
    </div>

    <div class="apps-grid coming-soon-grid">
      ${appsData.filter(app => app.status === 'development').map(app => `
        <div class="app-card in-dev-card" style="--accent-glow: ${app.glowColor}; --accent-color: ${app.accentColor};">
          <div class="card-ambient-glow"></div>
          <div class="card-glass-panel">
            <div class="app-badge-pill pill-subtle">${app.badge}</div>
            
            <div class="app-icon-squircle in-dev-squircle">
              <img src="${app.icon}" alt="${app.title} App Icon" class="app-icon-img" />
            </div>

            <div class="app-card-meta">
              <h3 class="app-card-title">${app.title}</h3>
              <div class="app-category-label">${app.category}</div>
            </div>

            <p class="app-desc">${app.desc}</p>
            
            <div class="card-cta-footer">
              <span class="card-status-label">In Active Development</span>
            </div>
          </div>
        </div>
      `).join('')}
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
`;

const renderBetaPage = () => `
  <div class="page-container beta-page">
    <a href="/" class="back-link">← Back to Suite</a>
    
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
`;

const renderAppPage = (app) => `
  <div class="page-container app-detail-page" style="--app-glow: ${app.glowColor || 'rgba(168, 85, 247, 0.4)'}; --app-accent: ${app.accentColor || '#ec4899'};">
    <a href="/#suite-section" class="back-link" onclick="if (window.history.length > 1) { event.preventDefault(); window.history.back(); }">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      Back to Suite
    </a>
    
    <div class="app-detail-hero">
      <div class="app-detail-badge-wrap">
        <span class="pill-tag">${app.category || 'HEALTH ECOSYSTEM'}</span>
        ${app.status === 'beta' ? '<span class="app-badge-pill inline-pill">BETA</span>' : ''}
      </div>

      <div class="app-detail-icon-wrapper">
        <div class="app-detail-glow" style="background: radial-gradient(circle, var(--app-glow) 0%, transparent 70%);"></div>
        <img src="${app.icon}" alt="${app.title} icon" class="app-detail-icon">
      </div>
      
      <h1 class="app-page-title">${app.title}</h1>
      <p class="app-page-desc">${app.desc}</p>
      
      ${app.status === 'beta' ? `
        <div class="app-detail-actions">
          <a href="/beta?app=${app.id}" class="btn-primary glow-pill">Join the Beta &rarr;</a>
        </div>
      ` : ''}

      ${app.status === 'production' && app.stores ? `
      <div class="store-links centered-stores">
        ${app.stores.apple ? `
          <a href="${app.stores.apple}" target="_blank" class="store-badge">
            <svg viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            <div class="store-text">
              <span class="store-small">Download on the</span>
              <span class="store-large">App Store</span>
            </div>
          </a>
        ` : ''}
        ${app.stores.google ? `
          <a href="${app.stores.google}" target="_blank" class="store-badge">
            <svg viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            <div class="store-text">
              <span class="store-small">GET IT ON</span>
              <span class="store-large">Google Play</span>
            </div>
          </a>
        ` : ''}
      </div>
      ` : ''}

      ${app.privacyLink ? `<div class="privacy-link-container"><a href="${app.privacyLink}" class="privacy-link">Privacy Policy</a></div>` : ''}
    </div>
  </div>
`;

const renderPrivacyPolicy = (title) => `
  <div class="page-container">
    <a href="/#suite-section" class="back-link" onclick="if (window.history.length > 1) { event.preventDefault(); window.history.back(); }">← Back to Suite</a>
    <div class="privacy-content">
      <h1>Privacy Policy for ${title}</h1>
      <p>Last updated: October 2026</p>
      <br>
      <p>This is a placeholder for the full privacy policy. You can store your detailed terms and privacy information here.</p>
      <br>
      <p><strong>1. Information Collection</strong></p>
      <p>We believe in privacy first. Your data is stored locally on your device whenever possible...</p>
    </div>
  </div>
`;

// Disable automatic browser scroll restoration so we have full, precise control
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Track scroll positions per route so back navigation restores exact scroll
const scrollPositions = new Map();

window.addEventListener('scroll', () => {
  if (currentRoute) {
    scrollPositions.set(currentRoute, window.scrollY);
  }
}, { passive: true });

const resetScrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const restoreScrollTo = (targetY) => {
  const apply = () => {
    window.scrollTo({ top: targetY, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = targetY;
    document.body.scrollTop = targetY;
  };
  apply();
  requestAnimationFrame(apply);
  setTimeout(apply, 30);
};

export const navigate = (url) => {
  if (currentRoute) {
    scrollPositions.set(currentRoute, window.scrollY);
  }
  window.history.pushState({ scrollY: window.scrollY }, '', url);
  router({ isBack: false });
};

let currentRoute = null;

const router = (options = { isBack: false }) => {
  // Support both clean pathname and legacy hash fallback seamlessly
  let path = window.location.pathname;
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  // Handle any legacy hash if incoming external link used it
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    const cleanUrl = window.location.hash.slice(1);
    window.history.replaceState(null, '', cleanUrl);
    path = cleanUrl.split('?')[0];
  }

  const searchParams = new URLSearchParams(window.location.search);
  const contentDiv = document.getElementById('content-area');
  
  currentRoute = path;
  
  if (!contentDiv) return;

  if (path === '' || path === '/') {
    contentDiv.innerHTML = renderHome();
  } else if (path === '/beta') {
    contentDiv.innerHTML = renderBetaPage();
    const appId = searchParams.get('app');
    if (appId) {
      const valMap = {
        'calculator': 'EVLOME Calculator+',
        'cycle': 'EVLOME Cycle',
        'nutrition': 'EVLOME Nutrition',
        'activity': 'EVLOME Activity'
      };
      if (valMap[appId]) {
        const specificRadio = document.getElementById('specific-apps-radio');
        if (specificRadio) {
          specificRadio.checked = true;
          document.getElementById('specific-apps-list').style.display = 'flex';
          Array.from(document.querySelectorAll('input[name="entry.610551536"]')).forEach(cb => cb.checked = false);
        }
        const checkbox = document.querySelector(`input[value="${valMap[appId]}"]`);
        if (checkbox) checkbox.checked = true;
      }
    }
  } else if (path.startsWith('/privacy/')) {
    const appId = path.replace('/privacy/', '');
    const app = appsData.find(a => a.id === appId);
    if (app) {
      contentDiv.innerHTML = renderPrivacyPolicy(app.title);
    } else {
      contentDiv.innerHTML = renderHome();
    }
  } else {
    // Dynamic matching for apps: /calculator, /cycle, etc.
    const appId = path.slice(1);
    const app = appsData.find(a => a.id === appId);
    if (app && app.status !== 'development') {
      contentDiv.innerHTML = renderAppPage(app);
    } else {
      contentDiv.innerHTML = renderHome();
    }
  }

  // Handle section hash scrolling if present (e.g. #suite-section or #philosophy-section)
  if (window.location.hash && !window.location.hash.startsWith('#/')) {
    const hashId = window.location.hash.slice(1);
    const targetEl = document.getElementById(hashId);
    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return;
    }
  }

  // If going back, restore previous scroll position; otherwise start clean at top (scroll 0)
  if (options.isBack) {
    const targetY = scrollPositions.get(path) ?? window.history.state?.scrollY ?? 0;
    restoreScrollTo(targetY);
  } else {
    resetScrollToTop();
    requestAnimationFrame(resetScrollToTop);
  }
};

window.addEventListener('popstate', (e) => {
  router({ isBack: true });
});
window.addEventListener('DOMContentLoaded', () => router({ isBack: false }));

// Intercept clicks on internal links to provide smooth client-side SPA navigation
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href) return;

  // Let browser handle external links, target="_blank", mailto, javascript, or hash-only anchors
  if (
    link.target === '_blank' ||
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('javascript:') ||
    (href.startsWith('#') && !href.startsWith('#/'))
  ) {
    return;
  }

  // Handle clean internal paths
  if (href.startsWith('/')) {
    e.preventDefault();
    navigate(href);
  }
});

export const scrollToSection = (sectionId) => {
  if (window.location.pathname !== '/') {
    window.history.pushState(null, '', '/');
    router();
    // Wait for DOM render then scroll
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  } else {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
};

window.scrollToSection = scrollToSection;

window.toggleMobileMenu = () => {
  const nav = document.querySelector('.site-nav');
  const btn = document.querySelector('.nav-burger-btn');
  if (nav) {
    nav.classList.toggle('menu-open');
    const isOpen = nav.classList.contains('menu-open');
    if (btn) btn.classList.toggle('active', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
};

window.closeMobileMenu = () => {
  const nav = document.querySelector('.site-nav');
  const btn = document.querySelector('.nav-burger-btn');
  if (nav && nav.classList.contains('menu-open')) {
    nav.classList.remove('menu-open');
    if (btn) btn.classList.remove('active');
    document.body.style.overflow = '';
  }
};

document.querySelector('#app').innerHTML = `
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
`;

// Initial route
router();


import './style.css'

// ============================================================================
// Apps Ecosystem Data Model
// ============================================================================
export const appsData = [
  {
    id: 'calculator',
    title: 'Calculator+',
    category: 'Biometrics, Math & Tools',
    tagline: 'Clinical biometrics, financial models & precision conversion',
    desc: 'Everyday arithmetic, Mifflin-St Jeor TDEE expenditure, US Navy body fat %, macro split planning, loan amortization, and 9-dimensional unit conversions — all processed locally.',
    highlights: [
      {
        title: 'Mifflin-St Jeor TDEE & BMR',
        desc: 'Calculates Basal Metabolic Rate and Total Daily Energy Expenditure across five activity multipliers (1.2× to 1.9×) with deficit (-500 kcal) and surplus (+500 kcal) caloric targets.'
      },
      {
        title: 'US Navy Body Fat & Clinical Metrics',
        desc: 'Precise body composition estimation using the US Navy circumference equations (neck, waist, hip, height) alongside metric and imperial BMI health classification thresholds.'
      },
      {
        title: 'Target Macronutrient Distribution',
        desc: 'Generates tailored daily gram allocations for protein, carbohydrates, and fats across four metabolic frameworks: Balanced (30/40/30), High Protein (40/30/30), Low Carb (40/20/40), and Ketogenic (20/5/75).'
      },
      {
        title: 'Hydration & 1RM Strength Forecasting',
        desc: 'Dynamic baseline fluid intake calculation adjusted for exercise volume (+0.35L per 30 mins) paired with Brzycki and Epley 1-Rep Max formulas with load percentages for progressive overload.'
      },
      {
        title: 'Loan Amortization & Compound Interest',
        desc: 'Full financial schedule projections for personal and mortgage loans alongside multi-frequency compound interest growth models, tip splitting, discount/tax, and offline currency conversions.'
      },
      {
        title: 'Multi-Category Converter & Daily Tools',
        desc: 'Nine-dimensional unit conversions (length, mass, volume, temperature, speed, area, data, energy), recipe scaling proportions, unit price comparisons, date math, base conversion, and haptic tally counting.'
      }
    ],
    icon: '/icons/calculator.png',
    accentColor: '#a855f7',
    categoryGradient: 'linear-gradient(90deg, #d8b4fe 0%, #a855f7 50%, #7c3aed 100%)',
    status: 'beta',
    privacyLink: '/calculator/privacy',
    termsLink: '/calculator/terms'
  },
  {
    id: 'cycle',
    title: 'Cycle',
    category: "Women's Health & Rhythm",
    tagline: 'Sympto-thermal ovulation forecasting & hormonal rhythm',
    desc: 'Private, discreet menstrual cycle telemetry, sympto-thermal ovulation forecasting, and holistic symptom tracking — encrypted on-device with zero trackers, ads, or data brokering.',
    highlights: [
      {
        title: '4-Phase Hormonal Rhythm Wheel',
        desc: 'Visualizes your real-time position within the menstrual cycle across four distinct hormonal stages: Menstrual (restorative), Follicular (rising estrogen), Ovulation (estrogen peak), and Luteal (progesterone dominance).'
      },
      {
        title: 'Sympto-Thermal Ovulation Confirmation',
        desc: 'Validates true ovulation using clinical Roetzer biphasic Basal Body Temperature (BBT) thermal shift detection (3 high temps over 6 low temps) paired with Ovulation Predictor Kit (LH surge) verification.'
      },
      {
        title: 'Personalized Luteal Phase Tracking',
        desc: 'Learns your individual luteal duration (10–18 days) from rolling historical averages instead of assuming a generic 14-day window, filtering irregular cycle anomalies for higher forecast accuracy.'
      },
      {
        title: 'Cervical Telemetry & Fertility Windows',
        desc: 'Tracks cervical mucus consistency across five progressive stages from dry to peak fertile egg-white fluid, computing real-time Low, High, and Peak fertility probability windows.'
      },
      {
        title: 'Holistic 13-Symptom & Mood Journal',
        desc: 'Multi-dimensional daily tracking covering flow intensity, 13 physical symptoms (cramps, bloating, tender breasts, ovulation pain, nausea), 12 mood states, sexual activity, and high-precision temperature logging.'
      },
      {
        title: 'Phase-Synced Workout & Fuel Guidance',
        desc: 'Synchronizes with the EVLOME ecosystem to offer cycle-tailored fitness guidance (HIIT during follicular energy surges vs heavy lifts during ovulation) and metabolic nutrition advice (iron and magnesium support).'
      }
    ],
    icon: '/icons/cycle.png',
    accentColor: '#f43f5e',
    categoryGradient: 'linear-gradient(90deg, #fda4af 0%, #f43f5e 55%, #e11d48 100%)',
    status: 'beta',
    privacyLink: '/cycle/privacy',
    termsLink: '/cycle/terms'
  },
  {
    id: 'activity',
    title: 'Activity',
    category: 'Kinetic & Motion Logging',
    tagline: 'Real-time performance metrics',
    desc: 'A versatile workout logger for gym and home training with set/rep tracking, haptic rest timers, and strength progression metrics.',
    highlights: [
      {
        title: 'Custom Workout Routines',
        desc: 'Pre-loaded compound programs or design your own bespoke lifting splits, supersets, and HIIT rounds.'
      },
      {
        title: 'Rest & Plate Math Assistant',
        desc: 'Integrated barbell plate math and background haptic countdown timers between sets.'
      }
    ],
    icon: '/icons/activity.png',
    accentColor: '#f59e0b',
    categoryGradient: 'linear-gradient(90deg, #fde68a 0%, #f59e0b 55%, #d97706 100%)',
    status: 'development',
    privacyLink: '/activity/privacy',
    termsLink: '/activity/terms'
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    category: 'Metabolic & Vitality Balance',
    tagline: 'Effortless caloric & nutrient balance',
    desc: 'A clean calorie, macro, and nutrient tracker with whole food logging, personalized goals, fasting timers, and hydration tracking.',
    highlights: [
      {
        title: 'Macro & Micronutrient Targets',
        desc: 'Visual telemetry rings for protein, carbohydrates, healthy fats, dietary fiber, and sodium.'
      },
      {
        title: 'Intermittent Fasting Timer',
        desc: 'Preset 16:8, 18:6, and custom schedules with real-time zone stages and fasting telemetry.'
      }
    ],
    icon: '/icons/nutrition.png',
    accentColor: '#10b981',
    categoryGradient: 'linear-gradient(90deg, #a7f3d0 0%, #34d399 50%, #059669 100%)',
    status: 'development',
    privacyLink: '/nutrition/privacy',
    termsLink: '/nutrition/terms'
  }
];

// ============================================================================
// Page Renderers (Clean, Minimal, To The Point)
// ============================================================================

const renderHome = () => `
  <!-- Minimalist Hero Section -->
  <section class="hero-clean">
    <div class="hero-spec-ledger" aria-label="Ecosystem Preview Status">
      <span>Early Access Preview</span>
    </div>

    <h1 class="hero-main-title gradient-headline">
      The Personal Health Suite.
    </h1>

    <p class="hero-lead-text">
      Focused, privacy-first tools designed with quiet precision — and more on the way. 
      From <strong>clinical biometric math</strong> to <strong>cycle rhythm and kinetic tracking</strong> — stored locally on your device.
    </p>

    <div class="hero-actions-row">
      <a href="/beta" class="btn-primary">Join the Beta &rarr;</a>
    </div>
  </section>

  <!-- The Suite Showcase (Clean Clickable Cards, Zero Clutter) -->
  <section id="suite-section" class="section-wrap">
    <span class="section-label">THE SUITE</span>
    <h2 class="section-headline gradient-headline">Essential Tools. Zero Noise.</h2>
    <p class="section-subtext">No bloated social feeds, no third-party data tracking. High-caliber utilities crafted for daily life — with more in active development.</p>

    <div class="suite-grid">
      ${appsData.map(app => `
        <a href="${app.status === 'beta' ? `/${app.id}` : '#suite-section'}" 
           class="app-card ${app.status !== 'beta' ? 'is-disabled' : ''}" 
           style="--app-color: ${app.accentColor}; --category-gradient: ${app.categoryGradient};"
           ${app.status !== 'beta' ? 'onclick="return false;"' : ''}>
          
          <div class="app-card-top">
            <div class="app-icon-squircle">
              <img src="${app.icon}" alt="${app.title} App Icon" class="app-icon-img" />
            </div>
            <span class="app-status-tag ${app.status === 'beta' ? 'is-beta' : 'is-dev'}">
              ${app.status === 'beta' ? 'Beta' : 'Roadmap'}
            </span>
          </div>

          <div class="app-meta-category">${app.category}</div>
          <h3 class="app-card-title">${app.title}</h3>
          <p class="app-card-desc">${app.desc}</p>

          <div class="app-card-arrow">
            ${app.status === 'beta' ? '<span>Explore</span> &rarr;' : '<span>In development</span>'}
          </div>
        </a>
      `).join('')}
    </div>
  </section>

  <!-- Editorial Principles Section (Asymmetric Split, Zero Card Fatigue) -->
  <section id="principles-section" class="section-wrap principles-section">
    <div class="principles-split-layout">
      <!-- Left Column: Manifesto & Ethos -->
      <div class="principles-manifesto-col">
        <span class="section-label">FOUNDATIONS</span>
        <h2 class="principles-headline gradient-headline">Built on Principle.</h2>
        <p class="principles-lead-text">
          Modern health software has succumbed to invasive trackers, bloated feeds, and fragile cloud mandates. 
          EVLOME is engineered as a resilient ecosystem: clinical rigor, unconditional offline access, and focused utilities architected to evolve with you.
        </p>
        <div class="principles-spec-ledger">
          <span>Zero Telemetry &bull; 100% Offline Architecture</span>
        </div>
      </div>

      <!-- Right Column: Hairline Divided Editorial Rows -->
      <div class="principles-list-col">
        <div class="principle-row">
          <div class="principle-row-header">
            <span class="principle-row-num">01</span>
            <div class="principle-row-title-wrap">
              <h3 class="principle-row-title">Local-First Privacy</h3>
              <span class="principle-row-tagline">Your device is your vault</span>
            </div>
          </div>
          <p class="principle-row-desc">
            Your physiological metrics, biometrics, cycle forecasts, and personal streaks reside exclusively in an encrypted on-device database. We operate zero telemetry servers, maintain no remote tracking accounts, and will never sell, broker, or monetize your intimate health data.
          </p>
        </div>

        <div class="principle-row">
          <div class="principle-row-header">
            <span class="principle-row-num">02</span>
            <div class="principle-row-title-wrap">
              <h3 class="principle-row-title">Clinical Precision</h3>
              <span class="principle-row-tagline">Mathematical rigor, zero guesswork</span>
            </div>
          </div>
          <p class="principle-row-desc">
            From Mifflin-St Jeor and Katch-McArdle metabolic expenditure to physiological rhythm curves, every algorithm is rooted in verified medical literature and clinical standards. Transparent, deterministic calculations without opaque AI hallucinations.
          </p>
        </div>

        <div class="principle-row">
          <div class="principle-row-header">
            <span class="principle-row-num">03</span>
            <div class="principle-row-title-wrap">
              <h3 class="principle-row-title">Offline Continuity</h3>
              <span class="principle-row-tagline">Zero latency, zero cloud dependency</span>
            </div>
          </div>
          <p class="principle-row-desc">
            Health tracking cannot pause when connectivity drops. Every calculation, journaling workflow, and diagnostic utility operates entirely offline — ensuring instant response and absolute reliability in airplane mode, remote trails, or deep interiors.
          </p>
        </div>

        <div class="principle-row">
          <div class="principle-row-header">
            <span class="principle-row-num">04</span>
            <div class="principle-row-title-wrap">
              <h3 class="principle-row-title">Clutter-Free Clarity</h3>
              <span class="principle-row-tagline">High-signal ergonomics, zero noise</span>
            </div>
          </div>
          <p class="principle-row-desc">
            No algorithmic feeds, sponsored banners, or vanity metrics competing for your focus. Interfaces are distilled strictly to clinical essentials and tactile controls, allowing you to log information with quiet efficiency and immediately return to your day.
          </p>
        </div>

        <div class="principle-row">
          <div class="principle-row-header">
            <span class="principle-row-num">05</span>
            <div class="principle-row-title-wrap">
              <h3 class="principle-row-title">Adaptive Evolution</h3>
              <span class="principle-row-tagline">Engineered to mature with you</span>
            </div>
          </div>
          <p class="principle-row-desc">
            Your physiological needs and health priorities shift over time, and EVLOME is architected to adapt. We continuously expand the suite with specialized tools and refine existing apps in direct response to user feedback — growing alongside you without bloat.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Minimalist Beta CTA -->
  <section class="beta-cta-clean">
    <h3 class="beta-cta-title gradient-headline">Early Access</h3>
    <p class="beta-cta-desc">TestFlight and Google Play preview slots are open for Calculator+ and Cycle.</p>
    <a href="/beta" class="btn-primary">Join the Beta &rarr;</a>
  </section>
`;

const renderAppPage = (app) => `
  <div class="page-container app-detail-page" style="--app-color: ${app.accentColor};">
    <nav class="detail-nav" aria-label="Navigation">
      <a href="/" class="detail-back-link" onclick="window.handleHierarchicalBack(event, '/')" aria-label="Return to Suite">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Suite</span>
      </a>
    </nav>

    <div class="detail-clean-hero">
      <div class="detail-app-icon">
        <img src="${app.icon}" alt="${app.title} Icon">
      </div>

      <h1 class="detail-page-title">${app.title}</h1>
      <p class="detail-page-desc">${app.desc}</p>

      <div class="detail-actions-row">
        <a href="/beta?app=${app.id}" class="btn-primary">Join the Beta &rarr;</a>
      </div>
    </div>

    <!-- Capabilities Section (Clean Hairline Grid) -->
    <section class="detail-capabilities-section">
      <span class="detail-section-title">Capabilities</span>
      <div class="detail-capabilities-grid">
        ${app.highlights.map(h => `
          <div class="detail-cap-item">
            <h3 class="cap-item-title">${h.title}</h3>
            <p class="cap-item-desc">${h.desc}</p>
          </div>
        `).join('')}
      </div>

      ${app.privacyLink || app.termsLink ? `
        <div class="detail-privacy-row" style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
          ${app.privacyLink ? `
            <a href="${app.privacyLink}" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('${app.privacyLink}'); }">
              ${app.title} Privacy Policy &rarr;
            </a>
          ` : ''}
          ${app.termsLink ? `
            <a href="${app.termsLink}" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('${app.termsLink}'); }">
              ${app.title} Terms of Service &rarr;
            </a>
          ` : ''}
        </div>
      ` : ''}
    </section>
  </div>
`;

const renderBetaPage = (parentApp = null) => {
  const parentUrl = parentApp ? `/${parentApp.id}` : '/';
  const parentLabel = parentApp ? parentApp.title : 'Suite';

  return `
  <div class="page-container beta-page">
    <nav class="detail-nav" aria-label="Navigation">
      <a href="${parentUrl}" class="detail-back-link" onclick="window.handleHierarchicalBack(event, '${parentUrl}')" aria-label="Return to ${parentLabel}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>${parentLabel}</span>
      </a>
    </nav>

    <div class="beta-clean-wrap">
      <div class="beta-header">
        <h1 class="beta-title gradient-headline">Beta Testing Program</h1>
        <p class="beta-subtitle">
          Apply for early TestFlight (iOS) and Google Play (Android) access.
        </p>
      </div>

      <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(window.betaSubmitted) { if(window.betaTimeout) clearTimeout(window.betaTimeout); document.getElementById('beta-form-wrap').style.display='none'; document.getElementById('success-message').style.display='flex'; window.scrollTo({top: 0, behavior: 'smooth'}); }"></iframe>

      <div id="success-message" role="status" aria-live="polite" style="display:none; flex-direction: column; align-items: center; justify-content: center; padding: 4rem 2rem; text-align: center; background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); box-shadow: var(--inner-highlight);">
        <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(52, 211, 153, 0.15); color: #34d399; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2 style="font-size: 1.85rem; margin-bottom: 0.5rem; color: #ffffff; font-weight: 800;">Application Received</h2>
        <p style="color: var(--text-secondary); max-width: 400px; line-height: 1.6; font-size: 0.95rem; margin-bottom: 2rem;">
          Thank you for applying. We will email instructions directly to your registered device email address.
        </p>
        <a href="/" class="btn-primary">Return to Home</a>
      </div>

      <div id="beta-form-wrap">
        <form class="custom-beta-form" action="https://docs.google.com/forms/d/e/1FAIpQLSekI29k1t9_IqrNwZvtcHeIEebY7HNj471CspOid_TlKLoJ9Q/formResponse" method="post" target="hidden_iframe" novalidate onsubmit="return window.handleBetaSubmit(event)" oninput="window.clearBetaError(event)" onchange="window.clearBetaError(event)">
          
          <div class="form-row">
            <div class="form-group">
              <label for="beta-first-name">First Name <span class="required-star">*</span></label>
              <input type="text" id="beta-first-name" name="entry.1026423473" required placeholder="Jane" autocomplete="given-name" class="form-input" />
            </div>
            <div class="form-group">
              <label for="beta-last-name">Last Name <span class="required-star">*</span></label>
              <input type="text" id="beta-last-name" name="entry.2072277110" required placeholder="Doe" autocomplete="family-name" class="form-input" />
            </div>
          </div>

          <div class="form-group">
            <label for="beta-email">Email Address <span class="required-star">*</span></label>
            <input type="email" id="beta-email" name="entry.1247363008" required placeholder="name@icloud.com or gmail.com" autocomplete="email" class="form-input" />
          </div>

          <div class="form-group">
            <label>Device Platform <span class="required-star">*</span></label>
            <div class="checkbox-group">
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.261106749" value="iOS" />
                <span class="checkbox-box" aria-hidden="true"></span>
                <span class="checkbox-text">iOS (iPhone / iPad)</span>
              </label>
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.261106749" value="Android" />
                <span class="checkbox-box" aria-hidden="true"></span>
                <span class="checkbox-text">Android</span>
              </label>
            </div>
          </div>

          <div class="form-group">
            <label>Testing Preference <span class="required-star">*</span></label>
            <div class="radio-group" style="margin-bottom: 0.5rem; flex-wrap: wrap;">
              <label class="custom-radio">
                <input type="radio" name="entry.923244053" value="The Entire EVLOME Suite (All Apps)" checked onchange="document.getElementById('specific-apps-list').style.display = 'none'; Array.from(document.querySelectorAll('.specific-app-checkbox')).forEach(cb => cb.checked = false);" />
                <span class="radio-dot" aria-hidden="true"></span>
                <span class="radio-text">Entire Suite</span>
              </label>
              <label class="custom-radio">
                <input type="radio" name="entry.923244053" value="Specific Apps Only" id="specific-apps-radio" onchange="document.getElementById('specific-apps-list').style.display = 'flex';" />
                <span class="radio-dot" aria-hidden="true"></span>
                <span class="radio-text">Specific Apps</span>
              </label>
            </div>

            <div id="specific-apps-list" class="checkbox-group" style="display: none; flex-direction: column; gap: 0.5rem; padding-left: 0.75rem; border-left: 1.5px solid var(--border-subtle);">
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.610551536" value="EVLOME Calculator+" class="specific-app-checkbox" />
                <span class="checkbox-box" aria-hidden="true"></span>
                <span class="checkbox-text">Calculator+</span>
              </label>
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.610551536" value="EVLOME Cycle" class="specific-app-checkbox" />
                <span class="checkbox-box" aria-hidden="true"></span>
                <span class="checkbox-text">Cycle</span>
              </label>
            </div>
          </div>

          <div class="form-group">
            <label for="beta-frequency">Testing Availability <span class="required-star">*</span></label>
            <select id="beta-frequency" name="entry.454575922" required class="form-input custom-select">
              <option value="" disabled selected>Select frequency...</option>
              <option value="Daily">Daily</option>
              <option value="A few times a week">A few times a week</option>
              <option value="Once a week">Once a week</option>
              <option value="Occasionally">Occasionally</option>
            </select>
          </div>

          <div class="form-group">
            <label for="beta-feedback">Feedback or Notes <span class="optional-tag">(Optional)</span></label>
            <textarea id="beta-feedback" name="entry.1265301105" rows="2" placeholder="Any specific features you care about..." class="form-input"></textarea>
          </div>

          <button id="submit-btn" type="submit" class="btn-primary form-submit-btn">Submit Application</button>
        </form>
      </div>
    </div>
  `;
};

const renderPrivacyPolicy = (app, previousPath = '') => {
  const title = app ? app.title : 'EVLOME Apps';
  let parentUrl = '/';
  let parentLabel = 'Suite';

  if (app) {
    if (previousPath === '/privacy') {
      parentUrl = '/privacy';
      parentLabel = 'Privacy';
    } else {
      parentUrl = `/${app.id}`;
      parentLabel = app.title;
    }
  }

  const termsLink = app ? (app.termsLink || '/terms') : '/terms';
  const termsLabel = app ? `${app.title} Terms of Service` : 'Terms of Service';

  return `
    <div class="page-container privacy-page">
      <nav class="detail-nav" aria-label="Navigation">
        <a href="${parentUrl}" class="detail-back-link" onclick="window.handleHierarchicalBack(event, '${parentUrl}')" aria-label="Return to ${parentLabel}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>${parentLabel}</span>
        </a>
      </nav>

      <div class="privacy-wrap">
        <div class="privacy-hero">
          <span class="section-label">LEGAL & PRIVACY</span>
          <h1 class="gradient-headline privacy-title">Privacy Policy for ${title}</h1>
          <p class="privacy-subtitle">Effective Date: October 15, 2026 &bull; Official Privacy Notice</p>
          <div style="margin-top: 0.75rem;">
            <a href="${termsLink}" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('${termsLink}'); }">
              View ${termsLabel} &rarr;
            </a>
          </div>
        </div>

        ${!app ? `
          <section class="privacy-apps-section">
            <h2 class="privacy-section-title">App-Specific Privacy Notices</h2>
            <p class="privacy-section-desc">Each application is engineered with isolated on-device vaults and zero third-party telemetry.</p>
            
            <div class="privacy-app-pills">
              ${appsData.filter(a => a.privacyLink).map(a => `
                <a href="${a.privacyLink}" class="privacy-app-pill" onclick="if(event) { event.preventDefault(); navigate('${a.privacyLink}'); }">
                  <span>${a.title}</span>
                  <span class="privacy-pill-arrow" aria-hidden="true">&rarr;</span>
                </a>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            ${app && app.id === 'cycle' ? `
              <strong>Zero Health Data Brokering:</strong> EVLOME Cycle stores your menstrual cycle records, Basal Body Temperature (BBT), sympto-thermal observations, and intimate health journals strictly in an encrypted vault on your device. We operate zero trackers, zero advertising SDKs, and will never sell or broker your reproductive health data.
            ` : app && app.id === 'calculator' ? `
              <strong>On-Device Mathematical Vault:</strong> EVLOME Calculator+ processes all arithmetic, clinical biometrics (Mifflin-St Jeor BMR/TDEE, Navy body fat %, macro distribution), and financial amortization schedules exclusively on your device. We never transmit your biometric inputs or calculations to external advertising or analytics networks.
            ` : `
              <strong>Privacy-First Architecture:</strong> EVLOME apps store your data locally on your device by default. We do not sell, rent, or broker your personal information to third parties, and we operate zero third-party ad networks or tracking trackers.
            `}
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Commitments</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">Local-First Storage</h3>
              <p class="commitment-desc">Biometrics, cycle entries, calculation history, and custom logs are stored directly on your personal device using local database encryption.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">Zero Data Selling</h3>
              <p class="commitment-desc">We never sell, rent, share, or broker your reproductive health, physiological logs, or personal metrics with advertisers or data brokers.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">Optional Accounts</h3>
              <p class="commitment-desc">You are free to use our applications offline as a guest without creating an account. Sign-in is optional and only used for cross-device authentication and cloud backup.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Complete Sovereignty</h3>
              <p class="commitment-desc">You retain unconditional ownership over your records. You may export or permanently delete your local database and remote account data at any time.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. Information We Collect</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            ${app && app.id === 'cycle' ? `
              <strong>Cycle & Symptom Data:</strong> Flow intensity, Roetzer biphasic Basal Body Temperature (BBT) readings, cervical mucus consistency, LH surge records, sexual activity dates, and 13 daily physical/mood symptom categories are stored exclusively within your on-device local database.<br/><br/>
            ` : app && app.id === 'calculator' ? `
              <strong>Biometric & Calculation Records:</strong> Height, weight, neck, waist, and hip circumference measurements, calculation presets, and amortization schedules are retained strictly in your device's local memory.<br/><br/>
            ` : `
              <strong>On-Device Data:</strong> Calculations, menstrual cycle telemetry, symptom logs, body measurements, and user preferences are recorded strictly in your local device vault.<br/><br/>
            `}
            <strong>Account Data (Optional):</strong> If you choose to authenticate with Email, Apple, or Google, we store your account email and authentication user ID securely using industry-standard encrypted authentication solely to manage your session.<br/><br/>
            <strong>Crash & Diagnostic Telemetry:</strong> Anonymized OS crash reports provided via Apple App Store and Google Play console (which you may opt out of via device settings).
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. Medical Notice & Disclaimer</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            ${app && app.id === 'cycle' ? `
              <strong>EVLOME Cycle</strong> is designed solely for informational, wellness, and menstrual cycle tracking purposes. <strong>It is not intended as a form of contraception or birth control, nor as a substitute for professional medical advice, clinical diagnosis, or medical treatment.</strong>
            ` : app && app.id === 'calculator' ? `
              <strong>EVLOME Calculator+</strong> provides general arithmetic, financial, and wellness approximations (such as BMI, BMR, and TDEE). These figures are informational estimates and must not replace professional clinical advice or nutritional prescriptions.
            ` : `
              <strong>EVLOME Cycle</strong> is designed solely for informational, wellness, and menstrual cycle tracking purposes. <strong>It is not intended as a form of contraception or birth control, nor as a substitute for professional medical advice, clinical diagnosis, or medical treatment.</strong><br/><br/>
              <strong>EVLOME Calculator+</strong> provides general arithmetic, financial, and wellness approximations (such as BMI, BMR, and TDEE). These figures are informational estimates and must not replace professional clinical advice or nutritional prescriptions.
            `}
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">3. Data Retention & Deletion</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            You can delete your on-device data instantly by clearing app storage or through the in-app settings. If you created a cloud account, you can permanently delete your account and all associated cloud records at any time via Account Settings or by contacting us.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For privacy requests, data deletion, or questions, reach our team at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
    </div>
  `;
};

const renderTermsOfService = (app = null, previousPath = '') => {
  const title = app ? app.title : 'EVLOME Apps';
  let parentUrl = '/';
  let parentLabel = 'Suite';

  if (app) {
    if (previousPath === '/terms') {
      parentUrl = '/terms';
      parentLabel = 'Terms';
    } else {
      parentUrl = `/${app.id}`;
      parentLabel = app.title;
    }
  }

  const privacyLink = app ? (app.privacyLink || '/privacy') : '/privacy';
  const privacyLabel = app ? `${app.title} Privacy Policy` : 'Privacy Policy';

  return `
    <div class="page-container privacy-page">
      <nav class="detail-nav" aria-label="Navigation">
        <a href="${parentUrl}" class="detail-back-link" onclick="window.handleHierarchicalBack(event, '${parentUrl}')" aria-label="Return to ${parentLabel}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>${parentLabel}</span>
        </a>
      </nav>

      <div class="privacy-wrap">
        <div class="privacy-hero">
          <span class="section-label">LEGAL & TERMS</span>
          <h1 class="gradient-headline privacy-title">Terms of Service ${app ? `for ${title}` : ''}</h1>
          <p class="privacy-subtitle">Effective Date: October 15, 2026 &bull; Official Terms of Service</p>
          <div style="margin-top: 0.75rem;">
            <a href="${privacyLink}" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('${privacyLink}'); }">
              View ${privacyLabel} &rarr;
            </a>
          </div>
        </div>

        ${!app ? `
          <section class="privacy-apps-section">
            <h2 class="privacy-section-title">App-Specific Terms of Service</h2>
            <p class="privacy-section-desc">Review specific terms, calculation disclosures, and health notices for each EVLOME application.</p>
            
            <div class="privacy-app-pills">
              ${appsData.filter(a => a.termsLink).map(a => `
                <a href="${a.termsLink}" class="privacy-app-pill" onclick="if(event) { event.preventDefault(); navigate('${a.termsLink}'); }">
                  <span>${a.title}</span>
                  <span class="privacy-pill-arrow" aria-hidden="true">&rarr;</span>
                </a>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            By downloading, accessing, or using ${app ? app.title : 'any EVLOME application or website'}, you agree to be bound by these Terms of Service and our <a href="${privacyLink}" class="privacy-email-link" onclick="if(event) { event.preventDefault(); navigate('${privacyLink}'); }">${privacyLabel}</a>.
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Operating Principles</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">Offline-First Autonomy</h3>
              <p class="commitment-desc">Our tools function locally on your device without mandatory logins or internet paywalls for core daily workflows.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">Zero Ad Monetization</h3>
              <p class="commitment-desc">We do not sell advertising space, embed tracking trackers, or monetize your physiological and biometric data.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">Transparent Subscriptions</h3>
              <p class="commitment-desc">Optional EVLOME One premium capabilities are billed through your standard Apple App Store or Google Play account with effortless cancellation.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Unconditional Ownership</h3>
              <p class="commitment-desc">You own all records and logs you create. Export or wipe your database at any time directly within application settings.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. License & Permitted Use</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            EVLOME grants you a personal, non-transferable, revocable license to use ${app ? app.title : 'our applications'} on compatible iOS and Android devices for individual, non-commercial purposes in compliance with these Terms and platform store policies.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. Important Medical & Calculation Disclaimers</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            ${app && app.id === 'cycle' ? `
              <strong>CRITICAL NOTICE: EVLOME Cycle is NOT contraception or birth control.</strong> It must NOT be used to prevent pregnancy or as a family planning contraceptive method.<br/><br/>
              <strong>Informational & Self-Observation Use Only:</strong> Algorithmic rhythm estimates, fertile window indications, and ovulation forecasting are mathematical models based on user inputs and historical cycles. Biological rhythms fluctuate due to stress, illness, travel, and hormonal changes. Always consult a licensed gynecologist or healthcare professional for reproductive health advice, contraception, or pregnancy management.
            ` : app && app.id === 'calculator' ? `
              <strong>Estimation Models Only:</strong> Health metrics and calculations in EVLOME Calculator+ (including Mifflin-St Jeor BMR/TDEE, US Navy body fat %, and macronutrient allocations) are mathematical approximations based on published scientific equations. They are intended solely for fitness tracking and educational reference and do not constitute clinical nutritional prescriptions or medical diagnosis.<br/><br/>
              <strong>Financial Calculations:</strong> Loan amortization schedules and compound interest projections are mathematical estimates and should not replace certified financial or legal counsel.
            ` : `
              <strong>EVLOME applications do not provide medical advice.</strong><br/><br/>
              <strong>EVLOME Cycle:</strong> Is strictly a wellness self-tracking tool. <strong>It is NOT intended or certified as contraception or birth control, nor as a substitute for professional medical diagnosis or clinical treatment.</strong><br/><br/>
              <strong>EVLOME Calculator+:</strong> Computes statistical estimates for fitness and informational reference. Calculations must not replace evaluation by a licensed physician or registered dietitian.<br/><br/>
              Never disregard professional medical advice or delay seeking clinical care because of information displayed in EVLOME applications.
            `}
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">3. Subscriptions & In-App Purchases (EVLOME One)</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            Certain advanced capabilities (such as encrypted cloud backup and cross-device synchronization) may be offered as optional auto-renewing subscriptions under EVLOME One. Subscriptions are billed directly through your Apple App Store or Google Play account. You can manage or cancel your subscription at any time in your device's account settings at least 24 hours before the renewal date.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">4. User Content & Data Sovereignty</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            You retain unconditional ownership over all calculations, menstrual records, notes, and metrics you input. EVLOME does not claim any ownership rights over your personal data. You may export or delete your local records at any time.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">5. Disclaimers & Limitation of Liability</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            To the maximum extent permitted by applicable law, EVLOME and its creators provide the applications "as is" and "as available" without warranty of any kind. EVLOME shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use our applications.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For legal inquiries, terms clarification, or support, reach our team at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
    </div>
  `;
};

// ============================================================================
// Form Validation & Submission Handler
// ============================================================================
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
    errorDiv.setAttribute('role', 'alert');
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

  const deviceCheckboxes = form.querySelectorAll('input[name="entry.261106749"]');
  if (!Array.from(deviceCheckboxes).some(cb => cb.checked)) {
    showError(form.querySelector('input[name="entry.261106749"]').closest('.checkbox-group'), 'Please select a platform');
    isValid = false;
  }

  const suiteRadios = form.querySelectorAll('input[name="entry.923244053"]');
  const selectedSuiteRadio = Array.from(suiteRadios).find(r => r.checked);
  if (!selectedSuiteRadio) {
    showError(form.querySelector('input[name="entry.923244053"]').closest('.radio-group'), 'Please select a preference');
    isValid = false;
  } else if (selectedSuiteRadio.value === 'Specific Apps Only') {
    const appCheckboxes = form.querySelectorAll('input[name="entry.610551536"]');
    if (!Array.from(appCheckboxes).some(c => c.checked)) {
      showError(form.querySelector('#specific-apps-list'), 'Please select at least one app');
      isValid = false;
    }
  }

  if (!isValid) {
    const firstError = form.querySelector('.error-msg');
    if (firstError) {
      firstError.closest('.form-group').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return false;
  }

  if (selectedSuiteRadio.value === 'The Entire EVLOME Suite (All Apps)') {
    form.querySelectorAll('input[name="entry.610551536"]').forEach(cb => {
      cb.checked = true;
    });
  }

  window.betaSubmitted = true;
  const btn = document.getElementById('submit-btn');
  btn.innerHTML = 'Submitting...';
  btn.style.opacity = '0.7';
  btn.disabled = true;

  window.betaTimeout = setTimeout(() => {
    if (window.betaSubmitted && document.getElementById('beta-form-wrap').style.display !== 'none') {
      const formWrap = document.getElementById('beta-form-wrap');
      const successMsg = document.getElementById('success-message');
      if (formWrap && successMsg) {
        formWrap.style.display = 'none';
        successMsg.style.display = 'flex';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, 4500);

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

// ============================================================================
// Single Page App Router & Navigation
// ============================================================================
const routeScrollPositions = new Map();
const getCurrentRouteKey = () => window.location.pathname || '/';

window.addEventListener('scroll', () => {
  const key = getCurrentRouteKey();
  routeScrollPositions.set(key, window.scrollY);
}, { passive: true });

const isHomeMounted = () => document.getElementById('suite-section') !== null;

const restoreScrollPosition = (targetKey) => {
  if (routeScrollPositions.has(targetKey)) {
    const savedY = routeScrollPositions.get(targetKey);
    requestAnimationFrame(() => {
      window.scrollTo({ top: savedY, left: 0, behavior: 'instant' });
      setTimeout(() => {
        window.scrollTo({ top: savedY, left: 0, behavior: 'instant' });
      }, 30);
    });
  } else if (targetKey === '/' || targetKey === '') {
    // When returning to Suite without a stored scroll offset, gently position at suite section
    requestAnimationFrame(() => {
      const suiteEl = document.getElementById('suite-section');
      if (suiteEl) {
        suiteEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
};

let internalStack = [window.location.pathname + window.location.search];
let previousInternalPath = '';

export const navigate = (url) => {
  if (!url) return;

  const currentKey = getCurrentRouteKey();
  routeScrollPositions.set(currentKey, window.scrollY);

  if (url.startsWith('/#') || url.startsWith('#')) {
    const hashId = url.replace(/^\/?#/, '');
    if (window.location.pathname === '/' || window.location.pathname === '') {
      const el = document.getElementById(hashId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }

  if (url === '/' && isHomeMounted()) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    return;
  }

  previousInternalPath = window.location.pathname;
  window.history.pushState({}, '', url);
  internalStack.push(window.location.pathname + window.location.search);
  renderCurrentRoute();

  const targetKey = getCurrentRouteKey();
  if (!url.includes('#')) {
    restoreScrollPosition(targetKey);
  }
};

window.handleHierarchicalBack = (e, fallbackParentUrl = '/') => {
  if (e) e.preventDefault();
  
  const targetUrl = fallbackParentUrl || '/';
  
  // If we arrived here from targetUrl in this active EVLOME session, unwind browser history
  if (internalStack.length > 1) {
    const prev = internalStack[internalStack.length - 2];
    const prevPathOnly = (prev || '').split('?')[0].split('#')[0] || '/';
    const targetPathOnly = targetUrl.split('?')[0].split('#')[0] || '/';
    
    if (prevPathOnly === targetPathOnly) {
      internalStack.pop(); // pop current
      window.history.back();
      return;
    }
  }
  
  // Otherwise, deterministically navigate up the tree to the hierarchy parent
  navigate(targetUrl);
};

window.handleBackToSuite = (e) => {
  window.handleHierarchicalBack(e, '/');
};

export const scrollToSection = (sectionId) => {
  window.closeMobileMenu();
  const currentPath = window.location.pathname;
  const findElement = () => {
    return document.getElementById(sectionId) || 
           (sectionId === 'principles-section' ? document.getElementById('philosophy-section') : null);
  };

  if (currentPath !== '/' && currentPath !== '') {
    navigate('/');
    setTimeout(() => {
      const el = findElement();
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  } else {
    setTimeout(() => {
      const el = findElement();
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  }
};

window.scrollToSection = scrollToSection;

window.toggleMobileMenu = () => {
  const isOpen = document.body.classList.toggle('menu-open');
  const nav = document.querySelector('.site-nav');
  if (nav) {
    nav.classList.toggle('menu-open', isOpen);
  }
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

window.closeMobileMenu = () => {
  document.body.classList.remove('menu-open');
  const nav = document.querySelector('.site-nav');
  if (nav) {
    nav.classList.remove('menu-open');
  }
  document.body.style.overflow = '';
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeMobileMenu();
  }
});

window.handleLogoClick = (e) => {
  if (e) e.preventDefault();
  window.closeMobileMenu();
  const currentPath = window.location.pathname;
  if (currentPath === '/' || currentPath === '') {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  } else {
    navigate('/');
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
};

const renderCurrentRoute = () => {
  let path = window.location.pathname;
  if (path.length > 1 && path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  if (window.location.hash && window.location.hash.startsWith('#/')) {
    const cleanPath = window.location.hash.slice(1).split('?')[0];
    window.history.replaceState({}, '', cleanPath);
    path = cleanPath;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const contentDiv = document.getElementById('content-area');
  if (!contentDiv) return;

  if (path === '' || path === '/') {
    contentDiv.innerHTML = renderHome();
  } else if (path === '/ecosystem' || path === '/suite') {
    if (!isHomeMounted()) contentDiv.innerHTML = renderHome();
    requestAnimationFrame(() => {
      const el = document.getElementById('suite-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  } else if (path === '/philosophy') {
    if (!isHomeMounted()) contentDiv.innerHTML = renderHome();
    requestAnimationFrame(() => {
      const el = document.getElementById('philosophy-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  } else if (path === '/beta') {
    const appId = searchParams.get('app');
    const parentApp = appId ? appsData.find(a => a.id === appId) : null;
    contentDiv.innerHTML = renderBetaPage(parentApp);
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
          const list = document.getElementById('specific-apps-list');
          if (list) list.style.display = 'flex';
          Array.from(document.querySelectorAll('input[name="entry.610551536"]')).forEach(cb => cb.checked = false);
        }
        const checkbox = document.querySelector(`input[value="${valMap[appId]}"]`);
        if (checkbox) checkbox.checked = true;
      }
    }
  } else if (path === '/privacy' || path.endsWith('/privacy') || path.startsWith('/privacy/')) {
    let appId = '';
    if (path === '/privacy') {
      appId = '';
    } else if (path.endsWith('/privacy')) {
      appId = path.slice(1).replace(/\/privacy$/, '');
    } else {
      appId = path.replace('/privacy/', '');
    }
    const app = appsData.find(a => a.id === appId);
    contentDiv.innerHTML = renderPrivacyPolicy(app || null, previousInternalPath);
  } else if (path === '/terms' || path.endsWith('/terms') || path.startsWith('/terms/')) {
    let appId = '';
    if (path === '/terms') {
      appId = '';
    } else if (path.endsWith('/terms')) {
      appId = path.slice(1).replace(/\/terms$/, '');
    } else {
      appId = path.replace('/terms/', '');
    }
    const app = appsData.find(a => a.id === appId);
    contentDiv.innerHTML = renderTermsOfService(app || null, previousInternalPath);
  } else {
    const appId = path.slice(1);
    const app = appsData.find(a => a.id === appId);
    if (app && app.status !== 'development') {
      contentDiv.innerHTML = renderAppPage(app);
    } else {
      contentDiv.innerHTML = renderHome();
    }
  }

  // Handle anchor scroll
  if (window.location.hash && !window.location.hash.startsWith('#/')) {
    const hashId = window.location.hash.slice(1);
    const targetEl = document.getElementById(hashId);
    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }
};

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('popstate', () => {
  const current = window.location.pathname + window.location.search;
  if (internalStack.length > 1 && internalStack[internalStack.length - 2] === current) {
    internalStack.pop();
  } else {
    internalStack.push(current);
  }
  renderCurrentRoute();
  const targetKey = getCurrentRouteKey();
  restoreScrollPosition(targetKey);
});

// Single clean navigation handler
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;

  const href = link.getAttribute('href');
  if (!href) return;

  if (
    link.target === '_blank' ||
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('javascript:')
  ) {
    return;
  }

  if (href.startsWith('#') || href.startsWith('/#')) {
    const hashId = href.replace(/^\/?#/, '');
    if (window.location.pathname === '/' || window.location.pathname === '') {
      e.preventDefault();
      const el = document.getElementById(hashId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }

  if (href === '/' || href === '/#') {
    if (window.location.pathname === '/' || window.location.pathname === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      return;
    }
  }

  if (href.startsWith('/')) {
    e.preventDefault();
    navigate(href);
  }
});

// ============================================================================
// Layout Initialization (Clean, Minimal Nav)
// ============================================================================
document.querySelector('#app').innerHTML = `
  <nav class="site-nav">
    <div class="nav-inner">
      <a href="/" class="logo-link" onclick="window.handleLogoClick(event)" aria-label="Evlome Home">
        <img src="/logo-wordmark.png" alt="EVLOME" class="nav-logo" />
      </a>
      
      <!-- Desktop Clean Nav -->
      <div class="nav-menu">
        <button type="button" class="nav-link-btn" onclick="window.scrollToSection('suite-section')">Suite</button>
        <a href="/beta" class="nav-pill-btn">Join Beta</a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button type="button" class="nav-burger-btn" id="nav-burger-btn" aria-label="Toggle navigation menu" onclick="window.toggleMobileMenu()">
        <span class="burger-box">
          <span class="burger-line line-top"></span>
          <span class="burger-line line-middle"></span>
          <span class="burger-line line-bottom"></span>
        </span>
      </button>
    </div>
  </nav>

  <!-- Mobile Backdrop Overlay -->
  <div class="mobile-nav-backdrop" id="mobile-nav-backdrop" onclick="window.closeMobileMenu()"></div>

  <!-- Mobile Slide-out Sidebar -->
  <aside class="mobile-nav-sidebar" id="mobile-nav-sidebar" aria-label="Mobile Navigation">
    <div class="mobile-sidebar-inner">
      <!-- Navigation Content -->
      <div class="mobile-sidebar-content">
        <!-- Main Navigation Links -->
        <div class="mobile-sidebar-group">
          <div class="sidebar-group-title">Navigation</div>
          <button type="button" class="mobile-nav-item" onclick="window.scrollToSection('suite-section');">
            <span class="nav-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
            </span>
            <span class="nav-item-text">The Suite</span>
            <span class="nav-item-badge">Ecosystem</span>
          </button>
          
          <button type="button" class="mobile-nav-item" onclick="window.scrollToSection('principles-section');">
            <span class="nav-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </span>
            <span class="nav-item-text">Our Principles</span>
          </button>

          <a href="/privacy" class="mobile-nav-item" onclick="if(event) { event.preventDefault(); window.closeMobileMenu(); navigate('/privacy'); }">
            <span class="nav-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </span>
            <span class="nav-item-text">Privacy Policy</span>
          </a>

          <a href="/terms" class="mobile-nav-item" onclick="if(event) { event.preventDefault(); window.closeMobileMenu(); navigate('/terms'); }">
            <span class="nav-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </span>
            <span class="nav-item-text">Terms of Service</span>
          </a>
        </div>

        <!-- Suite Apps Section -->
        <div class="mobile-sidebar-group">
          <div class="sidebar-group-title">The Suite Apps</div>
          <div class="sidebar-app-links">
            <a href="/calculator" class="sidebar-app-row" onclick="if(event) { event.preventDefault(); window.closeMobileMenu(); navigate('/calculator'); }">
              <span class="app-row-dot" style="background: #a855f7; box-shadow: 0 0 8px rgba(168, 85, 247, 0.5);"></span>
              <div class="app-row-info">
                <div class="app-row-title">Calculator+</div>
                <div class="app-row-desc">Clinical Biometrics &amp; Math</div>
              </div>
              <span class="app-row-arrow">&rarr;</span>
            </a>

            <a href="/cycle" class="sidebar-app-row" onclick="if(event) { event.preventDefault(); window.closeMobileMenu(); navigate('/cycle'); }">
              <span class="app-row-dot" style="background: #f43f5e; box-shadow: 0 0 8px rgba(244, 63, 94, 0.5);"></span>
              <div class="app-row-info">
                <div class="app-row-title">Cycle</div>
                <div class="app-row-desc">Hormonal Rhythm &amp; Fertility</div>
              </div>
              <span class="app-row-arrow">&rarr;</span>
            </a>

            <a href="/activity" class="sidebar-app-row" onclick="if(event) { event.preventDefault(); window.closeMobileMenu(); navigate('/activity'); }">
              <span class="app-row-dot" style="background: #f59e0b; box-shadow: 0 0 8px rgba(245, 158, 11, 0.5);"></span>
              <div class="app-row-info">
                <div class="app-row-title">Activity</div>
                <div class="app-row-desc">Kinetic &amp; Strain</div>
              </div>
              <span class="app-row-arrow">&rarr;</span>
            </a>

            <a href="/nutrition" class="sidebar-app-row" onclick="if(event) { event.preventDefault(); window.closeMobileMenu(); navigate('/nutrition'); }">
              <span class="app-row-dot" style="background: #10b981; box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);"></span>
              <div class="app-row-info">
                <div class="app-row-title">Nutrition</div>
                <div class="app-row-desc">Metabolic Macro</div>
              </div>
              <span class="app-row-arrow">&rarr;</span>
            </a>
          </div>
        </div>

        <!-- Primary CTA -->
        <div class="mobile-sidebar-cta">
          <a href="/beta" class="btn-primary sidebar-cta-btn" onclick="window.closeMobileMenu();">
            Join the Beta &rarr;
          </a>
        </div>
      </div>

      <!-- Footer Contact -->
      <div class="mobile-sidebar-footer">
        <div class="sidebar-socials">
          <a href="mailto:hello@evlome.com" class="sidebar-social-link">hello@evlome.com</a>
          <span class="sidebar-social-sep">&bull;</span>
          <a href="https://instagram.com/evlomeofficial" target="_blank" rel="noopener noreferrer" class="sidebar-social-link">@evlomeofficial</a>
        </div>
        <div class="sidebar-copyright">&copy; ${new Date().getFullYear()} EVLOME. All rights reserved.</div>
      </div>
    </div>
  </aside>

  <div id="content-area"></div>

  <footer class="site-footer">
    <div class="footer-left">
      <div class="footer-brand">&copy; ${new Date().getFullYear()} EVLOME. All rights reserved.</div>
      <a href="/privacy" class="footer-link" onclick="if(event) { event.preventDefault(); navigate('/privacy'); }">Privacy Policy</a>
      <span class="footer-dot" style="opacity: 0.4;">&bull;</span>
      <a href="/terms" class="footer-link" onclick="if(event) { event.preventDefault(); navigate('/terms'); }">Terms of Service</a>
    </div>
    <div class="footer-contact">
      <a href="mailto:hello@evlome.com" class="footer-link-chip">
        <svg viewBox="0 0 512 512" fill="currentColor"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        <span>hello@evlome.com</span>
      </a>
      <a href="https://instagram.com/evlomeofficial" target="_blank" rel="noopener noreferrer" class="footer-link-chip">
        <svg viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        <span>@evlomeofficial</span>
      </a>
    </div>
  </footer>
`;

// Initial mount
renderCurrentRoute();

import { pawdokuConfig, petAvatarSvg, petCrossSvg, petMiniPawSvg, petMiniCrossSvg, pawdokuSvgDefs, renderNutritionDemo, renderActivityDemo } from './home.js';

// ============================================================================
// Product Detail Page Renderer (Tactile Keynote View)
// ============================================================================

export const renderAppPage = (app) => {
  const isGame = app.type === 'game';
  const parentStage = isGame ? 'games-stage' : 'suite-stage';
  const parentLabel = isGame ? 'EVLOME Games' : 'The Health Suite';

  return `
  <div class="detail-view">
    <a href="/#${parentStage}" class="detail-nav-back" onclick="window.handleBackToCategory(event, '${parentStage}')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      <span>Return to ${parentLabel}</span>
    </a>

    <!-- Detail Hero Box -->
    <div class="detail-hero-box">
      <div class="detail-icon-large" style="box-shadow: 0 12px 32px rgba(0,0,0,0.08), 0 0 30px ${app.accentColor}30;">
        <img src="${app.icon}" alt="${app.title} Icon" width="72" height="72" decoding="async">
      </div>

      <div class="stage-badge" style="margin-bottom: 1.25rem;">
        <span class="badge-dot" style="background: ${app.status === 'production' ? '#10b981' : '#8b5cf6'}; box-shadow: 0 0 8px ${app.status === 'production' ? 'rgba(16, 185, 129, 0.6)' : 'rgba(139, 92, 246, 0.6)'};"></span>
        <span>${app.eyebrow || app.category}</span>
        <span style="opacity: 0.35;">&bull;</span>
        <span style="color: ${app.status === 'production' ? '#059669' : '#6d28d9'}; font-weight: 700;">${app.status === 'production' ? 'Live in Production' : 'Beta'}</span>
      </div>

      <h1 class="detail-title">${app.title}</h1>
      <div class="detail-tagline">${app.heroTagline || app.tagline}</div>
      <p class="detail-desc">${app.desc}</p>

      <!-- Direct Production Store Downloads (Above Stats Grid) -->
      ${app.status === 'production' && (app.appStoreUrl || app.playStoreUrl) ? `
        <div class="store-badge-strip">
          ${app.appStoreUrl ? `
            <a href="${app.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-store btn-app-store" title="Download ${app.title} on the Apple App Store">
              <svg class="store-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.92-1 .04-2.14.67-2.81 1.45-.59.67-1.1 1.76-.96 2.82 1.11.09 2.21-.58 2.83-1.35z"/>
              </svg>
              <div class="store-badge-text">
                <span class="store-badge-sub">Download on the</span>
                <span class="store-badge-main">App Store</span>
              </div>
            </a>
          ` : ''}
          ${app.playStoreUrl ? `
            <a href="${app.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-store btn-play-store" title="Get ${app.title} on Google Play">
              <svg class="store-icon" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
              </svg>
              <div class="store-badge-text">
                <span class="store-badge-sub">GET IT ON</span>
                <span class="store-badge-main">Google Play</span>
              </div>
            </a>
          ` : ''}
        </div>
      ` : ''}

      <!-- Stat Counters Grid -->
      ${app.stats && app.stats.length ? `
        <div class="detail-stats-grid">
          ${app.stats.map(s => `
            <div class="stat-item">
              <span class="stat-val" style="color: ${app.accentColor};">${s.value}</span>
              <span class="stat-lbl">${s.label}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Action & Navigation Buttons (Row 2) -->
      <div class="detail-actions-row">
        <a href="/beta?app=${app.id}" class="btn-primary-glow" style="${app.status !== 'production' ? `box-shadow: 0 4px 20px ${app.accentColor}35;` : ''}" onclick="if(event){ event.preventDefault(); navigate('/beta?app=${app.id}'); }">
          Join Beta &rarr;
        </a>
        <a href="/#${parentStage}" class="btn-glass" onclick="window.handleBackToCategory(event, '${parentStage}')">
          Return to ${parentLabel}
        </a>
      </div>
    </div>

    <!-- Single Focused Interactive Experience -->
    <div style="margin-top: 3.5rem;">
      <h2 class="detail-section-title" style="text-align: center;">
        Signature Interaction
      </h2>
      <p style="text-align: center; color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 2.25rem;">
        Interactive preview engineered with on-device precision.
      </p>

      ${app.id === 'ludo-prince' ? `
        <div class="interactive-arena-card ludo-dice-only-card">
          <!-- Tactile Dice Halo with Orbital Ring -->
          <div class="ludo-dice-halo" style="margin: 0.5rem auto 1.5rem;">
            <div class="dice-stage-box" onclick="window.rollLudoDice()" title="Tap dice to roll">
              <div class="interactive-dice ludo-metallic-dice" id="interactive-dice-cube" data-val="6">
                <div class="dice-pips-grid">
                  <span class="dice-pip active" id="dice-pip-1"></span>
                  <span class="dice-pip" id="dice-pip-2"></span>
                  <span class="dice-pip active" id="dice-pip-3"></span>
                  <span class="dice-pip active" id="dice-pip-4"></span>
                  <span class="dice-pip" id="dice-pip-5"></span>
                  <span class="dice-pip active" id="dice-pip-6"></span>
                  <span class="dice-pip active" id="dice-pip-7"></span>
                  <span class="dice-pip" id="dice-pip-8"></span>
                  <span class="dice-pip active" id="dice-pip-9"></span>
                </div>
              </div>
            </div>
          </div>

          <button type="button" class="btn-roll-dice-lg" onclick="window.rollLudoDice()">
            Roll Dice
          </button>

          <div class="dice-result-log" id="dice-log-text">
            <span style="color: var(--text-muted);">Click to roll</span>
          </div>
        </div>
      ` : ''}

      ${app.id === 'pawdoku' ? `
        <div class="interactive-sanctuary-card">
          <!-- Sanctuary Controls Bar -->
          <div class="pawdoku-controls-strip">
            <div class="pawdoku-gesture-pill">
              <span class="gesture-step">Tap ${petMiniCrossSvg}</span>
              <span class="gesture-divider">•</span>
              <span class="gesture-step">Double-tap ${petMiniPawSvg}</span>
              <span class="gesture-divider">•</span>
              <span class="gesture-step" style="color: #EA580C; font-weight: 700;">Swipe line</span>
            </div>
            <button type="button" class="pawdoku-action-btn" onclick="window.restartPawdoku()" title="Reset board">
              <span>↺</span> Reset
            </button>
          </div>

          <!-- 4x4 Tactile Clay Star Battle Grid -->
          <div class="pawdoku-board-wrapper">
            <div class="pawdoku-board-4x4"
                 onpointerdown="window.pawdokuPointerDown(event)"
                 onpointermove="window.pawdokuPointerMove(event)"
                 onpointerup="window.pawdokuPointerUp(event)">
              ${[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => {
                const regId = pawdokuConfig.regionMap[r][c];
                const isInitialPet = (r === 0 && c === 1);
                return `
                  <div class="paw-cell" data-paw-cell="${r}-${c}" data-region="${regId}" data-val="${isInitialPet ? 'pet' : ''}" ondblclick="event.preventDefault()">
                    ${isInitialPet ? `<div class="pet-drop-marker">${petAvatarSvg}</div>` : ''}
                  </div>
                `;
              }).join('')).join('')}
            </div>
          </div>

          <div class="pawdoku-feedback-bar" id="pawdoku-feedback-text">
            <span><strong>1 of 4</strong> companions placed</span>
          </div>
        </div>
      ` : ''}

      ${app.id === 'cycle' ? `
        <div class="phase-display-card cycle-dashboard-viewport">
          <!-- Phase Switcher Tabs -->
          <div class="phase-switcher-nav" style="margin: 0 auto 1.25rem;">
            <button type="button" class="phase-btn" id="phase-btn-menstrual" onclick="window.switchCyclePhase('menstrual')">Menstrual</button>
            <button type="button" class="phase-btn" id="phase-btn-follicular" onclick="window.switchCyclePhase('follicular')">Follicular</button>
            <button type="button" class="phase-btn active" id="phase-btn-ovulation" onclick="window.switchCyclePhase('ovulation')">Ovulation</button>
            <button type="button" class="phase-btn" id="phase-btn-luteal" onclick="window.switchCyclePhase('luteal')">Luteal</button>
          </div>

          <!-- Concentric Radiant Glowing Phase Wheel -->
          <div class="cycle-wheel-container">
            <div class="cycle-ring-outer" id="cycle-ring-glow">
              <div class="cycle-ring-inner">
                <div class="cycle-ring-center-content">
                  <span class="cycle-center-day" id="phase-day-text">Day 14 of 28</span>
                  <h4 class="cycle-center-phase" id="phase-title-text" style="color: #0284c7;">Ovulation Peak</h4>
                  <span class="cycle-center-readiness" id="phase-readiness-text" style="color: #0284c7;">Optimal Strength PRs</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Period Forecast Card -->
          <div class="cycle-period-forecast-card">
            <span class="cycle-forecast-drop">🩸</span>
            <span class="cycle-forecast-text">Next period expected in <strong id="cycle-countdown-days" class="cycle-forecast-days">14 days</strong></span>
          </div>
        </div>
      ` : ''}

      ${app.id === 'calculator' ? `
        <div class="interactive-calculator-card">
          <!-- Goal Selection Chips -->
          <div class="calc-goal-strip">
            <button type="button" class="calc-goal-btn active" id="calc-goal-cut" onclick="window.setCalcGoal('cut', 'calc-goal-cut')">
              <span>Fat Loss</span>
              <span class="calc-goal-pace">-500 kcal</span>
            </button>
            <button type="button" class="calc-goal-btn" id="calc-goal-maintain" onclick="window.setCalcGoal('maintain', 'calc-goal-maintain')">
              <span>Maintain</span>
              <span class="calc-goal-pace">Equilibrium</span>
            </button>
            <button type="button" class="calc-goal-btn" id="calc-goal-bulk" onclick="window.setCalcGoal('bulk', 'calc-goal-bulk')">
              <span>Build Muscle</span>
              <span class="calc-goal-pace">+300 kcal</span>
            </button>
          </div>

          <!-- Biometric Controls Bar -->
          <div class="calc-control-bar">
            <div class="calc-weight-stepper">
              <span class="calc-stepper-lbl">Weight</span>
              <div class="calc-weight-box">
                <button type="button" class="calc-step-btn" onclick="window.adjCalcWeight(-1)">&minus;</button>
                <span class="calc-step-val"><strong id="calc-val-weight">74</strong> kg</span>
                <button type="button" class="calc-step-btn" onclick="window.adjCalcWeight(1)">&#43;</button>
              </div>
            </div>

            <div class="calc-act-strip">
              <button type="button" class="calc-act-chip" id="calc-act-sedentary" onclick="window.setCalcActivity(1.2, 'calc-act-sedentary')">Sedentary</button>
              <button type="button" class="calc-act-chip active" id="calc-act-moderate" onclick="window.setCalcActivity(1.55, 'calc-act-moderate')">Moderate</button>
              <button type="button" class="calc-act-chip" id="calc-act-active" onclick="window.setCalcActivity(1.725, 'calc-act-active')">Active</button>
            </div>
          </div>

          <!-- Calculated Output Bento -->
          <div class="calc-output-bento">
            <div class="calc-hero-result">
              <div class="calc-hero-result-num" id="calc-res-tdee">2,162</div>
              <div class="calc-hero-result-sub" id="calc-res-goal-sub">kcal / day &bull; Fat Loss (-500 kcal)</div>
            </div>

            <!-- Free Macro Splits -->
            <div class="calc-macros-grid">
              <div class="calc-macro-tile">
                <span class="calc-macro-gram" id="calc-res-protein" style="color: #7c3aed;">162g</span>
                <span class="calc-macro-name">Protein</span>
              </div>
              <div class="calc-macro-tile">
                <span class="calc-macro-gram" id="calc-res-carb" style="color: #0284c7;">216g</span>
                <span class="calc-macro-name">Carbs</span>
              </div>
              <div class="calc-macro-tile">
                <span class="calc-macro-gram" id="calc-res-fat" style="color: #ea580c;">72g</span>
                <span class="calc-macro-name">Fats</span>
              </div>
            </div>
          </div>
        </div>
      ` : ''}

      ${app.id === 'nutrition' ? `
        <div style="display: flex; justify-content: center; width: 100%;">
          ${renderNutritionDemo()}
        </div>
      ` : ''}

      ${app.id === 'activity' ? `
        <div style="display: flex; justify-content: center; width: 100%;">
          ${renderActivityDemo()}
        </div>
      ` : ''}
    </div>

    <!-- Highlights Grid -->
    <div style="margin-top: 4rem;">
      <h2 class="detail-section-title" style="margin-bottom: 1.75rem;">
        ${isGame ? 'Gameplay Dynamics & Mechanics' : 'Clinical & Technical Architecture'}
      </h2>

      <div class="detail-highlights-grid">
        ${app.highlights.map(h => `
          <div class="highlight-card">
            <h3 class="highlight-card-title">${h.title}</h3>
            <p class="highlight-card-desc">${h.desc}</p>
          </div>
        `).join('')}
      </div>

      ${app.privacyLink || app.termsLink ? `
        <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
          ${app.privacyLink ? `
            <a href="${app.privacyLink}" class="card-explore-link" style="color: ${app.accentColor};" onclick="if(event) { event.preventDefault(); navigate('${app.privacyLink}'); }">
              ${app.title} Privacy Policy &rarr;
            </a>
          ` : ''}
          ${app.termsLink ? `
            <a href="${app.termsLink}" class="card-explore-link" style="color: ${app.accentColor};" onclick="if(event) { event.preventDefault(); navigate('${app.termsLink}'); }">
              ${app.title} Terms of Service &rarr;
            </a>
          ` : ''}
        </div>
      ` : ''}
    </div>
  </div>
`;
};

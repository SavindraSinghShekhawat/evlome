// ============================================================================
// Legal & Policy Renderers (Suite Apps & Games)
// ============================================================================

import { allProducts } from '../data/products.js';

export const renderLegalBackNav = (app = null, previousPath = "", isTerms = false) => {
  let parentUrl = "/";
  let parentLabel = "Home";

  if (app) {
    if (previousPath === "/privacy" || previousPath === "/terms") {
      parentUrl = previousPath;
      parentLabel = previousPath === "/terms" ? "Terms of Service" : "Ecosystem Privacy";
    } else {
      parentUrl = `/${app.id}`;
      parentLabel = app.title;
    }
  } else if (previousPath && previousPath !== "/" && previousPath !== (isTerms ? "/terms" : "/privacy")) {
    const rawId = previousPath.replace(/^\//, "").split("/")[0].split("?")[0];
    const prevApp = allProducts.find(p => p.id === rawId);
    if (prevApp) {
      parentUrl = previousPath;
      parentLabel = prevApp.title;
    } else if (previousPath === "/beta") {
      parentUrl = "/beta";
      parentLabel = "Beta Access";
    } else {
      parentUrl = previousPath;
      parentLabel = "Previous Page";
    }
  }

  return `
    <nav class="detail-nav" aria-label="Navigation">
      <a href="${parentUrl}" class="detail-nav-back" onclick="window.handleHierarchicalBack(event, \"${parentUrl}\")" aria-label="Return to ${parentLabel}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Return to ${parentLabel}</span>
      </a>
    </nav>
  `;
};


// --- Calculator+ Privacy ---
export const renderCalculatorPrivacy = (previousPath = '') => {
  const app = allProducts.find(p => p.id === 'calculator');

  return `
    <div class="privacy-wrap">
      ${renderLegalBackNav(app, previousPath, false)}
        <div class="privacy-hero">
          <span class="section-label">LEGAL & PRIVACY &bull; CALCULATOR+</span>
          <h1 class="privacy-title">Privacy Policy for EVLOME Calculator+</h1>
          <p class="privacy-subtitle">Effective Date: October 15, 2026 &bull; Official Application Privacy Notice</p>
          <div style="margin-top: 0.75rem;">
            <a href="/calculator/terms" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('/calculator/terms'); }">
              View Calculator+ Terms of Service &rarr;
            </a>
          </div>
        </div>

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            <strong>On-Device Mathematical Vault:</strong> EVLOME Calculator+ processes all arithmetic, clinical biometrics (Mifflin-St Jeor BMR/TDEE, Navy body fat %, macro distribution), and financial amortization schedules exclusively on your device. We never transmit your biometric inputs or calculations to external advertising or analytics networks.
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Commitments for Calculator+</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">On-Device Processing</h3>
              <p class="commitment-desc">Biometric measurements (height, weight, body circumferences) and calculations are computed locally using your hardware processor and stored in your device's private vault.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">Zero Biometric Brokering</h3>
              <p class="commitment-desc">We never sell, rent, monetize, or transmit your physical measurements, caloric targets, or financial calculations to third parties, advertisers, or health data brokers.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">100% Offline &amp; Guest Access</h3>
              <p class="commitment-desc">Access all clinical biometrics, everyday math, financial models, and conversion tools completely offline without ever being required to create an account.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Instant Local Purging</h3>
              <p class="commitment-desc">You retain unconditional ownership over your numbers. Clear your calculation history, custom presets, or cached variables at any time with a single tap in Settings.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. Information Handled by Calculator+</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            <strong>Biometrics &amp; Physical Measurements:</strong> Anthropometric inputs you enter (height, weight, age, biological sex, neck, waist, and hip circumferences for Mifflin-St Jeor and US Navy body fat equations) are stored strictly within your local on-device database.<br/><br/>
            <strong>Calculation &amp; Financial Records:</strong> Calculation history, loan principal/amortization variables, compound interest models, unit conversions, and custom tally counts remain on-device.<br/><br/>
            <strong>Account Data (Optional):</strong> If you choose to authenticate to enable EVLOME One cross-device history synchronization, we store your account email and authentication user ID securely solely to maintain your session.<br/><br/>
            <strong>Diagnostics:</strong> Anonymized OS crash reports provided via Apple App Store or Google Play console (which you may opt out of via operating system settings).
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. Health &amp; Non-Clinical Disclaimers</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            Calculations provided by EVLOME Calculator+ (such as BMR, TDEE, body fat percentage, and macronutrient allocations) are statistical estimates derived from standard scientific equations. They are intended strictly for educational and fitness self-tracking reference and do not constitute certified clinical diagnosis, dietary prescriptions, or medical advice.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">3. Data Retention &amp; Deletion</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            You can clear all calculation records and biometric profiles instantly by resetting history in Settings or deleting the application. If you created an optional cloud account, you can permanently delete your account and all associated cloud records at any time in Account Settings or by contacting us.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For privacy requests, data deletion, or questions regarding Calculator+, contact us at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
  `;
};

// --- Calculator+ Terms ---
export const renderCalculatorTerms = (previousPath = '') => {
  const app = allProducts.find(p => p.id === 'calculator');

  return `
    <div class="privacy-wrap">
      ${renderLegalBackNav(app, previousPath, true)}
        <div class="privacy-hero">
          <span class="section-label">LEGAL & TERMS &bull; CALCULATOR+</span>
          <h1 class="privacy-title">Terms of Service for EVLOME Calculator+</h1>
          <p class="privacy-subtitle">Effective Date: October 15, 2026 &bull; Official Application Terms</p>
          <div style="margin-top: 0.75rem;">
            <a href="/calculator/privacy" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('/calculator/privacy'); }">
              View Calculator+ Privacy Policy &rarr;
            </a>
          </div>
        </div>

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            By downloading, accessing, or using EVLOME Calculator+, you agree to be bound by these Terms of Service and our <a href="/calculator/privacy" class="privacy-email-link" onclick="if(event) { event.preventDefault(); navigate('/calculator/privacy'); }">Calculator+ Privacy Policy</a>.
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Operating Principles</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">Offline-First Autonomy</h3>
              <p class="commitment-desc">Full arithmetic, clinical formulas, and conversion tools operate locally on your device without mandatory sign-ins or internet paywalls.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">Zero Data Brokering</h3>
              <p class="commitment-desc">We never sell, rent, or broker your physical metrics, biometric calculations, or calculation history to third parties.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">Transparent Subscriptions</h3>
              <p class="commitment-desc">Optional EVLOME One cross-device history sync is billed directly through your Apple App Store or Google Play account with effortless cancellation.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Unconditional Ownership</h3>
              <p class="commitment-desc">You retain full ownership over all calculations, custom variables, and notes created in Calculator+.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. License &amp; Permitted Use</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            EVLOME grants you a personal, non-transferable, revocable license to use Calculator+ on compatible iOS and Android devices for individual, non-commercial purposes in compliance with these Terms and platform store policies.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. Clinical Biometric &amp; Financial Disclaimers</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            <strong>Biometric &amp; Fitness Estimations:</strong> Formulas including Mifflin-St Jeor (BMR &amp; TDEE), US Navy Circumference Body Fat %, and target macronutrient splits provide statistical approximations based on generalized population formulas. They are provided solely for educational reference and fitness tracking. They do NOT constitute medical advice, clinical diagnosis, or dietary prescriptions.<br/><br/>
            <strong>Financial Calculations:</strong> Loan amortization schedules, compound interest growth projections, tip calculations, and currency conversions are mathematical models for estimation purposes only and must not replace professional financial, tax, or legal counsel.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">3. Subscriptions &amp; In-App Purchases (EVLOME One)</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            Optional cloud backup and cross-device sync features may be offered as auto-renewing subscriptions through your Apple App Store or Google Play account. Subscriptions can be managed or canceled anytime in your device account settings at least 24 hours prior to renewal.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">4. User Content &amp; Data Ownership</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            All numerical inputs, calculation histories, custom presets, and notes belong unconditionally to you. EVLOME does not claim ownership over any user data.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">5. Limitation of Liability</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            EVLOME Calculator+ is provided "as is" and "as available". To the maximum extent permitted by law, EVLOME and its creators shall not be liable for any direct, indirect, incidental, or consequential damages resulting from calculation inaccuracies, reliance on mathematical models, or use of the application.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For legal inquiries, terms clarification, or support regarding Calculator+, reach our team at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
  `;
};

// --- Cycle Privacy ---
export const renderCyclePrivacy = (previousPath = '') => {
  const app = allProducts.find(p => p.id === 'cycle');

  return `
    <div class="privacy-wrap">
      ${renderLegalBackNav(app, previousPath, false)}
        <div class="privacy-hero">
          <span class="section-label">LEGAL & PRIVACY &bull; CYCLE</span>
          <h1 class="privacy-title">Privacy Policy for EVLOME Cycle</h1>
          <p class="privacy-subtitle">Effective Date: October 15, 2026 &bull; Official Application Privacy Notice</p>
          <div style="margin-top: 0.75rem;">
            <a href="/cycle/terms" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('/cycle/terms'); }">
              View Cycle Terms of Service &rarr;
            </a>
          </div>
        </div>

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            <strong>Zero Health Data Brokering:</strong> EVLOME Cycle is engineered around absolute reproductive privacy. Your menstrual records, Basal Body Temperature (BBT), sympto-thermal observations, and intimate health journals are stored in an encrypted vault directly on your device. We operate zero trackers, zero advertising SDKs, and will never sell or broker your reproductive health data.
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Commitments for Cycle</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">Encrypted On-Device Vault</h3>
              <p class="commitment-desc">All period dates, temperature readings, cervical fluid observations, and symptom notes stay encrypted locally on your personal hardware.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">Unconditional Zero-Selling</h3>
              <p class="commitment-desc">We never sell, rent, license, or share your reproductive health, intimate activity, or hormonal cycle records with advertisers, data brokers, or third parties.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">Complete Offline Freedom</h3>
              <p class="commitment-desc">Full sympto-thermal cycle forecasting, ovulation detection, and rhythm tracking operate offline without creating an account.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Total Sovereign Deletion</h3>
              <p class="commitment-desc">Export your cycle history or permanently wipe your local health vault with a single tap in Settings.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. Information Handled by Cycle</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            <strong>Menstrual &amp; Hormonal Telemetry:</strong> Cycle start and end dates, flow intensity, Basal Body Temperature (BBT) biphasic readings, Ovulation Predictor Kit (LH surge) results, cervical mucus consistency, and sexual activity dates are stored strictly in your local device vault.<br/><br/>
            <strong>Symptom &amp; Mood Journal:</strong> Daily logs covering 13 physical symptoms and 12 mood states are retained exclusively on your device.<br/><br/>
            <strong>Account Data (Optional):</strong> If you choose to sign in to enable EVLOME One cross-device sync, your credentials and end-to-end encrypted backup are stored securely solely to maintain multi-device access.<br/><br/>
            <strong>Zero Commercial Analytics:</strong> No third-party health analytics, behavioral trackers, or marketing SDKs are embedded in the app.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. Critical Medical &amp; Contraception Notice</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            EVLOME Cycle is strictly for personal menstrual observation and wellness self-tracking. <strong>It is NOT intended, certified, or designed as a form of contraception or birth control, nor as a substitute for professional clinical medical advice, gynecological diagnosis, or treatment.</strong>
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">3. Data Sovereignty &amp; Deletion</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            You can instantly erase all cycle entries, intimate logs, and temperature observations directly in app settings. If you created an optional cloud account, you can permanently delete your account and all associated cloud records at any time via Account Settings or by contacting us.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For reproductive privacy inquiries, data deletion, or questions regarding Cycle, reach our team at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
  `;
};

// --- Cycle Terms ---
export const renderCycleTerms = (previousPath = '') => {
  const app = allProducts.find(p => p.id === 'cycle');

  return `
    <div class="privacy-wrap">
      ${renderLegalBackNav(app, previousPath, true)}
        <div class="privacy-hero">
          <span class="section-label">LEGAL & TERMS &bull; CYCLE</span>
          <h1 class="privacy-title">Terms of Service for EVLOME Cycle</h1>
          <p class="privacy-subtitle">Effective Date: October 15, 2026 &bull; Official Application Terms</p>
          <div style="margin-top: 0.75rem;">
            <a href="/cycle/privacy" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('/cycle/privacy'); }">
              View Cycle Privacy Policy &rarr;
            </a>
          </div>
        </div>

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            By downloading, accessing, or using EVLOME Cycle, you agree to be bound by these Terms of Service and our <a href="/cycle/privacy" class="privacy-email-link" onclick="if(event) { event.preventDefault(); navigate('/cycle/privacy'); }">Cycle Privacy Policy</a>.
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Operating Principles</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">Offline-First Autonomy</h3>
              <p class="commitment-desc">Complete period tracking, Roetzer thermal shifts, and cycle journaling function locally without mandatory accounts or paywalls.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">Zero Health Monetization</h3>
              <p class="commitment-desc">We never commodify, monetize, or sell advertising based on your intimate reproductive health and cycle patterns.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">Transparent Subscriptions</h3>
              <p class="commitment-desc">Optional EVLOME One multi-device encrypted backup is billed transparently through your Apple App Store or Google Play account.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Intimate Data Sovereignty</h3>
              <p class="commitment-desc">You own all cycle entries and symptom records. Export or permanently purge your health vault anytime.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. License &amp; Personal Wellness Tracking</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            EVLOME grants you a personal, non-transferable, revocable license to use EVLOME Cycle on compatible iOS and Android devices for individual wellness self-tracking and menstrual cycle observation.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. CRITICAL MEDICAL &amp; CONTRACEPTION DISCLAIMER</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            <strong>NOT A CONTRACEPTIVE OR BIRTH CONTROL:</strong> EVLOME Cycle is NOT contraception or birth control. It must NOT be used to prevent pregnancy or as a family planning contraceptive method.<br/><br/>
            <strong>Algorithmic Estimation Only:</strong> Ovulation confirmations, fertile window estimates, and period forecasts are algorithmic approximations based on historical data and user input.<br/><br/>
            <strong>No Substitute for Clinical Medical Care:</strong> EVLOME Cycle is not a healthcare provider and does not give medical advice. Always consult a licensed gynecologist or qualified physician for reproductive health, fertility management, contraception, or pregnancy evaluation.<br/><br/>
            <strong>User Assumption of Risk:</strong> You assume full and exclusive responsibility for decisions made regarding sexual activity, contraception, family planning, and healthcare consultations.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">3. Subscriptions &amp; In-App Purchases (EVLOME One)</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            Optional cloud sync and encrypted backup billed via Apple ID / Google Play. Auto-renewing, cancelable anytime in device account settings at least 24 hours prior to renewal.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">4. User Content &amp; Data Sovereignty</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            All cycle records, symptom journals, and temperature readings belong unconditionally to you. EVLOME claims zero ownership rights over your personal health records.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">5. Disclaimers &amp; Limitation of Liability</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            To the maximum extent permitted by law, EVLOME and its creators disclaim all liability for pregnancy, reproductive health events, or reliance on cycle forecasting algorithms.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For legal inquiries, terms clarification, or support regarding Cycle, reach our team at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
  `;
};

// --- Ludo Prince Privacy ---
export const renderLudoPrivacy = (previousPath = '') => {
  const app = allProducts.find(p => p.id === 'ludo-prince');

  return `
    <div class="privacy-wrap">
      ${renderLegalBackNav(app, previousPath, false)}
        <div class="privacy-hero">
          <span class="section-label">LEGAL & PRIVACY &bull; LUDO PRINCE</span>
          <h1 class="privacy-title">Privacy Policy for EVLOME Ludo Prince</h1>
          <p class="privacy-subtitle">Effective Date: November 14, 2026 &bull; Official Game Privacy Notice</p>
          <div style="margin-top: 0.75rem;">
            <a href="/ludo-prince/terms" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('/ludo-prince/terms'); }">
              View Ludo Prince Terms of Service &rarr;
            </a>
          </div>
        </div>

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            <strong>Respectful Gaming Without Surveillance:</strong> EVLOME Ludo Prince is built to bring people together for classic board play. We do not operate invasive advertising trackers, sell gameplay data to brokers, or monetize your personal gaming habits. Real-time multiplayer data is processed securely and ephemeral game session tokens are purged after match completion.
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Commitments for Ludo Prince</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">Zero Cross-App Tracking</h3>
              <p class="commitment-desc">We do not track your device ID across third-party apps or broker your personal gaming habits to data brokers.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">Secure Matchmaking</h3>
              <p class="commitment-desc">Online multiplayer uses encrypted Google Firebase Realtime channels solely to sync pawn positions, dice rolls, and turn states.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">Guest-First Play</h3>
              <p class="commitment-desc">Play offline vs AI bots or pass-and-play with friends without an account. Online play is fully accessible with guest profiles.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Complete Data Deletion</h3>
              <p class="commitment-desc">You can delete your player profile, match history, and friend records at any time directly in the game settings.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. Information Collected &amp; How It Is Used</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            <strong>Ephemeral Multiplayer Session Data:</strong> When playing online matches, game room IDs, dice roll values, player turn transitions, and pawn positions are synchronized in real-time through secure cloud relays. This data is discarded when the room is closed.<br/><br/>
            <strong>Player Profile &amp; Nickname:</strong> If you enter a display nickname or select an avatar, it is stored in your local storage and visible to opponents in the match lobby.<br/><br/>
            <strong>Authentication Data (Optional):</strong> If you authenticate with Google Play Games, Apple Game Center, or Firebase Auth, we securely store your authenticated player ID to preserve match statistics, friend invites, and leaderboard achievements.<br/><br/>
            <strong>Local Pass &amp; Play Data:</strong> Offline games played against bots or with friends on a single device reside 100% on your device and are never transmitted externally.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. Third-Party Infrastructure</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            Ludo Prince utilizes Google Cloud and Firebase infrastructure (Firestore, Firebase Realtime Database, Cloud Functions) solely for matchmaking, lobby signaling, and push notifications for game invites. These services operate under strict enterprise security terms and are not utilized for advertising profiling.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">3. Data Retention &amp; Player Account Removal</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            You can delete your cloud-linked player profile, friend connections, and recorded statistics at any time by selecting "Delete Account &amp; Profile" within the game settings or by contacting our team.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For gaming privacy requests, player account deletion, or feedback regarding Ludo Prince, contact us at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
  `;
};

// --- Ludo Prince Terms ---
export const renderLudoTerms = (previousPath = '') => {
  const app = allProducts.find(p => p.id === 'ludo-prince');

  return `
    <div class="privacy-wrap">
      ${renderLegalBackNav(app, previousPath, true)}
        <div class="privacy-hero">
          <span class="section-label">LEGAL & TERMS &bull; LUDO PRINCE</span>
          <h1 class="privacy-title">Terms of Service for EVLOME Ludo Prince</h1>
          <p class="privacy-subtitle">Effective Date: November 14, 2026 &bull; Official Game Terms</p>
          <div style="margin-top: 0.75rem;">
            <a href="/ludo-prince/privacy" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('/ludo-prince/privacy'); }">
              View Ludo Prince Privacy Policy &rarr;
            </a>
          </div>
        </div>

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            By downloading, accessing, or playing EVLOME Ludo Prince, you agree to these Terms of Service and our <a href="/ludo-prince/privacy" class="privacy-email-link" onclick="if(event) { event.preventDefault(); navigate('/ludo-prince/privacy'); }">Ludo Prince Privacy Policy</a>.
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Game Principles</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">Fair Play &amp; Sportsmanship</h3>
              <p class="commitment-desc">We foster a welcoming environment. Cheating, bot manipulation, or match abandonment exploits are strictly prohibited.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">No Pay-To-Win</h3>
              <p class="commitment-desc">Dice rolls and board movement are governed by deterministic random generators. We never sell unfair gameplay advantages.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">Guest-Friendly Access</h3>
              <p class="commitment-desc">Enjoy full local and multiplayer access without forced registration or mandatory social media linking.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Data Sovereignty</h3>
              <p class="commitment-desc">Wipe your stats or delete your game account anytime. We never monetize or lock your personal game records.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. Game License &amp; Multiplayer Code of Conduct</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            EVLOME grants you a personal, non-transferable, revocable license to play Ludo Prince for personal recreational entertainment on compatible iOS and Android devices.<br/><br/>
            Players agree not to: (a) employ modified clients, bots, or unauthorized third-party automation tools; (b) disrupt multiplayer lobbies through toxic usernames or room names; (c) reverse engineer or attempt unauthorized access to game servers.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. Dice Randomness &amp; Match Continuity</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            Dice rolling mechanics in Ludo Prince utilize cryptographically verified pseudorandom number generation to guarantee fairness for all participants. While the game provides robust reconnect handling, EVLOME cannot guarantee uninterrupted online connectivity during severe local cellular drops.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">3. Intellectual Property</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            All custom board designs, spatial audio tracks, visual assets, animations, and software code constituting EVLOME Ludo Prince are the intellectual property of EVLOME.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For terms clarification, player inquiries, or feedback regarding Ludo Prince, reach our team at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
  `;
};

// --- Pawdoku Privacy ---
export const renderPawdokuPrivacy = (previousPath = '') => {
  const app = allProducts.find(p => p.id === 'pawdoku');

  return `
    <div class="privacy-wrap">
      ${renderLegalBackNav(app, previousPath, false)}
        <div class="privacy-hero">
          <span class="section-label">LEGAL & PRIVACY &bull; PAWDOKU</span>
          <h1 class="privacy-title">Privacy Policy for EVLOME Pawdoku</h1>
          <p class="privacy-subtitle">Effective Date: November 14, 2026 &bull; Official Game Privacy Notice</p>
          <div style="margin-top: 0.75rem;">
            <a href="/pawdoku/terms" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('/pawdoku/terms'); }">
              View Pawdoku Terms of Service &rarr;
            </a>
          </div>
        </div>

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            <strong>Mindful, Child-Safe Sanctuary:</strong> EVLOME Pawdoku is designed as a calm, restorative puzzle haven. All pet adoption progress, decor collections, and puzzle states reside 100% locally on your personal device. We operate zero commercial advertising networks, zero user profiling trackers, and zero behavioral telemetry.
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Commitments for Pawdoku</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">100% On-Device Sanctuary</h3>
              <p class="commitment-desc">Your sanctuary pets, daily cozy streaks, decor inventory, and puzzle solutions are stored solely in your local hardware storage.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">Zero Profiling or Tracking</h3>
              <p class="commitment-desc">We operate zero behavioral profiling trackers and embed zero third-party surveillance scripts. Ideal and safe for all ages.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">Complete Offline Play</h3>
              <p class="commitment-desc">Pawdoku generates puzzles, plays acoustic chords, and fosters your sanctuary entirely offline with zero internet requirement.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Simple Data Reset</h3>
              <p class="commitment-desc">You can reset your pet sanctuary or clear puzzle history at any time with a single tap in Settings.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. Data Stored Locally by Pawdoku</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            Pawdoku only accesses local storage to save your game state: pet affection levels, kibble balances, unlocked sanctuary stages, and completed puzzle boards. No personal identifying information (name, email, location, or contacts) is requested or stored.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. Child Safety &amp; Family Privacy</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            Because Pawdoku is an offline, non-commercial game with no user tracking or data transmission, it is inherently safe for children and families under COPPA and international privacy standards.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For questions regarding Pawdoku privacy, reach our team at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
  `;
};

// --- Pawdoku Terms ---
export const renderPawdokuTerms = (previousPath = '') => {
  const app = allProducts.find(p => p.id === 'pawdoku');

  return `
    <div class="privacy-wrap">
      ${renderLegalBackNav(app, previousPath, true)}
        <div class="privacy-hero">
          <span class="section-label">LEGAL & TERMS &bull; PAWDOKU</span>
          <h1 class="privacy-title">Terms of Service for EVLOME Pawdoku</h1>
          <p class="privacy-subtitle">Effective Date: November 14, 2026 &bull; Official Game Terms</p>
          <div style="margin-top: 0.75rem;">
            <a href="/pawdoku/privacy" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('/pawdoku/privacy'); }">
              View Pawdoku Privacy Policy &rarr;
            </a>
          </div>
        </div>

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            By downloading, playing, or accessing EVLOME Pawdoku, you agree to these Terms of Service and our <a href="/pawdoku/privacy" class="privacy-email-link" onclick="if(event) { event.preventDefault(); navigate('/pawdoku/privacy'); }">Pawdoku Privacy Policy</a>.
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Game Principles</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">Mindful Relaxation</h3>
              <p class="commitment-desc">Designed for stress-free enjoyment. Puzzles and pets are structured to provide calm without anxiety or forced speed.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">Zero Pay-to-Progress</h3>
              <p class="commitment-desc">All gameplay, haven decor, and puzzles are accessible through gentle natural play without predatory micro-transactions.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">Offline Freedom</h3>
              <p class="commitment-desc">Play anywhere without active data connections. Your progress remains safe on your device.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Unconditional Ownership</h3>
              <p class="commitment-desc">You own your save data. Reset, export, or back up your device storage whenever you wish.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. Game License &amp; Use</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            EVLOME grants you a personal, non-exclusive, non-transferable license to use Pawdoku on compatible iOS and Android devices for personal, non-commercial entertainment.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. Intellectual Property</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            All pet character illustrations, sanctuary decor designs, acoustic chord compositions, and game engine logic in Pawdoku are the intellectual property of EVLOME.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For terms clarification or feedback regarding Pawdoku, contact our team at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
  `;
};

// --- Global Privacy Policy ---
export const renderGlobalPrivacy = (previousPath = '') => {
  return `
    <div class="privacy-wrap">
      ${renderLegalBackNav(null, previousPath, false)}
        <div class="privacy-hero">
          <span class="section-label">LEGAL & PRIVACY &bull; EVLOME ECOSYSTEM</span>
          <h1 class="privacy-title">EVLOME Ecosystem Privacy Policy</h1>
          <p class="privacy-subtitle">Effective Date: November 14, 2026 &bull; Unified Studio Privacy Notice</p>
          <div style="margin-top: 0.75rem;">
            <a href="/terms" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('/terms'); }">
              View Ecosystem Terms of Service &rarr;
            </a>
          </div>
        </div>

        <section class="privacy-apps-section">
          <h2 class="privacy-section-title">Product-Specific Privacy Notices</h2>
          <p class="privacy-section-desc">Each application and game is engineered with isolated on-device vaults and privacy-first architecture. Review the dedicated notice for each:</p>
          
          <div class="privacy-app-pills">
            ${allProducts.filter(a => a.privacyLink).map(a => `
              <a href="${a.privacyLink}" class="privacy-app-pill" onclick="if(event) { event.preventDefault(); navigate('${a.privacyLink}'); }">
                <span>${a.title} Privacy</span>
                <span class="privacy-pill-arrow" aria-hidden="true">&rarr;</span>
              </a>
            `).join('')}
          </div>
        </section>

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            <strong>Unified Privacy-First Architecture:</strong> Across both the EVLOME Suite and EVLOME Games, all software defaults to on-device processing and local storage. We do not sell, rent, or broker your personal information to third parties, and we operate zero behavioral profiling trackers.
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Ecosystem Commitments</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">Local-First Storage</h3>
              <p class="commitment-desc">All health metrics, calculation histories, and game saves are stored directly in isolated on-device databases.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">Zero Data Selling</h3>
              <p class="commitment-desc">We never sell, rent, share, or broker your personal metrics, reproductive health, or game data with advertisers.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">Optional Accounts</h3>
              <p class="commitment-desc">Every application is fully functional offline as a guest. Cloud accounts are strictly optional for multi-device sync.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Complete Sovereignty</h3>
              <p class="commitment-desc">You retain unconditional ownership over your records. You may export or permanently delete your data anytime.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. Product-by-Product Data Handling</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            <strong>EVLOME Calculator+:</strong> Anthropometric measurements (height, weight, body circumferences) and calculation records are stored locally. Zero external transmission.<br/><br/>
            <strong>EVLOME Cycle:</strong> Menstrual telemetry, Basal Body Temperature (BBT), cervical fluid stages, and 13 symptom categories are retained in an isolated, encrypted on-device vault.<br/><br/>
            <strong>EVLOME Ludo Prince:</strong> Real-time multiplayer session tokens and matchmaking states are processed securely via Firebase and discarded after match conclusion. Offline vs AI and pass-and-play matches remain 100% on-device.<br/><br/>
            <strong>EVLOME Pawdoku:</strong> Sanctuary pets, decor customization, and puzzle progression are stored exclusively on your device with zero remote tracking.<br/><br/>
            <strong>EVLOME Activity &amp; Nutrition:</strong> Kinetic workout splits, barbell plate math, fasting timers, and macronutrient targets are recorded locally on your device.<br/><br/>
            <strong>Account Data (Optional):</strong> If you choose to sign in for multi-device sync, your credentials and encrypted backup are stored securely solely to manage your session.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. General Health &amp; Non-Clinical Disclaimers</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            EVLOME health applications are designed for informational, wellness self-tracking, and reference purposes only. They are not intended as substitutes for professional clinical medical advice, diagnosis, or treatment. Specifically, <strong>EVLOME Cycle is NOT contraception or birth control</strong>, and <strong>EVLOME Calculator+ calculations are statistical estimates</strong>.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">3. Data Retention &amp; Deletion</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            You can delete your on-device data instantly by clearing storage within individual apps. If you created a cloud account, you can permanently delete your account and all associated cloud records at any time via Account Settings or by contacting us.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For ecosystem privacy requests, data deletion, or questions, reach our team at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
  `;
};

// --- Global Terms of Service ---
export const renderGlobalTerms = (previousPath = '') => {
  return `
    <div class="privacy-wrap">
      ${renderLegalBackNav(null, previousPath, true)}
        <div class="privacy-hero">
          <span class="section-label">LEGAL & TERMS &bull; EVLOME ECOSYSTEM</span>
          <h1 class="privacy-title">EVLOME Ecosystem Terms of Service</h1>
          <p class="privacy-subtitle">Effective Date: November 14, 2026 &bull; Unified Terms of Service</p>
          <div style="margin-top: 0.75rem;">
            <a href="/privacy" class="quiet-link" onclick="if(event) { event.preventDefault(); navigate('/privacy'); }">
              View Ecosystem Privacy Policy &rarr;
            </a>
          </div>
        </div>

        <section class="privacy-apps-section">
          <h2 class="privacy-section-title">Product-Specific Terms of Service</h2>
          <p class="privacy-section-desc">Review dedicated terms, gameplay rules, calculation disclosures, and medical notices for each product:</p>
          
          <div class="privacy-app-pills">
            ${allProducts.filter(a => a.termsLink).map(a => `
              <a href="${a.termsLink}" class="privacy-app-pill" onclick="if(event) { event.preventDefault(); navigate('${a.termsLink}'); }">
                <span>${a.title} Terms</span>
                <span class="privacy-pill-arrow" aria-hidden="true">&rarr;</span>
              </a>
            `).join('')}
          </div>
        </section>

        <div class="privacy-callout-card">
          <p class="privacy-callout-text">
            By downloading, accessing, or using any EVLOME application, game, or website, you agree to be bound by these Terms of Service and our <a href="/privacy" class="privacy-email-link" onclick="if(event) { event.preventDefault(); navigate('/privacy'); }">Ecosystem Privacy Policy</a>.
          </p>
        </div>

        <div class="privacy-content-block">
          <h2 class="privacy-block-heading">Core Operating Principles</h2>
          <div class="privacy-commitments-grid">
            <div class="privacy-commitment-card">
              <div class="commitment-badge">01</div>
              <h3 class="commitment-title">Offline-First Autonomy</h3>
              <p class="commitment-desc">Our tools and games function locally on your device without mandatory logins or paywalls for core daily workflows.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">02</div>
              <h3 class="commitment-title">Zero Data Brokering</h3>
              <p class="commitment-desc">We do not sell, rent, or broker your personal information or monetize your private health and gameplay data.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">03</div>
              <h3 class="commitment-title">Transparent Subscriptions</h3>
              <p class="commitment-desc">Optional EVLOME One premium capabilities are billed through your standard Apple App Store or Google Play account with effortless cancellation.</p>
            </div>
            <div class="privacy-commitment-card">
              <div class="commitment-badge">04</div>
              <h3 class="commitment-title">Unconditional Ownership</h3>
              <p class="commitment-desc">You own all records, logs, and game saves you create. Export or wipe your database at any time directly in settings.</p>
            </div>
          </div>
        </div>

        <div class="privacy-content-block" style="margin-top: 32px;">
          <h2 class="privacy-block-heading">1. License &amp; Permitted Use</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            EVLOME grants you a personal, non-transferable, revocable license to use our applications and play our games on compatible iOS and Android devices for individual, non-commercial purposes in compliance with these Terms and platform store policies.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">2. Important Medical &amp; Calculation Disclaimers</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            <strong>EVLOME Cycle Notice:</strong> EVLOME Cycle is strictly for menstrual self-observation and wellness tracking. <strong>It is NOT intended or certified as contraception or birth control, nor as a substitute for professional clinical medical advice, diagnosis, or treatment.</strong> Users assume exclusive responsibility for family planning and reproductive decisions.<br/><br/>
            <strong>EVLOME Calculator+ Notice:</strong> Calculations provided by EVLOME Calculator+ (including Mifflin-St Jeor BMR/TDEE, Navy body fat %, and macro allocations) are statistical estimates for fitness and informational reference. Calculations must not replace evaluation by a licensed physician or registered dietitian.<br/><br/>
            Never disregard professional medical advice or delay seeking clinical care because of information displayed in EVLOME applications.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">3. Gaming Fair Play &amp; Multiplayer Conduct</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            Players of EVLOME Games (such as Ludo Prince) agree to adhere to standard community sportsmanship, refraining from cheating, client modifications, or harassment in multiplayer lobbies.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">4. Subscriptions &amp; In-App Purchases (EVLOME One)</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            Certain advanced capabilities (such as encrypted cloud backup and cross-device synchronization) may be offered as optional auto-renewing subscriptions under EVLOME One. Subscriptions are billed directly through your Apple App Store or Google Play account. You can manage or cancel your subscription at any time in your device's account settings at least 24 hours before the renewal date.
          </p>

          <h2 class="privacy-block-heading" style="margin-top: 24px;">5. Disclaimers &amp; Limitation of Liability</h2>
          <p class="privacy-section-desc" style="margin-bottom: 16px;">
            To the maximum extent permitted by applicable law, EVLOME and its creators provide the applications "as is" and "as available" without warranty of any kind. EVLOME shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use our applications or games.
          </p>
        </div>

        <div class="privacy-contact-block">
          <h2 class="privacy-block-heading">Contact Us</h2>
          <p class="privacy-contact-text">
            For legal inquiries, terms clarification, or support, reach our team at <a href="mailto:hello@evlome.com" class="privacy-email-link">hello@evlome.com</a>.
          </p>
        </div>
      </div>
  `;
};

// Dispatchers
export const renderPrivacyPolicy = (product = null, previousPath = '') => {
  if (product) {
    if (product.id === 'calculator') return renderCalculatorPrivacy(previousPath);
    if (product.id === 'cycle') return renderCyclePrivacy(previousPath);
    if (product.id === 'ludo-prince') return renderLudoPrivacy(previousPath);
    if (product.id === 'pawdoku') return renderPawdokuPrivacy(previousPath);
  }
  return renderGlobalPrivacy(previousPath);
};

export const renderTermsOfService = (product = null, previousPath = '') => {
  if (product) {
    if (product.id === 'calculator') return renderCalculatorTerms(previousPath);
    if (product.id === 'cycle') return renderCycleTerms(previousPath);
    if (product.id === 'ludo-prince') return renderLudoTerms(previousPath);
    if (product.id === 'pawdoku') return renderPawdokuTerms(previousPath);
  }
  return renderGlobalTerms(previousPath);
};


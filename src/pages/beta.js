// ============================================================================
// Beta Application Page Renderer — Crisp, Modern, High-Signal Form Experience
// ============================================================================

export const renderBetaPage = (parentApp = null) => {
  let parentUrl = '/';
  let parentLabel = 'Home';

  if (parentApp) {
    parentUrl = `/${parentApp.id}`;
    parentLabel = parentApp.title;
  }

  return `
  <div class="beta-page-container">
    <nav class="detail-nav" aria-label="Navigation">
      <a href="${parentUrl}" class="detail-nav-back" onclick="window.handleHierarchicalBack(event, '${parentUrl}')" aria-label="Return to ${parentLabel}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Return to ${parentLabel}</span>
      </a>
    </nav>

    <div class="beta-form-card">
      <div class="beta-header">
        <span class="stage-badge" style="color: #4f46e5; border-color: rgba(79, 70, 229, 0.25); background: rgba(79, 70, 229, 0.05); margin-bottom: 1.25rem;">
          EARLY ACCESS PROGRAM
        </span>
        <h1 class="beta-title">Apply for Beta Testing</h1>
        <p class="beta-subtitle">
          TestFlight (iOS) and Google Play (Android) preview slots are currently open for EVLOME Suite tools and EVLOME Games.
        </p>
      </div>

      <div class="beta-advisory-card" style="background: #f8fafc; border: 1px solid var(--border-subtle); border-left: 3px solid #64748b; border-radius: 12px; padding: 0.9rem 1.15rem; margin-bottom: 2rem; font-size: 13px; color: var(--text-secondary); line-height: 1.55;">
        <strong style="color: #0f172a; font-weight: 600;">Early Access Advisory:</strong> These apps are currently in active beta testing. For privacy and safety, please use sample or non-sensitive data when testing health, cycle, and biometrics tools.
      </div>

      ${parentApp && parentApp.id === 'ludo-prince' ? `
        <div class="production-notice-card" style="background: rgba(2, 132, 199, 0.06); border: 1px solid rgba(2, 132, 199, 0.25); border-radius: 18px; padding: 1.25rem 1.5rem; margin-bottom: 2rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; color: #0284c7; font-size: 14px;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #0284c7;"></span>
            Ludo Prince is already Live in Production!
          </div>
          <p style="font-size: 13px; color: var(--text-secondary); margin: 0; line-height: 1.5;">
            You can download the full release version directly today on iOS and Android. Use this application form only if you wish to join the private test pool for upcoming experimental game builds and balance updates.
          </p>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.25rem;">
            <a href="https://apps.apple.com/app/id6760012267" target="_blank" rel="noopener noreferrer" class="btn-glass" style="padding: 0.45rem 1rem; font-size: 12px; border-color: rgba(2, 132, 199, 0.4); color: #0284c7;">
              Download on App Store &rarr;
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.paisphere.ludoprince" target="_blank" rel="noopener noreferrer" class="btn-glass" style="padding: 0.45rem 1rem; font-size: 12px; border-color: rgba(2, 132, 199, 0.4); color: #0284c7;">
              Get on Google Play &rarr;
            </a>
          </div>
        </div>
      ` : ''}

      <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(window.betaSubmitted) { if(window.betaTimeout) clearTimeout(window.betaTimeout); document.getElementById('beta-form-wrap').style.display='none'; document.getElementById('success-message').style.display='flex'; window.scrollTo({top: 0, behavior: 'smooth'}); }"></iframe>

      <!-- Success Confirmation Card -->
      <div id="success-message" role="status" aria-live="polite" style="display:none; flex-direction: column; align-items: center; justify-content: center; padding: 4rem 1.5rem; text-align: center;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: #dcfce7; color: #16a34a; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; box-shadow: 0 4px 14px rgba(22, 163, 74, 0.15);">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2 style="font-size: 2rem; margin-bottom: 0.65rem; color: #0f172a; font-weight: 800; letter-spacing: -0.02em;">Application Received</h2>
        <p style="color: #64748b; max-width: 440px; line-height: 1.6; font-size: 1.05rem; margin-bottom: 2rem;">
          Thank you for applying. We will review your submission and email beta invitations directly to your registered device email address.
        </p>
        <a href="/" class="btn-primary-glow" onclick="if(event){ event.preventDefault(); navigate('/'); }">Return to Overview &rarr;</a>
      </div>

      <!-- Beta Application Form Wrap -->
      <div id="beta-form-wrap">
        <form class="custom-beta-form" action="https://docs.google.com/forms/d/e/1FAIpQLSekI29k1t9_IqrNwZvtcHeIEebY7HNj471CspOid_TlKLoJ9Q/formResponse" method="post" target="hidden_iframe" novalidate onsubmit="return window.handleBetaSubmit(event)" oninput="window.clearBetaError(event)" onchange="window.clearBetaError(event)">
          
          <!-- Name Inputs -->
          <div class="form-row">
            <div class="form-group">
              <label for="beta-first-name" class="form-label">First Name <span class="required-star">*</span></label>
              <input type="text" id="beta-first-name" name="entry.1026423473" required placeholder="Jane" autocomplete="given-name" class="form-input" />
            </div>
            <div class="form-group">
              <label for="beta-last-name" class="form-label">Last Name <span class="required-star">*</span></label>
              <input type="text" id="beta-last-name" name="entry.2072277110" required placeholder="Doe" autocomplete="family-name" class="form-input" />
            </div>
          </div>

          <!-- Email Address -->
          <div class="form-group">
            <label for="beta-email" class="form-label">Email Address <span class="required-star">*</span></label>
            <input type="email" id="beta-email" name="entry.1247363008" required placeholder="jane@example.com" autocomplete="email" class="form-input" />
            <span class="form-helper-text">Used strictly to send TestFlight or Google Play invites. Zero spam, ever.</span>
          </div>

          <!-- Device Platform -->
          <div class="form-group">
            <label class="form-label">Device Platform <span class="required-star">*</span></label>
            <div class="platform-selection-grid">
              <label class="platform-tile" id="tile-platform-ios">
                <input type="checkbox" name="entry.261106749" value="iOS" class="platform-input" onchange="window.handlePlatformToggle(this)" />
                <div class="platform-tile-body">
                  <div class="platform-tile-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.66-.99 1.72-.86 2.74 1.01.08 2.04-.51 2.57-1.24z"/>
                    </svg>
                  </div>
                  <div class="platform-tile-text">
                    <div class="platform-tile-name">iOS (Apple)</div>
                    <div class="platform-tile-meta">TestFlight Preview</div>
                  </div>
                  <div class="platform-tile-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
              </label>

              <label class="platform-tile" id="tile-platform-android">
                <input type="checkbox" name="entry.261106749" value="Android" class="platform-input" onchange="window.handlePlatformToggle(this)" />
                <div class="platform-tile-body">
                  <div class="platform-tile-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.087 12 8.087c-1.8533 0-3.5902.3246-5.1368.8627L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
                    </svg>
                  </div>
                  <div class="platform-tile-text">
                    <div class="platform-tile-name">Android</div>
                    <div class="platform-tile-meta">Google Play Track</div>
                  </div>
                  <div class="platform-tile-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
              </label>
            </div>
          </div>

          <!-- Testing Preference -->
          <div class="form-group">
            <label class="form-label">Testing Preference <span class="required-star">*</span></label>
            <div class="preference-tiles-group">
              <label class="preference-tile active" id="tile-pref-all">
                <input type="radio" name="entry.923244053" value="The Entire EVLOME Suite (All Apps)" checked class="preference-input" onchange="window.handlePreferenceToggle('all')" />
                <div class="preference-tile-radio">
                  <div class="radio-pip"></div>
                </div>
                <div class="preference-tile-content">
                  <div class="preference-tile-title">
                    <span>Entire Ecosystem</span>
                    <span class="badge-recommended">Recommended</span>
                  </div>
                  <div class="preference-tile-desc">Access to current and upcoming products across Health Suite utilities and EVLOME Games.</div>
                </div>
              </label>

              <label class="preference-tile" id="tile-pref-specific">
                <input type="radio" name="entry.923244053" value="Specific Apps Only" id="specific-apps-radio" class="preference-input" onchange="window.handlePreferenceToggle('specific')" />
                <div class="preference-tile-radio">
                  <div class="radio-pip"></div>
                </div>
                <div class="preference-tile-content">
                  <div class="preference-tile-title">Specific Apps &amp; Games</div>
                  <div class="preference-tile-desc">Choose specific tools or games you want to test.</div>
                </div>
              </label>
            </div>

            <!-- Specific Apps Nested Container -->
            <div id="specific-apps-list" class="specific-apps-container" style="display: none;">
              <div class="specific-apps-section-title">THE SUITE (HEALTH &amp; BIOMETRICS)</div>
              <div class="specific-apps-grid">
                <label class="app-select-card" id="app-card-calculator">
                  <input type="checkbox" name="entry.610551536" value="Calculator+" class="specific-app-checkbox" onchange="window.handleAppCardToggle(this)" />
                  <div class="app-card-icon" style="background: rgba(124, 58, 237, 0.08);"><img src="/icons/calculator.png" alt="Calculator+" width="32" height="32" loading="lazy" decoding="async" /></div>
                  <div class="app-card-info">
                    <div class="app-card-name">Calculator+</div>
                    <div class="app-card-tag" style="color: #7c3aed;">Biometrics &amp; Math</div>
                  </div>
                  <div class="app-card-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </label>

                <label class="app-select-card" id="app-card-cycle">
                  <input type="checkbox" name="entry.610551536" value="Cycle" class="specific-app-checkbox" onchange="window.handleAppCardToggle(this)" />
                  <div class="app-card-icon" style="background: rgba(225, 29, 72, 0.08);"><img src="/icons/cycle.png" alt="Cycle" width="32" height="32" loading="lazy" decoding="async" /></div>
                  <div class="app-card-info">
                    <div class="app-card-name">Cycle</div>
                    <div class="app-card-tag" style="color: #e11d48;">Hormonal Rhythm</div>
                  </div>
                  <div class="app-card-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </label>

                <label class="app-select-card" id="app-card-activity">
                  <input type="checkbox" name="entry.610551536" value="Activity" class="specific-app-checkbox" onchange="window.handleAppCardToggle(this)" />
                  <div class="app-card-icon" style="background: rgba(217, 119, 6, 0.08);"><img src="/icons/activity.png" alt="Activity" width="32" height="32" loading="lazy" decoding="async" /></div>
                  <div class="app-card-info">
                    <div class="app-card-name">Activity</div>
                    <div class="app-card-tag" style="color: #d97706;">Kinetic Logging</div>
                  </div>
                  <div class="app-card-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </label>

                <label class="app-select-card" id="app-card-nutrition">
                  <input type="checkbox" name="entry.610551536" value="Nutrition" class="specific-app-checkbox" onchange="window.handleAppCardToggle(this)" />
                  <div class="app-card-icon" style="background: rgba(5, 150, 105, 0.08);"><img src="/icons/nutrition.png" alt="Nutrition" width="32" height="32" loading="lazy" decoding="async" /></div>
                  <div class="app-card-info">
                    <div class="app-card-name">Nutrition</div>
                    <div class="app-card-tag" style="color: #059669;">Metabolic Balance</div>
                  </div>
                  <div class="app-card-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </label>
              </div>

              <div class="specific-apps-section-title" style="margin-top: 1.25rem;">EVLOME GAMES</div>
              <div class="specific-apps-grid">
                <label class="app-select-card" id="app-card-ludo-prince">
                  <input type="checkbox" name="entry.610551536" value="Ludo Prince" class="specific-app-checkbox" onchange="window.handleAppCardToggle(this)" />
                  <div class="app-card-icon" style="background: rgba(2, 132, 199, 0.08);"><img src="/icons/ludo-prince.png" alt="Ludo Prince" width="32" height="32" loading="lazy" decoding="async" /></div>
                  <div class="app-card-info">
                    <div class="app-card-name">
                      <span>Ludo Prince</span>
                      <span style="font-size: 9px; font-weight: 700; color: #0284c7; background: rgba(2, 132, 199, 0.12); padding: 1px 5px; border-radius: 99px; flex-shrink: 0;">LIVE</span>
                    </div>
                    <div class="app-card-tag" style="color: #0284c7;">Multiplayer &bull; Beta Builds</div>
                  </div>
                  <div class="app-card-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </label>

                <label class="app-select-card" id="app-card-pawdoku">
                  <input type="checkbox" name="entry.610551536" value="Pawdoku" class="specific-app-checkbox" onchange="window.handleAppCardToggle(this)" />
                  <div class="app-card-icon" style="background: rgba(234, 88, 12, 0.08);"><img src="/icons/pawdoku.png" alt="Pawdoku" width="32" height="32" loading="lazy" decoding="async" /></div>
                  <div class="app-card-info">
                    <div class="app-card-name">Pawdoku</div>
                    <div class="app-card-tag" style="color: #ea580c;">Pet Sanctuary &bull; Preview</div>
                  </div>
                  <div class="app-card-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <!-- Testing Availability -->
          <div class="form-group">
            <label for="beta-frequency" class="form-label">Testing Availability <span class="required-star">*</span></label>
            <div class="select-wrapper">
              <select id="beta-frequency" name="entry.454575922" required class="form-input custom-select">
                <option value="" disabled selected>Select frequency...</option>
                <option value="Daily">Daily testing</option>
                <option value="A few times a week">A few times a week</option>
                <option value="Once a week">Once a week</option>
                <option value="Occasionally">Occasionally as updates arrive</option>
              </select>
            </div>
          </div>

          <!-- Feedback Notes -->
          <div class="form-group">
            <label for="beta-feedback" class="form-label">Feedback or Notes <span class="optional-tag">(Optional)</span></label>
            <textarea id="beta-feedback" name="entry.1265301105" rows="2" placeholder="Tell us about your test devices, multiplayer preferences, or features you care about..." class="form-input" style="resize: vertical; min-height: 80px;"></textarea>
          </div>

          <!-- Submit Button -->
          <div style="margin-top: 0.5rem;">
            <button id="submit-btn" type="submit" class="form-submit-btn">
              <span>Submit Beta Application</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <p class="form-disclaimer">
              Encrypted transmission. Your email is exclusively used to deliver official TestFlight and Google Play testing slots.
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
`;
};

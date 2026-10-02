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
const renderHome = () => `
  <header class="hero-section">
    <h1>The future of<br>personal health.</h1>
    <p class="subtitle">An ecosystem of beautifully crafted, intelligent applications designed to elevate your daily routine, fitness, and wellness.</p>
    <div class="hero-ctas">
      <a href="#/beta" class="btn-primary">Join the Beta</a>
      <a href="javascript:void(0)" class="btn-secondary" onclick="document.querySelector('.apps-section').scrollIntoView({behavior: 'smooth'})">Explore the Suite</a>
    </div>
  </header>

  <section class="apps-section">
    <h3 class="section-title">The Suite</h3>
    
    <main class="apps-grid">
      <a href="#/calculator" class="app-card" style="text-decoration:none;">
        <div class="app-icon-container">
          <img src="./icons/calculator.png" alt="Calculator+ App" class="app-icon" />
        </div>
        <h2 class="app-title">Calculator+</h2>
        <p class="app-desc">A powerful standard calculator featuring a vast marketplace of specialized calculators. Manage favorites, browse by categories, and customize with dynamic themes.</p>
      </a>

      <a href="#/cycle" class="app-card" style="text-decoration:none;">
        <div class="app-icon-container">
          <img src="./icons/cycle.png" alt="Cycle App" class="app-icon" />
        </div>
        <h2 class="app-title">Cycle</h2>
        <p class="app-desc">Comprehensive cycle tracking featuring an interactive calendar, daily symptom logging, personalized insights, and an intuitive tracking dashboard.</p>
      </a>

      <div class="app-card coming-soon">
        <div class="badge">In Development</div>
        <div class="app-icon-container">
          <img src="./icons/activity.png" alt="Activity App" class="app-icon" />
        </div>
        <h2 class="app-title">Activity</h2>
        <p class="app-desc">Track your daily movements, record detailed workouts, and stay active with real-time performance insights.</p>
      </div>

      <div class="app-card coming-soon">
        <div class="badge">In Development</div>
        <div class="app-icon-container">
          <img src="./icons/nutrition.png" alt="Nutrition App" class="app-icon" />
        </div>
        <h2 class="app-title">Nutrition</h2>
        <p class="app-desc">Monitor your daily caloric intake, discover healthy recipes, and maintain a perfectly balanced diet effortlessly.</p>
      </div>
    </main>
  </section>

  <section class="values-section">
    <h3 class="section-title">Our Philosophy</h3>
    
    <div class="values-list">
      <div class="value-item">
        <span class="value-num">01</span>
        <div class="value-text">
          <h4 class="value-title">Make It Understandable</h4>
          <p class="value-desc"><strong>Health can be complicated. EVLOME should not be.</strong><br>We turn complex information into clear, approachable tools that anyone can understand and use.</p>
        </div>
      </div>
      <div class="value-item">
        <span class="value-num">02</span>
        <div class="value-text">
          <h4 class="value-title">Make It Useful</h4>
          <p class="value-desc"><strong>Every feature should earn its place.</strong><br>We build tools that solve real problems, support everyday decisions, and make taking care of yourself easier.</p>
        </div>
      </div>
      <div class="value-item">
        <span class="value-num">03</span>
        <div class="value-text">
          <h4 class="value-title">Put People First</h4>
          <p class="value-desc"><strong>Technology should adapt to people — not the other way around.</strong><br>We listen, learn, and continuously improve through the needs, experiences, and feedback of the people who use EVLOME.</p>
        </div>
      </div>
      <div class="value-item">
        <span class="value-num">04</span>
        <div class="value-text">
          <h4 class="value-title">Connect the Pieces</h4>
          <p class="value-desc"><strong>Well-being is not one number, one habit, or one part of life.</strong><br>Our ecosystem brings different perspectives together so the whole picture becomes more meaningful than its individual parts.</p>
        </div>
      </div>
      <div class="value-item">
        <span class="value-num">05</span>
        <div class="value-text">
          <h4 class="value-title">Evolve With You</h4>
          <p class="value-desc"><strong>Your needs change. Your life changes.</strong><br>EVLOME evolves with you — expanding, improving, and creating new ways to help you understand yourself and move toward a healthier you.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="beta-cta-section">
    <div class="beta-cta-minimal">
      <h3 class="beta-massive-text">Shape<br>the future.</h3>
      <div class="beta-cta-right">
        <p class="beta-desc">Join our exclusive beta testing program. Get early access to new features and directly influence our product roadmap.</p>
        <a href="#/beta" class="btn-primary">Apply for Beta ↗</a>
      </div>
    </div>
  </section>
`;

const renderBetaPage = () => `
  <div class="page-container beta-page">
    <a href="#/" class="back-link">← Back to Suite</a>
    
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
            <label>Which EVLOME apps would you like to test?</label>
            <div class="checkbox-group">
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.610551536" value="EVLOME Calculator+" />
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Calculator+</span>
              </label>
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.610551536" value="EVLOME Cycle" />
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Cycle</span>
              </label>
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.610551536" value="EVLOME Nutrition" />
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Nutrition</span>
              </label>
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.610551536" value="EVLOME Activity" />
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Activity</span>
              </label>
              <label class="custom-checkbox">
                <input type="checkbox" name="entry.610551536" value="Future EVLOME apps" />
                <span class="checkbox-box"></span>
                <span class="checkbox-text">Future Apps</span>
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

const renderAppPage = (appId, title, desc, icon, stores, privacyLink) => `
  <div class="page-container app-detail-page">
    <a href="#/" class="back-link">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      Back to Suite
    </a>
    
    <div class="app-detail-hero">
      <div class="app-detail-icon-wrapper">
        <div class="app-detail-glow"></div>
        <img src="${icon}" alt="${title} icon" class="app-detail-icon">
      </div>
      <h1 class="app-page-title">${title}</h1>
      <p class="app-page-desc">${desc}</p>
      
      <div class="store-links centered-stores">
        ${stores.apple ? `
          <a href="${stores.apple}" target="_blank" class="store-badge">
            <svg viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            <div class="store-text">
              <span class="store-small">Download on the</span>
              <span class="store-large">App Store</span>
            </div>
          </a>
        ` : ''}
        ${stores.google ? `
          <a href="${stores.google}" target="_blank" class="store-badge">
            <svg viewBox="0 0 512 512" fill="currentColor"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            <div class="store-text">
              <span class="store-small">GET IT ON</span>
              <span class="store-large">Google Play</span>
            </div>
          </a>
        ` : ''}
      </div>

      ${privacyLink ? `<div class="privacy-link-container"><a href="${privacyLink}" class="privacy-link">Privacy Policy</a></div>` : ''}
    </div>
  </div>
`;

const renderPrivacyPolicy = (title) => `
  <div class="page-container">
    <a href="#/" class="back-link">← Back to Suite</a>
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

const router = () => {
  const hash = window.location.hash || '#/';
  const contentDiv = document.getElementById('content-area');
  
  // Force scroll to top on every navigation
  window.scrollTo(0, 0);
  
  if (!contentDiv) return;

  if (hash === '#/') {
    contentDiv.innerHTML = renderHome();
  } else if (hash === '#/calculator') {
    contentDiv.innerHTML = renderAppPage(
      'calculator',
      'Calculator+',
      'A powerful standard calculator featuring a vast marketplace of specialized calculators. Manage favorites, browse by categories, and customize with dynamic themes.',
      './icons/calculator.png',
      { apple: '#', google: '#' },
      '#/privacy/calculator'
    );
  } else if (hash === '#/cycle') {
    contentDiv.innerHTML = renderAppPage(
      'cycle',
      'Cycle',
      'Comprehensive cycle tracking featuring an interactive calendar, daily symptom logging, personalized insights, and an intuitive tracking dashboard.',
      './icons/cycle.png',
      { apple: '#', google: '#' },
      '#/privacy/cycle'
    );
  } else if (hash === '#/privacy/calculator') {
    contentDiv.innerHTML = renderPrivacyPolicy('Calculator+');
  } else if (hash === '#/privacy/cycle') {
    contentDiv.innerHTML = renderPrivacyPolicy('Cycle');
  } else if (hash === '#/beta') {
    contentDiv.innerHTML = renderBetaPage();
  } else {
    contentDiv.innerHTML = renderHome();
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

document.querySelector('#app').innerHTML = `
  <div class="ambient-glow top"></div>
  <div class="ambient-glow bottom"></div>

  <nav>
    <a href="#/" class="logo-link">
      <img src="./logo-wordmark.png" alt="EVLOME" class="nav-logo" />
    </a>
  </nav>

  <div id="content-area"></div>

  <footer>
    <div class="footer-content">
      <div class="footer-brand">&copy; ${new Date().getFullYear()} Evlome. All rights reserved.</div>
      <div class="footer-contact">
        <a href="mailto:hello@evlome.com" class="social-link">
          <svg viewBox="0 0 512 512" fill="currentColor"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
          hello@evlome.com
        </a>
        <a href="https://instagram.com/evlomeofficial" target="_blank" class="social-link">
          <svg viewBox="0 0 448 512" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
          @evlomeofficial
        </a>
      </div>
    </div>
  </footer>
`;

// Initial route
router();


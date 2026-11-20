import './style.css';
import { allProducts, suiteApps, gamesData, getProductById } from './data/products.js';
import { renderHome } from './pages/home.js';
import { renderAppPage } from './pages/appDetail.js';
import { renderBetaPage } from './pages/beta.js';
import { renderPrivacyPolicy, renderTermsOfService } from './pages/legal.js';
import { validateBetaForm, FORM_ENTRY_IDS, APP_ID_TO_FORM_VALUE } from './utils/betaFormValidation.js';

// Export ecosystem data
export { allProducts, suiteApps, gamesData, getProductById };
export const appsData = allProducts;

// ============================================================================
// Shell Layout Initialization (Floating Island Nav + Footer Directory)
// ============================================================================
document.querySelector('#app').innerHTML = `
  <!-- Floating Precision Header Island -->
  <header class="site-header">
    <div class="header-island">
      <a href="/" class="brand-link" onclick="window.handleLogoClick(event)" aria-label="EVLOME Home">
        <img src="/logo-wordmark.png" alt="EVLOME" class="brand-logo" width="117" height="22" fetchpriority="high" decoding="async" />
      </a>
      
      <!-- Desktop Nav -->
      <nav class="nav-links-row" aria-label="Primary Navigation">
        <button type="button" class="nav-anchor-btn" onclick="window.scrollToSection('suite-stage')">The Health Suite</button>
        <button type="button" class="nav-anchor-btn" onclick="window.scrollToSection('games-stage')">EVLOME Games</button>
        <button type="button" class="nav-anchor-btn" onclick="window.scrollToSection('one-stage')">EVLOME One</button>
        <a href="/beta" class="nav-cta-pill">Join Beta</a>
      </nav>

      <!-- Mobile Hamburger Button -->
      <button type="button" class="burger-menu-btn" id="burger-menu-btn" aria-label="Toggle navigation menu" onclick="window.toggleMobileMenu()">
        <span class="burger-icon">
          <span class="burger-line line-top"></span>
          <span class="burger-line line-middle"></span>
          <span class="burger-line line-bottom"></span>
        </span>
      </button>
    </div>
  </header>

  <!-- Mobile Navigation Sheet Backdrop -->
  <div class="mobile-sheet-backdrop" id="mobile-sheet-backdrop" onclick="window.closeMobileMenu()" aria-hidden="true"></div>

  <!-- Mobile Navigation Sheet -->
  <aside class="mobile-sheet" id="mobile-sheet" aria-label="Mobile Navigation">
    <nav class="mobile-sheet-nav" aria-label="Mobile Navigation Links">
      <button type="button" class="mobile-sheet-link" onclick="window.scrollToSection('suite-stage')">
        <span class="sheet-link-label">The Health Suite</span>
        <svg class="sheet-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 3.5 10.5 8 6 12.5"></polyline>
        </svg>
      </button>

      <button type="button" class="mobile-sheet-link" onclick="window.scrollToSection('games-stage')">
        <span class="sheet-link-label">EVLOME Games</span>
        <svg class="sheet-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 3.5 10.5 8 6 12.5"></polyline>
        </svg>
      </button>

      <button type="button" class="mobile-sheet-link" onclick="window.scrollToSection('one-stage')">
        <span class="sheet-link-label">EVLOME One</span>
        <svg class="sheet-chevron" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 3.5 10.5 8 6 12.5"></polyline>
        </svg>
      </button>

      <div class="mobile-sheet-divider" aria-hidden="true"></div>

      <a href="/beta" class="mobile-sheet-cta-btn" onclick="if(event){ event.preventDefault(); window.closeMobileMenu(); navigate('/beta'); }">
        <span>Join Beta</span>
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="2.5" y1="8" x2="13.5" y2="8"></line>
          <polyline points="9 3.5 13.5 8 9 12.5"></polyline>
        </svg>
      </a>
    </nav>
  </aside>

  <!-- Dynamic Content Stage -->
  <main id="content-area" role="main"></main>

  <!-- Footer Directory -->
  <footer class="evlome-footer">
    <div class="footer-wrap">
      <div class="footer-cols">
        <div>
          <div class="footer-col-heading">The Suite</div>
          <ul class="footer-links-list">
            <li><a href="/calculator" onclick="if(event){ event.preventDefault(); navigate('/calculator'); }">Calculator+ <span style="font-size:10px; color:#7c3aed; font-weight:700;">(Beta)</span></a></li>
            <li><a href="/cycle" onclick="if(event){ event.preventDefault(); navigate('/cycle'); }">Cycle <span style="font-size:10px; color:#7c3aed; font-weight:700;">(Beta)</span></a></li>
            <li><a href="/activity" onclick="if(event){ event.preventDefault(); navigate('/activity'); }">Activity <span style="font-size:10px; color:#b45309; font-weight:700;">(In Dev)</span></a></li>
            <li><a href="/nutrition" onclick="if(event){ event.preventDefault(); navigate('/nutrition'); }">Nutrition <span style="font-size:10px; color:#b45309; font-weight:700;">(In Dev)</span></a></li>
            <li><a href="/one" onclick="if(event){ event.preventDefault(); window.scrollToSection('one-stage'); }">EVLOME One <span style="font-size:10px; color:#f59e0b; font-weight:800;">(Pass)</span></a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-heading">EVLOME Games</div>
          <ul class="footer-links-list">
            <li><a href="/ludo-prince" onclick="if(event){ event.preventDefault(); navigate('/ludo-prince'); }">Ludo Prince <span style="font-size:10px; color:#059669; font-weight:700;">(&bull; Live)</span></a></li>
            <li><a href="/pawdoku" onclick="if(event){ event.preventDefault(); navigate('/pawdoku'); }">Pawdoku <span style="font-size:10px; color:#b45309; font-weight:700;">(In Dev)</span></a></li>
            <li><a href="/beta" onclick="if(event){ event.preventDefault(); navigate('/beta'); }">Join Beta Program</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-heading">Privacy &amp; Legal</div>
          <ul class="footer-links-list">
            <li><a href="/privacy" onclick="if(event){ event.preventDefault(); navigate('/privacy'); }">Ecosystem Privacy</a></li>
            <li><a href="/ludo-prince/privacy" onclick="if(event){ event.preventDefault(); navigate('/ludo-prince/privacy'); }">Gaming Privacy</a></li>
            <li><a href="/terms" onclick="if(event){ event.preventDefault(); navigate('/terms'); }">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <div class="footer-col-heading">EVLOME Studio</div>
          <ul class="footer-links-list">
            <li><a href="mailto:hello@evlome.com">hello@evlome.com</a></li>
            <li><a href="https://instagram.com/evlomeofficial" target="_blank" rel="noopener noreferrer">@evlomeofficial</a></li>
            <li><a href="/beta" onclick="if(event){ event.preventDefault(); navigate('/beta'); }">Early Access Registration</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom-bar">
        <div>&copy; ${new Date().getFullYear()} EVLOME. Crafted for precision and mindful play.</div>
        <div class="footer-legal-links">
          <a href="/privacy" onclick="if(event){ event.preventDefault(); navigate('/privacy'); }">Privacy</a>
          <span>&bull;</span>
          <a href="/terms" onclick="if(event){ event.preventDefault(); navigate('/terms'); }">Terms</a>
        </div>
      </div>
    </div>
  </footer>
`;

// ============================================================================
// Form Interaction & Submission Handlers
// ============================================================================
window.handlePlatformToggle = function(input) {
  const tile = input.closest('.platform-tile');
  if (tile) {
    if (input.checked) {
      tile.classList.add('active');
    } else {
      tile.classList.remove('active');
    }
  }
  const group = input.closest('.form-group');
  if (group) {
    const errorMsg = group.querySelector('.error-msg');
    if (errorMsg) errorMsg.remove();
  }
};

window.handlePreferenceToggle = function(type) {
  const allTile = document.getElementById('tile-pref-all');
  const specTile = document.getElementById('tile-pref-specific');
  const list = document.getElementById('specific-apps-list');

  if (type === 'all') {
    if (allTile) allTile.classList.add('active');
    if (specTile) specTile.classList.remove('active');
    if (list) list.style.display = 'none';
    document.querySelectorAll('.specific-app-checkbox').forEach(cb => {
      cb.checked = false;
      const card = cb.closest('.app-select-card');
      if (card) card.classList.remove('active');
    });
  } else {
    if (allTile) allTile.classList.remove('active');
    if (specTile) specTile.classList.add('active');
    if (list) list.style.display = 'block';
  }

  const group = document.querySelector('.preference-tiles-group')?.closest('.form-group');
  if (group) {
    const errorMsg = group.querySelector('.error-msg');
    if (errorMsg) errorMsg.remove();
  }
};

window.handleAppCardToggle = function(input) {
  const card = input.closest('.app-select-card');
  if (card) {
    if (input.checked) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  }
  const container = input.closest('.specific-apps-container');
  if (container) {
    const errorMsg = container.querySelector('.error-msg');
    if (errorMsg) errorMsg.remove();
  }
};

window.handleBetaSubmit = function(event) {
  event.preventDefault();
  const form = event.target;
  let firstInvalidElement = null;

  form.querySelectorAll('.error-msg').forEach(el => el.remove());
  form.querySelectorAll('.has-error').forEach(el => el.classList.remove('has-error'));

  const showError = (targetElement, message) => {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-msg';
    errorDiv.setAttribute('role', 'alert');
    errorDiv.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> <span>${message}</span>`;
    
    const group = targetElement.closest('.form-group') || targetElement;
    group.appendChild(errorDiv);

    if (targetElement.classList.contains('form-input')) {
      targetElement.classList.add('has-error');
    }

    if (!firstInvalidElement) firstInvalidElement = group;
  };

  const formData = {
    firstName: form.querySelector('#beta-first-name')?.value || '',
    lastName: form.querySelector('#beta-last-name')?.value || '',
    email: form.querySelector('#beta-email')?.value || '',
    platforms: Array.from(form.querySelectorAll(`input[name="${FORM_ENTRY_IDS.devicePlatform}"]:checked`)).map(cb => cb.value),
    preference: form.querySelector(`input[name="${FORM_ENTRY_IDS.testingPreference}"]:checked`)?.value || '',
    selectedApps: Array.from(form.querySelectorAll(`input[name="${FORM_ENTRY_IDS.specificApps}"]:checked`)).map(cb => cb.value),
    frequency: form.querySelector('#beta-frequency')?.value || '',
    feedback: form.querySelector('#beta-feedback')?.value || ''
  };

  const validation = validateBetaForm(formData);

  if (!validation.isValid) {
    if (validation.errors.firstName) {
      showError(form.querySelector('#beta-first-name') || form, validation.errors.firstName);
    }
    if (validation.errors.lastName) {
      showError(form.querySelector('#beta-last-name') || form, validation.errors.lastName);
    }
    if (validation.errors.email) {
      showError(form.querySelector('#beta-email') || form, validation.errors.email);
    }
    if (validation.errors.platforms) {
      showError(form.querySelector('.platform-selection-grid') || form, validation.errors.platforms);
    }
    if (validation.errors.preference) {
      showError(form.querySelector('.preference-tiles-group') || form, validation.errors.preference);
    }
    if (validation.errors.selectedApps) {
      showError(form.querySelector('#specific-apps-list') || form, validation.errors.selectedApps);
    }
    if (validation.errors.frequency) {
      showError(form.querySelector('#beta-frequency') || form, validation.errors.frequency);
    }

    if (firstInvalidElement) {
      firstInvalidElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return false;
  }

  if (formData.preference === 'The Entire EVLOME Suite (All Apps)') {
    form.querySelectorAll(`input[name="${FORM_ENTRY_IDS.specificApps}"]`).forEach(cb => {
      cb.checked = true;
    });
  }

  window.betaSubmitted = true;
  const btn = document.getElementById('submit-btn');
  if (btn) {
    btn.innerHTML = '<span>Submitting Application...</span>';
    btn.style.opacity = '0.75';
    btn.disabled = true;
  }

  window.betaTimeout = setTimeout(() => {
    if (window.betaSubmitted && document.getElementById('beta-form-wrap')?.style.display !== 'none') {
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
// Single Page App Router & Smooth Scrolling
// ============================================================================
const routeScrollPositions = new Map();
const getCurrentRouteKey = () => window.location.pathname || '/';

let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      routeScrollPositions.set(getCurrentRouteKey(), window.scrollY);
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}, { passive: true });

const isHomeMounted = () => document.getElementById('ludo-stage') !== null;

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
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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
  
  if (internalStack.length > 1) {
    const prev = internalStack[internalStack.length - 2];
    const prevPathOnly = (prev || '').split('?')[0].split('#')[0] || '/';
    const targetPathOnly = targetUrl.split('?')[0].split('#')[0] || '/';
    
    if (prevPathOnly === targetPathOnly) {
      internalStack.pop();
      window.history.back();
      return;
    }
  }
  
  navigate(targetUrl);
};

window.handleBackToCategory = (e, stageId = 'matrix-stage') => {
  if (e) e.preventDefault();
  navigate('/');
  setTimeout(() => {
    const el = document.getElementById(stageId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);
};

export const scrollToSection = (sectionId) => {
  window.closeMobileMenu();
  const currentPath = window.location.pathname;
  const findElement = () => document.getElementById(sectionId);

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
  document.body.style.overflow = isOpen ? 'hidden' : '';
};

window.closeMobileMenu = () => {
  document.body.classList.remove('menu-open');
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
      const el = document.getElementById('suite-stage');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  } else if (path === '/games') {
    if (!isHomeMounted()) contentDiv.innerHTML = renderHome();
    requestAnimationFrame(() => {
      const el = document.getElementById('games-stage');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  } else if (path === '/matrix' || path === '/health' || path === '/apps') {
    if (!isHomeMounted()) contentDiv.innerHTML = renderHome();
    requestAnimationFrame(() => {
      const el = document.getElementById('suite-stage');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  } else if (path === '/one' || path === '/evlome-one') {
    if (!isHomeMounted()) contentDiv.innerHTML = renderHome();
    requestAnimationFrame(() => {
      const el = document.getElementById('one-stage');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  } else if (path === '/philosophy' || path === '/principles' || path === '/codex') {
    if (!isHomeMounted()) contentDiv.innerHTML = renderHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (path === '/beta') {
    const appId = searchParams.get('app');
    const parentApp = appId ? getProductById(appId) : null;
    contentDiv.innerHTML = renderBetaPage(parentApp);
    if (appId) {
      const valMap = APP_ID_TO_FORM_VALUE;
      if (valMap[appId]) {
        const specificRadio = document.getElementById('specific-apps-radio');
        if (specificRadio) {
          specificRadio.checked = true;
          window.handlePreferenceToggle('specific');
        }
        const checkbox = document.querySelector(`input[value="${valMap[appId]}"]`);
        if (checkbox) {
          checkbox.checked = true;
          window.handleAppCardToggle(checkbox);
        }
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
    const product = getProductById(appId);
    contentDiv.innerHTML = renderPrivacyPolicy(product || null, previousInternalPath);
  } else if (path === '/terms' || path.endsWith('/terms') || path.startsWith('/terms/')) {
    let appId = '';
    if (path === '/terms') {
      appId = '';
    } else if (path.endsWith('/terms')) {
      appId = path.slice(1).replace(/\/terms$/, '');
    } else {
      appId = path.replace('/terms/', '');
    }
    const product = getProductById(appId);
    contentDiv.innerHTML = renderTermsOfService(product || null, previousInternalPath);
  } else {
    const appId = path.slice(1);
    const product = getProductById(appId);
    if (product) {
      contentDiv.innerHTML = renderAppPage(product);
    } else {
      contentDiv.innerHTML = renderHome();
    }
  }

  requestAnimationFrame(() => {
    if (window.updateNutritionUI) window.updateNutritionUI();
    if (window.updateWorkoutUI) window.updateWorkoutUI();
  });

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

// Single clean navigation event delegation handler
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

// Initial mount
renderCurrentRoute();

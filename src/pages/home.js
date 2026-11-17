// ============================================================================
// Cinematic Homepage Renderer — Two Distinct Directions: Health & Games
// ============================================================================

import { suiteApps, gamesData, allProducts } from '../data/products.js';

// Interactive Audio Preload (with user-gesture safety)
let audioCache = {};
const playSound = (path) => {
  try {
    if (!audioCache[path]) {
      audioCache[path] = new Audio(path);
    }
    audioCache[path].currentTime = 0;
    audioCache[path].play().catch(() => {});
  } catch (e) {}
};

// Global interactive helpers
const g = typeof window !== 'undefined' ? window : globalThis;

// --- Ludo Prince Live Board Simulation Engine ---
const pipMap = {
  1: [5],
  2: [1, 9],
  3: [1, 5, 9],
  4: [1, 3, 7, 9],
  5: [1, 3, 5, 7, 9],
  6: [1, 3, 4, 6, 7, 9]
};

const updateDicePips = (num) => {
  const activePips = pipMap[num] || [1, 3, 4, 6, 7, 9];
  for (let i = 1; i <= 9; i++) {
    const dot = document.getElementById(`dice-pip-${i}`);
    if (dot) {
      if (activePips.includes(i)) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    }
  }
};
g.updateDicePips = updateDicePips;

g.rollLudoDice = () => {
  const dice = document.getElementById('interactive-dice-cube');
  const logDisplays = document.querySelectorAll('#dice-log-text, .dice-result-log');
  if (!dice) return;

  playSound('/audio/roll.wav');
  dice.classList.add('rolling');

  // Rapid face shuffle during roll
  let shuffles = 0;
  const shuffleTimer = setInterval(() => {
    const temp = Math.floor(Math.random() * 6) + 1;
    updateDicePips(temp);
    shuffles++;
    if (shuffles >= 5) clearInterval(shuffleTimer);
  }, 75);

  setTimeout(() => {
    clearInterval(shuffleTimer);
    const rollOptions = [6, 4, 6, 5, 3, 2, 6];
    const rolledNum = rollOptions[Math.floor(Math.random() * rollOptions.length)];
    updateDicePips(rolledNum);

    if (rolledNum === 6) {
      playSound('/audio/six.wav');
      dice.classList.add('rolled-six');
      setTimeout(() => dice.classList.remove('rolled-six'), 1200);
      logDisplays.forEach(el => {
        el.innerHTML = `<span style="color:#0284c7;font-weight:700;">👑 Rolled 6</span> &bull; Bonus turn!`;
      });
    } else {
      logDisplays.forEach(el => {
        el.innerHTML = `Rolled <strong>${rolledNum}</strong>`;
      });
    }
    dice.classList.remove('rolling');
  }, 450);
};

// --- Pawdoku Aloof Pets Engine (Queens / Star Battle Logic) ---
// Authentic Level 1 from Flutter codebase:
// 4 Regions:
// Region 0 (#DE666E): (0,1), (1,1), (2,1)
// Region 1 (#E89666): (0,2), (0,3), (1,2), (1,3), (2,2), (2,3)
// Region 2 (#DEB866): (0,0), (1,0), (2,0), (3,0)
// Region 3 (#9CC466): (3,1), (3,2), (3,3)
// Solution: Pets at (0,1), (1,3), (2,0), (3,2)

export const pawdokuConfig = {
  size: 4,
  regionMap: [
    [2, 0, 1, 1],
    [2, 0, 1, 1],
    [2, 0, 1, 1],
    [2, 3, 3, 3]
  ],
  // Tactile clay pastel palette sampled directly from the Pawdoku app identity:
  // Coral Peach, Fresh Matcha Mint, Honey Butter Yellow, Apricot Cream
  regionColors: ['#F87A63', '#83CB96', '#FFCD48', '#F9D3B4'],
  solution: [
    [false, true, false, false],
    [false, false, false, true],
    [true, false, false, false],
    [false, false, true, false]
  ]
};

let pawdokuActiveTool = 'pet'; // 'pet' | 'cross'
let pawdokuGrid = [
  ['', 'pet', '', ''], // Starter pet placed at (0, 1) like Level 1 tutorial
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', '']
];
let pawdokuHasWon = false;

// Shared SVG Definitions for backward compatibility
export const pawdokuSvgDefs = ``;

// Signature 3D Tactile Pet Companion: Chubby Clay Kitten Face with Calico Patch & Rosy Cheeks
export const petAvatarSvg = `
<svg viewBox="4 4 44 44" class="paw-pet-glyph" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="pet-head-g" x1="26" y1="12" x2="26" y2="44" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="60%" stop-color="#FFFDF9"/>
      <stop offset="100%" stop-color="#FCEEE2"/>
    </linearGradient>
    <linearGradient id="pet-patch-g" x1="30" y1="12" x2="42" y2="28" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFA86E"/>
      <stop offset="100%" stop-color="#F48A45"/>
    </linearGradient>
    <linearGradient id="pet-ear-inner" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FF97A6"/>
      <stop offset="100%" stop-color="#F0607A"/>
    </linearGradient>
  </defs>

  <!-- Left Ear -->
  <path d="M13 22C11 13 17 9 21 16L15 24" fill="#FFFDF9" stroke="#EBD8C7" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M14.5 20.5C13.2 14.5 17.5 12 19.5 17L15.8 22" fill="url(#pet-ear-inner)"/>

  <!-- Right Ear (with warm ginger calico patch) -->
  <path d="M39 22C41 13 35 9 31 16L37 24" fill="url(#pet-patch-g)" stroke="#E58444" stroke-width="1.2" stroke-linejoin="round"/>
  <path d="M37.5 20.5C38.8 14.5 34.5 12 32.5 17L36.2 22" fill="url(#pet-ear-inner)"/>

  <!-- Plump Rounded 3D Clay Head -->
  <ellipse cx="26" cy="29" rx="16" ry="13.5" fill="url(#pet-head-g)" stroke="#EBD8C7" stroke-width="1.2"/>
  
  <!-- Right Face Calico Patch -->
  <path d="M33 17C38 18 41.5 22 41.5 28C41.5 32 39 35 36 37C34 32 33 24 33 17Z" fill="url(#pet-patch-g)" opacity="0.9"/>

  <!-- Cute Eyes: Happy Sleepy/Smiling Arcs with Tactile Clay Depth -->
  <path d="M18 27C19.5 25 22.5 25 24 27" stroke="#42291E" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M28 27C29.5 25 32.5 25 34 27" stroke="#42291E" stroke-width="2.2" stroke-linecap="round"/>

  <!-- Tiny Pink Clay Nose -->
  <path d="M24.8 30.5L27.2 30.5L26 32Z" fill="#F0607A"/>

  <!-- Sweet Cat Smile -->
  <path d="M23.5 33C24.5 34 25.5 34 26 33C26.5 34 27.5 34 28.5 33" stroke="#42291E" stroke-width="1.8" stroke-linecap="round"/>

  <!-- Rosy Cheeks -->
  <ellipse cx="16.5" cy="31.5" rx="3.2" ry="2" fill="#FFAAA6" opacity="0.75"/>
  <ellipse cx="35.5" cy="31.5" rx="3.2" ry="2" fill="#FFAAA6" opacity="0.75"/>

  <!-- Cute Whiskers -->
  <line x1="11" y1="28.5" x2="6" y2="27.5" stroke="#B8A494" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="11" y1="31" x2="6.5" y2="32" stroke="#B8A494" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="41" y1="28.5" x2="46" y2="27.5" stroke="#B8A494" stroke-width="1.2" stroke-linecap="round"/>
  <line x1="41" y1="31" x2="45.5" y2="32" stroke="#B8A494" stroke-width="1.2" stroke-linecap="round"/>
</svg>`;

// Signature 3D Tactile Whitish Porcelain Clay Cross
export const petCrossSvg = `
<svg viewBox="5 5 34 34" class="paw-cross-glyph" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Soft Whitish Porcelain Clay Gradient -->
    <linearGradient id="cross-white-clay" x1="22" y1="6" x2="22" y2="38" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="45%" stop-color="#FFFDF9"/>
      <stop offset="100%" stop-color="#F2E8DC"/>
    </linearGradient>
    <linearGradient id="cross-white-shine" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.2"/>
    </linearGradient>
  </defs>

  <!-- 3D Puffy Whitish Clay Cross (Rotated 45°) -->
  <g transform="rotate(45 22 22)">
    <!-- Base Ambient Depth Shadow -->
    <rect x="17" y="7" width="10" height="32" rx="5" fill="#8C7A68" opacity="0.25"/>
    <rect x="6" y="18" width="32" height="10" rx="5" fill="#8C7A68" opacity="0.25"/>

    <!-- Vertical Bar -->
    <rect x="17" y="6" width="10" height="32" rx="5" fill="url(#cross-white-clay)" stroke="#D5C4B1" stroke-width="1.2"/>
    <!-- Horizontal Bar -->
    <rect x="6" y="17" width="32" height="10" rx="5" fill="url(#cross-white-clay)" stroke="#D5C4B1" stroke-width="1.2"/>
    <!-- Center Join -->
    <rect x="17.6" y="17.6" width="8.8" height="8.8" fill="url(#cross-white-clay)"/>

    <!-- Specular Highlight on Top Arm -->
    <ellipse cx="22" cy="9.5" rx="2.5" ry="1.8" fill="url(#cross-white-shine)"/>
    <!-- Specular Highlight on Left Arm -->
    <ellipse cx="9.5" cy="22" rx="1.8" ry="2.5" fill="url(#cross-white-shine)"/>
  </g>
</svg>`;

// Minimalist Vector Indicators for the Gesture Guidance Pill
export const petMiniPetSvg = `
<svg viewBox="0 0 52 52" style="width: 17px; height: 17px; vertical-align: -3px; display: inline-block;" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 22C11 13 17 9 21 16L15 24" fill="#FFFDF9" stroke="#EBD8C7" stroke-width="2"/>
  <path d="M14.5 20.5C13.2 14.5 17.5 12 19.5 17L15.8 22" fill="#F0607A"/>
  <path d="M39 22C41 13 35 9 31 16L37 24" fill="#F48A45" stroke="#E58444" stroke-width="2"/>
  <path d="M37.5 20.5C38.8 14.5 34.5 12 32.5 17L36.2 22" fill="#F0607A"/>
  <ellipse cx="26" cy="29" rx="16" ry="13.5" fill="#FFFDF9" stroke="#EBD8C7" stroke-width="2"/>
  <path d="M33 17C38 18 41.5 22 41.5 28C41.5 32 39 35 36 37C34 32 33 24 33 17Z" fill="#F48A45" opacity="0.9"/>
  <circle cx="20" cy="27" r="2.2" fill="#42291E"/>
  <circle cx="32" cy="27" r="2.2" fill="#42291E"/>
  <path d="M25 30.5L27 30.5L26 32Z" fill="#F0607A"/>
  <ellipse cx="16.5" cy="31.5" rx="3.2" ry="2" fill="#FFAAA6"/>
  <ellipse cx="35.5" cy="31.5" rx="3.2" ry="2" fill="#FFAAA6"/>
</svg>`;

export const petMiniPawSvg = petMiniPetSvg;

export const petMiniCrossSvg = `
<svg viewBox="0 0 44 44" style="width: 14px; height: 14px; vertical-align: -2px; display: inline-block;" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(45 22 22)">
    <rect x="17" y="6" width="10" height="32" rx="5" fill="#FFFFFF" stroke="#D5C4B1" stroke-width="1.8"/>
    <rect x="6" y="17" width="32" height="10" rx="5" fill="#FFFFFF" stroke="#D5C4B1" stroke-width="1.8"/>
    <rect x="17.5" y="17.5" width="9" height="9" fill="#FFFFFF"/>
  </g>
</svg>`;

g.setPawdokuTool = (tool) => {
  pawdokuActiveTool = tool;
};

// --- Fluid Swipe & Continuous Drag-to-Cross Engine ---
let isPawdokuSwiping = false;
let pawdokuSwipeMoved = false;
let pawdokuSwipeStart = null;
let pawdokuStartCoord = null;
let pawdokuSwipeMode = 'cross'; // 'cross' | 'clear'
let pawdokuSwipeTouched = new Set();

g.pawdokuPointerDown = (e) => {
  const target = e.target.closest('.paw-cell');
  if (!target) return;
  const coord = target.getAttribute('data-paw-cell');
  if (!coord) return;

  isPawdokuSwiping = true;
  pawdokuSwipeMoved = false;
  pawdokuSwipeStart = { x: e.clientX, y: e.clientY };
  pawdokuStartCoord = coord;

  const [r, c] = coord.split('-').map(Number);
  pawdokuSwipeMode = (pawdokuGrid[r][c] === 'cross') ? 'clear' : 'cross';
  pawdokuSwipeTouched = new Set();
  pawdokuSwipeTouched.add(coord);
};

g.pawdokuPointerMove = (e) => {
  if (!isPawdokuSwiping) return;
  const dist = Math.hypot(e.clientX - pawdokuSwipeStart.x, e.clientY - pawdokuSwipeStart.y);
  if (dist > 8) {
    if (!pawdokuSwipeMoved) {
      pawdokuSwipeMoved = true;
      const [sr, sc] = pawdokuStartCoord.split('-').map(Number);
      if (pawdokuGrid[sr][sc] !== 'pet') {
        pawdokuGrid[sr][sc] = (pawdokuSwipeMode === 'cross' ? 'cross' : '');
        playSound('/audio/cross_tap.wav');
        g.updatePawdokuUI();
      }
    }

    const el = document.elementFromPoint(e.clientX, e.clientY);
    const cell = el ? el.closest('.paw-cell') : null;
    if (cell) {
      const coord = cell.getAttribute('data-paw-cell');
      if (coord && !pawdokuSwipeTouched.has(coord)) {
        pawdokuSwipeTouched.add(coord);
        const [cr, cc] = coord.split('-').map(Number);
        if (pawdokuGrid[cr][cc] !== 'pet') {
          pawdokuGrid[cr][cc] = (pawdokuSwipeMode === 'cross' ? 'cross' : '');
          playSound('/audio/cross_tap.wav');
          g.updatePawdokuUI();
        }
      }
    }
  }
};

g.pawdokuPointerUp = (e) => {
  if (!isPawdokuSwiping) return;
  isPawdokuSwiping = false;

  if (!pawdokuSwipeMoved && pawdokuStartCoord) {
    // Tap without moving: execute normal single-tap (cross) or double-tap (pet)
    const [r, c] = pawdokuStartCoord.split('-').map(Number);
    g.pawdokuCellTap(r, c);
  }
  pawdokuStartCoord = null;
};

if (typeof window !== 'undefined') {
  window.addEventListener('pointerup', (e) => {
    if (g.pawdokuPointerUp) g.pawdokuPointerUp(e);
  });
  window.addEventListener('pointercancel', (e) => {
    if (g.pawdokuPointerUp) g.pawdokuPointerUp(e);
  });
}

let pawdokuLastTap = {};

g.pawdokuCellTap = (r, c) => {
  const key = `${r}-${c}`;
  const now = Date.now();
  const last = pawdokuLastTap[key] || 0;
  const diff = now - last;
  pawdokuLastTap[key] = now;

  const current = pawdokuGrid[r][c];

  // If already a pet, single tap removes it immediately
  if (current === 'pet') {
    pawdokuGrid[r][c] = '';
    playSound('/audio/cross_tap.wav');
    pawdokuLastTap[key] = 0;
    g.updatePawdokuUI();
    return;
  }

  // If a second tap arrived within 350ms, it's a double tap -> Place Pet!
  if (diff > 0 && diff < 350) {
    pawdokuGrid[r][c] = 'pet';
    playSound('/audio/pet_place.wav');
    pawdokuLastTap[key] = 0;
    g.updatePawdokuUI();
    return;
  }

  // Single tap on empty or existing cross:
  // If it was already a cross, tapping after a pause clears it
  // If it was empty, it becomes a cross
  if (current === 'cross') {
    pawdokuGrid[r][c] = '';
    playSound('/audio/cross_tap.wav');
  } else {
    pawdokuGrid[r][c] = 'cross';
    playSound('/audio/cross_tap.wav');
  }
  g.updatePawdokuUI();
};

g.restartPawdoku = () => {
  pawdokuGrid = [
    ['', 'pet', '', ''],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ];
  pawdokuHasWon = false;
  pawdokuLastTap = {};
  playSound('/audio/cross_tap.wav');
  g.updatePawdokuUI();
};

g.hintPawdoku = () => {
  const solPets = [[0, 1], [1, 3], [2, 0], [3, 2]];
  for (const [r, c] of solPets) {
    if (pawdokuGrid[r][c] !== 'pet') {
      pawdokuGrid[r][c] = 'pet';
      playSound('/audio/pet_place.wav');
      g.updatePawdokuUI();
      return;
    }
  }
};

g.updatePawdokuUI = () => {
  const pets = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (pawdokuGrid[r][c] === 'pet') {
        pets.push({ r, c });
      }
    }
  }

  const conflicts = new Set();
  for (let i = 0; i < pets.length; i++) {
    for (let j = i + 1; j < pets.length; j++) {
      const p1 = pets[i];
      const p2 = pets[j];
      const sameRow = p1.r === p2.r;
      const sameCol = p1.c === p2.c;
      const sameReg = pawdokuConfig.regionMap[p1.r][p1.c] === pawdokuConfig.regionMap[p2.r][p2.c];
      const touching = Math.abs(p1.r - p2.r) <= 1 && Math.abs(p1.c - p2.c) <= 1;

      if (sameRow || sameCol || sameReg || touching) {
        conflicts.add(`${p1.r},${p1.c}`);
        conflicts.add(`${p2.r},${p2.c}`);
      }
    }
  }

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const cellElems = document.querySelectorAll(`[data-paw-cell="${r}-${c}"]`);
      const val = pawdokuGrid[r][c];
      const hasConflict = conflicts.has(`${r},${c}`);

      cellElems.forEach(el => {
        if (el.classList.contains('cell-conflict') !== hasConflict) {
          el.classList.toggle('cell-conflict', hasConflict);
        }

        const currentVal = el.getAttribute('data-val') || '';
        if (currentVal !== val) {
          el.setAttribute('data-val', val);
          if (val === 'pet') {
            el.innerHTML = `<div class="pet-drop-marker">${petAvatarSvg}</div>`;
          } else if (val === 'cross') {
            el.innerHTML = `<div class="paw-cross-marker">${petCrossSvg}</div>`;
          } else {
            el.innerHTML = '';
          }
        }
      });
    }
  }

  const isWon = pets.length === 4 && conflicts.size === 0 &&
    pawdokuConfig.solution.every((row, r) => row.every((sol, c) => (pawdokuGrid[r][c] === 'pet') === sol));

  const statusBars = document.querySelectorAll('.pawdoku-feedback-bar, .pawdoku-status-bar');
  if (isWon) {
    if (!pawdokuHasWon) {
      pawdokuHasWon = true;
      playSound('/audio/victory.wav');
    }
    statusBars.forEach(sb => {
      sb.innerHTML = `<span style="color:#10B981;font-weight:700;">🌟 Sanctuary Complete!</span>`;
    });
  } else if (conflicts.size > 0) {
    statusBars.forEach(sb => {
      sb.innerHTML = `<span style="color:#EF4444;font-weight:600;">⚠️ Companions cannot touch</span>`;
    });
  } else {
    statusBars.forEach(sb => {
      sb.innerHTML = `<span><strong>${pets.length} of 4</strong> companions placed</span>`;
    });
  }
};

// --- Cycle Live Today Dashboard Simulation Engine ---
const cyclePhaseData = {
  menstrual: {
    day: 'Day 2 of 28',
    title: 'Menstrual Phase',
    readiness: 'Cellular Renewal',
    daysUntil: '26 days',
    accent: '#e11d48'
  },
  follicular: {
    day: 'Day 9 of 28',
    title: 'Follicular Phase',
    readiness: 'Rising Energy',
    daysUntil: '19 days',
    accent: '#7c3aed'
  },
  ovulation: {
    day: 'Day 14 of 28',
    title: 'Ovulation Peak',
    readiness: 'Optimal Strength PRs',
    daysUntil: '14 days',
    accent: '#0284c7'
  },
  luteal: {
    day: 'Day 22 of 28',
    title: 'Luteal Phase',
    readiness: 'Metabolic Surge',
    daysUntil: '6 days',
    accent: '#ea580c'
  }
};

g.switchCyclePhase = (phaseKey) => {
  const data = cyclePhaseData[phaseKey];
  if (!data) return;

  document.querySelectorAll('.phase-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === `phase-btn-${phaseKey}`);
  });

  const ringGlows = document.querySelectorAll('#cycle-ring-glow');
  ringGlows.forEach(ringGlow => {
    ringGlow.style.borderColor = data.accent;
    ringGlow.style.boxShadow = `0 0 36px ${data.accent}40, inset 0 0 24px ${data.accent}20`;
  });

  document.querySelectorAll('#phase-day-text').forEach(el => {
    el.innerText = data.day;
  });
  document.querySelectorAll('#phase-title-text').forEach(el => {
    el.innerText = data.title;
    el.style.color = data.accent;
  });
  document.querySelectorAll('#phase-readiness-text').forEach(el => {
    el.innerText = data.readiness;
    el.style.color = data.accent;
  });
  document.querySelectorAll('#cycle-countdown-days, .cycle-forecast-days').forEach(el => {
    el.innerText = data.daysUntil;
  });
};

// --- Calculator+ Live TDEE & Goal-Adaptive Macro Simulation Engine ---
let calcState = {
  weight: 74,
  activity: 1.55, // moderate
  goal: 'cut'     // 'cut' | 'maintain' | 'bulk'
};

g.adjCalcWeight = (delta) => {
  calcState.weight = Math.max(45, Math.min(140, calcState.weight + delta));
  const el = document.getElementById('calc-val-weight');
  if (el) el.innerText = calcState.weight;
  g.calculateTdeeResults();
};

g.setCalcActivity = (multiplier, btnId) => {
  calcState.activity = multiplier;
  document.querySelectorAll('.calc-act-chip').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(btnId);
  if (activeBtn) activeBtn.classList.add('active');
  g.calculateTdeeResults();
};

g.setCalcGoal = (goalKey, btnId) => {
  calcState.goal = goalKey;
  document.querySelectorAll('.calc-goal-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(btnId);
  if (activeBtn) activeBtn.classList.add('active');
  g.calculateTdeeResults();
};

g.calculateTdeeResults = () => {
  const { weight, activity, goal } = calcState;
  // Clinical Mifflin-St Jeor formula baseline (178cm, 28yo male)
  const bmr = (10 * weight) + (6.25 * 178) - (5 * 28) + 5;
  const maintenanceTdee = Math.round(bmr * activity);

  let targetCalories = maintenanceTdee;
  let goalSub = 'Maintenance';

  if (goal === 'cut') {
    targetCalories = Math.max(1200, maintenanceTdee - 500);
    goalSub = 'Fat Loss (-500 kcal)';
  } else if (goal === 'bulk') {
    targetCalories = maintenanceTdee + 300;
    goalSub = 'Muscle Surplus (+300 kcal)';
  }

  // Clinical macro distribution: 30% Protein / 40% Carbs / 30% Healthy Fats
  const proteinG = Math.round((targetCalories * 0.30) / 4);
  const carbG = Math.round((targetCalories * 0.40) / 4);
  const fatG = Math.round((targetCalories * 0.30) / 9);

  const tdeeEls = document.querySelectorAll('#calc-res-tdee');
  const subEls = document.querySelectorAll('#calc-res-goal-sub');
  const proteinEls = document.querySelectorAll('#calc-res-protein');
  const carbEls = document.querySelectorAll('#calc-res-carb');
  const fatEls = document.querySelectorAll('#calc-res-fat');

  tdeeEls.forEach(el => el.innerText = targetCalories.toLocaleString());
  subEls.forEach(el => el.innerHTML = `kcal / day &bull; ${goalSub}`);
  proteinEls.forEach(el => el.innerText = `${proteinG}g`);
  carbEls.forEach(el => el.innerText = `${carbG}g`);
  fatEls.forEach(el => el.innerText = `${fatG}g`);
};

// --- Calculator+ Everyday Tactile Keypad Engine ---
let calcExpression = '1250 × 1.08';
let calcResult = '1350';

g.setCalcMode = (mode) => {
  document.querySelectorAll('.calc-mode-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById(`calc-mode-btn-${mode}`);
  if (btn) btn.classList.add('active');

  const everydayView = document.getElementById('calc-everyday-view');
  const clinicalView = document.getElementById('calc-clinical-view');
  if (everydayView && clinicalView) {
    if (mode === 'everyday') {
      everydayView.style.display = 'block';
      clinicalView.style.display = 'none';
    } else {
      everydayView.style.display = 'none';
      clinicalView.style.display = 'block';
    }
  }
};

g.calcKeyPress = (key) => {
  playSound('/audio/cross_tap.wav');
  if (key === 'AC') {
    calcExpression = '';
    calcResult = '0';
  } else if (key === '⌫') {
    calcExpression = calcExpression.slice(0, -1);
    if (!calcExpression) calcResult = '0';
  } else if (key === '=') {
    try {
      const sanitized = calcExpression.replace(/×/g, '*').replace(/÷/g, '/');
      const evaluated = Function(`'use strict'; return (${sanitized})`)();
      calcResult = Number.isFinite(evaluated) ? Number(evaluated.toFixed(4)).toString() : 'Error';
    } catch (_) {
      calcResult = 'Error';
    }
  } else {
    calcExpression += key;
    try {
      const sanitized = calcExpression.replace(/×/g, '*').replace(/÷/g, '/');
      const evaluated = Function(`'use strict'; return (${sanitized})`)();
      if (Number.isFinite(evaluated)) {
        calcResult = Number(evaluated.toFixed(4)).toString();
      }
    } catch (_) {}
  }

  const exprEl = document.getElementById('calc-screen-expr');
  const resEl = document.getElementById('calc-screen-res');
  if (exprEl) exprEl.textContent = calcExpression || '0';
  if (resEl) resEl.textContent = calcResult || '0';
};

// Ecosystem Matrix Filter Helper (by Discipline or Lifecycle Status)
g.filterMatrix = (filterKey) => {
  document.querySelectorAll('.matrix-filter-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(`filter-btn-${filterKey}`);
  if (activeBtn) activeBtn.classList.add('active');

  const cards = document.querySelectorAll('.matrix-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category'); // 'games' | 'health'
    const cardStatus = card.getAttribute('data-status'); // 'production' | 'beta' | 'development'
    if (filterKey === 'all' || cardCat === filterKey || cardStatus === filterKey) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};


// --- Interactive Health Suite Discipline Switcher ---
g.switchHealthTab = (tabId) => {
  ['cycle', 'calculator', 'nutrition', 'activity'].forEach(id => {
    const btn = document.getElementById(`health-tab-${id}`);
    const panel = document.getElementById(`health-panel-${id}`);
    if (btn) btn.classList.toggle('active', id === tabId);
    if (panel) {
      panel.style.display = (id === tabId) ? 'grid' : 'none';
      if (id === tabId) panel.classList.add('fade-in-active');
    }
  });
  if (tabId === 'nutrition' && g.updateNutritionUI) g.updateNutritionUI();
  if (tabId === 'activity' && g.updateWorkoutUI) g.updateWorkoutUI();
};

// --- Interactive EVLOME Games Discipline Switcher ---
g.switchGameTab = (gameId) => {
  ['ludo-prince', 'pawdoku'].forEach(id => {
    const btn = document.getElementById(`game-tab-${id}`);
    const panel = document.getElementById(`game-panel-${id}`);
    if (btn) btn.classList.toggle('active', id === gameId);
    if (panel) {
      panel.style.display = (id === gameId) ? 'grid' : 'none';
      if (id === gameId) panel.classList.add('fade-in-active');
    }
  });
};

// --- Nutrition: Simple In-App Fuel Logger Engine ---
let nutritionMealsState = {
  oats: true,
  chicken: true,
  yogurt: false
};

const nutritionMealsData = {
  oats: { name: 'Oats & Whey', cal: 380, p: 32, c: 48, f: 6 },
  chicken: { name: 'Chicken & Quinoa', cal: 540, p: 48, c: 44, f: 14 },
  yogurt: { name: 'Greek Yogurt', cal: 220, p: 24, c: 22, f: 4 }
};

const NUTRITION_TARGETS = {
  cal: 2100,
  p: 150,
  c: 220,
  f: 65
};

g.toggleNutrMeal = (mealId) => {
  if (nutritionMealsState[mealId] !== undefined) {
    nutritionMealsState[mealId] = !nutritionMealsState[mealId];
    playSound(nutritionMealsState[mealId] ? '/audio/pet_place.wav' : '/audio/cross_tap.wav');
    g.updateNutritionUI();
  }
};

g.updateNutritionUI = () => {
  let totalCal = 700;
  let totalP = 16;
  let totalC = 74;
  let totalF = 24;

  for (const [id, isLogged] of Object.entries(nutritionMealsState)) {
    const data = nutritionMealsData[id];
    if (isLogged && data) {
      totalCal += data.cal;
      totalP += data.p;
      totalC += data.c;
      totalF += data.f;
    }
    document.querySelectorAll(`.nutr-chip-${id}`).forEach(el => {
      el.classList.toggle('active', isLogged);
      const checkEl = el.querySelector('.nutr-chip-check');
      if (checkEl) checkEl.textContent = isLogged ? '✓' : '+';
    });
  }

  document.querySelectorAll('#nutr-cals-num').forEach(el => {
    el.textContent = totalCal.toLocaleString();
  });
  const remainCal = Math.max(0, NUTRITION_TARGETS.cal - totalCal);
  document.querySelectorAll('#nutr-remain-pill').forEach(el => {
    el.textContent = remainCal > 0 ? `${remainCal} kcal left` : 'Goal Met 🎯';
  });
  const pct = Math.min(100, Math.round((totalCal / NUTRITION_TARGETS.cal) * 100));
  document.querySelectorAll('#nutr-progress-fill').forEach(el => {
    el.style.width = `${pct}%`;
  });

  document.querySelectorAll('#nutr-p-val').forEach(el => el.textContent = `${totalP}g`);
  document.querySelectorAll('#nutr-c-val').forEach(el => el.textContent = `${totalC}g`);
  document.querySelectorAll('#nutr-f-val').forEach(el => el.textContent = `${totalF}g`);
};

// --- Activity: Simple In-App Workout Set Logger Engine ---
let workoutWeight = 100;
let workoutReps = 8;
let workoutSetLogged = false;
let restTimerSeconds = 90;
let restTimerInterval = null;

g.adjWorkoutWeight = (delta) => {
  workoutWeight = Math.max(20, Math.min(250, workoutWeight + delta));
  playSound('/audio/cross_tap.wav');
  g.updateWorkoutUI();
};

g.adjWorkoutReps = (delta) => {
  workoutReps = Math.max(1, Math.min(30, workoutReps + delta));
  playSound('/audio/cross_tap.wav');
  g.updateWorkoutUI();
};

g.toggleLogWorkoutSet = () => {
  workoutSetLogged = !workoutSetLogged;
  if (workoutSetLogged) {
    playSound('/audio/victory.wav');
    g.startSimpleRestTimer(90);
  } else {
    playSound('/audio/cross_tap.wav');
    g.stopSimpleRestTimer();
  }
  g.updateWorkoutUI();
};

g.startSimpleRestTimer = (seconds) => {
  if (restTimerInterval) clearInterval(restTimerInterval);
  restTimerSeconds = seconds;
  restTimerInterval = setInterval(() => {
    if (restTimerSeconds > 0) {
      restTimerSeconds--;
      g.updateTimerText();
    } else {
      clearInterval(restTimerInterval);
      playSound('/audio/victory.wav');
    }
  }, 1000);
  g.updateTimerText();
};

g.stopSimpleRestTimer = () => {
  if (restTimerInterval) clearInterval(restTimerInterval);
  restTimerSeconds = 90;
  g.updateTimerText();
};

g.updateTimerText = () => {
  const m = Math.floor(restTimerSeconds / 60);
  const s = restTimerSeconds % 60;
  const str = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  document.querySelectorAll('#act-timer-digits').forEach(el => {
    el.textContent = str;
  });
};

g.updateWorkoutUI = () => {
  document.querySelectorAll('#act-weight-val').forEach(el => {
    el.textContent = `${workoutWeight} kg`;
  });
  document.querySelectorAll('#act-reps-val').forEach(el => {
    el.textContent = `${workoutReps} reps`;
  });

  const perSide = Math.max(0, (workoutWeight - 20) / 2);
  document.querySelectorAll('#act-plate-val').forEach(el => {
    el.textContent = `${perSide} kg/side`;
  });

  const oneRM = Math.round(workoutWeight * (1 + workoutReps / 30));
  document.querySelectorAll('#act-onerm-val').forEach(el => {
    el.textContent = `${oneRM} kg`;
  });

  document.querySelectorAll('#act-log-set-btn').forEach(btn => {
    if (workoutSetLogged) {
      btn.innerHTML = `<span>✓ Set 3 Logged</span> &bull; <span class="act-rest-tag">Rest: <strong id="act-timer-digits">01:30</strong> (Tap to reset)</span>`;
      btn.classList.add('completed');
    } else {
      btn.innerHTML = `<span>✓ Log Set 3 (${workoutWeight} kg &times; ${workoutReps})</span>`;
      btn.classList.remove('completed');
    }
  });

  g.updateTimerText();
};

// Reusable Simple Demo Renderers
export const renderNutritionDemo = () => `
  <!-- In-App Daily Fuel & Macro Logger Component -->
  <div class="nutrition-app-card">
    <div class="nutr-simple-header">
      <div class="nutr-simple-title">
        <span class="nutr-eyebrow">DAILY FUEL TARGET</span>
        <span class="nutr-cals-display"><strong id="nutr-cals-num">1,620</strong> / 2,100 kcal</span>
      </div>
      <span class="nutr-remain-badge" id="nutr-remain-pill">480 kcal left</span>
    </div>

    <div class="nutr-simple-bar-wrap">
      <div class="nutr-simple-bar-fill" id="nutr-progress-fill" style="width: 77%;"></div>
    </div>

    <div class="nutr-simple-macros">
      <div class="nutr-macro-pill">
        <span class="macro-dot protein"></span>
        <span class="macro-lbl">Protein</span>
        <strong id="nutr-p-val">96g</strong><span class="macro-target">/150g</span>
      </div>
      <div class="nutr-macro-pill">
        <span class="macro-dot carbs"></span>
        <span class="macro-lbl">Carbs</span>
        <strong id="nutr-c-val">166g</strong><span class="macro-target">/220g</span>
      </div>
      <div class="nutr-macro-pill">
        <span class="macro-dot fats"></span>
        <span class="macro-lbl">Fats</span>
        <strong id="nutr-f-val">44g</strong><span class="macro-target">/65g</span>
      </div>
    </div>

    <div class="nutr-chips-wrap">
      <span class="nutr-chips-title">Quick Log Whole Food:</span>
      <div class="nutr-chips-row">
        <button type="button" class="nutr-food-chip nutr-chip-oats active" onclick="window.toggleNutrMeal('oats')">
          <span class="nutr-chip-check">✓</span>
          <span>🥣 Oats &amp; Whey (+380 kcal)</span>
        </button>
        <button type="button" class="nutr-food-chip nutr-chip-chicken active" onclick="window.toggleNutrMeal('chicken')">
          <span class="nutr-chip-check">✓</span>
          <span>🥗 Chicken Quinoa (+540 kcal)</span>
        </button>
        <button type="button" class="nutr-food-chip nutr-chip-yogurt" onclick="window.toggleNutrMeal('yogurt')">
          <span class="nutr-chip-check">+</span>
          <span>🫐 Greek Yogurt (+220 kcal)</span>
        </button>
      </div>
    </div>
  </div>
`;

export const renderActivityDemo = () => `
  <!-- In-App Live Workout Set Logger Component -->
  <div class="activity-workout-card">
    <div class="act-simple-header">
      <div class="act-simple-title">
        <span class="act-eyebrow">WORKOUT LOG</span>
        <h4 class="act-simple-ex">Barbell Bench Press</h4>
      </div>
      <span class="act-simple-set-badge">Set 3 of 4</span>
    </div>

    <div class="act-stepper-box">
      <div class="act-control-group">
        <span class="act-control-lbl">Weight</span>
        <div class="act-stepper-unit">
          <button type="button" class="act-step-btn" onclick="window.adjWorkoutWeight(-5)" title="-5 kg">&minus;</button>
          <span class="act-stepper-display" id="act-weight-val">100 kg</span>
          <button type="button" class="act-step-btn" onclick="window.adjWorkoutWeight(5)" title="+5 kg">&#43;</button>
        </div>
      </div>

      <span class="act-times-sep">&times;</span>

      <div class="act-control-group">
        <span class="act-control-lbl">Reps</span>
        <div class="act-stepper-unit">
          <button type="button" class="act-step-btn" onclick="window.adjWorkoutReps(-1)" title="-1 rep">&minus;</button>
          <span class="act-stepper-display" id="act-reps-val">8 reps</span>
          <button type="button" class="act-step-btn" onclick="window.adjWorkoutReps(1)" title="+1 rep">&#43;</button>
        </div>
      </div>
    </div>

    <button type="button" class="act-main-log-btn" id="act-log-set-btn" onclick="window.toggleLogWorkoutSet()">
      <span>✓ Log Set 3 (100 kg &times; 8)</span>
    </button>

    <div class="act-simple-footer">
      <span>Plate Load: <strong id="act-plate-val">40 kg/side</strong> (20 kg Bar)</span>
      <span class="act-foot-sep">&bull;</span>
      <span>Est. 1RM: <strong id="act-onerm-val" style="color: #ea580c;">127 kg</strong></span>
    </div>
  </div>
`;

export const renderHome = () => {
  const ludo = gamesData.find(g => g.id === 'ludo-prince') || gamesData[0];
  const pawdoku = gamesData.find(g => g.id === 'pawdoku') || gamesData[1];
  const cycle = suiteApps.find(a => a.id === 'cycle') || suiteApps[1];
  const calc = suiteApps.find(a => a.id === 'calculator') || suiteApps[0];
  const nutrition = suiteApps.find(a => a.id === 'nutrition') || suiteApps[3];
  const activity = suiteApps.find(a => a.id === 'activity') || suiteApps[2];

  return `
  <!-- STAGE 1: Cinematic Studio Hero Viewport -->
  <section class="cinematic-stage hero-viewport">
    <div class="hero-glow-aura"></div>

    <div class="stage-badge">
      <span>EVLOME STUDIO</span>
    </div>

    <h1 class="hero-headline">
      Calculated Precision.<br/>Mindful Play.
    </h1>

    <p class="hero-description">
      Thoughtfully engineered health utilities and tactile board games.<br class="desktop-only"/>Encrypted on device. Designed to be lived with.
    </p>

    <div class="hero-actions-row">
      <button type="button" class="btn-primary-glow" onclick="window.scrollToSection('suite-stage')">
        <span>The Health Suite</span> &darr;
      </button>
      <button type="button" class="btn-glass" onclick="window.scrollToSection('games-stage')">
        <span>EVLOME Games</span> &darr;
      </button>
    </div>

    <!-- Quiet Disciplines Strip -->
    <div class="hero-matrix-bar">
      <span><strong>6</strong> Sovereign Apps</span>
      <span style="opacity: 0.3;">&bull;</span>
      <span><strong>100%</strong> On-Device Sovereignty</span>
      <span style="opacity: 0.3;">&bull;</span>
      <span><strong>Zero</strong> Tracking Infrastructure</span>
      <span style="opacity: 0.3;">&bull;</span>
      <span><strong>Offline</strong> First</span>
    </div>
  </section>

  <!-- STAGE 2: The Health Suite — Sovereign Vitality OS (Discipline 1) -->
  <section id="suite-stage" class="discipline-stage health-suite-stage">
    <div class="discipline-header-center">
      <span class="stage-badge">
        <span class="badge-dot" style="background: #10b981; box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);"></span>
        THE HEALTH SUITE &bull; SOVEREIGN VITALITY OS
      </span>
      <h2 class="stage-title">Complete Health Telemetry. Sovereign on Device.</h2>
      <p class="stage-subtitle-center">
        Four interconnected disciplines engineered to track metabolic energy, kinetic performance, biological rhythm, and clinical precision &mdash; encrypted 100% on device with zero cloud tracking.
      </p>

      <!-- 4-App Selector Tabs (With Official App Logos) -->
      <div class="discipline-tabs-nav" role="tablist" aria-label="Health Suite disciplines">
        <button type="button" class="discipline-tab-btn active" id="health-tab-cycle" onclick="window.switchHealthTab('cycle')">
          <img src="${cycle.icon}" alt="Cycle" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
          <span class="tab-btn-text">
            <span class="tab-btn-title">Cycle</span>
            <span class="tab-btn-sub">Hormonal Rhythm</span>
          </span>
          <span class="tab-status-pill status-beta">BETA</span>
        </button>

        <button type="button" class="discipline-tab-btn" id="health-tab-calculator" onclick="window.switchHealthTab('calculator')">
          <img src="${calc.icon}" alt="Calculator+" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
          <span class="tab-btn-text">
            <span class="tab-btn-title">Calculator+</span>
            <span class="tab-btn-sub">Clinical Biometrics</span>
          </span>
          <span class="tab-status-pill status-beta">BETA</span>
        </button>

        <button type="button" class="discipline-tab-btn" id="health-tab-nutrition" onclick="window.switchHealthTab('nutrition')">
          <img src="${nutrition.icon}" alt="Nutrition" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
          <span class="tab-btn-text">
            <span class="tab-btn-title">Nutrition</span>
            <span class="tab-btn-sub">Fasting &amp; Fuel</span>
          </span>
          <span class="tab-status-pill status-development">DEV</span>
        </button>

        <button type="button" class="discipline-tab-btn" id="health-tab-activity" onclick="window.switchHealthTab('activity')">
          <img src="${activity.icon}" alt="Activity" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
          <span class="tab-btn-text">
            <span class="tab-btn-title">Activity</span>
            <span class="tab-btn-sub">Kinetic &amp; Lifting</span>
          </span>
          <span class="tab-status-pill status-development">DEV</span>
        </button>
      </div>
    </div>

    <!-- Health Panels Container -->
    <div class="discipline-panels-wrap">
      <!-- Panel 1: Cycle -->
      <div id="health-panel-cycle" class="stage-split-grid discipline-panel fade-in-active" style="display: grid;">
        <div class="stage-info-col">
          <div class="stage-status-badge-row">
            <span class="status-pill status-pill-beta">
              <span class="pulse-dot purple"></span>
              BETA
            </span>
            <span class="stage-discipline-badge" style="color: #e11d48; border-color: rgba(225, 29, 72, 0.25);">The Health Suite &bull; Biological Rhythm</span>
          </div>

          <div class="stage-app-title-row">
            <img src="${cycle.icon}" alt="Cycle Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(225, 29, 72, 0.28);" />
            <h3 class="stage-title">${cycle.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #e11d48;">Hormonal rhythm. On-device privacy.</div>
          <p class="stage-desc">
            Track hormonal shifts across menstrual, follicular, ovulation, and luteal phases. Pair sympto-thermal basal temperature with cervical telemetry to confirm peak fertility windows.
          </p>

          <div class="stage-specs-grid">
            <div class="spec-item">
              <span class="spec-label">Clinical Core</span>
              <span class="spec-val">Roetzer BBT Shift</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Sovereignty</span>
              <span class="spec-val">100% On-Device Vault</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Integration</span>
              <span class="spec-val">Training &amp; Fuel Sync</span>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
            <a href="/cycle" class="btn-primary-glow" onclick="if(event){ event.preventDefault(); navigate('/cycle'); }">
              Explore Cycle Architecture &rarr;
            </a>
            <a href="/beta?app=cycle" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/beta?app=cycle'); }">
              Join Beta
            </a>
          </div>
        </div>

        <!-- Concentric Hormonal Rhythm Signature Wheel -->
        <div class="phase-display-card cycle-dashboard-viewport">
          <div class="phase-switcher-nav" style="margin: 0 auto 1.25rem;">
            <button type="button" class="phase-btn" id="phase-btn-menstrual" onclick="window.switchCyclePhase('menstrual')">Menstrual</button>
            <button type="button" class="phase-btn" id="phase-btn-follicular" onclick="window.switchCyclePhase('follicular')">Follicular</button>
            <button type="button" class="phase-btn active" id="phase-btn-ovulation" onclick="window.switchCyclePhase('ovulation')">Ovulation</button>
            <button type="button" class="phase-btn" id="phase-btn-luteal" onclick="window.switchCyclePhase('luteal')">Luteal</button>
          </div>

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

          <div class="cycle-period-forecast-card">
            <span class="cycle-forecast-drop">🩸</span>
            <span class="cycle-forecast-text">Next period expected in <strong id="cycle-countdown-days" class="cycle-forecast-days">14 days</strong></span>
          </div>
        </div>
      </div>

      <!-- Panel 2: Calculator+ -->
      <div id="health-panel-calculator" class="stage-split-grid discipline-panel" style="display: none;">
        <div class="stage-info-col">
          <div class="stage-status-badge-row">
            <span class="status-pill status-pill-beta">
              <span class="pulse-dot purple"></span>
              BETA
            </span>
            <span class="stage-discipline-badge" style="color: #7c3aed; border-color: rgba(124, 58, 237, 0.25);">The Health Suite &bull; Clinical Biometrics</span>
          </div>

          <div class="stage-app-title-row">
            <img src="${calc.icon}" alt="${calc.title} Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(124, 58, 237, 0.28);" />
            <h3 class="stage-title">${calc.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #7c3aed;">Clinical biometrics and mathematical rigor.</div>
          <p class="stage-desc">
            Dynamic energy expenditure calculated offline via personal biometric models. Balance macronutrient splits, analyze loan amortization schedules, and convert across 9 physical dimensions.
          </p>

          <div class="stage-specs-grid">
            <div class="spec-item">
              <span class="spec-label">Biometrics</span>
              <span class="spec-val">Mifflin-St Jeor &amp; US Navy</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Conversions</span>
              <span class="spec-val">9 Physical Dimensions</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Execution</span>
              <span class="spec-val">100% Local &amp; Private</span>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
            <a href="/beta?app=${calc.id}" class="btn-primary-glow" style="box-shadow: 0 4px 16px rgba(124, 58, 237, 0.25);">
              Join the Beta &rarr;
            </a>
            <a href="/${calc.id}" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/${calc.id}'); }">
              Specifications
            </a>
          </div>
        </div>

        <!-- Goal-Adaptive TDEE & Macro Allocation Engine -->
        <div class="interactive-calculator-card">
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

          <div class="calc-output-bento">
            <div class="calc-hero-result">
              <div class="calc-hero-result-num" id="calc-res-tdee">2,162</div>
              <div class="calc-hero-result-sub" id="calc-res-goal-sub">kcal / day &bull; Fat Loss (-500 kcal)</div>
            </div>

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
      </div>

      <!-- Panel 3: Nutrition -->
      <div id="health-panel-nutrition" class="stage-split-grid discipline-panel" style="display: none;">
        <div class="stage-info-col">
          <div class="stage-status-badge-row">
            <span class="status-pill status-pill-development">
              <span class="pulse-dot amber"></span>
              DEV
            </span>
            <span class="stage-discipline-badge" style="color: #059669; border-color: rgba(5, 150, 105, 0.25);">The Health Suite &bull; Metabolic Balance</span>
          </div>

          <div class="stage-app-title-row">
            <img src="${nutrition.icon}" alt="${nutrition.title} Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(5, 150, 105, 0.28);" />
            <h3 class="stage-title">${nutrition.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #059669;">Metabolic balance and whole-food telemetry.</div>
          <p class="stage-desc">
            Effortless whole-food logging, intermittent fasting telemetry, and personalized metabolic goals. Local nutritional database with zero commercial profiling.
          </p>

          <div class="stage-specs-grid">
            <div class="spec-item">
              <span class="spec-label">Fasting</span>
              <span class="spec-val">16:8, 18:6 &amp; OMAD</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Macro Rings</span>
              <span class="spec-val">5 Essential Targets</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Database</span>
              <span class="spec-val">100% On-Device Vault</span>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
            <a href="/nutrition" class="btn-primary-glow" onclick="if(event){ event.preventDefault(); navigate('/nutrition'); }">
              Explore Nutrition Architecture &rarr;
            </a>
            <a href="/beta?app=nutrition" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/beta?app=nutrition'); }">
              Join Beta
            </a>
          </div>
        </div>

        ${renderNutritionDemo()}
      </div>

      <!-- Panel 4: Activity -->
      <div id="health-panel-activity" class="stage-split-grid discipline-panel" style="display: none;">
        <div class="stage-info-col">
          <div class="stage-status-badge-row">
            <span class="status-pill status-pill-development">
              <span class="pulse-dot amber"></span>
              DEV
            </span>
            <span class="stage-discipline-badge" style="color: #d97706; border-color: rgba(217, 119, 6, 0.25);">The Health Suite &bull; Kinetic Performance</span>
          </div>

          <div class="stage-app-title-row">
            <img src="${activity.icon}" alt="${activity.title} Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(217, 119, 6, 0.28);" />
            <h3 class="stage-title">${activity.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #d97706;">Kinetic performance and workout logging.</div>
          <p class="stage-desc">
            Versatile strength tracking for gym and home training. Set/rep logging, haptic rest countdown timers, barbell plate math, and progressive overload metrics.
          </p>

          <div class="stage-specs-grid">
            <div class="spec-item">
              <span class="spec-label">Formulas</span>
              <span class="spec-val">Brzycki &amp; Epley 1RM</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Assistant</span>
              <span class="spec-val">Barbell Plate Math</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Pacing</span>
              <span class="spec-val">Haptic Rest Timers</span>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
            <a href="/activity" class="btn-primary-glow" onclick="if(event){ event.preventDefault(); navigate('/activity'); }">
              Explore Activity Architecture &rarr;
            </a>
            <a href="/beta?app=activity" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/beta?app=activity'); }">
              Join Beta
            </a>
          </div>
        </div>

        ${renderActivityDemo()}
      </div>
    </div>
  </section>

  <!-- STAGE 3: EVLOME Games — Tactile Joy & Mindful Play (Discipline 2) -->
  <section id="games-stage" class="cinematic-stage discipline-stage games-discipline-stage">
    <div class="discipline-header-center">
      <span class="stage-badge">
        <span class="badge-dot" style="background: #0284c7; box-shadow: 0 0 8px rgba(2, 132, 199, 0.6);"></span>
        EVLOME GAMES &bull; TACTILE JOY &amp; MINDFUL PLAY
      </span>
      <h2 class="stage-title">Pure Play. Zero Compromise.</h2>
      <p class="stage-subtitle-center">
        Tactile physics, physical dice inertia, and mindful puzzle sanctuaries. 100% ad-free online and local multiplayer with zero predatory countdown timers.
      </p>

      <!-- 2-Game Selector Tabs (With Official App Logos) -->
      <div class="discipline-tabs-nav games-tabs-nav" role="tablist" aria-label="EVLOME Games">
        <button type="button" class="discipline-tab-btn active" id="game-tab-ludo-prince" onclick="window.switchGameTab('ludo-prince')">
          <img src="${ludo.icon}" alt="Ludo Prince" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
          <span class="tab-btn-text">
            <span class="tab-btn-title">Ludo Prince</span>
            <span class="tab-btn-sub">Tactile Multiplayer Board</span>
          </span>
          <span class="tab-status-pill status-production">LIVE</span>
        </button>

        <button type="button" class="discipline-tab-btn" id="game-tab-pawdoku" onclick="window.switchGameTab('pawdoku')">
          <img src="${pawdoku.icon}" alt="Pawdoku" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
          <span class="tab-btn-text">
            <span class="tab-btn-title">Pawdoku</span>
            <span class="tab-btn-sub">Star Battle Sanctuary</span>
          </span>
          <span class="tab-status-pill status-development">DEV</span>
        </button>
      </div>
    </div>

    <!-- Games Panels Container -->
    <div class="discipline-panels-wrap">
      <!-- Panel 1: Ludo Prince -->
      <div id="game-panel-ludo-prince" class="stage-split-grid discipline-panel fade-in-active" style="display: grid;">
        <div class="stage-info-col">
          <div class="stage-status-badge-row">
            <span class="status-pill status-pill-production">
              <span class="pulse-dot green"></span>
              LIVE
            </span>
            <span class="stage-discipline-badge">EVLOME Games</span>
          </div>

          <div class="stage-app-title-row">
            <img src="${ludo.icon}" alt="${ludo.title} Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(2, 132, 199, 0.28);" />
            <h3 class="stage-title">${ludo.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #0284c7;">Classic board play. Pure tactile physics.</div>
          <p class="stage-desc">
            The traditional race to home, engineered with physical dice inertia. Real-time multiplayer, local pass-and-play, and adaptive offline bot intelligence.
          </p>

          <div class="stage-specs-grid">
            <div class="spec-item">
              <span class="spec-label">Multiplayer</span>
              <span class="spec-val">Online &amp; Pass-and-Play</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Physics</span>
              <span class="spec-val">Fair Tactile Inertia</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Platforms</span>
              <span class="spec-val">iOS &amp; Android</span>
            </div>
          </div>

          <div class="store-badge-strip" style="margin-top: 1.5rem;">
            <a href="${ludo.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-store btn-app-store" title="Download Ludo Prince on the Apple App Store">
              <svg class="store-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.92-1 .04-2.14.67-2.81 1.45-.59.67-1.1 1.76-.96 2.82 1.11.09 2.21-.58 2.83-1.35z"/>
              </svg>
              <div class="store-badge-text">
                <span class="store-badge-sub">Download on the</span>
                <span class="store-badge-main">App Store</span>
              </div>
            </a>
            <a href="${ludo.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-store btn-play-store" title="Get Ludo Prince on Google Play">
              <svg class="store-icon" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
              </svg>
              <div class="store-badge-text">
                <span class="store-badge-sub">GET IT ON</span>
                <span class="store-badge-main">Google Play</span>
              </div>
            </a>
            <a href="/${ludo.id}" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/${ludo.id}'); }">
              Overview
            </a>
          </div>
        </div>

        <!-- 3D Inertia Dice Interactive Viewport -->
        <div class="interactive-arena-card ludo-dice-only-card">
          <div class="arena-room-pill">
            <span class="pulse-green"></span>
            ROYAL DICE ARENA &bull; LIVE ENGINE
          </div>

          <!-- Tactile Dice Halo with Orbital Ring -->
          <div class="ludo-dice-halo">
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
            <span style="color: var(--text-muted);">Tap dice or button to roll &bull; Physical inertia</span>
          </div>
        </div>
      </div>

      <!-- Panel 2: Pawdoku -->
      <div id="game-panel-pawdoku" class="stage-split-grid discipline-panel" style="display: none;">
        <div class="stage-info-col">
          <div class="stage-status-badge-row">
            <span class="status-pill status-pill-development">
              <span class="pulse-dot amber"></span>
              DEV
            </span>
            <span class="stage-discipline-badge">EVLOME Games</span>
          </div>

          <div class="stage-app-title-row">
            <img src="${pawdoku.icon}" alt="${pawdoku.title} Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(234, 88, 12, 0.28);" />
            <h3 class="stage-title">${pawdoku.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #ea580c;">Star Battle logic. Zero rush.</div>
          <p class="stage-desc">
            One companion per row, column, and color region. Pure deductive strategy in a tranquil pastel pet sanctuary.
          </p>

          <div class="stage-specs-grid">
            <div class="spec-item">
              <span class="spec-label">Engine</span>
              <span class="spec-val">Aloof Queens Logic</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Pacing</span>
              <span class="spec-val">Zero Timers or Stress</span>
            </div>
            <div class="spec-item">
              <span class="spec-label">Access</span>
              <span class="spec-val">Early Beta Preview</span>
            </div>
          </div>

          <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; margin-top: 1.5rem;">
            <a href="/beta?app=${pawdoku.id}" class="btn-primary-glow" style="box-shadow: 0 4px 16px rgba(234, 88, 12, 0.25);">
              Request Early Preview &rarr;
            </a>
            <a href="/${pawdoku.id}" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/${pawdoku.id}'); }">
              Sanctuary Overview
            </a>
          </div>
        </div>

        <!-- 4x4 Tactile Clay Star Battle Board (Contained Component Card) -->
        <div class="interactive-sanctuary-card">
          <!-- Sanctuary Gesture Controls Bar -->
          <div class="pawdoku-controls-strip">
            <div class="pawdoku-gesture-pill" title="Tap to cross • Double-tap to place pet • Drag to paint crosses">
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
      </div>
    </div>
  </section>

  <!-- STAGE 4: EVLOME ONE — The Universal Membership Showcase (No Prices) -->
  <section id="one-stage" class="one-stage">
    <div class="one-container">
      <div class="one-header-center">
        <span class="stage-badge">
          <span class="badge-dot" style="background: #f59e0b; box-shadow: 0 0 8px rgba(245, 158, 11, 0.6);"></span>
          EVLOME ONE &bull; UNIVERSAL MEMBERSHIP
        </span>
        <h2 class="stage-title">All Apps. One Membership.</h2>
        <p class="stage-subtitle-center">
          A single universal pass that unlocks every Pro capability, clinical health telemetry tool, and game across the entire EVLOME universe — with zero ads, private cloud sync, and all future app releases automatically included. Available directly inside any EVLOME app.
        </p>
      </div>

      <!-- App Icons Constellation Strip -->
      <div class="one-apps-constellation">
        <span class="one-constellation-lbl">UNIFIED MEMBERSHIP ACROSS THE ENTIRE SUITE</span>
        <div class="one-constellation-icons">
          ${allProducts.map(app => `
            <div class="one-constellation-icon" title="${app.title}">
              <img src="${app.icon}" alt="${app.title}" width="44" height="44" loading="lazy" decoding="async" />
            </div>
          `).join('')}
        </div>
      </div>

      <!-- 3 Ecosystem Pillars Bento -->
      <div class="one-grid">
        <div class="one-card">
          <div class="one-card-icon-group">
            ${suiteApps.map(app => `<img src="${app.icon}" alt="${app.title} Logo" class="one-mini-logo" width="36" height="36" loading="lazy" decoding="async" />`).join('')}
          </div>
          <span class="one-card-tag" style="color: #059669;">THE HEALTH SUITE</span>
          <h3 class="one-card-title">Precision Health OS</h3>
          <p class="one-card-desc">
            Complete telemetry across metabolic energy, strength training, hormonal rhythm, and clinical biometrics.
          </p>
          <ul class="one-card-perks">
            <li>✓ Nutrition: Whole-food logging &amp; fasting telemetry</li>
            <li>✓ Activity: Workout sets, plate math &amp; rest timers</li>
            <li>✓ Cycle: Hormonal rhythm &amp; ovulation telemetry</li>
            <li>✓ Calculator+: 50+ clinical metabolic &amp; math models</li>
          </ul>
        </div>

        <div class="one-card">
          <div class="one-card-icon-group">
            ${gamesData.map(app => `<img src="${app.icon}" alt="${app.title} Logo" class="one-mini-logo" width="36" height="36" loading="lazy" decoding="async" />`).join('')}
          </div>
          <span class="one-card-tag" style="color: #6366f1;">THE PLAY SUITE</span>
          <h3 class="one-card-title">Pure Play &amp; Ad-Free</h3>
          <p class="one-card-desc">
            Multiplayer board classics and mindful puzzles. Enjoy 100% ad-free gameplay with royal cosmetics and VIP perks.
          </p>
          <ul class="one-card-perks">
            <li>✓ 100% ad-free online &amp; pass-and-play</li>
            <li>✓ Ludo Prince VIP: royal boards &amp; golden dice</li>
            <li>✓ Monthly bonus coin grants &amp; VIP perks</li>
            <li>✓ All future game releases automatically included</li>
          </ul>
        </div>

        <div class="one-card">
          <div class="one-card-icon-wrap" style="background: rgba(245, 158, 11, 0.1); color: #d97706;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
          </div>
          <span class="one-card-tag" style="color: #d97706;">TOOLS &amp; CLOUD VAULT</span>
          <h3 class="one-card-title">Private Cloud Sync</h3>
          <p class="one-card-desc">
            Private multi-device sync across iPhone, iPad, and Android with zero-custody on-device encryption. Seamless continuity across your entire ecosystem.
          </p>
          <ul class="one-card-perks">
            <li>✓ Encrypted cross-device cloud sync</li>
            <li>✓ Offline-first architecture</li>
            <li>✓ Zero tracking, ads, or data custody</li>
          </ul>
        </div>
      </div>

      <!-- Feature Highlight Strip (Apple Bento Banner - No Prices) -->
      <div class="one-membership-strip">
        <div class="one-strip-col">
          <div class="one-strip-eyebrow">ONE UNIFIED ACCOUNT</div>
          <h3 class="one-strip-title">Unlock Once. Enjoy Across Every Device.</h3>
          <p class="one-strip-desc">
            Subscribe through Apple App Store or Google Play in any EVLOME app. Your membership instantly activates across every app and device linked to your EVLOME ID — with effortless cancellation directly in your device account settings. All future health tools, games, and suite features are automatically unlocked with zero upgrade fees.
          </p>
        </div>
        <div class="one-strip-pills">
          <div class="one-feature-badge">
            <svg class="badge-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>7-Day Free Trial Included</span>
          </div>
          <div class="one-feature-badge">
            <svg class="badge-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Annual &amp; Monthly Plans Available</span>
          </div>
          <div class="one-feature-badge">
            <svg class="badge-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Cancel Anytime in App Settings</span>
          </div>
          <div class="one-feature-badge">
            <svg class="badge-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>All Future Apps Automatically Included</span>
          </div>
        </div>
      </div>

      <!-- Action Row -->
      <div class="one-actions-row">
        <a href="/beta" class="btn-primary-glow" onclick="if(event){ event.preventDefault(); navigate('/beta'); }">
          Join Early Access &rarr;
        </a>
        <button type="button" class="btn-glass" onclick="window.scrollToSection('principles-section')">
          Explore The Codex &darr;
        </button>
      </div>
    </div>
  </section>

  <!-- STAGE 5: The EVLOME Codex & Principles -->
  <section id="principles-section" class="codex-section">
    <div class="codex-container">
      <span class="stage-badge">THE CODEX</span>
      <h2 class="stage-title">Rigor &amp; Reverie.</h2>
      <p style="color: var(--text-secondary); max-width: 600px; font-size: 1.05rem; line-height: 1.6; margin: 0 auto 2.5rem;">
        Four foundational standards guiding every line of code we ship across health telemetry and game design.
      </p>

      <div class="codex-grid">
        <div class="codex-card">
          <span class="codex-num">01 / SOVEREIGNTY</span>
          <h3 class="codex-title">On-Device Vault</h3>
          <p class="codex-desc">
            Your health, metabolic, and personal telemetry reside strictly on your physical hardware. We operate zero user-tracking infrastructure.
          </p>
        </div>

        <div class="codex-card">
          <span class="codex-num">02 / INTEGRITY</span>
          <h3 class="codex-title">Deterministic Rigor</h3>
          <p class="codex-desc">
            Clinical biometric equations and physical board mechanics operate transparently with complete mathematical integrity.
          </p>
        </div>

        <div class="codex-card">
          <span class="codex-num">03 / RESTRAINT</span>
          <h3 class="codex-title">Mindful Interaction</h3>
          <p class="codex-desc">
            Zero synthetic urgency, deceptive close buttons, or artificial countdowns. Interfaces distilled strictly to essential craft.
          </p>
        </div>

        <div class="codex-card">
          <span class="codex-num">04 / AUTONOMY</span>
          <h3 class="codex-title">100% Offline</h3>
          <p class="codex-desc">
            Built like physical instruments. Every formula, health journal, and bot match operates completely without network connectivity.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- STAGE 6: Beta Invitation Terminal -->
  <section class="cinematic-stage" style="min-height: 48vh; text-align: center; align-items: center; justify-content: center; padding: 4rem 1.5rem;">
    <span class="stage-badge">EARLY ACCESS PROGRAM</span>
    <h2 class="stage-title" style="max-width: 650px; margin: 0.5rem auto 1rem;">
      Shape the Future of EVLOME.
    </h2>
    <p style="color: var(--text-secondary); max-width: 480px; font-size: 1.05rem; line-height: 1.6; margin: 0 auto 2rem;">
      TestFlight and Google Play preview slots are open for upcoming builds across the Suite and EVLOME Games.
    </p>
    <a href="/beta" class="btn-primary-glow" style="font-size: 14.5px; padding: 0.9rem 2.25rem;">
      Apply for Beta Testing &rarr;
    </a>
  </section>
  `;
};

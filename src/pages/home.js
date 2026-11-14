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

export const renderHome = () => {
  const ludo = gamesData.find(g => g.id === 'ludo-prince') || gamesData[0];
  const pawdoku = gamesData.find(g => g.id === 'pawdoku') || gamesData[1];
  const cycle = suiteApps.find(a => a.id === 'cycle') || suiteApps[1];
  const calc = suiteApps.find(a => a.id === 'calculator') || suiteApps[0];

  return `
  <!-- STAGE 1: Cinematic Studio Hero Viewport -->
  <section class="cinematic-stage hero-viewport">
    <div class="hero-glow-aura"></div>

    <div class="stage-badge">
      <span class="badge-dot"></span>
      <span>TWO DISCIPLINES &bull; ONE RIGOROUS ETHIC</span>
    </div>

    <h1 class="hero-headline gradient-text">
      Calculated Precision.<br/>Mindful Play.
    </h1>

    <p class="hero-description">
      Software engineered with quiet discipline. From <strong>private health biometrics and physiological telemetry</strong> to <strong>tactile board games and mindful puzzle sanctuaries</strong>.
    </p>

    <!-- Interactive Dual Direction Gateway -->
    <div class="hero-dual-gateway">
      <!-- Direction 1: The Health Suite -->
      <div class="gateway-pillar-card health-pillar" onclick="window.scrollToSection('suite-stage')">
        <div class="gateway-badge" style="color: #e11d48; border-color: rgba(225, 29, 72, 0.25);">
          THE HEALTH SUITE
        </div>
        <h3 class="gateway-title">Clinical Telemetry</h3>
        <p class="gateway-desc">
          Clinical biometrics, hormonal rhythms, daily movement, and metabolic nutrition — computed locally and encrypted 100% on device.
        </p>

        <div class="gateway-apps-row">
          <div class="gateway-app-chip">
            <img src="/icons/cycle.png" alt="Cycle" />
            <span>Cycle</span>
            <span class="chip-status-pill chip-status-beta">BETA</span>
          </div>
          <div class="gateway-app-chip">
            <img src="/icons/calculator.png" alt="Calculator+" />
            <span>Calculator+</span>
            <span class="chip-status-pill chip-status-beta">BETA</span>
          </div>
          <div class="gateway-app-chip">
            <img src="/icons/activity.png" alt="Activity" />
            <span>Activity</span>
            <span class="chip-status-pill chip-status-dev">DEV</span>
          </div>
          <div class="gateway-app-chip">
            <img src="/icons/nutrition.png" alt="Nutrition" />
            <span>Nutrition</span>
            <span class="chip-status-pill chip-status-dev">DEV</span>
          </div>
        </div>

        <div class="gateway-action-link" style="color: #e11d48;">
          <span>Explore Health Suite</span> &darr;
        </div>
      </div>

      <!-- Direction 2: EVLOME Games -->
      <div class="gateway-pillar-card games-pillar" onclick="window.scrollToSection('ludo-stage')">
        <div class="gateway-badge" style="color: #0284c7; border-color: rgba(2, 132, 199, 0.25);">
          EVLOME GAMES
        </div>
        <h3 class="gateway-title">Mindful Play</h3>
        <p class="gateway-desc">
          Tactile board classics, mindful logic puzzles, and cozy sanctuaries — designed for pure, unhurried play and thoughtful design.
        </p>

        <div class="gateway-apps-row">
          <div class="gateway-app-chip">
            <img src="/icons/ludo-prince.png" alt="Ludo Prince" />
            <span>Ludo Prince</span>
            <span class="chip-status-pill chip-status-live">LIVE</span>
          </div>
          <div class="gateway-app-chip">
            <img src="/icons/pawdoku.png" alt="Pawdoku" />
            <span>Pawdoku</span>
            <span class="chip-status-pill chip-status-dev">DEV</span>
          </div>
        </div>

        <div class="gateway-action-link" style="color: #0284c7;">
          <span>Explore Games</span> &darr;
        </div>
      </div>
    </div>

    <!-- Live Metrics Strip -->
    <div class="hero-matrix-bar">
      <span><strong>2</strong> Core Disciplines</span>
      <span style="opacity: 0.3;">&bull;</span>
      <span><strong style="color: #059669;">● LIVE</strong>, <strong style="color: #7c3aed;">▲ BETA</strong> &amp; <strong style="color: #d97706;">⚙ DEV</strong></span>
      <span style="opacity: 0.3;">&bull;</span>
      <span><strong>0</strong> Commercial Trackers</span>
      <span style="opacity: 0.3;">&bull;</span>
      <span><strong>100%</strong> On-Device Encryption</span>
    </div>
  </section>

  <!-- STAGE 2: EVLOME Games Arena Viewport (Ludo Prince) -->
  <section id="ludo-stage" class="cinematic-stage arena-stage">
    <div class="stage-split-grid">
      <div class="stage-info-col">
        <!-- App Lifecycle Status & Category Header -->
        <div class="stage-status-badge-row">
          <span class="status-pill status-pill-production">
            <span class="pulse-dot green"></span>
            LIVE
          </span>
          <span class="stage-discipline-badge">EVLOME Games</span>
        </div>

        <div class="stage-app-title-row">
          <img src="${ludo.icon}" alt="${ludo.title} Logo" class="stage-app-icon" style="box-shadow: 0 10px 28px rgba(2, 132, 199, 0.28);" />
          <h2 class="stage-title gradient-text">${ludo.title}</h2>
        </div>

        <div class="stage-subtitle" style="color: #0284c7;">Pure tactile board play. Genuine physical dice.</div>
        <p class="stage-desc">
          The classic board game, crafted with timeless discipline. No pay-to-win boosters, no algorithmic handicaps, and no rigged rolls. Experience cryptographically fair physical dice inertia with friends online or offline in pass-and-play.
        </p>

        <div class="feature-pill-strip">
          <span class="feature-pill" style="border-color: rgba(2, 132, 199, 0.4); color: #0284c7; font-weight: 600;">● Live on App Store &amp; Google Play</span>
          <span class="feature-pill">Real-Time Multiplayer &amp; Pass-and-Play</span>
          <span class="feature-pill">Fair Physical Dice (No Rigged AI)</span>
          <span class="feature-pill">100% Offline Pass &amp; Play</span>
        </div>

        <!-- Store Download Badges -->
        <div class="store-badge-strip">
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
            <svg class="store-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M3.609 1.814L13.793 12 3.61 22.186c-.368-.344-.61-.88-.61-1.56V3.374c0-.68.242-1.216.61-1.56zm11.24 11.243l2.296 2.296-11.83 6.83 9.534-9.126zm0-2.114L5.315 1.817l11.83 6.83-2.296 2.296zm1.488 1.057l3.65 2.108c.848.49.848 1.294 0 1.784l-3.65 2.108-2.072-2.072 2.072-2.028z"/>
            </svg>
            <div class="store-badge-text">
              <span class="store-badge-sub">GET IT ON</span>
              <span class="store-badge-main">Google Play</span>
            </div>
          </a>

          <a href="/${ludo.id}" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/${ludo.id}'); }">
            Architecture &amp; Rules &rarr;
          </a>
        </div>
      </div>

      <!-- Right Column: Royal Dice Signature Interaction -->
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
    </div>
  </section>

  <!-- STAGE 3: Pawdoku Cozy Sanctuary Viewport -->
  <section id="pawdoku-stage" class="cinematic-stage sanctuary-stage">
    <div class="stage-split-grid">
      <!-- Left Column: Cozy Sanctuary Star Battle Board Widget -->
      <div class="interactive-sanctuary-card">
        ${pawdokuSvgDefs}
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

      <!-- Right Column: Pawdoku Info -->
      <div class="stage-info-col">
        <!-- App Lifecycle Status & Category Header -->
        <div class="stage-status-badge-row">
          <span class="status-pill status-pill-development">
            <span class="pulse-dot amber"></span>
            DEV
          </span>
          <span class="stage-discipline-badge">EVLOME Games</span>
        </div>

        <div class="stage-app-title-row">
          <img src="${pawdoku.icon}" alt="${pawdoku.title} Logo" class="stage-app-icon" style="box-shadow: 0 10px 28px rgba(234, 88, 12, 0.28);" />
          <h2 class="stage-title gradient-text">${pawdoku.title}</h2>
        </div>

        <div class="stage-subtitle" style="color: #ea580c;">Tranquil pastel logic. Cozy pet sanctuary.</div>
        <p class="stage-desc">
          A mindful Star Battle puzzle. Place adorable animal companions across colorful regions without crowding their personal space — exactly one per row, column, and color zone, with zero guesswork and zero timers.
        </p>

        <div class="feature-pill-strip">
          <span class="feature-pill" style="border-color: rgba(234, 88, 12, 0.4); color: #ea580c; font-weight: 600;">Star Battle Logic</span>
          <span class="feature-pill">Zero Pressure or Timers</span>
          <span class="feature-pill">Cozy Pet Sanctuary</span>
          <span class="feature-pill">100% Offline Play</span>
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
    </div>
  </section>

  <!-- STAGE 4: The Health Suite — Hormonal Rhythm & Clinical Biometrics (Cycle) -->
  <section id="suite-stage" class="cinematic-stage suite-stage">
    <div class="stage-split-grid">
      <div class="stage-info-col">
        <!-- App Lifecycle Status & Category Header -->
        <div class="stage-status-badge-row">
          <span class="status-pill status-pill-beta">
            <span class="pulse-dot purple"></span>
            BETA
          </span>
          <span class="stage-discipline-badge">The Health Suite</span>
        </div>

        <div class="stage-app-title-row">
          <img src="/icons/cycle.png" alt="Cycle Logo" class="stage-app-icon" style="box-shadow: 0 10px 28px rgba(225, 29, 72, 0.28);" />
          <h2 class="stage-title gradient-text">Cycle</h2>
        </div>

        <div class="stage-subtitle" style="color: #e11d48;">Your rhythm. Encrypted on device. Synced with your life.</div>
        <p class="stage-desc">
          Post-Roe reproductive privacy by design. Zero accounts, zero cloud servers, and zero risk of data broker sales or subpoenas. Go beyond simple period dates: sync your daily workouts and nutrition with your biological hormone shifts, validated by Roetzer sympto-thermal BBT shift detection.
        </p>

        <div class="feature-pill-strip">
          <span class="feature-pill" style="border-color: rgba(225, 29, 72, 0.3); color: #e11d48; font-weight: 600;">100% On-Device Vault (No Cloud)</span>
          <span class="feature-pill">Hormone-Synced Training &amp; Fuel</span>
          <span class="feature-pill">Roetzer Sympto-Thermal BBT Shift</span>
          <span class="feature-pill">Zero Accounts or Trackers</span>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
          <a href="/cycle" class="btn-primary-glow" onclick="if(event){ event.preventDefault(); navigate('/cycle'); }">
            Explore Cycle Architecture &rarr;
          </a>
          <a href="/calculator" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/calculator'); }">
            Explore Calculator+
          </a>
        </div>
      </div>

      <!-- Right Column: Concentric Hormonal Rhythm Signature Wheel -->
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
    </div>
  </section>

  <!-- STAGE 5: The Health Suite — Clinical Biometrics & TDEE (Calculator+) -->
  <section id="calculator-stage" class="cinematic-stage calculator-stage">
    <div class="stage-split-grid">
      <div class="stage-info-col">
        <!-- App Lifecycle Status & Category Header -->
        <div class="stage-status-badge-row">
          <span class="status-pill status-pill-beta">
            <span class="pulse-dot purple"></span>
            BETA
          </span>
          <span class="stage-discipline-badge">The Health Suite</span>
        </div>

        <div class="stage-app-title-row">
          <img src="${calc.icon}" alt="${calc.title} Logo" class="stage-app-icon" style="box-shadow: 0 10px 28px rgba(124, 58, 237, 0.28);" />
          <h2 class="stage-title gradient-text">${calc.title}</h2>
        </div>

        <div class="stage-subtitle" style="color: #7c3aed;">Deterministic mathematics. Clinical biometric precision.</div>
        <p class="stage-desc">
          Engineered for precision health and metabolic mathematics. Calculator+ computes clinical Mifflin-St Jeor TDEE expenditure, goal-adaptive macronutrient distributions, and US Navy body composition formulas — calculated 100% deterministically on device with zero telemetry.
        </p>

        <div class="feature-pill-strip">
          <span class="feature-pill" style="border-color: rgba(124, 58, 237, 0.3); color: #7c3aed; font-weight: 600;">Mifflin-St Jeor &amp; Katch-McArdle</span>
          <span class="feature-pill">Goal-Adaptive Macro Targets</span>
          <span class="feature-pill">US Navy Body Fat Modeling</span>
          <span class="feature-pill">100% On-Device Vault</span>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem;">
          <a href="/beta?app=${calc.id}" class="btn-primary-glow" style="box-shadow: 0 4px 16px rgba(124, 58, 237, 0.25);">
            Join the Calculator+ Beta &rarr;
          </a>
          <a href="/${calc.id}" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/${calc.id}'); }">
            Clinical Specifications
          </a>
        </div>
      </div>

      <!-- Right Column: Goal-Adaptive TDEE & Macro Allocation Engine -->
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
    </div>
  </section>

  <!-- STAGE 6: The Product Matrix (Full Ecosystem Bento Grid) -->
  <section id="matrix-stage" class="matrix-stage">
    <div class="matrix-header">
      <span class="stage-badge">ECOSYSTEM MATRIX</span>
      <h2 class="stage-title gradient-text">Two Disciplines. One Ecosystem.</h2>
      <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto 2rem; font-size: 1.1rem;">
        Explore the expanding ecosystem across the Health Suite and EVLOME Games.
      </p>

      <!-- Segmented Control Filter by Discipline -->
      <div class="matrix-filter-nav" role="tablist" aria-label="Product discipline filter">
        <button type="button" class="matrix-filter-btn active" id="filter-btn-all" onclick="window.filterMatrix('all')">
          All
        </button>
        <button type="button" class="matrix-filter-btn" id="filter-btn-health" onclick="window.filterMatrix('health')">
          Health
        </button>
        <button type="button" class="matrix-filter-btn" id="filter-btn-games" onclick="window.filterMatrix('games')">
          Games
        </button>
      </div>
    </div>

    <div class="matrix-grid" id="matrix-grid-container">
      ${allProducts.map(p => `
        <a href="/${p.id}" class="matrix-card" data-category="${p.type === 'game' ? 'games' : 'health'}" data-status="${p.status}" style="--card-accent: ${p.accentColor};" onclick="if(event){ event.preventDefault(); navigate('/${p.id}'); }">
          <div class="card-top-row">
            <div class="card-identity-header">
              <div class="card-app-icon" style="box-shadow: 0 0 20px ${p.accentColor}30;">
                <img src="${p.icon}" alt="${p.title} Icon" />
              </div>
              <div class="card-identity-titles">
                <div class="card-category" style="color: ${p.accentColor};">${p.category}</div>
                <h3 class="card-title">${p.title}</h3>
              </div>
            </div>
            <span class="matrix-status-pill ${p.status === 'production' ? 'status-production' : p.status === 'beta' ? 'status-beta' : 'status-development'}">
              <span class="pulse-dot ${p.status === 'production' ? 'green' : p.status === 'beta' ? 'purple' : 'amber'}"></span>
              ${p.status === 'production' ? 'LIVE' : p.status === 'beta' ? 'BETA' : 'DEV'}
            </span>
          </div>

          <p class="card-desc">${p.tagline || p.desc}</p>

          <div class="card-action-btn ${p.status === 'production' ? 'card-action-live' : p.status === 'beta' ? 'card-action-beta' : 'card-action-dev'}">
            <span>${p.status === 'production' ? 'Get App' : p.status === 'beta' ? 'Join Beta' : 'Preview'}</span> &rarr;
          </div>
        </a>
      `).join('')}
    </div>
  </section>

  <!-- STAGE 7: The EVLOME Codex & Principles (The Unifying Thread) -->
  <section id="principles-section" class="codex-section">
    <div class="codex-container">
      <span class="stage-badge" style="color: var(--accent-brand); border-color: rgba(0, 113, 227, 0.3);">THE UNIFYING STANDARD</span>
      <h2 class="stage-title gradient-text">Why We Build Both: Rigor &amp; Reverie.</h2>
      <p style="color: var(--text-secondary); max-width: 720px; font-size: 1.15rem; line-height: 1.6;">
        Modern software has devolved into invasive biometric surveillance and predatory gambling loops.
        EVLOME is built on a single, uncompromising counter-ethic across both health telemetry and game design:
      </p>

      <div class="codex-grid">
        <div class="codex-card">
          <span class="codex-num">01 / LOCAL SOVEREIGNTY</span>
          <h3 class="codex-title">Your Device is Your Vault</h3>
          <p class="codex-desc">
            Your basal temperature, cycle predictions, and personal telemetry reside strictly on your physical hardware. We run zero tracking infrastructure.
          </p>
        </div>

        <div class="codex-card">
          <span class="codex-num">02 / DETERMINISTIC RIGOR</span>
          <h3 class="codex-title">Verified Mathematics</h3>
          <p class="codex-desc">
            From verified clinical formulas (Mifflin-St Jeor, Roetzer shift) to cryptographically fair dice in Ludo Prince — mechanics are transparent and uncompromised.
          </p>
        </div>

        <div class="codex-card">
          <span class="codex-num">03 / QUIET LUXURY</span>
          <h3 class="codex-title">Zero Dark Patterns</h3>
          <p class="codex-desc">
            No countdown paywalls, deceptive close buttons, or manipulative timers. Interfaces are distilled strictly to tactile delight and essential controls.
          </p>
        </div>

        <div class="codex-card">
          <span class="codex-num">04 / COMPLETE AUTONOMY</span>
          <h3 class="codex-title">100% Offline Capability</h3>
          <p class="codex-desc">
            Health telemetry and mindful play must never fail when connectivity drops. Every formula, journal entry, and bot match operates completely offline.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- STAGE 7: Beta Invitation Terminal -->
  <section class="cinematic-stage" style="min-height: 60vh; text-align: center; align-items: center;">
    <span class="stage-badge" style="color: #059669; border-color: rgba(5, 150, 105, 0.3);">EARLY ACCESS TERMINAL</span>
    <h2 class="stage-title gradient-text" style="max-width: 750px; margin-bottom: 1rem;">
      Shape the Future of EVLOME.
    </h2>
    <p style="color: var(--text-secondary); max-width: 520px; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2.5rem;">
      Apply for TestFlight (iOS) and Google Play (Android) early access to the Suite and EVLOME Games.
    </p>
    <a href="/beta" class="btn-primary-glow" style="font-size: 15px; padding: 1rem 2.5rem;">
      Apply for Beta Testing &rarr;
    </a>
  </section>
  `;
};

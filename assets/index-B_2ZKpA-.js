(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`calculator`,type:`utility`,title:`Calculator+`,eyebrow:`CLINICAL ACCURACY`,category:`Biometrics, Math & Precision`,tagline:`Clinical biometrics, metabolic models, and precision conversions.`,heroTagline:`Pure mathematical rigor. In your pocket.`,desc:`Mifflin-St Jeor metabolic expenditure, US Navy body composition, macronutrient distribution, loan schedules, and 9-dimensional conversions. Computed entirely offline.`,stats:[{value:`9`,label:`Conversion Dimensions`},{value:`4`,label:`Macro Split Frameworks`},{value:`0`,label:`Data Transmitted`},{value:`100%`,label:`On-Device Vault`}],highlights:[{title:`Mifflin-St Jeor TDEE & BMR`,desc:`Calculates Basal Metabolic Rate and Total Daily Energy Expenditure across five activity multipliers (1.2× to 1.9×) with deficit (-500 kcal) and surplus (+500 kcal) caloric targets.`},{title:`US Navy Body Fat & Clinical Metrics`,desc:`Precise body composition estimation using the US Navy circumference equations (neck, waist, hip, height) alongside metric and imperial BMI health classification thresholds.`},{title:`Target Macronutrient Distribution`,desc:`Generates tailored daily gram allocations for protein, carbohydrates, and fats across four metabolic frameworks: Balanced (30/40/30), High Protein (40/30/30), Low Carb (40/20/40), and Ketogenic (20/5/75).`},{title:`Hydration & 1RM Strength Forecasting`,desc:`Dynamic baseline fluid intake calculation adjusted for exercise volume (+0.35L per 30 mins) paired with Brzycki and Epley 1-Rep Max formulas with load percentages for progressive overload.`},{title:`Loan Amortization & Compound Interest`,desc:`Full financial schedule projections for personal and mortgage loans alongside multi-frequency compound interest growth models, tip splitting, discount/tax, and offline currency conversions.`},{title:`Multi-Category Converter & Daily Tools`,desc:`Nine-dimensional unit conversions (length, mass, volume, temperature, speed, area, data, energy), recipe scaling proportions, unit price comparisons, date math, base conversion, and haptic tally counting.`}],icon:`/icons/calculator.png`,accentColor:`#7c3aed`,categoryGradient:`linear-gradient(90deg, #a855f7 0%, #7c3aed 50%, #6d28d9 100%)`,status:`beta`,privacyLink:`/calculator/privacy`,termsLink:`/calculator/terms`},{id:`cycle`,type:`utility`,title:`Cycle`,eyebrow:`REPRODUCTIVE PRIVACY`,category:`Women's Health & Hormonal Rhythm`,tagline:`Roetzer sympto-thermal tracking and encrypted hormonal rhythm.`,heroTagline:`Your rhythm. Your body. Encrypted on device.`,desc:`Four-phase hormonal tracking and Roetzer sympto-thermal ovulation forecasting — encrypted locally with zero cloud servers or commercial trackers.`,stats:[{value:`4`,label:`Hormonal Rhythm Phases`},{value:`13`,label:`Symptom Trackers`},{value:`BBT`,label:`Roetzer Thermal Shift`},{value:`0`,label:`Third-Party Trackers`}],highlights:[{title:`4-Phase Hormonal Rhythm Wheel`,desc:`Visualizes your real-time position within the menstrual cycle across four distinct hormonal stages: Menstrual (restorative), Follicular (rising estrogen), Ovulation (estrogen peak), and Luteal (progesterone dominance).`},{title:`Sympto-Thermal Ovulation Confirmation`,desc:`Validates true ovulation using clinical Roetzer biphasic Basal Body Temperature (BBT) thermal shift detection (3 high temps over 6 low temps) paired with Ovulation Predictor Kit (LH surge) verification.`},{title:`Personalized Luteal Phase Tracking`,desc:`Learns your individual luteal duration (10–18 days) from rolling historical averages instead of assuming a generic 14-day window, filtering irregular cycle anomalies for higher forecast accuracy.`},{title:`Cervical Telemetry & Fertility Windows`,desc:`Tracks cervical mucus consistency across five progressive stages from dry to peak fertile egg-white fluid, computing real-time Low, High, and Peak fertility probability windows.`},{title:`Holistic 13-Symptom & Mood Journal`,desc:`Multi-dimensional daily tracking covering flow intensity, 13 physical symptoms (cramps, bloating, tender breasts, ovulation pain, nausea), 12 mood states, sexual activity, and high-precision temperature logging.`},{title:`Phase-Synced Workout & Fuel Guidance`,desc:`Synchronizes with the EVLOME ecosystem to offer cycle-tailored fitness guidance (HIIT during follicular energy surges vs heavy lifts during ovulation) and metabolic nutrition advice (iron and magnesium support).`}],icon:`/icons/cycle.png`,accentColor:`#e11d48`,categoryGradient:`linear-gradient(90deg, #f43f5e 0%, #e11d48 50%, #be123c 100%)`,status:`beta`,privacyLink:`/cycle/privacy`,termsLink:`/cycle/terms`},{id:`activity`,type:`utility`,title:`Activity`,eyebrow:`KINETIC PERFORMANCE`,category:`Kinetic & Motion Logging`,tagline:`Versatile workout logging with barbell plate math and haptic rest timers.`,heroTagline:`Track every rep. Master every set.`,desc:`Versatile workout logging for gym and home training. Set/rep tracking, haptic rest timers, barbell plate math, and progressive overload metrics.`,stats:[{value:`1RM`,label:`Max Effort Calculations`},{value:`Plate`,label:`Barbell Math Assistant`},{value:`Haptic`,label:`Rest Interval Timers`},{value:`100%`,label:`Offline Gym Logging`}],highlights:[{title:`Custom Workout Routines`,desc:`Pre-loaded compound programs or design your own bespoke lifting splits, supersets, and HIIT rounds.`},{title:`Rest & Plate Math Assistant`,desc:`Integrated barbell plate math and background haptic countdown timers between sets.`}],icon:`/icons/activity.png`,accentColor:`#d97706`,categoryGradient:`linear-gradient(90deg, #f59e0b 0%, #d97706 50%, #b45309 100%)`,status:`development`,privacyLink:`/activity/privacy`,termsLink:`/activity/terms`},{id:`nutrition`,type:`utility`,title:`Nutrition`,eyebrow:`METABOLIC BALANCE`,category:`Metabolic & Vitality Balance`,tagline:`Effortless caloric balance, whole-food logging, and fasting tracking.`,heroTagline:`Fuel your day with quiet clarity.`,desc:`Whole-food logging, fasting timers, and personalized metabolic goals backed by a local food database with zero commercial tracking.`,stats:[{value:`16:8`,label:`Intermittent Fasting`},{value:`5`,label:`Macro & Micro Rings`},{value:`0`,label:`Cloud Profiling`},{value:`Local`,label:`Food Database`}],highlights:[{title:`Macro & Micronutrient Targets`,desc:`Visual telemetry rings for protein, carbohydrates, healthy fats, dietary fiber, and sodium.`},{title:`Intermittent Fasting Timer`,desc:`Preset 16:8, 18:6, and custom schedules with real-time zone stages and fasting telemetry.`}],icon:`/icons/nutrition.png`,accentColor:`#059669`,categoryGradient:`linear-gradient(90deg, #10b981 0%, #059669 50%, #047857 100%)`,status:`development`,privacyLink:`/nutrition/privacy`,termsLink:`/nutrition/terms`}],t=[{id:`ludo-prince`,type:`game`,title:`Ludo Prince`,eyebrow:`TACTILE STRATEGY`,category:`Real-Time Strategy & Board`,tagline:`Tactile multiplayer board play with genuine physical dice.`,heroTagline:`Classic board play. Pure tactile joy.`,desc:`Classic board play engineered with physical dice inertia. Real-time multiplayer, local pass-and-play, and offline bot intelligence.`,stats:[{value:`3D`,label:`Tactile Physics Dice`},{value:`0`,label:`Energy Timers or Paywalls`},{value:`4P`,label:`Real-Time Multiplayer`},{value:`100%`,label:`Offline Bot Play`}],highlights:[{title:`Real-Time Online Multiplayer`,desc:`Create instant private lobbies with custom room codes, invite friends via dynamic deep links, or enter quick global matchmaking with seamless reconnects.`},{title:`Pass & Play Local Multiplayer`,desc:`Gather friends and family around a single device for 2, 3, or 4 player offline board gaming — complete with rotating seat markers and personal turn rings.`},{title:`Tactical AI Bot Play`,desc:`Sharpen your skills offline without waiting for opponents. Battle adaptive bot intelligence calibrated for engaging, competitive strategy.`},{title:`Classic & Team Match Modes`,desc:`Experience pure traditional race-to-home board play, or team up in 2v2 cooperative mode where teammates coordinate pawn maneuvers.`},{title:`Tactile Dice & Spatial Soundscapes`,desc:`Realistic physics-driven dice rolling, dynamic haptic vibrations on rolls and captures, and custom-composed audio effects for safe steps and home runs.`},{title:`Respectful, Player-First Design`,desc:`No aggressive pay-to-win boosters, no artificial energy timers, and no predatory micro-transactions. Pure, uncompromised board play.`}],icon:`/icons/ludo-prince.png`,accentColor:`#0284c7`,categoryGradient:`linear-gradient(90deg, #38bdf8 0%, #0284c7 50%, #0369a1 100%)`,status:`production`,appStoreUrl:`https://apps.apple.com/app/id6760012267`,playStoreUrl:`https://play.google.com/store/apps/details?id=com.paisphere.ludoprince`,privacyLink:`/ludo-prince/privacy`,termsLink:`/ludo-prince/terms`},{id:`pawdoku`,type:`game`,title:`Pawdoku`,eyebrow:`MINDFUL SANCTUARY`,category:`Mindful Puzzle & Cozy Sanctuary`,tagline:`Tranquil Star Battle logic in a cozy pet sanctuary.`,heroTagline:`Calm your mind. Nurture your haven.`,desc:`A mindful Star Battle puzzle in a cozy pastel sanctuary. One companion per row, column, and color region — 100% deductive strategy with zero rush.`,stats:[{value:`Star Battle`,label:`Aloof Queens Logic`},{value:`0`,label:`Stress or Timers`},{value:`Cozy Haven`,label:`Pet Sanctuary`},{value:`100%`,label:`Offline & Peaceful`}],highlights:[{title:`Aloof Pet Placement & Pure Logic`,desc:`One companion per row, column, and color region. Pets require personal space and cannot touch, even diagonally. 100% deductive, zero guesswork.`},{title:`Cozy Pet Haven & Sanctuary`,desc:`Adopt, cuddle, and feed aloof pet companions who respond with affectionate purrs, chirps, and floating heart reactions as your sanctuary flourishes.`},{title:`Sanctuary Decor & Warm Haven`,desc:`Earn cozy kibble through mindful play to collect warm rugs, fireplace accessories, cozy pet beds, and relaxing ambient lighting.`},{title:`Pressure-Free & Mindful Streaks`,desc:`No punitive countdown timers, no high-pressure game-overs, and no artificial stress. Track daily mindful streaks at your own peaceful pace.`}],icon:`/icons/pawdoku.png`,accentColor:`#ea580c`,categoryGradient:`linear-gradient(90deg, #fb923c 0%, #ea580c 50%, #c2410c 100%)`,status:`development`,privacyLink:`/pawdoku/privacy`,termsLink:`/pawdoku/terms`}],n=[...e,...t],r=e=>n.find(t=>t.id===e),i=null,a={},o={},s={},c=8,l=()=>{try{if(typeof window>`u`)return null;if(!i){let e=window.AudioContext||window.webkitAudioContext;e&&(i=new e)}return i&&i.state===`suspended`&&i.resume().catch(()=>{}),i}catch{return null}};if(typeof window<`u`){let e=[`pointerdown`,`touchstart`,`mousedown`,`keydown`],t=()=>{l(),e.forEach(e=>window.removeEventListener(e,t,!0))};e.forEach(e=>window.addEventListener(e,t,{capture:!0,once:!0}))}var u=async e=>{let t=l();if(!t||a[e])return a[e];try{let n=await fetch(e);if(!n.ok)return null;let r=await n.arrayBuffer(),i=await t.decodeAudioData(r);return a[e]=i,i}catch{return null}};typeof window<`u`&&[`/audio/cross_slide.wav`,`/audio/cross_tap.wav`,`/audio/pet_place.wav`,`/audio/roll.wav`,`/audio/six.wav`,`/audio/victory.wav`].forEach(e=>{u(e).catch(()=>{})});var d=e=>{try{let t=l();if(t&&a[e]){let n=t.createBufferSource();n.buffer=a[e],n.connect(t.destination),n.start(0);return}if(t&&!a[e]&&u(e).catch(()=>{}),typeof Audio>`u`)return;o[e]||(o[e]=Array.from({length:c},()=>{let t=new Audio(e);return t.preload=`auto`,t}),s[e]=0);let n=o[e],r=n[s[e]=((s[e]||0)+1)%n.length];r.currentTime=0;let i=r.play();i&&typeof i.catch==`function`&&i.catch(()=>{})}catch{}},f=typeof window<`u`?window:globalThis;f.playSound=d;var p={1:[5],2:[1,9],3:[1,5,9],4:[1,3,7,9],5:[1,3,5,7,9],6:[1,3,4,6,7,9]},m=()=>{if(typeof crypto<`u`&&crypto.getRandomValues){let e=new Uint32Array(1),t;do crypto.getRandomValues(e),t=e[0];while(t>=4294967292);return t%6+1}return Math.floor(Math.random()*6)+1};f.getFairDiceRoll=m;var h=e=>{let t=p[e]||[1,3,4,6,7,9],n=document.querySelectorAll(`.interactive-dice`);if(n.length>0)n.forEach(n=>{n.setAttribute(`data-val`,e);for(let e=1;e<=9;e++){let r=n.querySelector(`#dice-pip-${e}`);r&&(t.includes(e)?r.classList.add(`active`):r.classList.remove(`active`))}});else for(let e=1;e<=9;e++){let n=document.getElementById(`dice-pip-${e}`);n&&(t.includes(e)?n.classList.add(`active`):n.classList.remove(`active`))}};f.updateDicePips=h,f.rollLudoDice=()=>{let e=document.querySelectorAll(`#interactive-dice-cube, .interactive-dice`),t=document.querySelectorAll(`#dice-log-text, .dice-result-log`);if(e.length===0)return;d(`/audio/roll.wav`),e.forEach(e=>e.classList.add(`rolling`));let n=0,r=setInterval(()=>{h(Math.floor(Math.random()*6)+1),n++,n>=5&&clearInterval(r)},75);setTimeout(()=>{clearInterval(r);let n=m();h(n),n===6?(d(`/audio/six.wav`),e.forEach(e=>{e.classList.add(`rolled-six`),setTimeout(()=>e.classList.remove(`rolled-six`),1200)}),t.forEach(e=>{e.innerHTML=`<span style="color:#0284c7;font-weight:700;">👑 Rolled 6</span> &bull; Bonus turn!`})):t.forEach(e=>{e.innerHTML=`Rolled <strong>${n}</strong>`}),e.forEach(e=>e.classList.remove(`rolling`))},450)};var g={size:4,regionMap:[[2,0,1,1],[2,0,1,1],[2,0,1,1],[2,3,3,3]],regionColors:[`#F87A63`,`#83CB96`,`#FFCD48`,`#F9D3B4`],solution:[[!1,!0,!1,!1],[!1,!1,!1,!0],[!0,!1,!1,!1],[!1,!1,!0,!1]]},_=[[``,`pet`,``,``],[``,``,``,``],[``,``,``,``],[``,``,``,``]],v=!1,y=`
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
</svg>`,ee=`
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
</svg>`,b=`
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
</svg>`,x=`
<svg viewBox="0 0 44 44" style="width: 14px; height: 14px; vertical-align: -2px; display: inline-block;" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="rotate(45 22 22)">
    <rect x="17" y="6" width="10" height="32" rx="5" fill="#FFFFFF" stroke="#D5C4B1" stroke-width="1.8"/>
    <rect x="6" y="17" width="32" height="10" rx="5" fill="#FFFFFF" stroke="#D5C4B1" stroke-width="1.8"/>
    <rect x="17.5" y="17.5" width="9" height="9" fill="#FFFFFF"/>
  </g>
</svg>`;f.setPawdokuTool=e=>{};var S=!1,C=!1,w=null,T=null,E=null,D=`cross`,O=new Set,te=(e,t)=>{let[n,r]=e.split(`-`).map(Number),[i,a]=t.split(`-`).map(Number),o=[],s=i-n,c=a-r,l=Math.max(Math.abs(s),Math.abs(c));for(let e=1;e<=l;e++){let t=Math.round(n+s*e/l),i=Math.round(r+c*e/l);o.push(`${t}-${i}`)}return o};f.pawdokuPointerDown=e=>{l();let t=e.target.closest(`.paw-cell`);if(!t)return;let n=t.getAttribute(`data-paw-cell`);if(!n)return;S=!0,C=!1,w={x:e.clientX,y:e.clientY},T=n,E=n;let[r,i]=n.split(`-`).map(Number);D=_[r][i]===`cross`?`clear`:`cross`,O=new Set,O.add(n)},f.pawdokuPointerMove=e=>{if(S&&Math.hypot(e.clientX-w.x,e.clientY-w.y)>8){if(!C){C=!0;let[e,t]=T.split(`-`).map(Number);if(_[e][t]!==`pet`){let n=D===`cross`?`cross`:``;_[e][t]!==n&&(_[e][t]=n,d(`/audio/cross_slide.wav`),f.updatePawdokuUI())}}let t=document.elementFromPoint(e.clientX,e.clientY),n=t?t.closest(`.paw-cell`):null;if(n){let e=n.getAttribute(`data-paw-cell`);if(e){let t=E&&E!==e?te(E,e):[e];E=e;for(let e of t)if(!O.has(e)){O.add(e);let[t,n]=e.split(`-`).map(Number);if(t>=0&&t<4&&n>=0&&n<4&&_[t][n]!==`pet`){let e=D===`cross`?`cross`:``;_[t][n]!==e&&(_[t][n]=e,d(`/audio/cross_slide.wav`),f.updatePawdokuUI())}}}}}},f.pawdokuPointerUp=e=>{if(S){if(S=!1,!C&&T){let[e,t]=T.split(`-`).map(Number);f.pawdokuCellTap(e,t)}T=null,E=null}},typeof window<`u`&&(window.addEventListener(`pointerup`,e=>{f.pawdokuPointerUp&&f.pawdokuPointerUp(e)}),window.addEventListener(`pointercancel`,e=>{f.pawdokuPointerUp&&f.pawdokuPointerUp(e)}));var k={};f.pawdokuCellTap=(e,t)=>{let n=`${e}-${t}`,r=Date.now(),i=r-(k[n]||0);k[n]=r;let a=_[e][t];if(a===`pet`){_[e][t]=``,d(`/audio/cross_tap.wav`),k[n]=0,f.updatePawdokuUI();return}if(i>0&&i<350){_[e][t]=`pet`,d(`/audio/pet_place.wav`),k[n]=0,f.updatePawdokuUI();return}a===`cross`?(_[e][t]=``,d(`/audio/cross_tap.wav`)):(_[e][t]=`cross`,d(`/audio/cross_tap.wav`)),f.updatePawdokuUI()},f.restartPawdoku=()=>{_=[[``,`pet`,``,``],[``,``,``,``],[``,``,``,``],[``,``,``,``]],v=!1,k={},d(`/audio/cross_tap.wav`),f.updatePawdokuUI()},f.hintPawdoku=()=>{for(let[e,t]of[[0,1],[1,3],[2,0],[3,2]])if(_[e][t]!==`pet`){_[e][t]=`pet`,d(`/audio/pet_place.wav`),f.updatePawdokuUI();return}},f.updatePawdokuUI=()=>{let e=[];for(let t=0;t<4;t++)for(let n=0;n<4;n++)_[t][n]===`pet`&&e.push({r:t,c:n});let t=new Set;for(let n=0;n<e.length;n++)for(let r=n+1;r<e.length;r++){let i=e[n],a=e[r],o=i.r===a.r,s=i.c===a.c,c=g.regionMap[i.r][i.c]===g.regionMap[a.r][a.c],l=Math.abs(i.r-a.r)<=1&&Math.abs(i.c-a.c)<=1;(o||s||c||l)&&(t.add(`${i.r},${i.c}`),t.add(`${a.r},${a.c}`))}for(let e=0;e<4;e++)for(let n=0;n<4;n++){let r=document.querySelectorAll(`[data-paw-cell="${e}-${n}"]`),i=_[e][n],a=t.has(`${e},${n}`);r.forEach(e=>{e.classList.contains(`cell-conflict`)!==a&&e.classList.toggle(`cell-conflict`,a),(e.getAttribute(`data-val`)||``)!==i&&(e.setAttribute(`data-val`,i),e.innerHTML=i===`pet`?`<div class="pet-drop-marker">${y}</div>`:i===`cross`?`<div class="paw-cross-marker">${ee}</div>`:``)})}let n=e.length===4&&t.size===0&&g.solution.every((e,t)=>e.every((e,n)=>_[t][n]===`pet`===e)),r=document.querySelectorAll(`.pawdoku-feedback-bar, .pawdoku-status-bar`);n?(v||(v=!0,d(`/audio/victory.wav`)),r.forEach(e=>{e.innerHTML=`<span style="color:#10B981;font-weight:700;">🌟 Sanctuary Complete!</span>`})):t.size>0?r.forEach(e=>{e.innerHTML=`<span style="color:#EF4444;font-weight:600;">⚠️ Companions cannot touch</span>`}):r.forEach(t=>{t.innerHTML=`<span><strong>${e.length} of 4</strong> companions placed</span>`})};var ne={menstrual:{day:`Day 2 of 28`,title:`Menstrual Phase`,readiness:`Cellular Renewal`,daysUntil:`26 days`,accent:`#e11d48`},follicular:{day:`Day 9 of 28`,title:`Follicular Phase`,readiness:`Rising Energy`,daysUntil:`19 days`,accent:`#7c3aed`},ovulation:{day:`Day 14 of 28`,title:`Ovulation Peak`,readiness:`Optimal Strength PRs`,daysUntil:`14 days`,accent:`#0284c7`},luteal:{day:`Day 22 of 28`,title:`Luteal Phase`,readiness:`Metabolic Surge`,daysUntil:`6 days`,accent:`#ea580c`}};f.switchCyclePhase=e=>{let t=ne[e];t&&(document.querySelectorAll(`.phase-btn`).forEach(t=>{t.classList.toggle(`active`,t.id===`phase-btn-${e}`)}),document.querySelectorAll(`#cycle-ring-glow`).forEach(e=>{e.style.borderColor=t.accent,e.style.boxShadow=`0 0 36px ${t.accent}40, inset 0 0 24px ${t.accent}20`}),document.querySelectorAll(`#phase-day-text`).forEach(e=>{e.innerText=t.day}),document.querySelectorAll(`#phase-title-text`).forEach(e=>{e.innerText=t.title,e.style.color=t.accent}),document.querySelectorAll(`#phase-readiness-text`).forEach(e=>{e.innerText=t.readiness,e.style.color=t.accent}),document.querySelectorAll(`#cycle-countdown-days, .cycle-forecast-days`).forEach(e=>{e.innerText=t.daysUntil}))};var A={weight:74,activity:1.55,goal:`cut`};f.adjCalcWeight=e=>{A.weight=Math.max(45,Math.min(140,A.weight+e));let t=document.getElementById(`calc-val-weight`);t&&(t.innerText=A.weight),f.calculateTdeeResults()},f.setCalcActivity=(e,t)=>{A.activity=e,document.querySelectorAll(`.calc-act-chip`).forEach(e=>e.classList.remove(`active`));let n=document.getElementById(t);n&&n.classList.add(`active`),f.calculateTdeeResults()},f.setCalcGoal=(e,t)=>{A.goal=e,document.querySelectorAll(`.calc-goal-btn`).forEach(e=>e.classList.remove(`active`));let n=document.getElementById(t);n&&n.classList.add(`active`),f.calculateTdeeResults()},f.calculateTdeeResults=()=>{let{weight:e,activity:t,goal:n}=A,r=10*e+1112.5-140+5,i=Math.round(r*t),a=i,o=`Maintenance`;n===`cut`?(a=Math.max(1200,i-500),o=`Fat Loss (-500 kcal)`):n===`bulk`&&(a=i+300,o=`Muscle Surplus (+300 kcal)`);let s=Math.round(a*.3/4),c=Math.round(a*.4/4),l=Math.round(a*.3/9),u=document.querySelectorAll(`#calc-res-tdee`),d=document.querySelectorAll(`#calc-res-goal-sub`),f=document.querySelectorAll(`#calc-res-protein`),p=document.querySelectorAll(`#calc-res-carb`),m=document.querySelectorAll(`#calc-res-fat`);u.forEach(e=>e.innerText=a.toLocaleString()),d.forEach(e=>e.innerHTML=`kcal / day &bull; ${o}`),f.forEach(e=>e.innerText=`${s}g`),p.forEach(e=>e.innerText=`${c}g`),m.forEach(e=>e.innerText=`${l}g`)};var j=`1250 × 1.08`,M=`1350`;f.setCalcMode=e=>{document.querySelectorAll(`.calc-mode-btn`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`calc-mode-btn-${e}`);t&&t.classList.add(`active`);let n=document.getElementById(`calc-everyday-view`),r=document.getElementById(`calc-clinical-view`);n&&r&&(e===`everyday`?(n.style.display=`block`,r.style.display=`none`):(n.style.display=`none`,r.style.display=`block`))},f.calcKeyPress=e=>{if(e===`AC`)j=``,M=`0`;else if(e===`⌫`)j=j.slice(0,-1),j||(M=`0`);else if(e===`=`)try{let e=j.replace(/×/g,`*`).replace(/÷/g,`/`),t=Function(`'use strict'; return (${e})`)();M=Number.isFinite(t)?Number(t.toFixed(4)).toString():`Error`}catch{M=`Error`}else{j+=e;try{let e=j.replace(/×/g,`*`).replace(/÷/g,`/`),t=Function(`'use strict'; return (${e})`)();Number.isFinite(t)&&(M=Number(t.toFixed(4)).toString())}catch{}}let t=document.getElementById(`calc-screen-expr`),n=document.getElementById(`calc-screen-res`);t&&(t.textContent=j||`0`),n&&(n.textContent=M||`0`)},f.filterMatrix=e=>{document.querySelectorAll(`.matrix-filter-btn`).forEach(e=>e.classList.remove(`active`));let t=document.getElementById(`filter-btn-${e}`);t&&t.classList.add(`active`),document.querySelectorAll(`.matrix-card`).forEach(t=>{let n=t.getAttribute(`data-category`),r=t.getAttribute(`data-status`);e===`all`||n===e||r===e?t.style.display=`flex`:t.style.display=`none`})},f.switchHealthTab=e=>{[`cycle`,`calculator`,`nutrition`,`activity`].forEach(t=>{let n=document.getElementById(`health-tab-${t}`),r=document.getElementById(`health-panel-${t}`);n&&n.classList.toggle(`active`,t===e),r&&(r.style.display=t===e?`grid`:`none`,t===e&&r.classList.add(`fade-in-active`))}),e===`nutrition`&&f.updateNutritionUI&&f.updateNutritionUI(),e===`activity`&&f.updateWorkoutUI&&f.updateWorkoutUI()},f.switchGameTab=e=>{[`ludo-prince`,`pawdoku`].forEach(t=>{let n=document.getElementById(`game-tab-${t}`),r=document.getElementById(`game-panel-${t}`);n&&n.classList.toggle(`active`,t===e),r&&(r.style.display=t===e?`grid`:`none`,t===e&&r.classList.add(`fade-in-active`))})};var re={oats:{name:`Steel-Cut Oatmeal & Berries`,meta:`1 bowl (250g) • 08:15 AM`,icon:`🥣`,cal:380,p:14,c:62,f:7,meal:`bf`},eggs:{name:`Pasture-Raised Eggs & Sourdough`,meta:`2 eggs, 1 slice • 08:35 AM`,icon:`🥚`,cal:260,p:20,c:16,f:14,meal:`bf`},salmon:{name:`Grilled Salmon & Quinoa Bowl`,meta:`1 bowl (340g) • 01:15 PM`,icon:`🥗`,cal:540,p:42,c:45,f:18,meal:`lunch`}},N={oats:!0,eggs:!0,salmon:!1},ie={cal:2100,p:150,c:220,f:65};f.toggleNutrMeal=e=>{N[e]!==void 0&&(N[e]=!N[e],f.updateNutritionUI())},f.updateNutritionUI=()=>{let e=440,t=16,n=44,r=9,i=0,a=0;for(let[o,s]of Object.entries(N)){let c=re[o];c&&(s&&(e+=c.cal,t+=c.p,n+=c.c,r+=c.f,c.meal===`bf`&&(i+=c.cal),c.meal===`lunch`&&(a+=c.cal)),document.querySelectorAll(`.nutr-diary-row-${o}`).forEach(e=>{e.classList.toggle(`logged`,s);let t=e.querySelector(`.nutr-row-check`);t&&(t.textContent=s?`✓`:`+`)}))}document.querySelectorAll(`#nutr-cals-num`).forEach(t=>{t.textContent=e.toLocaleString()});let o=Math.max(0,ie.cal-e);document.querySelectorAll(`#nutr-remain-pill`).forEach(e=>{e.textContent=o>0?`${o} kcal left`:`Goal Met 🎯`});let s=Math.min(100,Math.round(e/ie.cal*100));document.querySelectorAll(`#nutr-progress-fill`).forEach(e=>{e.style.width=`${s}%`}),document.querySelectorAll(`#nutr-p-val`).forEach(e=>e.textContent=`${t}g`),document.querySelectorAll(`#nutr-c-val`).forEach(e=>e.textContent=`${n}g`),document.querySelectorAll(`#nutr-f-val`).forEach(e=>e.textContent=`${r}g`),document.querySelectorAll(`#nutr-bf-cals`).forEach(e=>e.textContent=`${i} kcal`),document.querySelectorAll(`#nutr-lunch-cals`).forEach(e=>e.textContent=`${a} kcal`)};var P=100,F=8,I={1:!0,2:!0,3:!1},L=90,R=null;f.adjWorkoutWeight=e=>{P=Math.max(20,Math.min(250,P+e)),f.updateWorkoutUI()},f.adjWorkoutReps=e=>{F=Math.max(1,Math.min(30,F+e)),f.updateWorkoutUI()},f.toggleWorkoutSet=e=>{I[e]!==void 0&&(I[e]=!I[e],e===3&&(I[3]?f.startSimpleRestTimer(90):f.stopSimpleRestTimer()),f.updateWorkoutUI())},f.toggleLogWorkoutSet=()=>{f.toggleWorkoutSet(3)},f.startSimpleRestTimer=e=>{R&&clearInterval(R),L=e,R=setInterval(()=>{L>0?(L--,f.updateTimerText()):clearInterval(R)},1e3),f.updateTimerText()},f.stopSimpleRestTimer=()=>{R&&clearInterval(R),L=90,f.updateTimerText()},f.updateTimerText=()=>{let e=Math.floor(L/60),t=L%60,n=`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`;document.querySelectorAll(`#act-timer-digits, .act-timer-live`).forEach(e=>{e.textContent=n})},f.updateWorkoutUI=()=>{document.querySelectorAll(`#act-weight-val`).forEach(e=>{e.textContent=P}),document.querySelectorAll(`#act-reps-val`).forEach(e=>{e.textContent=F});let e=Math.max(0,(P-20)/2);document.querySelectorAll(`#act-plate-val`).forEach(t=>{t.textContent=`${e} kg/side`});let t=Math.round(P*(1+F/30));document.querySelectorAll(`#act-onerm-val`).forEach(e=>{e.textContent=`${t} kg`}),[1,2,3].forEach(e=>{let t=!!I[e];document.querySelectorAll(`#act-set-${e}-row`).forEach(e=>{e.classList.toggle(`completed`,t)}),document.querySelectorAll(`#act-check-toggle-${e}`).forEach(e=>{e.classList.toggle(`checked`,t);let n=e.querySelector(`.act-check-mark`);n&&(n.textContent=t?`✓`:``)})});let n=[1,2,3].filter(e=>I[e]).length;document.querySelectorAll(`#act-rest-indicator`).forEach(e=>{e.classList.toggle(`active`,I[3])}),document.querySelectorAll(`#act-header-badge`).forEach(e=>{I[3]?(e.textContent=`Set 3 Done ✓`,e.classList.add(`completed`)):(e.textContent=`${n} of 4 Done`,e.classList.remove(`completed`))}),f.updateTimerText()};var z=()=>`
  <!-- Authentic EVLOME Nutrition Food Diary Card -->
  <div class="nutrition-app-card">
    <div class="nutr-diary-head">
      <div class="nutr-diary-title-wrap">
        <span class="nutr-diary-eyebrow">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          FOOD DIARY &bull; TODAY
        </span>
        <div class="nutr-cals-display"><strong id="nutr-cals-num">1,080</strong> <span class="nutr-cal-target">/ 2,100 kcal</span></div>
      </div>
      <span class="nutr-remain-badge" id="nutr-remain-pill">1,020 kcal left</span>
    </div>

    <div class="nutr-simple-bar-wrap">
      <div class="nutr-simple-bar-fill" id="nutr-progress-fill" style="width: 51%;"></div>
    </div>

    <div class="nutr-simple-macros">
      <div class="nutr-macro-pill">
        <span class="macro-dot protein"></span>
        <span class="macro-lbl">Protein</span>
        <strong id="nutr-p-val">50g</strong><span class="macro-target">/150g</span>
      </div>
      <div class="nutr-macro-pill">
        <span class="macro-dot carbs"></span>
        <span class="macro-lbl">Carbs</span>
        <strong id="nutr-c-val">122g</strong><span class="macro-target">/220g</span>
      </div>
      <div class="nutr-macro-pill">
        <span class="macro-dot fats"></span>
        <span class="macro-lbl">Fats</span>
        <strong id="nutr-f-val">30g</strong><span class="macro-target">/65g</span>
      </div>
    </div>

    <!-- Meals Diary List Items -->
    <div class="nutr-diary-list">
      <!-- Breakfast Group -->
      <div class="nutr-section-label">
        <div class="nutr-sec-name-wrap">
          <span class="nutr-meal-dot breakfast"></span>
          <span class="nutr-sec-title">Breakfast</span>
        </div>
        <span class="nutr-sec-cals" id="nutr-bf-cals">640 kcal</span>
      </div>

      <div class="nutr-diary-row nutr-diary-row-oats logged" onclick="window.toggleNutrMeal('oats')">
        <div class="nutr-row-icon">🥣</div>
        <div class="nutr-row-main">
          <span class="nutr-row-name">Steel-Cut Oatmeal &amp; Berries</span>
          <span class="nutr-row-meta">1 bowl (250g) &bull; 08:15 AM &bull; 14g P</span>
        </div>
        <div class="nutr-row-end">
          <span class="nutr-row-cals">380 kcal</span>
          <span class="nutr-row-check">✓</span>
        </div>
      </div>

      <div class="nutr-diary-row nutr-diary-row-eggs logged" onclick="window.toggleNutrMeal('eggs')">
        <div class="nutr-row-icon">🥚</div>
        <div class="nutr-row-main">
          <span class="nutr-row-name">Pasture-Raised Eggs &amp; Sourdough</span>
          <span class="nutr-row-meta">2 eggs, 1 slice &bull; 08:35 AM &bull; 20g P</span>
        </div>
        <div class="nutr-row-end">
          <span class="nutr-row-cals">260 kcal</span>
          <span class="nutr-row-check">✓</span>
        </div>
      </div>

      <!-- Lunch Group -->
      <div class="nutr-section-label">
        <div class="nutr-sec-name-wrap">
          <span class="nutr-meal-dot lunch"></span>
          <span class="nutr-sec-title">Lunch</span>
        </div>
        <span class="nutr-sec-cals" id="nutr-lunch-cals">0 kcal</span>
      </div>

      <div class="nutr-diary-row nutr-diary-row-salmon" onclick="window.toggleNutrMeal('salmon')">
        <div class="nutr-row-icon">🥗</div>
        <div class="nutr-row-main">
          <span class="nutr-row-name">Grilled Salmon &amp; Quinoa Bowl</span>
          <span class="nutr-row-meta">1 bowl (340g) &bull; 01:15 PM &bull; 42g P</span>
        </div>
        <div class="nutr-row-end">
          <span class="nutr-row-cals">540 kcal</span>
          <span class="nutr-row-check">+</span>
        </div>
      </div>
    </div>

    <!-- Diary Footer -->
    <div class="nutr-diary-foot">
      <span class="nutr-fasting-pill">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        16:8 Fasting Window Active
      </span>
      <span class="nutr-diary-tip">Tap meal to toggle</span>
    </div>
  </div>
`,B=()=>`
  <!-- Authentic EVLOME Activity Active Workout Exercise Card -->
  <div class="activity-workout-card">
    <div class="act-workout-head">
      <div class="act-workout-title-wrap">
        <span class="act-workout-eyebrow">ACTIVE WORKOUT &bull; CHEST &amp; TRICEPS</span>
        <h4 class="act-workout-ex">Barbell Bench Press</h4>
      </div>
      <span class="act-header-badge" id="act-header-badge">2 of 4 Done</span>
    </div>

    <!-- Active Exercise Set Table -->
    <div class="act-set-table">
      <div class="act-table-head">
        <span class="act-th-set">SET</span>
        <span class="act-th-prev">PREV</span>
        <span class="act-th-weight">KG</span>
        <span class="act-th-reps">REPS</span>
        <span class="act-th-check">✓</span>
      </div>

      <!-- Set 1 -->
      <div class="act-set-row completed" id="act-set-1-row">
        <span class="act-cell-set">1</span>
        <span class="act-cell-prev">80 kg &times; 10</span>
        <span class="act-cell-weight">80</span>
        <span class="act-cell-reps">10</span>
        <div class="act-cell-check">
          <button type="button" class="act-check-toggle checked" id="act-check-toggle-1" onclick="window.toggleWorkoutSet(1)" title="Toggle Set 1">
            <span class="act-check-mark">✓</span>
          </button>
        </div>
      </div>

      <!-- Set 2 -->
      <div class="act-set-row completed" id="act-set-2-row">
        <span class="act-cell-set">2</span>
        <span class="act-cell-prev">90 kg &times; 8</span>
        <span class="act-cell-weight">90</span>
        <span class="act-cell-reps">8</span>
        <div class="act-cell-check">
          <button type="button" class="act-check-toggle checked" id="act-check-toggle-2" onclick="window.toggleWorkoutSet(2)" title="Toggle Set 2">
            <span class="act-check-mark">✓</span>
          </button>
        </div>
      </div>

      <!-- Set 3: Active Interactive Stepper Row -->
      <div class="act-set-row active" id="act-set-3-row">
        <span class="act-cell-set act-active-num">3</span>
        <span class="act-cell-prev">100 kg &times; 6</span>
        <div class="act-cell-weight">
          <div class="act-inline-stepper">
            <button type="button" class="act-step-btn" onclick="window.adjWorkoutWeight(-5)" title="-5 kg">&minus;</button>
            <span id="act-weight-val" class="act-stepper-num">100</span>
            <button type="button" class="act-step-btn" onclick="window.adjWorkoutWeight(5)" title="+5 kg">&#43;</button>
          </div>
        </div>
        <div class="act-cell-reps">
          <div class="act-inline-stepper">
            <button type="button" class="act-step-btn" onclick="window.adjWorkoutReps(-1)" title="-1 rep">&minus;</button>
            <span id="act-reps-val" class="act-stepper-num">8</span>
            <button type="button" class="act-step-btn" onclick="window.adjWorkoutReps(1)" title="+1 rep">&#43;</button>
          </div>
        </div>
        <div class="act-cell-check">
          <button type="button" class="act-check-toggle" id="act-check-toggle-3" onclick="window.toggleWorkoutSet(3)" title="Log Set 3">
            <span class="act-check-mark"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Table Action Bar -->
    <div class="act-table-actions">
      <div class="act-rest-indicator" id="act-rest-indicator">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span>Rest: <strong id="act-timer-digits">01:30</strong></span>
      </div>
      <span class="act-rest-hint">Tap ✓ to complete set</span>
    </div>

    <!-- Telemetry Footer -->
    <div class="act-telemetry-bar">
      <span>Plate: <strong id="act-plate-val">40 kg/side</strong> (20 kg Bar)</span>
      <span class="act-telemetry-sep">&bull;</span>
      <span>Est. 1RM: <strong id="act-onerm-val">127 kg</strong></span>
    </div>
  </div>
`,V=()=>{let n=t.find(e=>e.id===`ludo-prince`)||t[0],r=t.find(e=>e.id===`pawdoku`)||t[1],i=e.find(e=>e.id===`cycle`)||e[1],a=e.find(e=>e.id===`calculator`)||e[0],o=e.find(e=>e.id===`nutrition`)||e[3],s=e.find(e=>e.id===`activity`)||e[2];return`
  <!-- STAGE 1: Cinematic Studio Hero Viewport -->
  <section class="cinematic-stage hero-viewport">
    <div class="hero-glow-aura" aria-hidden="true">
      <div class="hero-orb hero-orb-indigo"></div>
      <div class="hero-orb hero-orb-cyan"></div>
      <div class="hero-orb hero-orb-emerald"></div>
      <div class="hero-orb hero-orb-rose"></div>
    </div>

    <div class="stage-badge">
      <span>EVLOME STUDIO</span>
    </div>

    <h1 class="hero-headline">
      Calculated Precision.<br/>Mindful Play.
    </h1>

    <p class="hero-description">
      Precision health utilities and tactile board games.<br class="desktop-only"/>Encrypted on device. Zero tracking.
    </p>

    <div class="hero-actions-row">
      <button type="button" class="btn-primary-glow" onclick="window.scrollToSection('suite-stage')">
        <span>The Health Suite</span>
        <svg class="btn-arrow-icon" width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="8" y1="2.5" x2="8" y2="13.5"></line>
          <polyline points="3.5 9 8 13.5 12.5 9"></polyline>
        </svg>
      </button>
      <button type="button" class="btn-glass" onclick="window.scrollToSection('games-stage')">
        <span>EVLOME Games</span>
        <svg class="btn-arrow-icon" width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="8" y1="2.5" x2="8" y2="13.5"></line>
          <polyline points="3.5 9 8 13.5 12.5 9"></polyline>
        </svg>
      </button>
    </div>

    <!-- Quiet Disciplines Strip -->
    <div class="hero-matrix-bar" role="region" aria-label="Ecosystem Standards">
      <span class="hero-matrix-item"><span><strong>Unified</strong> Sovereign Suite</span></span>
      <span class="hero-matrix-divider" aria-hidden="true">&bull;</span>
      <span class="hero-matrix-item"><span><strong>Offline</strong> First</span></span>
      <span class="hero-matrix-divider" aria-hidden="true">&bull;</span>
      <span class="hero-matrix-item"><span><strong>100%</strong> On-Device Sovereignty</span></span>
      <span class="hero-matrix-divider" aria-hidden="true">&bull;</span>
      <span class="hero-matrix-item"><span><strong>Zero</strong> Tracking Infrastructure</span></span>
    </div>
  </section>

  <!-- STAGE 2: The Health Suite — Sovereign Vitality OS (Discipline 1) -->
  <section id="suite-stage" class="discipline-stage health-suite-stage">
    <div class="discipline-header-center">
      <span class="stage-badge">
        <span class="badge-dot" style="background: #10b981; box-shadow: 0 0 8px rgba(16, 185, 129, 0.6);"></span>
        THE HEALTH SUITE
      </span>
      <h2 class="stage-title">Health Telemetry. On Device.</h2>
      <p class="stage-subtitle-center">
        Four interconnected disciplines for metabolic energy, strength, hormonal rhythm, and clinical precision.
      </p>

      <!-- 4-App Selector Tabs (With Official App Logos) -->
      <div class="discipline-tabs-nav" role="tablist" aria-label="Health Suite disciplines">
        <button type="button" class="discipline-tab-btn active" id="health-tab-cycle" onclick="window.switchHealthTab('cycle')">
          <img src="${i.icon}" alt="Cycle" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
          <span class="tab-btn-text">
            <span class="tab-btn-title">Cycle</span>
            <span class="tab-btn-sub">Hormonal Rhythm</span>
          </span>
          <span class="tab-status-pill status-beta">BETA</span>
        </button>

        <button type="button" class="discipline-tab-btn" id="health-tab-calculator" onclick="window.switchHealthTab('calculator')">
          <img src="${a.icon}" alt="Calculator+" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
          <span class="tab-btn-text">
            <span class="tab-btn-title">Calculator+</span>
            <span class="tab-btn-sub">Clinical Biometrics</span>
          </span>
          <span class="tab-status-pill status-beta">BETA</span>
        </button>

        <button type="button" class="discipline-tab-btn" id="health-tab-nutrition" onclick="window.switchHealthTab('nutrition')">
          <img src="${o.icon}" alt="Nutrition" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
          <span class="tab-btn-text">
            <span class="tab-btn-title">Nutrition</span>
            <span class="tab-btn-sub">Fasting &amp; Fuel</span>
          </span>
          <span class="tab-status-pill status-development">DEV</span>
        </button>

        <button type="button" class="discipline-tab-btn" id="health-tab-activity" onclick="window.switchHealthTab('activity')">
          <img src="${s.icon}" alt="Activity" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
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
          </div>

          <div class="stage-app-title-row">
            <img src="${i.icon}" alt="Cycle Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(225, 29, 72, 0.28);" />
            <h3 class="stage-title">${i.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #e11d48;">Hormonal rhythm. On-device privacy.</div>
          <p class="stage-desc">
            Four-phase hormonal tracking with Roetzer sympto-thermal BBT shift and private ovulation forecasting.
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
            <a href="/beta?app=cycle" class="btn-primary-glow" onclick="if(event){ event.preventDefault(); navigate('/beta?app=cycle'); }">
              Join Beta &rarr;
            </a>
            <a href="/cycle" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/cycle'); }">
              Overview
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
          </div>

          <div class="stage-app-title-row">
            <img src="${a.icon}" alt="${a.title} Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(124, 58, 237, 0.28);" />
            <h3 class="stage-title">${a.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #7c3aed;">Clinical biometrics and mathematical rigor.</div>
          <p class="stage-desc">
            Mifflin-St Jeor energy expenditure, body composition, macro splits, and 9-dimensional conversions. Computed entirely offline.
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
            <a href="/beta?app=${a.id}" class="btn-primary-glow" onclick="if(event){ event.preventDefault(); navigate('/beta?app=${a.id}'); }">
              Join Beta &rarr;
            </a>
            <a href="/${a.id}" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/${a.id}'); }">
              Overview
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
          </div>

          <div class="stage-app-title-row">
            <img src="${o.icon}" alt="${o.title} Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(5, 150, 105, 0.28);" />
            <h3 class="stage-title">${o.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #059669;">Metabolic balance and whole-food telemetry.</div>
          <p class="stage-desc">
            Whole-food logging, fasting timers, and macro targets backed by an on-device database with zero commercial tracking.
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
            <a href="/beta?app=nutrition" class="btn-primary-glow" onclick="if(event){ event.preventDefault(); navigate('/beta?app=nutrition'); }">
              Join Beta &rarr;
            </a>
            <a href="/nutrition" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/nutrition'); }">
              Overview
            </a>
          </div>
        </div>

        ${z()}
      </div>

      <!-- Panel 4: Activity -->
      <div id="health-panel-activity" class="stage-split-grid discipline-panel" style="display: none;">
        <div class="stage-info-col">
          <div class="stage-status-badge-row">
            <span class="status-pill status-pill-development">
              <span class="pulse-dot amber"></span>
              DEV
            </span>
          </div>

          <div class="stage-app-title-row">
            <img src="${s.icon}" alt="${s.title} Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(217, 119, 6, 0.28);" />
            <h3 class="stage-title">${s.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #d97706;">Kinetic performance and workout logging.</div>
          <p class="stage-desc">
            Workout and strength tracking with barbell plate math, rest countdowns, and progressive overload metrics.
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
            <a href="/beta?app=activity" class="btn-primary-glow" onclick="if(event){ event.preventDefault(); navigate('/beta?app=activity'); }">
              Join Beta &rarr;
            </a>
            <a href="/activity" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/activity'); }">
              Overview
            </a>
          </div>
        </div>

        ${B()}
      </div>
    </div>
  </section>

  <!-- STAGE 3: EVLOME Games — Tactile Joy & Mindful Play (Discipline 2) -->
  <section id="games-stage" class="cinematic-stage discipline-stage games-discipline-stage">
    <div class="discipline-header-center">
      <span class="stage-badge">
        <span class="badge-dot" style="background: #0284c7; box-shadow: 0 0 8px rgba(2, 132, 199, 0.6);"></span>
        EVLOME GAMES
      </span>
      <h2 class="stage-title">Pure Play. Zero Compromise.</h2>
      <p class="stage-subtitle-center">
        Tactile physics, physical dice inertia, and mindful puzzles. Zero ads or artificial countdowns.
      </p>

      <!-- 2-Game Selector Tabs (With Official App Logos) -->
      <div class="discipline-tabs-nav games-tabs-nav" role="tablist" aria-label="EVLOME Games">
        <button type="button" class="discipline-tab-btn active" id="game-tab-ludo-prince" onclick="window.switchGameTab('ludo-prince')">
          <img src="${n.icon}" alt="Ludo Prince" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
          <span class="tab-btn-text">
            <span class="tab-btn-title">Ludo Prince</span>
            <span class="tab-btn-sub">Tactile Multiplayer Board</span>
          </span>
          <span class="tab-status-pill status-production">LIVE</span>
        </button>

        <button type="button" class="discipline-tab-btn" id="game-tab-pawdoku" onclick="window.switchGameTab('pawdoku')">
          <img src="${r.icon}" alt="Pawdoku" class="tab-btn-icon" width="32" height="32" loading="lazy" decoding="async" />
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
          </div>

          <div class="stage-app-title-row">
            <img src="${n.icon}" alt="${n.title} Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(2, 132, 199, 0.28);" />
            <h3 class="stage-title">${n.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #0284c7;">Classic board play. Pure tactile physics.</div>
          <p class="stage-desc">
            The classic race to home with physical dice inertia. Real-time multiplayer, local pass-and-play, and offline bot intelligence.
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
            <a href="${n.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-store btn-app-store" title="Download Ludo Prince on the Apple App Store">
              <svg class="store-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.92-1 .04-2.14.67-2.81 1.45-.59.67-1.1 1.76-.96 2.82 1.11.09 2.21-.58 2.83-1.35z"/>
              </svg>
              <div class="store-badge-text">
                <span class="store-badge-sub">Download on the</span>
                <span class="store-badge-main">App Store</span>
              </div>
            </a>
            <a href="${n.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-store btn-play-store" title="Get Ludo Prince on Google Play">
              <svg class="store-icon" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
              </svg>
              <div class="store-badge-text">
                <span class="store-badge-sub">GET IT ON</span>
                <span class="store-badge-main">Google Play</span>
              </div>
            </a>
            <a href="/${n.id}" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/${n.id}'); }">
              Overview
            </a>
          </div>
        </div>

        <!-- 3D Inertia Dice Interactive Viewport -->
        <div class="interactive-arena-card ludo-dice-only-card">
          <div class="arena-room-pill">
            <span class="pulse-green"></span>
            ROYAL DICE ARENA
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
            <span style="color: var(--text-muted);">Tap dice to roll &bull; Physical inertia</span>
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
          </div>

          <div class="stage-app-title-row">
            <img src="${r.icon}" alt="${r.title} Logo" class="stage-app-icon" width="58" height="58" loading="lazy" decoding="async" style="box-shadow: 0 10px 28px rgba(234, 88, 12, 0.28);" />
            <h3 class="stage-title">${r.title}</h3>
          </div>

          <div class="stage-subtitle" style="color: #ea580c;">Star Battle logic. Zero rush.</div>
          <p class="stage-desc">
            One companion per row, column, and color region. Pure deductive strategy in a tranquil pet sanctuary.
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
            <a href="/beta?app=${r.id}" class="btn-primary-glow" onclick="if(event){ event.preventDefault(); navigate('/beta?app=${r.id}'); }">
              Join Beta &rarr;
            </a>
            <a href="/${r.id}" class="btn-glass" onclick="if(event){ event.preventDefault(); navigate('/${r.id}'); }">
              Overview
            </a>
          </div>
        </div>

        <!-- 4x4 Tactile Clay Star Battle Board (Contained Component Card) -->
        <div class="interactive-sanctuary-card">
          <!-- Sanctuary Gesture Controls Bar -->
          <div class="pawdoku-controls-strip">
            <div class="pawdoku-gesture-pill" title="Tap to cross • Double-tap to place pet • Drag to paint crosses">
              <span class="gesture-step">Tap ${x}</span>
              <span class="gesture-divider">•</span>
              <span class="gesture-step">Double-tap ${b}</span>
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
              ${[0,1,2,3].map(e=>[0,1,2,3].map(t=>{let n=g.regionMap[e][t],r=e===0&&t===1;return`
                  <div class="paw-cell" data-paw-cell="${e}-${t}" data-region="${n}" data-val="${r?`pet`:``}" ondblclick="event.preventDefault()">
                    ${r?`<div class="pet-drop-marker">${y}</div>`:``}
                  </div>
                `}).join(``)).join(``)}
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
          <span class="badge-dot" style="background: linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #f59e0b 100%); box-shadow: 0 0 8px rgba(236, 72, 153, 0.6);"></span>
          UNIVERSAL MEMBERSHIP
        </span>
        <h2 class="stage-title">EVLOME ONE</h2>
        <p class="stage-subtitle-center">
          One membership for the entire suite. Subscribe to Health Pass, Game Pass, or unlock everything with EVLOME ONE.
        </p>
      </div>

      <!-- 3 Ecosystem Pillars Bento -->
      <div class="one-grid">
        <div class="one-card">
          <div class="one-card-icon-group">
            ${e.map(e=>`<img src="${e.icon}" alt="${e.title} Logo" class="one-mini-logo" width="36" height="36" loading="lazy" decoding="async" />`).join(``)}
          </div>
          <span class="one-card-tag" style="color: #059669;">EVLOME HEALTH PASS</span>
          <h3 class="one-card-title">Precision Health Suite</h3>
          <p class="one-card-desc">
            Unified access across Nutrition, Activity, Cycle, and Calculator+ with clinical biometrics and private telemetry.
          </p>
          <ul class="one-card-perks">
            <li>✓ 50+ clinical &amp; metabolic models (Calculator+)</li>
            <li>✓ Roetzer sympto-thermal cycle tracking (Cycle)</li>
            <li>✓ Whole-food logging &amp; metabolic targets (Nutrition)</li>
            <li>✓ 1RM strength progression &amp; barbell math (Activity)</li>
          </ul>
        </div>

        <div class="one-card" style="border-color: rgba(99, 102, 241, 0.25); background: linear-gradient(180deg, rgba(99, 102, 241, 0.03) 0%, rgba(255, 255, 255, 0.6) 100%);">
          <div class="one-card-icon-group">
            ${t.map(e=>`<img src="${e.icon}" alt="${e.title} Logo" class="one-mini-logo" width="36" height="36" loading="lazy" decoding="async" />`).join(``)}
          </div>
          <span class="one-card-tag" style="color: #6366f1;">EVLOME GAME PASS</span>
          <h3 class="one-card-title">Ad-Free Games Pass</h3>
          <p class="one-card-desc">
            Pure, uninterrupted play across all current and future EVLOME games with zero advertisements.
          </p>
          <ul class="one-card-perks">
            <li>✓ 100% ad-free experience across all games</li>
            <li>✓ Ludo Prince with all royal themes &amp; local play</li>
            <li>✓ Pawdoku with all puzzle packs &amp; relaxing audio</li>
            <li>✓ All future game releases automatically included</li>
          </ul>
        </div>

        <div class="one-card" style="border-color: rgba(236, 72, 153, 0.28); background: linear-gradient(180deg, rgba(99, 102, 241, 0.04) 0%, rgba(236, 72, 153, 0.03) 50%, rgba(245, 158, 11, 0.04) 100%);">
          <div class="one-card-icon-wrap" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(236, 72, 153, 0.12) 50%, rgba(245, 158, 11, 0.12) 100%); color: #ec4899;">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
          </div>
          <span class="one-card-tag" style="background: linear-gradient(135deg, #6366f1 0%, #ec4899 50%, #f59e0b 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800;">EVLOME ONE</span>
          <h3 class="one-card-title">Universal All-Access Pass</h3>
          <p class="one-card-desc">
            Everything in the Health Suite, all EVLOME Games, end-to-end encrypted cloud vault, and every future application.
          </p>
          <ul class="one-card-perks">
            <li>✓ Complete Health Suite (all 4 apps &amp; biometrics)</li>
            <li>✓ All EVLOME Games with zero ads</li>
            <li>✓ Zero-custody encrypted multi-device cloud vault</li>
            <li>✓ All future apps automatically included</li>
          </ul>
        </div>
      </div>

      <!-- Feature Highlight Strip (Apple Bento Banner - No Prices) -->
      <div class="one-membership-strip">
        <div class="one-strip-col">
          <div class="one-strip-eyebrow">TRANSPARENT PASS ARCHITECTURE</div>
          <h3 class="one-strip-title">Dedicated Passes or Complete All-Access.</h3>
          <p class="one-strip-desc">
            Choose the pass tailored to your routine — or unlock the complete EVLOME ecosystem of health apps, tactile games, and encrypted cloud continuity with EVLOME ONE.
          </p>
        </div>
        <div class="one-strip-pills">
          <div class="one-feature-badge">
            <svg class="badge-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>7-Day Free Trial</span>
          </div>
          <div class="one-feature-badge">
            <svg class="badge-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Monthly &amp; Annual Options</span>
          </div>
          <div class="one-feature-badge">
            <svg class="badge-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Cancel Anytime</span>
          </div>
          <div class="one-feature-badge" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.25);">
            <svg class="badge-check-icon" style="color: #059669;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            <span style="color: #065f46; font-weight: 700;">Cross-Platform Cloud Sync</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STAGE 5: Beta Invitation Terminal -->
  <section class="cinematic-stage beta-invite-stage">
    <span class="stage-badge">EARLY ACCESS PROGRAM</span>
    <h2 class="stage-title" style="max-width: 650px; margin: 0.5rem auto 1rem;">
      Shape the Future of EVLOME.
    </h2>
    <p style="color: var(--text-secondary); max-width: 460px; font-size: 1.05rem; line-height: 1.6; margin: 0 auto 2rem;">
      Preview slots are open on TestFlight and Google Play for upcoming health and game builds.
    </p>
    <a href="/beta" class="btn-primary-glow" style="font-size: 14.5px; padding: 0.9rem 2.25rem;">
      Apply for Beta Testing &rarr;
    </a>
  </section>
  `},ae=e=>{let t=e.type===`game`,n=t?`games-stage`:`suite-stage`,r=t?`EVLOME Games`:`The Health Suite`;return`
  <div class="detail-view">
    <a href="/#${n}" class="detail-nav-back" onclick="window.handleBackToCategory(event, '${n}')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      <span>Return to ${r}</span>
    </a>

    <!-- Detail Hero Box -->
    <div class="detail-hero-box">
      <div class="detail-icon-large" style="box-shadow: 0 12px 32px rgba(0,0,0,0.08), 0 0 30px ${e.accentColor}30;">
        <img src="${e.icon}" alt="${e.title} Icon" width="72" height="72" decoding="async">
      </div>

      <div class="stage-badge" style="margin-bottom: 1.25rem;">
        <span class="badge-dot" style="background: ${e.status===`production`?`#10b981`:`#8b5cf6`}; box-shadow: 0 0 8px ${e.status===`production`?`rgba(16, 185, 129, 0.6)`:`rgba(139, 92, 246, 0.6)`};"></span>
        <span>${e.eyebrow||e.category}</span>
        <span style="opacity: 0.35;">&bull;</span>
        <span style="color: ${e.status===`production`?`#059669`:`#6d28d9`}; font-weight: 700;">${e.status===`production`?`Live in Production`:`Beta`}</span>
      </div>

      <h1 class="detail-title">${e.title}</h1>
      <div class="detail-tagline">${e.heroTagline||e.tagline}</div>
      <p class="detail-desc">${e.desc}</p>

      <!-- Direct Production Store Downloads (Above Stats Grid) -->
      ${e.status===`production`&&(e.appStoreUrl||e.playStoreUrl)?`
        <div class="store-badge-strip">
          ${e.appStoreUrl?`
            <a href="${e.appStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-store btn-app-store" title="Download ${e.title} on the Apple App Store">
              <svg class="store-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.92-1 .04-2.14.67-2.81 1.45-.59.67-1.1 1.76-.96 2.82 1.11.09 2.21-.58 2.83-1.35z"/>
              </svg>
              <div class="store-badge-text">
                <span class="store-badge-sub">Download on the</span>
                <span class="store-badge-main">App Store</span>
              </div>
            </a>
          `:``}
          ${e.playStoreUrl?`
            <a href="${e.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="btn-store btn-play-store" title="Get ${e.title} on Google Play">
              <svg class="store-icon" viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96 2.694-1.586Zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055l7.294-4.295ZM1 13.396V2.603L6.846 8 1 13.396ZM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27Z"/>
              </svg>
              <div class="store-badge-text">
                <span class="store-badge-sub">GET IT ON</span>
                <span class="store-badge-main">Google Play</span>
              </div>
            </a>
          `:``}
        </div>
      `:``}

      <!-- Stat Counters Grid -->
      ${e.stats&&e.stats.length?`
        <div class="detail-stats-grid">
          ${e.stats.map(t=>`
            <div class="stat-item">
              <span class="stat-val" style="color: ${e.accentColor};">${t.value}</span>
              <span class="stat-lbl">${t.label}</span>
            </div>
          `).join(``)}
        </div>
      `:``}

      <!-- Action & Navigation Buttons (Row 2) -->
      <div class="detail-actions-row">
        <a href="/beta?app=${e.id}" class="btn-primary-glow" style="${e.status===`production`?``:`box-shadow: 0 4px 20px ${e.accentColor}35;`}" onclick="if(event){ event.preventDefault(); navigate('/beta?app=${e.id}'); }">
          Join Beta &rarr;
        </a>
        <a href="/#${n}" class="btn-glass" onclick="window.handleBackToCategory(event, '${n}')">
          Return to ${r}
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

      ${e.id===`ludo-prince`?`
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
      `:``}

      ${e.id===`pawdoku`?`
        <div class="interactive-sanctuary-card">
          <!-- Sanctuary Controls Bar -->
          <div class="pawdoku-controls-strip">
            <div class="pawdoku-gesture-pill">
              <span class="gesture-step">Tap ${x}</span>
              <span class="gesture-divider">•</span>
              <span class="gesture-step">Double-tap ${b}</span>
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
              ${[0,1,2,3].map(e=>[0,1,2,3].map(t=>{let n=g.regionMap[e][t],r=e===0&&t===1;return`
                  <div class="paw-cell" data-paw-cell="${e}-${t}" data-region="${n}" data-val="${r?`pet`:``}" ondblclick="event.preventDefault()">
                    ${r?`<div class="pet-drop-marker">${y}</div>`:``}
                  </div>
                `}).join(``)).join(``)}
            </div>
          </div>

          <div class="pawdoku-feedback-bar" id="pawdoku-feedback-text">
            <span><strong>1 of 4</strong> companions placed</span>
          </div>
        </div>
      `:``}

      ${e.id===`cycle`?`
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
      `:``}

      ${e.id===`calculator`?`
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
      `:``}

      ${e.id===`nutrition`?`
        <div style="display: flex; justify-content: center; width: 100%;">
          ${z()}
        </div>
      `:``}

      ${e.id===`activity`?`
        <div style="display: flex; justify-content: center; width: 100%;">
          ${B()}
        </div>
      `:``}
    </div>

    <!-- Highlights Grid -->
    <div style="margin-top: 4rem;">
      <h2 class="detail-section-title" style="margin-bottom: 1.75rem;">
        ${t?`Gameplay Dynamics & Mechanics`:`Clinical & Technical Architecture`}
      </h2>

      <div class="detail-highlights-grid">
        ${e.highlights.map(e=>`
          <div class="highlight-card">
            <h3 class="highlight-card-title">${e.title}</h3>
            <p class="highlight-card-desc">${e.desc}</p>
          </div>
        `).join(``)}
      </div>

      ${e.privacyLink||e.termsLink?`
        <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
          ${e.privacyLink?`
            <a href="${e.privacyLink}" class="card-explore-link" style="color: ${e.accentColor};" onclick="if(event) { event.preventDefault(); navigate('${e.privacyLink}'); }">
              ${e.title} Privacy Policy &rarr;
            </a>
          `:``}
          ${e.termsLink?`
            <a href="${e.termsLink}" class="card-explore-link" style="color: ${e.accentColor};" onclick="if(event) { event.preventDefault(); navigate('${e.termsLink}'); }">
              ${e.title} Terms of Service &rarr;
            </a>
          `:``}
        </div>
      `:``}
    </div>
  </div>
`},oe=(e=null)=>{let t=`/`,n=`Home`;return e&&(t=`/${e.id}`,n=e.title),`
  <div class="beta-page-container">
    <nav class="detail-nav" aria-label="Navigation">
      <a href="${t}" class="detail-nav-back" onclick="window.handleHierarchicalBack(event, '${t}')" aria-label="Return to ${n}">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Return to ${n}</span>
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

      ${e&&e.id===`ludo-prince`?`
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
      `:``}

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
`},H=(e=null,t=``,r=!1)=>{let i=`/`,a=`Home`;if(e)t===`/privacy`||t===`/terms`?(i=t,a=t===`/terms`?`Terms of Service`:`Ecosystem Privacy`):(i=`/${e.id}`,a=e.title);else if(t&&t!==`/`&&t!==(r?`/terms`:`/privacy`)){let e=t.replace(/^\//,``).split(`/`)[0].split(`?`)[0],r=n.find(t=>t.id===e);r?(i=t,a=r.title):t===`/beta`?(i=`/beta`,a=`Beta Access`):(i=t,a=`Previous Page`)}return`
    <nav class="detail-nav" aria-label="Navigation">
      <a href="${i}" class="detail-nav-back" onclick="window.handleHierarchicalBack(event, \"${i}\")" aria-label="Return to ${a}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Return to ${a}</span>
      </a>
    </nav>
  `},se=(e=``)=>`
    <div class="privacy-wrap">
      ${H(n.find(e=>e.id===`calculator`),e,!1)}
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
  `,ce=(e=``)=>`
    <div class="privacy-wrap">
      ${H(n.find(e=>e.id===`calculator`),e,!0)}
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
  `,le=(e=``)=>`
    <div class="privacy-wrap">
      ${H(n.find(e=>e.id===`cycle`),e,!1)}
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
  `,ue=(e=``)=>`
    <div class="privacy-wrap">
      ${H(n.find(e=>e.id===`cycle`),e,!0)}
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
  `,de=(e=``)=>`
    <div class="privacy-wrap">
      ${H(n.find(e=>e.id===`ludo-prince`),e,!1)}
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
  `,fe=(e=``)=>`
    <div class="privacy-wrap">
      ${H(n.find(e=>e.id===`ludo-prince`),e,!0)}
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
  `,pe=(e=``)=>`
    <div class="privacy-wrap">
      ${H(n.find(e=>e.id===`pawdoku`),e,!1)}
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
  `,me=(e=``)=>`
    <div class="privacy-wrap">
      ${H(n.find(e=>e.id===`pawdoku`),e,!0)}
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
  `,he=(e=``)=>`
    <div class="privacy-wrap">
      ${H(null,e,!1)}
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
            ${n.filter(e=>e.privacyLink).map(e=>`
              <a href="${e.privacyLink}" class="privacy-app-pill" onclick="if(event) { event.preventDefault(); navigate('${e.privacyLink}'); }">
                <span>${e.title} Privacy</span>
                <span class="privacy-pill-arrow" aria-hidden="true">&rarr;</span>
              </a>
            `).join(``)}
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
  `,ge=(e=``)=>`
    <div class="privacy-wrap">
      ${H(null,e,!0)}
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
            ${n.filter(e=>e.termsLink).map(e=>`
              <a href="${e.termsLink}" class="privacy-app-pill" onclick="if(event) { event.preventDefault(); navigate('${e.termsLink}'); }">
                <span>${e.title} Terms</span>
                <span class="privacy-pill-arrow" aria-hidden="true">&rarr;</span>
              </a>
            `).join(``)}
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
  `,_e=(e=null,t=``)=>{if(e){if(e.id===`calculator`)return se(t);if(e.id===`cycle`)return le(t);if(e.id===`ludo-prince`)return de(t);if(e.id===`pawdoku`)return pe(t)}return he(t)},ve=(e=null,t=``)=>{if(e){if(e.id===`calculator`)return ce(t);if(e.id===`cycle`)return ue(t);if(e.id===`ludo-prince`)return fe(t);if(e.id===`pawdoku`)return me(t)}return ge(t)},U={firstName:`entry.1026423473`,lastName:`entry.2072277110`,devicePlatform:`entry.261106749`,email:`entry.1247363008`,testingPreference:`entry.923244053`,specificApps:`entry.610551536`,testingFrequency:`entry.454575922`,feedback:`entry.1265301105`},ye=[`iOS`,`Android`],be=[`The Entire EVLOME Suite (All Apps)`,`Specific Apps Only`],W=[`Calculator+`,`Cycle`,`Nutrition`,`Activity`,`Ludo Prince`,`Pawdoku`],xe=[`Daily`,`A few times a week`,`Once a week`,`Occasionally`],G={calculator:`Calculator+`,cycle:`Cycle`,nutrition:`Nutrition`,activity:`Activity`,"ludo-prince":`Ludo Prince`,pawdoku:`Pawdoku`};Object.fromEntries(Object.entries(G).map(([e,t])=>[t,e]));var Se=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;function Ce(e={}){let t={},n=(e.firstName||``).trim();n||(t.firstName=`Please enter your first name`);let r=(e.lastName||``).trim();r||(t.lastName=`Please enter your last name`);let i=(e.email||``).trim();i?Se.test(i)||(t.email=`Please enter a valid email address`):t.email=`Please enter your email address`;let a=(Array.isArray(e.platforms)?e.platforms:[]).filter(e=>ye.includes(e));a.length===0&&(t.platforms=`Please select at least one device platform (iOS or Android)`);let o=(e.preference||``).trim();!o||!be.includes(o)?t.preference=`Please select your testing preference`:o===`Specific Apps Only`&&(Array.isArray(e.selectedApps)?e.selectedApps:[]).filter(e=>W.includes(e)).length===0&&(t.selectedApps=`Please select at least one app or game to test`);let s=(e.frequency||``).trim();(!s||!xe.includes(s))&&(t.frequency=`Please select your testing availability`);let c=Object.keys(t).length===0,l=null;return c&&(l=new URLSearchParams,l.append(U.firstName,n),l.append(U.lastName,r),l.append(U.email,i),a.forEach(e=>{l.append(U.devicePlatform,e)}),l.append(U.testingPreference,o),o===`The Entire EVLOME Suite (All Apps)`?W.forEach(e=>{l.append(U.specificApps,e)}):(Array.isArray(e.selectedApps)?e.selectedApps:[]).filter(e=>W.includes(e)).forEach(e=>{l.append(U.specificApps,e)}),l.append(U.testingFrequency,s),e.feedback&&e.feedback.trim()&&l.append(U.feedback,e.feedback.trim())),{isValid:c,errors:t,payload:l}}document.querySelector(`#app`).innerHTML=`
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
`,window.handlePlatformToggle=function(e){let t=e.closest(`.platform-tile`);t&&(e.checked?t.classList.add(`active`):t.classList.remove(`active`));let n=e.closest(`.form-group`);if(n){let e=n.querySelector(`.error-msg`);e&&e.remove()}},window.handlePreferenceToggle=function(e){let t=document.getElementById(`tile-pref-all`),n=document.getElementById(`tile-pref-specific`),r=document.getElementById(`specific-apps-list`);e===`all`?(t&&t.classList.add(`active`),n&&n.classList.remove(`active`),r&&(r.style.display=`none`),document.querySelectorAll(`.specific-app-checkbox`).forEach(e=>{e.checked=!1;let t=e.closest(`.app-select-card`);t&&t.classList.remove(`active`)})):(t&&t.classList.remove(`active`),n&&n.classList.add(`active`),r&&(r.style.display=`block`));let i=document.querySelector(`.preference-tiles-group`)?.closest(`.form-group`);if(i){let e=i.querySelector(`.error-msg`);e&&e.remove()}},window.handleAppCardToggle=function(e){let t=e.closest(`.app-select-card`);t&&(e.checked?t.classList.add(`active`):t.classList.remove(`active`));let n=e.closest(`.specific-apps-container`);if(n){let e=n.querySelector(`.error-msg`);e&&e.remove()}},window.handleBetaSubmit=function(e){e.preventDefault();let t=e.target,n=null;t.querySelectorAll(`.error-msg`).forEach(e=>e.remove()),t.querySelectorAll(`.has-error`).forEach(e=>e.classList.remove(`has-error`));let r=(e,t)=>{let r=document.createElement(`div`);r.className=`error-msg`,r.setAttribute(`role`,`alert`),r.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> <span>${t}</span>`;let i=e.closest(`.form-group`)||e;i.appendChild(r),e.classList.contains(`form-input`)&&e.classList.add(`has-error`),n||=i},i={firstName:t.querySelector(`#beta-first-name`)?.value||``,lastName:t.querySelector(`#beta-last-name`)?.value||``,email:t.querySelector(`#beta-email`)?.value||``,platforms:Array.from(t.querySelectorAll(`input[name="${U.devicePlatform}"]:checked`)).map(e=>e.value),preference:t.querySelector(`input[name="${U.testingPreference}"]:checked`)?.value||``,selectedApps:Array.from(t.querySelectorAll(`input[name="${U.specificApps}"]:checked`)).map(e=>e.value),frequency:t.querySelector(`#beta-frequency`)?.value||``,feedback:t.querySelector(`#beta-feedback`)?.value||``},a=Ce(i);if(!a.isValid)return a.errors.firstName&&r(t.querySelector(`#beta-first-name`)||t,a.errors.firstName),a.errors.lastName&&r(t.querySelector(`#beta-last-name`)||t,a.errors.lastName),a.errors.email&&r(t.querySelector(`#beta-email`)||t,a.errors.email),a.errors.platforms&&r(t.querySelector(`.platform-selection-grid`)||t,a.errors.platforms),a.errors.preference&&r(t.querySelector(`.preference-tiles-group`)||t,a.errors.preference),a.errors.selectedApps&&r(t.querySelector(`#specific-apps-list`)||t,a.errors.selectedApps),a.errors.frequency&&r(t.querySelector(`#beta-frequency`)||t,a.errors.frequency),n&&n.scrollIntoView({behavior:`smooth`,block:`center`}),!1;i.preference===`The Entire EVLOME Suite (All Apps)`&&t.querySelectorAll(`input[name="${U.specificApps}"]`).forEach(e=>{e.checked=!0}),window.betaSubmitted=!0;let o=document.getElementById(`submit-btn`);o&&(o.innerHTML=`<span>Submitting Application...</span>`,o.style.opacity=`0.75`,o.disabled=!0),window.betaTimeout=setTimeout(()=>{if(window.betaSubmitted&&document.getElementById(`beta-form-wrap`)?.style.display!==`none`){let e=document.getElementById(`beta-form-wrap`),t=document.getElementById(`success-message`);e&&t&&(e.style.display=`none`,t.style.display=`flex`,window.scrollTo({top:0,behavior:`smooth`}))}},4500),t.submit()},window.clearBetaError=function(e){let t=e.target,n=t.closest(`.form-group`);if(n){let e=n.querySelector(`.error-msg`);e&&e.remove()}t.classList.remove(`has-error`)};var K=new Map,q=()=>window.location.pathname||`/`,J=!1;window.addEventListener(`scroll`,()=>{J||=(requestAnimationFrame(()=>{K.set(q(),window.scrollY),J=!1}),!0)},{passive:!0});var Y=()=>document.getElementById(`ludo-stage`)!==null,we=e=>{if(K.has(e)){let t=K.get(e);requestAnimationFrame(()=>{window.scrollTo({top:t,left:0,behavior:`instant`}),setTimeout(()=>{window.scrollTo({top:t,left:0,behavior:`instant`})},30)})}else e===`/`||e===``?requestAnimationFrame(()=>{window.scrollTo({top:0,left:0,behavior:`instant`})}):window.scrollTo({top:0,left:0,behavior:`instant`})},X=[window.location.pathname+window.location.search],Z=``,Q=e=>{if(!e)return;let t=q();if(K.set(t,window.scrollY),e.startsWith(`/#`)||e.startsWith(`#`)){let t=e.replace(/^\/?#/,``);if(window.location.pathname===`/`||window.location.pathname===``){let e=document.getElementById(t);e&&e.scrollIntoView({behavior:`smooth`});return}}if(e===`/`&&Y()){window.scrollTo({top:0,left:0,behavior:`smooth`});return}Z=window.location.pathname,window.history.pushState({},``,e),X.push(window.location.pathname+window.location.search),$();let n=q();e.includes(`#`)||we(n)};window.handleHierarchicalBack=(e,t=`/`)=>{e&&e.preventDefault();let n=t||`/`;if(X.length>1&&((X[X.length-2]||``).split(`?`)[0].split(`#`)[0]||`/`)===(n.split(`?`)[0].split(`#`)[0]||`/`)){X.pop(),window.history.back();return}Q(n)},window.handleBackToCategory=(e,t=`matrix-stage`)=>{e&&e.preventDefault(),Q(`/`),setTimeout(()=>{let e=document.getElementById(t);e&&e.scrollIntoView({behavior:`smooth`})},100)},window.scrollToSection=e=>{window.closeMobileMenu();let t=window.location.pathname,n=()=>document.getElementById(e);t!==`/`&&t!==``?(Q(`/`),setTimeout(()=>{let e=n();e&&e.scrollIntoView({behavior:`smooth`})},150)):setTimeout(()=>{let e=n();e&&e.scrollIntoView({behavior:`smooth`})},60)},window.toggleMobileMenu=()=>{let e=document.body.classList.toggle(`menu-open`);document.body.style.overflow=e?`hidden`:``},window.closeMobileMenu=()=>{document.body.classList.remove(`menu-open`),document.body.style.overflow=``},window.addEventListener(`keydown`,e=>{e.key===`Escape`&&window.closeMobileMenu()}),window.handleLogoClick=e=>{e&&e.preventDefault(),window.closeMobileMenu();let t=window.location.pathname;t===`/`||t===``?window.scrollTo({top:0,left:0,behavior:`smooth`}):(Q(`/`),window.scrollTo({top:0,left:0,behavior:`instant`}))};var $=()=>{let e=window.location.pathname;if(e.length>1&&e.endsWith(`/`)&&(e=e.slice(0,-1)),window.location.hash&&window.location.hash.startsWith(`#/`)){let t=window.location.hash.slice(1).split(`?`)[0];window.history.replaceState({},``,t),e=t}let t=new URLSearchParams(window.location.search),n=document.getElementById(`content-area`);if(n){if(e===``||e===`/`)n.innerHTML=V();else if(e===`/ecosystem`||e===`/suite`)Y()||(n.innerHTML=V()),requestAnimationFrame(()=>{let e=document.getElementById(`suite-stage`);e&&e.scrollIntoView({behavior:`smooth`})});else if(e===`/games`)Y()||(n.innerHTML=V()),requestAnimationFrame(()=>{let e=document.getElementById(`games-stage`);e&&e.scrollIntoView({behavior:`smooth`})});else if(e===`/matrix`||e===`/health`||e===`/apps`)Y()||(n.innerHTML=V()),requestAnimationFrame(()=>{let e=document.getElementById(`suite-stage`);e&&e.scrollIntoView({behavior:`smooth`})});else if(e===`/one`||e===`/evlome-one`)Y()||(n.innerHTML=V()),requestAnimationFrame(()=>{let e=document.getElementById(`one-stage`);e&&e.scrollIntoView({behavior:`smooth`})});else if(e===`/philosophy`||e===`/principles`||e===`/codex`)Y()||(n.innerHTML=V()),window.scrollTo({top:0,behavior:`smooth`});else if(e===`/beta`){let e=t.get(`app`);if(n.innerHTML=oe(e?r(e):null),e){let t=G;if(t[e]){let n=document.getElementById(`specific-apps-radio`);n&&(n.checked=!0,window.handlePreferenceToggle(`specific`));let r=document.querySelector(`input[value="${t[e]}"]`);r&&(r.checked=!0,window.handleAppCardToggle(r))}}}else if(e===`/privacy`||e.endsWith(`/privacy`)||e.startsWith(`/privacy/`)){let t=``;t=e===`/privacy`?``:e.endsWith(`/privacy`)?e.slice(1).replace(/\/privacy$/,``):e.replace(`/privacy/`,``),n.innerHTML=_e(r(t)||null,Z)}else if(e===`/terms`||e.endsWith(`/terms`)||e.startsWith(`/terms/`)){let t=``;t=e===`/terms`?``:e.endsWith(`/terms`)?e.slice(1).replace(/\/terms$/,``):e.replace(`/terms/`,``),n.innerHTML=ve(r(t)||null,Z)}else{let t=r(e.slice(1));n.innerHTML=t?ae(t):V()}if(requestAnimationFrame(()=>{window.updateNutritionUI&&window.updateNutritionUI(),window.updateWorkoutUI&&window.updateWorkoutUI()}),window.location.hash&&!window.location.hash.startsWith(`#/`)){let e=window.location.hash.slice(1),t=document.getElementById(e);t&&setTimeout(()=>{t.scrollIntoView({behavior:`smooth`})},50)}}};`scrollRestoration`in history&&(history.scrollRestoration=`manual`),window.addEventListener(`popstate`,()=>{let e=window.location.pathname+window.location.search;X.length>1&&X[X.length-2]===e?X.pop():X.push(e),$(),we(q())}),document.addEventListener(`click`,e=>{let t=e.target.closest(`a`);if(!t)return;let n=t.getAttribute(`href`);if(n&&!(t.target===`_blank`||n.startsWith(`http://`)||n.startsWith(`https://`)||n.startsWith(`mailto:`)||n.startsWith(`tel:`)||n.startsWith(`javascript:`))){if(n.startsWith(`#`)||n.startsWith(`/#`)){let t=n.replace(/^\/?#/,``);if(window.location.pathname===`/`||window.location.pathname===``){e.preventDefault();let n=document.getElementById(t);n&&n.scrollIntoView({behavior:`smooth`});return}}if((n===`/`||n===`/#`)&&(window.location.pathname===`/`||window.location.pathname===``)){e.preventDefault(),window.scrollTo({top:0,left:0,behavior:`smooth`});return}n.startsWith(`/`)&&(e.preventDefault(),Q(n))}}),$();
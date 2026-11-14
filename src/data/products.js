// ============================================================================
// EVLOME Products Data Model — Apple-Grade Specifications & Highlights
// ============================================================================

export const suiteApps = [
  {
    id: 'calculator',
    type: 'utility',
    title: 'Calculator+',
    eyebrow: 'CLINICAL ACCURACY',
    category: 'Biometrics, Math & Precision',
    tagline: 'Clinical biometrics, financial models, and precision conversions.',
    heroTagline: 'Pure mathematical rigor. In your pocket.',
    desc: 'Everyday arithmetic, Mifflin-St Jeor TDEE expenditure, US Navy body fat percentage, macro split planning, loan amortization schedules, and 9-dimensional unit conversions — computed 100% locally.',
    stats: [
      { value: '9', label: 'Conversion Dimensions' },
      { value: '4', label: 'Macro Split Frameworks' },
      { value: '0', label: 'Data Transmitted' },
      { value: '100%', label: 'On-Device Vault' }
    ],
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
    accentColor: '#7c3aed',
    categoryGradient: 'linear-gradient(90deg, #a855f7 0%, #7c3aed 50%, #6d28d9 100%)',
    status: 'beta',
    privacyLink: '/calculator/privacy',
    termsLink: '/calculator/terms'
  },
  {
    id: 'cycle',
    type: 'utility',
    title: 'Cycle',
    eyebrow: 'REPRODUCTIVE PRIVACY',
    category: "Women's Health & Hormonal Rhythm",
    tagline: 'Sympto-thermal ovulation forecasting and encrypted hormonal rhythm.',
    heroTagline: 'Your rhythm. Your body. Encrypted on device.',
    desc: 'Private, discreet menstrual cycle telemetry, sympto-thermal ovulation forecasting, and holistic symptom tracking — encrypted on-device with zero trackers or data brokering.',
    stats: [
      { value: '4', label: 'Hormonal Rhythm Phases' },
      { value: '13', label: 'Symptom Trackers' },
      { value: 'BBT', label: 'Roetzer Thermal Shift' },
      { value: '0', label: 'Third-Party Trackers' }
    ],
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
    accentColor: '#e11d48',
    categoryGradient: 'linear-gradient(90deg, #f43f5e 0%, #e11d48 50%, #be123c 100%)',
    status: 'beta',
    privacyLink: '/cycle/privacy',
    termsLink: '/cycle/terms'
  },
  {
    id: 'activity',
    type: 'utility',
    title: 'Activity',
    eyebrow: 'KINETIC PERFORMANCE',
    category: 'Kinetic & Motion Logging',
    tagline: 'Versatile workout logging with barbell plate math and haptic rest timers.',
    heroTagline: 'Track every rep. Master every set.',
    desc: 'A versatile workout logger for gym and home training with set/rep tracking, haptic rest timers, barbell plate math, and strength progression metrics.',
    stats: [
      { value: '1RM', label: 'Max Effort Calculations' },
      { value: 'Plate', label: 'Barbell Math Assistant' },
      { value: 'Haptic', label: 'Rest Interval Timers' },
      { value: '100%', label: 'Offline Gym Logging' }
    ],
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
    accentColor: '#d97706',
    categoryGradient: 'linear-gradient(90deg, #f59e0b 0%, #d97706 50%, #b45309 100%)',
    status: 'development',
    privacyLink: '/activity/privacy',
    termsLink: '/activity/terms'
  },
  {
    id: 'nutrition',
    type: 'utility',
    title: 'Nutrition',
    eyebrow: 'METABOLIC BALANCE',
    category: 'Metabolic & Vitality Balance',
    tagline: 'Effortless caloric balance, whole-food logging, and fasting telemetry.',
    heroTagline: 'Fuel your day with quiet clarity.',
    desc: 'A clean calorie, macro, and nutrient tracker with whole food logging, personalized goals, fasting timers, and hydration tracking.',
    stats: [
      { value: '16:8', label: 'Intermittent Fasting' },
      { value: '5', label: 'Macro & Micro Rings' },
      { value: '0', label: 'Cloud Profiling' },
      { value: 'Local', label: 'Food Database' }
    ],
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
    accentColor: '#059669',
    categoryGradient: 'linear-gradient(90deg, #10b981 0%, #059669 50%, #047857 100%)',
    status: 'development',
    privacyLink: '/nutrition/privacy',
    termsLink: '/nutrition/terms'
  }
];

export const gamesData = [
  {
    id: 'ludo-prince',
    type: 'game',
    title: 'Ludo Prince',
    eyebrow: 'LIVE ON APP STORE & GOOGLE PLAY',
    category: 'Real-Time Strategy & Board',
    tagline: 'Tactile multiplayer board game — live globally on iOS and Android.',
    heroTagline: 'Classic board play. Pure tactile joy.',
    desc: 'The classic board game reimagined with modern design, real-time multiplayer, pass-and-play matches, intelligent AI bots, and immersive spatial audio — with zero pay-to-win manipulation. Live now on iOS and Android.',
    stats: [
      { value: 'LIVE', label: 'In Production' },
      { value: '0', label: 'Energy Timers or Paywalls' },
      { value: '4P', label: 'Real-Time Multiplayer' },
      { value: '100%', label: 'Offline Bot Play' }
    ],
    highlights: [
      {
        title: 'Real-Time Online Multiplayer',
        desc: 'Create instant private lobbies with custom room codes, invite friends via dynamic deep links, or enter quick global matchmaking with seamless reconnects.'
      },
      {
        title: 'Pass & Play Local Multiplayer',
        desc: 'Gather friends and family around a single device for 2, 3, or 4 player offline board gaming — complete with rotating seat markers and personal turn rings.'
      },
      {
        title: 'Tactical AI Bot Play',
        desc: 'Sharpen your skills offline without waiting for opponents. Battle adaptive bot intelligence calibrated for engaging, competitive strategy.'
      },
      {
        title: 'Classic & Team Match Modes',
        desc: 'Experience pure traditional race-to-home board play, or team up in 2v2 cooperative mode where teammates coordinate pawn maneuvers.'
      },
      {
        title: 'Tactile Dice & Spatial Soundscapes',
        desc: 'Realistic physics-driven dice rolling, dynamic haptic vibrations on rolls and captures, and custom-composed audio effects for safe steps and home runs.'
      },
      {
        title: 'Respectful, Player-First Design',
        desc: 'No aggressive pay-to-win boosters, no artificial energy timers, and no predatory micro-transactions. Pure, uncompromised board play.'
      }
    ],
    icon: '/icons/ludo-prince.png',
    accentColor: '#0284c7',
    categoryGradient: 'linear-gradient(90deg, #38bdf8 0%, #0284c7 50%, #0369a1 100%)',
    status: 'production',
    appStoreUrl: 'https://apps.apple.com/app/id6760012267',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.paisphere.ludoprince',
    privacyLink: '/ludo-prince/privacy',
    termsLink: '/ludo-prince/terms'
  },
  {
    id: 'pawdoku',
    type: 'game',
    title: 'Pawdoku',
    eyebrow: 'MINDFUL SANCTUARY',
    category: 'Mindful Puzzle & Cozy Sanctuary',
    tagline: 'Tranquil pastel logic and cozy pet sanctuary.',
    heroTagline: 'Calm your mind. Nurture your haven.',
    desc: 'A mindful Star Battle puzzle and cozy pet sanctuary. Place animal companions across colorful regions without crowding their space — one per row, column, and color zone, with zero guesswork and zero timers.',
    stats: [
      { value: 'Star Battle', label: 'Aloof Queens Logic' },
      { value: '0', label: 'Stress or Timers' },
      { value: 'Cozy Haven', label: 'Pet Sanctuary' },
      { value: '100%', label: 'Offline & Peaceful' }
    ],
    highlights: [
      {
        title: 'Aloof Pet Placement & Pure Logic',
        desc: 'One companion per row, column, and color region. Pets require personal space and cannot touch, even diagonally. 100% deductive, zero guesswork.'
      },
      {
        title: 'Cozy Pet Haven & Sanctuary',
        desc: 'Adopt, cuddle, and feed aloof pet companions who respond with affectionate purrs, chirps, and floating heart reactions as your sanctuary flourishes.'
      },
      {
        title: 'Sanctuary Decor & Warm Haven',
        desc: 'Earn cozy kibble through mindful play to collect warm rugs, fireplace accessories, cozy pet beds, and relaxing ambient lighting.'
      },
      {
        title: 'Pressure-Free & Mindful Streaks',
        desc: 'No punitive countdown timers, no high-pressure game-overs, and no artificial stress. Track daily mindful streaks at your own peaceful pace.'
      }
    ],
    icon: '/icons/pawdoku.png',
    accentColor: '#ea580c',
    categoryGradient: 'linear-gradient(90deg, #fb923c 0%, #ea580c 50%, #c2410c 100%)',
    status: 'development',
    privacyLink: '/pawdoku/privacy',
    termsLink: '/pawdoku/terms'
  }
];

export const allProducts = [...suiteApps, ...gamesData];
export const appsData = allProducts;
export const getProductById = (id) => allProducts.find((p) => p.id === id);

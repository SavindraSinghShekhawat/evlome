// ============================================================================
// EVLOME Beta Testing Application Form — Contract, Schema & Validator
// Mirroring Google Form Schema: https://docs.google.com/forms/d/e/1FAIpQLSekI29k1t9_IqrNwZvtcHeIEebY7HNj471CspOid_TlKLoJ9Q/viewform
// ============================================================================

export const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSekI29k1t9_IqrNwZvtcHeIEebY7HNj471CspOid_TlKLoJ9Q/formResponse';

export const FORM_ENTRY_IDS = {
  firstName: 'entry.1026423473',
  lastName: 'entry.2072277110',
  devicePlatform: 'entry.261106749',
  email: 'entry.1247363008',
  testingPreference: 'entry.923244053',
  specificApps: 'entry.610551536',
  testingFrequency: 'entry.454575922',
  feedback: 'entry.1265301105'
};

export const VALID_PLATFORMS = ['iOS', 'Android'];

export const VALID_PREFERENCES = [
  'The Entire EVLOME Suite (All Apps)',
  'Specific Apps Only'
];

export const VALID_APPS = [
  'Calculator+',
  'Cycle',
  'Nutrition',
  'Activity',
  'Ludo Prince',
  'Pawdoku'
];

export const VALID_FREQUENCIES = [
  'Daily',
  'A few times a week',
  'Once a week',
  'Occasionally'
];

export const APP_ID_TO_FORM_VALUE = {
  'calculator': 'Calculator+',
  'cycle': 'Cycle',
  'nutrition': 'Nutrition',
  'activity': 'Activity',
  'ludo-prince': 'Ludo Prince',
  'pawdoku': 'Pawdoku'
};

export const FORM_VALUE_TO_APP_ID = Object.fromEntries(
  Object.entries(APP_ID_TO_FORM_VALUE).map(([k, v]) => [v, k])
);

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Validates the beta form submission payload
 * @param {Object} data
 * @param {string} data.firstName
 * @param {string} data.lastName
 * @param {string} data.email
 * @param {string[]} data.platforms
 * @param {string} data.preference
 * @param {string[]} data.selectedApps
 * @param {string} data.frequency
 * @param {string} [data.feedback]
 * @returns {{ isValid: boolean, errors: Record<string, string>, payload: URLSearchParams | null }}
 */
export function validateBetaForm(data = {}) {
  const errors = {};

  const firstName = (data.firstName || '').trim();
  if (!firstName) {
    errors.firstName = 'Please enter your first name';
  }

  const lastName = (data.lastName || '').trim();
  if (!lastName) {
    errors.lastName = 'Please enter your last name';
  }

  const email = (data.email || '').trim();
  if (!email) {
    errors.email = 'Please enter your email address';
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = 'Please enter a valid email address';
  }

  const platforms = Array.isArray(data.platforms) ? data.platforms : [];
  const validSelectedPlatforms = platforms.filter(p => VALID_PLATFORMS.includes(p));
  if (validSelectedPlatforms.length === 0) {
    errors.platforms = 'Please select at least one device platform (iOS or Android)';
  }

  const preference = (data.preference || '').trim();
  if (!preference || !VALID_PREFERENCES.includes(preference)) {
    errors.preference = 'Please select your testing preference';
  } else if (preference === 'Specific Apps Only') {
    const selectedApps = Array.isArray(data.selectedApps) ? data.selectedApps : [];
    const validSelectedApps = selectedApps.filter(app => VALID_APPS.includes(app));
    if (validSelectedApps.length === 0) {
      errors.selectedApps = 'Please select at least one app or game to test';
    }
  }

  const frequency = (data.frequency || '').trim();
  if (!frequency || !VALID_FREQUENCIES.includes(frequency)) {
    errors.frequency = 'Please select your testing availability';
  }

  const isValid = Object.keys(errors).length === 0;

  let payload = null;
  if (isValid) {
    payload = new URLSearchParams();
    payload.append(FORM_ENTRY_IDS.firstName, firstName);
    payload.append(FORM_ENTRY_IDS.lastName, lastName);
    payload.append(FORM_ENTRY_IDS.email, email);

    validSelectedPlatforms.forEach(plat => {
      payload.append(FORM_ENTRY_IDS.devicePlatform, plat);
    });

    payload.append(FORM_ENTRY_IDS.testingPreference, preference);

    if (preference === 'The Entire EVLOME Suite (All Apps)') {
      VALID_APPS.forEach(app => {
        payload.append(FORM_ENTRY_IDS.specificApps, app);
      });
    } else {
      const selectedApps = Array.isArray(data.selectedApps) ? data.selectedApps : [];
      selectedApps
        .filter(app => VALID_APPS.includes(app))
        .forEach(app => {
          payload.append(FORM_ENTRY_IDS.specificApps, app);
        });
    }

    payload.append(FORM_ENTRY_IDS.testingFrequency, frequency);

    if (data.feedback && data.feedback.trim()) {
      payload.append(FORM_ENTRY_IDS.feedback, data.feedback.trim());
    }
  }

  return {
    isValid,
    errors,
    payload
  };
}

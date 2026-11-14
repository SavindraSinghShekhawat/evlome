import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import {
  GOOGLE_FORM_ACTION_URL,
  FORM_ENTRY_IDS,
  VALID_PLATFORMS,
  VALID_PREFERENCES,
  VALID_APPS,
  VALID_FREQUENCIES,
  APP_ID_TO_FORM_VALUE,
  FORM_VALUE_TO_APP_ID,
  EMAIL_REGEX,
  validateBetaForm
} from '../src/utils/betaFormValidation.js';

import { renderBetaPage } from '../src/pages/beta.js';
import { allProducts, suiteApps, gamesData } from '../src/data/products.js';

describe('EVLOME Beta Form — Google Form Schema & Contract', () => {
  it('should target the official EVLOME Google Form endpoint', () => {
    assert.match(GOOGLE_FORM_ACTION_URL, /^https:\/\/docs\.google\.com\/forms\/d\/e\/.+\/formResponse$/);
    assert.strictEqual(
      GOOGLE_FORM_ACTION_URL,
      'https://docs.google.com/forms/d/e/1FAIpQLSekI29k1t9_IqrNwZvtcHeIEebY7HNj471CspOid_TlKLoJ9Q/formResponse'
    );
  });

  it('should define all 8 verified Google Form field entry IDs', () => {
    assert.strictEqual(FORM_ENTRY_IDS.firstName, 'entry.1026423473');
    assert.strictEqual(FORM_ENTRY_IDS.lastName, 'entry.2072277110');
    assert.strictEqual(FORM_ENTRY_IDS.devicePlatform, 'entry.261106749');
    assert.strictEqual(FORM_ENTRY_IDS.email, 'entry.1247363008');
    assert.strictEqual(FORM_ENTRY_IDS.testingPreference, 'entry.923244053');
    assert.strictEqual(FORM_ENTRY_IDS.specificApps, 'entry.610551536');
    assert.strictEqual(FORM_ENTRY_IDS.testingFrequency, 'entry.454575922');
    assert.strictEqual(FORM_ENTRY_IDS.feedback, 'entry.1265301105');
  });

  it('should contain the exact 6 apps registered in the Google Form', () => {
    const expectedApps = [
      'Calculator+',
      'Cycle',
      'Nutrition',
      'Activity',
      'Ludo Prince',
      'Pawdoku'
    ];
    assert.deepStrictEqual(VALID_APPS, expectedApps);
  });

  it('should map every app in allProducts to its verified Google Form name', () => {
    const productIds = allProducts.map(p => p.id);
    for (const id of productIds) {
      assert.ok(APP_ID_TO_FORM_VALUE[id], `App id "${id}" should be mapped to a form value`);
      const formVal = APP_ID_TO_FORM_VALUE[id];
      assert.ok(VALID_APPS.includes(formVal), `Form value "${formVal}" must exist in VALID_APPS`);
    }
  });

  it('should support bidirectional mapping between app IDs and form values', () => {
    for (const [id, formValue] of Object.entries(APP_ID_TO_FORM_VALUE)) {
      assert.strictEqual(FORM_VALUE_TO_APP_ID[formValue], id);
    }
  });

  it('should define valid platforms matching Google Form options', () => {
    assert.deepStrictEqual(VALID_PLATFORMS, ['iOS', 'Android']);
  });

  it('should define valid preferences matching Google Form options', () => {
    assert.deepStrictEqual(VALID_PREFERENCES, [
      'The Entire EVLOME Suite (All Apps)',
      'Specific Apps Only'
    ]);
  });

  it('should define valid frequency options matching Google Form options', () => {
    assert.deepStrictEqual(VALID_FREQUENCIES, [
      'Daily',
      'A few times a week',
      'Once a week',
      'Occasionally'
    ]);
  });
});

describe('EVLOME Beta Form — Rendered HTML Output Contract', () => {
  const renderedHtml = renderBetaPage();

  it('should render a form targeting the hidden iframe with correct action URL', () => {
    assert.ok(renderedHtml.includes(`action="${GOOGLE_FORM_ACTION_URL}"`));
    assert.ok(renderedHtml.includes('target="hidden_iframe"'));
    assert.ok(renderedHtml.includes('id="hidden_iframe"'));
  });

  it('should render inputs for all required Google Form entry IDs', () => {
    for (const [key, entryId] of Object.entries(FORM_ENTRY_IDS)) {
      assert.ok(
        renderedHtml.includes(`name="${entryId}"`),
        `HTML must include input element with name="${entryId}" for ${key}`
      );
    }
  });

  it('should render checkboxes for all 6 verified apps with exact values', () => {
    for (const app of VALID_APPS) {
      const expectedSnippet = `name="${FORM_ENTRY_IDS.specificApps}" value="${app}"`;
      assert.ok(
        renderedHtml.includes(expectedSnippet),
        `HTML must render specific app checkbox: ${expectedSnippet}`
      );
    }
  });

  it('should render device platform checkboxes for iOS and Android', () => {
    for (const platform of VALID_PLATFORMS) {
      const expectedSnippet = `name="${FORM_ENTRY_IDS.devicePlatform}" value="${platform}"`;
      assert.ok(
        renderedHtml.includes(expectedSnippet),
        `HTML must render device platform checkbox: ${expectedSnippet}`
      );
    }
  });

  it('should render frequency option with exact value="Occasionally"', () => {
    assert.ok(
      renderedHtml.includes('<option value="Occasionally">'),
      'Frequency dropdown must include exact value="Occasionally" for Google Form compatibility'
    );
  });

  it('should render early access advisory for privacy and data protection', () => {
    assert.ok(renderedHtml.includes('Early Access Advisory'));
  });

  it('should render production notice card when parentApp is ludo-prince', () => {
    const ludoHtml = renderBetaPage({ id: 'ludo-prince', title: 'Ludo Prince' });
    assert.ok(ludoHtml.includes('Ludo Prince is already Live in Production!'));
    assert.ok(ludoHtml.includes('Return to Ludo Prince'));
  });

  it('should render standard home return when parentApp is null', () => {
    assert.ok(renderedHtml.includes('Return to Home'));
  });
});

describe('EVLOME Beta Form — Validation Engine', () => {
  const validBaseData = {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com',
    platforms: ['iOS'],
    preference: 'The Entire EVLOME Suite (All Apps)',
    selectedApps: [],
    frequency: 'Daily',
    feedback: 'Excited to test on iPhone 16 Pro!'
  };

  it('should pass validation when all fields are valid with "All Apps" preference', () => {
    const result = validateBetaForm(validBaseData);
    assert.strictEqual(result.isValid, true);
    assert.deepStrictEqual(result.errors, {});
    assert.ok(result.payload instanceof URLSearchParams);
  });

  it('should fail when first name is missing or whitespace', () => {
    const result = validateBetaForm({ ...validBaseData, firstName: '   ' });
    assert.strictEqual(result.isValid, false);
    assert.strictEqual(result.errors.firstName, 'Please enter your first name');
  });

  it('should fail when last name is missing or whitespace', () => {
    const result = validateBetaForm({ ...validBaseData, lastName: '' });
    assert.strictEqual(result.isValid, false);
    assert.strictEqual(result.errors.lastName, 'Please enter your last name');
  });

  it('should fail when email is empty', () => {
    const result = validateBetaForm({ ...validBaseData, email: '' });
    assert.strictEqual(result.isValid, false);
    assert.strictEqual(result.errors.email, 'Please enter your email address');
  });

  it('should fail when email format is invalid', () => {
    const badEmails = ['plainaddress', '@missingusername.com', 'user@.com', 'user@domain'];
    for (const badEmail of badEmails) {
      const result = validateBetaForm({ ...validBaseData, email: badEmail });
      assert.strictEqual(result.isValid, false);
      assert.strictEqual(result.errors.email, 'Please enter a valid email address');
    }
  });

  it('should accept valid email formats', () => {
    const goodEmails = ['user@domain.com', 'first.last@sub.example.org', 'dev+beta@evlome.co'];
    for (const goodEmail of goodEmails) {
      const result = validateBetaForm({ ...validBaseData, email: goodEmail });
      assert.strictEqual(result.isValid, true, `Expected ${goodEmail} to be valid`);
    }
  });

  it('should fail when no device platform is selected', () => {
    const result = validateBetaForm({ ...validBaseData, platforms: [] });
    assert.strictEqual(result.isValid, false);
    assert.strictEqual(result.errors.platforms, 'Please select at least one device platform (iOS or Android)');
  });

  it('should accept multiple platforms (iOS + Android)', () => {
    const result = validateBetaForm({ ...validBaseData, platforms: ['iOS', 'Android'] });
    assert.strictEqual(result.isValid, true);
    assert.deepStrictEqual(result.payload.getAll(FORM_ENTRY_IDS.devicePlatform), ['iOS', 'Android']);
  });

  it('should fail when testing preference is missing or invalid', () => {
    const result = validateBetaForm({ ...validBaseData, preference: 'Invalid Preference' });
    assert.strictEqual(result.isValid, false);
    assert.strictEqual(result.errors.preference, 'Please select your testing preference');
  });

  it('should fail when "Specific Apps Only" is chosen but zero apps are selected', () => {
    const result = validateBetaForm({
      ...validBaseData,
      preference: 'Specific Apps Only',
      selectedApps: []
    });
    assert.strictEqual(result.isValid, false);
    assert.strictEqual(result.errors.selectedApps, 'Please select at least one app or game to test');
  });

  it('should pass when "Specific Apps Only" is chosen and at least one valid app is selected', () => {
    const result = validateBetaForm({
      ...validBaseData,
      preference: 'Specific Apps Only',
      selectedApps: ['Calculator+', 'Pawdoku']
    });
    assert.strictEqual(result.isValid, true);
    assert.deepStrictEqual(result.payload.getAll(FORM_ENTRY_IDS.specificApps), ['Calculator+', 'Pawdoku']);
  });

  it('should automatically include all 6 apps when "The Entire EVLOME Suite (All Apps)" is chosen', () => {
    const result = validateBetaForm({
      ...validBaseData,
      preference: 'The Entire EVLOME Suite (All Apps)',
      selectedApps: []
    });
    assert.strictEqual(result.isValid, true);
    const submittedApps = result.payload.getAll(FORM_ENTRY_IDS.specificApps);
    assert.deepStrictEqual(submittedApps, VALID_APPS);
  });

  it('should fail when testing frequency is missing or invalid', () => {
    const result = validateBetaForm({ ...validBaseData, frequency: '' });
    assert.strictEqual(result.isValid, false);
    assert.strictEqual(result.errors.frequency, 'Please select your testing availability');
  });

  it('should accept all verified frequencies', () => {
    for (const freq of VALID_FREQUENCIES) {
      const result = validateBetaForm({ ...validBaseData, frequency: freq });
      assert.strictEqual(result.isValid, true, `Expected frequency "${freq}" to be valid`);
      assert.strictEqual(result.payload.get(FORM_ENTRY_IDS.testingFrequency), freq);
    }
  });

  it('should include optional feedback when provided, and omit when empty', () => {
    const withFeedback = validateBetaForm({ ...validBaseData, feedback: 'Testing on Pixel 9' });
    assert.strictEqual(withFeedback.payload.get(FORM_ENTRY_IDS.feedback), 'Testing on Pixel 9');

    const withoutFeedback = validateBetaForm({ ...validBaseData, feedback: '   ' });
    assert.strictEqual(withoutFeedback.payload.get(FORM_ENTRY_IDS.feedback), null);
  });

  it('should properly trim surrounding whitespace from name and email inputs', () => {
    const result = validateBetaForm({
      ...validBaseData,
      firstName: '   Jane   ',
      lastName: '   Doe   ',
      email: '   Jane.Doe@EXAMPLE.COM   '
    });
    assert.strictEqual(result.isValid, true);
    assert.strictEqual(result.payload.get(FORM_ENTRY_IDS.firstName), 'Jane');
    assert.strictEqual(result.payload.get(FORM_ENTRY_IDS.lastName), 'Doe');
    assert.strictEqual(result.payload.get(FORM_ENTRY_IDS.email), 'Jane.Doe@EXAMPLE.COM');
  });

  it('should filter out unrecognized apps and only serialize valid EVLOME products', () => {
    const result = validateBetaForm({
      ...validBaseData,
      preference: 'Specific Apps Only',
      selectedApps: ['UnknownGame', 'Calculator+', 'FakeApp', 'Pawdoku']
    });
    assert.strictEqual(result.isValid, true);
    assert.deepStrictEqual(result.payload.getAll(FORM_ENTRY_IDS.specificApps), ['Calculator+', 'Pawdoku']);
  });

  it('should correctly URL-encode special characters like "+" in "Calculator+" in stringified payload', () => {
    const result = validateBetaForm({
      ...validBaseData,
      preference: 'Specific Apps Only',
      selectedApps: ['Calculator+']
    });
    assert.strictEqual(result.isValid, true);
    const queryString = result.payload.toString();
    assert.ok(queryString.includes(`${encodeURIComponent(FORM_ENTRY_IDS.specificApps)}=Calculator%2B`));
  });
});



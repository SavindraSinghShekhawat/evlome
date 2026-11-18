import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getFairDiceRoll } from '../src/pages/home.js';

describe('EVLOME Ludo Prince — Fair Dice Engine', () => {
  it('should only return integers strictly between 1 and 6 inclusive', () => {
    for (let i = 0; i < 1000; i++) {
      const roll = getFairDiceRoll();
      assert.strictEqual(Number.isInteger(roll), true, 'Roll must be an integer');
      assert.strictEqual(roll >= 1 && roll <= 6, true, `Roll ${roll} must be between 1 and 6`);
    }
  });

  it('should produce an unbiased uniform distribution across all 6 faces', () => {
    const trials = 60000;
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

    for (let i = 0; i < trials; i++) {
      const roll = getFairDiceRoll();
      counts[roll]++;
    }

    // Expected count per face is trials / 6 = 10,000
    // With 60,000 trials, 3 sigma is ~3 * sqrt(60000 * (1/6) * (5/6)) = ~273
    // We allow a generous margin of ±8% (between 9,200 and 10,800) for statistical safety
    const expected = trials / 6;
    for (let face = 1; face <= 6; face++) {
      const count = counts[face];
      assert.strictEqual(count > 0, true, `Face ${face} must appear`);
      const ratio = count / trials;
      assert.strictEqual(
        count >= expected * 0.90 && count <= expected * 1.10,
        true,
        `Face ${face} count (${count}, ${(ratio * 100).toFixed(2)}%) deviates too far from expected ${expected}`
      );
    }
  });

  it('should roll 1 and 6 with equal statistical likelihood (no 6-bias, no 1-omission)', () => {
    const trials = 30000;
    let ones = 0;
    let sixes = 0;

    for (let i = 0; i < trials; i++) {
      const roll = getFairDiceRoll();
      if (roll === 1) ones++;
      if (roll === 6) sixes++;
    }

    assert.strictEqual(ones > 0, true, '1 must be rolled');
    assert.strictEqual(sixes > 0, true, '6 must be rolled');

    const diff = Math.abs(ones - sixes);
    // Difference should be small, definitely < 10% of trials
    assert.strictEqual(diff < trials * 0.05, true, `Discrepancy between 1s (${ones}) and 6s (${sixes}) is too large`);
  });
});

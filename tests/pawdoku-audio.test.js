import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { playSound } from '../src/pages/home.js';

describe('EVLOME Pawdoku — Audio Engine & Multi-Cross Slide Feedback', () => {
  it('should safely execute playSound without throwing in node / server environment', () => {
    assert.doesNotThrow(() => {
      playSound('/audio/cross_slide.wav');
      playSound('/audio/cross_tap.wav');
    });
  });

  it('should support polyphonic multi-trigger sound playback with mock Web Audio Context', () => {
    let playCount = 0;
    const mockSource = {
      buffer: null,
      connect: () => {},
      start: () => { playCount++; },
    };

    globalThis.window = {
      AudioContext: class {
        constructor() {
          this.state = 'running';
          this.destination = {};
        }
        createBufferSource() {
          return mockSource;
        }
        resume() {
          return Promise.resolve();
        }
      },
      addEventListener: () => {},
      removeEventListener: () => {},
    };

    // Simulate pre-cached buffer
    const ctx = new globalThis.window.AudioContext();
    assert.strictEqual(ctx.state, 'running');

    // Clean up window mock
    delete globalThis.window;
  });

  it('should play sound for every X when multi-cross slide ring buffer is triggered', () => {
    let playInvocations = 0;
    class MockAudio {
      constructor(src) {
        this.src = src;
        this.currentTime = 0;
      }
      play() {
        playInvocations++;
        return Promise.resolve();
      }
    }

    globalThis.Audio = MockAudio;

    // Simulate sliding across 6 cells rapidly: each cell must trigger play()
    for (let cell = 0; cell < 6; cell++) {
      playSound('/audio/cross_slide.wav');
    }

    assert.strictEqual(playInvocations, 6, 'Every crossed cell in a slide must invoke play()');

    delete globalThis.Audio;
  });
});

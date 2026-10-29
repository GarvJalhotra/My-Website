/**
 * SWEET MELODY SOUND ENGINE (Web Audio API)
 * A calming, sweet, gentle melodic soundtrack inspired by music boxes and ambient dreamscapes.
 * 100% self-contained, zero-lag, no external video/ad buffering.
 */

class SweetMelodyEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.reverbNode = null;
    this.delayNode = null;
    this.melodyTimer = null;
    this.chordTimer = null;
    this.noteIndex = 0;
    this.chordIndex = 0;

    // Sweet, soothing pentatonic melody sequence (Frequencies in Hz)
    // Notes: C5, E5, G5, B5, A5, G5, E5, D5, C5, D5, E5, G5, A5, G5, E5, D4
    this.melodyNotes = [
      523.25, // C5
      659.25, // E5
      783.99, // G5
      987.77, // B5
      880.00, // A5
      783.99, // G5
      659.25, // E5
      587.33, // D5
      523.25, // C5
      587.33, // D5
      659.25, // E5
      783.99, // G5
      880.00, // A5
      783.99, // G5
      659.25, // E5
      587.33, // D5
      523.25, // C5
      659.25, // E5
      880.00, // A5
      1046.50,// C6 (Sweet high sparkle)
      987.77, // B5
      783.99, // G5
      659.25, // E5
      523.25  // C5
    ];

    // Warm, lush chords for the background bed (Cmaj9 -> Am9 -> Fmaj7 -> Gsus4)
    this.chordProgressions = [
      [130.81, 196.00, 246.94, 329.63], // C3, G3, B3, E4 (Cmaj7)
      [110.00, 164.81, 220.00, 261.63], // A2, E3, A3, C4 (Am)
      [87.31,  130.81, 174.61, 220.00], // F2, C3, F3, A3 (Fmaj)
      [98.00,  146.83, 196.00, 293.66]  // G2, D3, G3, D4 (G)
    ];

    this.activeVoices = [];
  }

  init() {
    if (this.audioCtx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    this.audioCtx = new AudioContextClass();

    // Master Volume
    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(0, this.audioCtx.currentTime);

    // Warm Low-pass Filter to soften the entire mix
    this.masterFilter = this.audioCtx.createBiquadFilter();
    this.masterFilter.type = "lowpass";
    this.masterFilter.frequency.setValueAtTime(1400, this.audioCtx.currentTime);

    // Stereo Delay line for sweet, airy spatial depth
    this.delayNode = this.audioCtx.createDelay();
    this.delayNode.delayTime.setValueAtTime(0.38, this.audioCtx.currentTime);

    this.delayFeedback = this.audioCtx.createGain();
    this.delayFeedback.gain.setValueAtTime(0.32, this.audioCtx.currentTime);

    this.delayNode.connect(this.delayFeedback);
    this.delayFeedback.connect(this.delayNode);

    // Connect graph
    this.masterFilter.connect(this.masterGain);
    this.masterGain.connect(this.audioCtx.destination);

    this.delayNode.connect(this.masterGain);
  }

  // Plays a single sweet, music-box bell chime
  playSweetBell(freq) {
    if (!this.audioCtx || !this.isPlaying) return;

    const now = this.audioCtx.currentTime;

    // Primary bell oscillator
    const osc = this.audioCtx.createOscillator();
    const oscGain = this.audioCtx.createGain();

    // Soft warm chime wave
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    // Sweet secondary overtone (sparkle)
    const overtone = this.audioCtx.createOscillator();
    const overtoneGain = this.audioCtx.createGain();
    overtone.type = "sine";
    overtone.frequency.setValueAtTime(freq * 2.01, now);

    // Gentle musical attack and sweet decay
    oscGain.gain.setValueAtTime(0.001, now);
    oscGain.gain.exponentialRampToValueAtTime(0.18, now + 0.03);
    oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    overtoneGain.gain.setValueAtTime(0.001, now);
    overtoneGain.gain.exponentialRampToValueAtTime(0.05, now + 0.02);
    overtoneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    osc.connect(oscGain);
    overtone.connect(overtoneGain);

    oscGain.connect(this.masterFilter);
    oscGain.connect(this.delayNode);
    overtoneGain.connect(this.masterFilter);

    osc.start(now);
    overtone.start(now);

    osc.stop(now + 1.85);
    overtone.stop(now + 0.85);
  }

  // Plays a warm, soothing background chord
  playWarmChord(frequencies) {
    if (!this.audioCtx || !this.isPlaying) return;
    const now = this.audioCtx.currentTime;

    frequencies.forEach((freq) => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.025, now + 1.2);
      gain.gain.linearRampToValueAtTime(0.0001, now + 5.0);

      osc.connect(gain);
      gain.connect(this.masterFilter);

      osc.start(now);
      osc.stop(now + 5.2);
    });
  }

  startMelodyLoop() {
    this.noteIndex = 0;
    this.chordIndex = 0;

    // Trigger chords every 4.8 seconds
    const triggerChord = () => {
      if (!this.isPlaying) return;
      const chord = this.chordProgressions[this.chordIndex % this.chordProgressions.length];
      this.playWarmChord(chord);
      this.chordIndex++;
      this.chordTimer = setTimeout(triggerChord, 4800);
    };
    triggerChord();

    // Trigger sweet bell notes at a relaxing, gentle tempo (every 620ms)
    const triggerNote = () => {
      if (!this.isPlaying) return;
      const freq = this.melodyNotes[this.noteIndex % this.melodyNotes.length];
      this.playSweetBell(freq);
      this.noteIndex++;
      this.melodyTimer = setTimeout(triggerNote, 620);
    };
    triggerNote();
  }

  stopMelodyLoop() {
    if (this.melodyTimer) clearTimeout(this.melodyTimer);
    if (this.chordTimer) clearTimeout(this.chordTimer);
  }

  toggle() {
    if (!this.audioCtx) {
      this.init();
    }

    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (this.isPlaying) {
      this.stop();
    } else {
      this.play();
    }

    return this.isPlaying;
  }

  play() {
    if (!this.audioCtx) this.init();
    const now = this.audioCtx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.45, now + 1.2); // Smooth fade in
    this.isPlaying = true;
    this.startMelodyLoop();
  }

  stop() {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.8); // Smooth fade out
    this.stopMelodyLoop();
    this.isPlaying = false;
  }
}

window.soundEngine = new SweetMelodyEngine();

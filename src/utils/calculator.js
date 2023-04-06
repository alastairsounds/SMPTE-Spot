const Timecode = require('smpte-timecode');

class Calc {
  constructor() {
    this.params = {
      fps: 'SET fps',
      dropFrame: 'SET dropFrame',
      // // ##STRETCHGOAL
      // tempoTarget: 'SET tempoTarget',
      tempoMin: 'SET tempoMin',
      tempoMax: 'SET tempoMax',
      tempoStep: 'SET tempoStep',
      // beats: 'SET beats',
    };
    this.markers = [];
    this.tempoTests = [];
    this.hitRange = {};
    this.hitRange.earlySec = -0.1;
    this.hitRange.lateSec = 0.2;
  }

  framesToSec(frames) {
    const result = Number((1 / this.fps) * frames).toFixed(3);
    return result;
  }

  secToFrames(sec) {
    const result = Math.round(sec * this.fps);
    return result;
  }

  calculateMarker(mk, tempo) {
    const mkSecond = this.framesToSec(mk.frameCount);
    const tempoSecInt = 60 / tempo;

    const beatTarget = Math.round(mkSecond / tempoSecInt);
    let resultSec = (beatTarget * tempoSecInt - mkSecond).toFixed(3);

    if (resultSec < this.hitRange.earlySec || resultSec > this.hitRange.lateSec)
      return false;
    // bars and beats are 1-indexed
    if (resultSec >= 0) resultSec = '+' + resultSec;
    return {
      beatTarget: beatTarget + 1,
      resultSec,
    };
  }

  suitableTempos(mkArray) {
    calc.fillTempoTests();
    
    let resultArr = [];

    for (let i = 0; i < this.tempoTests.length; i++) {
      let skip = false;
      let counter = 1;
      let result = { beatTarget: 1, resultSec: '0.000' };
      const obj = {
        tempo: this.tempoTests[i],
        mae: 0,
        mk1: result,
      };
      while (result && counter < mkArray.length) {
        result = this.calculateMarker(mkArray[counter++], this.tempoTests[i]);
        if (!result) {
          skip = true;
          break;
        } else {
          obj['mk' + counter] = result;
          obj.mae += Math.abs(Number(result.resultSec));
        }
      }

      obj['mae'] = Number((obj.mae / (counter - 1)).toFixed(3));

      if (!skip) {
        resultArr.push(obj);
      }
    }

    return resultArr.sort((a, b) => a.mae - b.mae);
  }

  fillTempoTests() {
    const result = []
    for (
      let i = 0;
      i <= (this.tempoMax - this.tempoMin) / this.tempoStep;
      i++
    ) {
      let tempo = this.tempoMin + this.tempoStep * i;
      result.push(tempo);
    }
    this.tempoTests = result
  }
}

const calc = new Calc();

// // --- --- --- --- --- --- --- --- ---

// // TESTS

calc.fps = 30;
calc.dropFrame = false;
// ##STRETCHGOALS;
calc.tempoTarget = 128;
calc.tempoMin = 123;
calc.tempoMax = 137;
calc.tempoStep = 0.1;

let startOfCue = Timecode('01:03:22:18', calc.fps);
// let mk1 = Timecode('01:03:22:18', calc.fps).subtract(startOfCue);
// let mk2 = Timecode('01:03:31:10', calc.fps).subtract(startOfCue);
// let mk3 = Timecode('01:03:37:04', calc.fps).subtract(startOfCue);
// let mk4 = Timecode('01:03:52:10', calc.fps).subtract(startOfCue);
// let mk5 = Timecode('01:04:01:18', calc.fps).subtract(startOfCue);
let mk1 = Timecode('01:03:22:18', calc.fps).subtract(startOfCue);
let mk2 = Timecode('01:04:31:10', calc.fps).subtract(startOfCue);
let mk3 = Timecode('01:05:37:04', calc.fps).subtract(startOfCue);
let mk4 = Timecode('01:06:52:10', calc.fps).subtract(startOfCue);
let mk5 = Timecode('01:08:01:18', calc.fps).subtract(startOfCue);
// console.log(calc.tempoTests);
const mkTests = [mk1, mk2, mk3, mk4, mk5];
calc.markers = [mk1, mk2, mk3, mk4, mk5];
// console.log(mkTests);
// console.log(calc.markers);

const tempos = calc.suitableTempos(mkTests);
console.log(tempos[1]);
console.log(tempos[2]);
console.log(tempos[3]);

// // --- --- --- --- --- --- --- --- ---

export default calc;

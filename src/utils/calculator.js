const Timecode = require('smpte-timecode');

class Calc {
  constructor() {
    this.params = {
      fps: 'SET fps',
      dropFrame: 'SET dropFrame',
      tempoTarget: 'SET tempoTarget',
      tempoMin: 'SET tempoMin',
      tempoMax: 'SET tempoMax',
      tempoStep: 'SET tempoStep',
    };
    this.tempoTests = [];
    this.hitRange = {};
    this.hitRange.early = this.secToFrames(-0.1);
    this.hitRange.late = this.secToFrames(0.2);
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

    // ### maybe switch to const?
    let beatTarget = Math.round(mkSecond / tempoSecInt);
    const resultSec = (beatTarget * tempoSecInt - mkSecond).toFixed(3);

    if (resultSec < this.hitRange.earlySec || resultSec > this.hitRange.lateSec)
      return false;
    // bars and beats are 1-indexed
    return {
      beatTarget: beatTarget + 1,
      resultSec,
    };
  }

  suitableTempos(mkArray) {
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
    for (
      let i = 0;
      i <= (this.tempoMax - this.tempoMin) / this.tempoStep;
      i++
    ) {
      let tempo = this.tempoMin + this.tempoStep * i;
      this.tempoTests.push(tempo);
    }
  }
}

// // OLD NON-CLASS VERSION
// // imports
// const Timecode = require('smpte-timecode');

// // calculator object
// const calc = {};

// // calc methods
// calc.framesToSec = (frames) => {
//   const result = Number((1 / calc.fps) * frames).toFixed(3);
//   return result;
// };

// calc.secToFrames = (sec) => {
//   const result = Math.round(sec * calc.fps);
//   return result;
// };

// calc.calculateMarker = (mk, tempo) => {
//   const mkSecond = calc.framesToSec(mk.frameCount);
//   const tempoSecInt = 60 / tempo;

//   // ### maybe switch to const?
//   let beatTarget = Math.round(mkSecond / tempoSecInt);
//   const resultSec = (beatTarget * tempoSecInt - mkSecond).toFixed(3);

//   if (resultSec < calc.hitRange.earlySec || resultSec > calc.hitRange.lateSec)
//     return false;
//   // bars and beats are 1-indexed
//   return {
//     beatTarget: beatTarget + 1,
//     resultSec,
//   };
// };
// // calc methods that call other calc methods
// calc.suitableTempos = (mkArray) => {

//   let resultArr = [];

//   for (let i = 0; i < calc.tempoTests.length; i++) {
//     let skip = false;
//     let counter = 1;
//     let result = { beatTarget: 1, resultSec: '0.000' };
//     const obj = {
//       tempo: calc.tempoTests[i],
//       mae: 0,
//       mk1: result,
//     };
//     while (result && counter < mkArray.length) {
//       result = calc.calculateMarker(mkArray[counter++], calc.tempoTests[i]);
//       if (!result) {
//         skip = true;
//         break;
//       } else {
//         obj['mk' + counter] = result;
//         obj.mae += Math.abs(Number(result.resultSec));
//       }
//     }

//     obj['mae'] = Number((obj.mae / (counter - 1)).toFixed(3));

//     if (!skip) {
//       resultArr.push(obj);
//     }
//   }

//   return resultArr.sort((a, b) => a.mae - b.mae);
// };

// calc.fillTempoTests = () => {
//   for (let i = 0; i <= (calc.tempoMax - calc.tempoMin) / calc.tempoStep; i++) {
//     let tempo = calc.tempoMin + calc.tempoStep * i;
//     calc.tempoTests.push(tempo);
//   }
// }

// // calc default values
// calc.params = {
//   fps: 'SET fps',
//   dropFrame: 'SET dropFrame',
//   tempoTarget: 'SET tempoTarget',
//   tempoMin: 'SET tempoMin',
//   tempoMax: 'SET tempoMax',
//   tempoStep: 'SET tempoStep',
// };

// calc.tempoTests = [];

// // calc hitRange methods
// calc.hitRange = {};
// calc.hitRange.early = calc.secToFrames(-0.1);
// calc.hitRange.late = calc.secToFrames(0.2);
// calc.hitRange.earlySec = -0.1;
// calc.hitRange.lateSec = 0.2;

// // --- --- --- --- --- --- --- --- ---
// // --- --- --- --- --- --- --- --- ---
// // --- --- --- --- --- --- --- --- ---

// // TESTS

// const calc = new Calc();

// calc.fps = 30;
// calc.dropFrame = false;
// calc.tempoTarget = 128;
// calc.tempoMin = 123;
// calc.tempoMax = 137;
// calc.tempoStep = 0.1;

// let startOfCue = Timecode('01:03:22:18', calc.fps);
// let mk1 = Timecode('01:03:22:18', calc.fps).subtract(startOfCue);
// let mk2 = Timecode('01:03:31:10', calc.fps).subtract(startOfCue);
// let mk3 = Timecode('01:03:37:04', calc.fps).subtract(startOfCue);
// let mk4 = Timecode('01:03:52:10', calc.fps).subtract(startOfCue);
// let mk5 = Timecode('01:04:01:18', calc.fps).subtract(startOfCue);
// const mkTests = [mk1, mk2, mk3, mk4, mk5];

// calc.fillTempoTests();

// const tempos = calc.suitableTempos(mkTests, calc.tempoTests);
// console.log(tempos[1]);
// console.log(tempos[2]);
// console.log(tempos[3]);

// // --- --- --- --- --- --- --- --- ---
// // --- --- --- --- --- --- --- --- ---
// // --- --- --- --- --- --- --- --- ---

// const calc1 = new Calc();

// calc1.fps = 30;
// calc1.dropFrame = false;
// calc1.tempoTarget = 128;
// calc1.tempoMin = 123;
// calc1.tempoMax = 137;
// calc1.tempoStep = 0.1;

// let startOfCue1 = Timecode('01:01:22:18', calc1.fps);
// let mk1a = Timecode('01:01:22:18', calc1.fps).subtract(startOfCue1);
// let mk2a = Timecode('01:03:31:10', calc1.fps).subtract(startOfCue1);
// let mk3a = Timecode('01:03:38:04', calc1.fps).subtract(startOfCue1);
// let mk4a = Timecode('01:03:50:10', calc1.fps).subtract(startOfCue1);
// let mk5a = Timecode('01:04:00:18', calc1.fps).subtract(startOfCue1);
// const mkTestsA = [mk1a, mk2a, mk3a, mk4a, mk5a];

// calc1.fillTempoTests();

// const temposA = calc1.suitableTempos(mkTestsA, calc1.tempoTests);
// console.log('temposA: ', temposA[1]);
// console.log('temposA: ', temposA[2]);
// console.log('temposA: ', temposA[3]);

const calc = new Calc();

export default calc;

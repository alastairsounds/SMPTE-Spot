// imports
const Timecode = require('smpte-timecode');

// calculator object
const calc = {};

// calc methods
calc.framesToSec = (frames) => {
  const result = Number((1 / calc.fps) * frames).toFixed(3);
  return result;
};

calc.secToFrames = (sec) => {
  const result = Math.round(sec * calc.fps);
  return result;
};

calc.calculateMarker = (mk, tempo) => {
  const mkSecond = calc.framesToSec(mk.frameCount);
  const tempoSecInt = 60 / tempo;

  // ### maybe switch to const?
  let beatTarget = Math.round(mkSecond / tempoSecInt);
  const resultSec = (beatTarget * tempoSecInt - mkSecond).toFixed(3);

  if (resultSec < calc.hitRange.earlySec || resultSec > calc.hitRange.lateSec)
    return false;
  // bars and beats are 1-indexed
  return {
    beatTarget: beatTarget + 1,
    resultSec,
  };
};
// calc methods that call other calc methods
calc.suitableTempos = (mkArray, tempoArray) => {
  
  let resultArr = [];

  for (let i = 0; i < tempoArray.length; i++) {
    let skip = false;
    let counter = 1;
    let result = { beatTarget: 1, resultSec: '0.000' };
    const obj = {
      tempo: tempoArray[i],
      mae: 0,
      mk1: result,
    };
    while (result && counter < mkArray.length) {
      result = calc.calculateMarker(mkArray[counter++], tempoArray[i]);
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
};

calc.fillTempoTests = () => {
  for (let i = 0; i <= (calc.tempoMax - calc.tempoMin) / calc.tempoStep; i++) {
    let tempo = calc.tempoMin + calc.tempoStep * i;
    calc.tempoTests.push(tempo);
  }
}

// calc default values
calc.params = {
  fps: 'SET fps',
  dropFrame: 'SET dropFrame',
  tempoTarget: 'SET tempoTarget',
  tempoMin: 'SET tempoMin',
  tempoMax: 'SET tempoMax',
  tempoStep: 'SET tempoStep',
};

calc.tempoTests = [];

// calc hitRange methods
calc.hitRange = {};
calc.hitRange.early = calc.secToFrames(-0.1);
calc.hitRange.late = calc.secToFrames(0.2);
calc.hitRange.earlySec = -0.1;
calc.hitRange.lateSec = 0.2;

// --- --- --- --- --- --- --- --- ---
// --- --- --- --- --- --- --- --- ---
// --- --- --- --- --- --- --- --- ---

// TESTS

calc.fps = 30;
calc.dropFrame = false;
calc.tempoTarget = 128;
calc.tempoMin = 123;
calc.tempoMax = 137;
calc.tempoStep = 0.1;

let startOfCue = Timecode('01:03:22:18', calc.fps);
let mk1 = Timecode('01:03:22:18', calc.fps).subtract(startOfCue);
let mk2 = Timecode('01:03:31:10', calc.fps).subtract(startOfCue);
let mk3 = Timecode('01:03:37:04', calc.fps).subtract(startOfCue);
let mk4 = Timecode('01:03:52:10', calc.fps).subtract(startOfCue);
let mk5 = Timecode('01:04:01:18', calc.fps).subtract(startOfCue);
const mkTests = [mk1, mk2, mk3, mk4, mk5];

calc.fillTempoTests();

const tempos = calc.suitableTempos(mkTests, calc.tempoTests);
console.log(tempos[1]);
console.log(tempos[2]);
console.log(tempos[3]);

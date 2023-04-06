import * as types from '../constants/actionTypes';
import calc from '../utils/calculator';

const initialState = {
  fps: 24,
  dropFrame: false,
  // // ##STRETCHGOAL
  // tempoTarget: 128,
  tempoMin: 100,
  tempoMax: 140,
  tempoStep: 0.1,
  // // ##STRETCHGOAL
  // beats: 4,
  markers: [
    '01:00:00:00',
    '01:00:00:00',
    '01:00:00:00',
    '01:00:00:00',
    '01:00:00:00',
  ],
  length: 5,
  tempoFits: [
    {
      mae: 0.0,
      mk1: { beatTarget: 1, resultSec: '+0.000' },
      mk2: { beatTarget: 1, resultSec: '+0.000' },
      mk3: { beatTarget: 1, resultSec: '+0.000' },
      mk4: { beatTarget: 1, resultSec: '+0.000' },
      mk5: { beatTarget: 1, resultSec: '+0.000' },
      tempo: 120,
    },
  ],
};

const markersReducer = (state = initialState, action) => {
  // console.log(state);
  // console.log(calc);
  //

  switch (action.type) {
    case types.PARAMS_ON_BLUR:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    // --- --- --- --- --- --- --- --- ---
    // --- --- --- --- --- --- --- --- ---
    // --- --- --- --- --- --- --- --- ---
    case types.PREP_MARKERS:
      return {
        ...state,
        markers: action.payload,
      };
    // --- --- --- --- --- --- --- --- ---
    // --- --- --- --- --- --- --- --- ---
    // --- --- --- --- --- --- --- --- ---
    case types.CALC_FITS:
      // console.log('a');
      calc.params = {
        dropFrame: 'SET dropFrame',
        fps: 'SET fps',
        tempoMax: 'SET tempoMax',
        tempoMin: 'SET tempoMin',
        tempoStep: 'SET tempoStep',
      };
      calc.hitRange = {
        early: calc.secToFrames(-0.1),
        late: calc.secToFrames(0.2),
        earlySec: -0.1,
        lateSec: 0.2,
      };
      calc.tempoTests = state.markers;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default markersReducer;

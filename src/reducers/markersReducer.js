import * as types from '../constants/actionTypes';
import calc from '../utils/calculator';

const initialState = {
  fps: 30,
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
      calc.params = {
        fps: state.fps,
        dropFrame: state.dropFrame,
        tempoMax: state.tempoMax,
        tempoMin: state.tempoMin,
        tempoStep: state.tempoStep,
      };
      console.log()
      const newFits = calc.suitableTempos(state.markers);
      return {
        ...state,
        // the first 3 items of newFits
        // tempoFits: newFits,
        tempoFits: newFits.slice(0, 3),
      };
    // --- --- --- --- --- --- --- --- ---
    // --- --- --- --- --- --- --- --- ---
    // --- --- --- --- --- --- --- --- ---
    default:
      return state;
  }
};

export default markersReducer;

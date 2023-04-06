import * as types from '../constants/actionTypes';

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
      mae: 0.000,
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
  console.log(state)
  switch (action.type) {
    case types.PARAMS_ON_BLUR:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      };
    case types.CALC_MARKERS:
      return {
        ...state,
        markers: action.payload,
      };
    default:
      return state;
  }
};


export default markersReducer;

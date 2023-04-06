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
    '01:03:22:18',
    '01:03:31:10',
    '01:03:37:04',
    '01:03:52:10',
    '01:04:01:18',
  ],
  length: 5,
  stateTest: 'PEMDAS',
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
    default:
      return state;
  }
};


export default markersReducer;

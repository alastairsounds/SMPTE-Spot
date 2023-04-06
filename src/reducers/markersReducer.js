// import * as types from '../actions/actions';

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
  switch (action.type) {
    default:
      return state;
  }
};

export default markersReducer;

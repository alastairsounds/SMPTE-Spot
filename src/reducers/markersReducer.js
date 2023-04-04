import * as types from '../actions/actions';

const initialState = {
  tempoLow: 100,
  tempoHigh: 140,
  tempoStep: 0.1,
  fps: 24,
  beats: 4,
  markers: [],
};

const markersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default markersReducer;

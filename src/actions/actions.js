import * as types from '../constants/actionTypes';

export const paramsOnBlur = (name, value) => ({
  type: types.PARAMS_ON_BLUR,
  payload: {
    name,
    value,
  },
});

export const calcMarkers = (array) => ({
  type: types.CALC_MARKERS,
  payload: array,
});

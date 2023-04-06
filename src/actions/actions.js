import * as types from '../constants/actionTypes';

export const paramsOnBlur = (name, value) => ({
  type: types.PARAMS_ON_BLUR,
  payload: {
    name,
    value,
  },
});

export const prepMarkers = (array) => ({
  type: types.PREP_MARKERS,
  payload: array,
});

export const calcFits = () => ({
  type: types.CALC_FITS,
});
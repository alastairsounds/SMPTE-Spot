import * as types from '../constants/actionTypes';

export const paramsOnBlur = (name, value) => ({
  type: types.PARAMS_ON_BLUR,
  payload: {
    name,
    value,
  },
});

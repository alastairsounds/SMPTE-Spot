import { combineReducers } from 'redux';

// importing all reducers
import markersReducer from './markersReducer';

// combining all reducers
const reducers = combineReducers({
  markers: markersReducer,
});

// make the combined reducers available for import
export default reducers;

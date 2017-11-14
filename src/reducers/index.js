import { combineReducers } from 'redux';  // eslint-disable-line
import { routerReducer } from 'react-router-redux';

// ==============================
// Root Reducer
// ==============================
export default function createReducer(asyncReducers) {
  return combineReducers({
    routing: routerReducer,
    ...asyncReducers,
  });
}

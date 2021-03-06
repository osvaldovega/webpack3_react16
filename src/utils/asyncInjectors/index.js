import conformsTo from 'lodash/conformsTo';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import invariant from 'invariant';

import createReducer from '../../reducers';

// ======================================
// Check the Redux Store Shape
// ======================================
export function checkStore(store) {

  const shape = {
    dispatch: isFunction,
    subscribe: isFunction,
    getState: isFunction,
    replaceReducer: isFunction,
    asyncReducers: isObject,
  };

  invariant(
    conformsTo(store, shape),
    '(src/utils...) asyncInjectors: Expected a valid redux Store'
  );
}

// ======================================
// Function to Inject Reducers
// ======================================
export function injectAsyncReducer(store, isValid) {

  return function injectReducer(name, asyncReducer) {
    if (!isValid) checkStore(store);

    invariant(
      isString(name) && !isEmpty(name) && isFunction(asyncReducer),
      '(app/utils...) injectAsyncReducer: Expected `asyncReducer` to be a reducer function'
    );

    if (Reflect.has(store.asyncReducers, name)) return;

    store.asyncReducers[name] = asyncReducer; // eslint-disable-line no-param-reassign
    store.replaceReducer(createReducer(store.asyncReducers));
  };
}

// ======================================
// Function that return the Sagas and Reducers Injectors Functions
// ======================================
export function getAsyncInjectors(store) {
  checkStore(store);

  return {
    injectReducer: injectAsyncReducer(store, true),
  };
}

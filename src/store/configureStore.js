import { createStore, compose, applyMiddleware } from 'redux';  // eslint-disable-line
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import createReducer from '../reducers';


export const history = createHistory();

// ========================================
//  PRODUCTION
// ========================================
function configureStoreProd(initialState = {}) {
  const middlewares = [
    thunk,
    routerMiddleware(history),
  ];

  return createStore(createReducer(), initialState, compose(
    applyMiddleware(...middlewares)
    )
  );
}

// ========================================
//  DEVELOPMENT
// ========================================
function configureStoreDev(initialState = {}) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk,
    routerMiddleware(history),
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(createReducer(), initialState, composeEnhancers(
    applyMiddleware(...middlewares)
    )
  );

   // Extensions
   store.asyncReducers = {}; // Async reducer registry

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      import('../reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}

// ========================================
//  Output
// ========================================
const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;

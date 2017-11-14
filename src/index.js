import 'babel-polyfill';  // eslint-disable-line
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './containers/Root';
import './styles/index.scss';
require('./wp.ico');

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);


// ===============================================
// -- Hot Reload --
// ===============================================
if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const Root = require('./containers/Root').default;

    render(
      <AppContainer>
        <Root store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

import React, { Component } from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';
// import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        {/* <ConnectedRouter history={history}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* </ConnectedRouter> */}
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

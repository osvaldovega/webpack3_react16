import React from 'react';  // eslint-disable-line
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import MainRoutes from '../MainRoutes';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainRoutes />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;

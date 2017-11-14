import React from 'react'; // eslint-disable-line
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../components/HomePage';
import AboutPage from '../../components/AboutPage';
import NotFoundPage from '../../components/NotFoundPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </main>
);

export default Main;

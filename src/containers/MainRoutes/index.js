import React from 'react'; // eslint-disable-line
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../../components/Loading';
// import LoadingComponent from '../../utils/dynamicLoad';

// Async Component Load
const asyncHomePage = Loadable({
  loader: () => import('../../components/HomePage'),
  loading: Loading,
  delay: 300,
  timeout: 10000,
});

const asyncAboutPage = Loadable({
  loader: () => import('../../components/AboutPage'),
  loading: Loading,
  delay: 300,
  timeout: 10000,
});

const asyncNotFoundPage = Loadable({
  loader: () => import('../../components/NotFoundPage'),
  loading: Loading,
  delay: 300,
  timeout: 10000,
});

const Main = (props) => (
  <main>
    <Switch>
      <Route exact path="/" component={asyncHomePage} />
      <Route path="/about" component={asyncAboutPage} />
      <Route component={asyncNotFoundPage} />
    </Switch>
  </main>
);

export default Main;

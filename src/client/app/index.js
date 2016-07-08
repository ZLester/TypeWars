import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Landing from './components/Landing';
import About from './components/About';
import Profile from './components/Profile';
import Signin from './components/Signin';
import Play from './components/Play';
import NotFound from './components/NotFound';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="play" component={Play} />
      <Route path="profile" component={Profile} />
      <Route path="about" component={About} />
      <Route path="signin" component={Signin} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.getElementById('app'));

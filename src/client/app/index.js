import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Landing from './components/Landing';
import About from './components/About';
import Profile from './components/Profile';
import NoMatch from './components/NoMatch';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing}/>
      <Route path="about" component={About}/>
      <Route path="profile" component={Profile}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('app'));

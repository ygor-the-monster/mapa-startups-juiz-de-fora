import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './App.jsx';
import Map from './pages/Map.jsx';
import Register from './pages/Register.jsx';
import Admin from './pages/Admin.jsx';
import User from './pages/User.jsx';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Map}/>
      <Route path="/add" component={Register}/>
      <Route path="/user/:userName" component={User}/>
      <Route path="/admin" component={Admin}/>
    </App>
  </Router>,
  document.getElementById('root')
);

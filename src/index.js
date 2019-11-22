import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import DashboardComponent from './Dashboard/dashboard';

const routing = (
  <Router>
      <div id="routing-container">
          <Route path='/dashboard' component={DashboardComponent} ></Route>
      </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));


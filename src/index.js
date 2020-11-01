
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();
render(
  <Provider store={store}>
    <Router history={customHistory}>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path="/:id" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
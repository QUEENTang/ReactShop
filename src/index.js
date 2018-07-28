import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {HashRouter, Switch} from "react-router-dom"
import './mock/mockServer'

import store from "./redux/store"
import "./asset/css/reset.css"
import App from "./containers/App/App";

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <App/>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

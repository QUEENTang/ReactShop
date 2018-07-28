import React, {Component} from 'react';
import {Switch, Route, Redirect} from "react-router-dom"
import FirstShow from "../FirstShow/FirstShow";
import Home from "../Home/Home";
import Knowledge from "../Knowledge/Knowledge";
import Classify from "../Classify/Classify";
import Cart from "../Cart/Cart";
import Personal from "../Personal/Personal";
import Footer from "../../components/Footer/Footer"

import "./App.less"


class App extends Component {
  render() {

    const currentPath = this.props.location.pathname;

    return (
      <div className="app">
        <Switch>
          <Route path="/firstshow" component={FirstShow}/>
          <Route path="/home" component={Home}/>
          <Route path="/knowledge" component={Knowledge}/>
          <Route path="/classify" component={Classify}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/personal" component={Personal}/>
          <Route path="/" component={Footer}/>
        </Switch>
        {currentPath === "/personal" || currentPath === "/firstshow" || currentPath === "/" ? "" : <Footer/>}
      </div>
    );
  }
}

export default App;


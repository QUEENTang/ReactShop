import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import HomeHeader from "../../components/HomeHeader/HomeHeader"
import Recommend from "../../components/Recommend/Recommend"
import LiveHome from "../../components/LiveHome/LiveHome";
import {getHeadCate} from "../../redux/action"

class Home extends Component {

  componentDidMount () {
    this.props.getHeadCate();
  }
  render() {
    const headCateList = this.props.headCateList;

    return (
      <div>
        <HomeHeader headCateList={headCateList}/>
        <Switch>
          <Route path='/home/recommend' component={Recommend}/>
          <Route path='/home/livehome/:id' component={LiveHome}/>
        </Switch>
      </div>
    );
  }
}

export default connect(
  state => ({headCateList:state.headCateList}),
  {getHeadCate}
)(Home);
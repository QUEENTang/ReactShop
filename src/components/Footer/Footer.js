import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {withRouter} from "react-router-dom"
import "./Footer.less"

class Footer extends Component {

  //{this.props.location.pathname==='/homepage'?'active':null}
 activeBtn = (path) => {
    if(this.props.location.pathname===path){
      return
    }
    this.props.history.push(path)

  };

  render() {

    return (
      <div className="footer">
        <div className={`tab ${this.props.location.pathname === '/home/recommend' ? "on" : null}`} onClick={()=>{this.activeBtn('/home/recommend')}}>
            <span className="icon_img">
              <i className="iconfont icon-home"/>
            </span>
          <span className="text">首页</span>
        </div>
        <div className={`tab ${this.props.location.pathname === '/knowledge' ? "on" : null}`} onClick={()=>{this.activeBtn('/knowledge')}}>
            <span className="icon_img">
              <i className="iconfont icon-fangkuang"/>
            </span>
          <span className="text">识物</span>
        </div>
        <div className={`tab ${this.props.location.pathname === '/classify' ? "on" : null}`} onClick={()=>{this.activeBtn('/classify')}}>
            <span className="icon_img">
              <i className="iconfont icon-guizi"/>
            </span>
          <span className="text">分类</span>
        </div>
        <div className={`tab ${this.props.location.pathname === '/cart' ? "on" : null}`} onClick={()=>{this.activeBtn('/cart')}}>
            <span className="icon_img">
              <i className="iconfont icon-cart"/>
            </span>
          <span className="text">购物车</span>
        </div>
        <div className="tab" onClick={()=>{this.activeBtn('/personal')}}>
            <span className="icon_img">
              <i className="iconfont icon-geren"/>
            </span>
          <span className="text">个人</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);

/*import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './Footer.less'


class Footer extends Component {
  state = {

  }
  activeBtn=(path)=>{
    if(this.props.location.pathname===path){
      return
    }
    this.props.history.push(path)

  }
  //{this.props.location.pathname==='/homepage'?'active':null}
  render() {
    return (
      <div className="footer">
        <div onClick={()=>{this.activeBtn('/homepage')}} className="tab">
          <span className="icon_img">
              <i className="iconfont icon-geren"/>
            </span>
          <span className="text">个人</span>
        </div>
        <div  onClick={()=>{this.activeBtn('/knowledge')}} className="tab">
          <span className="icon_img">
              <i className="iconfont icon-geren"/>
            </span>
          <span className="text">个人</span>
        </div>
        <div onClick={()=>{this.activeBtn('/category')}} className="tab">
          <span className="icon_img">
              <i className="iconfont icon-geren"/>
            </span>
          <span className="text">个人</span>
        </div>
        <div onClick={()=>{this.activeBtn('/shop')}} className="tab">
          <span className="icon_img">
              <i className="iconfont icon-geren"/>
            </span>
          <span className="text">个人</span>
        </div>
        <div onClick={()=>{this.activeBtn('/personal')}} className="tab">
          <span className="icon_img">
              <i className="iconfont icon-geren"/>
            </span>
          <span className="text">个人</span>
        </div>
      </div>
    )
  }
}
export default withRouter(Footer);*/


import React, {Component} from 'react';
import {withRouter} from "react-router-dom"
import "./LoginHeader.less"


class LoginHeader extends Component {
  toHome = () => {
    this.props.history.replace('/home/recommend')
  };

  toCart = () => {
    this.props.history.replace("/cart")
  };
  render() {
    return (
      <div className="two_header">
        <header className="header">
          <div className="icon">
            <a className="icon_home" href="javascript:;" onClick={this.toHome}>
              <i className="iconfont icon-home"></i>
            </a>
            <a className="icon_search" href="javascript:;">
              <i className="iconfont icon-fenxiang"></i>
            </a>
            <a className="icon_cart" href="javascript:;" onClick={this.toCart}>
              <i className="iconfont icon-cart"></i>
            </a>
          </div>
          <div className="to_home">
            <a href="javascript:;">
              <span>网易严选</span>
            </a>
          </div>
        </header>
        <div className="login_header">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginHeader);

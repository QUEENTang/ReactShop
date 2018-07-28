import React, {Component} from 'react';
import "./HomeHeader.less"
import {withRouter} from 'react-router-dom'
import BScroll from "better-scroll"
import PubSub from "pubsub-js"

class HomeHeader extends Component {

  componentDidMount(){
    new BScroll (".header_nav", {
      scrollX: true
    })
  }

  toTarget = (path) => {
    if(this.props.location.pathname === path) {
      return
    }
    this.props.history.push(path)
  };
  toLiveHome = (path) => {
    if(this.props.location.pathname === path) {
      return
    }
    this.props.history.replace(path);

  };

  render() {
    let {headCateList} = this.props;

    return (
      <div className="header">
        <div className="header_search">
          <span className="header_title">网易严选</span>
          <div className="search_goods">
            <i className="iconfont icon-fenxiang"/>
            <span className="text">搜索商品，共10719款好物</span>
          </div>
        </div>
        <nav className="header_nav">
          <div className="list">
            <span className={`list_text ${this.props.location.pathname === "/home/recommend" ? "active" : null}`}
                  onClick={() => this.toTarget('/home/recommend')}>推荐</span>
            {
              headCateList.map((item, index) => (
                <span className={`list_text ${this.props.location.pathname === `/home/livehome/${item.id}` ? "active" : null}`} key={index}
                      onClick={() => this.toLiveHome(`/home/livehome/${item.id}`, index)}>{item.name}</span>
              ))
            }
          </div>
        </nav>
      </div>
    );
  }
}
export default withRouter (HomeHeader);

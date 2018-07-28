import React, {Component} from 'react';
import "./Cart.less"

class Cart extends Component {

  toLogin = () => {
    this.props.history.push('/personal')
  };

  render() {
    return (
      <div className="cart">
        <header className="header">
          <div className="title">
            购物车
          </div>
          <div className="good">
            领劵
          </div>
        </header>
        <div className="discount">
          <span>30天无忧退货</span>
          <span>48小时快速退款</span>
          <span>满88元免邮费</span>
        </div>
        <div className="content">
          <div className="icon">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png"/>
          </div>
          <div className="word">
            去添加点什么吧
          </div>
        </div>
        <div className="btn" onClick={this.toLogin}>
          登录
        </div>
      </div>
    );
  }
}

export default Cart;

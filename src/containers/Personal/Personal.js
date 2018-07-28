import React, {Component} from 'react';
import "./Personal.less"
import LoginHeader from "../../components/LoginHeader/LoginHeader"

class Personal extends Component {

  state = {
    isShow: 0,
    isHidden: false
  };

  toHome = () => {
    this.props.history.replace('/home/recommend')
  };

  toCart = () => {
    this.props.history.replace('/cart')
  };

  toLoginP = () => {
    this.setState({
      isShow: 1
    });
  };
  toLoginE = () => {
    this.setState({
      isShow: 2
    });
  };
  toPhoneR = () => {
    this.setState({
      isShow: 3
    });
  };
  render() {

    const {isShow} = this.state;

    return (
      <div className="personal">
        {
          isShow !== 0 ? "" : <div className="login">
            <header className="header">
              <div className="icon">
                <a className="icon_home" href="javascript:;"  onClick={this.toHome}>
                  <i className="iconfont icon-home"/>
                </a>
                <a className="icon_search" href="javascript:;">
                  <i className="iconfont icon-fenxiang"/>
                </a>
                <a className="icon_cart" href="javascript:;" onClick={this.toCart}>
                  <i className="iconfont icon-cart"/>
                </a>
              </div>
              <div className="to_home">
                <a href="javascript:;">
                  <span>网易严选</span>
                </a>
              </div>
            </header>
            <div className="top_icon">
              <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
            </div>
            <div className="phone" onClick={this.toLoginP}>
              <i className="iconfont icon-shouji"/>
              手机号码登录
            </div>
            <div className="email" onClick={this.toLoginE}>
              <i className="iconfont icon-youxiang"/>
              邮箱账号登录
            </div>
            <div className="fast_phone" onClick={this.toPhoneR}>
              手机号快捷注册 <i className="iconfont icon-right1"/>
            </div>
            <div className="login_way">
            <span>
              <i className="iconfont icon-wechat"/>
              微信
            </span>
              <span>|</span>
              <span>
              <i className="iconfont icon-qq"></i>
              QQ
            </span>
              <span>|</span>
              <span>
                <i className="iconfont icon-weibo"></i>
                微博
              </span>
            </div>
          </div>
        }
        {
          isShow !== 1 ? "" : <div className="login_phone">{/*{`login_phone ${isPhone === 1 ? "bg_color" : "hidden"}`}*/}
            <LoginHeader/>
            <div className="content">
              <div className="enter">
                <input type="tel" maxLength="11" placeholder="请输入手机号"/>
              </div>
              <div className="yzm">
                <input type="tel" placeholder="请输入短信验证码"/>
                <div className="getyzm">获取验证码</div>
              </div>
              <div className="qusetion">
                <a href="javascript: ;">遇到问题</a>
                <div className="yz">使用密码登录验证</div>
              </div>
              <div className="ok">
                登录
              </div>
              <div className="other" onClick={this.toLoginE}>
                其他方式登录
              </div>
              <div className="register">
                注册账号 <i className="iconfont icon-right1"/>
              </div>
            </div>
          </div>
        }
        {
          isShow !== 2 ? "" : <div className="email_login">
            <LoginHeader/>
            <div className="content">
              <div className="enter">
                <input type="tel" placeholder="邮箱账号"/>
              </div>
              <div className="yzm">
                <input type="tel" placeholder="密码"/>
              </div>
              <div className="qusetion">
                <div className="yz left_ques">注册账号</div>
                <a href="javascript: ;" className="left_ques">忘记密码</a>
              </div>
              <div className="ok">
                登录
              </div>
              <div className="other" onClick={this.toLoginP}>
                其他方式登录
              </div>
            </div>
          </div>
        }
        {
          isShow !== 3 ? "" : <div className="phone_register">
            <LoginHeader/>
            <div className="content">
              <div className="enter">
                <input type="tel" maxLength="11" placeholder="请输入手机号"/>
              </div>
              <div className="yzm">
                <input type="tel" placeholder="请输入短信验证码"/>
                <div className="getyzm">获取验证码</div>
              </div>
              <div className="password">
                <input type="tel" placeholder="请输入密码"/>
              </div>
              <div className="go_register">
                注册
              </div>
              <div className="agree">
                <span className="gray">我同意</span>
                <span className="blue">《服务条款》</span>
                <span className="gray">和</span>
                <span className="blue">《网易隐私政策》</span>
              </div>
              <div className="fast_email">
                邮箱账号注册 <i className="iconfont icon-right1"></i>
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Personal;

import React, {Component} from 'react';
import "./firstShow.less";

class FirstShow extends Component {
  toHome = () => {
    this.props.history.replace('/home/recommend')
  };


  render() {


    return (
      <div className="first_show">
        <div className="picture">
          <img src="http://yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg"/>
          <img src="http://yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg"/>
        </div>
        <div className="tiaozhuan">
          <img src="http://yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg"/>
          <a className="continue" onClick={this.toHome}/>
        </div>
      </div>
    );
  }
}

export default FirstShow;

import React, {Component} from 'react';
import {connect} from "react-redux"
import {withRouter } from 'react-router-dom'
import "./LiveHome.less"
import {getHeadCate} from "../../redux/action"
import PunSub from "pubsub-js"
import Split from "../../components/Split/Split"


class LiveHome extends Component {
  componentDidMount () {
    this.props.getHeadCate();

    /*PunSub.subscribe("toLiveHome", (msg, index) => {
      this.setState({
        Index: index
      })
    })*/
  }

  render() {
    let headCateList = this.props.headCateList;
    let id = this.props.match.params.id*1;
    if(!headCateList) {
      headCateList = []
    }

    let headCate = headCateList.find((item, index) => {
      return item.id === id;

    });
    if(!headCate) {
      headCate = {}
    }
    return (
      <div className="wrap">
        <section className="livehome">
          <div className="title_img">
            <img src={headCate.imgUrl}/>
          </div>
          <Split/>
          {
            !headCate.subCateList ? "" : <div className="goods">
                <div className="thing_title">
                  <p className="title">夏凉</p>
                  <p className="detail">夏凉床品，舒适一夏</p>
                </div>
                {
                  headCate.subCateList.map ((list, index) => {
                    return (
                      <div className="thing_list" key={index}>
                        <div className="thing" >
                          <div className="img_text">
                            <img src={list.wapBannerUrl}/>
                            <div className="detail">
                              {list.frontDesc}
                            </div>
                          </div>
                          <div className="title">
                            自然棉麻四件套
                          </div>
                          <div className="price">
                            ￥<span>599</span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }

              <Split/>
            </div>
          }

        </section>

      </div>
    );
  }
}

export default connect(
  state => ({headCateList:state.headCateList}),
  {getHeadCate}
)(withRouter(LiveHome));


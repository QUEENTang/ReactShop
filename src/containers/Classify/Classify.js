import React, {Component} from 'react';
import {connect} from "react-redux"
import "./Classify.less"
import BScroll from "better-scroll"

import {
  getCategory
} from "../../redux/action"
class Classify extends Component {

  state = {
    activeIndex: 0,
    goodsIndex: 0
  };

  componentDidMount () {
    this.props.getCategory();

    new BScroll(".left_classic", {
      scrollY: true
    });

    new BScroll(".right_goods", {
      scrollY: true
    });
  }

  toChange = (index) => {
    this.setState({
      activeIndex: index,
      goodsIndex: index
    })
  };

  render() {
    const {category} = this.props;
    const {activeIndex, goodsIndex} = this.state;

    return (
      <div className="classify">
        <header className="header">
          <div className="search">
            <div className="content"><i className="iconfont icon-fenxiang"/>搜索商品，共10856款好物</div>
          </div>
        </header>
        <div className="middle">
          <div className="left_classic">
            <div className="wrap">
              <div className="classic">
                <ul className="type">
                  {
                    category.map ((cate, index) => {
                      return (
                        <li className={`title ${activeIndex === index ? "active" : null}`} key={index} onClick={() => this.toChange(index)}>{cate.name}</li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="right_goods">
            <div className="wrap">
              {
                category.map ((goods, index) => {
                  if(goodsIndex === index) {
                    return (
                      <div className="goods" key={index}>
                        <div className="top_img">
                          <img src={goods.bannerUrl}/>
                        </div>
                        <div className="goods_list">
                          <div className="title">
                            <span>—</span>
                            <span>{goods.name}分类</span>
                            <span>—</span>
                          </div>
                          <ul className="goods_show">
                            {
                              category[index].subCateList.map ((list, index) =>{
                                return (
                                  <li className="only" key={index}>
                                    <div className="img">
                                      <img src={list.wapBannerUrl}/>
                                    </div>
                                    <div className="detail">
                                      {list.name}
                                    </div>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({category: state.category}),
  {getCategory}
)(Classify);

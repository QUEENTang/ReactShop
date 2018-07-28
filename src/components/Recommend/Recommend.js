import React, {Component} from 'react';
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import BScroll from "better-scroll"
import {connect} from "react-redux"

import Split from "../Split/Split"

import {
  getFocusList,
  getTagList,
  getNewItemList,
  getPopularItemList,
  getFlashSaleIndexVO,
  getTopicList,
  getCateList
} from "../../redux/action"

import "./Recommend.less"


class Recommend extends Component {

  componentDidMount() {
    this.props.getFocusList();
    this.props.getTagList();
    this.props.getNewItemList();
    this.props.getPopularItemList();
    this.props.getFlashSaleIndexVO();
    this.props.getTopicList();
    this.props.getCateList();
    /*let updateSwiper = () => {
      console.log(document.getElementsByClassName('swiper-pagination')[0].children.length);
      if(document.getElementsByClassName('swiper-pagination')[0].children.length){
        console.log(document.getElementsByClassName('swiper-pagination')[0].children.length);
        return;
      }
      window.requestAnimationFrame(updateSwiper)

      this.swiperId = new Swiper('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }*/
    // window.requestAnimationFrame(updateSwiper)

    new BScroll(".new_goods_list", {
      scrollX: true,
      eventPassthrough: "vertical"
    });
    new BScroll(".hot_goods_list", {
      scrollX: true,
      eventPassthrough: "vertical"
    });
    new BScroll(".select_goods", {
      scrollX: true,
      eventPassthrough: "vertical"
    });
  };

  componentWillUpdate() {
    if(this.swiperId){
      this.swiperId.destroy()
    }
    // this.swiperId = null;
    /*if(!this.swiperId) {
      // console.log('xxx');
      this.swiperId = new Swiper('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }*/
  };

  componentDidUpdate () {
    // if(!this.swiperId) {
      this.swiperId = new Swiper('.swiper-container', {
        loop: true,
        autoPlay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      })
    // }
  }
//destory

  render() {
    const {focusList, tagList, newItemList, popularItemList, flashSaleIndexVO, topicList, cateList} = this.props;

    return (
      <div className="recommend">
        {/*<!--轮播-->*/}
        <div className="lunbo">
          {/*<!--轮播-->*/}
          <div className="lunbo_img">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  focusList.map((focus, index) => (
                    <div className="swiper-slide" key={index}>
                      <img src={focus.picUrl}/>
                    </div>
                  ))
                }

              </div>
              {/*<!-- 如果需要分页器 -->*/}
              <div className="swiper-pagination"></div>
            </div>
          </div>
          {/*<!--文字-->*/}
          <div className="lunbo_text">
              <span className="text_all">
                <i className="iconfont icon-right"></i>
                <span>网易自营品牌</span>
              </span>
            <span className="text_all">
                <i className="iconfont icon-right"></i>
                <span>30天无忧退货</span>
              </span>
            <span className="text_all">
                <i className="iconfont icon-right"></i>
                <span>48小时快速退款</span>
              </span>
          </div>
        </div>
        <Split/>
        {/*<!--品牌制造商直供-->*/}
        <div className="brand">
          <div className="brand_title">
            <span>品牌制造商直供</span>
            <i className="iconfont icon-right_b"></i>
          </div>
          <div className="brand_goods">
            {
              tagList.map((tag, index) => {
                if(index>=4) {
                  return ""
                }
                return (
                  <div className="goods_all" key={index}>
                    <div className="goods_detail">
                      <span className="name">{tag.name}</span>
                      <span className="price">
                        <span>{tag.floorPrice}</span>
                        <span>元起</span>
                      </span>
                    </div>
                    <img src={tag.picUrl}/>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Split/>
        {/*<!--新品首发-->*/}
        <div className="new_goods">
          {/*<!--新品首发-->*/}
          <div className="new_title">
            <span>新品首发</span>
            <div className="see_a">
              查看全部
              <i className="iconfont icon-right1"/>
            </div>
          </div>
          {/*<!--商品-->*/}
          <div className="new_goods_list">
            <div className="new_list">
              {
                newItemList.map((newItem, index) => {
                  return (
                    <span className="list_goods" key={index}>
                      <span className="goods_img">
                        <img src={newItem.listPicUrl}/>
                      </span>
                      <span className="goods_brief">
                        <span className="name">{newItem.name}</span>
                        <span className="effect">{newItem.simpleDesc}</span>
                        <span className="price">￥{newItem.retailPrice}</span>
                      </span>
                    </span>
                  )
                })
              }
            </div>
          </div>
        </div>
        <Split/>
        {/*<!--人气推荐-->*/}
        <div className="hot_goods">
          {/*<!--人气推荐-->*/}
          <div className="hot_title">
            <span>人气推荐 · 好物精选</span>
            <div className="see_a">
              查看全部
              <i className="iconfont icon-right1"></i>
            </div>
          </div>
          {/*<!--商品-->*/}
          <div className="hot_goods_list">
            <div className="hot_list">
              {
                popularItemList.map((popular, index) => {
                  return (
                    <span className="list_goods" key={index}>
                      <span className="goods_img">
                        <img src={popular.listPicUrl}/>
                      </span>
                      <span className="goods_brief">
                        <span className="name">{popular.name}</span>
                        <span className="effect">{popular.simpleDesc}</span>
                        <span className="price">￥{popular.retailPrice}</span>
                      </span>
                    </span>
                  )
                })
              }
            </div>
          </div>
        </div>
        <Split/>
        {/*<!--严选限时购-->*/}
        {/*<!--时间没弄-->*/}
        <div className="choose">
          <div className="choose_time">
            <div className="title">严选限时购</div>
            <div className="time">
              <span className="time_show">02</span><a>:</a><span className="time_show">35</span><a>:</a><span className="time_show">xx</span>
            </div>
            <div className="next">下一场 22:00 开始</div>
            {/*<!--{{flashSaleIndexVO.nextStartTime}}-->*/}
          </div>
          <div className="choose_img">
            <div className="img">
              <img src={flashSaleIndexVO.primaryPicUrl}/>
            </div>
            <div className="price">
                <span className="cheap">
                  <span>￥</span><span>{flashSaleIndexVO.activityPrice}</span>
                </span>
                <span className="expensive">
                  <span>￥</span><span>{flashSaleIndexVO.originPrice}</span>
                </span>
            </div>
          </div>
        </div>
        <Split/>
        {/*<!--福利社-->*/}
        <div className="good"></div>
        <Split/>
        {/*<!--专题选购-->*/}
        <div className="select">
          <div className="select_title">
            <span>专题选购</span>
            <i className="iconfont icon-right_b"></i>
          </div>
          <div className="select_goods">
            <div className="wrap">
              {
                topicList.map((topic, index) => {
                  if(index>=2) {
                    return ""
                  }
                  return (
                    <div className="select_goods_img" key={index}>
                      <img src={topic.itemPicUrl}/>
                      <div className="goods_detail">
                        <span className="title">{topic.title}</span>
                        <span className="red">
                          <span>{topic.priceInfo}</span><span>元起</span>
                        </span>
                      </div>
                      <div className="detail"><span>{topic.subtitle}</span></div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
        <Split/>
        {/*<!--居家好物-->*/}
        {/*<!--遍历使用-->*/}
        {
          cateList.map((cate, index) => {
            return (
              <div className="good_thing" key={index}>
                <div className="thing_title">
                  <span>{cate.name}</span>
                </div>
                <div className="thing_list">
                  {
                    cate.itemList.map ((item, index) => {
                      return (
                        <div className="thing" key={index}>
                          <div className="img_text">
                            <img src={item.listPicUrl}/>
                            <div className="detail">
                              {item.simpleDesc}
                            </div>
                          </div>
                          <div className="title">
                            {item.name}
                          </div>
                          <div className="price">
                            ￥<span>{item.retailPrice}</span>
                          </div>
                        </div>
                        )
                    })
                  }

                </div>
                <Split/>
              </div>
            )
          })
        }

        {/*<!--footer-->*/}
        <footer className="recommend_footer">
          <div className="footer_text">
            <div className="chooce">
              <a>下载App</a>
              <a>电脑版</a>
            </div>
            <p className="detail">
              <span>网易公司版权所有 © 1997-</span>
              <span>2018</span>
            </p>
            <p className="detail">食品经营许可证：JY13301080111719</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default connect(
  state => ({
    focusList: state.focusList,
    tagList:state.tagList,
    newItemList: state.newItemList,
    popularItemList: state.popularItemList,
    flashSaleIndexVO: state.flashSaleIndexVO,
    topicList: state.topicList,
    cateList: state.cateList,
  }),
  {
    getFocusList,
    getTagList,
    getNewItemList,
    getPopularItemList,
    getFlashSaleIndexVO,
    getTopicList,
    getCateList
  }
)(Recommend)

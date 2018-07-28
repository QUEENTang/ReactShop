import React, {Component} from 'react';
import Footer from "../../components/Footer/Footer"
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import BScroll from "better-scroll"
import Split from "../../components/Split/Split"
import "./Knowledge.less"
import {connect} from "react-redux"

import {
  getBanner,
  getColumn,
  getFindMore,
  getRecommend,
  getTenfifteen,
  getYxLook,
  getZhenpin
} from "../../redux/action"

class Knowledge extends Component {
  componentDidMount() {
    this.props.getBanner();
    this.props.getColumn();
    this.props.getFindMore();
    this.props.getRecommend();
    this.props.getTenfifteen();
    this.props.getYxLook();
    this.props.getZhenpin();


    new BScroll(".recommend", {
      scrollX: true,
      eventPassthrough: "vertical"
    });
    new BScroll(".today", {
      scrollX: true,
      eventPassthrough: "vertical"
    })
  };

  componentWillUpdate() {
    if(this.swiperId) {
      this.swiperId.destroy()
    }
  }
  componentDidUpdate() {
      this.swiperId = new Swiper ('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
      });
  }

  toHome = () => {
    this.props.history.replace('/home/recommend')
  };

  toCart = () => {
    this.props.history.replace('/cart')
  };
  render() {

    const {banner, column, findMore, recommend, tenfifteen, yxLook, zhenpin,} = this.props;
    return (
      <div className="konwlegde">
        <header className="header">
          <div className="icon">
            <a className="icon_home" href="javascript:;"  onClick={this.toHome}>
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
        {/*// <!--轮播-->*/}
        <div className="lunbo">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                banner.map((banner, index) => {
                  return (
                    <div className="swiper-slide" key={index}>
                      <img src={banner.picUrl}/>
                      <div className="detail">
                        <p className="title">— {banner.subTitle} —</p>
                        <p className="must">{banner.title}</p>
                        <p className="classic">{banner.desc}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        {/*<!--文章 article-->*/}
        <div className="recommend">
          <div className="wrap">
            {
              column.map((column, index) => {
                return (
                  <div className="recommend_article" key={index}>
                    <div className="bg_img">
                      <div className="img">
                        <img src={column.picUrl}/>
                      </div>
                      <div className="article">
                        {column.articleCount}&nbsp;
                      </div>
                    </div>
                    <div className="from">
                      {column.title}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <Split/>
        {/*<!--为你推荐-->*/}
        <div className="for_you">
          <div className="fy_title">
            <span>为你推荐</span>
          </div>
          <div className="recommend_content">
            {
              !recommend.recommendBanner ? "" : <div className="recommend_list">
                <div className="yanxuan_rec">
                  <div className="rec_img">
                    <div className="bg_img">
                      <img src={recommend.recommendBanner.picUrl}/>
                    </div>
                    <div className="title">{recommend.recommendBanner.nickname}</div>
                  </div>
                  <div className="detail">
                    <div className="describe">
                      <span className="des">{recommend.recommendBanner.title}</span>
                      <span className="price">
                      <span>{recommend.recommendBanner.priceInfo}</span><span>元起</span>
                    </span>
                    </div>
                    <div className="details">
                      <span>{recommend.recommendBanner.subtitle}</span>
                    </div>
                  </div>
                </div>
                  {
                    recommend.recommends.map  ((rec, index) => {
                      return (
                        <div className="good_goods" key={index}>
                          <div className="text">
                  <span className="username">
                    <span className="img">
                      <img src={rec.avatar}/>
                    </span>
                    <span className="name">{rec.nickname}</span>
                  </span>
                            <span className="describe">{rec.title}</span>
                            <span className="detail">{rec.subtitle}</span>
                          </div>
                          <div className="bg_img">
                            <div className="img">
                              <img src={rec.picUrl}/>
                            </div>
                            <div className="dinglei_recommend">{rec.typeName}</div>
                          </div>
                        </div>
                      )
                    })
                  }
              </div>
            }
          </div>
        </div>
        <Split/>
        {/*<!--十点一刻-->*/}
        <div className="every_topic">
          <div className="topic_title">
            <span>十点一刻</span>
          </div>
          <div className="today">
            <div className="wrap">
              {
                tenfifteen.map ((ten,index) => {
                  return (
                    <div className="content" key={index}>{/* v-for="(ten, index) in tenfifteen" :key="index"*/}
                      <div className="detail">
                        <p className="title">— 今日话题 —</p>
                        <p className="about">{ten.title}</p>
                        <p className="talk">{ten.desc}</p>
                      </div>
                      <div className="users">
                        <div className="icon">
                          {
                            ten.participantAvatar.map((pic, index) => {
                              return (
                                <img src={ten.participantAvatar[index]} key={index}/>
                              )
                            })
                          }
                        </div>
                        <div className="point">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <div className="people">
                          <span>{ten.participantNum}</span>
                          <span>人参与话题</span>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <div className="see">
                <div className="see_more">查看全部话题<i className="iconfont icon-right_b"></i></div>
              </div>
            </div>
          </div>
        </div>
        <Split/>
        {/*<!--严选甄品-->*/}
        <div className="zhenpin">
          <div className="fy_title">
            <span>严选甄品</span>
          </div>
          <div className="recommend_content">
            {
              !zhenpin.zhenOne ? "" : <div className="recommend_list">
                <div className="yanxuan_rec">
                  <div className="rec_img">
                    <div className="bg_img">
                      <img src={zhenpin.zhenOne.picUrl}/>
                    </div>
                    <div className="title">{zhenpin.zhenOne.nickname}</div>
                  </div>
                  <div className="detail">
                    <div className="describe">
                      <span className="des">{zhenpin.zhenOne.title}</span>
                      <span className="price">
                        <span>{zhenpin.zhenOne.priceInfo}</span><span>元起</span>
                      </span>
                    </div>
                    <div className="details">
                      <span>{zhenpin.zhenOne.subtitle}</span>
                    </div>
                  </div>
                </div>
                  {
                    zhenpin.zhenpins.map ((zhen, index) => {
                      return (
                        <div className="good_goods" key={index}>
                          <div className="text">
                            <span className="describe">{zhen.title}</span>
                            <span className="detail">{zhen.subtitle}</span>
                          </div>
                          <div className="bg_img">
                            <div className="img">
                              <img src={zhen.picUrl}/>
                            </div>
                            <div className="dinglei_recommend">{zhen.typeName}</div>
                          </div>
                        </div>
                      )
                    })
                  }
              </div>
            }

          </div>
        </div>
        <Split/>
        {/*<!--严选LOOK-->*/}
        <div className="select_look">
          <div className="look_title">
            <span>严选LOOK</span>
          </div>
          <div className="video">
            <img className="jpg" src={yxLook.picUrl}/>
            <div className="yanxuans">
              <p className="xuanmei">
                <span className="header_img">
                  <img src={yxLook.avatar}/>
                </span>
                <span className="name">{yxLook.nickname}</span>
              </p>
              <p className="text">{yxLook.content}</p>
            </div>
          </div>
        </div>
        {/*<!--更多精彩-->*/}
        <div className="more_wondful">
          <div className="title">
            <div className="line"></div>
            <div className="text">更多精彩</div>
            <div className="line"></div>
          </div>
          {
            findMore.map ((find, index) => {
              if (find.picList.length === 0) {
                return (
                  <div className="goods" key={index}>
                    <div className="goods_list_one">
                      <div className="one_goods">
                        <div className="img">
                          <img src={find.itemPicUrl}/>
                        </div>
                        <div className="descibe">
                    <span>
                      {find.subtitle}
                    </span>
                        </div>
                      </div>
                      <div className="split"></div>
                    </div>
                  </div>
                )
              }else {
                return (
                  <div className="goods" key={index}>
                    <div className="goods_list_three" v-show="find.picList.length">
                      <div className="three_goods">
                        <div className="img">
                          <div className="left_img">
                            <img src={find.itemPicUrl}/>
                          </div>
                          <div className="right_img">
                            <img className="top_img" src={find.picList[0]}/>
                            <img src={find.picList[1]}/>
                          </div>
                        </div>
                        <div className="descibe">
                    <span>
                      {find.title}
                    </span>
                        </div>
                      </div>
                      <div className="split"></div>
                    </div>
                  </div>
                )
              }
            })
          }

        </div>
        <Footer/>
      </div>
    );
  }
}

export default connect(
  state => ({
    banner: state.banner,
    column: state.column,
    findMore: state.findMore,
    recommend: state.recommend,
    tenfifteen: state.tenfifteen,
    yxLook: state.yxLook,
    zhenpin: state.zhenpin,
  }),
  {
    getBanner,
    getColumn,
    getFindMore,
    getRecommend,
    getTenfifteen,
    getYxLook,
    getZhenpin
  }
)(Knowledge);

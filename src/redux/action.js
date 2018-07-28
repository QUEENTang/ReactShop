import {
  RECEIVE_HEADCATE,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_BANNERS,
  RECEIVE_CATEGORY,
  RECEIVE_CATELIST,
  RECEIVE_COLUMNS,
  RECEIVE_FINDMORE,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_TOPICLIST,
  RECEIVE_YXLOOK,
  RECEIVE_ZHENPIN
} from "./action-types"
import {
  reqHeadCateList,
  reqFocusList,
  reqTagList,
  reqNewItemList,
  reqBanner,
  reqCategory,
  reqCateList,
  reqColumn,
  reqFindMore,
  reqFlashSaleIndexVO,
  reqPopularItemList,
  reqRecommend,
  reqTenfifteen,
  reqTopicList,
  reqYxLook,
  reqZhenpin
} from "../api"
//头部导航数据
const HeadCateList = (headCates) => ({type: RECEIVE_HEADCATE, data: headCates});
export const getHeadCate = () => {
  return async dispatch => {
    const result = await reqHeadCateList();
    if(result.code === 0 ) {
      const headCates = result.data;
      dispatch(HeadCateList(headCates))
    }
  }
};
//首页轮播图
const FocusList = (focusList) => ({type: RECEIVE_FOCUSLIST, data: focusList});
export const getFocusList = () => {
  return async dispatch => {
    const result = await reqFocusList();
    if(result.code === 0 ) {
      const focusList = result.data;
      dispatch(FocusList(focusList))
    }
  }
};
// 品牌制造商
const TagList = (tagList) => ({type: RECEIVE_TAGLIST, data: tagList});
export const getTagList = () => {
  return async dispatch => {
    const result = await reqTagList();
    if(result.code === 0 ) {
      const tagList = result.data;
      dispatch(TagList(tagList))
    }
  }
};
//新品首发
const NewItemList = (newItemList) => ({type: RECEIVE_NEWITEMLIST, data: newItemList});
export const getNewItemList = () => {
  return async dispatch => {
    const result = await reqNewItemList();
    if(result.code === 0 ) {
      const newItemList = result.data;
      dispatch(NewItemList(newItemList))
    }
  }
};
// 人气推荐
const PopularItemList = (popularItemList) => ({type: RECEIVE_POPULARITEMLIST, data: popularItemList});
export const getPopularItemList = () => {
  return async dispatch => {
    const result = await reqPopularItemList();
    if(result.code === 0 ) {
      const popularItemList = result.data;
      dispatch(PopularItemList(popularItemList))
    }
  }
};
// 严选限时购
const FlashSaleIndexVO = (flashSaleIndexVO) => ({type: RECEIVE_FLASHSALEINDEXVO, data: flashSaleIndexVO});
export const getFlashSaleIndexVO = () => {
  return async dispatch => {
    const result = await reqFlashSaleIndexVO();
    if(result.code === 0 ) {
      const flashSaleIndexVO = result.data;
      dispatch(FlashSaleIndexVO(flashSaleIndexVO))
    }
  }
};
//专题选购
const TopicList = (topicList) => ({type: RECEIVE_TOPICLIST, data: topicList});
export const getTopicList = () => {
  return async dispatch => {
    const result = await reqTopicList();
    if(result.code === 0 ) {
      const topicList = result.data;
      dispatch(TopicList(topicList))
    }
  }
};
// 居家好物
const CateList = (cateList) => ({type: RECEIVE_CATELIST, data: cateList});
export const getCateList = () => {
  return async dispatch => {
    const result = await reqCateList();
    if(result.code === 0 ) {
      const cateList = result.data;
      dispatch(CateList(cateList))
    }
  }
};

//识物轮播图
const Banner = (banner) => ({type: RECEIVE_BANNERS, data: banner});
export const getBanner = () => {
  return async dispatch => {
    const result = await reqBanner();
    if(result.code === 0 ) {
      const banner = result.data;
      dispatch(Banner(banner))
    }
  }
};
// 各种推荐
const Column = (column) => ({type: RECEIVE_COLUMNS, data: column});
export const getColumn = () => {
  return async dispatch => {
    const result = await reqColumn();
    if(result.code === 0 ) {
      const column = result.data;
      dispatch(Column(column))
    }
  }
};
//更多精彩
const FindMore = (findMore) => ({type: RECEIVE_FINDMORE, data: findMore});
export const getFindMore = () => {
  return async dispatch => {
    const result = await reqFindMore();
    if(result.code === 0 ) {
      const findMore = result.data;
      dispatch(FindMore(findMore))
    }
  }
};
//为你推荐
const Recommend = (recommend) => ({type: RECEIVE_RECOMMEND, data: recommend});
export const getRecommend = () => {
  return async dispatch => {
    const result = await reqRecommend();
    if(result.code === 0 ) {
      const recommend = result.data;
      dispatch(Recommend(recommend))
    }
  }
};
//十点一刻
const Tenfifteen = (tenfifteen) => ({type: RECEIVE_TENFIFTEEN, data: tenfifteen});
export const getTenfifteen = () => {
  return async dispatch => {
    const result = await reqTenfifteen();
    if(result.code === 0 ) {
      const tenfifteen = result.data;
      dispatch(Tenfifteen(tenfifteen))
    }
  }
};
//严选LOOK
const YxLook = (yxLook) => ({type: RECEIVE_YXLOOK, data: yxLook});
export const getYxLook = () => {
  return async dispatch => {
    const result = await reqYxLook();
    if(result.code === 0 ) {
      const yxLook = result.data;
      dispatch(YxLook(yxLook))
    }
  }
};
// 严选甄品
const Zhenpin = (zhenpin) => ({type: RECEIVE_ZHENPIN, data: zhenpin});
export const getZhenpin = () => {
  return async dispatch => {
    const result = await reqZhenpin();
    if(result.code === 0 ) {
      const zhenpin = result.data;
      dispatch(Zhenpin(zhenpin))
    }
  }
};


//分类
const Category = (category) => ({type: RECEIVE_CATEGORY, data: category});
export const getCategory = () => {
  return async dispatch => {
    const result = await reqCategory();
    if(result.code === 0 ) {
      const category = result.data;
      dispatch(Category(category))
    }
  }
};

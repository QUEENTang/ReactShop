/*
  ajax接口
*/

import ajax from "./ajax"
/*
* tagList: [],// 品牌制造商
  newItemList: [], //新品首发
  popularItemList: [], // 人气推荐
  flashSaleIndexVO: {}, // 严选限时购
  cateList: [], // 居家好物
* */
export const reqHeadCateList = () => ajax('/headCateList');
export const reqFocusList = () => ajax('/focusList');
export const reqTagList = () => ajax('/tagList');
export const reqNewItemList = () => ajax('/newItemList');
export const reqPopularItemList = () => ajax('/popularItemList');
export const reqFlashSaleIndexVO = () => ajax('/flashSaleIndexVO');
export const reqCateList = () => ajax('/cateList');
export const reqTopicList = () => ajax('/topicList');

export const reqBanner = () => ajax('/banner');
export const reqColumn = () => ajax('/column');
export const reqFindMore = () => ajax('/findMore');
export const reqRecommend = () => ajax('/recommend');
export const reqTenfifteen = () => ajax('/tenfifteen');
export const reqYxLook = () => ajax('/yxLook');
export const reqZhenpin = () => ajax('/zhenpin');

export const reqCategory = () => ajax('/category');

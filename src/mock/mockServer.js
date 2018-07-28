import Mock from "mockjs"
import data from "./msite.json"
import shiwu from "./shiwu.json"
import category from "./category.json"


Mock.mock("/headCateList", {code: 0, data: data.headCateList}); // 头部导航数据

Mock.mock("/focusList", {code: 0, data: data.focusList}); // 首页轮播图
Mock.mock("/tagList", {code: 0, data: data.tagList}); // 品牌制造商
Mock.mock("/newItemList", {code: 0, data: data.newItemList}); //新品首发
Mock.mock("/popularItemList", {code: 0, data: data.popularItemList}); // 人气推荐
Mock.mock("/flashSaleIndexVO", {code: 0, data: data.flashSaleIndexVO}); // 严选限时购
Mock.mock("/topicList", {code: 0, data: data.topicList}); // 专题选购
Mock.mock("/cateList", {code: 0, data: data.cateList}); // 居家好物

Mock.mock("/banner", {code: 0, data: shiwu.banner}); // 识物轮播图
Mock.mock("/column", {code: 0, data: shiwu.column}); // 各种推荐
Mock.mock("/findMore", {code: 0, data: shiwu.findMore}); // 更多精彩
Mock.mock("/recommend", {code: 0, data: shiwu.recommend}); // 为你推荐
Mock.mock("/tenfifteen", {code: 0, data: shiwu.tenfifteen}); // 十点一刻
Mock.mock("/yxLook", {code: 0, data: shiwu.yxLook}); // 严选LOOK
Mock.mock("/zhenpin", {code: 0, data: shiwu.zhenpin}); // 严选甄品

Mock.mock("/category", {code: 0, data: category}); // 分类页面



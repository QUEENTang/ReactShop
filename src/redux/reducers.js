import {combineReducers} from 'redux'

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

function headCateList(state = [], action) {
  switch (action.type) {
    case RECEIVE_HEADCATE:
      return action.data;
    default:
      return state
  }
}
function focusList(state = [], action) {
  switch (action.type) {
    case RECEIVE_FOCUSLIST:
      return action.data;
    default:
      return state
  }
}
function tagList(state = [], action) {
  switch (action.type) {
    case RECEIVE_TAGLIST:
      return action.data;
    default:
      return state
  }
}
function newItemList(state = [], action) {
  switch (action.type) {
    case RECEIVE_NEWITEMLIST:
      return action.data;
    default:
      return state
  }
}
function popularItemList(state = [], action) {
  switch (action.type) {
    case RECEIVE_POPULARITEMLIST:
      return action.data;
    default:
      return state
  }
}
function flashSaleIndexVO(state = {}, action) {
  switch (action.type) {
    case RECEIVE_FLASHSALEINDEXVO:
      return action.data;
    default:
      return state
  }
}
function topicList(state = [], action) {
  switch (action.type) {
    case RECEIVE_TOPICLIST:
      return action.data;
    default:
      return state
  }
}
function cateList(state = [], action) {
  switch (action.type) {
    case RECEIVE_CATELIST:
      return action.data;
    default:
      return state
  }
}

function banner(state = [], action) {
  switch (action.type) {
    case RECEIVE_BANNERS:
      return action.data;
    default:
      return state
  }
}
function column(state = [], action) {
  switch (action.type) {
    case RECEIVE_COLUMNS:
      return action.data;
    default:
      return state
  }
}
function findMore(state = [], action) {
  switch (action.type) {
    case RECEIVE_FINDMORE:
      return action.data;
    default:
      return state
  }
}
function recommend(state = {}, action) {
  switch (action.type) {
    case RECEIVE_RECOMMEND:
      return action.data;
    default:
      return state
  }
}
function tenfifteen(state = [], action) {
  switch (action.type) {
    case RECEIVE_TENFIFTEEN:
      return action.data;
    default:
      return state
  }
}
function yxLook(state = {}, action) {
  switch (action.type) {
    case RECEIVE_YXLOOK:
      return action.data;
    default:
      return state
  }
}
function zhenpin(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ZHENPIN:
      return action.data;
    default:
      return state
  }
}

function category(state = [], action) {
  switch (action.type) {
    case RECEIVE_CATEGORY:
      return action.data;
    default:
      return state
  }
}

export default combineReducers ({
  headCateList,focusList,tagList,newItemList,popularItemList,flashSaleIndexVO,topicList,cateList,
  banner,column,findMore,recommend,tenfifteen,yxLook,zhenpin,category
})
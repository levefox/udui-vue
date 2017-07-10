import * as types from '../mutation-types'

const state = {
  	isLogin    : false,
  	userName   : null,
    realName   : null,
    headPic    : null,
    carousel   : null,
    orderList  : null,
    orderInfo  : {receiverName:null},
    goodsInfo  : null,
    wallerData : null,
    myEnvData  : null,
    myActivityData : null
}

const mutations = {
  [types.Set_user_info] (state,amount) {
    state.isLogin = amount.success;
    if (amount.success) {
      state.userName = amount.module.userName;
      state.realName = amount.module.realName;
      state.headPic  = amount.module.headPic;
    }
  },
  [types.Set_user_orders] (state,amount) {
    state.orderList = amount;
  },
  [types.Set_orders_banner](state,amount){
    state.carousel = amount;
  },
  [types.Set_order_info](state,amount){
    state.orderInfo = amount;
  },
  [types.Set_goods_info](state,amount){
    state.goodsInfo = amount;
  },
  [types.Set_waller_data](state,amount){
    state.wallerData = amount;
  },
  [types.Set_evnlop_data](state,amount){
    state.myEnvData = amount;
  },
  [types.Set_activity_data](state,amount){
    state.myActivityData = amount;
  }
}

export default {
  state,
  mutations
}
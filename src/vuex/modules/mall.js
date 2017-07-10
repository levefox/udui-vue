import * as types from '../mutation-types'

const state = {
  classData: null,
  navMenu: null,
  subClass: null,
  catename: null,
  siderMenuCur: 0,
  goodsList: [],
  filterState: {
    proClass: '全部',
    categoryId: 0,
    sortValue: 0,
    sortType: true,
    pageNo: 1,
    pageSize: 10,
    hasNext: true
  },
  proTree: [],
  proTreeChild: [],
  goodsListLoading: true,
  proInfo: {
	  product:{}
  }
}

const mutations = {
  [types.Set_nav_menu](state, amount) {
    state.classData = amount;
    let arr = [];
    if (state.navMenu == null) {
      for (var i = 0; i < amount.length; i++) {
        if (amount[i].type == 1 && amount[i].regionId == -1 && amount[i].parentId == 0 && amount[i].linkedType == 2) {
          arr.push(amount[i])
        }
      }
      state.navMenu = arr;
      state.catename = arr[0].linkedName;
    }

    if (state.subClass == null) {
      let arr2 = [];
      for (var i = 0; i < amount.length; i++) {
        if (state.classData[i].parentId == arr[0].id) {
          arr2.push(state.classData[i]);
        };
      };
      state.subClass = arr2;
    }
  },
  [types.Set_sub_class](state, amount) {
    let arr = [];
    for (var i = 0; i < state.classData.length; i++) {
      if (state.classData[i].parentId == amount.id) {
        arr.push(state.classData[i]);
      };
    };
    state.subClass = arr;
    state.catename = state.navMenu[amount.index].linkedName;
    state.siderMenuCur = amount.index;
  },
  [types.Set_goods_list](state, amount) {
    state.goodsList = amount;
    state.goodsListLoading = false;
  },
  [types.Add_mall_proList](state, amount) {
    for (var i = 0; i < amount.length; i++) {
      state.goodsList.push(amount[i]);
    }
    state.goodsListLoading = false;
  },
  [types.Add_mall_pageNum](state, amount) {
    state.filterState.pageNo++;
  },
  [types.Init_page_no](state, amount) {
    state.filterState.pageNo = 1;
  },
  [types.Set_has_next](state, amount) {
    state.filterState.hasNext = amount;
  },
  [types.Set_pro_tree](state, amount) {
    console.log(amount)
    state.proTree = amount.children;
  },
  [types.Set_mall_loading](state, amount) {
    state.goodsListLoading = true;
  },
  [types.Set_filter_state](state, amount) {
    for (var attr in amount) {
      state.filterState[attr] = amount[attr]
    }
  },
  [types.Set_product_Info](state,amount){
	  state.proInfo = amount;
  }
}

export default {
  state,
  mutations
}

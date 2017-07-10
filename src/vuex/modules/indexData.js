import * as types from '../mutation-types'

const state = {
  carousel : [],
  loading : true,
  cateMenuData : []
}

const mutations = {
    [types.Set_indexData] (state, data) {
        state.carousel = data;
    },
    [types.Set_cover_state](state,amount){
        state.loading = amount;
    },
  	[types.Set_tcCate_menu](state,amount){
		state.cateMenuData = [];
		for(var i = 0;i < amount.length; i++){
			if(amount[i].type == 1 && amount[i].linkedType == 1 && amount[i].parentId == 0){
				state.cateMenuData.push(amount[i]);
			}
		}
		if(state.cateMenuData.length == 0){
			for(var i = 0;i < amount.length; i++){
				if(amount[i].isDefault == 1){
					state.cateMenuData.push(amount[i]);
				}
			}
		}

	}
}

export default {
  state,
  mutations
}

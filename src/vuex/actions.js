import indexApi   from '../api/index'
import userApi    from '../api/user'
import mallApi    from '../api/mall'
import tcShop     from '../api/tc-shop'
import * as types from './mutation-types'
import store      from './../../static/store.js'

export const increment = ({ commit }, data) => {
    commit(types.ADD_NUMBER, 1)
}

export const getmallIndexData = ({ commit }, data) => {
  indexApi.getBannerList({appLinkId:'scrollPicture'}).then((res) => {
    var arr = res.body.module[0].list
    commit(types.Set_indexData, arr)
  });

  userApi.userMas().then((res) => {
      commit(types.Set_user_info, res.body);
  });
}

export const loginfn = ({ commit }, data) => {
    userApi.login(data).then((res) => {
            console.log(res)
    });
}

export const getUserInfo = ({ commit }, data) => {
  userApi.userMas().then((res) => {
      commit(types.Set_user_info, res.body);
  });
}

export const getUserOrders = ({ commit }, data) => {
  indexApi.getBannerList({appLinkId:'myOrderBanner'}).then((res) => {
    let arr = res.body.module[0].list
    commit(types.Set_orders_banner, arr)
  });

  let parameter = {pageNo: 1,pageSize: 10,orderNo: '',orderState: ''};
  userApi.userOrders(parameter).then((res) => {
      commit(types.Set_user_orders, res.body.module);
  });
}

export const getOrderInfo = ({ commit }, data) => {
  userApi.orderInfo(data).then((res) => {
    commit(types.Set_order_info,res.body.module)
  });
}

export const getGoodsInfo = ({ commit }, data) => {
  userApi.goodsInfo(data).then((res) => {
    console.log(res)
    commit(types.Set_goods_info,res.body.module)
  });
}

export const getWallerData = ({ commit }, data) => {
  userApi.myWaller().then((res) => {
    console.log(res)
    commit(types.Set_waller_data,res.body.module)
  });
}

export const getEnvData = ({ commit }, data) => {
  userApi.myEnvData(data).then((res) => {
    console.log(res)
    commit(types.Set_evnlop_data,res.body.module)
  });
}

export const getActivityData = ({commit},data) => {
  userApi.myActivityData(data).then((res) => {
    console.log(res)
    commit(types.Set_activity_data,res.body.module)
  });
}

export const getNavMenu = ({commit},data) => {
  if (store.has('navMenuArr')) {//判断menu版本号是否相同
    let navMenuArr = store.get('navMenuArr');
    commit(types.Set_nav_menu,navMenuArr);
  }else{
    mallApi.getNavMenu(data).then((res) => {
      let navMenuArr = res.body.module;
      commit(types.Set_nav_menu,navMenuArr);
      store.set('navMenuArr',navMenuArr)
    });
  }
}


export const loadSubClass = ({ commit }, data) => {
    commit(types.Set_sub_class,data)
}

export const getGoodsList = ({ commit }, data) => {
  mallApi.getGoodsList(data).then((res) => {
    commit(types.Set_has_next,res.body.hasNext);
    commit(types.Set_goods_list,res.body.module)
  })
}

export const loadMore_mall = ({commit}, data) => {
  commit(types.Set_mall_loading);
  mallApi.getGoodsList(data).then((res) => {
    commit(types.Set_has_next,res.body.hasNext);
    commit(types.Add_mall_proList,res.body.module);
  })
}
export const loadMore_tc = ({commit}, data) => {
    commit(types.Set_tcShop_loading);
  tcShop.getShopList(data).then((res) => {
    //commit(types.Set_has_next,res.body.hasNext);
    commit(types.Add_tc_shopList,res.body.module);
  })
}
export const addPageNum = ({commit}, data) => {
    console.log(data);
    if(data == 'mall')
    {
        commit(types.Add_mall_pageNum)
    }
    else if (data == 'tc') {
        commit(types.Add_tc_pageNum)
    }
}

export const initPageNo = ({commit}, data) => {
  commit(types.Init_page_no);
}

export const getProductTree = ({commit},data) => {
  mallApi.getProductTree().then((res) => {
    commit(types.Set_pro_tree,res.body.module);
  })
}

export const setFilterState = ({commit},data) => {
  commit(types.Set_filter_state,data)
}

export const setTcFilterState = ({commit},data) => {
    commit(types.Set_tc_filter,data)
}

export const getHotCity = ({commit},data) => {
    tcShop.getHotCity().then((res) => {
        commit(types.Set_hot_city,res.body.module)
    })
}

export const getAppInitData = ({commit},data) => {
    //var state = 0;
    var p1 = new Promise(
        function(resolve,reject){
            console.log('开始定位');
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS)
                    {
                        console.log('定位成功');
                        resolve(r)
                    }
                else if(this.getStatus() == BMAP_STATUS_UNKNOWN_LOCATION)
                    {
                        reject();
                        //位置结果未知
                        console.log('位置结果未知');
                    }
                else if(this.getStatus() == BMAP_STATUS_TIMEOUT)
                    {
                        reject();
                        //超时
                        console.log('超时');
                    }
                else if(this.getStatus() == BMAP_STATUS_INVALID_KEY)
                    {
                        reject();
                        //非法密钥
                        console.log('非法密钥');
                    }
                else if(this.getStatus() == BMAP_STATUS_INVALID_REQUEST)
                    {
                        reject();
                        //非法请求
                        console.log('非法请求');
                    }
                else
                    {
                        reject();
                        console.log('定位错误');
                        alert('failed'+this.getStatus());
                    }
            },{enableHighAccuracy: true})
        }
    );
    p1.then(
        function(r){
            console.log('拿到定位数据');
            commit(types.Set_position_data,{lng:r.point.lng,lat:r.point.lat,city:r.address.city})
        },
        function(){
            console.log('失败')
        }
    )

    var p2 = new Promise(
        function(resolve,reject){
            indexApi.getMaxAreaVersionTime().then((res) => {
                if(res.body.success && store.has('areaLastTime') && store.get('areaLastTime') == res.body.module && store.has('areaList')){
                    let arr = store.get('areaList');
                    resolve(arr);
                }else{
                    store.set('areaLastTime',res.body.module);
                    tcShop.getLocalCity().then((res) => {
                        if(res.body.success){
                            let arr = res.body.module;
                            store.set('areaList',arr);
                            resolve(arr);
                        }
                    })
                }
            })
        }
    );
    p2.then(
        function(arr){
            console.log('拿到城市数据');
            commit(types.Set_area_list,arr);
        },
        function(){
            console.log('失败')
        }
    )

    var p = Promise.all([p1,p2]);
    p.then(
        function(){
            commit(types.Set_cover_state,false);
            commit(types.Verify_pos_city);
        },
        function(){
            commit(types.Set_cover_state,false);
            commit(types.Set_pos_state);
        }
    );


}

export const getShopList = ({commit},data) => {
    commit(types.Set_tcShop_loading);
    tcShop.getShopList(data).then((res) => {
        commit(types.Set_shop_list,res.body.module)
    })
}

export const initTcPageNo = ({commit},data) => {
    commit(types.Init_tc_PageNo);
}

export const setPosArea = ({commit},data) => {
    commit(types.Set_pos_area,data)
    commit(types.Verify_pos_city);
}

export const getTcShopInitData = ({commit},data) => {
    tcShop.getShopClass().then((res) => {
        commit(types.Set_shop_class,res.body.module)
    })
    tcShop.getArea(data).then((res) => {
        commit(types.Set_tc_area,res.body.module)
    })
}

export const getBusiness = ({commit},data) => {
    tcShop.getBusiness(data).then((res) => {
        commit(types.Set_area_business,res.body.module)
    })
}

export const gettcIndexData = ({commit},data) => {
    indexApi.getNavMenu({areaId:data.areaId}).then((res) => {
        console.log(res);
        commit(types.Set_tcCate_menu,res.body.module)
    })
}

export const setLastAreaId = ({commit},data) => {
    commit(types.Set_last_areaId,data)
}

export const getShopInfo = ({commit},data) => {
    tcShop.getShopInfo(data).then((res) => {
        commit(types.Set_shop_info,res.body.module);
    })
}

export const getProductInfo = ({commit},data) => {
    mallApi.getProductInfo(data).then((res)=>{
        console.log(res);
        commit(types.Set_product_Info,res.body.module);
    })
}

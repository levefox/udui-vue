<style>

.proName {
    padding: 0.3rem 0.18rem;
    font-size: 0.26rem;
    line-height: 1.5;
    background: #fff;
    color: #333;
}
#pt {
    padding: 0 0.18rem 0.18rem;
    background: #fff;
    position: relative;
}
#pt .price {
    font-size: 0.5rem;
    color: #ff2772;
    height: 0.6rem;
    line-height: 0.6rem;
}
#pt .price span{
    padding:0.03rem 0.06rem;
    border-radius: 0.06rem;
    color: #fff;
    font-size: 0.24rem;
    margin-left: 0.24rem;
    background-color: #ff833e;
    vertical-align: middle;
}
#pt .pcon{
    padding-top: 0.12rem;
}
#pt .pcon span{
    color: #666;
    font-size: 0.24rem;
}
#pt .pcon .oldprice{
    width: 3rem;
    float: left;
}
#pt del {
    font-size: 0.24rem;
    color: #999;
}
#pt .freight {
    width: 3rem;
    float: left;
}
#pt .sales {
    float: right;
}
.pickWay, .actInfo {
    padding: 0 0.3rem;
    margin: 0.3rem 0;
    background: #fff;
    height:1.2rem;
    line-height: 1.2rem;
    font-size: 0.42rem;
    color: #666;
}
.pickWay i {
    color: #999;
    float: right;
}

</style>

<template>

<div>
    <headnav v-bind:title="pagetitle" :iconClass="icon-favor"></headnav>
    <banner v-bind:banner="{styleObj:{height:'7.5rem'},itemData:proInfo.product.imgs,dataType:2,filterType:5}" :bannerConfig="bannerConfig"></banner>
    <div class="proName">{{proInfo.product.name}}</div>
    <div class="proPrice clearfix" id="pt">
        <p class="price">&yen;{{totalPrice}}<span>可抵用{{vouchers}}优券</span></p>
        <p class="pcon">
          <span class="oldprice">价格：<del>&yen;{{oldPrice}}</del></span>
          <span class="freight" v-if="feight>0">运费：<em>{{feight}}</em></span>
          <span class="freight" v-else>运费：<em>{{feight}}</em></span>
          <span class="sales">已售<em>{{soldCount}}</em></span>
        </p>
    </div>
    <div class="actInfo clearfix" id="fuli">
        <span class="ico">活动</span>
    </div>
    <back-top :show="true"></back-top>
    {{proInfo}}
</div>

</template>

<script>

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import banner from './../common/banner.vue'
import loading from './../common/loading.vue'
import backTop from './../common/back-top.vue'
const components = {
    headnav, banner, loading, backTop
}
export default {
    data() {
        return {
            pagetitle: '商品详情',
            bannerConfig: {
                direction: 'horizontal',
                autoplay: 2000,
                spend: 2000,
                loop: true,
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,
                //修改swiper的父元素时，自动初始化swiper
                // 如果需要分页器
                pagination: '.swiper-pagination'
            }
        }
    },
    computed: {
        ...mapGetters({ //
            proInfo: 'proInfo'
        }),
        totalPrice:function(){
          return this.proInfo.product.price+this.proInfo.product.vouchers
        },
        vouchers:function(){
          return this.proInfo.product.vouchers
        },
        oldPrice:function(){
          return this.proInfo.product.oldPrice
        },
        feight:function(){
          return this.proInfo.product.feight
        },
        soldCount:function(){
          return this.proInfo.product.sold
        }
    },
    methods: {

    },
    components: components,
    created() {
        this.$store.dispatch('getProductInfo', this.$route.params.goodsId);
    }
}

</script>

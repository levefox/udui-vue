<style>
.shop-list{}
.shop-list li {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background: #fff;
    padding: 0.2rem;
    position: relative;
    margin-bottom: 0.2rem;
}
.shop-list li .itemImg {
    width: 1.63rem;
    height: 1.63rem;
    float: left;
    margin-right: 0.2rem;
}
.shop-list li .itemImg img {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
}
.shop-list li .itemName {
    height: 0.36rem;
    line-height: 0.36rem;
    width: 3.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.3rem;
    color: #333;
}
.shop-list li .itemPrice {
    margin-top: 0.18rem;
    position: relative;
    height: 0.3rem;
}
.shop-list li .itemPrice .score {
    position: absolute;
    left: 1.8rem;
    top: 0;
    z-index: 2;
    width: 0;
    height: 0.24rem;
    background: url("http://fstatic.udui.com/static/images/score.png") 0 -0.81rem no-repeat;
    background-size: 1.6rem 1.6rem;
}
.shop-list li .itemPrice .scorebg {
    position: absolute;
    left: 1.8rem;
    top: 0;
    width: 1.34rem;
    height: 0.24rem;
    z-index: 1;
    background: url("http://fstatic.udui.com/static/images/score.png") no-repeat;
    background-size: 1.6rem 1.6rem;
}
.shop-list li .itemAddr {
    margin-top: 0.42rem;
    color: #999;
    margin-left: 1.8rem;
    font-size: 0.26rem;
}
.shop-list li .itemAddr .fl {
    height: 0.4rem;
    line-height: 0.3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.shop-list li .itemAddr .fr {
    text-align: right;
}
.rmsp {
    border-top: 1px solid #eee;
    margin-top: 0.18rem;
    padding-top: 0.12rem;
}
</style>

<template>

<div id="shop-list-box">
    <ul class="shop-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <li class="clearfix" v-for="data in shopList">
            <router-link :to="'/shopInfo/sid/'+data.id">
                <div class="itemImg">
                    <img :src="data.logo">
                </div>
                <div class="itemName">{{data.name}}</div>
                <div class="itemPrice">
                    <p class="score" style="width:1.4rem"></p>
                    <p class="scorebg"></p>
                </div>
                <div class="itemAddr clearfix">
                    <div class="fl">{{data.street}}</div>
                    <div class="fr">123123</div>
                </div>
                <div class="rmsp clearfix"></div>
            </router-link>
        </li>
    </ul>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
const components = {}
export default {
    computed: mapGetters({
        filterState: 'tcFilterState'
    }),
    data() {
        return {
            pagetitle: '店铺列表',
            busy: false
        }
    },
    methods: {
        loadMore: function() {
            if (this.shopList.length == 0) {
                return;
            }
            this.busy = true;
            if (this.filterState.hasNext) {
                this.$store.dispatch('addPageNum','tc');
                this.$store.dispatch('loadMore_tc', this.filterState)
                this.busy = false;
            } else {
                this.busy = true;
            }
        }
    },
    mounted: function(argument) {},
    props: ['shopList'],
    components: components,
    created() {}
}

</script>

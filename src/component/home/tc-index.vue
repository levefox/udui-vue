<style>

</style>

<template>
    <div class="index-box">
        <header class="clearfix">
            <router-link to="/selectArea" id="areaName">{{positionData.city}}</router-link>
            <div class="sc">优兑商城</div>
        </header>
        <banner v-bind:banner="{styleObj:{},itemData:cateMenuData,dataType:3,filterType:5}" v-bind:bannerConfig="bannerConfig"></banner>
        <kyyq></kyyq>
    </div>
</template>

<script>

import {
    mapGetters
}
from 'vuex'
import banner     from      './../common/banner.vue'
import kyyq         from      './kyyq.vue'

const components = {
    banner, kyyq
}

export default {
    data() {
        return {
            lo: false,
            bannerConfig : {
                direction: 'horizontal',
                slidesPerView: '4',
                slidesPerColumn: 2,
                slidesPerColumnFill: 'row',
                spaceBetween: 50,
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,
                //修改swiper的父元素时，自动初始化swiper
                // 如果需要分页器
                pagination: '.swiper-pagination'
            }
        }
    },
    computed: mapGetters({
        filterState : 'tcFilterState',
        cateMenuData : 'cateMenuData',
        positionData : 'positionData'
    }),
    created() {
        this.$store.dispatch('gettcIndexData',{areaId:this.filterState.areaId});
    },
    name: 'tc-index',
    components: components
}

</script>

<style>

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

header {
    padding: 0.2rem 0.3rem;
    background: #ff2772;
    height: 0.35rem;
    position: relative;
}

.index-box header a {
    position: absolute;
    font-size: 0.27rem;
}

.index-box .sc {
    width: 100%;
    text-align: center;
    height: 0.35rem;
    line-height: 0.35rem;
    font-size: 0.27rem;
    color: #fff;
    float: left;
}

.app-fade-enter-active {
    transition: all .3s ease;
}

.app-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.app-fade-enter,
.app-fade-leave-active {
    padding-right: 500px;
    padding-left: 500px;
    opacity: 0;
}

</style>

<template>

<div class="index-box">
    <div>
        <header class="clearfix">
            <div class="sc">优兑商城</div>
        </header>
        <banner v-bind:banner="{styleObj:{height:'2.4rem'},itemData:getCarousel,dataType:1,filterType:5}" :bannerConfig="bannerConfig"></banner>
    </div>
</div>

</template>

<script>

import {
    mapGetters
}
from 'vuex'
import banner from './../common/banner.vue'
import kyyq from './kyyq.vue'

const components = {
    banner, kyyq
}

export default {
    data() {
        return {
            lo: false,
            bannerConfig : {
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
    computed: mapGetters({
        getCarousel: 'getCarousel'
    }),
    created() {
        this.$store.dispatch('getmallIndexData');
    },
    name: 'mall-index',
    components: components
}

</script>

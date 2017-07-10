<style>

@import '../../../static/swiper.min.css';
.carousel {
    width: 100%;
}

.carousel .swiper-slide img {
    width: 100%;
    height: 100%;
}

.tc-banner {
    width: 100%;
    padding: 0.36rem 0 0.24rem;
}
.tc-banner .swiper-slide{

}
.tc-banner .swiper-slide img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.tc-banner .swiper-slide p {
    font-size: 0.26rem;
    text-align: center;
    color: #000;
}

</style>

<template>

<div class="swiper-container" :class="banner.dataType==3?'tc-banner':'carousel'" :style="banner.styleObj">
    <div class="swiper-wrapper" v-if="banner.dataType==1"> <!--indexBanner-->
        <div class="swiper-slide" v-for="d in banner.itemData"><img :src="d.linkedImg|imgFilter(banner.filterType)"></div>
    </div>
    <div class="swiper-wrapper" v-if="banner.dataType==2"> <!--proDetailBanner-->
        <div class="swiper-slide" v-for="d in banner.itemData"><img :src="d|imgFilter(banner.filterType)"></div>
    </div>
    <div class="swiper-wrapper" v-if="banner.dataType==3"> <!--tcIndexBanner-->
        <div class="swiper-slide" v-for="data in banner.itemData">
            <router-link to="/selectArea">
                <img :src="data.image" />
                <p>{{data.linkedName}}</p>
            </router-link>
        </div>
    </div>
    <!--分页器 -->
    <div class="swiper-pagination"></div>
</div>

</template>

<script type="text/javascript">

import swiper from '../../../static/swiper-3.4.0.min'
export default {
    props: ['banner','bannerConfig'],
    data(){
        return{

        }
    },
    mounted: function() {
        this.$nextTick(function() {
            let mySwiper = new Swiper(
                '.swiper-container', this.bannerConfig
            )
        })
    },
    created() {
        console.log(this.banner);
    }
}

</script>

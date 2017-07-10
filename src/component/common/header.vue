<style>

/* line 4, ../sass/ie.scss */

.nav-header {
    height: 0.6rem;
    background: #f7f7f7;
    border-bottom: 0.01rem solid #dfdfdf;
}


/* line 6, ../sass/ie.scss */

.nav-header .backBtn {
    position: absolute;
    display: block;
    width: 0.22rem;
    height: 0.38rem;
    left: 0.27rem;
    top: 0.3rem;
    background: url("../../../src/assets/images/icn/icon-left.png") no-repeat;
    background-size: 100% 100%;
}


/* line 7, ../sass/ie.scss */

.nav-header p {
    font-size: 0.32rem;
    text-align: center;
    line-height: 0.6rem;
}

header .areaName {
    color: #333;
    position: absolute;
    left: 0.27rem;
    top: 0.3rem;
    height: 0.54rem;
    line-height: 0.54rem;
    width: 1.5rem;
}
header .areaName a {
    color: #333;
    font-size: 0.3rem;
    float: left;
}
header .areaName i {
    margin-left: 0.06rem;
    line-height: 0.54rem;
    position: relative;
    top: 0.03rem;
}
</style>

<template>

<header class="nav-header">
    <!-- <router-link class="backBtn" to="/index"></router-link> -->
    <a class="backBtn" v-show="backBtn" @click="backfn()"></a>

    <div class="areaName" v-show="areaName">
        <router-link to="/selectArea"  id="areaName">{{positionData.city}}</router-link>
        <i class="iconfont icon-down"></i>
    </div>
    <p class="headTxt">{{title}}</p>
    <a class="goAhead"><i class="iconfont" :class="iconClass"></i></a>
</header>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
export default {
    computed: mapGetters({
        positionData: 'positionData'
    }),
    data() {
        return {
            areaName : false,
            backBtn  : true
        }
    },
    methods: {
        backfn: function() {
            this.$router.go(-1)
        }
    },
    props: ['title','iconClass'],
    created() {
        let path = this.$route.path;
        switch (path) {
            case '/tcshop':
                this.areaName = true;
                this.backBtn = false;
                break;
            default:
                break;
        }
        console.log(this.title);
        console.log(this.iconClass);
    }
}

</script>

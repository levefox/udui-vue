<style>
@import '../static/base.css';
@import './assets/iconfont/iconfont.css';
</style>

<template>
<div>
    <cover :show="loading"></cover>
    <router-view v-if="!loading" class="view a" name="main"></router-view>
    <router-view class="view b" name="footerMenu"></router-view>
</div>
</template>

<script>
import iconfont     from    './assets/iconfont/iconfont.js'
import cover        from    './component/cover.vue' //欢迎动画组件
import {
    mapGetters
}
from 'vuex'
const components = {
    cover
}
export default {
    data() {
        return {
        }
    },
    computed: mapGetters({
        loading : "loading"
    }),
    created() {
        this.$store.dispatch('getAppInitData');
    },
    components: components
}
</script>

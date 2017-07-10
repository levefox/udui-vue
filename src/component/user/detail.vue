<style>

.user-orders-box {}

</style>

<template>

<div class="user-orders-box">
    <loading :show="loading"></loading>
    <headnav v-bind:title="pagetitle"></headnav>
    <banner :imgArr="goodsInfoData.product.imgs"></banner>
    {{goodsInfoData}}
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import loading from './../common/loading.vue'
import headnav from './../common/header.vue'
import banner from './../common/banner.vue'

const components = {
    loading, headnav, banner
}
export default {
    data() {
            return {
                pagetitle: "商品详情",
                loading: false
            }
        },
        computed: mapGetters({
            goodsInfoData: 'goodsInfo'
        }),
        components: components,
        methods: {},
        created() {
            let goodsId = this.$route.params.goodsId;
            console.log(goodsId)
            this.$store.dispatch('getGoodsInfo', {
                goodsId: goodsId
            });
        }
}

</script>

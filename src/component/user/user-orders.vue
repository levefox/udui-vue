<style>

.user-orders-box {
    padding-bottom: 0.8rem;
}

</style>

<template>

<div class="user-orders-box">
    <headnav v-bind:title="pagetitle"></headnav>
    <banner v-bind:imgArr="getOrdersCarousel"></banner>
    <order-list :orderList="orderList"></order-list>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import banner from './../common/banner.vue'
import orderList from './order-list.vue'

const components = {
    headnav, banner, orderList
}
export default {
    data() {
            return {
                pagetitle: "我的订单"
            }
        },
        computed: mapGetters({
            getOrdersCarousel: 'getOrdersCarousel',
            orderList: 'orderList'
        }),
        components: components,
        methods: {
            showNum: function() {
                console.log(this.isLogin)
            }
        },
        created() {
            this.$store.dispatch('getUserOrders');
        }
}

</script>

<style>

</style>

<template>
    <div id="shop-info-box">
        <headnav v-bind:title="pagetitle"></headnav>
        {{shopInfo}}
    </div>
</template>

<script type="text/javascript">
import headnav  from './../common/header.vue'

import {
    mapGetters
}
from 'vuex'
const components = {
    headnav
}
export default {
    computed: mapGetters({
        shopInfo : 'shopInfo'
    }),
    data() {
        return {
            pagetitle: '店铺详情',
        }
    },
    methods: {
    },
    mounted: function() {

    },
    components: components,
    created() {
        this.$store.dispatch('getShopInfo',{sid:this.$route.params.sid});
    }
}

</script>

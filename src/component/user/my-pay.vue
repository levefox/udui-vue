<style>

.my-wallet-box {}

</style>

<template>

<div class="my-wallet-box">
    <headnav v-bind:title="pagetitle"></headnav>
    {{myPayData}}
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'

const components = {
    headnav
}
export default {
    data() {
            return {
                pagetitle: "我的买单"
            }
        },
        computed: mapGetters({
            myPayData: 'myPayData'
        }),
        components: components,
        methods: {},
        created() {
            this.$store.dispatch('getActivityData', {
                areaId: 0,
                pageNo: 1
            })
        }
}

</script>

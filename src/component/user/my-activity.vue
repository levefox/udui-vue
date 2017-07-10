<style>

.my-wallet-box {}

</style>

<template>

<div class="my-wallet-box">
    <headnav v-bind:title="pagetitle"></headnav>
    {{myActivityData}}
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
                pagetitle: "我的活动"
            }
        },
        computed: mapGetters({
            myActivityData: 'myActivityData'
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

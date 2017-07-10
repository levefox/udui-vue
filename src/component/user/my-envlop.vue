<style>

.my-wallet-box {}

</style>

<template>

<div class="my-wallet-box">
    <headnav v-bind:title="pagetitle"></headnav>
    {{myEnvData}}
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
                pagetitle: "我的红包"
            }
        },
        computed: mapGetters({
            myEnvData: 'myEnvData'
        }),
        components: components,
        methods: {},
        created() {
            this.$store.dispatch('getEnvData', {
                pageNo: 1,
                state: 1,
                activityType: ''
            })
        }
}

</script>

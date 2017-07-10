<style>

.my-wallet-box {}

</style>

<template>

<div class="my-wallet-box">
    <headnav v-bind:title="pagetitle"></headnav>
    {{myWallerData}}
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
                pagetitle: "我的钱包"
            }
        },
        computed: mapGetters({
            myWallerData: 'myWallerData'
        }),
        components: components,
        methods: {},
        created() {
            this.$store.dispatch('getWallerData')
        }
}

</script>

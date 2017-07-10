<style>

</style>

<template>
<div class="index-box">
    <mall-index v-if="positionState==2 || positionState==3"></mall-index>
    <tc-index v-else-if="positionState==1"></tc-index>
</div>
</template>

<script>

import {
    mapGetters
}
from 'vuex'
import mallIndex    from      './mall-index.vue'
import tcIndex      from      './tc-index.vue'
import loading      from      './../common/loading.vue'

const components = {
    mallIndex, tcIndex, loading
}

export default {
    data() {
        return {
            lo: false
        }
    },
    computed: mapGetters({
        positionState: 'positionState',
        positionData  : 'positionData'
    }),
    created() {
    },
    name: 'index',
    components: components
}

</script>

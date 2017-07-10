<style>



</style>

<template>

<div>
    <headnav v-bind:title="pagetitle"></headnav>
    <transition name="slide-fade">
        <div id="mall" v-show="true">
            <sider-menu v-bind:navMenuData="navMenuData"></sider-menu>
            <sub-class v-bind:subClassData="subClassData"></sub-class>
        </div>
    </transition>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import siderMenu from './sider-menu.vue'
import subClass from './sub-class.vue'
const components = {
    headnav, siderMenu, subClass
}
export default {
    data() {
            return {
                pagetitle: "商城"
            }
        },
        computed: mapGetters({
            navMenuData: 'getNavMenu',
            subClassData: 'getSubClass'
        }),
        components: components,
        methods: {
            showNum: function() {
                alert(1)
            }
        },
        created() {
            this.$store.dispatch('getNavMenu', {
                areaId: -1
            });
        }
}

</script>

<style>

.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-active {
    padding-right: 500px;
    padding-left: 500px;
    opacity: 0;
}

</style>

<template>

<div>
    <headnav v-bind:title="pagetitle"></headnav>
    <transition name="slide-fade">
        <div id="mall" v-show="true">
        </div>
    </transition>
</div>

</template>

<script type="text/javascript">

import headnav from './common/header.vue'
const components = {
    headnav
}
export default {
    data() {
            return {
                pagetitle: "购物车"
            }
        },
        components: components,
        methods: {
            showNum: function() {
                alert(1)
            }
        }
}

</script>

<style>

.ui-loading-wrap .mask {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: 50%;
    top: 50%;
    margin-left: -0.75rem;
    margin-top: -0.75rem;
    background: rgba(255, 255, 255, 0.5);
}

.ui-loading-wrap {
    position: fixed;
    top: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
}

</style>

<template>

<div id="BP_Loading" class="ui-loading-wrap" v-show="show">
    <img class="mask" src="../../../src/assets/images/common/loading.gif">
</div>

</template>

<script>

export default {
    props: ['show']
}

</script>

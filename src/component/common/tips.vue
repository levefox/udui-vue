<style>

/* line 1, ../sass/ie.scss */

.tipsBox {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
}


/* line 6, ../sass/ie.scss */

.tipsBox div.content {
    width: 2.36rem;
    height: 1.6rem;
    left: 50%;
    top: 50%;
    margin-left: -50%;
    margin-top: -50%;
}

</style>

<template>

<div class="tipsBox">
    <div class="content">
        <p class="tipsMas">确定取消订单吗？</p>
        <button>确定</button>
        <button>取消</button>
    </div>
</div>

</template>

<script>

export default {
    props: ['show']
}

</script>

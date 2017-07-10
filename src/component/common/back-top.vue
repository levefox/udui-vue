<style>

.backTop {
    width: 0.8rem;
    height: 0.8rem;
    position: fixed;
    bottom: 0.6rem;
    right: 0.6rem;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
}

</style>

<template>

<div class="backTop" v-show="show" @click="backTop">
</div>

</template>

<script>

export default {
    methods: {
        backTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    },
    props: ['show']
}

</script>

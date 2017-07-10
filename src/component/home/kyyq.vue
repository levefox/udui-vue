<style>
.kyyq {
    padding: 0 0.18rem;
    background: #fff;
    border-top: 1px solid #eee;
    height: 1rem;
    line-height: 1rem;
}

.kyyq .fl {
    font-size: 0.48rem;
}

.kyyq .fr {
    font-size: 0.3rem;
    color: #ff7e42;
}

.kyyq .fl b {
    color: #ff7e42;
}


</style>

<template>

<div class="kyyq clearfix">
    <div class="fl">
        <span>可使用优券：</span>
        <b>1200</b>
    </div>
    <router-link to="/selectArea"  class="fr">
        <span>我要使用</span>
        <i class="iconfont icon-right"></i>
    </router-link>
</div>

</template>

<script type="text/javascript">

export default {
    data() {
        return {}
    },
    methods: {},
    props: ['yqData']
}

</script>

<style>

/* line 1, ../sass/ie.scss */

#sider-menu-box {
    width: 1.63rem;
    height: 100%;
    position: fixed;
    top: 1.01rem;
    left: 0;
    overflow-x: scroll;
}


/* line 3, ../sass/ie.scss */

#sider-menu-box #sider-menu {
    padding-bottom: 2rem;
}


/* line 5, ../sass/ie.scss */

#sider-menu-box #sider-menu .cur {
    background: none;
    color: #ff3f68;
}


/* line 6, ../sass/ie.scss */

#sider-menu-box #sider-menu li {
    background: #fff;
    margin-bottom: 0.02rem;
    padding: 0.28rem 0;
    font-size: 0.26rem;
    color: #000;
    line-height: 0.55rem;
}


/* line 8, ../sass/ie.scss */

#sider-menu-box #sider-menu li .cur {
    border-left: 0.06rem solid #ff3f68;
}


/* line 9, ../sass/ie.scss */

#sider-menu-box #sider-menu li p {
    margin-left: 0.1rem;
    border-left: 0.06rem solid #fff;
    text-align: center;
}

</style>

<template>

<div id="sider-menu-box">
    <ul id="sider-menu">
        <li @click="loadNav(index,data.id)" v-for="(data,index) in navMenuData" :class="index==num?'cur':''">
            <p :class="index==num?'cur':''">{{data.linkedName}}</p>
        </li>
    </ul>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'

export default {
    data() {
            return {}
        },
        computed: mapGetters({
            num: 'siderMenuCur'
        }),
        methods: {
            loadNav(index, id) {
                this.$store.dispatch('loadSubClass', {
                    id: id,
                    index: index
                })
            }
        },
        props: ['navMenuData']
}

</script>

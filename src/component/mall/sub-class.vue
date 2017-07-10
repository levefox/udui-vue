<style>

/* line 1, ../sass/ie.scss */

#sub-class-box {
    width: 5.7rem;
    height: 100%;
    position: fixed;
    top: 1.01rem;
    right: 0;
    overflow-x: scroll;
}


/* line 3, ../sass/ie.scss */

#sub-class-box #sub-class {
    padding: 0.18rem 0 2rem 0;
    overflow: hidden;
}


/* line 5, ../sass/ie.scss */

#sub-class-box #sub-class li {
    width: 1.72rem;
    background: #fff;
    margin: 0 0.18rem 0.18rem 0;
    float: left;
    line-height: 0.5rem;
}


/* line 7, ../sass/ie.scss */

#sub-class-box #sub-class li p {
    color: #666666;
    font-size: 0.22rem;
    text-align: center;
}


/* line 8, ../sass/ie.scss */

#sub-class-box #sub-class li img {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.2rem auto 0;
}

</style>

<template>

<div id="sub-class-box">
    <ul id="sub-class">
        <li @click="loadNav()" v-for="data in subClassData">
            <router-link :to="'/goodsList/cate/'+data.linkedId+'/catename/'+catename">
                <img :src="data.image" />
                <p>{{data.linkedName}}</p>
            </router-link>
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
    computed: mapGetters({
        catename: 'catename'
    }),
    data() {
        return {
            num: 0
        }
    },
    methods: {
        loadNav() {}
    },
    props: ['subClassData']
}

</script>

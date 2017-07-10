<style>

.select-area .cityList {}

.select-area .cityRec {
    padding-left: 0.18rem;
}

.select-area .cityList dl {
    text-align: left;
}

.select-area .cityList dl dt {
    padding: 0 0.18rem;
    height: 0.75rem;
    line-height: 0.75rem;
    font-size: 0.22rem;
    color: #666;
    border-bottom: 1px solid #ccc;
}

.select-area .cityList dl dd {
    background: #fff;
    line-height: 0.75rem;
    padding: 0 0.18rem;
}

.select-area .cityList dl dd p {
    border-bottom: 1px solid #ccc;
    font-size: 0.24rem;
}

.select-area .cityRec h3 {
    font-size: 0.28rem;
    line-height: 0.6rem;
    text-align: left;
}

.select-area .cityRec li {
    float: left;
    width: 2.1rem;
    height: 0.74rem;
    border: 1px solid #ccc;
    border-radius: 0.04rem;
    background: #fff;
    text-align: center;
    line-height: 0.74rem;
    margin: 0 0.18rem 0.18rem 0;
    font-size: 0.28rem;
    color: #333;
    overflow: hidden;
}
.select-area .areaScroll {
    position: fixed;
    right: 0;
    top: 2.4rem;
    color: #ff3f68;
    font-size: 0.28rem;
    line-height: 1.2;
    padding: 0 0.16rem 0 0.16rem;
    text-align: center;
}
</style>

<template>

<div class="select-area">
    <headnav v-bind:title="pagetitle"></headnav>
    <div class="cityRec">
        <div class="cr locate" v-show="positionData.city != null">
            <h3>定位城市</h3>
            <ul class="clearfix">
                <li>{{positionData.city}}</li>
            </ul>
        </div>
        <div class="cr lastVisit">
            <h3>最近访问的城市</h3>
            <ul class="clearfix">
                <li>上海市</li>
            </ul>
        </div>
        <div class="hotCity cr">
            <h3>热门城市</h3>
            <ul class="clearfix">
                <li v-for="data in hotCity" @click="switchArea(data)">
                    <p>{{data.name}}</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="cityList">
        <dl v-for="data in areaList">
            <dt :id="data.indexName">{{data.indexName}}</dt>
            <dd v-for="d in data.content" @click="switchArea(d)">
                <p>{{d.name}}</p>
            </dd>
        </dl>
    </div>
    <div class="areaScroll">
        <ul>
            <li v-for="data in areaList" v-on:click="showNum(data.indexName)">{{data.indexName}}</li>
        </ul>
    </div>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import loading from './../common/loading.vue'
const components = {
    headnav, loading
}
export default {
    computed: mapGetters({
        areaList : "areaList",
        hotCity  : "hotCity",
        positionData: 'positionData'
    }),
    data() {
        return {
            pagetitle: "城市站点"
        }
    },
    components: components,
    methods: {
        showNum(id) {
            document.getElementById(id).scrollIntoView();
        },
        switchArea(d){
            this.$store.dispatch('setPosArea',{areaId:d.id,city:d.name});
            this.$router.go(-1);
        }
    },
    created() {
        this.$store.dispatch('getHotCity');
    }
}

</script>

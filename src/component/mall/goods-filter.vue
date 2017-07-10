<style>

/* line 1, ../sass/ie.scss */

#goods-filter-box {
    background: #fff;
    font-size: 0.28rem;
    height: 0.74rem;
    position: relative;
}


/* line 3, ../sass/ie.scss */

#goods-filter-box #sort-result {
    overflow: hidden;
    border-bottom: 0.02rem solid #ebebeb;
}


/* line 5, ../sass/ie.scss */

#goods-filter-box #sort-result li {
    float: left;
    width: 25%;
    line-height: 0.72rem;
    text-align: center;
}

#goods-filter-box #sort-result li .arrBox {
    display: inline-block;
    position: relative;
    left: 0.15rem;
    top: 0.15rem;
}

#goods-filter-box #sort-result li .proName {
    top: 0.08rem;
}

#goods-filter-box #sort-result li i {
    display: block;
    width: 0;
    height: 0;
}

#goods-filter-box #sort-result li i.uptrg {
    border-width: 0.1rem;
    border-style: dashed dashed solid dashed;
    border-color: transparent transparent #ccc transparent;
    margin-bottom: 0.1rem;
}

#goods-filter-box #sort-result li i.downtrg {
    border-width: 0.1rem;
    border-style: solid dashed dashed dashed;
    border-color: #ccc transparent transparent transparent;
}

#goods-filter-box #sort-result li i.bgT {
    border-color: transparent transparent #FF2772 transparent;
}

#goods-filter-box #sort-result li i.bgB {
    border-color: #FF2772 transparent transparent transparent;
}


/* line 8, ../sass/ie.scss */

#goods-filter-box #sort-result .cur {
    color: #FF2772;
}


/* line 10, ../sass/ie.scss */

#goods-filter-box .sec-screen {
    position: absolute;
    top: 0.72rem;
    left: 0;
    z-index: 2;
    background: #fff;
    width: 100%;
    height: 5.54rem;
    overflow: hidden;
}


/* line 12, ../sass/ie.scss */

#goods-filter-box .sec-screen .sec-type {
    width: 1.64rem;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    overflow-x: scroll;
}


/* line 15, ../sass/ie.scss */

#goods-filter-box .sec-screen .sec-type ul li {
    font-size: 0.28rem;
    background: #eeeeee;
    line-height: 0.7rem;
    margin-bottom: 0.03rem;
    text-align: center;
}


/* line 18, ../sass/ie.scss */

#goods-filter-box .sec-screen .sec-type ul .cur {
    background: #fff;
    color: #FF2772;
}


/* line 21, ../sass/ie.scss */

#goods-filter-box .sec-screen .child {
    width: 5.7rem;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    text-align: left;
    overflow-x: scroll;
}


/* line 23, ../sass/ie.scss */

#goods-filter-box .sec-screen .child h3 {
    font-size: 0.3rem;
    color: #999;
}


/* line 26, ../sass/ie.scss */

#goods-filter-box .sec-screen .child ul {
    overflow: hidden;
}


/* line 28, ../sass/ie.scss */

#goods-filter-box .sec-screen .child ul li {
    float: left;
    border: 0.02rem solid #e2e2e2;
    width: 1.46rem;
    margin: 0.12rem;
    text-align: center;
    line-height: 0.7rem;
    height: 0.7rem;
    overflow: hidden;
}

.app-fade-enter-active {
    transition: all .3s ease;
}

.app-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.app-fade-enter,
.app-fade-leave-active {
    padding-right: 500px;
    padding-left: 500px;
    opacity: 0;
}

</style>

<template>

<div id="goods-filter-box">
    <ul id="sort-result">
        <li class="s-type" @click="isShow=!isShow">
            <span class="cur">{{filterState.proClass}}</span>
            <div class="arrBox proName">
                <i :class="isShow?'uptrg':'downtrg'"></i>
            </div>
        </li>
        <li class="s-v s-up" @click="filterProduct(filterState.categoryId,filterState.proClass,1)">
            <span>抵扣数</span>
            <div class="arrBox">
                <i class="uptrg" :class="filterState.sortType &&filterState.sortValue ==1?'bgT':''"></i>
                <i class="downtrg" :class="!filterState.sortType&& filterState.sortValue==1?'bgB':''"></i>
            </div>
        </li>
        <li class="s-sale" @click="filterProduct(filterState.categoryId,filterState.proClass,2)">
            <span>销量</span>
            <div class="arrBox">
                <i class="uptrg" :class="filterState.sortType &&filterState.sortValue==2?'bgT':''"></i>
                <i class="downtrg" :class="!filterState.sortType&&filterState.sortValue==2?'bgB':''"></i>
            </div>
        </li>
        <li class="s-p" @click="filterProduct(filterState.categoryId,filterState.proClass,3)">
            <span>价格</span>
            <div class="arrBox">
                <i class="uptrg" :class="filterState.sortType &&filterState.sortValue==3?'bgT':''"></i>
                <i class="downtrg" :class="!filterState.sortType&&filterState.sortValue==3?'bgB':''"></i>
            </div>
        </li>
    </ul>
    <transition name="app-fade">
        <div class="sec-screen" v-show="isShow">
            <div class="sec-type">
                <ul>
                    <li :class="parentId==0?'cur':''" @click="filterProduct('','全部分类',0)">全部分类</li>
                    <li :class="parentId==data.id?'cur':''" @click="filShow(data.id)" v-for="data in proTree">{{data.name}}</li>
                </ul>
            </div>
            <div class="child" v-for="data in proTree" v-show="data.id == parentId">
                <div v-for="d in data.children">
                    <h3>{{d.name}}</h3>
                    <ul class="clearfix">
                        <li @click="filterProduct(s.id,s.name,0)" v-for="s in d.children">{{s.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </transition>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
export default {
    computed: mapGetters({
        proTree: 'proTree',
        filterState: 'mallFilterState'
    }),
    data() {
        return {
            isShow: false,
            parentId: 0,
            productName: '',
            sort: ''
        }
    },
    methods: {
        filShow(id) {
                this.parentId = id;
            },
            filterProduct(id, filterName, SkuSortEnum) {
                this.isShow = false;
                this.$store.dispatch('initPageNo');
                if (SkuSortEnum == 0) {
                    this.sort = true;
                } else {
                    this.sort = !this.filterState.sortType;
                }
                this.$store.dispatch('setFilterState', {
                    proClass: filterName,
                    categoryId: id,
                    sortValue: SkuSortEnum,
                    sortType: this.sort
                });
                this.$store.dispatch('getGoodsList', {
                    categoryId: this.filterState.categoryId,
                    productName: this.productName,
                    sortValue: this.filterState.sortValue,
                    sortType: this.filterState.sortType,
                    pageNo: 1,
                    pageSize: 10
                });
            }
    },
    props: []
}

</script>

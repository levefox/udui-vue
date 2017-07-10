<style>

#goods-list-box {}

</style>

<template>

<div>
    <headnav v-bind:title="pagetitle"></headnav>
    <goods-filter></goods-filter>
    <products-list v-bind:proData="goodsList"></products-list>
    <loading :show="goodsListLoading"></loading>
    <back-top :show="true"></back-top>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import loading from './../common/loading.vue'
import backTop from './../common/back-top.vue'
import goodsFilter from './goods-filter.vue'
import productsList from './products-list.vue'
const components = {
    headnav, productsList, goodsFilter, loading, backTop
}
export default {
    data() {
            return {
                pagetitle: '商品列表',
                productName: ''
            }
        },
        computed: mapGetters({
            goodsList: 'goodsList',
            filterState: 'mallFilterState',
            goodsListLoading: 'goodsListLoading'
        }),
        methods: {
            loadNav(index, id) {
                this.num = index;
                this.$store.dispatch('loadSubClass', id)
            }
        },
        components: components,
        created() {
            this.$store.dispatch('initPageNo');
            this.$store.dispatch('getProductTree');
            this.$store.dispatch('setFilterState', {
                proClass: this.$route.params.name,
                categoryId: this.$route.params.id,
                sortValue: 0,
                sortType: true
            });
            this.$store.dispatch('getGoodsList', {
                categoryId: this.filterState.categoryId,
                productName: this.productName,
                sortValue: this.filterState.sortValue,
                sortType: this.filterState.sortType,
                pageNo: this.filterState.pageNo,
                pageSize: this.filterState.pageSize
            });
        }
}

</script>

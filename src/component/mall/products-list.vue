<style>

/* line 2, ../sass/ie.scss */

#products-list-box li {
    padding: 0.14rem 0.18rem 0.14rem 2.34rem;
    background: #fff;
    height: 2rem;
    position: relative;
    margin-bottom: 0.18rem;
}


/* line 4, ../sass/ie.scss */

#products-list-box li img {
    display: block;
    width: 2rem;
    height: 2rem;
    position: absolute;
    left: 0.18rem;
    top: 0.14rem;
}


/* line 5, ../sass/ie.scss */

#products-list-box li .proName {
    line-height: 0.46rem;
    height: 0.92rem;
    font-size: 0.3rem;
    color: #000;
    text-align: left;
    overflow: hidden;
}


/* line 8, ../sass/ie.scss */

#products-list-box li .subName {
    overflow: hidden;
    line-height: 0.6rem;
}


/* line 10, ../sass/ie.scss */

#products-list-box li .subName span {
    float: right;
    font-size: 0.24rem;
    color: #999999;
}


/* line 14, ../sass/ie.scss */

#products-list-box li .proPrice {
    overflow: hidden;
    color: #ff2772;
    font-size: 0.24rem;
    text-align: left;
}


/* line 16, ../sass/ie.scss */

#products-list-box li .proPrice del {
    padding: 0 0.1rem;
    color: #999;
}


/* line 17, ../sass/ie.scss */

#products-list-box li .proPrice span {
    float: right;
    background-color: #FF833E;
    color: #fff;
    padding: 0 0.1rem;
    border-radius: 0.04rem;
}

</style>

<template>

<div id="products-list-box">
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <li v-for="data in proData">
            <router-link :to="'/goodsDetail/pro/'+data.id">
                <img :src="data.prodImg|imgFilter(1)">
                <p class="proName">{{data.prodName}}</p>
                <p class="subName"><span>销量{{data.soldCount}}</span></p>
                <p class="proPrice">
                    ¥<b>{{data.origPrice}}</b><del>¥{{data.origPrice}}</del><span>可抵用{{data.vouchers}}优券</span>
                </p>
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
const components = {}
export default {
    computed: mapGetters({
        filterState: 'mallFilterState'
    }),
    data() {
        return {
            pagetitle: '商品列表',
            productName: '',
            busy: false
        }
    },
    methods: {
        loadMore: function() {
            if (this.proData.length == 0) {
                return;
            }
            let categoryId = this.$route.params.id;
            let catename = this.$route.params.name;
            this.busy = true;
            if (this.filterState.hasNext) {
                this.$store.dispatch('addPageNum', 'mall');
                this.$store.dispatch('loadMore_mall', {
                    categoryId: this.filterState.categoryId,
                    productName: this.productName,
                    sortValue: this.filterState.sortValue,
                    sortType: this.filterState.sortType,
                    pageNo: this.filterState.pageNo,
                    pageSize: this.filterState.pageSize
                })
                this.busy = false;
            } else {
                this.busy = true;
            }
        }
    },
    mounted: function(argument) {},
    props: ['proData'],
    components: components,
    created() {}
}

</script>

<style>

/* line 2, ../sass/ie.scss */

.order-info-box div {
    background: #fff;
    padding: 0 0.18rem;
    text-align: left;
}


/* line 3, ../sass/ie.scss */

.order-info-box .order-state {
    height: 1.1rem;
    margin-bottom: 0.18rem;
}


/* line 5, ../sass/ie.scss */

.order-info-box .order-state p {
    font-size: 0.3rem;
    color: #ff833e;
    line-height: 1.1rem;
    text-align: left;
}


/* line 7, ../sass/ie.scss */

.order-info-box .add-info {
    padding: 0.32rem 0.18rem 0.3rem;
    margin-bottom: 0.18rem;
}


/* line 9, ../sass/ie.scss */

.order-info-box .add-info .add-name {
    padding-left: 0.46rem;
    color: #333333;
    font-size: 0.3rem;
    margin-bottom: 0.24rem;
}


/* line 11, ../sass/ie.scss */

.order-info-box .add-info .add-name span {
    padding-left: 0.54rem;
}


/* line 13, ../sass/ie.scss */

.order-info-box .add-info .adds {
    font-size: 0.26rem;
    color: #666666;
}


/* line 15, ../sass/ie.scss */

.order-info-box .add-info .adds .icon-position {
    padding: 0 0.23rem;
    background: url("../../../src/assets/images/icn/icon-position.png") center center no-repeat;
    background-size: 0.21rem 0.27rem;
}


/* line 18, ../sass/ie.scss */

.order-info-box .order-detail {
    background: #f7f7f7;
    overflow: hidden;
}


/* line 20, ../sass/ie.scss */

.order-info-box .order-detail .pro-tit {
    color: #333333;
    font-size: 0.28rem;
    line-height: 0.74rem;
    background: #fff;
    margin: 0 -0.18rem;
    padding-left: 0.18rem;
}


/* line 21, ../sass/ie.scss */

.order-info-box .order-detail dl {
    padding: 0.18rem 0;
    overflow: hidden;
    border-bottom: 0.01rem solid #e5e5e5;
    background: #f7f7f7;
}


/* line 23, ../sass/ie.scss */

.order-info-box .order-detail dl dd {
    float: left;
    width: 1.63rem;
    height: 1.63rem;
    margin-right: 0.16rem;
}


/* line 25, ../sass/ie.scss */

.order-info-box .order-detail dl dd img {
    display: block;
    width: 100%;
    height: 100%;
}


/* line 27, ../sass/ie.scss */

.order-info-box .order-detail dl dt {
    text-align: left;
    font-size: 0.23rem;
    color: #000;
    overflow: hidden;
}


/* line 28, ../sass/ie.scss */

.order-info-box .order-detail dl .proName {
    padding-top: 0.08rem;
}


/* line 30, ../sass/ie.scss */

.order-info-box .order-detail dl .proName p {
    line-height: 0.3rem;
    height: 0.6rem;
}


/* line 32, ../sass/ie.scss */

.order-info-box .order-detail dl .proAttribute {
    color: #999999;
    height: 0.65rem;
}


/* line 35, ../sass/ie.scss */

.order-info-box .order-detail dl .proPrice {
    line-height: 0.3rem;
}


/* line 37, ../sass/ie.scss */

.order-info-box .order-detail dl .proPrice .proNum {
    float: right;
}


/* line 40, ../sass/ie.scss */

.order-info-box .order-detail a.linkBtn {
    color: #fff;
    margin: 0.08rem 0;
    padding: 0 0.18rem;
    border-radius: 0.06rem;
    float: right;
    line-height: 0.38rem;
    font-size: 0.26rem;
    background: #ff833e;
}


/* line 42, ../sass/ie.scss */

.order-info-box .pro-info {
    margin-bottom: 0.18rem;
}


/* line 43, ../sass/ie.scss */

.order-info-box table {
    width: 100%;
    font-size: 0.28rem;
    line-height: 0.42rem;
    padding: 0.2rem 0;
}


/* line 47, ../sass/ie.scss */

.order-info-box table tr td {
    text-align: right;
    color: #ff2772;
}


/* line 50, ../sass/ie.scss */

.order-info-box .order-info {
    padding: 0.2rem 0.18rem;
}


/* line 52, ../sass/ie.scss */

.order-info-box .order-info p {
    font-size: 0.24rem;
    line-height: 0.36rem;
}

</style>

<template>

<div class="order-info-box">
    <loading :show="loading"></loading>
    <headnav v-bind:title="pagetitle"></headnav>
    <div class="order-state">
        <p>{{orderInfoData.state|orderState}}</p>
    </div>
    <div class="add-info">
        <p class="add-name">{{orderInfoData.receiverName}}<span>{{orderInfoData.userName}}</span></p>
        <p class="adds"><i class="icon-position"></i>{{orderInfoData.receiverArea+orderInfoData.receiverAddress}}</p>
    </div>
    <div class="order-detail">
        <p class="pro-tit">{{orderInfoData.sellerName}}</p>
        <dl v-for="data in orderInfoData.orderItemList">
            <dd>
                <img :src="data.productImgUrl">
            </dd>
            <dt class="proName"><p>{{data.productName}}</p></dt>
            <dt class="proAttribute">参考身高：130  颜色分类：玫红色（女童）</dt>
            <dt class="proPrice">¥{{data.unitSellerPrice+data.unitVouchers}} (可抵用{{data.unitVouchers}}优券)<span class="proNum">x{{data.count}}</span></dt>
        </dl>
        <router-link class="linkBtn" to="/user">申请退款</router-link>
    </div>
    <div class="pro-info">
        <table>
            <tr>
                <th>商品金额：</th>
                <td>￥{{orderInfoData.totalPay}}.00</td>
            </tr>
            <tr>
                <th>运费：</th>
                <td>￥{{orderInfoData.totalDeliveryFee}}.00</td>
            </tr>
            <tr>
                <th>活动抵扣：</th>
                <td>-￥{{orderInfoData.totalVouchers}}.00</td>
            </tr>
            <tr>
                <th>实付款：</th>
                <td>￥{{orderInfoData.totalPay}}.00+</td>
            </tr>
        </table>
    </div>
    <div class="order-info">
        <p><span>订单编号：</span>{{orderInfoData.no}}</p>
        <p><span>下单时间：</span>{{orderInfoData.createTime|date}}</p>
        <p><span>支付时间：</span>{{orderInfoData.paymentTime|date}}</p>
    </div>
    {{orderInfoData}}


    <!-- <order-list :orderList="orderList"></order-list> -->
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import loading from './../common/loading.vue'
import headnav from './../common/header.vue'
import banner from './../common/banner.vue'
import orderList from './order-list.vue'

const components = {
    loading, headnav, banner, orderList
}
export default {
    data() {
        return {
            pagetitle: "订单详情",
            loading: false
        }
    },
    computed: mapGetters({
        orderInfoData: 'orderInfoData'
    }),
    components: components,
    methods: {
        showNum: function() {
            console.log(this.isLogin)
        }
    },
    created() {
        let orderNo = this.$route.params.orderNo
        this.$store.dispatch('getOrderInfo', {
            orderNo: orderNo
        });
    }
}

</script>

<style>

/* line 1, ../sass/ie.scss */

.orderListBox {
    margin-bottom: 0.17rem;
}


/* line 2, ../sass/ie.scss */

.orderListBox .content,
.orderListBox .orderTitle,
.orderListBox .orderStat {
    background: #fff;
    padding: 0 0.18rem;
    line-height: 0.7rem;
    font-size: 0.24rem;
    overflow: hidden;
}


/* line 6, ../sass/ie.scss */

.orderListBox .orderTitle .orderNum {
    float: left;
}


/* line 7, ../sass/ie.scss */

.orderListBox .orderTitle .orderState {
    float: right;
}


/* line 9, ../sass/ie.scss */

.orderListBox dl {
    padding: 0.18rem;
    overflow: hidden;
    border-bottom: 0.01rem solid #e5e5e5;
    background: #f7f7f7;
}


/* line 11, ../sass/ie.scss */

.orderListBox dl dd {
    float: left;
    width: 1.63rem;
    height: 1.63rem;
    margin-right: 0.16rem;
}


/* line 13, ../sass/ie.scss */

.orderListBox dl dd img {
    display: block;
    width: 100%;
    height: 100%;
}


/* line 15, ../sass/ie.scss */

.orderListBox dl dt {
    text-align: left;
    font-size: 0.23rem;
    color: #000;
    overflow: hidden;
}


/* line 16, ../sass/ie.scss */

.orderListBox dl .proName {
    padding-top: 0.08rem;
}


/* line 18, ../sass/ie.scss */

.orderListBox dl .proName p {
    line-height: 0.3rem;
    height: 0.6rem;
}


/* line 20, ../sass/ie.scss */

.orderListBox dl .proAttribute {
    color: #999999;
    height: 0.65rem;
}


/* line 23, ../sass/ie.scss */

.orderListBox dl .proPrice {
    line-height: 0.3rem;
}


/* line 25, ../sass/ie.scss */

.orderListBox dl .proPrice .proNum {
    float: right;
}


/* line 28, ../sass/ie.scss */

.orderListBox .orderStat {
    margin-bottom: 0.02rem;
}


/* line 30, ../sass/ie.scss */

.orderListBox .orderStat p {
    color: #000;
    text-align: right;
}


/* line 32, ../sass/ie.scss */

.orderListBox .btns {
    padding: 0.18rem;
    background: #fff;
    overflow: hidden;
}


/* line 34, ../sass/ie.scss */

.orderListBox .btns a {
    width: 1.25rem;
    text-align: center;
    display: inline-block;
    float: right;
    font-size: 0.25rem;
    line-height: 0.52rem;
    border-radius: 0.04rem;
    margin-left: 0.18rem;
    border: 0.01rem solid #666;
    color: #666;
}


/* line 35, ../sass/ie.scss */

.orderListBox .btns .orderInfoBtn {
    border: 0.01rem solid #ff2772;
    color: #ff2772;
}

</style>

<template>

<div>
    <div class="orderListBox" v-for="data in orderList">
        <div class="orderTitle">
            <span class="orderNum">订单编号：{{data.no}}</span>
            <span class="orderState">{{data.orderStatusName}}</span>
        </div>
        <div v-for="d in data.orderItemList">
            <router-link :to="'/detail/'+d.productId">
                <dl>
                    <dd>
                        <img :src="d.productImgUrl">
                    </dd>
                    <dt class="proName"><p>{{d.productName}}</p></dt>
                    <dt class="proAttribute">参考身高：130  颜色分类：玫红色（女童）</dt>
                    <dt class="proPrice">¥{{d.totalPayment}}  (可抵用{{d.unitVouchers}}优券)<span class="proNum">x{{d.count}}</span></dt>
                </dl>
            </router-link>
        </div>
        <div class="orderStat">
            <p>共1件商品 合计￥{{data.totalPay}}+{{data.totalVouchers}}优券（含运费￥{{data.totalDeliveryFee}}）</p>
        </div>
        <div class="btns">
            <router-link v-show="data.orderStatusName=='待付款'" class="orderInfoBtn" to="/user">立即支付</router-link>
            <a v-show="data.orderStatusName=='待付款'" @click="cancelOrder(data.no)">取消订单</a>
            <router-link :to="'/orderInfo/'+data.no">订单详情</router-link>
        </div>
    </div>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
export default {
    methods: {
        cancelOrder: function(num) {
            console.log(num)
        }
    },
    props: ['orderList']
}

</script>

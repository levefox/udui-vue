<style>

.loginBox {
    height: 3.7rem;
    overflow: hidden;
    position: relative;
    margin-bottom: 0.36rem;
}

.loginBox .toLogin {
    width: 2.68rem;
    height: 0.68rem;
    text-align: center;
    margin: 1.7rem auto 0;
    border: 2px solid #fff6f9;
    border-radius: 0.04rem;
    overflow: hidden;
}

.loginBox .toLogin a {
    color: #fff6f9;
    font-size: 0.32rem;
    float: left;
    display: inline-block;
    width: 1.3rem;
    line-height: 0.68rem;
}

.loginBox .toLogin span {
    color: #fff6f9;
    font-size: 0.32rem;
    width: 0.02rem;
    float: left;
    display: inline-block;
    line-height: 0.64rem;
}

.loginBox .uInfo {
    margin: 1.16rem 0.18rem 0;
}

.loginBox .uInfo dl {
    width: 100%;
    height: 1.24rem;
    overflow: hidden;
}

.loginBox .uInfo dl dd {
    width: 1.2rem;
    height: 1.2rem;
    border: 0.02rem solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    float: left;
    background: url("../../../src/assets/images/icn/touxiang.png") center center no-repeat;
    background-size: 100% 100%;
}

.loginBox .uInfo dl dd img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
}

.loginBox .uInfo dl .uName {
    padding: 0 0.18rem 0 0.29rem;
    font-size: 0.3rem;
    line-height: 1.24rem;
    float: left;
}

.loginBox .uInfo dl .uLevel {
    font-size: 0.24rem;
    line-height: 1.24rem;
    float: left;
}

.loginBox .uInfo dl .fr {
    float: right;
    width: 0.15rem;
    height: 1.24rem;
    background: url("../../../src/assets/images/icn/icon-right-w.png") center center no-repeat;
    background-size: 0.15rem 0.27rem;
}

.loginBox .uOrder {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
}

.loginBox .uOrder ul {
    overflow: hidden;
    height: 0.9rem;
}

.loginBox .uOrder ul .dd {
    float: left;
}

.loginBox .uOrder ul .dd i {
    padding: 0 0.11rem;
    margin-right: 0.1rem;
    background: url("../../../src/assets/images/icn/icon-dd.png") center center no-repeat;
    background-size: 0.22rem 0.27rem;
}

.loginBox .uOrder ul .md {
    float: right;
}

.loginBox .uOrder ul .md i {
    padding: 0 0.11rem;
    margin-right: 0.1rem;
    background: url("../../../src/assets/images/icn/icon-md.png") center center no-repeat;
    background-size: 0.22rem 0.27rem;
}

.loginBox .uOrder ul li {
    width: 3.74rem;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
}

.loginBox .uOrder ul li a {
    display: block;
    line-height: 0.9rem;
    text-align: center;
    font-size: 0.29rem;
}

.loging {
    background: url("../../../src/assets/images/icn/ulogined.jpg") no-repeat;
    background-size: 100% 100%;
}

.ulogin {
    background: #fa6297;
}

.uMenu {
    overflow: hidden;
    margin-bottom: 0.36rem;
}

.uMenu ul {
    width: 7.52rem;
}

.uMenu ul li {
    width: 1.86rem;
    float: left;
    background: #fff;
    border-right: 0.02rem solid #eeeeee;
    border-bottom: 0.02rem solid #eeeeee;
}

.uMenu ul li a {
    display: block;
    padding: 0.58rem 0;
}

.uMenu ul li a i {
    display: block;
    width: 0.42rem;
    height: 0.42rem;
    margin: 0 auto 0.3rem;
}

.uMenu ul li a .myWallet {
    background: url("../../../src/assets/images/icn/myWallet.png") 0 0 no-repeat;
    background-size: 100% 100%;
}

.uMenu ul li a .hongbao {
    background: url("../../../src/assets/images/icn/hongbao.png") 0 0 no-repeat;
    background-size: 100% 100%;
}

.uMenu ul li a .shoucang {
    background: url("../../../src/assets/images/icn/shoucang.png") 0 0 no-repeat;
    background-size: 100% 100%;
}

.uMenu ul li a .activity {
    background: url("../../../src/assets/images/icn/myActivity.png") 0 0 no-repeat;
    background-size: 100% 100%;
}

.uMenu ul li a .invite {
    background: url("../../../src/assets/images/icn/invite.png") 0 0 no-repeat;
    background-size: 100% 100%;
}

.uMenu ul li a .friend {
    background: url("../../../src/assets/images/icn/friend.png") 0 0 no-repeat;
    background-size: 100% 100%;
}

.uMenu ul li a .myReward {
    background: url("../../../src/assets/images/icn/myReward.png") 0 0 no-repeat;
    background-size: 100% 100%;
}

.uMenu ul li a .partner {
    background: url("../../../src/assets/images/icn/partner.png") 0 0 no-repeat;
    background-size: 100% 100%;
}

.uMenu ul li a p {
    color: #333333;
    font-size: 0.24rem;
    text-align: center;
}

.uSeeting {
    border-top: 0.02rem solid #e1e1e1;
}

.uSeeting li {
    border-bottom: 0.02rem solid #e1e1e1;
    background: #fff;
}

.uSeeting li a {
    display: block;
    overflow: hidden;
    height: 0.88rem;
    margin: 0 0.26rem 0 0.17rem;
    background: url("../../../src/assets/images/icn/icon-right.png") right center no-repeat;
    background-size: 0.23rem 0.38rem;
}

.uSeeting li a p {
    color: #000;
    text-align: left;
    font-size: 0.3rem;
    line-height: 0.88rem;
    padding-left: 0.19rem;
    float: left;
}

.uSeeting li a p span {
    color: #878787;
}

.uSeeting li a i {
    padding: 0.44rem 0.14rem;
    background: url("../../../src/assets/images/icn/icon-set.png") center center no-repeat;
    background-size: 0.28rem 0.28rem;
    float: left;
}

.uSeeting li a .kd-ico {
    background: url("../../../src/assets/images/icn/icon-shop.png") center center no-repeat;
    background-size: 0.27rem 0.27rem;
}

</style>

<template>

<div id="user-center-box">
    <transition name="slide-fade">
        <div id="mall" v-show="true">
        </div>
    </transition>
    <div class="loginBox" :class="[userInfo.isLogin?'loging':'ulogin']" @click="showNum()">
        <div class="toLogin" v-if="!userInfo.isLogin">
            <router-link to="/login">登录</router-link>
            <span>|</span>
            <router-link to="/login">注册</router-link>
        </div>
        <div v-if="userInfo.isLogin" class="uInfo">
            <router-link to="/userInfo">
                <dl>
                    <dd><img v-show="userInfo.headPic" :src="userInfo.headPic"></dd>
                    <dt class="uName">{{userInfo.userName}}</dt>
                    <dt class="uLevel">普通会员</dt>
                    <dt class="fr"></dt>
                </dl>
            </router-link>
            <div class="uOrder">
                <ul>
                    <li class="dd">
                        <router-link to="/userOrders">
                            <i></i>我的订单
                        </router-link>
                    </li>
                    <li class="md">
                        <router-link to="/myPay">
                            <i></i>我的买单
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="uMenu">
        <ul class="clearfix">
            <li>
                <router-link to="/myWallet">
                    <i class="myWallet"></i>
                    <p>我的钱包</p>
                </router-link>
            </li>
            <li>
                <router-link to="/myEnvlop">
                    <i class="hongbao"></i>
                    <p>我的红包</p>
                </router-link>
            </li>
            <li>
                <router-link to="/login">
                    <i class="shoucang"></i>
                    <p>我的收藏</p>
                </router-link>
            </li>
            <li>
                <router-link to="/myActivity">
                    <i class="activity"></i>
                    <p>我的活动</p>
                </router-link>
            </li>
            <li>
                <router-link to="/login">
                    <i class="invite"></i>
                    <p>邀请会员</p>
                </router-link>
            </li>
            <li>
                <router-link to="/login">
                    <i class="friend"></i>
                    <p>我的好友</p>
                </router-link>
            </li>
            <li>
                <router-link to="/login">
                    <i class="myReward"></i>
                    <p>我的奖励</p>
                </router-link>
            </li>
            <li>
                <router-link to="/login">
                    <i class="partner"></i>
                    <p>合伙人福利</p>
                </router-link>
            </li>
        </ul>
    </div>
    <ul class="uSeeting">
        <li>
            <router-link to="/login">
                <i class="set-ico"></i>
                <p>设置</p>
            </router-link>
        </li>
        <li>
            <router-link to="/login">
                <i class="kd-ico"></i>
                <p>我要开店<span>(同城商家申请)</span></p>
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
import headnav from './../common/header.vue'

const components = {
    headnav
}
export default {
    computed: mapGetters({
        userInfo: 'userInfo'
    }),
    components: components,
    methods: {
        showNum: function() {
            console.log(this.isLogin)
        }
    },
    created() {
        if (!this.userInfo.isLogin) {
            this.$store.dispatch('getUserInfo');
        }
    }
}

</script>

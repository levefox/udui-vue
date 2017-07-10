<style>

/* line 1, ../sass/ie.scss */

#login-box {
    height: 100%;
}


/* line 2, ../sass/ie.scss */

.login {
    height: 100%;
    padding: 0.72rem 0.18rem 0;
    background: #fff;
}


/* line 4, ../sass/ie.scss */

.login .input-form {
    height: 0.86rem;
    border: 0.02rem solid #dadada;
    border-radius: 0.04rem;
    margin-bottom: 0.36rem;
    overflow: hidden;
}


/* line 6, ../sass/ie.scss */

.login .input-form i {
    width: 0.68rem;
    height: 100%;
    dispaly: block;
    float: left;
}


/* line 7, ../sass/ie.scss */

.login .input-form .icon-user {
    background: url("../../../src/assets/images/icn/icon-user.png") center center no-repeat;
    background-size: 0.25rem 0.38rem;
}


/* line 8, ../sass/ie.scss */

.login .input-form .icon-dock {
    background: url("../../../src/assets/images/icn/icon-dock.png") center center no-repeat;
    background-size: 0.22rem 0.37rem;
}


/* line 9, ../sass/ie.scss */

.login .input-form input {
    width: 5.3rem;
    height: 100%;
    dispaly: block;
    float: left;
    font-size: 0.36rem;
    color: #000;
    line-height: 100%;
}


/* line 16, ../sass/ie.scss */

.login .input-form span {
    dispaly: block;
    height: 100%;
}


/* line 17, ../sass/ie.scss */

.login .input-form .icon-del {
    width: 0.46rem;
    float: left;
    background: url("../../../src/assets/images/icn/icon-del.png") center center no-repeat;
    background-size: 0.28rem 0.28rem;
}


/* line 18, ../sass/ie.scss */

.login .input-form .icon-show {
    width: 0.46rem;
    background: url("../../../src/assets/images/icn/icon-show.png") center center no-repeat;
    background-size: 0.3rem auto;
    float: right;
}


/* line 20, ../sass/ie.scss */

.login .subBtn {
    display: block;
    width: 100%;
    height: 0.72rem;
    color: #fff;
    border: none;
    border-radius: 0.06rem;
    background: #ff2772;
    font-size: 0.3rem;
    line-height: 100%;
    font-weight: blod;
    margin-bottom: 0.7rem;
}


/* line 23, ../sass/ie.scss */

.login .other {
    overflow: hidden;
    margin: 0 auto;
    width: 3.08rem;
}


/* line 25, ../sass/ie.scss */

.login .other li {
    float: left;
}


/* line 27, ../sass/ie.scss */

.login .other li a {
    font-size: 0.3rem;
    color: #ff2772;
    float: left;
}


/* line 29, ../sass/ie.scss */

.login .other .divd {
    font-size: 0.3rem;
    color: #ff2772;
    width: 0.68rem;
    text-align: center;
    float: left;
}

</style>

<template>

<div id="login-box">
    <headnav v-bind:title="pagetitle"></headnav>
    <div class="login">
        <div class="input-form">
            <i class="icon-user"></i>
            <input v-model="userName" type="text" placeholder="用户名/手机号" />
            <span v-show="userName!=''" @click="userName=''" class="icon-del"></span>
        </div>
        <div class="input-form">
            <i class="icon-dock"></i>
            <input v-model="passWord" type="password" placeholder="密码" />
            <span v-show="passWord!=''" @click="passWord=''" class="icon-del"></span>
            <span class="icon-show"></span>
        </div>
        <button class="subBtn" @click="loginfn({phone:userName,pwd:passWord})">登录</button>
        <button class="subBtn" @click="loginfn({phone:userName,pwd:passWord})">验证</button>
        <ul class="clearfix other">
            <li>
                <router-link to="/login">手机注册</router-link>
            </li>
            <li class="divd">|</li>
            <li>
                <router-link to="/login">忘记密码</router-link>
            </li>
        </ul>
    </div>
</div>

</template>

<script type="text/javascript">

import {
    mapActions
}
from 'vuex'
import headnav from './header.vue'
const components = {
    headnav
}
export default {
    data() {
            return {
                pagetitle: "登录",
                userName: '',
                passWord: ''
            }
        },
        components: components,
        methods: mapActions([
            'loginfn'
        ])
}

</script>

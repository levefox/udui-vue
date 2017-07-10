<style>

/* line 1, ../sass/ie.scss */

#footMenu {
    width: 100%;
    height: 0.88rem;
    background-color: #f7f7f7;
    position: fixed;
    overflow: hidden;
    bottom: 0rem;
    border-top: 0.01rem solid #dcdcdc;
    padding: 0 0 0.1rem;
    z-index: 3;
}

#footMenu a {
    display: block;
    float: left;
    width: 20%;
    height: 100%;
}

#footMenu .index i {
    background: url('../../../src/assets/images/icn/home.png') no-repeat;
    background-size: 0.56rem 0.44rem;
}

#footMenu .mall i {
    background: url('../../../src/assets/images/icn/mall.png') no-repeat;
    background-size: 0.56rem 0.44rem;
}

#footMenu .tcshop i {
    background: url('../../../src/assets/images/icn/tc.png') no-repeat;
    background-size: 0.56rem 0.44rem;
}

#footMenu .shopcar i {
    background: url('../../../src/assets/images/icn/car.png') no-repeat;
    background-size: 0.56rem 0.44rem;
}

#footMenu .user i {
    background: url('../../../src/assets/images/icn/user.png') no-repeat;
    background-size: 0.56rem 0.44rem;
}
#footMenu .index i.cur {
    background: url('../../../src/assets/images/icn/home2.png') no-repeat;
    background-size: 0.56rem 0.44rem;
}

#footMenu .mall i.cur {
    background: url('../../../src/assets/images/icn/mall2.png') no-repeat;
    background-size: 0.56rem 0.44rem;
}

#footMenu .tcshop i.cur {
    background: url('../../../src/assets/images/icn/tc2.png') no-repeat;
    background-size: 0.56rem 0.44rem;
}

#footMenu .shopcar i.cur {
    background: url('../../../src/assets/images/icn/car2.png') no-repeat;
    background-size: 0.56rem 0.44rem;
}

#footMenu .user i.cur {
    background: url('../../../src/assets/images/icn/user2.png') no-repeat;
    background-size: 0.56rem 0.44rem;
}

#footMenu a i{
    display: block;
    width: 0.56rem;
    height: 0.44rem;
    margin: 0.14rem auto 0;
}

#footMenu a p{
    color: #666666;
    font-size: 0.24rem;
    text-align: center;
}

#footMenu a p.cur{
    color: #ff2772;
}

.foot-enter-active,
.foot-leave-active {
    transition: all 0.2s;
}

.foot-enter,
.foot-leave-active {
    margin-bottom: -0.89rem;
}

</style>

<template>
    <transition name="foot">
        <div id="footMenu" v-if="true">
            <router-link to="/index" class="index" @click="heiline(1)">
                <i :class="[iscur==1 ?'cur':'']"></i>
                <p :class="[iscur==1 ?'cur':'']">首页</p>
            </router-link>
            <router-link to="/mall" class="mall" @click="heiline(2)">
                <i :class="[iscur==2 ?'cur':'']"></i>
                <p :class="[iscur==2 ?'cur':'']">商城</p>
            </router-link>
            <router-link to="/tcshop" class="tcshop" @click="heiline(3)">
                <i :class="[iscur==3 ?'cur':'']"></i>
                <p :class="[iscur==3 ?'cur':'']">同城</p>
            </router-link>
            <router-link to="/shopcar" class="shopcar" @click="heiline(4)">
                <i :class="[iscur==4 ?'cur':'']"></i>
                <p :class="[iscur==4 ?'cur':'']">购物车</p>
            </router-link>
            <router-link to="/user" class="user" @click="heiline(5)">
                <i :class="[iscur==5 ?'cur':'']"></i>
                <p :class="[iscur==5 ?'cur':'']">我的</p>
            </router-link>
        </div>
    </transition>
</template>

<script type="text/javascript">

export default {
    data() {
            return {
                iscur: null,
                show: true
            }
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'changeiscur'
        },
        methods: {
            heiline: function(num) {
                this.iscur = num;
            },
            changeiscur: function() {
                let path = this.$route.path;
                switch (path) {
                    case '/index':
                        this.iscur = 1
                        break;
                    case '/mall':
                        this.iscur = 2
                        break;
                    case '/tcshop':
                        this.iscur = 3
                        break;
                    case '/shopcar':
                        this.iscur = 4
                        break;
                    case '/user':
                        this.iscur = 5
                        break;
                    default:
                        break;
                }
            }
        }
}

</script>

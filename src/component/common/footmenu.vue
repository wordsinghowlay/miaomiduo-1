<style>

/* line 1, ../sass/ie.scss */

#footMenu {
    width: 100%;
    height: 0.8rem;
    position: fixed;
    overflow: hidden;
    bottom: 0rem;
    padding: 0 0 0.1rem;
    z-index: 3;
}

#footMenu a {
    display: block;
    float: left;
    width: 1.5rem;
    background: #fff;
    height: 1.5rem;
    border-radius: 50%;
    border: 1px solid #a5d7ee;
    box-sizing:border-box;
}

#footMenu a i {
    text-align: center;
    font-size: 0.4rem;
    color: #a5d7ee;
    /*background: url('../../../src/assets/images/icn/home.png') no-repeat;
    background-size: 0.56rem 0.44rem;*/
}
#footMenu a div{
    width: 100%;
    height: 100%;
}
#footMenu .mall i {
    position: relative;
    top: -0.06rem;
}

#footMenu a i{
    display: block;
    width: 0.56rem;
    height: 0.44rem;
    margin: 0.14rem auto 0;
}

#footMenu a p{
    color: #a5d7ee;
    font-size: 0.24rem;
    text-align: center;
}

#footMenu a p.cur{
    color: #fff;
}
#footMenu a i.cur{
    color: #fff;
}
#footMenu a.cur{
    background: #a5d7ee;
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
            <router-link to="/index" class="index" :class="[footMenuActive==1 ?'cur':'']">
                <div @click="setFootMenuActive(1)">
                    <i class="iconfont icon-cat" :class="[footMenuActive==1 ?'cur':'']"></i>
                    <p :class="[footMenuActive==1 ?'cur':'']">喵zone</p>
                </div>
            </router-link>
            <router-link to="/mall" class="mall" :class="[footMenuActive==2 ?'cur':'']">
                <div @click="setFootMenuActive(2)">
                    <i class="iconfont icon-pussy" :class="[footMenuActive==2 ?'cur':'']"></i>
                    <p :class="[footMenuActive==2 ?'cur':'']">喵商城</p>
                </div>
            </router-link>
            <router-link to="/tcshop" class="tcshop" :class="[footMenuActive==3 ?'cur':'']">
                <div @click="setFootMenuActive(3)">
                    <i class="iconfont icon-cat1" :class="[footMenuActive==3 ?'cur':'']"></i>
                    <p :class="[footMenuActive==3 ?'cur':'']">喵用品</p>
                </div>
            </router-link>
            <router-link to="/shopCart" class="shopcar" :class="[footMenuActive==4 ?'cur':'']">
                <div @click="setFootMenuActive(4)">
                    <i class="iconfont icon-ziyuan" :class="[footMenuActive==4 ?'cur':'']"></i>
                    <p :class="[footMenuActive==4 ?'cur':'']">购物车</p>
                </div>
            </router-link>
            <router-link to="/user" class="user" :class="[footMenuActive==5 ?'cur':'']">
                <div @click="setFootMenuActive(5)">
                    <i class="iconfont icon-mood" :class="[footMenuActive==5 ?'cur':'']"></i>
                    <p :class="[footMenuActive==5 ?'cur':'']">铲屎官</p>
                </div>
            </router-link>
        </div>
    </transition>
</template>

<script type="text/javascript">
import {
    mapGetters
}
from 'vuex'
export default {
    data() {
        return {
            iscur: null,
            show: true
        }
    },
    computed: mapGetters({
        footMenuActive: 'footMenuActive'
    }),
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'changeiscur'
    },
    methods: {
        setFootMenuActive: function(num) {
            this.$store.commit('Set_ft_active',num)
        },
        changeiscur: function() {
            let path = this.$route.path;
            switch (path) {
                case '/index':
                    this.$store.commit('Set_ft_active',1)
                    break;
                case '/mall':
                    this.$store.commit('Set_ft_active',2)
                    break;
                case '/tcshop':
                    this.$store.commit('Set_ft_active',3)
                    break;
                case '/shopCart':
                    this.$store.commit('Set_ft_active',4)
                    break;
                case '/user':
                    this.$store.commit('Set_ft_active',5)
                    break;
                default:
                    break;
            }
        }
    },
    created() {
        let path = this.$route.path;
        switch (path) {
            case '/index':
                this.$store.commit('Set_ft_active',1)
                break;
            case '/mall':
                this.$store.commit('Set_ft_active',2)
                break;
            case '/tcshop':
                this.$store.commit('Set_ft_active',3)
                break;
            case '/shopCart':
                this.$store.commit('Set_ft_active',4)
                break;
            case '/user':
                this.$store.commit('Set_ft_active',5)
                break;
            default:
                break;
        }
    }
}

</script>

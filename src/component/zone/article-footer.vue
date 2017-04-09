<style scoped>

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
            <a>
                <div>
                    <i class="iconfont icon-xin1"></i>
                    <p>赞同</p>
                </div>
            </a>
            <a>
                <div>
                    <i class="iconfont icon-pussy"></i>
                    <p>感谢作者</p>
                </div>
            </a>
            <a>
                <div>
                    <i class="iconfont icon-icon_favor"></i>
                    <p>加入收藏</p>
                </div>
            </a>
            <router-link to="/shopCart" class="shopcar">
                <div>
                    <i class="iconfont icon-iconfontpinglun"></i>
                    <p>评论列表</p>
                </div>
            </router-link>
            <a>
                <div>
                    <i class="iconfont icon-shuxie"></i>
                    <p>发表评论</p>
                </div>
            </a>
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
        }
    },
    computed: mapGetters({

    }),
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'changeiscur'
    },
    methods: {
    },
    created() {

    }
}

</script>

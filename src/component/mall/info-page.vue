<style scoped>
.index-box{
    padding: 0.8rem 0;
}
.text-content{
    background: #fff;
    padding: 0.4rem;
}
.text-content h3{
    text-align: center;
}
.text-content p{
    text-indent: 2em;
    color: #999999;
}
.price{
    background: #fff;
    text-align: center;
    font-size: 0.3rem;
    line-height: 0.4rem;
    padding-bottom: 0.2rem;
}
.label{
    padding: 0.2rem;
    background: #fff;
    border-top: 1px solid #999;
}
.label span{
    display: inline-block;
    padding: 0 0.08rem;
    background: #eff3f6;
}
</style>

<template>

<div class="index-box">
    <headnav v-bind:headConfig="headConfig"></headnav>
    <banner v-bind:banner="{styleObj:{height:'auto'},itemData:mallBannerList,dataType:1,filterType:5}" :bannerConfig="bannerConfig"></banner>
    <div class="text-content">
        <h3>尤利特（unit） 车载吸尘器  YD-5016 品质保障 终身质保 免费维修</h3>
        <p>
            你一定会发现，现在的按钮是死的，你点击它它根本不会有什么反应。因为根本没有往上面添加事件。但是问题来了，LikeButton 类里面是虽然说有一个 button，但是这玩意根本就是在字符串里面的。你怎么能往一个字符串里面添加事件呢？DOM 事件的 API 只有 DOM 结构才能用。
        </p>
    </div>
    <div class="price">
        <p>￥6888</p>
    </div>
    <div class="label">
        <span>认证猫舍</span>
        <span>全国空运</span>
        <span>双C血统</span>
    </div>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import banner  from './../common/banner.vue'

const components = {
    headnav, banner
}
export default {
    data() {
        return {
            headConfig : {
                title : "详情页",
                backBtn : true,
                leftIcon : true,
                leftIconClass : 'icon-zuo'
            },
            bannerConfig : {
                direction: 'horizontal',
                autoplay: 2000,
                spend: 2000,
                loop: true,
                observer: true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,
                //修改swiper的父元素时，自动初始化swiper
                // 如果需要分页器
                pagination: '.swiper-pagination'
            }
        }
    },
    computed: mapGetters({
        mallBannerList: 'mallBannerList'
    }),
    methods: {
    },
    components: components,
    created() {
    }
}

</script>

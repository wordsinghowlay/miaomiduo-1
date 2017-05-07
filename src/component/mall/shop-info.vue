<style scoped>
.shop-box{
    padding-top: 0.8rem;
}
.shop-logo{
}
.shop-logo img{
    display: block;
}
/*nav{
    width: 100%;
}
nav span{
    display: inline-block;
    text-align: center;
    width: 24%;
}*/
ul, ol, li {list-style-type:none;vertical-align:0}
a {outline-style:none;color:#535353;text-decoration:none}
a:hover { color: #D40000; text-decoration: none}
.clear{height:0; overflow:hidden; clear:both}
/* 效果CSS开始 */
body {
 -webkit-backface-visibility: hidden;
}
.demo {
 margin: 0px auto;
 text-align:center;
}
.nav li	{
 position: relative;
 display: inline-block;
 /*margin-left: -50px;*/
 -webkit-transition: all 0.4s linear;
 -moz-transition: all 0.4s linear;
 -o-transition: all 0.4s linear;
 -ms-transition: all 0.4s linear;
 transition: all 0.4s linear;
 overflow: hidden;
}
.nav li a {
 display: inline-block;
 width: 1.43rem;
 height: 1.43rem;
 /*padding: 0.25rem;*/
 border-radius: 50%;
 border-width: 8px;
 border-style: solid;
 box-sizing:border-box;
}
.nav li:hover {
 z-index: 11;
 -webkit-transform: scale(1.1);
 -moz-transform: scale(1.1);
 -o-transform: scale(1.1);
 -ms-transform: scale(1.1);
 transform: scale(1.1);
}
.nav li:hover a {
 text-decoration: none;
}
.nav li:hover span {
 -webkit-transition: all 0.4s linear;
 -moz-transition: all 0.4s linear;
 -o-transition: all 0.4s linear;
 -ms-transition: all 0.4s linear;
 transition: all 0.4s linear;
 -webkit-animation: moveFromBottom 0.3s ease;
 -moz-animation: moveFromBottom 0.3s ease;
 -o-animation: moveFromBottom 0.3s ease;
 -ms-animation: moveFromBottom 0.3s ease;
 animation: moveFromBottom 0.3s ease;
}
.nav li:nth-child(1) a {
 color: #4d9683;
 text-shadow: 0 1px 0 #9de3cf;
 border-color: #549e89;
 background-color: #51c9a7;
}
.nav li:nth-child(2) a {
 color: #be607e;
 text-shadow: 0 1px 0 #de8ba5;
 border-color: #e499b0;
 background-color: #e67b9c;
}
.nav li:nth-child(3) a {
 color: #5e9eb4;
 text-shadow: 0 1px 0 #adddec;
 border-color: #a2cfde;
 background-color: #7ec9e3;
}
.nav li:nth-child(4) a {
 color: #ba9d5e;
 text-shadow: 0 1px 0 #f5e0ad;
 border-color: #dcc999;
 background-color: #f0cd78;
}
.nav li:nth-child(5) a {
 color: #b468a2;
 text-shadow: 0 1px 0 #e8acd8;
 border-color: #d8abcd;
 background-color: #dd91cb;
}
.nav li:nth-child(1):hover a {
 color: #0f775c;
 text-shadow: 0 1px 0 #81e6c9;
 border-color: #0a8462;
 background-color: #00c18c;
}
.nav li:nth-child(2):hover a {
 color: #b12a55;
 text-shadow: 0 1px 0 #ff95b7;
 border-color: #ba335c;
 background-color: #ea5180;
}
.nav li:nth-child(3):hover a {
 color: #2883a2;
 text-shadow: 0 1px 0 #9cdef2;
 border-color: #4397b3;
 background-color: #55c1e5;
}
.nav li:nth-child(4):hover a {
 color: #ab8228;
 text-shadow: 0 1px 0 #ffe199;
 border-color: #b08f3e;
 background-color: #f8c64d;
}
.nav li:nth-child(5):hover a {
 color: #a33689;
 text-shadow: 0 1px 0 #ec97d6;
 border-color: #b7569f;
 background-color: #dd70c3;
}
.nav span {
 display: block;
 line-height:1.2rem;
 font-size: 0.3rem;
 font-style: normal;
}
.nav span:before {
 display: block;
}
/*.nav li:nth-child(1) span:before {
 content: "home";
}
.nav li:nth-child(2) span:before {
 content: "phone";
}
.nav li:nth-child(3) span:before {
 content: "wifi";
}
.nav li:nth-child(4) span:before {
 content: "setting";
}
.nav li:nth-child(5) span:before {
 content: "twitter";
}*/
@-webkit-keyframes moveFromBottom {
  from {
    -webkit-transform: translateY(120%) scale(0.5) ;
    opacity: 0;
  }
 to {
   -webkit-transform: translateY(0%) scale(1);
   opacity: 1;
 }
}
@-moz-keyframes moveFromBottom {
  from {
    -moz-transform: translateY(120%) scale(0.5) ;
    opacity: 0;
  }
  to {
    -moz-transform: translateY(0%) scale(1);
    opacity: 1;
  }
}
@-ms-keyframes moveFromBottom {
  from {
    -ms-transform: translateY(120%) scale(0.5) ;
    opacity: 0;
  }
  to {
   -ms-transform: translateY(0%) scale(1);
   opacity: 1;
 }
}
@-o-keyframes moveFromBottom {
  from {
    -o-transform: translateY(120%) scale(0.5) ;
    opacity: 0;
  }
  to {
   -o-transform: translateY(0%) scale(1);
   opacity: 1;
 }
}
@keyframes moveFromBottom {
  from {
    transform: translateY(120%) scale(0.5) ;
    opacity: 0;
  }
  to {
   transform: translateY(0%) scale(1);
   opacity: 1;
 }
}
.nav span:before {
 font-family: 'LigatureSymbols';
 text-rendering: optimizeLegibility;
 -webkit-font-smoothing: antialiased;
 -moz-font-smoothing: antialiased;
 -ms-font-smoothing: antialiased;
 -o-font-smoothing: antialiased;
 font-smoothing: antialiased;
 -webkit-font-feature-settings: "liga" 1, "dlig" 1;
 -moz-font-feature-settings: "liga=1, dlig=1";
 -ms-font-feature-settings: "liga" 1, "dlig" 1;
 font-feature-settings: "liga" 1, "dlig" 1;
 font-size: 30px;
}
</style>

<template>
    <div class="shop-box">
        <headnav v-bind:headConfig="headConfig"></headnav>
        <div class="shop-logo">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488530768949&di=c9f508bc01d10bcc8426bbfcb1863048&imgtype=0&src=http%3A%2F%2Fatt.bbs.duowan.com%2Fforum%2F201607%2F04%2F190548zx63s311yuf2d1sy.png">
        </div>
        <nav class="nav">
			<ul>
				<li><a><span>店铺介绍</span></a></li>
				<li><a ><span>店铺首页</span></a></li>
				<li><a><span>全部宝贝</span></a></li>
				<li><a><span>新品上架</span></a></li>
				<li><a><span>一二三四</span></a></li>
			</ul>
		</nav>
        <div>店铺介绍内容</div>
        <div>店铺首页 热卖位置 预定位置 推荐位置</div>
        <div>全部宝贝 筛选 《价格 种类 性别》 </div>
        <div>新品上架 待定</div>
    </div>
</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav      from './../common/header.vue'
import banner       from './../common/banner.vue'
const components = {
    headnav, banner
}
export default {
    data() {
        return {
            headConfig : {
                title : "店铺详情",
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
    components: components,
    methods: {
    },
    created() {
        this.$store.dispatch('getShopInfo',{type:this.$route.params.type,id:this.$route.params.id});
    }
}

</script>

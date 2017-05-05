<style scoped>
.shop-box{
    padding-top: 0.8rem;
}
.shop-logo{
    background: red;
}
nav{
    width: 100%;
}
nav span{
    display: inline-block;
    text-align: center;
    width: 24%;
}
</style>

<template>
    <div class="shop-box">
        <headnav v-bind:headConfig="headConfig"></headnav>
        <div class="shop-logo">
            店铺LOGO图
        </div>
        <nav>
            <span>店铺介绍</span>
            <span>店铺首页</span>
            <span>全部宝贝</span>
            <span>新品上架</span>
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

const components = {
    headnav
}
export default {
    data() {
        return {
            headConfig : {
                title : "店铺详情",
                backBtn : true,
                leftIcon : true,
                leftIconClass : 'icon-zuo'
            }
        }
    },
    computed: mapGetters({
    }),
    components: components,
    methods: {
    },
    created() {
        this.$store.dispatch('getShopInfo',{type:this.$route.params.type,id:this.$route.params.id});
    }
}

</script>

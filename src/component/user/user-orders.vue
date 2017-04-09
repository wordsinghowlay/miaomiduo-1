<style>

.user-orders-box {
    padding-bottom: 0.8rem;
}

</style>

<template>

<div class="user-orders-box">
    <headnav v-bind:title="pagetitle"></headnav>
    <banner v-bind:banner="{dataType:1,itemData:getOrdersCarousel,filterType:5}" v-bind:bannerConfig="bannerConfig"></banner>
    <order-list :orderList="orderList"></order-list>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import banner from './../common/banner.vue'
import orderList from './order-list.vue'

const components = {
    headnav, banner, orderList
}
export default {
    data() {
            return {
                pagetitle: "我的订单",
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
            getOrdersCarousel: 'getOrdersCarousel',
            orderList: 'orderList'
        }),
        components: components,
        methods: {
            showNum: function() {
                console.log(this.isLogin)
            }
        },
        created() {
            this.$store.dispatch('getUserOrders');
        }
}

</script>

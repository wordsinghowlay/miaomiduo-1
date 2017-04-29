<style>
.mall-index-box{
    padding: 0.82rem 0 1rem 0;
}
</style>

<template>
    <div class="mall-index-box">
        <headnav v-bind:headConfig="headConfig" v-on:leftEvent="subMenu = true" v-on:showRight="searchActive = true"></headnav>
        <banner v-bind:banner="{styleObj:{height:'auto'},itemData:mallBannerList,dataType:1,filterType:5}" :bannerConfig="bannerConfig"></banner>
        <transition name="subMenu-fade">
            <subMenu v-show="subMenu" v-on:hide="subMenu = false"></subMenu>
        </transition>
        <transition name="search-fade">
            <search v-bind:searchType="'mall'" v-show="searchActive" v-on:hide="searchActive = false"></search>
        </transition>
        <shop-column></shop-column>
        <pro-column></pro-column>
        <hot-sale></hot-sale>
    </div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav      from './../common/header.vue'
import banner       from './../common/banner.vue'
import subMenu      from './../common/mall-sub-menu.vue'
import search       from './../common/search.vue'
import shopColumn   from './shop-column.vue'
import proColumn    from './pro-column.vue'
import HotSale      from './hot-sale.vue'

const components = {
    headnav, banner, subMenu, search, shopColumn, proColumn, HotSale
}
export default {
    data() {
        return {
            headConfig : {
                title : "喵商城",
                leftIcon : true,
                leftIconClass : 'icon-liebiao',
                rightIcon : true,
                rightIconClass : 'icon-search'

            },
            subMenu : false,
            searchActive : false,
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
        showNum: function() {
            alert(1)
        }
    },
    created() {
        this.$store.dispatch('getmallIndexData',{type:'mall'});
    }
}

</script>

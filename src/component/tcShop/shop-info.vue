<style>
.shop-info {
    padding: 0.24rem 0.18rem;
    background: #fff;
}
.shopName {
    font-size: 0.32rem;
    color: #333;
}
.shopScore {
    position: relative;
    margin-top: 0.2rem;
    padding-left: 2.4rem;
    overflow: hidden;
}
.shopScore .score {
    position: absolute;
    left: 0;
    top: 0.06rem;
    z-index: 2;
    width: 0;
    height: 0.26rem;
    background: url("http://fstatic.udui.com/static/images/score.png") 0 -0.81rem no-repeat;
    background-size: 1.6rem 1.6rem;
}
.shopScore .scorebg {
    position: absolute;
    left: 0;
    top: 0.06rem;
    width: 1.34rem;
    height: 0.24rem;
    z-index: 1;
    background: url("http://fstatic.udui.com/static/images/score.png") no-repeat;
    background-size: 1.6rem 1.6rem;
}
.scoreTxt {
    color: #ff7e42;
    font-size: 0.3rem;
}
.avgPrice {
    margin-left: 0.18rem;
    color: #666;
}

.shop-pay {
    padding: 0.18rem;
    margin-top: 0.18rem;
    background: #fff;
    height: 0.72rem;
    line-height: 0.72rem;
}

.shop-pay .voucher {
    font-size: 0.3rem;
    color: #333;
    float: left;
}

.shop-pay .payBtn {
    display: block;
    width: 1.8rem;
    height: 0.72rem;
    float: right;
    background: #ff2772;
    color: #fff;
    text-align: center;
    font-size: 0.32rem;
    border-radius: 0.06rem;
}

.shopContact {
    padding: 0.18rem;
    margin: 0.18rem 0;
    background: #fff;
    height: 0.54rem;
    line-height: 0.54rem;
}

.shopAddr {
    float: left;
    width: 5.58rem;
    height: 0.54rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-right: 1px solid #ddd;
    font-size: 0.252srem;
    color: #666;
}
.shopAddr {
    font-size: 0.26rem;
}
.shopTel {
    float: right;
    text-align: right;
    padding-right: 0.36rem;
}
.shop-product-box{
    overflow: hidden;
    max-height: 4.18rem;
}
.shopGList h3 {
    /*background: #fff url(../images/glistico.png) no-repeat;*/
    background-size: 0.26rem 0.26rem;
    background-position: 0.2rem 0.22rem;
}

.glist h3 {
    padding: 0 0.18rem 0 0.48rem;
    color: #ff7e42;
    height: 0.72rem;
    line-height: 0.72rem;
    font-size: 0.26rem;
    font-weight: normal;
    background: #fff;
}
.glist .more {
    display: block;
    height: 0.54rem;
    line-height: 0.54rem;
    font-size: 0.3rem;
    text-align: center;
    background: #fff;
    color: #ff2772;
}
</style>

<template>
    <div>
        <headnav v-bind:title="pagetitle"></headnav>
        <div class="shop-info-box">
            <div class="shop-logo">
                <img :src="shopInfo.logo" />
            </div>
            <div class="shop-info">
                <div class="shopName">{{shopInfo.name}}</div>
                <div class="shopScore">
                    <p class="score"></p>
                    <p class="scorebg"></p>
                    <div class="scoreTxt">5分</div>
                    <!-- <span class="avgPrice"></span> -->
                </div>
            </div>
            <div class="shop-pay clearfix">
                <p class="voucher">可使用优券抵扣 0% 现金</p>
                <a class="payBtn">买单</a>
            </div>
            <div class="shopContact clearfix">
                <div class="shopAddr">
                    <i class="iconfont icon-location"></i>
                    <span>{{shopInfo.street}}</span>
                </div>
                <div class="shopTel">
                    <a href="tel:15901986383"><i class="iconfont icon-dianhua"></i></a>
                </div>
            </div>
        </div>
        <div class="shopGList glist" v-if="shopProList.length>0">
            <h3>店铺商品</h3>
            <div class="shop-product-box">
                <shop-pro-list :proList="shopProList"></shop-pro-list>
            </div>
            <router-link :to="'/shopProList/sid/'+this.$route.params.sid" class="more">查看更多<i class="iconfont icon-down"></i></router-link>
        </div>
    </div>
</template>

<script type="text/javascript">
import headnav      from './../common/header.vue'
import shopProList  from './shop-pro-list.vue'

import {
    mapGetters
}
from 'vuex'
const components = {
    headnav, shopProList
}
export default {
    computed: mapGetters({
        shopInfo : 'shopInfo',
        shopProList : 'shopProList'
    }),
    data() {
        return {
            pagetitle: '店铺详情',
        }
    },
    methods: {
    },
    mounted: function() {

    },
    components: components,
    created() {
        this.$store.dispatch('getShopInfo',{sid:this.$route.params.sid});
        this.$store.dispatch('getShopProduct',{
            shopId:this.$route.params.sid,
            isShopAllHot : '',
            categoryId   : '',
            isNewGoods   : '',
            keywords     : '',
            intelligentSort : '',
            soldSort     : '',
            priceSort    : '',
            distanceSort : '',
            pageNo       : 1
        })
    }
}

</script>

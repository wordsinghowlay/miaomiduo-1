<style>
.tc-shop-list{
    padding-top: 1.77rem;
    padding-bottom: 0.88rem;
}

.fixed-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
}

</style>

<template>

<div class="tc-shop-list">
    <div class="fixed-header">
        <headnav v-bind:headConfig="headConfig" v-on:showRight="searchActive = true"></headnav>
        <shop-filter></shop-filter>
    </div>
    <shop-list v-bind:shop-list="tcShopList"></shop-list>
    <back-top :show="true"></back-top>
    <loading  :show="false"></loading>
    <transition name="search-fade">
        <search v-bind:searchType="'mall'" v-show="searchActive" v-on:hide="searchActive = false"></search>
    </transition>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav  from './../common/header.vue'
import loading  from './../common/loading.vue'
import shopFilter from './shop-filter.vue'
import shopList from './shop-list.vue'
import backTop from './../common/back-top.vue'
import search   from './../common/search.vue'
const components = {
    headnav, loading, shopFilter, shopList, backTop, search
}
export default {
    computed: mapGetters({
        positionState : 'positionState',
        positionData  : 'positionData',
        filterState   : 'tcFilterState',
        tcShopList    : 'tcShopList',
        shopListLoading: 'shopListLoading',
        lastAreaId    : 'lastAreaId'
    }),
    data() {
        return {
            pagetitle: "同城",
            searchActive : false,
            headConfig : {
                title : "喵服务",
                areaName : true,
                rightIcon : true,
                rightIconClass : 'icon-search'
            }
        }
    },
    components: components,
    methods: {
        showNum: function() {
            alert(1)
        }
    },
    created() {
        // if(this.lastAreaId == null){
        //     this.$store.dispatch('setLastAreaId',this.filterState.areaId);
        // }else{
        //     if(this.lastAreaId == this.filterState.areaId){
        //         return;
        //     }else{
        //         this.$store.dispatch('setLastAreaId',this.filterState.areaId);
        //     }
        // }
        // this.$store.dispatch('initTcPageNo');
        // this.$store.dispatch('getShopList',this.filterState);
        // this.$store.dispatch('getTcShopInitData',{id:this.filterState.areaId})
    }
}

</script>

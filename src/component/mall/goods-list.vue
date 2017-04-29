<style>

#goods-list-box {}

</style>

<template>

<div>
    <headnav v-bind:title="pagetitle" :rightIcon="rightIcon"></headnav>
    <goods-filter></goods-filter>
    <products-list v-bind:proData="goodsList"></products-list>
    <loading :show="goodsListLoading"></loading>
    <back-top :show="true"></back-top>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import headnav from './../common/header.vue'
import loading from './../common/loading.vue'
import backTop from './../common/back-top.vue'
import goodsFilter from './goods-filter.vue'
import productsList from './products-list.vue'
const components = {
    headnav, productsList, goodsFilter, loading, backTop
}
export default {
    data() {
        return {
            pagetitle: '商品列表',
            rightIcon: {
                iconClass:'icon-icon',
                iconType:'0'
            },
            productName: ''
        }
    },
    computed: mapGetters({
        goodsList: 'goodsList',
        filterState: 'mallFilterState',
        goodsListLoading: 'goodsListLoading'
    }),
    methods: {
    },
    components: components,
    created() {
        this.$store.dispatch('initPageNo');
        this.$store.dispatch('getProductTree');
        if(this.$route.params.type=='menu'){
            this.$store.dispatch('setFilterState', {
                proClass: this.$route.params.name,
                categoryId: this.$route.params.id,
                sortValue: 0,
                sortType: true
            });
            this.$store.dispatch('getGoodsList', {
                categoryId: this.filterState.categoryId,
                productName: this.productName,
                sortValue: this.filterState.sortValue,
                sortType: this.filterState.sortType,
                pageNo: this.filterState.pageNo,
                pageSize: this.filterState.pageSize
            });
        }else if(this.$route.params.type=='search'){
            this.$store.dispatch('setFilterState', {
                proClass: this.$route.params.name,
                searchStr: this.$route.params.id,
                sortType : 0,
            });
            this.$store.dispatch('searchGoodsList', {
                searchStr   : this.filterState.searchStr,
                sortType    : this.filterState.sortType,
                categoryId  : this.filterState.categoryId,
                minPrice    : this.filterState.minPrice,
                maxPrice    : this.filterState.minPrice,
                pageNo      : this.filterState.pageNo,
                pageSize    : this.filterState.pageSize
            });
        }
    }
}

</script>

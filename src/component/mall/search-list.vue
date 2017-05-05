<style scoped>

#goods-list-box {}

</style>

<template>

<div>
    <headnav v-bind:headConfig="headConfig" v-on:leftEvent="subMenu = true" v-on:showRight="searchActive = true"></headnav>
    <productsList></productsList>
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
            headConfig : {
                title : "搜索列表",
                backBtn : true,
                leftIcon : true,
                leftIconClass : 'icon-zuo',
                rightIcon : true,
                rightIconClass : 'icon-search'
            },
        }
    },
    computed: mapGetters({
    }),
    methods: {
    },
    components: components,
    created() {
    }
}

</script>

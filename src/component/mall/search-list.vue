<style scoped>

.index-box{
    padding: 0.8rem 0;
}

</style>

<template>

<div class="index-box">
    <headnav v-bind:headConfig="headConfig" v-on:leftEvent="subMenu = true" v-on:showRight="searchActive = true"></headnav>
    <searchFilter></searchFilter>
    <productsList  :proData="{num:20}"></productsList>
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
import searchFilter from './search-filter.vue'
import productsList from './products-list.vue'
const components = {
    headnav, productsList, searchFilter, loading, backTop
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

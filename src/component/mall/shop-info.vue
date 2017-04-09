<style>
</style>

<template>
    <div>
        <headnav v-bind:headConfig="headConfig"></headnav>
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

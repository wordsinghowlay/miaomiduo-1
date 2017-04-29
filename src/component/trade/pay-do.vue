<style>

</style>

<template>

<div class="payDo">
    <headnav v-bind:title="pagetitle"></headnav>

</div>

</template>

<script type="text/javascript">

import {
    mapActions
}
from 'vuex'
import headnav from '../common/header.vue'
const components = {
    headnav
}
export default {
    data() {
        return {
            pagetitle: "订单支付",
            rightIcon:{
                iconClass:'icon-icon'
            }
        }
    },
    components: components
}

</script>

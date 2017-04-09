<style>
.mood-author{
    overflow: hidden;
    height: 0.8rem;
    line-height: 0.8rem;
    padding: 6px 0;
    border-bottom: 1px solid #d7d7d7;
    margin-bottom: 6px;
    position: relative;
}
.mood-author p{
    line-height: 0.36rem;
}
.zym{
    color: #666;
}
.mood-author a{
    position: absolute;
    right: 0;
    top: 6px;
    display: block;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    overflow: hidden;
}
.mood-author a img{
    display: block;
    width: 100%;
    height: 100%;
}
</style>

<template>
    <div class="mood-author">
        <p>奥迪</p>
        <p class="zym">突破科技 启迪未来</p>
        <router-link to="">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2790396100,129677017&fm=23&gp=0.jpg"/>
        </router-link>
    </div>
</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
const components = {}
export default {
    computed: mapGetters({

    }),
    data() {
        return {

        }
    },
    methods: {
    },
    mounted: function() {},
    props: [],
    components: components,
    created() {}
}

</script>

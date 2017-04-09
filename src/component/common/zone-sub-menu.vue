<style>

.sub-menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
}

.sub-menu-box{
    width: 55%;
    height: 100%;
    background: rgba(165,215,238,0.9);
}
.sub-menu-box .user-info{
    padding-top: 0.4rem;
    margin-bottom: 1rem;;
}
.sub-menu-box .user-info img{
    width: 60%;
    margin: 0 auto 0.1rem;;
    display: block;
    border-radius: 50%;
}
.sub-menu-box .user-info p{
    text-align: center;
    color: #fff;
    font-size: 0.36rem;
}
.sub-menu-list{
    margin: 0 10px;
}
.sub-menu-list li{
    text-align: center;
    border-bottom: 1px solid #fff;
    font-size: 0.36rem;
    line-height: 1rem;
}

</style>

<template>

<div class='sub-menu' @click="hide">
    <div class="sub-menu-box">
        <div class="user-info">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2790396100,129677017&fm=23&gp=0.jpg"/>
            <p>蕾姆</p>
        </div>
        <ul class="sub-menu-list">
            <li>综合动态</li>
            <li>与我相关</li>
            <li>晒喵专区</li>
            <li>有问必答</li>
            <li>宠物救助</li>
        </ul>
    </div>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
export default {
    computed: mapGetters({
        }),
    data() {
        return {
            }
    },
    methods:{
        hide : function(){
            this.$emit('hide')
        }
    },
    props: ['searchType'],
    created() {
    }
}

</script>

<style scoped>
header {
    height: 0.6rem;
    background: #a5d7ee;
    border-bottom: 0.01rem solid #dfdfdf;
    padding: 0.1rem 0rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
}
header .backBtn {
    position: absolute;
    color: #fff !important;
    left: 0.15rem;
    top: 0.17rem;
}
header .title{
    color: #fff;
}
header .leftIcon{
    position: absolute;
    color: #fff !important;
    left: 0.26rem;
    top: 0.16rem;
}
header .areaName {
    color: #fff;
    position: absolute;
    left: 0.27rem;
    height: 0.54rem;
    line-height: 0.54rem;
    width: 1.5rem;
}
header .areaName a {
    color: #fff;
    font-size: 0.3rem;
    float: left;
}
header .areaName i {
    margin-left: 0.06rem;
    line-height: 0.54rem;
    position: relative;
    top: 0.03rem;
}
header p {
    font-size: 0.32rem;
    text-align: center;
    line-height: 0.6rem;
}
header .rightTxt {
    display: block;
    width: 1.3rem;
    height: 0.6rem;
    text-align: right;
    line-height: 0.6rem;
    position: absolute;
    z-index: 1;
    right: 0.2rem;
    top: 0.1rem;
    font-size: 0.3rem;
}
header .iconfont {
    font-size: 0.4rem;
}
header .rightIcon {
    color: #fff;
    text-align: center;
    position: absolute;
    right: 0.15rem;
    top: 0.18rem;
}
</style>

<template>

<header class="nav-header">
    <i v-if="headConfig.leftIcon?headConfig.leftIcon:false" @click="emit('leftEvent')" class="leftIcon iconfont" :class="headConfig.leftIconClass"></i>
    <div v-if="headConfig.areaName?headConfig.areaName:false" class="areaName" >
        <router-link to="/selectArea"  id="areaName">{{positionData.city}}</router-link>
        <i class="iconfont icon-xia"></i>
    </div>
    <p v-if="headConfig.title?headConfig.title:false" class="title">{{headConfig.title}}</p>
    <i v-if="headConfig.rightIcon" class="rightIcon iconfont" :class="headConfig.rightIconClass" @click="emit('showRight')"></i>
</header>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
export default {
    computed: mapGetters({
        positionData: 'positionData'
    }),
    data() {
        return {
            areaName : false
        }
    },
    methods: {
        emit : function(str){
            if(this.headConfig.backBtn){
                this.$router.go(-1);
                return;
            }
            this.$emit(str);
        }
    },
    props: ['headConfig'],
    created() {
        let path = this.$route.path;
        switch (path) {
            case '/tcshop':
                this.areaName = true;
                this.backBtn = false;
                break;
            default:
                break;
        }
    }
}
/*
    headConfig : {
        title :         头部标题
        leftIcon        左部Icon是否显示 布尔值
        leftIconClass   左部Icon的class类名
        rightIcon       右部Icon是否显示 布尔值
        rightIconClass  右部Icon的class类名
        backBtn         点击左部Icon是否返回上一页  => 需要配置左部Icon
        areaName        是否显示定位城市名称 布尔值
    }
*/
</script>

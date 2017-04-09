<style>

.mall-sub-menu {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    height: 100%;
    background: rgba(165,215,238,0.86);
}
.mall-sub-menu-box{
    width: 38%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
}
.mall-sub-menu-box .user-info{
    padding-top: 0.4rem;
}
.mall-sub-menu-box .user-info img{
    width: 60%;
    margin: 0 auto 0.1rem;;
    display: block;
    border-radius: 50%;
}
.mall-sub-menu-box .user-info p{
    text-align: center;
    color: #fff;
    font-size: 0.36rem;
}
.mall-sub-menu-list{
    margin: 0 10px;
}
.mall-sub-menu-list li{
    text-align: center;
    border-bottom: 1px solid #fff;
    font-size: 0.36rem;
    line-height: 1rem;
}
.mall-sub-class-box{
    width: 62%;
    position: absolute;
    right: 0;
    padding-top: 150px;
    overflow-x: scroll;
    height: 11rem;
}
.mall-sub-class-box>div{
    margin-bottom: 0.1rem;
}
.mall-sub-class-box .title{
    overflow: hidden;
    margin: 0.16rem 0;
    margin-left: 0.3rem;
    border-left: 14px solid #fff;
}
.mall-sub-class-box .title p{
    float: left;
    color: #fff;
    margin-left: 0.1rem;
    height: 0.45rem;
    line-height: 0.45rem;
}
.mall-sub-class-box .title i{
    float: right;
    color: #fff;
    font-size: 0.3rem;
    margin-right: 0.3rem;
}
.mall-sub-class-box ul{

}
.mall-sub-class-box ul li{
    border-bottom: 2px solid #fff;
    margin-left: 0.2rem;
    font-size: 0.6rem;
    line-height: 100%;
    overflow: hidden;
    padding-bottom: 0.06rem;
}
.mall-sub-class-box ul li img{
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.2rem;
    float: left;
}
.mall-sub-class-box ul li p{
    float: left;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.35rem;
}
.mall-menu-box{
    overflow-x: scroll;
    height: 10.5rem;
}
.subClass-fade-enter-active {
  transition: all .3s ease;
}
.subClass-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.subClass-fade-enter, .subClass-fade-leave-active {
  opacity: 0;
}
.mall-sub-menu i.icon-off{
    position: absolute;
    right: 0;
    top: 0;
    font-size: 0.4rem;
    margin: 0.2rem;
    color: #fff;
    z-index: 2;
}
</style>

<template>

<div class='mall-sub-menu'>
    <i class="iconfont icon-off" @click="hide"></i>
    <div class="mall-sub-menu-box">
        <div class="user-info">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2790396100,129677017&fm=23&gp=0.jpg"/>
            <p>蕾姆</p>
        </div>
        <div class="mall-menu-box">
            <ul class="mall-sub-menu-list">
                <li v-for="data in mallMenuList" @click="getSubClass(data.id)">{{data.name}}</li>
            </ul>
        </div>
    </div>
    <div class="mall-sub-class-box">
        <div v-for="(data,index) in mallSubMenuList">
            <h3 class="title" @click="activeSubMenu(index)"><p>{{data.name}}</p><i class="iconfont icon-xia"></i></h3>
            <transition name="subClass-fade">
                <ul v-show="subclassActive==index">
                    <li v-for="d in data.catelogyList"><img v-lazy="d.icon"><p>{{d.name}}</p></li>
                </ul>
            </transition>
        </div>
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
        mallMenuList : 'mallMenuList',
        mallSubMenuList : 'mallSubMenuList'
        }),
    data() {
        return {
            subclassActive : 0
            }
    },
    methods:{
        hide : function(){
            this.$emit('hide')
        },
        getSubClass : function(id){
            this.$store.dispatch('getMallSubMenuList',id);
            this.subclassActive = 0;
        },
        activeSubMenu : function(num){
            if(this.subclassActive == num){
                this.subclassActive = -1;
            }else{
                this.subclassActive = num;
            }
        }
    },
    props: ['searchType'],
    created() {
        let This = this;
        this.$store.dispatch('getMallMenuList').then(function(){
            This.$store.dispatch('getMallSubMenuList',This.mallMenuList[0].id)
        },function(){});
    }
}

</script>

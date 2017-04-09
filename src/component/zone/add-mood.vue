<style scoped>
.add-mood{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    background: #ccc;
    padding-top: 0.8rem;
}
.write-form{
    background: #fff;
}
.write-form .write-text{
    padding: 0.2rem;
}
.write-form .write-title{
    padding: 0.2rem 0.2rem 0 0.2rem ;
    border-bottom: 0.01rem solid #666;
}
.write-form .write-title textarea{
    border: 0;
    margin: 0;
    outline: 0;
    width: 100%;
    resize: none;
    min-height: 50px;
    font-size: 0.26rem;
}
.write-form .write-text textarea{
    border: 0;
    margin: 0;
    outline: 0;
    width: 100%;
    resize: none;
    min-height: 150px;
    font-size: 0.26rem;
}
.write-form .write-plugin{
    padding: 0.2rem;
    overflow: hidden;
}
.write-form .write-plugin button{
    font-size: 0.4rem;
    float: left;
}
.write-form .write-plugin span{
    font-size: 0.3rem;
    line-height: 0.6rem;
    float: right;
}

</style>

<template>

<div class='add-mood'>
    <headnav v-bind:headConfig="headConfig" v-on:leftEvent="hide"></headnav>
    <div class="write-form">
        <section class="write-title">
            <textarea placeholder="请输入标题…"></textarea>
        </section>
        <section class="write-text">
            <textarea v-model="text" placeholder="请输入正文内容…"></textarea>
        </section>
        <section class="write-plugin">
            <button>@</button>
            <span>{{2000-text.length}}</span>
        </section>
    </div>
</div>

</template>

<script type="text/javascript">
import {
    mapGetters
}
from 'vuex'
import headnav  from './../common/header.vue'
const components = {
    headnav
}
export default {
    computed: mapGetters({
        }),
    data() {
        return {
            text : '',
            headConfig : {
                title : "整两句。。",
                leftIcon : true,
                leftIconClass : 'icon-zuo'
            }
        }
    },
    methods:{
        hide : function(){
            this.$emit('hide')
        }
    },
    props: ['searchType'],
    components: components,
    created() {
    }
}

</script>

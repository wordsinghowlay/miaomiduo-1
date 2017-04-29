<style scoped>
.index-box{
    height: 100%;
    background: #fff;
    padding: 0.8rem 0;
}
.comment-list{
    margin: 0.2rem;
}
.comment-list li{
    position: relative;
    padding-left: 0.9rem;
}
.user-img{
    display: block;
    width: 0.68rem;
    height: 0.68rem;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
}
.comment-list li h3{

}
</style>

<template>
    <div class="index-box">
        <headnav v-bind:headConfig="headConfig"></headnav>
        <ul class="comment-list">
            <li>
                <img class="user-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488543830261&di=20359561795afa533da03c68150d4a8b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fb3850f427be8c1367d9221644cbc48ec896666f2.jpg"/>
                <div class="content">
                    <h3>小明</h3>
                    <p>这里是评论的内容哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦这里是评论的内容哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦这里是评论的内容哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦这里是评论的内容哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦这里是评论的内容哦哦哦哦哦哦哦哦哦哦哦哦哦哦哦这里是评论的内容哦哦哦哦哦哦哦哦哦哦哦哦哦</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import {
    mapGetters
}
from 'vuex'
import headnav  from './../common/header.vue'
import moodAuthor from './mood-author.vue'
const components = {
    headnav, moodAuthor
}

export default {
    data() {
        return {
            lo: false,
            headConfig : {
                title : "评论列表",
                backBtn : true,
                leftIcon : true,
                leftIconClass : 'icon-zuo',
                rightIcon : true,
                rightIconClass : 'icon-shuxie'
            }
        }
    },
    computed: mapGetters({
        articleInfo : "articleInfo"
    }),
    methods : {
    },
    created() {

    },
    name: 'article',
    components: components
}

</script>

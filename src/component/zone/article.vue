<style scoped>
.index-box{
    height: 100%;
}
.article-box{
    height: 100%;
}
.comment{
    padding: 0 0.2rem;
    background: #fff;
    height: 100%;
}
.title {
    margin-bottom: 0.2rem;
    background: #fff;
}
.title h3{
    text-align: center;
    line-height: 0.7rem;
}
</style>

<template>
    <div class="index-box">
        <headnav v-bind:headConfig="headConfig"></headnav>
        <div class="article-box">
            <div class="title">
                <h3>{{articleInfo.title}}</h3>
                <!-- <div class="content">
                    {{articleInfo.content}}
                </div> -->
            </div>
            <div class="comment">
                <div class="comment-item">
                    <mood-author></mood-author>
                    <div class="comment-content">
                        那天我去买数据线。<br><br>老板一直吹嘘数据线怎么牢固让我用力扯。<br><br>我愉快地试了一下确实扯不断。<br><br>老板得意地拿过我手中的数据线说，<br><br>小伙子你不用力怎么行，我扯给你看。<br><br>于是啪的一声数据线断了。<br><br>我记得当时风很大。<br><br>吹乱了老板的头发。<br><br>他说，生活很难的。<br><br><br><br><br>然后他成了我健身教练。<br><br>我顺利过了高三体育抽测。<br>
                    </div>
                </div>
            </div>
        </div>
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
                title : "文章详情",
                backBtn : true,
                leftIcon : true,
                leftIconClass : 'icon-zuo'
            }
        }
    },
    computed: mapGetters({
        articleInfo : "articleInfo"
    }),
    methods : {
    },
    created() {
        this.$store.dispatch('getArticle',{type:this.$route.params.type,id:this.$route.params.id});
    },
    name: 'article',
    components: components
}

</script>

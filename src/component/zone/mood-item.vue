<style scoped>
.mood-item-box {
}
.mood-item{
    position: relative;
    border-top: 2px solid #d7d7d7;
    border-bottom: 2px solid #d7d7d7;
    padding: 0.28rem 0.2rem;
    margin-bottom: 0.2rem;
    background: #fff;
}
.mood-item div{
    overflow: hidden;
}
.mood-item a{
    color: #000;
}
.mood-source {
    padding-bottom: 10px;
}
.mood-source p{
}

.mood-content{
    overflow: hidden;
    text-overflow : ellipsis;
    max-height: 3rem;
    margin-bottom: 0.2rem;
    text-indent: 2em;
}
.mood-content img{
    float: left;
    width: 3rem;
    height: 3rem;
    margin-right: 0.1rem;
}
.mood-meta{
    overflow: hidden;
    text-align: center;
}
.mood-meta span{
    padding-right: 0.1rem;
}
.mood-meta i.iconfont{
    font-size: 0.26rem;
}
.mood-meta div{
    float: left;
    width: 33%;
}
.icon-icon_favor{
    font-size: 0.3rem !important;
}
</style>

<template>
    <div class="mood-item-box">
        <div class="mood-item">

                <div class="mood-source">
                    <p>动态来自：<span>晒喵专区</span></p>
                </div>
                <div class="title">
                    <h3>有哪些很常见但大多数人都不知道全称是什么的英文缩写？</h3>
                </div>
                <div>
                    <mood-author></mood-author>
                    <router-link to="/zone/article/1">
                        <div class="mood-content">
                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2790396100,129677017&fm=23&gp=0.jpg"/>
                            我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。
                        </div>
                    </router-link>
                </div>
            <div class="mood-meta">
                <div>
                    <span class="zanNum">赞123</span>
                    <i class="iconfont icon-xin1"></i>
                </div>
                <div>
                    <router-link to="/zone/comment/1">
                    <span>评论36</span>
                    <i class="iconfont icon-iconfontpinglun"></i>
                    </router-link>
                </div>
                <div @click="topFn('showMoodModule',1)">
                    <span>收藏</span>
                    <i class="iconfont icon-icon_favor"></i>
                </div>
            </div>
        </div>
        <div class="mood-item">
            <router-link to="/zone/article/1">
                <div class="mood-source">
                    <p>动态来自：<span>晒喵专区</span></p>
                </div>
                <div class="title">
                    <h3>有哪些很常见但大多数人都不知道全称是什么的英文缩写？</h3>
                </div>
                <div>
                    <mood-author></mood-author>
                    <div class="mood-content">
                        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2790396100,129677017&fm=23&gp=0.jpg"/>
                        我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。
                    </div>
                </div>
            </router-link>
            <div class="mood-meta">
                <div>
                    <span class="zanNum">赞123</span>
                    <i class="iconfont icon-xin1"></i>
                </div>
                <div>
                    <span>评论48</span>
                    <i class="iconfont icon-iconfontpinglun"></i>
                </div>
                <div @click="topFn('showMoodModule',1)">
                    <span>收藏</span>
                    <i class="iconfont icon-icon_favor"></i>
                </div>
            </div>
        </div>
        <div class="mood-item">
            <router-link to="/zone/article/1">
                <div class="mood-source">
                    <p>动态来自：<span>晒喵专区</span></p>
                </div>
                <div class="title">
                    <h3>有哪些很常见但大多数人都不知道全称是什么的英文缩写？</h3>
                </div>
                <div>
                    <mood-author></mood-author>
                    <div class="mood-content">
                        我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。我们梳理了一些与日常交通、汽车行业与技术相关的英文缩写，希望能对大家有所帮助。 关于日常交通的，列举三个和我们生活息息相关的。
                    </div>
                </div>
            </router-link>
            <div class="mood-meta">
                <div>
                    <span class="zanNum">赞123</span>
                    <i class="iconfont icon-xin1"></i>
                </div>
                <div>
                    <span>评论123</span>
                    <i class="iconfont icon-iconfontpinglun"></i>
                </div>
                <div @click="topFn('showMoodModule',1)">
                    <span>收藏</span>
                    <i class="iconfont icon-icon_favor"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
import moodAuthor from './mood-author.vue'
const components = {moodAuthor}
export default {
    computed: mapGetters({

    }),
    data() {
        return {

        }
    },
    methods: {
        topFn : function () {

        }
    },
    mounted: function() {},
    props: [],
    components: components,
    created() {}
}

</script>

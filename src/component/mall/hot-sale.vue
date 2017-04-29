<style>
.hot-sale-box{

}
.hot-sale-box .title{
    text-align: center;
    height: 1rem;
    line-height: 1rem;
}
.hot-sale-list{
    overflow: hidden;
}
.hot-sale-list li{
    width: 47%;
    float: left;
    margin-left: 2%;
    background: #fff;
    margin-bottom: 0.2rem;
    border-radius: 0.04rem;
}
.hot-sale-list li a{
    display: block;
    margin-bottom: 0.2rem;
}
.hot-sale-list li a img{
    display: block;
}
.hot-sale-list li a p{
    text-align: center;
    font-size: 0.26rem;
    line-height: 0.36rem;
    height: 0.36rem;;
}
.hot-sale-list li a div{
    overflow: hidden;
    padding: 0 15px;
}
.hot-sale-list li a div span{
    float: left;
}
.hot-sale-list li a div em{
    float: right;
}
.hot-sale-list i.iconfont{
    font-size: 0.26rem;
}
</style>

<template>

<div class="hot-sale-box">
    <div class="title">
        猜你喜欢
    </div>
    <div class="">
        <ul class="hot-sale-list">
            <li>
                <router-link to="/index">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488545109668&di=0529330ecaa5f859f1f0f871b2304348&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201608%2F23%2F20160823143022_MRjAU.thumb.700_0.jpeg" alt="">
                    <p>蕾姆拉姆</p>
                    <div>
                        <span>&yen;666</span>
                        <em>6655<i class="iconfont icon-xin2"></i></em>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/index">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488545109668&di=0529330ecaa5f859f1f0f871b2304348&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201608%2F23%2F20160823143022_MRjAU.thumb.700_0.jpeg" alt="">
                    <p>蕾姆拉姆</p>
                    <div>
                        <span>&yen;666</span>
                        <em>6655<i class="iconfont icon-xin2"></i></em>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/index">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488545109668&di=0529330ecaa5f859f1f0f871b2304348&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201608%2F23%2F20160823143022_MRjAU.thumb.700_0.jpeg" alt="">
                    <p>蕾姆拉姆</p>
                    <div>
                        <span>&yen;666</span>
                        <em>6655<i class="iconfont icon-xin2"></i></em>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/index">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488545109668&di=0529330ecaa5f859f1f0f871b2304348&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201608%2F23%2F20160823143022_MRjAU.thumb.700_0.jpeg" alt="">
                    <p>蕾姆拉姆</p>
                    <div>
                        <span>&yen;666</span>
                        <em>6655<i class="iconfont icon-xin2"></i></em>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
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

<style scoped>
.index-box{
    /*padding: 0.8rem 0;*/
}
.products-list{
    overflow: hidden;
}
.products-list li {
    background: #fff;
    width: 3.52rem;
    float: left;
    border-radius: 0.08rem 0.08rem 0 0;
    margin-left: 0.15rem;
    margin-bottom: 0.15rem;
}
.products-list li img{
    display: block;
    height: 4.62rem;
    border-radius: 0.08rem 0.08rem 0 0;
}

.content{
    padding: 0.15rem;
}
.content h3{
    color: #000;
}
.content div{
    overflow: hidden;
}
.content .label{

}
.content .label span{
    display: inline-block;
    line-height: 0.36rem;
    height: 0.36rem;
    padding: 0 0.08rem;
    background: #eff3f6;
    margin-bottom: 0.06rem;
    margin-right: 0.06rem;
    color: #000;
    font-size: 0.2rem;
}
.content .price{
    color: #000;
    line-height: 0.4rem;
    font-size: 0.32rem;
}
.content .price i{
    font-size: 0.32rem;
    line-height: 0.4rem;
}
.content .price em{
    float: left;
}
.content .price span{
    float: right;
}
</style>

<template>

<div>
    <ul class="products-list">
        <li v-for="data in proData.num">
            <router-link to="/infoPage">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488545109668&di=0529330ecaa5f859f1f0f871b2304348&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201608%2F23%2F20160823143022_MRjAU.thumb.700_0.jpeg" />
                <div class="content">
                    <h3>小叮当</h3>
                    <div class="label">
                        <span>品种:英短</span>
                        <span>所在地:青岛</span>
                        <span>品质:双C</span>
                    </div>
                    <div class="price">
                        <em>￥123</em>
                        <span><i class="iconfont icon-xin1"></i>456</span>
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</div>

</template>

<script type="text/javascript">

import {
    mapGetters
}
from 'vuex'
const components = {

}
export default {
    computed: mapGetters({
    }),
    data() {
        return {
            pagetitle: '商品列表'
        }
    },
    methods: {
    },
    mounted: function(argument) {},
    props: ['proData'],
    components: components,
    created() {}
}

</script>

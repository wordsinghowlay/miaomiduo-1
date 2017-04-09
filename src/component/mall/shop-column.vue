<style>
.shop-column-box .title{
    text-align: center;
    height: 1rem;
    line-height: 1rem;
}
.shop-column{
    overflow: hidden;
}
.shop-column img{
    display: block;
}
.shop-column .column-a{
    float: left;
    width: 40%;
}
.shop-column .column-b{
    float: left;
    width: 60%;
}
.shop-column .column-d{
    overflow: hidden;
}
.shop-column .column-e{
    float: left;
    width: 50%;
}
</style>

<template>

<div class="shop-column-box">
    <div class="title">
        商家推荐
    </div>
    <div class="shop-column">
        <div class="column-a">
            <router-link to="/shopInfo/catHome/1">
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488543803675&di=a412101b336f6bd5c809b68bbbb28dd2&imgtype=0&src=http%3A%2F%2Fjoymepic.joyme.com%2Farticle%2Fuploads%2F20167%2F151471228184464604.jpeg%3FimageView2%2F1"/>
            </router-link>
        </div>
        <div class="column-b">
            <div class="column-c">
                <router-link to="/shopInfo/catHome/1">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488543830261&di=20359561795afa533da03c68150d4a8b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Fb3850f427be8c1367d9221644cbc48ec896666f2.jpg" />
                </router-link>
            </div>
            <div class="column-d">
                <div class="column-e">
                    <router-link to="/shopInfo/catHome/1">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488543899205&di=bbe98952143e08e7b8092dbd02b63ae3&imgtype=0&src=http%3A%2F%2Fp3.wmpic.me%2Farticle%2F2016%2F08%2F04%2F1470302969_AkYMWjqq.jpg" />
                    </router-link>
                </div>
                <div class="column-e">
                    <router-link to="/shopInfo/catHome/1">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488543899205&di=bbe98952143e08e7b8092dbd02b63ae3&imgtype=0&src=http%3A%2F%2Fp3.wmpic.me%2Farticle%2F2016%2F08%2F04%2F1470302969_AkYMWjqq.jpg" alt="">
                    </router-link>
                </div>
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

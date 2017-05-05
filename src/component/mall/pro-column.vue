<style>
.pro-column-box{

}
.pro-column-box .title{
    text-align: center;
    height: 1rem;
    line-height: 1rem;
}
.pro-column-list{
    overflow: hidden;
    background: #fff;
    padding-top: 26px;
}
.pro-column-list li{
    float: left;
    width: 25%;
    margin-bottom: 20px;
}
.pro-column-list li a{
    display: block;
}
.pro-column-list li a img{
    display: block;
    margin: 0 auto;
    width: 80%;
    height: 80%;
}
.pro-column-list li a p{
    text-align: center;
}

</style>

<template>

<div class="pro-column-box">
    <div class="title">
        热卖种类
    </div>
    <div class="pro-column">
        <ul class="pro-column-list">
            <li v-for="data in arr">
                <router-link to="/index">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488544438658&di=9fd09821a1201eaeaac62b582d816bbf&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Fface%2Fb96100a1ab49d70a2a064b52ca86bbc57590cad9.jpg" alt="">
                    <p>{{data}}</p>
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
            arr : ['布偶猫','暹罗猫','苏折','英短',
            '波斯猫','俄罗斯蓝猫','美短','异短','挪威森林猫',
            '孟买猫','缅因猫','埃及猫','伯曼猫','斯芬克斯猫',
            '缅甸猫','阿比西尼亚猫','新加坡猫','索马里猫','土耳其梵猫',
            '中国狸花猫','美国短尾猫','西伯利亚森林猫','日本短尾猫','巴厘猫',
            '土耳其安哥拉猫','褴褛猫','东奇尼猫','柯尼斯卷毛猫','马恩岛猫',
            '奥西猫','沙特尔猫','德文卷毛猫','美国刚毛猫','呵叻猫','重点色短毛猫','哈瓦那棕猫',
            '波米拉猫','塞尔凯克卷毛猫','拉邦猫','东方猫','美国卷毛猫','欧洲缅甸猫'
            ]
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

import Vue       from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import app          from './../App.vue'
import appIndex     from './../component/zone/index.vue'
import footMenu     from './../component/common/footmenu.vue'
import mall         from './../component/mall/mall.vue'
import goodsList    from './../component/mall/goods-list.vue'
import goodsDetail  from './../component/mall/goods-detail.vue'
import tcshop       from './../component/tcShop/tcshop.vue'
import shopProList  from './../component/tcShop/shop-product.vue'
import selectArea   from './../component/tcShop/select-area.vue'
import shopcar      from './../component/shopcar.vue'
import userCenter   from './../component/user/user-center.vue'
import userOrders   from './../component/user/user-orders.vue'
import detail       from './../component/user/detail.vue'
import orderInfo    from './../component/user/order-info.vue'
import login        from './../component/common/login.vue'
import myWallet     from './../component/user/my-wallet.vue'
import myEnvlop     from './../component/user/my-envlop.vue'
import myActivity   from './../component/user/my-activity.vue'
import myPay        from './../component/user/my-pay.vue'
import userInfo     from './../component/user/user-info.vue'
import specialAct   from './../component/act/special-activities.vue'
import shopCart     from './../component/trade/shop-cart.vue'
import orderConfirm from './../component/trade/order-confirm.vue'
import payDo        from './../component/trade/pay-do.vue'
import changeName   from './../component/user/change-name.vue'

import article      from './../component/zone/article.vue'
import shopInfo     from './../component/mall/shop-info.vue'
import artFootBar   from './../component/zone/article-footer.vue'

const router = new VueRouter({
    routes: [
        {
            path: 'app',
            components: {
                default: app
            }
        },
        {
            path: '/',
            name:'app',
            components: {
                default: app
            },
            children: [
                {
                    path: '/',
                    components: {
                        main: appIndex,
                        footerMenu : footMenu
                    }
                },
                {
                    path: 'index',
                    components: {
                        main: appIndex,
                        footerMenu : footMenu
                    }
                },
                {
                    path: 'zone/:type/:id',
                    components: {
                        main: article,
                        footerMenu : artFootBar
                    }
                },
                {
                    path: '/mall',
                    components: {
                        main: mall,
                        footerMenu : footMenu
                    }
                },
                {
                    path: '/shopInfo/:type/:id',
                    components: {
                        main: shopInfo
                    }
                },
                {
                    path: '/:type/cate/:id/catename/:name',
                    components: {
                        main: goodsList
                    }
                },
                {
                    path:'/goodsDetail/pro/:goodsId',
                    components: {
                        main: goodsDetail
                    }
                },
                {
                    path: '/tcshop',
                    components: {
                        main: tcshop,
                        footerMenu : footMenu
                    }
                },
                {
                    path: '/shopInfo/sid/:sid',
                    components: {
                        main: shopInfo,
                        footerMenu : footMenu
                    }
                },
                {
                    path: '/shopProList/sid/:sid',
                    components: {
                        main: shopProList
                    }
                },
                {
                    path:'/selectArea',
                    components: {
                        main : selectArea
                    }
                },
                {
                    path: '/user',
                    components: {
                        main: userCenter,
                        footerMenu : footMenu
                    }
                },
                {
                    path: '/userInfo',
                    components: {
                        main: userInfo
                    }
                },
                {
                    path: '/userOrders',
                    components: {
                        main: userOrders,
                        footerMenu : footMenu
                    }
                },
                {
                    path: '/orderInfo/:orderNo',
                    components: {
                        main: orderInfo
                    }
                },
                {
                    path: '/detail/:goodsId',
                    components: {
                        main: detail
                    }
                },
                {
                    path: '/login',
                    components: {
                        main: login
                    }
                },
                {
                    path: '/myWallet',
                    components: {
                        main: myWallet
                    }
                },
                {
                    path: '/myEnvlop',
                    components: {
                        main: myEnvlop
                    }
                },
                {
                    path: '/myActivity',
                    components: {
                        main: myActivity
                    }
                },
                {
                    path: '/myPay',
                    components: {
                        main: myPay
                    }
                },
                {
                    path:'/specialAct/:actId/part/:partId',
                    components:{
                        main: specialAct,
                        footerMenu : footMenu
                    }
                },
                {
                    path:'/shopCart',
                    components:{
                        main: shopCart,
                        footerMenu : footMenu
                    }
                },
                {
                    path:'/orderConfirm',
                    components:{
                        main: orderConfirm
                    }
                },
                {
                    path:'/payDo',
                    components:{
                        main: payDo
                    }
                },
                {
                    path:'/changeName',
                    components:{
                        main: changeName
                    }
                }
            ]
        }
    ]
})

export default {
  router
}

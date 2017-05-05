import Vue       from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const app           = resolve => {require(['./../App.vue'], resolve)};
const appIndex      = resolve => {require(['./../component/zone/index.vue'], resolve)};
const footMenu      = resolve => {require(['./../component/common/footmenu.vue'], resolve)};
const mall          = resolve => {require(['./../component/mall/mall.vue'], resolve)};
const goodsList     = resolve => {require(['./../component/mall/goods-list.vue'], resolve)};
const goodsDetail   = resolve => {require(['./../component/mall/goods-detail.vue'], resolve)};
const tcshop        = resolve => {require(['./../component/tcShop/tcshop.vue'], resolve)};
const shopProList   = resolve => {require(['./../component/tcShop/shop-product.vue'], resolve)};
const selectArea    = resolve => {require(['./../component/tcShop/select-area.vue'], resolve)};
const shopcar       = resolve => {require(['./../component/shopcar.vue'], resolve)};
const userCenter    = resolve => {require(['./../component/user/user-center.vue'], resolve)};
const userOrders    = resolve => {require(['./../component/user/user-orders.vue'], resolve)};
const detail        = resolve => {require(['./../component/user/detail.vue'], resolve)};
const orderInfo     = resolve => {require(['./../component/user/order-info.vue'], resolve)};
const login         = resolve => {require(['./../component/common/login.vue'], resolve)};
const myWallet      = resolve => {require(['./../component/user/my-wallet.vue'], resolve)};
const myEnvlop      = resolve => {require(['./../component/user/my-envlop.vue'], resolve)};
const myActivity    = resolve => {require(['./../component/user/my-activity.vue'], resolve)};
const myPay         = resolve => {require(['./../component/user/my-pay.vue'], resolve)};
const userInfo      = resolve => {require(['./../component/user/user-info.vue'], resolve)};
const specialAct    = resolve => {require(['./../component/act/special-activities.vue'], resolve)};
const shopCart      = resolve => {require(['./../component/trade/shop-cart.vue'], resolve)};
const orderConfirm  = resolve => {require(['./../component/trade/order-confirm.vue'], resolve)};
const payDo         = resolve => {require(['./../component/trade/pay-do.vue'], resolve)};
const changeName    = resolve => {require(['./../component/user/change-name.vue'], resolve)};

const article       = resolve => {require(['./../component/zone/article.vue'], resolve)};
const shopInfo      = resolve => {require(['./../component/mall/shop-info.vue'], resolve)};
const artFootBar    = resolve => {require(['./../component/zone/article-footer.vue'], resolve)};
const infoFootBar   = resolve => {require(['./../component/mall/info-footer.vue'],resolve)};
const commentList   = resolve => {require(['./../component/zone/comment-list.vue'], resolve)};
const searchList    = resolve => {require(['./../component/mall/search-list.vue'],resolve)};
const infoPage      = resolve => {require(['./../component/mall/info-page.vue'],resolve)};

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
                    path: 'zone/article/:id',
                    components: {
                        main: article,
                        footerMenu : artFootBar
                    }
                },
                {
                    path: 'zone/comment/:id',
                    components: {
                        main: commentList
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
                    path: '/infoPage',
                    components: {
                        main: infoPage,
                        footerMenu : infoFootBar
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
                    path:'/searchList',
                    components:{
                        main: searchList
                    }
                }
            ]
        }
    ]
})

export default {
  router
}

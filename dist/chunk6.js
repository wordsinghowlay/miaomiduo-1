webpackJsonp([6],{

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
    methods: {
        cancelOrder: function (num) {
            console.log(num);
        }
    },
    props: ['orderList']
};

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ".orderListBox{margin-bottom:.17rem}.orderListBox .content,.orderListBox .orderStat,.orderListBox .orderTitle{background:#fff;padding:0 .18rem;line-height:.7rem;font-size:.24rem;overflow:hidden}.orderListBox .orderTitle .orderNum{float:left}.orderListBox .orderTitle .orderState{float:right}.orderListBox dl{padding:.18rem;overflow:hidden;border-bottom:.01rem solid #e5e5e5;background:#f7f7f7}.orderListBox dl dd{float:left;width:1.63rem;height:1.63rem;margin-right:.16rem}.orderListBox dl dd img{display:block;width:100%;height:100%}.orderListBox dl dt{text-align:left;font-size:.23rem;color:#000;overflow:hidden}.orderListBox dl .proName{padding-top:.08rem}.orderListBox dl .proName p{line-height:.3rem;height:.6rem}.orderListBox dl .proAttribute{color:#999;height:.65rem}.orderListBox dl .proPrice{line-height:.3rem}.orderListBox dl .proPrice .proNum{float:right}.orderListBox .orderStat{margin-bottom:.02rem}.orderListBox .orderStat p{color:#000;text-align:right}.orderListBox .btns{padding:.18rem;background:#fff;overflow:hidden}.orderListBox .btns a{width:1.25rem;text-align:center;display:inline-block;float:right;font-size:.25rem;line-height:.52rem;border-radius:.04rem;margin-left:.18rem;border:.01rem solid #666;color:#666}.orderListBox .btns .orderInfoBtn{border:.01rem solid #ff2772;color:#ff2772}", ""]);

// exports


/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(117)

/* script */
__vue_exports__ = __webpack_require__(101)

/* template */
var __vue_template__ = __webpack_require__(112)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },

/***/ 112:
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', _vm._l((_vm.orderList), function(data) {
    return _vm._c('div', {
      staticClass: "orderListBox"
    }, [_vm._c('div', {
      staticClass: "orderTitle"
    }, [_vm._c('span', {
      staticClass: "orderNum"
    }, [_vm._v("订单编号：" + _vm._s(data.no))]), _vm._v(" "), _vm._c('span', {
      staticClass: "orderState"
    }, [_vm._v(_vm._s(data.orderStatusName))])]), _vm._v(" "), _vm._l((data.orderItemList), function(d) {
      return _vm._c('div', [_vm._c('router-link', {
        attrs: {
          "to": '/detail/' + d.productId
        }
      }, [_vm._c('dl', [_vm._c('dd', [_vm._c('img', {
        attrs: {
          "src": d.productImgUrl
        }
      })]), _vm._v(" "), _vm._c('dt', {
        staticClass: "proName"
      }, [_vm._c('p', [_vm._v(_vm._s(d.productName))])]), _vm._v(" "), _vm._c('dt', {
        staticClass: "proAttribute"
      }, [_vm._v("参考身高：130  颜色分类：玫红色（女童）")]), _vm._v(" "), _vm._c('dt', {
        staticClass: "proPrice"
      }, [_vm._v("¥" + _vm._s(d.totalPayment) + "  (可抵用" + _vm._s(d.unitVouchers) + "优券)"), _vm._c('span', {
        staticClass: "proNum"
      }, [_vm._v("x" + _vm._s(d.count))])])])])], 1)
    }), _vm._v(" "), _vm._c('div', {
      staticClass: "orderStat"
    }, [_vm._c('p', [_vm._v("共1件商品 合计￥" + _vm._s(data.totalPay) + "+" + _vm._s(data.totalVouchers) + "优券（含运费￥" + _vm._s(data.totalDeliveryFee) + "）")])]), _vm._v(" "), _vm._c('div', {
      staticClass: "btns"
    }, [_vm._c('router-link', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (data.orderStatusName == '待付款'),
        expression: "data.orderStatusName=='待付款'"
      }],
      staticClass: "orderInfoBtn",
      attrs: {
        "to": "/user"
      }
    }, [_vm._v("立即支付")]), _vm._v(" "), _vm._c('a', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (data.orderStatusName == '待付款'),
        expression: "data.orderStatusName=='待付款'"
      }],
      on: {
        "click": function($event) {
          _vm.cancelOrder(data.no)
        }
      }
    }, [_vm._v("取消订单")]), _vm._v(" "), _vm._c('router-link', {
      attrs: {
        "to": '/orderInfo/' + data.no
      }
    }, [_vm._v("订单详情")])], 1)], 2)
  }))
},staticRenderFns: []}

/***/ },

/***/ 117:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(64)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3054c1e7!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./order-list.vue", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3054c1e7!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./order-list.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_loading_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_loading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_header_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_banner_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_banner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__common_banner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_list_vue__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__order_list_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








const components = {
    loading: __WEBPACK_IMPORTED_MODULE_1__common_loading_vue___default.a, headnav: __WEBPACK_IMPORTED_MODULE_2__common_header_vue___default.a, banner: __WEBPACK_IMPORTED_MODULE_3__common_banner_vue___default.a, orderList: __WEBPACK_IMPORTED_MODULE_4__order_list_vue___default.a
};
/* harmony default export */ exports["default"] = {
    data() {
        return {
            pagetitle: "订单详情",
            loading: false
        };
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        orderInfoData: 'orderInfoData'
    }),
    components: components,
    methods: {
        showNum: function () {
            console.log(this.isLogin);
        }
    },
    created() {
        let orderNo = this.$route.params.orderNo;
        this.$store.dispatch('getOrderInfo', {
            orderNo: orderNo
        });
    }
};

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ".order-info-box div{background:#fff;padding:0 .18rem;text-align:left}.order-info-box .order-state{height:1.1rem;margin-bottom:.18rem}.order-info-box .order-state p{font-size:.3rem;color:#ff833e;line-height:1.1rem;text-align:left}.order-info-box .add-info{padding:.32rem .18rem .3rem;margin-bottom:.18rem}.order-info-box .add-info .add-name{padding-left:.46rem;color:#333;font-size:.3rem;margin-bottom:.24rem}.order-info-box .add-info .add-name span{padding-left:.54rem}.order-info-box .add-info .adds{font-size:.26rem;color:#666}.order-info-box .add-info .adds .icon-position{padding:0 .23rem;background:url(" + __webpack_require__(215) + ") 50% no-repeat;background-size:.21rem .27rem}.order-info-box .order-detail{background:#f7f7f7;overflow:hidden}.order-info-box .order-detail .pro-tit{color:#333;font-size:.28rem;line-height:.74rem;background:#fff;margin:0 -.18rem;padding-left:.18rem}.order-info-box .order-detail dl{padding:.18rem 0;overflow:hidden;border-bottom:.01rem solid #e5e5e5;background:#f7f7f7}.order-info-box .order-detail dl dd{float:left;width:1.63rem;height:1.63rem;margin-right:.16rem}.order-info-box .order-detail dl dd img{display:block;width:100%;height:100%}.order-info-box .order-detail dl dt{text-align:left;font-size:.23rem;color:#000;overflow:hidden}.order-info-box .order-detail dl .proName{padding-top:.08rem}.order-info-box .order-detail dl .proName p{line-height:.3rem;height:.6rem}.order-info-box .order-detail dl .proAttribute{color:#999;height:.65rem}.order-info-box .order-detail dl .proPrice{line-height:.3rem}.order-info-box .order-detail dl .proPrice .proNum{float:right}.order-info-box .order-detail a.linkBtn{color:#fff;margin:.08rem 0;padding:0 .18rem;border-radius:.06rem;float:right;line-height:.38rem;font-size:.26rem;background:#ff833e}.order-info-box .pro-info{margin-bottom:.18rem}.order-info-box table{width:100%;font-size:.28rem;line-height:.42rem;padding:.2rem 0}.order-info-box table tr td{text-align:right;color:#ff2772}.order-info-box .order-info{padding:.2rem .18rem}.order-info-box .order-info p{font-size:.24rem;line-height:.36rem}", ""]);

// exports


/***/ },

/***/ 215:
/***/ function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAbCAYAAACTHcTmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNkVBRDA1RkFGQ0YxMUU2OTgyNUQxNUM3MDc1RTdBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNkVBRDA2MEFGQ0YxMUU2OTgyNUQxNUM3MDc1RTdBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2RUFEMDVEQUZDRjExRTY5ODI1RDE1QzcwNzVFN0EyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM2RUFEMDVFQUZDRjExRTY5ODI1RDE1QzcwNzVFN0EyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1QkbQwAAAo1JREFUeNqUlWuITVEUx+89JuUxyFBCXuVRiJLSfECUZ0gyGj4pXU3Xc/IqfPBIbkzekVKepbxmEEoeUUoYGgp5JCKKUZNHXsNv6X9q2849586/fp17zt177bXXXmvtdCaTSeXRIJgGo6A7FMN7eAWX4DC8iJoYRHzrAyfhHqyGAVAPtfANhsE6eAw7oX2S0alwR88zMBo6yGvzuL/ep8N9yEIdDM5ndDIcg58wUe+X9e7qMxyHoVABHeGqdvSP0V5wCD7BCDiXStZv2ANl0FoLtXCNVkEbmK3tNEU1sAH6wpLQqB3MFLgCp7wJttA2eCfPnmpiM2/cRngDC6F5oKCnYbc3sBVcgwUKy3ml1SY46I39ovCV2OGa0VL4pUmuFuvUt0BvmAA9NG6m3l2d1bPUjHaFt/LG1SRogBXQqG9fodL539UjPbuZ0SJ56qudFvrufW9wwuMqHWaFGX0gb0u8Qbehs1LM1Qw96yLK2vTQjJ5WFpR5g6rkZbVOfKzKM6ds2OeNL1eG1ASqc6vtOd6gWmVGo078AqxSE7EFPjpji+XUdYttkYJ/QKc9UiUXynbRE8ZBJ3gGFyPiXKGq+puWabW+LvAEbkXEMElm7LkOsJ/1irBMX6uOh2trTVGlmsqasPm4XSqn1bYqzQqRZc1yuAtHolqfnehabSFboNGcOtM8p0D+a9LblbfrdYXEabzK1frAjbjO/0NetoS9TpX4aqv/67X9xDvKOtMOGKNtRWmX4plV2BKNmlYqxTbDEO8/K5JZcAKOFnqbhvdQuX5Xy6uULj/z8iXMzRfsIOYg7FZdJIMWkmXOzWAl+SHfxKR8tLIbqDLMOSV5M25SUEAuzof9ysOlqrxY/RFgALT+lPKy1btSAAAAAElFTkSuQmCC"

/***/ },

/***/ 256:
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "order-info-box"
  }, [_vm._c('loading', {
    attrs: {
      "show": _vm.loading
    }
  }), _vm._v(" "), _vm._c('headnav', {
    attrs: {
      "title": _vm.pagetitle
    }
  }), _vm._v(" "), _vm._c('div', {
    staticClass: "order-state"
  }, [_vm._c('p', [_vm._v(_vm._s(_vm._f("orderState")(_vm.orderInfoData.state)))])]), _vm._v(" "), _vm._c('div', {
    staticClass: "add-info"
  }, [_vm._c('p', {
    staticClass: "add-name"
  }, [_vm._v(_vm._s(_vm.orderInfoData.receiverName)), _vm._c('span', [_vm._v(_vm._s(_vm.orderInfoData.userName))])]), _vm._v(" "), _vm._c('p', {
    staticClass: "adds"
  }, [_vm._c('i', {
    staticClass: "icon-position"
  }), _vm._v(_vm._s(_vm.orderInfoData.receiverArea + _vm.orderInfoData.receiverAddress))])]), _vm._v(" "), _vm._c('div', {
    staticClass: "order-detail"
  }, [_vm._c('p', {
    staticClass: "pro-tit"
  }, [_vm._v(_vm._s(_vm.orderInfoData.sellerName))]), _vm._v(" "), _vm._l((_vm.orderInfoData.orderItemList), function(data) {
    return _vm._c('dl', [_vm._c('dd', [_vm._c('img', {
      attrs: {
        "src": data.productImgUrl
      }
    })]), _vm._v(" "), _vm._c('dt', {
      staticClass: "proName"
    }, [_vm._c('p', [_vm._v(_vm._s(data.productName))])]), _vm._v(" "), _vm._c('dt', {
      staticClass: "proAttribute"
    }, [_vm._v("参考身高：130  颜色分类：玫红色（女童）")]), _vm._v(" "), _vm._c('dt', {
      staticClass: "proPrice"
    }, [_vm._v("¥" + _vm._s(data.unitSellerPrice + data.unitVouchers) + " (可抵用" + _vm._s(data.unitVouchers) + "优券)"), _vm._c('span', {
      staticClass: "proNum"
    }, [_vm._v("x" + _vm._s(data.count))])])])
  }), _vm._v(" "), _vm._c('router-link', {
    staticClass: "linkBtn",
    attrs: {
      "to": "/user"
    }
  }, [_vm._v("申请退款")])], 2), _vm._v(" "), _vm._c('div', {
    staticClass: "pro-info"
  }, [_vm._c('table', [_vm._c('tr', [_vm._c('th', [_vm._v("商品金额：")]), _vm._v(" "), _vm._c('td', [_vm._v("￥" + _vm._s(_vm.orderInfoData.totalPay) + ".00")])]), _vm._v(" "), _vm._c('tr', [_vm._c('th', [_vm._v("运费：")]), _vm._v(" "), _vm._c('td', [_vm._v("￥" + _vm._s(_vm.orderInfoData.totalDeliveryFee) + ".00")])]), _vm._v(" "), _vm._c('tr', [_vm._c('th', [_vm._v("活动抵扣：")]), _vm._v(" "), _vm._c('td', [_vm._v("-￥" + _vm._s(_vm.orderInfoData.totalVouchers) + ".00")])]), _vm._v(" "), _vm._c('tr', [_vm._c('th', [_vm._v("实付款：")]), _vm._v(" "), _vm._c('td', [_vm._v("￥" + _vm._s(_vm.orderInfoData.totalPay) + ".00+")])])])]), _vm._v(" "), _vm._c('div', {
    staticClass: "order-info"
  }, [_vm._c('p', [_vm._c('span', [_vm._v("订单编号：")]), _vm._v(_vm._s(_vm.orderInfoData.no))]), _vm._v(" "), _vm._c('p', [_vm._c('span', [_vm._v("下单时间：")]), _vm._v(_vm._s(_vm._f("date")(_vm.orderInfoData.createTime)))]), _vm._v(" "), _vm._c('p', [_vm._c('span', [_vm._v("支付时间：")]), _vm._v(_vm._s(_vm._f("date")(_vm.orderInfoData.paymentTime)))])]), _vm._v("\n    " + _vm._s(_vm.orderInfoData) + "\n\n\n    ")], 1)
},staticRenderFns: []}

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(64)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2a8a2412!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./order-info.vue", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2a8a2412!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./order-info.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(298)

/* script */
__vue_exports__ = __webpack_require__(155)

/* template */
var __vue_template__ = __webpack_require__(256)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },

/***/ 63:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },

/***/ 64:
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if (media) {
		styleElement.setAttribute("media", media);
	}

	if (sourceMap) {
		// https://developer.chrome.com/devtools/docs/javascript-debugging
		// this makes source maps inside style tags work properly in Chrome
		css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}


/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(69)

/* script */
__vue_exports__ = __webpack_require__(66)

/* template */
var __vue_template__ = __webpack_require__(68)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-15603c17"

module.exports = __vue_exports__


/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        positionData: 'positionData'
    }),
    data() {
        return {
            areaName: false
        };
    },
    methods: {
        emit: function (str) {
            if (this.headConfig.backBtn) {
                this.$router.go(-1);
                return;
            }
            this.$emit(str);
        }
    },
    props: ['headConfig'],
    created() {
        let path = this.$route.path;
        switch (path) {
            case '/tcshop':
                this.areaName = true;
                this.backBtn = false;
                break;
            default:
                break;
        }
    }
};
/*
    headConfig : {
        title :         头部标题
        leftIcon        左部Icon是否显示 布尔值
        leftIconClass   左部Icon的class类名
        rightIcon       右部Icon是否显示 布尔值
        rightIconClass  右部Icon的class类名
        backBtn         点击左部Icon是否返回上一页  => 需要配置左部Icon
        areaName        是否显示定位城市名称 布尔值
    }
*/

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "header[data-v-15603c17]{height:.6rem;background:#a5d7ee;border-bottom:.01rem solid #dfdfdf;padding:.1rem 0;position:fixed;top:0;left:0;z-index:3;width:100%}header .backBtn[data-v-15603c17]{position:absolute;color:#fff!important;left:.15rem;top:.17rem}header .title[data-v-15603c17]{color:#fff}header .leftIcon[data-v-15603c17]{position:absolute;color:#fff!important;left:.26rem;top:.16rem}header .areaName[data-v-15603c17]{color:#fff;position:absolute;left:.27rem;height:.54rem;line-height:.54rem;width:1.5rem}header .areaName a[data-v-15603c17]{color:#fff;font-size:.3rem;float:left}header .areaName i[data-v-15603c17]{margin-left:.06rem;line-height:.54rem;position:relative;top:.03rem}header p[data-v-15603c17]{font-size:.32rem;text-align:center;line-height:.6rem}header .rightTxt[data-v-15603c17]{display:block;width:1.3rem;height:.6rem;text-align:right;line-height:.6rem;position:absolute;z-index:1;right:.2rem;top:.1rem;font-size:.3rem}header .iconfont[data-v-15603c17]{font-size:.4rem}header .rightIcon[data-v-15603c17]{color:#fff;text-align:center;position:absolute;right:.15rem;top:.18rem}", ""]);

// exports


/***/ },

/***/ 68:
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('header', {
    staticClass: "nav-header"
  }, [(_vm.headConfig.leftIcon ? _vm.headConfig.leftIcon : false) ? _vm._c('i', {
    staticClass: "leftIcon iconfont",
    class: _vm.headConfig.leftIconClass,
    on: {
      "click": function($event) {
        _vm.emit('leftEvent')
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.headConfig.areaName ? _vm.headConfig.areaName : false) ? _vm._c('div', {
    staticClass: "areaName"
  }, [_vm._c('router-link', {
    attrs: {
      "to": "/selectArea",
      "id": "areaName"
    }
  }, [_vm._v(_vm._s(_vm.positionData.city))]), _vm._v(" "), _vm._c('i', {
    staticClass: "iconfont icon-xia"
  })], 1) : _vm._e(), _vm._v(" "), (_vm.headConfig.title ? _vm.headConfig.title : false) ? _vm._c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.headConfig.title))]) : _vm._e(), _vm._v(" "), (_vm.headConfig.rightIcon) ? _vm._c('i', {
    staticClass: "rightIcon iconfont",
    class: _vm.headConfig.rightIconClass,
    on: {
      "click": function($event) {
        _vm.emit('showRight')
      }
    }
  }) : _vm._e()])
},staticRenderFns: []}

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(64)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-15603c17&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-15603c17&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ exports["default"] = {
    props: ['show']
};

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ".ui-loading-wrap .mask{position:absolute;width:1.5rem;height:1.5rem;left:50%;top:50%;margin-left:-.75rem;margin-top:-.75rem;background:hsla(0,0%,100%,.5)}.ui-loading-wrap{position:fixed;top:0;z-index:10000;width:100%;height:100%}", ""]);

// exports


/***/ },

/***/ 72:
/***/ function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhlgCWAPe7AP9Mdf9Naf7+///9/Po+gf9Mcf7+/f9NcP9pi/w6ev35+f9NZf3z8/9Wfv9ggPz8/f9zi//4/P7w8/7s7v/f4vzc4v3j5f32+P/59v98l//y8P++yf7J0Pzq7P/n5/9Wdf/X2v+Wq/+dsv+ks//Eyv7t7P7T2P+Dlv+Oqv+Dnv+yvf/n6/7T2v+4wv+rvP9ghf+ywf/O1f/29/+Oo/9zk/zR2v+Nof25xP+WpvzF0f+suv7z9f25yP/Y1/3q7//O0f++xP/q6vzc3v/j5f98nP9NbP+kt//7/P7J1f+eqvxQi/45ff/f4/tclP9gff9piP9Wev+stfpml/1GiPpGg/zy9f9Wcv9ziP7s7f35+vrq7//f4f+yu/vl6/mevP3s8f+dsfz7/f+DlPzw9Prj6vzq6/98lP/o5/7Jz//4+/7T1/ve5v3v8v+WqfiZuv++x/pyofq0yvjI1/9ggv+ruv+4wPquyPnA0f719vipxPqHsfnS3vqOs/zl7Pmtxfl4ov+ksv+suP/8+/nb5f7T2fvV4Pa3zP98mfrS3/v2+P+eqPt5pvtxo/m6z//n6vvM2/nU3fzR2fuDq/fE1v71+Pulwv/EyPzs7/e3zvmOsffO3P+DnPzF0P25x/hWj/25w/+Nn/uev/+Oof+ktf+yv/7z9/+OqP3p7vnI2fjb4/xnm/iHrfmlv/++wv/O0P/O1Pvq8P+WpPi7zf3g6PuVtfnL2Pze6P9zkPzc3f7J1P+sswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkzQzA4ODU3QUZDMDExRTZCQkQzRkRCMDNFMkU1QzJBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkzQzA4ODU4QUZDMDExRTZCQkQzRkRCMDNFMkU1QzJBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTNDMDg4NTVBRkMwMTFFNkJCRDNGREIwM0UyRTVDMkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTNDMDg4NTZBRkMwMTFFNkJCRDNGREIwM0UyRTVDMkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3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"

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(75)

/* script */
__vue_exports__ = __webpack_require__(70)

/* template */
var __vue_template__ = __webpack_require__(74)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "ui-loading-wrap",
    attrs: {
      "id": "BP_Loading"
    }
  }, [_vm._c('img', {
    staticClass: "mask",
    attrs: {
      "src": __webpack_require__(72)
    }
  })])
},staticRenderFns: []}

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(64)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-44e08ea2!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-44e08ea2!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./loading.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_swiper_3_4_0_min__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_swiper_3_4_0_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_swiper_3_4_0_min__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
    props: ['banner', 'bannerConfig'],
    data() {
        return {};
    },
    mounted: function () {
        this.$nextTick(function () {
            let mySwiper = new Swiper('.swiper-container', this.bannerConfig);
        });
    },
    created() {
        console.log(this.banner);
    }
};

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Swiper 3.4.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: October 16, 2016
 */
!function () {
  "use strict";
  function e(e) {
    e.fn.swiper = function (a) {
      var s;return e(this).each(function () {
        var e = new t(this, a);s || (s = e);
      }), s;
    };
  }var a,
      t = function t(e, i) {
    function n(e) {
      return Math.floor(e);
    }function o() {
      var e = S.params.autoplay,
          a = S.slides.eq(S.activeIndex);a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || S.params.autoplay), S.autoplayTimeoutId = setTimeout(function () {
        S.params.loop ? (S.fixLoop(), S._slideNext(), S.emit("onAutoplay", S)) : S.isEnd ? i.autoplayStopOnLast ? S.stopAutoplay() : (S._slideTo(0), S.emit("onAutoplay", S)) : (S._slideNext(), S.emit("onAutoplay", S));
      }, e);
    }function l(e, t) {
      var s = a(e.target);if (!s.is(t)) if ("string" == typeof t) s = s.parents(t);else if (t.nodeType) {
        var i;return s.parents().each(function (e, a) {
          a === t && (i = t);
        }), i ? t : void 0;
      }if (0 !== s.length) return s[0];
    }function p(e, a) {
      a = a || {};var t = window.MutationObserver || window.WebkitMutationObserver,
          s = new t(function (e) {
        e.forEach(function (e) {
          S.onResize(!0), S.emit("onObserverUpdate", S, e);
        });
      });s.observe(e, { attributes: "undefined" == typeof a.attributes || a.attributes, childList: "undefined" == typeof a.childList || a.childList, characterData: "undefined" == typeof a.characterData || a.characterData }), S.observers.push(s);
    }function d(e) {
      e.originalEvent && (e = e.originalEvent);var a = e.keyCode || e.charCode;if (!S.params.allowSwipeToNext && (S.isHorizontal() && 39 === a || !S.isHorizontal() && 40 === a)) return !1;if (!S.params.allowSwipeToPrev && (S.isHorizontal() && 37 === a || !S.isHorizontal() && 38 === a)) return !1;if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
        if (37 === a || 39 === a || 38 === a || 40 === a) {
          var t = !1;if (S.container.parents("." + S.params.slideClass).length > 0 && 0 === S.container.parents("." + S.params.slideActiveClass).length) return;var s = { left: window.pageXOffset, top: window.pageYOffset },
              i = window.innerWidth,
              r = window.innerHeight,
              n = S.container.offset();S.rtl && (n.left = n.left - S.container[0].scrollLeft);for (var o = [[n.left, n.top], [n.left + S.width, n.top], [n.left, n.top + S.height], [n.left + S.width, n.top + S.height]], l = 0; l < o.length; l++) {
            var p = o[l];p[0] >= s.left && p[0] <= s.left + i && p[1] >= s.top && p[1] <= s.top + r && (t = !0);
          }if (!t) return;
        }S.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !S.rtl || 37 === a && S.rtl) && S.slideNext(), (37 === a && !S.rtl || 39 === a && S.rtl) && S.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && S.slideNext(), 38 === a && S.slidePrev());
      }
    }function u() {
      var e = "onwheel",
          a = e in document;if (!a) {
        var t = document.createElement("div");t.setAttribute(e, "return;"), a = "function" == typeof t[e];
      }return !a && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a;
    }function c(e) {
      e.originalEvent && (e = e.originalEvent);var a = 0,
          t = S.rtl ? -1 : 1,
          s = m(e);if (S.params.mousewheelForceToAxis) {
        if (S.isHorizontal()) {
          if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return;a = s.pixelX * t;
        } else {
          if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return;a = s.pixelY;
        }
      } else a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;if (0 !== a) {
        if (S.params.mousewheelInvert && (a = -a), S.params.freeMode) {
          var i = S.getWrapperTranslate() + a * S.params.mousewheelSensitivity,
              r = S.isBeginning,
              n = S.isEnd;if (i >= S.minTranslate() && (i = S.minTranslate()), i <= S.maxTranslate() && (i = S.maxTranslate()), S.setWrapperTransition(0), S.setWrapperTranslate(i), S.updateProgress(), S.updateActiveIndex(), (!r && S.isBeginning || !n && S.isEnd) && S.updateClasses(), S.params.freeModeSticky ? (clearTimeout(S.mousewheel.timeout), S.mousewheel.timeout = setTimeout(function () {
            S.slideReset();
          }, 300)) : S.params.lazyLoading && S.lazy && S.lazy.load(), S.emit("onScroll", S, e), S.params.autoplay && S.params.autoplayDisableOnInteraction && S.stopAutoplay(), 0 === i || i === S.maxTranslate()) return;
        } else {
          if (new window.Date().getTime() - S.mousewheel.lastScrollTime > 60) if (a < 0) {
            if (S.isEnd && !S.params.loop || S.animating) {
              if (S.params.mousewheelReleaseOnEdges) return !0;
            } else S.slideNext(), S.emit("onScroll", S, e);
          } else if (S.isBeginning && !S.params.loop || S.animating) {
            if (S.params.mousewheelReleaseOnEdges) return !0;
          } else S.slidePrev(), S.emit("onScroll", S, e);S.mousewheel.lastScrollTime = new window.Date().getTime();
        }return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1;
      }
    }function m(e) {
      var a = 10,
          t = 40,
          s = 800,
          i = 0,
          r = 0,
          n = 0,
          o = 0;return "detail" in e && (r = e.detail), "wheelDelta" in e && (r = -e.wheelDelta / 120), "wheelDeltaY" in e && (r = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (i = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (i = r, r = 0), n = i * a, o = r * a, "deltaY" in e && (o = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || o) && e.deltaMode && (1 === e.deltaMode ? (n *= t, o *= t) : (n *= s, o *= s)), n && !i && (i = n < 1 ? -1 : 1), o && !r && (r = o < 1 ? -1 : 1), { spinX: i, spinY: r, pixelX: n, pixelY: o };
    }function h(e, t) {
      e = a(e);var s,
          i,
          r,
          n = S.rtl ? -1 : 1;s = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), r = e.attr("data-swiper-parallax-y"), i || r ? (i = i || "0", r = r || "0") : S.isHorizontal() ? (i = s, r = "0") : (r = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px", r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px", e.transform("translate3d(" + i + ", " + r + ",0px)");
    }function g(e) {
      return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e;
    }if (!(this instanceof t)) return new t(e, i);var f = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, zoom: !1, zoomMax: 3, zoomMin: 1, zoomToggle: !0, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, mousewheelEventsTarged: "container", hashnav: !1, hashnavWatchState: !1, history: !1, replaceState: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, touchReleaseOnEdges: !1, uniqueNavElements: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", normalizeSlideIndex: !0, allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", passiveListeners: !0, containerModifierClass: "swiper-container-", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", paginationClickableClass: "swiper-pagination-clickable", paginationModifierClass: "swiper-pagination-", lazyLoadingClass: "swiper-lazy", lazyStatusLoadingClass: "swiper-lazy-loading", lazyStatusLoadedClass: "swiper-lazy-loaded", lazyPreloaderClass: "swiper-lazy-preloader", notificationClass: "swiper-notification", preloaderClass: "preloader", zoomContainerClass: "swiper-zoom-container", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
        v = i && i.virtualTranslate;i = i || {};var w = {};for (var y in i) {
      if ("object" != _typeof(i[y]) || null === i[y] || i[y].nodeType || i[y] === window || i[y] === document || "undefined" != typeof s && i[y] instanceof s || "undefined" != typeof jQuery && i[y] instanceof jQuery) w[y] = i[y];else {
        w[y] = {};for (var x in i[y]) {
          w[y][x] = i[y][x];
        }
      }
    }for (var T in f) {
      if ("undefined" == typeof i[T]) i[T] = f[T];else if ("object" == _typeof(i[T])) for (var b in f[T]) {
        "undefined" == typeof i[T][b] && (i[T][b] = f[T][b]);
      }
    }var S = this;if (S.params = i, S.originalParams = w, S.classNames = [], "undefined" != typeof a && "undefined" != typeof s && (a = s), ("undefined" != typeof a || (a = "undefined" == typeof s ? window.Dom7 || window.Zepto || window.jQuery : s)) && (S.$ = a, S.currentBreakpoint = void 0, S.getActiveBreakpoint = function () {
      if (!S.params.breakpoints) return !1;var e,
          a = !1,
          t = [];for (e in S.params.breakpoints) {
        S.params.breakpoints.hasOwnProperty(e) && t.push(e);
      }t.sort(function (e, a) {
        return parseInt(e, 10) > parseInt(a, 10);
      });for (var s = 0; s < t.length; s++) {
        e = t[s], e >= window.innerWidth && !a && (a = e);
      }return a || "max";
    }, S.setBreakpoint = function () {
      var e = S.getActiveBreakpoint();if (e && S.currentBreakpoint !== e) {
        var a = e in S.params.breakpoints ? S.params.breakpoints[e] : S.originalParams,
            t = S.params.loop && a.slidesPerView !== S.params.slidesPerView;for (var s in a) {
          S.params[s] = a[s];
        }S.currentBreakpoint = e, t && S.destroyLoop && S.reLoop(!0);
      }
    }, S.params.breakpoints && S.setBreakpoint(), S.container = a(e), 0 !== S.container.length)) {
      if (S.container.length > 1) {
        var C = [];return S.container.each(function () {
          C.push(new t(this, i));
        }), C;
      }S.container[0].swiper = S, S.container.data("swiper", S), S.classNames.push(S.params.containerModifierClass + S.params.direction), S.params.freeMode && S.classNames.push(S.params.containerModifierClass + "free-mode"), S.support.flexbox || (S.classNames.push(S.params.containerModifierClass + "no-flexbox"), S.params.slidesPerColumn = 1), S.params.autoHeight && S.classNames.push(S.params.containerModifierClass + "autoheight"), (S.params.parallax || S.params.watchSlidesVisibility) && (S.params.watchSlidesProgress = !0), S.params.touchReleaseOnEdges && (S.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(S.params.effect) >= 0 && (S.support.transforms3d ? (S.params.watchSlidesProgress = !0, S.classNames.push(S.params.containerModifierClass + "3d")) : S.params.effect = "slide"), "slide" !== S.params.effect && S.classNames.push(S.params.containerModifierClass + S.params.effect), "cube" === S.params.effect && (S.params.resistanceRatio = 0, S.params.slidesPerView = 1, S.params.slidesPerColumn = 1, S.params.slidesPerGroup = 1, S.params.centeredSlides = !1, S.params.spaceBetween = 0, S.params.virtualTranslate = !0, S.params.setWrapperSize = !1), "fade" !== S.params.effect && "flip" !== S.params.effect || (S.params.slidesPerView = 1, S.params.slidesPerColumn = 1, S.params.slidesPerGroup = 1, S.params.watchSlidesProgress = !0, S.params.spaceBetween = 0, S.params.setWrapperSize = !1, "undefined" == typeof v && (S.params.virtualTranslate = !0)), S.params.grabCursor && S.support.touch && (S.params.grabCursor = !1), S.wrapper = S.container.children("." + S.params.wrapperClass), S.params.pagination && (S.paginationContainer = a(S.params.pagination), S.params.uniqueNavElements && "string" == typeof S.params.pagination && S.paginationContainer.length > 1 && 1 === S.container.find(S.params.pagination).length && (S.paginationContainer = S.container.find(S.params.pagination)), "bullets" === S.params.paginationType && S.params.paginationClickable ? S.paginationContainer.addClass(S.params.paginationModifierClass + "clickable") : S.params.paginationClickable = !1, S.paginationContainer.addClass(S.params.paginationModifierClass + S.params.paginationType)), (S.params.nextButton || S.params.prevButton) && (S.params.nextButton && (S.nextButton = a(S.params.nextButton), S.params.uniqueNavElements && "string" == typeof S.params.nextButton && S.nextButton.length > 1 && 1 === S.container.find(S.params.nextButton).length && (S.nextButton = S.container.find(S.params.nextButton))), S.params.prevButton && (S.prevButton = a(S.params.prevButton), S.params.uniqueNavElements && "string" == typeof S.params.prevButton && S.prevButton.length > 1 && 1 === S.container.find(S.params.prevButton).length && (S.prevButton = S.container.find(S.params.prevButton)))), S.isHorizontal = function () {
        return "horizontal" === S.params.direction;
      }, S.rtl = S.isHorizontal() && ("rtl" === S.container[0].dir.toLowerCase() || "rtl" === S.container.css("direction")), S.rtl && S.classNames.push(S.params.containerModifierClass + "rtl"), S.rtl && (S.wrongRTL = "-webkit-box" === S.wrapper.css("display")), S.params.slidesPerColumn > 1 && S.classNames.push(S.params.containerModifierClass + "multirow"), S.device.android && S.classNames.push(S.params.containerModifierClass + "android"), S.container.addClass(S.classNames.join(" ")), S.translate = 0, S.progress = 0, S.velocity = 0, S.lockSwipeToNext = function () {
        S.params.allowSwipeToNext = !1, S.params.allowSwipeToPrev === !1 && S.params.grabCursor && S.unsetGrabCursor();
      }, S.lockSwipeToPrev = function () {
        S.params.allowSwipeToPrev = !1, S.params.allowSwipeToNext === !1 && S.params.grabCursor && S.unsetGrabCursor();
      }, S.lockSwipes = function () {
        S.params.allowSwipeToNext = S.params.allowSwipeToPrev = !1, S.params.grabCursor && S.unsetGrabCursor();
      }, S.unlockSwipeToNext = function () {
        S.params.allowSwipeToNext = !0, S.params.allowSwipeToPrev === !0 && S.params.grabCursor && S.setGrabCursor();
      }, S.unlockSwipeToPrev = function () {
        S.params.allowSwipeToPrev = !0, S.params.allowSwipeToNext === !0 && S.params.grabCursor && S.setGrabCursor();
      }, S.unlockSwipes = function () {
        S.params.allowSwipeToNext = S.params.allowSwipeToPrev = !0, S.params.grabCursor && S.setGrabCursor();
      }, S.setGrabCursor = function (e) {
        S.container[0].style.cursor = "move", S.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", S.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", S.container[0].style.cursor = e ? "grabbing" : "grab";
      }, S.unsetGrabCursor = function () {
        S.container[0].style.cursor = "";
      }, S.params.grabCursor && S.setGrabCursor(), S.imagesToLoad = [], S.imagesLoaded = 0, S.loadImage = function (e, a, t, s, i, r) {
        function n() {
          r && r();
        }var o;e.complete && i ? n() : a ? (o = new window.Image(), o.onload = n, o.onerror = n, s && (o.sizes = s), t && (o.srcset = t), a && (o.src = a)) : n();
      }, S.preloadImages = function () {
        function e() {
          "undefined" != typeof S && null !== S && (void 0 !== S.imagesLoaded && S.imagesLoaded++, S.imagesLoaded === S.imagesToLoad.length && (S.params.updateOnImagesReady && S.update(), S.emit("onImagesReady", S)));
        }S.imagesToLoad = S.container.find("img");for (var a = 0; a < S.imagesToLoad.length; a++) {
          S.loadImage(S.imagesToLoad[a], S.imagesToLoad[a].currentSrc || S.imagesToLoad[a].getAttribute("src"), S.imagesToLoad[a].srcset || S.imagesToLoad[a].getAttribute("srcset"), S.imagesToLoad[a].sizes || S.imagesToLoad[a].getAttribute("sizes"), !0, e);
        }
      }, S.autoplayTimeoutId = void 0, S.autoplaying = !1, S.autoplayPaused = !1, S.startAutoplay = function () {
        return "undefined" == typeof S.autoplayTimeoutId && !!S.params.autoplay && !S.autoplaying && (S.autoplaying = !0, S.emit("onAutoplayStart", S), void o());
      }, S.stopAutoplay = function (e) {
        S.autoplayTimeoutId && (S.autoplayTimeoutId && clearTimeout(S.autoplayTimeoutId), S.autoplaying = !1, S.autoplayTimeoutId = void 0, S.emit("onAutoplayStop", S));
      }, S.pauseAutoplay = function (e) {
        S.autoplayPaused || (S.autoplayTimeoutId && clearTimeout(S.autoplayTimeoutId), S.autoplayPaused = !0, 0 === e ? (S.autoplayPaused = !1, o()) : S.wrapper.transitionEnd(function () {
          S && (S.autoplayPaused = !1, S.autoplaying ? o() : S.stopAutoplay());
        }));
      }, S.minTranslate = function () {
        return -S.snapGrid[0];
      }, S.maxTranslate = function () {
        return -S.snapGrid[S.snapGrid.length - 1];
      }, S.updateAutoHeight = function () {
        var e = [],
            a = 0;if ("auto" !== S.params.slidesPerView && S.params.slidesPerView > 1) for (r = 0; r < Math.ceil(S.params.slidesPerView); r++) {
          var t = S.activeIndex + r;if (t > S.slides.length) break;e.push(S.slides.eq(t)[0]);
        } else e.push(S.slides.eq(S.activeIndex)[0]);for (r = 0; r < e.length; r++) {
          if ("undefined" != typeof e[r]) {
            var s = e[r].offsetHeight;a = s > a ? s : a;
          }
        }a && S.wrapper.css("height", a + "px");
      }, S.updateContainerSize = function () {
        var e, a;e = "undefined" != typeof S.params.width ? S.params.width : S.container[0].clientWidth, a = "undefined" != typeof S.params.height ? S.params.height : S.container[0].clientHeight, 0 === e && S.isHorizontal() || 0 === a && !S.isHorizontal() || (e = e - parseInt(S.container.css("padding-left"), 10) - parseInt(S.container.css("padding-right"), 10), a = a - parseInt(S.container.css("padding-top"), 10) - parseInt(S.container.css("padding-bottom"), 10), S.width = e, S.height = a, S.size = S.isHorizontal() ? S.width : S.height);
      }, S.updateSlidesSize = function () {
        S.slides = S.wrapper.children("." + S.params.slideClass), S.snapGrid = [], S.slidesGrid = [], S.slidesSizesGrid = [];var e,
            a = S.params.spaceBetween,
            t = -S.params.slidesOffsetBefore,
            s = 0,
            i = 0;if ("undefined" != typeof S.size) {
          "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * S.size), S.virtualSize = -a, S.rtl ? S.slides.css({ marginLeft: "", marginTop: "" }) : S.slides.css({ marginRight: "", marginBottom: "" });var r;S.params.slidesPerColumn > 1 && (r = Math.floor(S.slides.length / S.params.slidesPerColumn) === S.slides.length / S.params.slidesPerColumn ? S.slides.length : Math.ceil(S.slides.length / S.params.slidesPerColumn) * S.params.slidesPerColumn, "auto" !== S.params.slidesPerView && "row" === S.params.slidesPerColumnFill && (r = Math.max(r, S.params.slidesPerView * S.params.slidesPerColumn)));var o,
              l = S.params.slidesPerColumn,
              p = r / l,
              d = p - (S.params.slidesPerColumn * p - S.slides.length);for (e = 0; e < S.slides.length; e++) {
            o = 0;var u = S.slides.eq(e);if (S.params.slidesPerColumn > 1) {
              var c, m, h;"column" === S.params.slidesPerColumnFill ? (m = Math.floor(e / l), h = e - m * l, (m > d || m === d && h === l - 1) && ++h >= l && (h = 0, m++), c = m + h * r / l, u.css({ "-webkit-box-ordinal-group": c, "-moz-box-ordinal-group": c, "-ms-flex-order": c, "-webkit-order": c, order: c })) : (h = Math.floor(e / p), m = e - h * p), u.css("margin-" + (S.isHorizontal() ? "top" : "left"), 0 !== h && S.params.spaceBetween && S.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h);
            }"none" !== u.css("display") && ("auto" === S.params.slidesPerView ? (o = S.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), S.params.roundLengths && (o = n(o))) : (o = (S.size - (S.params.slidesPerView - 1) * a) / S.params.slidesPerView, S.params.roundLengths && (o = n(o)), S.isHorizontal() ? S.slides[e].style.width = o + "px" : S.slides[e].style.height = o + "px"), S.slides[e].swiperSlideSize = o, S.slidesSizesGrid.push(o), S.params.centeredSlides ? (t = t + o / 2 + s / 2 + a, 0 === e && (t = t - S.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % S.params.slidesPerGroup === 0 && S.snapGrid.push(t), S.slidesGrid.push(t)) : (i % S.params.slidesPerGroup === 0 && S.snapGrid.push(t), S.slidesGrid.push(t), t = t + o + a), S.virtualSize += o + a, s = o, i++);
          }S.virtualSize = Math.max(S.virtualSize, S.size) + S.params.slidesOffsetAfter;var g;if (S.rtl && S.wrongRTL && ("slide" === S.params.effect || "coverflow" === S.params.effect) && S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }), S.support.flexbox && !S.params.setWrapperSize || (S.isHorizontal() ? S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }) : S.wrapper.css({ height: S.virtualSize + S.params.spaceBetween + "px" })), S.params.slidesPerColumn > 1 && (S.virtualSize = (o + S.params.spaceBetween) * r, S.virtualSize = Math.ceil(S.virtualSize / S.params.slidesPerColumn) - S.params.spaceBetween, S.isHorizontal() ? S.wrapper.css({ width: S.virtualSize + S.params.spaceBetween + "px" }) : S.wrapper.css({ height: S.virtualSize + S.params.spaceBetween + "px" }), S.params.centeredSlides)) {
            for (g = [], e = 0; e < S.snapGrid.length; e++) {
              S.snapGrid[e] < S.virtualSize + S.snapGrid[0] && g.push(S.snapGrid[e]);
            }S.snapGrid = g;
          }if (!S.params.centeredSlides) {
            for (g = [], e = 0; e < S.snapGrid.length; e++) {
              S.snapGrid[e] <= S.virtualSize - S.size && g.push(S.snapGrid[e]);
            }S.snapGrid = g, Math.floor(S.virtualSize - S.size) - Math.floor(S.snapGrid[S.snapGrid.length - 1]) > 1 && S.snapGrid.push(S.virtualSize - S.size);
          }0 === S.snapGrid.length && (S.snapGrid = [0]), 0 !== S.params.spaceBetween && (S.isHorizontal() ? S.rtl ? S.slides.css({ marginLeft: a + "px" }) : S.slides.css({ marginRight: a + "px" }) : S.slides.css({ marginBottom: a + "px" })), S.params.watchSlidesProgress && S.updateSlidesOffset();
        }
      }, S.updateSlidesOffset = function () {
        for (var e = 0; e < S.slides.length; e++) {
          S.slides[e].swiperSlideOffset = S.isHorizontal() ? S.slides[e].offsetLeft : S.slides[e].offsetTop;
        }
      }, S.updateSlidesProgress = function (e) {
        if ("undefined" == typeof e && (e = S.translate || 0), 0 !== S.slides.length) {
          "undefined" == typeof S.slides[0].swiperSlideOffset && S.updateSlidesOffset();var a = -e;S.rtl && (a = e), S.slides.removeClass(S.params.slideVisibleClass);for (var t = 0; t < S.slides.length; t++) {
            var s = S.slides[t],
                i = (a + (S.params.centeredSlides ? S.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + S.params.spaceBetween);if (S.params.watchSlidesVisibility) {
              var r = -(a - s.swiperSlideOffset),
                  n = r + S.slidesSizesGrid[t],
                  o = r >= 0 && r < S.size || n > 0 && n <= S.size || r <= 0 && n >= S.size;o && S.slides.eq(t).addClass(S.params.slideVisibleClass);
            }s.progress = S.rtl ? -i : i;
          }
        }
      }, S.updateProgress = function (e) {
        "undefined" == typeof e && (e = S.translate || 0);var a = S.maxTranslate() - S.minTranslate(),
            t = S.isBeginning,
            s = S.isEnd;0 === a ? (S.progress = 0, S.isBeginning = S.isEnd = !0) : (S.progress = (e - S.minTranslate()) / a, S.isBeginning = S.progress <= 0, S.isEnd = S.progress >= 1), S.isBeginning && !t && S.emit("onReachBeginning", S), S.isEnd && !s && S.emit("onReachEnd", S), S.params.watchSlidesProgress && S.updateSlidesProgress(e), S.emit("onProgress", S, S.progress);
      }, S.updateActiveIndex = function () {
        var e,
            a,
            t,
            s = S.rtl ? S.translate : -S.translate;for (a = 0; a < S.slidesGrid.length; a++) {
          "undefined" != typeof S.slidesGrid[a + 1] ? s >= S.slidesGrid[a] && s < S.slidesGrid[a + 1] - (S.slidesGrid[a + 1] - S.slidesGrid[a]) / 2 ? e = a : s >= S.slidesGrid[a] && s < S.slidesGrid[a + 1] && (e = a + 1) : s >= S.slidesGrid[a] && (e = a);
        }S.params.normalizeSlideIndex && (e < 0 || "undefined" == typeof e) && (e = 0), t = Math.floor(e / S.params.slidesPerGroup), t >= S.snapGrid.length && (t = S.snapGrid.length - 1), e !== S.activeIndex && (S.snapIndex = t, S.previousIndex = S.activeIndex, S.activeIndex = e, S.updateClasses(), S.updateRealIndex());
      }, S.updateRealIndex = function () {
        S.realIndex = S.slides.eq(S.activeIndex).attr("data-swiper-slide-index") || S.activeIndex;
      }, S.updateClasses = function () {
        S.slides.removeClass(S.params.slideActiveClass + " " + S.params.slideNextClass + " " + S.params.slidePrevClass + " " + S.params.slideDuplicateActiveClass + " " + S.params.slideDuplicateNextClass + " " + S.params.slideDuplicatePrevClass);var e = S.slides.eq(S.activeIndex);e.addClass(S.params.slideActiveClass), i.loop && (e.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + S.realIndex + '"]').addClass(S.params.slideDuplicateActiveClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + S.realIndex + '"]').addClass(S.params.slideDuplicateActiveClass));var t = e.next("." + S.params.slideClass).addClass(S.params.slideNextClass);S.params.loop && 0 === t.length && (t = S.slides.eq(0), t.addClass(S.params.slideNextClass));var s = e.prev("." + S.params.slideClass).addClass(S.params.slidePrevClass);if (S.params.loop && 0 === s.length && (s = S.slides.eq(-1), s.addClass(S.params.slidePrevClass)), i.loop && (t.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicateNextClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicateNextClass), s.hasClass(S.params.slideDuplicateClass) ? S.wrapper.children("." + S.params.slideClass + ":not(." + S.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicatePrevClass) : S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(S.params.slideDuplicatePrevClass)), S.paginationContainer && S.paginationContainer.length > 0) {
          var r,
              n = S.params.loop ? Math.ceil((S.slides.length - 2 * S.loopedSlides) / S.params.slidesPerGroup) : S.snapGrid.length;if (S.params.loop ? (r = Math.ceil((S.activeIndex - S.loopedSlides) / S.params.slidesPerGroup), r > S.slides.length - 1 - 2 * S.loopedSlides && (r -= S.slides.length - 2 * S.loopedSlides), r > n - 1 && (r -= n), r < 0 && "bullets" !== S.params.paginationType && (r = n + r)) : r = "undefined" != typeof S.snapIndex ? S.snapIndex : S.activeIndex || 0, "bullets" === S.params.paginationType && S.bullets && S.bullets.length > 0 && (S.bullets.removeClass(S.params.bulletActiveClass), S.paginationContainer.length > 1 ? S.bullets.each(function () {
            a(this).index() === r && a(this).addClass(S.params.bulletActiveClass);
          }) : S.bullets.eq(r).addClass(S.params.bulletActiveClass)), "fraction" === S.params.paginationType && (S.paginationContainer.find("." + S.params.paginationCurrentClass).text(r + 1), S.paginationContainer.find("." + S.params.paginationTotalClass).text(n)), "progress" === S.params.paginationType) {
            var o = (r + 1) / n,
                l = o,
                p = 1;S.isHorizontal() || (p = o, l = 1), S.paginationContainer.find("." + S.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(S.params.speed);
          }"custom" === S.params.paginationType && S.params.paginationCustomRender && (S.paginationContainer.html(S.params.paginationCustomRender(S, r + 1, n)), S.emit("onPaginationRendered", S, S.paginationContainer[0]));
        }S.params.loop || (S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.isBeginning ? (S.prevButton.addClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.disable(S.prevButton)) : (S.prevButton.removeClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.enable(S.prevButton))), S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.isEnd ? (S.nextButton.addClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.disable(S.nextButton)) : (S.nextButton.removeClass(S.params.buttonDisabledClass), S.params.a11y && S.a11y && S.a11y.enable(S.nextButton))));
      }, S.updatePagination = function () {
        if (S.params.pagination && S.paginationContainer && S.paginationContainer.length > 0) {
          var e = "";if ("bullets" === S.params.paginationType) {
            for (var a = S.params.loop ? Math.ceil((S.slides.length - 2 * S.loopedSlides) / S.params.slidesPerGroup) : S.snapGrid.length, t = 0; t < a; t++) {
              e += S.params.paginationBulletRender ? S.params.paginationBulletRender(S, t, S.params.bulletClass) : "<" + S.params.paginationElement + ' class="' + S.params.bulletClass + '"></' + S.params.paginationElement + ">";
            }S.paginationContainer.html(e), S.bullets = S.paginationContainer.find("." + S.params.bulletClass), S.params.paginationClickable && S.params.a11y && S.a11y && S.a11y.initPagination();
          }"fraction" === S.params.paginationType && (e = S.params.paginationFractionRender ? S.params.paginationFractionRender(S, S.params.paginationCurrentClass, S.params.paginationTotalClass) : '<span class="' + S.params.paginationCurrentClass + '"></span> / <span class="' + S.params.paginationTotalClass + '"></span>', S.paginationContainer.html(e)), "progress" === S.params.paginationType && (e = S.params.paginationProgressRender ? S.params.paginationProgressRender(S, S.params.paginationProgressbarClass) : '<span class="' + S.params.paginationProgressbarClass + '"></span>', S.paginationContainer.html(e)), "custom" !== S.params.paginationType && S.emit("onPaginationRendered", S, S.paginationContainer[0]);
        }
      }, S.update = function (e) {
        function a() {
          S.rtl ? -S.translate : S.translate;s = Math.min(Math.max(S.translate, S.maxTranslate()), S.minTranslate()), S.setWrapperTranslate(s), S.updateActiveIndex(), S.updateClasses();
        }if (S.updateContainerSize(), S.updateSlidesSize(), S.updateProgress(), S.updatePagination(), S.updateClasses(), S.params.scrollbar && S.scrollbar && S.scrollbar.set(), e) {
          var t, s;S.controller && S.controller.spline && (S.controller.spline = void 0), S.params.freeMode ? (a(), S.params.autoHeight && S.updateAutoHeight()) : (t = ("auto" === S.params.slidesPerView || S.params.slidesPerView > 1) && S.isEnd && !S.params.centeredSlides ? S.slideTo(S.slides.length - 1, 0, !1, !0) : S.slideTo(S.activeIndex, 0, !1, !0), t || a());
        } else S.params.autoHeight && S.updateAutoHeight();
      }, S.onResize = function (e) {
        S.params.breakpoints && S.setBreakpoint();var a = S.params.allowSwipeToPrev,
            t = S.params.allowSwipeToNext;S.params.allowSwipeToPrev = S.params.allowSwipeToNext = !0, S.updateContainerSize(), S.updateSlidesSize(), ("auto" === S.params.slidesPerView || S.params.freeMode || e) && S.updatePagination(), S.params.scrollbar && S.scrollbar && S.scrollbar.set(), S.controller && S.controller.spline && (S.controller.spline = void 0);var s = !1;if (S.params.freeMode) {
          var i = Math.min(Math.max(S.translate, S.maxTranslate()), S.minTranslate());S.setWrapperTranslate(i), S.updateActiveIndex(), S.updateClasses(), S.params.autoHeight && S.updateAutoHeight();
        } else S.updateClasses(), s = ("auto" === S.params.slidesPerView || S.params.slidesPerView > 1) && S.isEnd && !S.params.centeredSlides ? S.slideTo(S.slides.length - 1, 0, !1, !0) : S.slideTo(S.activeIndex, 0, !1, !0);S.params.lazyLoading && !s && S.lazy && S.lazy.load(), S.params.allowSwipeToPrev = a, S.params.allowSwipeToNext = t;
      }, S.touchEventsDesktop = { start: "mousedown", move: "mousemove", end: "mouseup" }, window.navigator.pointerEnabled ? S.touchEventsDesktop = { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled && (S.touchEventsDesktop = { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }), S.touchEvents = { start: S.support.touch || !S.params.simulateTouch ? "touchstart" : S.touchEventsDesktop.start, move: S.support.touch || !S.params.simulateTouch ? "touchmove" : S.touchEventsDesktop.move, end: S.support.touch || !S.params.simulateTouch ? "touchend" : S.touchEventsDesktop.end }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === S.params.touchEventsTarget ? S.container : S.wrapper).addClass("swiper-wp8-" + S.params.direction), S.initEvents = function (e) {
        var a = e ? "off" : "on",
            t = e ? "removeEventListener" : "addEventListener",
            s = "container" === S.params.touchEventsTarget ? S.container[0] : S.wrapper[0],
            r = S.support.touch ? s : document,
            n = !!S.params.nested;if (S.browser.ie) s[t](S.touchEvents.start, S.onTouchStart, !1), r[t](S.touchEvents.move, S.onTouchMove, n), r[t](S.touchEvents.end, S.onTouchEnd, !1);else {
          if (S.support.touch) {
            var o = !("touchstart" !== S.touchEvents.start || !S.support.passiveListener || !S.params.passiveListeners) && { passive: !0, capture: !1 };s[t](S.touchEvents.start, S.onTouchStart, o), s[t](S.touchEvents.move, S.onTouchMove, n), s[t](S.touchEvents.end, S.onTouchEnd, o);
          }(i.simulateTouch && !S.device.ios && !S.device.android || i.simulateTouch && !S.support.touch && S.device.ios) && (s[t]("mousedown", S.onTouchStart, !1), document[t]("mousemove", S.onTouchMove, n), document[t]("mouseup", S.onTouchEnd, !1));
        }window[t]("resize", S.onResize), S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.nextButton[a]("click", S.onClickNext), S.params.a11y && S.a11y && S.nextButton[a]("keydown", S.a11y.onEnterKey)), S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.prevButton[a]("click", S.onClickPrev), S.params.a11y && S.a11y && S.prevButton[a]("keydown", S.a11y.onEnterKey)), S.params.pagination && S.params.paginationClickable && (S.paginationContainer[a]("click", "." + S.params.bulletClass, S.onClickIndex), S.params.a11y && S.a11y && S.paginationContainer[a]("keydown", "." + S.params.bulletClass, S.a11y.onEnterKey)), (S.params.preventClicks || S.params.preventClicksPropagation) && s[t]("click", S.preventClicks, !0);
      }, S.attachEvents = function () {
        S.initEvents();
      }, S.detachEvents = function () {
        S.initEvents(!0);
      }, S.allowClick = !0, S.preventClicks = function (e) {
        S.allowClick || (S.params.preventClicks && e.preventDefault(), S.params.preventClicksPropagation && S.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
      }, S.onClickNext = function (e) {
        e.preventDefault(), S.isEnd && !S.params.loop || S.slideNext();
      }, S.onClickPrev = function (e) {
        e.preventDefault(), S.isBeginning && !S.params.loop || S.slidePrev();
      }, S.onClickIndex = function (e) {
        e.preventDefault();var t = a(this).index() * S.params.slidesPerGroup;S.params.loop && (t += S.loopedSlides), S.slideTo(t);
      }, S.updateClickedSlide = function (e) {
        var t = l(e, "." + S.params.slideClass),
            s = !1;if (t) for (var i = 0; i < S.slides.length; i++) {
          S.slides[i] === t && (s = !0);
        }if (!t || !s) return S.clickedSlide = void 0, void (S.clickedIndex = void 0);if (S.clickedSlide = t, S.clickedIndex = a(t).index(), S.params.slideToClickedSlide && void 0 !== S.clickedIndex && S.clickedIndex !== S.activeIndex) {
          var r,
              n = S.clickedIndex;if (S.params.loop) {
            if (S.animating) return;r = a(S.clickedSlide).attr("data-swiper-slide-index"), S.params.centeredSlides ? n < S.loopedSlides - S.params.slidesPerView / 2 || n > S.slides.length - S.loopedSlides + S.params.slidesPerView / 2 ? (S.fixLoop(), n = S.wrapper.children("." + S.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + S.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
              S.slideTo(n);
            }, 0)) : S.slideTo(n) : n > S.slides.length - S.params.slidesPerView ? (S.fixLoop(), n = S.wrapper.children("." + S.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + S.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function () {
              S.slideTo(n);
            }, 0)) : S.slideTo(n);
          } else S.slideTo(n);
        }
      };var z,
          M,
          E,
          P,
          I,
          k,
          L,
          D,
          B,
          H,
          G = "input, select, textarea, button, video",
          X = Date.now(),
          Y = [];S.animating = !1, S.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };var A, O;S.onTouchStart = function (e) {
        if (e.originalEvent && (e = e.originalEvent), A = "touchstart" === e.type, A || !("which" in e) || 3 !== e.which) {
          if (S.params.noSwiping && l(e, "." + S.params.noSwipingClass)) return void (S.allowClick = !0);if (!S.params.swipeHandler || l(e, S.params.swipeHandler)) {
            var t = S.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                s = S.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;if (!(S.device.ios && S.params.iOSEdgeSwipeDetection && t <= S.params.iOSEdgeSwipeThreshold)) {
              if (z = !0, M = !1, E = !0, I = void 0, O = void 0, S.touches.startX = t, S.touches.startY = s, P = Date.now(), S.allowClick = !0, S.updateContainerSize(), S.swipeDirection = void 0, S.params.threshold > 0 && (D = !1), "touchstart" !== e.type) {
                var i = !0;a(e.target).is(G) && (i = !1), document.activeElement && a(document.activeElement).is(G) && document.activeElement.blur(), i && e.preventDefault();
              }S.emit("onTouchStart", S, e);
            }
          }
        }
      }, S.onTouchMove = function (e) {
        if (e.originalEvent && (e = e.originalEvent), !A || "mousemove" !== e.type) {
          if (e.preventedByNestedSwiper) return S.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, void (S.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);if (S.params.onlyExternal) return S.allowClick = !1, void (z && (S.touches.startX = S.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, S.touches.startY = S.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, P = Date.now()));if (A && S.params.touchReleaseOnEdges && !S.params.loop) if (S.isHorizontal()) {
            if (S.touches.currentX < S.touches.startX && S.translate <= S.maxTranslate() || S.touches.currentX > S.touches.startX && S.translate >= S.minTranslate()) return;
          } else if (S.touches.currentY < S.touches.startY && S.translate <= S.maxTranslate() || S.touches.currentY > S.touches.startY && S.translate >= S.minTranslate()) return;if (A && document.activeElement && e.target === document.activeElement && a(e.target).is(G)) return M = !0, void (S.allowClick = !1);if (E && S.emit("onTouchMove", S, e), !(e.targetTouches && e.targetTouches.length > 1)) {
            if (S.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, S.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof I) {
              var t;S.isHorizontal() && S.touches.currentY === S.touches.startY || !S.isHorizontal() && S.touches.currentX !== S.touches.startX ? I = !1 : (t = 180 * Math.atan2(Math.abs(S.touches.currentY - S.touches.startY), Math.abs(S.touches.currentX - S.touches.startX)) / Math.PI, I = S.isHorizontal() ? t > S.params.touchAngle : 90 - t > S.params.touchAngle);
            }if (I && S.emit("onTouchMoveOpposite", S, e), "undefined" == typeof O && S.browser.ieTouch && (S.touches.currentX === S.touches.startX && S.touches.currentY === S.touches.startY || (O = !0)), z) {
              if (I) return void (z = !1);if (O || !S.browser.ieTouch) {
                S.allowClick = !1, S.emit("onSliderMove", S, e), e.preventDefault(), S.params.touchMoveStopPropagation && !S.params.nested && e.stopPropagation(), M || (i.loop && S.fixLoop(), L = S.getWrapperTranslate(), S.setWrapperTransition(0), S.animating && S.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), S.params.autoplay && S.autoplaying && (S.params.autoplayDisableOnInteraction ? S.stopAutoplay() : S.pauseAutoplay()), H = !1, !S.params.grabCursor || S.params.allowSwipeToNext !== !0 && S.params.allowSwipeToPrev !== !0 || S.setGrabCursor(!0)), M = !0;var s = S.touches.diff = S.isHorizontal() ? S.touches.currentX - S.touches.startX : S.touches.currentY - S.touches.startY;s *= S.params.touchRatio, S.rtl && (s = -s), S.swipeDirection = s > 0 ? "prev" : "next", k = s + L;var r = !0;if (s > 0 && k > S.minTranslate() ? (r = !1, S.params.resistance && (k = S.minTranslate() - 1 + Math.pow(-S.minTranslate() + L + s, S.params.resistanceRatio))) : s < 0 && k < S.maxTranslate() && (r = !1, S.params.resistance && (k = S.maxTranslate() + 1 - Math.pow(S.maxTranslate() - L - s, S.params.resistanceRatio))), r && (e.preventedByNestedSwiper = !0), !S.params.allowSwipeToNext && "next" === S.swipeDirection && k < L && (k = L), !S.params.allowSwipeToPrev && "prev" === S.swipeDirection && k > L && (k = L), S.params.threshold > 0) {
                  if (!(Math.abs(s) > S.params.threshold || D)) return void (k = L);if (!D) return D = !0, S.touches.startX = S.touches.currentX, S.touches.startY = S.touches.currentY, k = L, void (S.touches.diff = S.isHorizontal() ? S.touches.currentX - S.touches.startX : S.touches.currentY - S.touches.startY);
                }S.params.followFinger && ((S.params.freeMode || S.params.watchSlidesProgress) && S.updateActiveIndex(), S.params.freeMode && (0 === Y.length && Y.push({ position: S.touches[S.isHorizontal() ? "startX" : "startY"], time: P }), Y.push({ position: S.touches[S.isHorizontal() ? "currentX" : "currentY"], time: new window.Date().getTime() })), S.updateProgress(k), S.setWrapperTranslate(k));
              }
            }
          }
        }
      }, S.onTouchEnd = function (e) {
        if (e.originalEvent && (e = e.originalEvent), E && S.emit("onTouchEnd", S, e), E = !1, z) {
          S.params.grabCursor && M && z && (S.params.allowSwipeToNext === !0 || S.params.allowSwipeToPrev === !0) && S.setGrabCursor(!1);var t = Date.now(),
              s = t - P;if (S.allowClick && (S.updateClickedSlide(e), S.emit("onTap", S, e), s < 300 && t - X > 300 && (B && clearTimeout(B), B = setTimeout(function () {
            S && (S.params.paginationHide && S.paginationContainer.length > 0 && !a(e.target).hasClass(S.params.bulletClass) && S.paginationContainer.toggleClass(S.params.paginationHiddenClass), S.emit("onClick", S, e));
          }, 300)), s < 300 && t - X < 300 && (B && clearTimeout(B), S.emit("onDoubleTap", S, e))), X = Date.now(), setTimeout(function () {
            S && (S.allowClick = !0);
          }, 0), !z || !M || !S.swipeDirection || 0 === S.touches.diff || k === L) return void (z = M = !1);z = M = !1;var i;if (i = S.params.followFinger ? S.rtl ? S.translate : -S.translate : -k, S.params.freeMode) {
            if (i < -S.minTranslate()) return void S.slideTo(S.activeIndex);if (i > -S.maxTranslate()) return void (S.slides.length < S.snapGrid.length ? S.slideTo(S.snapGrid.length - 1) : S.slideTo(S.slides.length - 1));if (S.params.freeModeMomentum) {
              if (Y.length > 1) {
                var r = Y.pop(),
                    n = Y.pop(),
                    o = r.position - n.position,
                    l = r.time - n.time;S.velocity = o / l, S.velocity = S.velocity / 2, Math.abs(S.velocity) < S.params.freeModeMinimumVelocity && (S.velocity = 0), (l > 150 || new window.Date().getTime() - r.time > 300) && (S.velocity = 0);
              } else S.velocity = 0;S.velocity = S.velocity * S.params.freeModeMomentumVelocityRatio, Y.length = 0;var p = 1e3 * S.params.freeModeMomentumRatio,
                  d = S.velocity * p,
                  u = S.translate + d;S.rtl && (u = -u);var c,
                  m = !1,
                  h = 20 * Math.abs(S.velocity) * S.params.freeModeMomentumBounceRatio;if (u < S.maxTranslate()) S.params.freeModeMomentumBounce ? (u + S.maxTranslate() < -h && (u = S.maxTranslate() - h), c = S.maxTranslate(), m = !0, H = !0) : u = S.maxTranslate();else if (u > S.minTranslate()) S.params.freeModeMomentumBounce ? (u - S.minTranslate() > h && (u = S.minTranslate() + h), c = S.minTranslate(), m = !0, H = !0) : u = S.minTranslate();else if (S.params.freeModeSticky) {
                var g,
                    f = 0;for (f = 0; f < S.snapGrid.length; f += 1) {
                  if (S.snapGrid[f] > -u) {
                    g = f;break;
                  }
                }u = Math.abs(S.snapGrid[g] - u) < Math.abs(S.snapGrid[g - 1] - u) || "next" === S.swipeDirection ? S.snapGrid[g] : S.snapGrid[g - 1], S.rtl || (u = -u);
              }if (0 !== S.velocity) p = S.rtl ? Math.abs((-u - S.translate) / S.velocity) : Math.abs((u - S.translate) / S.velocity);else if (S.params.freeModeSticky) return void S.slideReset();S.params.freeModeMomentumBounce && m ? (S.updateProgress(c), S.setWrapperTransition(p), S.setWrapperTranslate(u), S.onTransitionStart(), S.animating = !0, S.wrapper.transitionEnd(function () {
                S && H && (S.emit("onMomentumBounce", S), S.setWrapperTransition(S.params.speed), S.setWrapperTranslate(c), S.wrapper.transitionEnd(function () {
                  S && S.onTransitionEnd();
                }));
              })) : S.velocity ? (S.updateProgress(u), S.setWrapperTransition(p), S.setWrapperTranslate(u), S.onTransitionStart(), S.animating || (S.animating = !0, S.wrapper.transitionEnd(function () {
                S && S.onTransitionEnd();
              }))) : S.updateProgress(u), S.updateActiveIndex();
            }return void ((!S.params.freeModeMomentum || s >= S.params.longSwipesMs) && (S.updateProgress(), S.updateActiveIndex()));
          }var v,
              w = 0,
              y = S.slidesSizesGrid[0];for (v = 0; v < S.slidesGrid.length; v += S.params.slidesPerGroup) {
            "undefined" != typeof S.slidesGrid[v + S.params.slidesPerGroup] ? i >= S.slidesGrid[v] && i < S.slidesGrid[v + S.params.slidesPerGroup] && (w = v, y = S.slidesGrid[v + S.params.slidesPerGroup] - S.slidesGrid[v]) : i >= S.slidesGrid[v] && (w = v, y = S.slidesGrid[S.slidesGrid.length - 1] - S.slidesGrid[S.slidesGrid.length - 2]);
          }var x = (i - S.slidesGrid[w]) / y;if (s > S.params.longSwipesMs) {
            if (!S.params.longSwipes) return void S.slideTo(S.activeIndex);"next" === S.swipeDirection && (x >= S.params.longSwipesRatio ? S.slideTo(w + S.params.slidesPerGroup) : S.slideTo(w)), "prev" === S.swipeDirection && (x > 1 - S.params.longSwipesRatio ? S.slideTo(w + S.params.slidesPerGroup) : S.slideTo(w));
          } else {
            if (!S.params.shortSwipes) return void S.slideTo(S.activeIndex);"next" === S.swipeDirection && S.slideTo(w + S.params.slidesPerGroup), "prev" === S.swipeDirection && S.slideTo(w);
          }
        }
      }, S._slideTo = function (e, a) {
        return S.slideTo(e, a, !0, !0);
      }, S.slideTo = function (e, a, t, s) {
        "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), e < 0 && (e = 0), S.snapIndex = Math.floor(e / S.params.slidesPerGroup), S.snapIndex >= S.snapGrid.length && (S.snapIndex = S.snapGrid.length - 1);var i = -S.snapGrid[S.snapIndex];if (S.params.autoplay && S.autoplaying && (s || !S.params.autoplayDisableOnInteraction ? S.pauseAutoplay(a) : S.stopAutoplay()), S.updateProgress(i), S.params.normalizeSlideIndex) for (var r = 0; r < S.slidesGrid.length; r++) {
          -Math.floor(100 * i) >= Math.floor(100 * S.slidesGrid[r]) && (e = r);
        }return !(!S.params.allowSwipeToNext && i < S.translate && i < S.minTranslate()) && !(!S.params.allowSwipeToPrev && i > S.translate && i > S.maxTranslate() && (S.activeIndex || 0) !== e) && ("undefined" == typeof a && (a = S.params.speed), S.previousIndex = S.activeIndex || 0, S.activeIndex = e, S.updateRealIndex(), S.rtl && -i === S.translate || !S.rtl && i === S.translate ? (S.params.autoHeight && S.updateAutoHeight(), S.updateClasses(), "slide" !== S.params.effect && S.setWrapperTranslate(i), !1) : (S.updateClasses(), S.onTransitionStart(t), 0 === a || S.browser.lteIE9 ? (S.setWrapperTranslate(i), S.setWrapperTransition(0), S.onTransitionEnd(t)) : (S.setWrapperTranslate(i), S.setWrapperTransition(a), S.animating || (S.animating = !0, S.wrapper.transitionEnd(function () {
          S && S.onTransitionEnd(t);
        }))), !0));
      }, S.onTransitionStart = function (e) {
        "undefined" == typeof e && (e = !0), S.params.autoHeight && S.updateAutoHeight(), S.lazy && S.lazy.onTransitionStart(), e && (S.emit("onTransitionStart", S), S.activeIndex !== S.previousIndex && (S.emit("onSlideChangeStart", S), S.activeIndex > S.previousIndex ? S.emit("onSlideNextStart", S) : S.emit("onSlidePrevStart", S)));
      }, S.onTransitionEnd = function (e) {
        S.animating = !1, S.setWrapperTransition(0), "undefined" == typeof e && (e = !0), S.lazy && S.lazy.onTransitionEnd(), e && (S.emit("onTransitionEnd", S), S.activeIndex !== S.previousIndex && (S.emit("onSlideChangeEnd", S), S.activeIndex > S.previousIndex ? S.emit("onSlideNextEnd", S) : S.emit("onSlidePrevEnd", S))), S.params.history && S.history && S.history.setHistory(S.params.history, S.activeIndex), S.params.hashnav && S.hashnav && S.hashnav.setHash();
      }, S.slideNext = function (e, a, t) {
        if (S.params.loop) {
          if (S.animating) return !1;S.fixLoop();S.container[0].clientLeft;return S.slideTo(S.activeIndex + S.params.slidesPerGroup, a, e, t);
        }return S.slideTo(S.activeIndex + S.params.slidesPerGroup, a, e, t);
      }, S._slideNext = function (e) {
        return S.slideNext(!0, e, !0);
      }, S.slidePrev = function (e, a, t) {
        if (S.params.loop) {
          if (S.animating) return !1;S.fixLoop();S.container[0].clientLeft;return S.slideTo(S.activeIndex - 1, a, e, t);
        }return S.slideTo(S.activeIndex - 1, a, e, t);
      }, S._slidePrev = function (e) {
        return S.slidePrev(!0, e, !0);
      }, S.slideReset = function (e, a, t) {
        return S.slideTo(S.activeIndex, a, e);
      }, S.disableTouchControl = function () {
        return S.params.onlyExternal = !0, !0;
      }, S.enableTouchControl = function () {
        return S.params.onlyExternal = !1, !0;
      }, S.setWrapperTransition = function (e, a) {
        S.wrapper.transition(e), "slide" !== S.params.effect && S.effects[S.params.effect] && S.effects[S.params.effect].setTransition(e), S.params.parallax && S.parallax && S.parallax.setTransition(e), S.params.scrollbar && S.scrollbar && S.scrollbar.setTransition(e), S.params.control && S.controller && S.controller.setTransition(e, a), S.emit("onSetTransition", S, e);
      }, S.setWrapperTranslate = function (e, a, t) {
        var s = 0,
            i = 0,
            r = 0;S.isHorizontal() ? s = S.rtl ? -e : e : i = e, S.params.roundLengths && (s = n(s), i = n(i)), S.params.virtualTranslate || (S.support.transforms3d ? S.wrapper.transform("translate3d(" + s + "px, " + i + "px, " + r + "px)") : S.wrapper.transform("translate(" + s + "px, " + i + "px)")), S.translate = S.isHorizontal() ? s : i;var o,
            l = S.maxTranslate() - S.minTranslate();o = 0 === l ? 0 : (e - S.minTranslate()) / l, o !== S.progress && S.updateProgress(e), a && S.updateActiveIndex(), "slide" !== S.params.effect && S.effects[S.params.effect] && S.effects[S.params.effect].setTranslate(S.translate), S.params.parallax && S.parallax && S.parallax.setTranslate(S.translate), S.params.scrollbar && S.scrollbar && S.scrollbar.setTranslate(S.translate), S.params.control && S.controller && S.controller.setTranslate(S.translate, t), S.emit("onSetTranslate", S, S.translate);
      }, S.getTranslate = function (e, a) {
        var t, s, i, r;return "undefined" == typeof a && (a = "x"), S.params.virtualTranslate ? S.rtl ? -S.translate : S.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = i.transform || i.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function (e) {
          return e.replace(",", ".");
        }).join(", ")), r = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = r.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (s = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), S.rtl && s && (s = -s), s || 0);
      }, S.getWrapperTranslate = function (e) {
        return "undefined" == typeof e && (e = S.isHorizontal() ? "x" : "y"), S.getTranslate(S.wrapper[0], e);
      }, S.observers = [], S.initObservers = function () {
        if (S.params.observeParents) for (var e = S.container.parents(), a = 0; a < e.length; a++) {
          p(e[a]);
        }p(S.container[0], { childList: !1 }), p(S.wrapper[0], { attributes: !1 });
      }, S.disconnectObservers = function () {
        for (var e = 0; e < S.observers.length; e++) {
          S.observers[e].disconnect();
        }S.observers = [];
      }, S.createLoop = function () {
        S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass).remove();var e = S.wrapper.children("." + S.params.slideClass);"auto" !== S.params.slidesPerView || S.params.loopedSlides || (S.params.loopedSlides = e.length), S.loopedSlides = parseInt(S.params.loopedSlides || S.params.slidesPerView, 10), S.loopedSlides = S.loopedSlides + S.params.loopAdditionalSlides, S.loopedSlides > e.length && (S.loopedSlides = e.length);var t,
            s = [],
            i = [];for (e.each(function (t, r) {
          var n = a(this);t < S.loopedSlides && i.push(r), t < e.length && t >= e.length - S.loopedSlides && s.push(r), n.attr("data-swiper-slide-index", t);
        }), t = 0; t < i.length; t++) {
          S.wrapper.append(a(i[t].cloneNode(!0)).addClass(S.params.slideDuplicateClass));
        }for (t = s.length - 1; t >= 0; t--) {
          S.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(S.params.slideDuplicateClass));
        }
      }, S.destroyLoop = function () {
        S.wrapper.children("." + S.params.slideClass + "." + S.params.slideDuplicateClass).remove(), S.slides.removeAttr("data-swiper-slide-index");
      }, S.reLoop = function (e) {
        var a = S.activeIndex - S.loopedSlides;S.destroyLoop(), S.createLoop(), S.updateSlidesSize(), e && S.slideTo(a + S.loopedSlides, 0, !1);
      }, S.fixLoop = function () {
        var e;S.activeIndex < S.loopedSlides ? (e = S.slides.length - 3 * S.loopedSlides + S.activeIndex, e += S.loopedSlides, S.slideTo(e, 0, !1, !0)) : ("auto" === S.params.slidesPerView && S.activeIndex >= 2 * S.loopedSlides || S.activeIndex > S.slides.length - 2 * S.params.slidesPerView) && (e = -S.slides.length + S.activeIndex + S.loopedSlides, e += S.loopedSlides, S.slideTo(e, 0, !1, !0));
      }, S.appendSlide = function (e) {
        if (S.params.loop && S.destroyLoop(), "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) for (var a = 0; a < e.length; a++) {
          e[a] && S.wrapper.append(e[a]);
        } else S.wrapper.append(e);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0);
      }, S.prependSlide = function (e) {
        S.params.loop && S.destroyLoop();var a = S.activeIndex + 1;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) {
          for (var t = 0; t < e.length; t++) {
            e[t] && S.wrapper.prepend(e[t]);
          }a = S.activeIndex + e.length;
        } else S.wrapper.prepend(e);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0), S.slideTo(a, 0, !1);
      }, S.removeSlide = function (e) {
        S.params.loop && (S.destroyLoop(), S.slides = S.wrapper.children("." + S.params.slideClass));var a,
            t = S.activeIndex;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.length) {
          for (var s = 0; s < e.length; s++) {
            a = e[s], S.slides[a] && S.slides.eq(a).remove(), a < t && t--;
          }t = Math.max(t, 0);
        } else a = e, S.slides[a] && S.slides.eq(a).remove(), a < t && t--, t = Math.max(t, 0);S.params.loop && S.createLoop(), S.params.observer && S.support.observer || S.update(!0), S.params.loop ? S.slideTo(t + S.loopedSlides, 0, !1) : S.slideTo(t, 0, !1);
      }, S.removeAllSlides = function () {
        for (var e = [], a = 0; a < S.slides.length; a++) {
          e.push(a);
        }S.removeSlide(e);
      }, S.effects = { fade: { setTranslate: function setTranslate() {
            for (var e = 0; e < S.slides.length; e++) {
              var a = S.slides.eq(e),
                  t = a[0].swiperSlideOffset,
                  s = -t;S.params.virtualTranslate || (s -= S.translate);var i = 0;S.isHorizontal() || (i = s, s = 0);var r = S.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);a.css({ opacity: r }).transform("translate3d(" + s + "px, " + i + "px, 0px)");
            }
          }, setTransition: function setTransition(e) {
            if (S.slides.transition(e), S.params.virtualTranslate && 0 !== e) {
              var a = !1;S.slides.transitionEnd(function () {
                if (!a && S) {
                  a = !0, S.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) {
                    S.wrapper.trigger(e[t]);
                  }
                }
              });
            }
          } }, flip: { setTranslate: function setTranslate() {
            for (var e = 0; e < S.slides.length; e++) {
              var t = S.slides.eq(e),
                  s = t[0].progress;S.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));var i = t[0].swiperSlideOffset,
                  r = -180 * s,
                  n = r,
                  o = 0,
                  l = -i,
                  p = 0;if (S.isHorizontal() ? S.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(s)) + S.slides.length, S.params.flip.slideShadows) {
                var d = S.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                    u = S.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");0 === d.length && (d = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(u)), d.length && (d[0].style.opacity = Math.max(-s, 0)), u.length && (u[0].style.opacity = Math.max(s, 0));
              }t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
            }
          }, setTransition: function setTransition(e) {
            if (S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), S.params.virtualTranslate && 0 !== e) {
              var t = !1;S.slides.eq(S.activeIndex).transitionEnd(function () {
                if (!t && S && a(this).hasClass(S.params.slideActiveClass)) {
                  t = !0, S.animating = !1;for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < e.length; s++) {
                    S.wrapper.trigger(e[s]);
                  }
                }
              });
            }
          } }, cube: { setTranslate: function setTranslate() {
            var e,
                t = 0;S.params.cube.shadow && (S.isHorizontal() ? (e = S.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), S.wrapper.append(e)), e.css({ height: S.width + "px" })) : (e = S.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), S.container.append(e))));for (var s = 0; s < S.slides.length; s++) {
              var i = S.slides.eq(s),
                  r = 90 * s,
                  n = Math.floor(r / 360);S.rtl && (r = -r, n = Math.floor(-r / 360));var o = Math.max(Math.min(i[0].progress, 1), -1),
                  l = 0,
                  p = 0,
                  d = 0;s % 4 === 0 ? (l = 4 * -n * S.size, d = 0) : (s - 1) % 4 === 0 ? (l = 0, d = 4 * -n * S.size) : (s - 2) % 4 === 0 ? (l = S.size + 4 * n * S.size, d = S.size) : (s - 3) % 4 === 0 && (l = -S.size, d = 3 * S.size + 4 * S.size * n), S.rtl && (l = -l), S.isHorizontal() || (p = l, l = 0);var u = "rotateX(" + (S.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (S.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";if (o <= 1 && o > -1 && (t = 90 * s + 90 * o, S.rtl && (t = 90 * -s - 90 * o)), i.transform(u), S.params.cube.slideShadows) {
                var c = S.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                    m = S.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), i.append(c)), 0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0));
              }
            }if (S.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + S.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + S.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + S.size / 2 + "px", "transform-origin": "50% 50% -" + S.size / 2 + "px" }), S.params.cube.shadow) if (S.isHorizontal()) e.transform("translate3d(0px, " + (S.width / 2 + S.params.cube.shadowOffset) + "px, " + -S.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + S.params.cube.shadowScale + ")");else {
              var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                  g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                  f = S.params.cube.shadowScale,
                  v = S.params.cube.shadowScale / g,
                  w = S.params.cube.shadowOffset;e.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (S.height / 2 + w) + "px, " + -S.height / 2 / v + "px) rotateX(-90deg)");
            }var y = S.isSafari || S.isUiWebView ? -S.size / 2 : 0;S.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (S.isHorizontal() ? 0 : t) + "deg) rotateY(" + (S.isHorizontal() ? -t : 0) + "deg)");
          }, setTransition: function setTransition(e) {
            S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), S.params.cube.shadow && !S.isHorizontal() && S.container.find(".swiper-cube-shadow").transition(e);
          } }, coverflow: { setTranslate: function setTranslate() {
            for (var e = S.translate, t = S.isHorizontal() ? -e + S.width / 2 : -e + S.height / 2, s = S.isHorizontal() ? S.params.coverflow.rotate : -S.params.coverflow.rotate, i = S.params.coverflow.depth, r = 0, n = S.slides.length; r < n; r++) {
              var o = S.slides.eq(r),
                  l = S.slidesSizesGrid[r],
                  p = o[0].swiperSlideOffset,
                  d = (t - p - l / 2) / l * S.params.coverflow.modifier,
                  u = S.isHorizontal() ? s * d : 0,
                  c = S.isHorizontal() ? 0 : s * d,
                  m = -i * Math.abs(d),
                  h = S.isHorizontal() ? 0 : S.params.coverflow.stretch * d,
                  g = S.isHorizontal() ? S.params.coverflow.stretch * d : 0;Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);var f = "translate3d(" + g + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";if (o.transform(f), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, S.params.coverflow.slideShadows) {
                var v = S.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                    w = S.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");0 === v.length && (v = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = a('<div class="swiper-slide-shadow-' + (S.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0);
              }
            }if (S.browser.ie) {
              var y = S.wrapper[0].style;y.perspectiveOrigin = t + "px 50%";
            }
          }, setTransition: function setTransition(e) {
            S.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
          } } }, S.lazy = { initialImageLoaded: !1, loadImageInSlide: function loadImageInSlide(e, t) {
          if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== S.slides.length)) {
            var s = S.slides.eq(e),
                i = s.find("." + S.params.lazyLoadingClass + ":not(." + S.params.lazyStatusLoadedClass + "):not(." + S.params.lazyStatusLoadingClass + ")");!s.hasClass(S.params.lazyLoadingClass) || s.hasClass(S.params.lazyStatusLoadedClass) || s.hasClass(S.params.lazyStatusLoadingClass) || (i = i.add(s[0])), 0 !== i.length && i.each(function () {
              var e = a(this);e.addClass(S.params.lazyStatusLoadingClass);var i = e.attr("data-background"),
                  r = e.attr("data-src"),
                  n = e.attr("data-srcset"),
                  o = e.attr("data-sizes");S.loadImage(e[0], r || i, n, o, !1, function () {
                if (i ? (e.css("background-image", 'url("' + i + '")'), e.removeAttr("data-background")) : (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), o && (e.attr("sizes", o), e.removeAttr("data-sizes")), r && (e.attr("src", r), e.removeAttr("data-src"))), e.addClass(S.params.lazyStatusLoadedClass).removeClass(S.params.lazyStatusLoadingClass), s.find("." + S.params.lazyPreloaderClass + ", ." + S.params.preloaderClass).remove(), S.params.loop && t) {
                  var a = s.attr("data-swiper-slide-index");if (s.hasClass(S.params.slideDuplicateClass)) {
                    var l = S.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + S.params.slideDuplicateClass + ")");S.lazy.loadImageInSlide(l.index(), !1);
                  } else {
                    var p = S.wrapper.children("." + S.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');S.lazy.loadImageInSlide(p.index(), !1);
                  }
                }S.emit("onLazyImageReady", S, s[0], e[0]);
              }), S.emit("onLazyImageLoad", S, s[0], e[0]);
            });
          }
        }, load: function load() {
          var e,
              t = S.params.slidesPerView;if ("auto" === t && (t = 0), S.lazy.initialImageLoaded || (S.lazy.initialImageLoaded = !0), S.params.watchSlidesVisibility) S.wrapper.children("." + S.params.slideVisibleClass).each(function () {
            S.lazy.loadImageInSlide(a(this).index());
          });else if (t > 1) for (e = S.activeIndex; e < S.activeIndex + t; e++) {
            S.slides[e] && S.lazy.loadImageInSlide(e);
          } else S.lazy.loadImageInSlide(S.activeIndex);if (S.params.lazyLoadingInPrevNext) if (t > 1 || S.params.lazyLoadingInPrevNextAmount && S.params.lazyLoadingInPrevNextAmount > 1) {
            var s = S.params.lazyLoadingInPrevNextAmount,
                i = t,
                r = Math.min(S.activeIndex + i + Math.max(s, i), S.slides.length),
                n = Math.max(S.activeIndex - Math.max(i, s), 0);for (e = S.activeIndex + t; e < r; e++) {
              S.slides[e] && S.lazy.loadImageInSlide(e);
            }for (e = n; e < S.activeIndex; e++) {
              S.slides[e] && S.lazy.loadImageInSlide(e);
            }
          } else {
            var o = S.wrapper.children("." + S.params.slideNextClass);o.length > 0 && S.lazy.loadImageInSlide(o.index());var l = S.wrapper.children("." + S.params.slidePrevClass);l.length > 0 && S.lazy.loadImageInSlide(l.index());
          }
        }, onTransitionStart: function onTransitionStart() {
          S.params.lazyLoading && (S.params.lazyLoadingOnTransitionStart || !S.params.lazyLoadingOnTransitionStart && !S.lazy.initialImageLoaded) && S.lazy.load();
        }, onTransitionEnd: function onTransitionEnd() {
          S.params.lazyLoading && !S.params.lazyLoadingOnTransitionStart && S.lazy.load();
        } }, S.scrollbar = { isTouched: !1, setDragPosition: function setDragPosition(e) {
          var a = S.scrollbar,
              t = S.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
              s = t - a.track.offset()[S.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
              i = -S.minTranslate() * a.moveDivider,
              r = -S.maxTranslate() * a.moveDivider;s < i ? s = i : s > r && (s = r), s = -s / a.moveDivider, S.updateProgress(s), S.setWrapperTranslate(s, !0);
        }, dragStart: function dragStart(e) {
          var a = S.scrollbar;a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), S.params.scrollbarHide && a.track.css("opacity", 1), S.wrapper.transition(100), a.drag.transition(100), S.emit("onScrollbarDragStart", S);
        }, dragMove: function dragMove(e) {
          var a = S.scrollbar;a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), S.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), S.emit("onScrollbarDragMove", S));
        }, dragEnd: function dragEnd(e) {
          var a = S.scrollbar;a.isTouched && (a.isTouched = !1, S.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function () {
            a.track.css("opacity", 0), a.track.transition(400);
          }, 1e3)), S.emit("onScrollbarDragEnd", S), S.params.scrollbarSnapOnRelease && S.slideReset());
        }, draggableEvents: function () {
          return S.params.simulateTouch !== !1 || S.support.touch ? S.touchEvents : S.touchEventsDesktop;
        }(), enableDraggable: function enableDraggable() {
          var e = S.scrollbar,
              t = S.support.touch ? e.track : document;a(e.track).on(e.draggableEvents.start, e.dragStart), a(t).on(e.draggableEvents.move, e.dragMove), a(t).on(e.draggableEvents.end, e.dragEnd);
        }, disableDraggable: function disableDraggable() {
          var e = S.scrollbar,
              t = S.support.touch ? e.track : document;a(e.track).off(S.draggableEvents.start, e.dragStart), a(t).off(S.draggableEvents.move, e.dragMove), a(t).off(S.draggableEvents.end, e.dragEnd);
        }, set: function set() {
          if (S.params.scrollbar) {
            var e = S.scrollbar;e.track = a(S.params.scrollbar), S.params.uniqueNavElements && "string" == typeof S.params.scrollbar && e.track.length > 1 && 1 === S.container.find(S.params.scrollbar).length && (e.track = S.container.find(S.params.scrollbar)), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = S.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = S.size / S.virtualSize, e.moveDivider = e.divider * (e.trackSize / S.size), e.dragSize = e.trackSize * e.divider, S.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", S.params.scrollbarHide && (e.track[0].style.opacity = 0);
          }
        }, setTranslate: function setTranslate() {
          if (S.params.scrollbar) {
            var e,
                a = S.scrollbar,
                t = (S.translate || 0, a.dragSize);e = (a.trackSize - a.dragSize) * S.progress, S.rtl && S.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), S.isHorizontal() ? (S.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (S.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), S.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function () {
              a.track[0].style.opacity = 0, a.track.transition(400);
            }, 1e3));
          }
        }, setTransition: function setTransition(e) {
          S.params.scrollbar && S.scrollbar.drag.transition(e);
        } }, S.controller = { LinearSpline: function LinearSpline(e, a) {
          this.x = e, this.y = a, this.lastIndex = e.length - 1;var t, s;this.x.length;this.interpolate = function (e) {
            return e ? (s = i(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0;
          };var i = function () {
            var e, a, t;return function (s, i) {
              for (a = -1, e = s.length; e - a > 1;) {
                s[t = e + a >> 1] <= i ? a = t : e = t;
              }return e;
            };
          }();
        }, getInterpolateFunction: function getInterpolateFunction(e) {
          S.controller.spline || (S.controller.spline = S.params.loop ? new S.controller.LinearSpline(S.slidesGrid, e.slidesGrid) : new S.controller.LinearSpline(S.snapGrid, e.snapGrid));
        }, setTranslate: function setTranslate(e, a) {
          function s(a) {
            e = a.rtl && "horizontal" === a.params.direction ? -S.translate : S.translate, "slide" === S.params.controlBy && (S.controller.getInterpolateFunction(a), r = -S.controller.spline.interpolate(-e)), r && "container" !== S.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (S.maxTranslate() - S.minTranslate()), r = (e - S.minTranslate()) * i + a.minTranslate()), S.params.controlInverse && (r = a.maxTranslate() - r), a.updateProgress(r), a.setWrapperTranslate(r, !1, S), a.updateActiveIndex();
          }var i,
              r,
              n = S.params.control;if (S.isArray(n)) for (var o = 0; o < n.length; o++) {
            n[o] !== a && n[o] instanceof t && s(n[o]);
          } else n instanceof t && a !== n && s(n);
        }, setTransition: function setTransition(e, a) {
          function s(a) {
            a.setWrapperTransition(e, S), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function () {
              r && (a.params.loop && "slide" === S.params.controlBy && a.fixLoop(), a.onTransitionEnd());
            }));
          }var i,
              r = S.params.control;if (S.isArray(r)) for (i = 0; i < r.length; i++) {
            r[i] !== a && r[i] instanceof t && s(r[i]);
          } else r instanceof t && a !== r && s(r);
        } }, S.hashnav = { onHashCange: function onHashCange(e, a) {
          var t = document.location.hash.replace("#", ""),
              s = S.slides.eq(S.activeIndex).attr("data-hash");t !== s && S.slideTo(S.wrapper.children("." + S.params.slideClass + '[data-hash="' + t + '"]').index());
        }, attachEvents: function attachEvents(e) {
          var t = e ? "off" : "on";a(window)[t]("hashchange", S.hashnav.onHashCange);
        }, setHash: function setHash() {
          if (S.hashnav.initialized && S.params.hashnav) if (S.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + S.slides.eq(S.activeIndex).attr("data-hash") || "");else {
            var e = S.slides.eq(S.activeIndex),
                a = e.attr("data-hash") || e.attr("data-history");document.location.hash = a || "";
          }
        }, init: function init() {
          if (S.params.hashnav && !S.params.history) {
            S.hashnav.initialized = !0;var e = document.location.hash.replace("#", "");if (e) {
              for (var a = 0, t = 0, s = S.slides.length; t < s; t++) {
                var i = S.slides.eq(t),
                    r = i.attr("data-hash") || i.attr("data-history");if (r === e && !i.hasClass(S.params.slideDuplicateClass)) {
                  var n = i.index();S.slideTo(n, a, S.params.runCallbacksOnInit, !0);
                }
              }S.params.hashnavWatchState && S.hashnav.attachEvents();
            }
          }
        }, destroy: function destroy() {
          S.params.hashnavWatchState && S.hashnav.attachEvents(!0);
        } }, S.history = { init: function init() {
          if (S.params.history) {
            if (!window.history || !window.history.pushState) return S.params.history = !1, void (S.params.hashnav = !0);S.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, S.params.runCallbacksOnInit), S.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState));
          }
        }, setHistoryPopState: function setHistoryPopState() {
          S.history.paths = S.history.getPathValues(), S.history.scrollToSlide(S.params.speed, S.history.paths.value, !1);
        }, getPathValues: function getPathValues() {
          var e = window.location.pathname.slice(1).split("/"),
              a = e.length,
              t = e[a - 2],
              s = e[a - 1];return { key: t, value: s };
        }, setHistory: function setHistory(e, a) {
          if (S.history.initialized && S.params.history) {
            var t = S.slides.eq(a),
                s = this.slugify(t.attr("data-history"));window.location.pathname.includes(e) || (s = e + "/" + s), S.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s);
          }
        }, slugify: function slugify(e) {
          return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
        }, scrollToSlide: function scrollToSlide(e, a, t) {
          if (a) for (var s = 0, i = S.slides.length; s < i; s++) {
            var r = S.slides.eq(s),
                n = this.slugify(r.attr("data-history"));if (n === a && !r.hasClass(S.params.slideDuplicateClass)) {
              var o = r.index();S.slideTo(o, e, t);
            }
          } else S.slideTo(0, e, t);
        } }, S.disableKeyboardControl = function () {
        S.params.keyboardControl = !1, a(document).off("keydown", d);
      }, S.enableKeyboardControl = function () {
        S.params.keyboardControl = !0, a(document).on("keydown", d);
      }, S.mousewheel = { event: !1, lastScrollTime: new window.Date().getTime() }, S.params.mousewheelControl && (S.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : u() ? "wheel" : "mousewheel"), S.disableMousewheelControl = function () {
        if (!S.mousewheel.event) return !1;var e = S.container;return "container" !== S.params.mousewheelEventsTarged && (e = a(S.params.mousewheelEventsTarged)), e.off(S.mousewheel.event, c), !0;
      }, S.enableMousewheelControl = function () {
        if (!S.mousewheel.event) return !1;var e = S.container;return "container" !== S.params.mousewheelEventsTarged && (e = a(S.params.mousewheelEventsTarged)), e.on(S.mousewheel.event, c), !0;
      }, S.parallax = { setTranslate: function setTranslate() {
          S.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            h(this, S.progress);
          }), S.slides.each(function () {
            var e = a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
              var a = Math.min(Math.max(e[0].progress, -1), 1);h(this, a);
            });
          });
        }, setTransition: function setTransition(e) {
          "undefined" == typeof e && (e = S.params.speed), S.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function () {
            var t = a(this),
                s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;0 === e && (s = 0), t.transition(s);
          });
        } }, S.zoom = { scale: 1, currentScale: 1, isScaling: !1, gesture: { slide: void 0, slideWidth: void 0, slideHeight: void 0, image: void 0, imageWrap: void 0, zoomMax: S.params.zoomMax }, image: { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 }, getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
          if (e.targetTouches.length < 2) return 1;var a = e.targetTouches[0].pageX,
              t = e.targetTouches[0].pageY,
              s = e.targetTouches[1].pageX,
              i = e.targetTouches[1].pageY,
              r = Math.sqrt(Math.pow(s - a, 2) + Math.pow(i - t, 2));return r;
        }, onGestureStart: function onGestureStart(e) {
          var t = S.zoom;if (!S.support.gestures) {
            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;t.gesture.scaleStart = t.getDistanceBetweenTouches(e);
          }return t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = a(this), 0 === t.gesture.slide.length && (t.gesture.slide = S.slides.eq(S.activeIndex)), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + S.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || S.params.zoomMax, 0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0), void (t.isScaling = !0)) : void (t.gesture.image = void 0);
        }, onGestureChange: function onGestureChange(e) {
          var a = S.zoom;if (!S.support.gestures) {
            if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;a.gesture.scaleMove = a.getDistanceBetweenTouches(e);
          }a.gesture.image && 0 !== a.gesture.image.length && (S.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)), a.scale < S.params.zoomMin && (a.scale = S.params.zoomMin + 1 - Math.pow(S.params.zoomMin - a.scale + 1, .5)), a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"));
        }, onGestureEnd: function onGestureEnd(e) {
          var a = S.zoom;!S.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), S.params.zoomMin), a.gesture.image.transition(S.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0));
        }, onTouchStart: function onTouchStart(e, a) {
          var t = e.zoom;t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY));
        }, onTouchMove: function onTouchMove(e) {
          var a = S.zoom;if (a.gesture.image && 0 !== a.gesture.image.length && (S.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
            a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = S.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = S.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0));var t = a.image.width * a.scale,
                s = a.image.height * a.scale;if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
              if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                if (S.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void (a.image.isTouched = !1);if (!S.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void (a.image.isTouched = !1);
              }e.preventDefault(), e.stopPropagation(), a.image.isMoved = !0, a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX, a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY, a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)), a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)), a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)), a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)), a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x), a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y), a.velocity.prevTime || (a.velocity.prevTime = Date.now()), a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2, a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2, Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0), Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0), a.velocity.prevPositionX = a.image.touchesCurrent.x, a.velocity.prevPositionY = a.image.touchesCurrent.y, a.velocity.prevTime = Date.now(), a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)");
            }
          }
        }, onTouchEnd: function onTouchEnd(e, a) {
          var t = e.zoom;if (t.gesture.image && 0 !== t.gesture.image.length) {
            if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1, void (t.image.isMoved = !1);t.image.isTouched = !1, t.image.isMoved = !1;var s = 300,
                i = 300,
                r = t.velocity.x * s,
                n = t.image.currentX + r,
                o = t.velocity.y * i,
                l = t.image.currentY + o;0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)), 0 !== t.velocity.y && (i = Math.abs((l - t.image.currentY) / t.velocity.y));var p = Math.max(s, i);t.image.currentX = n, t.image.currentY = l;var d = t.image.width * t.scale,
                u = t.image.height * t.scale;t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0), t.image.maxY = -t.image.minY, t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX), t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY), t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)");
          }
        }, onTransitionEnd: function onTransitionEnd(e) {
          var a = e.zoom;a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"), a.gesture.imageWrap.transform("translate3d(0,0,0)"), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1);
        }, toggleZoom: function toggleZoom(e, t) {
          var s = e.zoom;if (s.gesture.slide || (s.gesture.slide = e.clickedSlide ? a(e.clickedSlide) : e.slides.eq(e.activeIndex), s.gesture.image = s.gesture.slide.find("img, svg, canvas"), s.gesture.imageWrap = s.gesture.image.parent("." + e.params.zoomContainerClass)), s.gesture.image && 0 !== s.gesture.image.length) {
            var i, r, n, o, l, p, d, u, c, m, h, g, f, v, w, y, x, T;"undefined" == typeof s.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = s.image.touchesStart.x, r = s.image.touchesStart.y), s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1, s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax, t ? (x = s.gesture.slide[0].offsetWidth, T = s.gesture.slide[0].offsetHeight, n = s.gesture.slide.offset().left, o = s.gesture.slide.offset().top, l = n + x / 2 - i, p = o + T / 2 - r, c = s.gesture.image[0].offsetWidth, m = s.gesture.image[0].offsetHeight, h = c * s.scale, g = m * s.scale, f = Math.min(x / 2 - h / 2, 0), v = Math.min(T / 2 - g / 2, 0), w = -f, y = -v, d = l * s.scale, u = p * s.scale, d < f && (d = f), d > w && (d = w), u < v && (u = v), u > y && (u = y)) : (d = 0, u = 0), s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"));
          }
        }, attachEvents: function attachEvents(e) {
          var t = e ? "off" : "on";if (S.params.zoom) {
            var s = (S.slides, !("touchstart" !== S.touchEvents.start || !S.support.passiveListener || !S.params.passiveListeners) && { passive: !0, capture: !1 });S.support.gestures ? (S.slides[t]("gesturestart", S.zoom.onGestureStart, s), S.slides[t]("gesturechange", S.zoom.onGestureChange, s), S.slides[t]("gestureend", S.zoom.onGestureEnd, s)) : "touchstart" === S.touchEvents.start && (S.slides[t](S.touchEvents.start, S.zoom.onGestureStart, s), S.slides[t](S.touchEvents.move, S.zoom.onGestureChange, s), S.slides[t](S.touchEvents.end, S.zoom.onGestureEnd, s)), S[t]("touchStart", S.zoom.onTouchStart), S.slides.each(function (e, s) {
              a(s).find("." + S.params.zoomContainerClass).length > 0 && a(s)[t](S.touchEvents.move, S.zoom.onTouchMove);
            }), S[t]("touchEnd", S.zoom.onTouchEnd), S[t]("transitionEnd", S.zoom.onTransitionEnd), S.params.zoomToggle && S.on("doubleTap", S.zoom.toggleZoom);
          }
        }, init: function init() {
          S.zoom.attachEvents();
        }, destroy: function destroy() {
          S.zoom.attachEvents(!0);
        } }, S._plugins = [];for (var N in S.plugins) {
        var W = S.plugins[N](S, S.params[N]);W && S._plugins.push(W);
      }return S.callPlugins = function (e) {
        for (var a = 0; a < S._plugins.length; a++) {
          e in S._plugins[a] && S._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
      }, S.emitterEventListeners = {}, S.emit = function (e) {
        S.params[e] && S.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);var a;if (S.emitterEventListeners[e]) for (a = 0; a < S.emitterEventListeners[e].length; a++) {
          S.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }S.callPlugins && S.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
      }, S.on = function (e, a) {
        return e = g(e), S.emitterEventListeners[e] || (S.emitterEventListeners[e] = []), S.emitterEventListeners[e].push(a), S;
      }, S.off = function (e, a) {
        var t;if (e = g(e), "undefined" == typeof a) return S.emitterEventListeners[e] = [], S;if (S.emitterEventListeners[e] && 0 !== S.emitterEventListeners[e].length) {
          for (t = 0; t < S.emitterEventListeners[e].length; t++) {
            S.emitterEventListeners[e][t] === a && S.emitterEventListeners[e].splice(t, 1);
          }return S;
        }
      }, S.once = function (e, a) {
        e = g(e);var t = function t() {
          a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), S.off(e, t);
        };return S.on(e, t), S;
      }, S.a11y = { makeFocusable: function makeFocusable(e) {
          return e.attr("tabIndex", "0"), e;
        }, addRole: function addRole(e, a) {
          return e.attr("role", a), e;
        }, addLabel: function addLabel(e, a) {
          return e.attr("aria-label", a), e;
        }, disable: function disable(e) {
          return e.attr("aria-disabled", !0), e;
        }, enable: function enable(e) {
          return e.attr("aria-disabled", !1), e;
        }, onEnterKey: function onEnterKey(e) {
          13 === e.keyCode && (a(e.target).is(S.params.nextButton) ? (S.onClickNext(e), S.isEnd ? S.a11y.notify(S.params.lastSlideMessage) : S.a11y.notify(S.params.nextSlideMessage)) : a(e.target).is(S.params.prevButton) && (S.onClickPrev(e), S.isBeginning ? S.a11y.notify(S.params.firstSlideMessage) : S.a11y.notify(S.params.prevSlideMessage)), a(e.target).is("." + S.params.bulletClass) && a(e.target)[0].click());
        }, liveRegion: a('<span class="' + S.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'), notify: function notify(e) {
          var a = S.a11y.liveRegion;0 !== a.length && (a.html(""), a.html(e));
        }, init: function init() {
          S.params.nextButton && S.nextButton && S.nextButton.length > 0 && (S.a11y.makeFocusable(S.nextButton), S.a11y.addRole(S.nextButton, "button"), S.a11y.addLabel(S.nextButton, S.params.nextSlideMessage)), S.params.prevButton && S.prevButton && S.prevButton.length > 0 && (S.a11y.makeFocusable(S.prevButton), S.a11y.addRole(S.prevButton, "button"), S.a11y.addLabel(S.prevButton, S.params.prevSlideMessage)), a(S.container).append(S.a11y.liveRegion);
        }, initPagination: function initPagination() {
          S.params.pagination && S.params.paginationClickable && S.bullets && S.bullets.length && S.bullets.each(function () {
            var e = a(this);S.a11y.makeFocusable(e), S.a11y.addRole(e, "button"), S.a11y.addLabel(e, S.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1));
          });
        }, destroy: function destroy() {
          S.a11y.liveRegion && S.a11y.liveRegion.length > 0 && S.a11y.liveRegion.remove();
        } }, S.init = function () {
        S.params.loop && S.createLoop(), S.updateContainerSize(), S.updateSlidesSize(), S.updatePagination(), S.params.scrollbar && S.scrollbar && (S.scrollbar.set(), S.params.scrollbarDraggable && S.scrollbar.enableDraggable()), "slide" !== S.params.effect && S.effects[S.params.effect] && (S.params.loop || S.updateProgress(), S.effects[S.params.effect].setTranslate()), S.params.loop ? S.slideTo(S.params.initialSlide + S.loopedSlides, 0, S.params.runCallbacksOnInit) : (S.slideTo(S.params.initialSlide, 0, S.params.runCallbacksOnInit), 0 === S.params.initialSlide && (S.parallax && S.params.parallax && S.parallax.setTranslate(), S.lazy && S.params.lazyLoading && (S.lazy.load(), S.lazy.initialImageLoaded = !0))), S.attachEvents(), S.params.observer && S.support.observer && S.initObservers(), S.params.preloadImages && !S.params.lazyLoading && S.preloadImages(), S.params.zoom && S.zoom && S.zoom.init(), S.params.autoplay && S.startAutoplay(), S.params.keyboardControl && S.enableKeyboardControl && S.enableKeyboardControl(), S.params.mousewheelControl && S.enableMousewheelControl && S.enableMousewheelControl(), S.params.hashnavReplaceState && (S.params.replaceState = S.params.hashnavReplaceState), S.params.history && S.history && S.history.init(), S.params.hashnav && S.hashnav && S.hashnav.init(), S.params.a11y && S.a11y && S.a11y.init(), S.emit("onInit", S);
      }, S.cleanupStyles = function () {
        S.container.removeClass(S.classNames.join(" ")).removeAttr("style"), S.wrapper.removeAttr("style"), S.slides && S.slides.length && S.slides.removeClass([S.params.slideVisibleClass, S.params.slideActiveClass, S.params.slideNextClass, S.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), S.paginationContainer && S.paginationContainer.length && S.paginationContainer.removeClass(S.params.paginationHiddenClass), S.bullets && S.bullets.length && S.bullets.removeClass(S.params.bulletActiveClass), S.params.prevButton && a(S.params.prevButton).removeClass(S.params.buttonDisabledClass), S.params.nextButton && a(S.params.nextButton).removeClass(S.params.buttonDisabledClass), S.params.scrollbar && S.scrollbar && (S.scrollbar.track && S.scrollbar.track.length && S.scrollbar.track.removeAttr("style"), S.scrollbar.drag && S.scrollbar.drag.length && S.scrollbar.drag.removeAttr("style"));
      }, S.destroy = function (e, a) {
        S.detachEvents(), S.stopAutoplay(), S.params.scrollbar && S.scrollbar && S.params.scrollbarDraggable && S.scrollbar.disableDraggable(), S.params.loop && S.destroyLoop(), a && S.cleanupStyles(), S.disconnectObservers(), S.params.zoom && S.zoom && S.zoom.destroy(), S.params.keyboardControl && S.disableKeyboardControl && S.disableKeyboardControl(), S.params.mousewheelControl && S.disableMousewheelControl && S.disableMousewheelControl(), S.params.a11y && S.a11y && S.a11y.destroy(), S.params.history && !S.params.replaceState && window.removeEventListener("popstate", S.history.setHistoryPopState), S.params.hashnav && S.hashnav && S.hashnav.destroy(), S.emit("onDestroy"), e !== !1 && (S = null);
      }, S.init(), S;
    }
  };t.prototype = { isSafari: function () {
      var e = navigator.userAgent.toLowerCase();return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
    }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), isArray: function isArray(e) {
      return "[object Array]" === Object.prototype.toString.apply(e);
    }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1, lteIE9: function () {
        var e = document.createElement("div");return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length;
      }() }, device: function () {
      var e = navigator.userAgent,
          a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
          t = e.match(/(iPad).*OS\s([\d_]+)/),
          s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
          i = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);return { ios: t || i || s, android: a };
    }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
        return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
      }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
        var e = document.createElement("div").style;return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
      }(), flexbox: function () {
        for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++) {
          if (a[t] in e) return !0;
        }
      }(), observer: function () {
        return "MutationObserver" in window || "WebkitMutationObserver" in window;
      }(), passiveListener: function () {
        var e = !1;try {
          var a = Object.defineProperty({}, "passive", { get: function get() {
              e = !0;
            } });window.addEventListener("testPassiveListener", null, a);
        } catch (e) {}return e;
      }(), gestures: function () {
        return "ongesturestart" in window;
      }() }, plugins: {} };for (var s = function () {
    var e = function e(_e) {
      var a = this,
          t = 0;for (t = 0; t < _e.length; t++) {
        a[t] = _e[t];
      }return a.length = _e.length, this;
    },
        a = function a(_a, t) {
      var s = [],
          i = 0;if (_a && !t && _a instanceof e) return _a;if (_a) if ("string" == typeof _a) {
        var r,
            n,
            o = _a.trim();if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
          var l = "div";for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = _a, i = 0; i < n.childNodes.length; i++) {
            s.push(n.childNodes[i]);
          }
        } else for (r = t || "#" !== _a[0] || _a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(_a) : [document.getElementById(_a.split("#")[1])], i = 0; i < r.length; i++) {
          r[i] && s.push(r[i]);
        }
      } else if (_a.nodeType || _a === window || _a === document) s.push(_a);else if (_a.length > 0 && _a[0].nodeType) for (i = 0; i < _a.length; i++) {
        s.push(_a[i]);
      }return new e(s);
    };return e.prototype = { addClass: function addClass(e) {
        if ("undefined" == typeof e) return this;for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.add(a[t]);
          }
        }return this;
      }, removeClass: function removeClass(e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.remove(a[t]);
          }
        }return this;
      }, hasClass: function hasClass(e) {
        return !!this[0] && this[0].classList.contains(e);
      }, toggleClass: function toggleClass(e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++) {
          for (var s = 0; s < this.length; s++) {
            this[s].classList.toggle(a[t]);
          }
        }return this;
      }, attr: function attr(e, a) {
        if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;for (var t = 0; t < this.length; t++) {
          if (2 === arguments.length) this[t].setAttribute(e, a);else for (var s in e) {
            this[t][s] = e[s], this[t].setAttribute(s, e[s]);
          }
        }return this;
      }, removeAttr: function removeAttr(e) {
        for (var a = 0; a < this.length; a++) {
          this[a].removeAttribute(e);
        }return this;
      }, data: function data(e, a) {
        if ("undefined" != typeof a) {
          for (var t = 0; t < this.length; t++) {
            var s = this[t];s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = a;
          }return this;
        }if (this[0]) {
          var i = this[0].getAttribute("data-" + e);return i ? i : this[0].dom7ElementDataStorage && (e in this[0].dom7ElementDataStorage) ? this[0].dom7ElementDataStorage[e] : void 0;
        }
      }, transform: function transform(e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
        }return this;
      }, transition: function transition(e) {
        "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
          var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
        }return this;
      }, on: function on(e, t, s, i) {
        function r(e) {
          var i = e.target;if (a(i).is(t)) s.call(i, e);else for (var r = a(i).parents(), n = 0; n < r.length; n++) {
            a(r[n]).is(t) && s.call(r[n], e);
          }
        }var n,
            o,
            l = e.split(" ");for (n = 0; n < this.length; n++) {
          if ("function" == typeof t || t === !1) for ("function" == typeof t && (s = arguments[1], i = arguments[2] || !1), o = 0; o < l.length; o++) {
            this[n].addEventListener(l[o], s, i);
          } else for (o = 0; o < l.length; o++) {
            this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({ listener: s, liveListener: r }), this[n].addEventListener(l[o], r, i);
          }
        }return this;
      }, off: function off(e, a, t, s) {
        for (var i = e.split(" "), r = 0; r < i.length; r++) {
          for (var n = 0; n < this.length; n++) {
            if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], s = arguments[2] || !1), this[n].removeEventListener(i[r], t, s);else if (this[n].dom7LiveListeners) for (var o = 0; o < this[n].dom7LiveListeners.length; o++) {
              this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[r], this[n].dom7LiveListeners[o].liveListener, s);
            }
          }
        }return this;
      }, once: function once(e, a, t, s) {
        function i(n) {
          t(n), r.off(e, a, i, s);
        }var r = this;"function" == typeof a && (a = !1, t = arguments[1], s = arguments[2]), r.on(e, a, i, s);
      }, trigger: function trigger(e, a) {
        for (var t = 0; t < this.length; t++) {
          var s;try {
            s = new window.CustomEvent(e, { detail: a, bubbles: !0, cancelable: !0 });
          } catch (t) {
            s = document.createEvent("Event"), s.initEvent(e, !0, !0), s.detail = a;
          }this[t].dispatchEvent(s);
        }return this;
      }, transitionEnd: function transitionEnd(e) {
        function a(r) {
          if (r.target === this) for (e.call(this, r), t = 0; t < s.length; t++) {
            i.off(s[t], a);
          }
        }var t,
            s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            i = this;if (e) for (t = 0; t < s.length; t++) {
          i.on(s[t], a);
        }return this;
      }, width: function width() {
        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null;
      }, outerWidth: function outerWidth(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
      }, height: function height() {
        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null;
      }, outerHeight: function outerHeight(e) {
        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null;
      }, offset: function offset() {
        if (this.length > 0) {
          var e = this[0],
              a = e.getBoundingClientRect(),
              t = document.body,
              s = e.clientTop || t.clientTop || 0,
              i = e.clientLeft || t.clientLeft || 0,
              r = window.pageYOffset || e.scrollTop,
              n = window.pageXOffset || e.scrollLeft;return { top: a.top + r - s, left: a.left + n - i };
        }return null;
      }, css: function css(e, a) {
        var t;if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (t = 0; t < this.length; t++) {
              for (var s in e) {
                this[t].style[s] = e[s];
              }
            }return this;
          }if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
        }if (2 === arguments.length && "string" == typeof e) {
          for (t = 0; t < this.length; t++) {
            this[t].style[e] = a;
          }return this;
        }return this;
      }, each: function each(e) {
        for (var a = 0; a < this.length; a++) {
          e.call(this[a], a, this[a]);
        }return this;
      }, html: function html(e) {
        if ("undefined" == typeof e) return this[0] ? this[0].innerHTML : void 0;for (var a = 0; a < this.length; a++) {
          this[a].innerHTML = e;
        }return this;
      }, text: function text(e) {
        if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;for (var a = 0; a < this.length; a++) {
          this[a].textContent = e;
        }return this;
      }, is: function is(t) {
        if (!this[0]) return !1;var s, i;if ("string" == typeof t) {
          var r = this[0];if (r === document) return t === document;if (r === window) return t === window;if (r.matches) return r.matches(t);if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);if (r.mozMatchesSelector) return r.mozMatchesSelector(t);if (r.msMatchesSelector) return r.msMatchesSelector(t);for (s = a(t), i = 0; i < s.length; i++) {
            if (s[i] === this[0]) return !0;
          }return !1;
        }if (t === document) return this[0] === document;if (t === window) return this[0] === window;if (t.nodeType || t instanceof e) {
          for (s = t.nodeType ? [t] : t, i = 0; i < s.length; i++) {
            if (s[i] === this[0]) return !0;
          }return !1;
        }return !1;
      }, index: function index() {
        if (this[0]) {
          for (var e = this[0], a = 0; null !== (e = e.previousSibling);) {
            1 === e.nodeType && a++;
          }return a;
        }
      }, eq: function eq(a) {
        if ("undefined" == typeof a) return this;var t,
            s = this.length;return a > s - 1 ? new e([]) : a < 0 ? (t = s + a, new e(t < 0 ? [] : [this[t]])) : new e([this[a]]);
      }, append: function append(a) {
        var t, s;for (t = 0; t < this.length; t++) {
          if ("string" == typeof a) {
            var i = document.createElement("div");for (i.innerHTML = a; i.firstChild;) {
              this[t].appendChild(i.firstChild);
            }
          } else if (a instanceof e) for (s = 0; s < a.length; s++) {
            this[t].appendChild(a[s]);
          } else this[t].appendChild(a);
        }return this;
      }, prepend: function prepend(a) {
        var t, s;for (t = 0; t < this.length; t++) {
          if ("string" == typeof a) {
            var i = document.createElement("div");for (i.innerHTML = a, s = i.childNodes.length - 1; s >= 0; s--) {
              this[t].insertBefore(i.childNodes[s], this[t].childNodes[0]);
            }
          } else if (a instanceof e) for (s = 0; s < a.length; s++) {
            this[t].insertBefore(a[s], this[t].childNodes[0]);
          } else this[t].insertBefore(a, this[t].childNodes[0]);
        }return this;
      }, insertBefore: function insertBefore(e) {
        for (var t = a(e), s = 0; s < this.length; s++) {
          if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0]);else if (t.length > 1) for (var i = 0; i < t.length; i++) {
            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i]);
          }
        }
      }, insertAfter: function insertAfter(e) {
        for (var t = a(e), s = 0; s < this.length; s++) {
          if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0].nextSibling);else if (t.length > 1) for (var i = 0; i < t.length; i++) {
            t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i].nextSibling);
          }
        }
      }, next: function next(t) {
        return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : []);
      }, nextAll: function nextAll(t) {
        var s = [],
            i = this[0];if (!i) return new e([]);for (; i.nextElementSibling;) {
          var r = i.nextElementSibling;t ? a(r).is(t) && s.push(r) : s.push(r), i = r;
        }return new e(s);
      }, prev: function prev(t) {
        return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : []);
      }, prevAll: function prevAll(t) {
        var s = [],
            i = this[0];if (!i) return new e([]);for (; i.previousElementSibling;) {
          var r = i.previousElementSibling;t ? a(r).is(t) && s.push(r) : s.push(r), i = r;
        }return new e(s);
      }, parent: function parent(e) {
        for (var t = [], s = 0; s < this.length; s++) {
          e ? a(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode);
        }return a(a.unique(t));
      }, parents: function parents(e) {
        for (var t = [], s = 0; s < this.length; s++) {
          for (var i = this[s].parentNode; i;) {
            e ? a(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
          }
        }return a(a.unique(t));
      }, find: function find(a) {
        for (var t = [], s = 0; s < this.length; s++) {
          for (var i = this[s].querySelectorAll(a), r = 0; r < i.length; r++) {
            t.push(i[r]);
          }
        }return new e(t);
      }, children: function children(t) {
        for (var s = [], i = 0; i < this.length; i++) {
          for (var r = this[i].childNodes, n = 0; n < r.length; n++) {
            t ? 1 === r[n].nodeType && a(r[n]).is(t) && s.push(r[n]) : 1 === r[n].nodeType && s.push(r[n]);
          }
        }return new e(a.unique(s));
      }, remove: function remove() {
        for (var e = 0; e < this.length; e++) {
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        }return this;
      }, add: function add() {
        var e,
            t,
            s = this;for (e = 0; e < arguments.length; e++) {
          var i = a(arguments[e]);for (t = 0; t < i.length; t++) {
            s[s.length] = i[t], s.length++;
          }
        }return s;
      } }, a.fn = e.prototype, a.unique = function (e) {
      for (var a = [], t = 0; t < e.length; t++) {
        a.indexOf(e[t]) === -1 && a.push(e[t]);
      }return a;
    }, a;
  }(), i = ["jQuery", "Zepto", "Dom7"], r = 0; r < i.length; r++) {
    window[i[r]] && e(window[i[r]]);
  }var n;n = "undefined" == typeof s ? window.Dom7 || window.Zepto || window.jQuery : s, n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function (e) {
    function a(r) {
      if (r.target === this) for (e.call(this, r), t = 0; t < s.length; t++) {
        i.off(s[t], a);
      }
    }var t,
        s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
        i = this;if (e) for (t = 0; t < s.length; t++) {
      i.on(s[t], a);
    }return this;
  }), "transform" in n.fn || (n.fn.transform = function (e) {
    for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e;
    }return this;
  }), "transition" in n.fn || (n.fn.transition = function (e) {
    "string" != typeof e && (e += "ms");for (var a = 0; a < this.length; a++) {
      var t = this[a].style;t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e;
    }return this;
  }), "outerWidth" in n.fn || (n.fn.outerWidth = function (e) {
    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null;
  })), window.Swiper = t;
}(),  true ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function () {
  "use strict";
  return window.Swiper;
});
//# sourceMappingURL=maps/swiper.min.js.map

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports
exports.i(__webpack_require__(79), "");

// module
exports.push([module.i, ".carousel{width:100%}.carousel .swiper-slide img{width:100%;height:100%}.tc-banner{width:100%;padding:.36rem 0 .24rem;background:#fff}.tc-banner .swiper-slide div{padding:.15rem}.tc-banner .swiper-slide img{display:block;width:100%;height:100%}.tc-banner .swiper-slide p{font-size:.26rem;text-align:center;color:#000}", ""]);

// exports


/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ".swiper-container{margin:0 auto;position:relative;overflow:hidden;z-index:1}.swiper-container-no-flexbox .swiper-slide{float:left}.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translateZ(0);transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{-webkit-box-lines:multiple;-moz-box-lines:multiple;-ms-flex-wrap:wrap;flex-wrap:wrap}.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}.swiper-slide{-webkit-flex-shrink:0;-ms-flex:0 0 auto;flex-shrink:0;width:100%;height:100%;position:relative}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-transition-property:-webkit-transform,height;transition-property:transform,height}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-wp8-horizontal{-ms-touch-action:pan-y;touch-action:pan-y}.swiper-wp8-vertical{-ms-touch-action:pan-x;touch-action:pan-x}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:50%;background-repeat:no-repeat}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23007aff'/%3E%3C/svg%3E\");left:10px;right:auto}.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z'/%3E%3C/svg%3E\")}.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23007aff'/%3E%3C/svg%3E\");right:10px;left:auto}.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z'/%3E%3C/svg%3E\")}.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\")}.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s;transition:.3s;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-white .swiper-pagination-bullet{background:#fff}.swiper-pagination-bullet-active{opacity:1;background:#007aff}.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:5px 0;display:block}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 5px}.swiper-pagination-progress{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progress .swiper-pagination-progressbar{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}.swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar{-webkit-transform-origin:right top;transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progress{width:100%;height:4px;left:0;top:0}.swiper-container-vertical>.swiper-pagination-progress{width:4px;height:100%;left:0;top:0}.swiper-pagination-progress.swiper-pagination-white{background:hsla(0,0%,100%,.5)}.swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar{background:#fff}.swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar{background:#000}.swiper-container-3d{-webkit-perspective:1200px;-o-perspective:1200px;perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(right,rgba(0,0,0,.5),transparent);background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,right top,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),transparent);background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.5),transparent);background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.5)),to(transparent));background-image:-webkit-linear-gradient(top,rgba(0,0,0,.5),transparent);background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-coverflow .swiper-wrapper,.swiper-container-flip .swiper-wrapper{-ms-perspective:1200px}.swiper-container-cube,.swiper-container-flip{overflow:visible}.swiper-container-cube .swiper-slide,.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-cube .swiper-slide .swiper-slide,.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active,.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top,.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-slide{visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12) infinite;animation:swiper-preloader-spin 1s steps(12) infinite}.swiper-lazy-preloader:after{display:block;content:\"\";width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%236c6c6c' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Cpath id='a' stroke='%23fff' stroke-width='11' stroke-linecap='round' d='M60 7v20'/%3E%3C/defs%3E%3Cuse xlink:href='%23a' opacity='.27'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(30 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(60 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(90 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(120 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.27' transform='rotate(150 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.37' transform='rotate(180 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.46' transform='rotate(210 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.56' transform='rotate(240 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.66' transform='rotate(270 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.75' transform='rotate(300 60 60)'/%3E%3Cuse xlink:href='%23a' opacity='.85' transform='rotate(330 60 60)'/%3E%3C/svg%3E\")}@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}", ""]);

// exports


/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(82)

/* script */
__vue_exports__ = __webpack_require__(76)

/* template */
var __vue_template__ = __webpack_require__(81)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },

/***/ 81:
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "swiper-container",
    class: _vm.banner.dataType == 3 ? 'tc-banner' : 'carousel',
    style: (_vm.banner.styleObj)
  }, [(_vm.banner.dataType == 1) ? _vm._c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l((_vm.banner.itemData), function(d) {
    return _vm._c('div', {
      staticClass: "swiper-slide"
    }, [_vm._c('img', {
      attrs: {
        "src": d.img
      }
    })])
  })) : _vm._e(), _vm._v(" "), (_vm.banner.dataType == 2) ? _vm._c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l((_vm.banner.itemData), function(d) {
    return _vm._c('div', {
      staticClass: "swiper-slide"
    }, [_vm._c('img', {
      attrs: {
        "src": _vm._f("imgFilter")(d, _vm.banner.filterType)
      }
    })])
  })) : _vm._e(), _vm._v(" "), (_vm.banner.dataType == 3) ? _vm._c('div', {
    staticClass: "swiper-wrapper"
  }, _vm._l((_vm.banner.itemData), function(data) {
    return _vm._c('div', {
      staticClass: "swiper-slide"
    }, [_vm._c('router-link', {
      attrs: {
        "to": "/selectArea"
      }
    }, [_vm._c('div', [_vm._c('img', {
      attrs: {
        "src": data.image
      }
    })]), _vm._v(" "), _vm._c('p', [_vm._v(_vm._s(data.linkedName))])])], 1)
  })) : _vm._e(), _vm._v(" "), _vm._c('div', {
    staticClass: "swiper-pagination"
  })])
},staticRenderFns: []}

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(64)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-62037136!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./banner.vue", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-62037136!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./banner.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

});
//# sourceMappingURL=chunk6.js.map?0e35204e8e5cc7c829af
webpackJsonp([9,27],{

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "#footMenu{width:100%;height:.8rem;position:fixed;overflow:hidden;bottom:0;padding:0 0 .1rem;z-index:3}#footMenu a{display:block;float:left;width:1.5rem;background:#fff;height:1.5rem;border-radius:50%;border:1px solid #a5d7ee;box-sizing:border-box}#footMenu a i{text-align:center;font-size:.4rem;color:#a5d7ee}#footMenu a div{width:100%;height:100%}#footMenu .mall i{position:relative;top:-.06rem}#footMenu a i{display:block;width:.56rem;height:.44rem;margin:.14rem auto 0}#footMenu a p{color:#a5d7ee;font-size:.24rem;text-align:center}#footMenu a i.cur,#footMenu a p.cur{color:#fff}#footMenu a.cur{background:#a5d7ee}.foot-enter-active,.foot-leave-active{transition:all .2s}.foot-enter,.foot-leave-active{margin-bottom:-.89rem}", ""]);

// exports


/***/ },

/***/ 116:
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('transition', {
    attrs: {
      "name": "foot"
    }
  }, [(true) ? _vm._c('div', {
    attrs: {
      "id": "footMenu"
    }
  }, [_vm._c('router-link', {
    staticClass: "index",
    class: [_vm.footMenuActive == 1 ? 'cur' : ''],
    attrs: {
      "to": "/index"
    }
  }, [_vm._c('div', {
    on: {
      "click": function($event) {
        _vm.setFootMenuActive(1)
      }
    }
  }, [_vm._c('i', {
    staticClass: "iconfont icon-cat",
    class: [_vm.footMenuActive == 1 ? 'cur' : '']
  }), _vm._v(" "), _vm._c('p', {
    class: [_vm.footMenuActive == 1 ? 'cur' : '']
  }, [_vm._v("喵zone")])])]), _vm._v(" "), _vm._c('router-link', {
    staticClass: "mall",
    class: [_vm.footMenuActive == 2 ? 'cur' : ''],
    attrs: {
      "to": "/mall"
    }
  }, [_vm._c('div', {
    on: {
      "click": function($event) {
        _vm.setFootMenuActive(2)
      }
    }
  }, [_vm._c('i', {
    staticClass: "iconfont icon-pussy",
    class: [_vm.footMenuActive == 2 ? 'cur' : '']
  }), _vm._v(" "), _vm._c('p', {
    class: [_vm.footMenuActive == 2 ? 'cur' : '']
  }, [_vm._v("喵商城")])])]), _vm._v(" "), _vm._c('router-link', {
    staticClass: "tcshop",
    class: [_vm.footMenuActive == 3 ? 'cur' : ''],
    attrs: {
      "to": "/tcshop"
    }
  }, [_vm._c('div', {
    on: {
      "click": function($event) {
        _vm.setFootMenuActive(3)
      }
    }
  }, [_vm._c('i', {
    staticClass: "iconfont icon-cat1",
    class: [_vm.footMenuActive == 3 ? 'cur' : '']
  }), _vm._v(" "), _vm._c('p', {
    class: [_vm.footMenuActive == 3 ? 'cur' : '']
  }, [_vm._v("喵服务")])])]), _vm._v(" "), _vm._c('router-link', {
    staticClass: "shopcar",
    class: [_vm.footMenuActive == 4 ? 'cur' : ''],
    attrs: {
      "to": "/shopCart"
    }
  }, [_vm._c('div', {
    on: {
      "click": function($event) {
        _vm.setFootMenuActive(4)
      }
    }
  }, [_vm._c('i', {
    staticClass: "iconfont icon-ziyuan",
    class: [_vm.footMenuActive == 4 ? 'cur' : '']
  }), _vm._v(" "), _vm._c('p', {
    class: [_vm.footMenuActive == 4 ? 'cur' : '']
  }, [_vm._v("购物车")])])]), _vm._v(" "), _vm._c('router-link', {
    staticClass: "user",
    class: [_vm.footMenuActive == 5 ? 'cur' : ''],
    attrs: {
      "to": "/user"
    }
  }, [_vm._c('div', {
    on: {
      "click": function($event) {
        _vm.setFootMenuActive(5)
      }
    }
  }, [_vm._c('i', {
    staticClass: "iconfont icon-mood",
    class: [_vm.footMenuActive == 5 ? 'cur' : '']
  }), _vm._v(" "), _vm._c('p', {
    class: [_vm.footMenuActive == 5 ? 'cur' : '']
  }, [_vm._v("铲屎官")])])])], 1) : _vm._e()])
},staticRenderFns: []}

/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(64)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c70e4052!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./footmenu.vue", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-c70e4052!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./footmenu.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_header_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_footmenu_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_footmenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_footmenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_dialog_pop_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_dialog_pop_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__common_dialog_pop_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
				headnav: __WEBPACK_IMPORTED_MODULE_1__common_header_vue___default.a, footMenu: __WEBPACK_IMPORTED_MODULE_2__common_footmenu_vue___default.a, dialogPop: __WEBPACK_IMPORTED_MODULE_3__common_dialog_pop_vue___default.a
};
/* harmony default export */ exports["default"] = {
				data() {
								return {
												pagetitle: "购物车",
												headConfig: {
																title: '购物车'
												},
												allSelect: false,
												rightIcon: {
																txt: '编辑',
																state: 0
												},
												showDialog: false,
												dialog: {
																txt: '修改商品数量',
																cancle: '取消',
																ok: '确定',
																type: 'shopCart',
																proId: 0,
																proNumMin: 1,
																proNumMax: 100,
																proNumCur: 1
												}
								};
				},
				computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
								shopCart: 'getShopCart',
								userInfo: 'userInfo',
								order: 'order'
				}),
				components: components,
				methods: {
								// delInvalidCarts:function(){
								// 	this.$store.dispatch('delInvalidCarts',{
								// 		carIds:this.shopCart.failIds
								// 	});
								// },
								// rIconEvent:function(){
								// 	switch (this.rightIcon.state){
								// 		case 0:
								// 			this.rightIcon.state = 1;
								// 			this.rightIcon.txt = '完成';
								// 			break;
								// 		case 1:
								// 			this.rightIcon.state = 0;
								// 			this.rightIcon.txt = '编辑';
								// 			break;
								// 	}
								// },
								// selectPro:function(sIndex,pIndex){
								// 	let oIndex = {
								// 		si:sIndex,
								// 		pi:pIndex
								// 	}
								// 	this.$store.dispatch('selectPro',oIndex);
								// },
								// selectShop:function(sIndex){
								// 	this.$store.dispatch('selectShop',sIndex);
								// },
								// selectAll:function(){
								// 	this.$store.dispatch('selectAll');
								// },
								// showEditDialog:function(id,min,max,now){
								// 	this.showDialog = true;
								// 	this.dialog.proId = id;
								// 	this.dialog.proNumCur = now;
								// 	this.dialog.proNumMax = max;
								// 	this.dialog.proNumMin = min;
								// },
								// dialogCancle:function(){
								// 	this.showDialog = false;
								// },
								// dialogConfirm:function(num){
								// 	let that = this;
								// 	this.$store.dispatch('editCartNum',{
								// 		cartId:this.dialog.proId,
								// 		count:{count:num}
								// 	}).then(function(){
								// 		that.showDialog = false;
								// 	},function(errmsg){
								// 		that.showDialog = false;
								// 		alert(errmsg);
								// 	});
								// },
								// cartDel:function(){
								// 	let selIds = [];
								// 	let carts = this.shopCart.cartBySellerList||[];
								// 	for(let i=0;i<carts.length;i++){
								// 		let pros = carts[i].shoppingCartDtoList;
								// 		for(let j=0;j<pros.length;j++){
								// 			if(pros[j].buyProSelect){
								// 				selIds.push(pros[j].id);
								// 			}
								// 		}
								// 	}
								// 	this.$store.dispatch('cartDel',{
								// 		carIds:selIds
								// 	});
								// },
								// cartConfirm:function(){
								// 	let carts = this.shopCart.cartBySellerList||[];
								// 	let selected = false;
								// 	let cartSelected = JSON.parse(JSON.stringify(carts));
								// 	for(let i=0;i<cartSelected.length;i++){
								// 		if(!cartSelected[i].buyShopSelect){
								// 			cartSelected.splice(i,1);
								// 			i=i-1;
								// 		}else {
								// 			let proSelected = cartSelected[i].shoppingCartDtoList;
								// 			for(let j=0;j<proSelected.length;j++){
								// 				if(!proSelected[j].buyProSelect){
								// 					proSelected.splice(j,1);
								// 					j=j-1;
								// 				}
								// 			}
								// 		}
								// 	}
								// 	if(cartSelected.length>0){
								// 		let that = this;
								// 		this.$store.dispatch('cartCommit',cartSelected);
								// 		that.$router.push('/orderConfirm');
								// 	}else {
								// 		alert('please choose an item');
								// 	}
								// }
				},
				created() {
								// if(this.userInfo.isLogin){
								//     this.$store.dispatch('getShopCart');
								// }else {
								// 	console.log(this.userInfo.isLogin);
								// }
				}
};

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ".shopCart{padding-bottom:1.1rem}.shopCart .shopList{margin-bottom:.18rem;border-bottom:1px solid #ddd}.shopCart .pname{height:.72rem;line-height:.72rem;background-color:#fff;padding:0 .18rem}.shopCart .pname span{font-size:.25rem;padding-left:.18rem}.shopCart .pro-list{width:100%;overflow:hidden}.shopCart .dis{margin-top:.18rem;border-top:1px solid #ddd}.shopCart .disIco{float:left;margin-top:.6rem;border-radius:3px;padding:0 2px;font-size:.24rem;margin-left:-6px;margin-right:3px}.shopCart .disDel,.shopCart .disIco{display:block;color:#fff;background:#999}.shopCart .disDel{width:1.8rem;height:.54rem;text-align:center;line-height:.54rem;border-radius:.06rem;margin:.18rem auto}.shopCart .pro-list li{padding:.18rem;position:relative;margin-top:.03rem;background-color:#f7f7f7;height:1.6rem}.shopCart .pro-list li:first-child{margin-top:0}.shopCart .pro-list li img{display:block;width:1.6rem;height:1.6rem;float:left}.shopCart .pro-list p{width:4.8rem;float:left;margin-left:.18rem;font-size:.25rem;text-indent:.06rem;padding:.01rem 0}.shopCart .pro-list .proName{overflow:hidden;font-size:.25rem;line-height:1.5;color:#333;height:.72rem;margin-bottom:.48rem}.shopCart .pro-list>i{font-style:normal;float:right;width:.72rem;height:.36rem;color:#999;font-size:.25rem}.shopCart .pro-list .subName{color:#999;font-size:.25rem;height:.6rem;line-height:1.2;overflow:hidden}.shopCart .pro-list .proPrice{color:#ff2772;font-size:.25rem;height:.24rem;line-height:.24rem;width:3.6rem;float:left}.shopCart .pro-list .proPrice .quan{margin-left:.18rem;background-color:#ff7e42;color:#fff;padding:.03rem .09rem;border-radius:.061rem;font-size:.18rem}.shopCart .pro-list .proPrice .sold{float:right;font-size:.25rem;color:#999}.shopCart .pro-list .num{width:.9rem;float:right;text-align:right}.shopCart .pro-list .more{height:.72rem;text-align:center;font-size:.25rem;color:#999}.shopCart .check-btn{width:.32rem;height:1.6rem;padding-right:.18rem;float:left}.shopCart .icon-round,.shopCart .icon-roundcheckfill{font-size:.32rem}.shopCart .check-btn>i{line-height:1.6rem}.shopCart .icon-roundcheckfill{color:#ff2772!important}.shopCart .tot-con{width:100%;height:1rem;line-height:1rem;position:fixed;bottom:0;float:left;background-color:#fff;font-size:.25rem;color:#333}.shopCart .tot-con .checkall i{padding:0 .18rem}.shopCart .tot-con .tot{float:right;height:.84rem;padding:.12rem}.shopCart .tot-con .tot p{height:.42rem;line-height:.42rem;text-align:right;padding-right:.18rem}.shopCart .tot-con .tot .yunf{color:#666}.shopCart .tot-con .tot span{color:#ff2772}.shopCart .tot-con .cartSub,.tot-con .cartDel{float:right;width:2rem;background-color:#ff2772;color:#fff;text-align:center;font-size:.3rem}.shopCart .edit p{padding-top:.15rem}.shopCart .edit .limt{color:#ff833e}.shopCart .edit .sx{color:#999}.shopCart .fr{width:4.8rem;height:.54rem;border:1px solid #ddd}.shopCart .fr a{width:.6rem}.shopCart .fr a,.shopCart .fr input{display:block;height:.54rem;float:left;text-align:center;line-height:.54rem;background:#eee}.shopCart .fr input{width:3.6rem;border:none;color:#000;font-size:.32rem}.shopCart .icon-add{font-size:.18rem;color:#ff2772}.shopCart .popbg{position:fixed;width:100%;height:100%;z-index:4;background:rgba(0,0,0,.5);left:0;top:0;display:none}.shopCart .editnum{width:4.9rem;height:2.73rem;background-color:#f9f9f9;border-radius:.18rem;position:fixed;left:1.27rem;top:3.6rem;z-index:10;display:none}.shopCart .editnum p{height:.9rem;line-height:.9rem;text-align:center;font-size:.3rem}.shopCart .editnum .fr{width:3.6rem;height:.55rem;border:1px solid #ddd;margin-right:.66rem}.shopCart .editnum .fr a{width:.6rem}.shopCart .editnum .fr a,.shopCart .editnum .fr input{display:block;height:.54rem;float:left;text-align:center;line-height:.54rem;background:#eee}.shopCart .editnum .fr input{width:2.4rem;border:none;color:#000;font-size:.32rem}.shopCart .editnum .btn{position:absolute;height:.82rem;line-height:.82rem;bottom:0;border-top:1px solid #ddd;width:100%}.shopCart .editnum .btn a{display:block;width:2.4rem;text-align:center;float:left;font-size:.3rem}.shopCart .editnum .btn .no{border-right:1px solid #ddd;color:#999}.shopCart .editnum .btn .ok{color:#ff2772}.shopCart .nopros img{width:3.12rem;height:3.9rem;display:block;margin:.9rem auto 0}.shopCart .nopros p{text-align:center;padding:.3rem 0 .72rem;font-size:.25rem}.shopCart .nopros a{position:fixed;display:block;width:2.16rem;height:.72rem;background-color:#ff2772;text-align:center;line-height:.72rem;color:#fff;border-radius:.09rem;margin-left:2.64rem;font-size:.32rem}.shopCart .numberCount{width:3.6rem;background:#eee;border:1px solid #ddd;color:#000}.shopCart .numberCount a{width:.6rem;font-size:.3rem!important}.shopCart .numberCount a,.shopCart .numberCount input[type=number]{display:block;height:.6rem;float:left;text-align:center;line-height:.6rem;background:none}.shopCart .numberCount input[type=number]{width:2.4rem;font-size:.3rem}", ""]);

// exports


/***/ },

/***/ 254:
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "shopCart"
  }, [_vm._c('headnav', {
    attrs: {
      "headConfig": _vm.headConfig
    }
  })], 1)
},staticRenderFns: []}

/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(64)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-28215492!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shop-cart.vue", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-28215492!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./shop-cart.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(121)

/* script */
__vue_exports__ = __webpack_require__(98)

/* template */
var __vue_template__ = __webpack_require__(116)
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

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(296)

/* script */
__vue_exports__ = __webpack_require__(148)

/* template */
var __vue_template__ = __webpack_require__(254)
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

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(96)

/* script */
__vue_exports__ = __webpack_require__(86)

/* template */
var __vue_template__ = __webpack_require__(93)
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

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__num_count_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__num_count_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__num_count_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    numCount: __WEBPACK_IMPORTED_MODULE_1__num_count_vue___default.a
};
/* harmony default export */ exports["default"] = {
    data() {
        return {
            number: {}
        };
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({}),
    components: components,
    methods: {
        cancle: function () {
            this.$emit('dialogCancle');
        },
        ok: function () {
            this.$emit('dialogConfirm', this.number.now);
        },
        numChange: function (num) {
            this.number.now = num;
        }
    },
    props: ['dialog'],
    created() {
        if (this.dialog.autoOff) {
            let time = this.dialog.autoOffTime || 1500;
            let This = this;
            setTimeout(function () {
                This.$emit('off');
            }, time);
        }
        this.number.now = this.dialog.proNumCur;
        this.number.max = this.dialog.proNumMax;
        this.number.min = this.dialog.proNumMin;
    }
};

/***/ },

/***/ 86:
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



/* harmony default export */ exports["default"] = {
    props: ['number'],
    data() {
        return {
            minNum: -Infinity,
            initNum: 1,
            maxNum: Infinity
        };
    },
    computed: {},
    methods: {
        addNum: function () {
            if (this.initNum < this.maxNum) {
                this.initNum++;
                if (this.number.options) {
                    this.$emit('numChange', [this.initNum, this.number.options]);
                } else {
                    this.$emit('numChange', this.initNum);
                }
            }
        },
        minusNum: function () {
            if (this.initNum > this.minNum) {
                this.initNum--;
                if (this.number.options) {
                    this.$emit('numChange', [this.initNum, this.number.options]);
                } else {
                    this.$emit('numChange', this.initNum);
                }
            }
        }
    },
    created() {
        this.minNum = this.number.min || this.minNum;
        this.initNum = this.number.now || this.initNum;
        this.maxNum = this.number.max || this.maxNum;
    }
};

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ".dialog-pop{position:fixed;background:#fff;border:1px solid #ddd;border-radius:.18rem;z-index:1001;left:50%;top:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);overflow:hidden}.dialog-pop .countWrap{padding:0 .6rem}.dialog-pop-con{padding:.18rem .18rem .4rem}.dialog-txt{font-size:.3rem;text-align:center;line-height:1.5;margin-bottom:.18rem}.dialog-btn{background:#fff;border-top:1px solid #ddd}.dialog-btn a{display:block;width:50%;height:.8rem;text-align:center;line-height:.8rem;float:left;position:relative;font-size:.3rem}.dialog-confirm{color:#ff2772}.dialog-btn a s{display:block;width:1px;height:100%;background:#ddd;position:absolute;right:0;top:0}.dialog-mask{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background:rgba(0,0,0,.4)}", ""]);

// exports


/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(95)

/* script */
__vue_exports__ = __webpack_require__(85)

/* template */
var __vue_template__ = __webpack_require__(92)
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

/***/ 92:
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', [_vm._c('div', {
    staticClass: "dialog-pop"
  }, [_vm._c('div', {
    staticClass: "dialog-pop-con"
  }, [(_vm.dialog.icon) ? _vm._c('div', {
    staticClass: "dialog-icon"
  }, [_vm._c('i', {
    class: 'iconfont ' + _vm.dialog.icon
  })]) : _vm._e(), _vm._v(" "), (_vm.dialog.txt) ? _vm._c('div', {
    staticClass: "dialog-txt"
  }, [_vm._v("\n                " + _vm._s(_vm.dialog.txt) + "\n            ")]) : _vm._e(), _vm._v(" "), (_vm.dialog.numCount) ? _vm._c('div', {
    staticClass: "countWrap"
  }, [_vm._c('numCount', {
    attrs: {
      "number": _vm.number
    },
    on: {
      "numChange": _vm.numChange
    }
  })], 1) : _vm._e()]), _vm._v(" "), (_vm.dialog.btn) ? _vm._c('div', {
    staticClass: "dialog-btn clearfix"
  }, [_vm._c('a', {
    staticClass: "dialog-cancle",
    on: {
      "click": function($event) {
        _vm.cancle()
      }
    }
  }, [_vm._v(_vm._s(_vm.dialog.cancle)), _vm._c('s')]), _vm._v(" "), _vm._c('a', {
    staticClass: "dialog-confirm",
    on: {
      "click": function($event) {
        _vm.ok()
      }
    }
  }, [_vm._v(_vm._s(_vm.dialog.ok))])]) : _vm._e()]), _vm._v(" "), _vm._c('div', {
    staticClass: "dialog-mask"
  })])
},staticRenderFns: []}

/***/ },

/***/ 93:
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "numberCount clearfix"
  }, [_vm._c('a', {
    staticClass: "iconfont icon-move",
    on: {
      "click": function($event) {
        _vm.minusNum()
      }
    }
  }), _vm._v(" "), _vm._c('input', {
    attrs: {
      "type": "number",
      "readonly": "readonly"
    },
    domProps: {
      "value": _vm.initNum
    }
  }), _vm._v(" "), _vm._c('a', {
    staticClass: "iconfont icon-add",
    on: {
      "click": function($event) {
        _vm.addNum()
      }
    }
  })])
},staticRenderFns: []}

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(64)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0afc9956!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dialog-pop.vue", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0afc9956!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./dialog-pop.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(64)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-58f03fee!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./num-count.vue", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-58f03fee!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./num-count.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 98:
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


/* harmony default export */ exports["default"] = {
    data() {
        return {
            iscur: null,
            show: true
        };
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        footMenuActive: 'footMenuActive'
    }),
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'changeiscur'
    },
    methods: {
        setFootMenuActive: function (num) {
            this.$store.commit('Set_ft_active', num);
        },
        changeiscur: function () {
            let path = this.$route.path;
            switch (path) {
                case '/index':
                    this.$store.commit('Set_ft_active', 1);
                    break;
                case '/mall':
                    this.$store.commit('Set_ft_active', 2);
                    break;
                case '/tcshop':
                    this.$store.commit('Set_ft_active', 3);
                    break;
                case '/shopCart':
                    this.$store.commit('Set_ft_active', 4);
                    break;
                case '/user':
                    this.$store.commit('Set_ft_active', 5);
                    break;
                default:
                    break;
            }
        }
    },
    created() {
        let path = this.$route.path;
        switch (path) {
            case '/index':
                this.$store.commit('Set_ft_active', 1);
                break;
            case '/mall':
                this.$store.commit('Set_ft_active', 2);
                break;
            case '/tcshop':
                this.$store.commit('Set_ft_active', 3);
                break;
            case '/shopCart':
                this.$store.commit('Set_ft_active', 4);
                break;
            case '/user':
                this.$store.commit('Set_ft_active', 5);
                break;
            default:
                break;
        }
    }
};

/***/ }

});
//# sourceMappingURL=9.build.js.map
webpackJsonp([13],{

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_header_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__common_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_dialog_pop_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_dialog_pop_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__common_dialog_pop_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    headnav: __WEBPACK_IMPORTED_MODULE_1__common_header_vue___default.a, dialogPop: __WEBPACK_IMPORTED_MODULE_2__common_dialog_pop_vue___default.a
};
/* harmony default export */ exports["default"] = {
    data() {
        return {
            pagetitle: "修改昵称",
            nickName: "",
            dialogOnOff: false,
            dialogConfig: {
                autoOff: true,
                txt: '请不要输入特殊字符'
            }
        };
    },
    computed: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])({
        userInfo: 'userInfo'
    }),
    components: components,
    methods: {
        changeName: function () {
            let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
            let This = this;
            if (!pattern.test(this.nickName)) {
                if (this.nickName.length < 3 || this.nickName.length > 12) {
                    this.dialogConfig.txt = '请输入3~12个字符组成的昵称';
                    this.dialogOnOff = true;
                } else {
                    this.$store.dispatch('changeName', { nickName: this.nickName }).then(function () {
                        This.dialogConfig.txt = '修改成功';
                        This.dialogOnOff = true;

                        setTimeout(function () {
                            This.$router.push("/userInfo");
                        }, 1500);
                    }, function (res) {
                        This.dialogConfig.txt = res;
                        This.dialogOnOff = true;
                    });
                }
            } else {
                this.dialogOnOff = true;
            }
        },
        offDialog: function () {
            this.dialogOnOff = false;
        }
    },
    created() {
        this.nickName = this.userInfo.nickName;
    }
};

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(63)();
// imports


// module
exports.push([module.i, ".userBox{background:#fff;padding:0 .18rem}.form-input,.subBtn{width:100%;overflow:hidden}.form-input input{display:block;width:90%;background:#fff;float:left;height:.9rem;line-height:.9rem;font-size:.3rem}.form-input .icon-roundclosefill{float:right;line-height:.9rem;font-size:.4rem;color:#999}.tip{color:#999;margin-top:.18rem}.sub,.tip{padding:0 .18rem}.sub{margin-top:.18rem}.subBtn{display:block;height:.9rem;line-height:.9rem;color:#fff;background:#ff2772;border-radius:.06rem;text-align:center;font-size:.4rem}", ""]);

// exports


/***/ },

/***/ 253:
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;
  return _vm._c('div', {
    staticClass: "change-name-box"
  }, [_vm._c('headnav', {
    attrs: {
      "title": _vm.pagetitle
    }
  }), _vm._v(" "), _vm._c('div', {
    staticClass: "userBox"
  }, [_vm._c('div', {
    staticClass: "form-row changeNick"
  }, [_vm._c('div', {
    staticClass: "form-input"
  }, [_vm._c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.nickName),
      expression: "nickName"
    }],
    attrs: {
      "id": "changeNick",
      "type": "text",
      "maxlength": "12"
    },
    domProps: {
      "value": (_vm.nickName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.nickName = $event.target.value
      }
    }
  }), _vm._v(" "), _vm._c('i', {
    staticClass: "iconfont icon-roundclosefill",
    on: {
      "click": function($event) {
        _vm.nickName = ''
      }
    }
  })])])]), _vm._v(" "), _vm._c('div', {
    staticClass: "tip"
  }, [_vm._v("昵称由3~12个字符组成(禁止输入特殊字符)")]), _vm._v(" "), _vm._c('div', {
    staticClass: "sub"
  }, [_vm._c('a', {
    staticClass: "subBtn",
    on: {
      "click": _vm.changeName
    }
  }, [_vm._v("确定")])]), _vm._v(" "), (_vm.dialogOnOff) ? _vm._c('dialog-pop', {
    attrs: {
      "dialog": _vm.dialogConfig
    },
    on: {
      "off": _vm.offDialog
    }
  }) : _vm._e(), _vm._v("\n    " + _vm._s(_vm.userInfo) + "\n")], 1)
},staticRenderFns: []}

/***/ },

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(170);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(64)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e963d4e!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./change-name.vue", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1e963d4e!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./change-name.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(295)

/* script */
__vue_exports__ = __webpack_require__(149)

/* template */
var __vue_template__ = __webpack_require__(253)
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

/***/ }

});
//# sourceMappingURL=13.build.js.map
webpackJsonp([27],{

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
//# sourceMappingURL=27.build.js.map
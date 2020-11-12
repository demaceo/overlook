/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html {\n  height: 100%;\n  width: 100%;\n  font-family: sans-serif; }\n\n.column-alignment {\n  display: flex;\n  flex-direction: column; }\n\n.row-alignment {\n  display: flex;\n  flex-direction: row; }\n\nbody {\n  background-color: #D7DFE0;\n  height: 100vh;\n  width: 100vw; }\n\nheader {\n  justify-content: center;\n  align-content: baseline;\n  background-color: teal;\n  width: 100vw;\n  height: 30vh;\n  align-items: center;\n  padding: 40px 0px; }\n\n.hotel-title {\n  background-color: white;\n  padding: 20px; }\n\nh1 {\n  align-self: center;\n  font-size: 5em;\n  margin-top: 20px;\n  padding: 10px;\n  background-color: white;\n  font-style: italic; }\n\nnav {\n  background-color: orange;\n  justify-content: space-around;\n  align-content: baseline;\n  font-size: 1.3em;\n  position: sticky;\n  top: 0;\n  box-shadow: 0 6px 12px 0 #0000003d;\n  z-index: 10px;\n  height: 2em;\n  padding-top: 25px; }\n\n.nav-links {\n  align-self: baseline; }\n\nmain {\n  justify-content: space-between; }\n\narticle {\n  padding: 10px;\n  font-size: 2em;\n  width: 10vw; }\n\nh3 {\n  align-self: center;\n  font-size: 5em;\n  color: white;\n  padding: 10px;\n  background-color: teal;\n  font-style: italic; }\n\n.home-main-content {\n  padding-right: 2vw;\n  width: 70vw; }\n\n.home-main-content > h1 {\n  font-size: 3em;\n  text-align: center; }\n\n.main-content {\n  overflow: hidden;\n  justify-content: space-around;\n  margin-bottom: 5vh;\n  margin-left: 2vw;\n  height: 100%;\n  padding: 5vh; }\n\n.main-content-block {\n  padding-left: 1vw;\n  border-radius: 5%;\n  min-width: min-content;\n  box-shadow: 0 6px 12px 0 #0000003d;\n  background-color: white;\n  max-width: 23vw;\n  padding: 50px; }\n\n.main-content-title {\n  border-radius: 6px;\n  font-size: 2.5em;\n  padding: 0 1vw;\n  font-weight: bolder;\n  transition: background-color 0.2s ease-in, color ease-in 0.2s; }\n\n.main-content--title:hover {\n  background-color: grey;\n  color: black; }\n\n.main-content-description {\n  font-size: 1.1em;\n  font-weight: 100;\n  line-height: 2em;\n  border-radius: 8px;\n  text-align: justify;\n  padding: 0.5vw 1.2vw;\n  height: inherit;\n  width: 50vw;\n  transition: background-color 0.2s ease-in, color ease-in 0.2s; }\n\n.main-content-description:hover {\n  background-color: orange;\n  color: teal;\n  font-weight: 300;\n  border-radius: 8px; }\n\n.content-title-block {\n  background-color: black;\n  color: white;\n  padding: 2vh 0;\n  margin: 0;\n  font-weight: lighter; }\n\n.booking-section {\n  margin-top: 150px;\n  margin-right: 80px; }\n\n.booking-form {\n  border-radius: 15%;\n  border: solid 10px;\n  border-color: teal;\n  background-color: white;\n  justify-content: space-around;\n  align-items: center;\n  max-height: 40vh;\n  max-width: 20vw;\n  padding: 0 2em 3em; }\n\nh4 {\n  align-self: center;\n  font-size: 1.8em;\n  color: black;\n  padding: 15px;\n  background-color: #D7DFE0;\n  font-style: italic;\n  margin-bottom: 15px; }\n\nlabel {\n  display: block;\n  font: 0.5em sans-serif;\n  padding-top: 10px; }\n\ninput,\nlabel {\n  margin: 0.4rem 0; }\n\n.check-availability-button {\n  padding: 12px;\n  border-width: medium; }\n\n.user-login-section {\n  display: flex;\n  background-color: orange;\n  flex-direction: row;\n  justify-content: center;\n  padding: 80px;\n  width: 100%; }\n\n.user-login-block {\n  background-color: white;\n  border: 10px solid;\n  padding: 100px 100px 40px;\n  justify-content: space-around; }\n\n.user-input {\n  font-size: 1em;\n  font-family: \"Gill Sans\", sans-serif; }\n\ninput {\n  height: 3vh; }\n\n.login-button {\n  margin-left: 150px;\n  margin-top: 50px;\n  padding: 10px;\n  border-width: medium; }\n\n.manager-block-info {\n  margin-top: 5em; }\n\n.manager-data-block {\n  width: 80vw;\n  height: 80vh;\n  overflow: scroll;\n  align-items: center;\n  background-color: white;\n  padding: 2vw;\n  border: solid 5px; }\n\n.manager-data-title {\n  font-size: 2em;\n  font-weight: bold; }\n\n.manager-data {\n  justify-content: space-around;\n  width: 100%;\n  flex-wrap: wrap; }\n\n.data-container {\n  min-width: 12vw;\n  width: auto;\n  height: auto;\n  border-radius: 10%;\n  margin-top: 2em;\n  min-height: 13vh;\n  padding: 10px;\n  border: 1.5px solid;\n  justify-content: space-around;\n  align-items: center;\n  transition: all 0.2s ease-in-out; }\n\n.data-container:hover {\n  cursor: none;\n  transform: scale(1.025);\n  box-shadow: 2px 3px 20px 1px grey;\n  z-index: 0; }\n\n.manager-data {\n  font-size: 0.6em;\n  font-family: \"Gill Sans\", sans-serif; }\n\n#room-number {\n  font-size: 0.8em; }\n\n#room-cost {\n  font-size: 0.7em; }\n\n.hotel-stats-section {\n  margin-top: 1em;\n  max-margin-left: 2em;\n  align-content: center; }\n\n.hotel-stats-block {\n  justify-content: space-between;\n  padding: 1em;\n  max-width: 20vw;\n  height: 40vh;\n  min-height: 35vh; }\n\n.data-title {\n  font-size: 1em; }\n\n.hotel-stats {\n  font-size: 0.9em;\n  border: 3px solid;\n  background-color: white;\n  justify-content: space-around; }\n\n.color-key {\n  background-color: white;\n  padding: 1em;\n  border-radius: 15%;\n  border: 3px solid;\n  max-width: 8vw; }\n\n.key-label {\n  font-size: 1.7em;\n  justify-content: space-between;\n  width: 100%;\n  align-self: baseline; }\n\n#green {\n  color: green; }\n\n#red {\n  color: red; }\n\n.manager-nav-bar {\n  justify-content: space-around; }\n\n.nav-search-bar {\n  display: flex;\n  margin-right: 40px; }\n\n.search-input {\n  background-repeat: no-repeat;\n  background-position-x: 98%;\n  stroke-width: 1em;\n  width: 180px;\n  border-radius: 4px;\n  padding-left: 1em;\n  background-size: 1.6em;\n  background-position-y: center;\n  top: 0;\n  transition: width .9s;\n  font-size: .8em; }\n\n.search-input:hover {\n  width: 35vw; }\n\n.customer-history-block {\n  justify-content: space-around;\n  width: 100%;\n  flex-wrap: wrap; }\n\n.user-history {\n  min-width: 12vw;\n  width: auto;\n  height: auto;\n  border-radius: 10%;\n  margin-top: 2em;\n  min-height: 13vh;\n  padding: 10px;\n  border: 1.5px solid;\n  justify-content: space-around;\n  align-items: center;\n  transition: all 0.2s ease-in-out; }\n\n.hidden {\n  display: none; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/classes/bookingRepo.js":
/*!************************************!*\
  !*** ./src/classes/bookingRepo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Booking; });
class Booking {
  constructor(bookingData) {
    this.id = bookingData.id;
    this.userID = bookingData.userID;
    this.date = bookingData.date;
    this.roomNumber = bookingData.roomNumber;
    this.roomServiceCharges = bookingData.roomServiceCharges || [];
  }
}


/***/ }),

/***/ "./src/classes/domObject.js":
/*!**********************************!*\
  !*** ./src/classes/domObject.js ***!
  \**********************************/
/*! exports provided: userLoginSection, logInButton, userNameInput, passwordInput, hotelMotto, navBar, logInNavLink, logOutNavLink, mainSection, bookingSection, checkInDate, checkOutDate, checkAvailabilityBttn, managerMotto, managerNavBar, managerView, managerDataBlock, managerDataTitle, managerData, roomStatusesNavLink, hotelStatsSection, hotelStatsContainer, dataTitle, occupancy, revenue, searchInput, manageBookingsNavLink, manageBookingsSection, manageBookingsForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLoginSection", function() { return userLoginSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logInButton", function() { return logInButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userNameInput", function() { return userNameInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordInput", function() { return passwordInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotelMotto", function() { return hotelMotto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navBar", function() { return navBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logInNavLink", function() { return logInNavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutNavLink", function() { return logOutNavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainSection", function() { return mainSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingSection", function() { return bookingSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInDate", function() { return checkInDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkOutDate", function() { return checkOutDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAvailabilityBttn", function() { return checkAvailabilityBttn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerMotto", function() { return managerMotto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerNavBar", function() { return managerNavBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerView", function() { return managerView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerDataBlock", function() { return managerDataBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerDataTitle", function() { return managerDataTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerData", function() { return managerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomStatusesNavLink", function() { return roomStatusesNavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotelStatsSection", function() { return hotelStatsSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hotelStatsContainer", function() { return hotelStatsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataTitle", function() { return dataTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "occupancy", function() { return occupancy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revenue", function() { return revenue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchInput", function() { return searchInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageBookingsNavLink", function() { return manageBookingsNavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageBookingsSection", function() { return manageBookingsSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manageBookingsForm", function() { return manageBookingsForm; });
const userLoginSection = document.querySelector('.user-login-section');
const logInButton = document.querySelector('.login-button');
const userNameInput = document.querySelector('#user-name');
const passwordInput = document.querySelector('#password');
const hotelMotto = document.querySelector('.motto');
const navBar = document.querySelector('.nav-bar');
const logInNavLink = document.querySelector('.log-in-link');
const logOutNavLink = document.querySelector('#log-out-nav');
const mainSection = document.querySelector('.main-section');
const bookingSection = document.querySelector('.booking-section');
const checkInDate = document.querySelector('input[id="check-in"]');
const checkOutDate = document.querySelector('input[id="check-out"]');
const checkAvailabilityBttn = document.querySelector('.check-availability-button');
const managerMotto = document.querySelector('.manager-motto');
const managerNavBar = document.querySelector('.manager-nav-bar');
const managerView = document.querySelector('.manager-view');
const managerDataBlock = document.querySelector('.manager-data-block');
const managerDataTitle = document.querySelector('.manager-data-title');
const managerData = document.querySelector('.manager-data');
const roomStatusesNavLink = document.querySelector('#room-statuses-nav');
const hotelStatsSection = document.querySelector('.hotel-stats-section');
const hotelStatsContainer = document.querySelector('.hotel-stats-block');
const dataTitle = document.querySelector('.data-title');
const occupancy = document.querySelector('#occupancy');
const revenue = document.querySelector('#revenue');
//export const customerHistorySection = document.querySelector('.customer-history-section');
//export const customerHistoryBlock = document.querySelector('.customer-history-block');
const searchInput = document.querySelector('.search-input');
const manageBookingsNavLink = document.querySelector('#manage-bookings-nav');
const manageBookingsSection = document.querySelector('.manage-bookings-section');
const manageBookingsForm = document.querySelector('.manage-bookings-form');


/***/ }),

/***/ "./src/classes/fetchData.js":
/*!**********************************!*\
  !*** ./src/classes/fetchData.js ***!
  \**********************************/
/*! exports provided: fetchData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchData", function() { return fetchData; });
const fetchData = {

  getUserData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .then(data => data.users)
      .catch(error => console.log(error, "Encountered an error with getUserData"));
  },
  getRoomData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .then(data => data.rooms)
      .catch(error => console.log(error, "Encountered an error with getRoomData"));
  },

  getBookingData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
      .then(response => response.json())
      .then(data => data.bookings)
      .catch(error => console.log(error, "Encountered an error with getBookingData"));
  },

  createBooking(booking) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking),
      })
      .then(response => response.json())
      .then(response => console.log("Booking successfully CREATED"))
      .catch(error => console.log(error, "Encountered an error with createBooking"))
  },

  deleteBooking(booking) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(booking),
      })
      .then(response => response.json())
      .then(response => console.log("Booking successfully DELETED"))
      .catch(error => console.log(error, "Encountered an error with deleteBooking"))
  }
};


/***/ }),

/***/ "./src/classes/managerRepo.js":
/*!************************************!*\
  !*** ./src/classes/managerRepo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/* harmony import */ var _bookingRepo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookingRepo */ "./src/classes/bookingRepo.js");
/* harmony import */ var _userRepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userRepo */ "./src/classes/userRepo.js");
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchData */ "./src/classes/fetchData.js");




class Manager extends _userRepo__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(userData) {
    super(userData)
  }
  totalAvailableRooms(bookingData, roomData, date) {
    return this.viewAvailableRooms(bookingData, roomData, date).length
  }

  totalRevenue(bookingData, roomData, date) {
    return this.viewUnavailableRooms(bookingData, roomData, date).reduce((totalRevenue, room) => {
      totalRevenue += room.costPerNight;
      return totalRevenue
      }, 0).toFixed(2)
  }

  totalPercentOccupied(bookingData, roomData, date) {
    return (this.viewUnavailableRooms(bookingData, roomData, date).length /
      roomData.length).toFixed(2)
  }

  viewCustomer(userData, name) {
    return new _userRepo__WEBPACK_IMPORTED_MODULE_1__["default"](userData.find(user => user.name === name))
  }

  viewCustomerInfo(bookingData, roomData, userData, name) {
    let customer = this.viewCustomer(userData, name);
    let bookings = customer.viewMyBookings(bookingData);
    let total = customer.viewMyTotal(bookingData, roomData);
    return {
      id: customer.id,
      name: customer.name,
      bookingHistory: bookings,
      totalSpent: total
    }
  }

  addCustomerBooking(userData, name, date, roomNumber) {
    let customer = this.viewCustomer(userData, name);
    return customer.bookMyRoom(date, roomNumber);
  }

  deleteCustomerBooking(bookingData, bookingID) {
    let matchedBooking = bookingData.find(booking => booking.id === bookingID);
    if (matchedBooking.date > this.getDate()) {
      let booking = {
        "id": bookingID
      }
      _fetchData__WEBPACK_IMPORTED_MODULE_2__["fetchData"].deleteBooking(booking);
    } else {
      return `Cannot delete bookings on or before today\'s date: ${this.date}`
    }
  }

  getDate() {
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    let date = newDate.getDate();
    if (date.toString().length < 2) {
      date = '0' + date
    }
    if (month.toString().length < 2) {
      month = '0' + month
    }
    return `${newDate.getFullYear()}/${month}/${date}`
  }
}


/***/ }),

/***/ "./src/classes/userRepo.js":
/*!*********************************!*\
  !*** ./src/classes/userRepo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _bookingRepo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookingRepo */ "./src/classes/bookingRepo.js");
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchData */ "./src/classes/fetchData.js");



class User {
  constructor(userData = {}) {
    this.id = userData.id || 666;
    this.name = userData.name || 'Manager';
  }

  bookMyRoom(date, roomNumber) {
    let booking = {
      "userID": this.id,
      "date": date,
      "roomNumber": roomNumber
    };
    _fetchData__WEBPACK_IMPORTED_MODULE_1__["fetchData"].createBooking(booking)
  }

  viewMyBookings(bookingData) {
    let myBookings = bookingData.filter(booking => {
      return booking.userID === this.id
    });
    return myBookings.sort((a, b) => {
      return a.date < b.date ? -1 : 1;
    })
  }

  viewMyTotal(bookingData, roomData) {
    let grandTotal = this.viewMyBookings(bookingData).reduce((myGrandTotal, myBooking) => {
      let matchedRoom = roomData.find(room => room.number === myBooking.roomNumber);
      myGrandTotal += matchedRoom.costPerNight;
      return myGrandTotal;
    }, 0).toFixed(2);
    return Number(grandTotal)
  }

  viewUnavailableRooms(bookingData, roomData, date) {
    return bookingData.reduce((bookedRooms, booking) => {
      if (booking.date === date) {
        bookedRooms.push(roomData.find(room => room.number === booking.roomNumber))
      }
      return bookedRooms
    }, []);
  }

  viewAvailableRooms(bookingData, roomData, date) {
    let unavailableRooms = this.viewUnavailableRooms(bookingData, roomData, date);
    return roomData.filter(room => !unavailableRooms.includes(room))
  }

  viewAvailableRoomsByType(bookingData, roomData, date, roomType) {
    let availableRooms = this.viewAvailableRooms(bookingData, roomData, date);
    return availableRooms.filter(room => room.roomType === roomType)
  }
}


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_domObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/domObject */ "./src/classes/domObject.js");
/* harmony import */ var _classes_fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/fetchData */ "./src/classes/fetchData.js");
/* harmony import */ var _classes_userRepo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/userRepo */ "./src/classes/userRepo.js");
/* harmony import */ var _classes_managerRepo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/managerRepo */ "./src/classes/managerRepo.js");
/* harmony import */ var _classes_bookingRepo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/bookingRepo */ "./src/classes/bookingRepo.js");







// import './images/audio.m4a';
// audio.play();

let currentUser;
let clickedUser;
let guest;
let manager = new _classes_managerRepo__WEBPACK_IMPORTED_MODULE_4__["default"]();
let booking;
let userData = [];
let bookingData = [];
let roomData = [];
let today = new Date().toLocaleDateString();

let userNameBlock = document.querySelector('.user-history');


// --- EVENT LISTENERS: ---
//window.addEventListener("load", displayManagerPage);
_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["logInNavLink"].addEventListener('click', displayLogIn);
_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["logOutNavLink"].addEventListener('click', displayLogIn);
_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["logInButton"].addEventListener('click', determineUserInput);
_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["checkAvailabilityBttn"].addEventListener('click', checkAvailableRooms);
_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].addEventListener('click', registerClickEvent);
_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["roomStatusesNavLink"].addEventListener('click', displayRoomStatuses);
_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["manageBookingsNavLink"].addEventListener('click', displayManageBookings);
_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["searchInput"].addEventListener('keyup', searchInputHandler);



// -*-~-*-~-*- LOG IN Functions: -*-~-*-~-*-
function displayLogIn() {
  event.preventDefault();
  hideGuestPage();
  hideManagerPage();
  clearUserLogIn();
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["userLoginSection"].classList.remove('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["hotelMotto"].innerText = "";
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["hotelMotto"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["navBar"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["mainSection"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["bookingSection"].classList.add('hidden');
}

function displayUserError() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["userNameInput"].placeholder = "insert correct credentials";
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["passwordInput"].placeholder = "insert correct credentials"
}

function displayUserName() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["hotelMotto"].innerText = `Welcome ${guest['name']}`;
}

function matchGuestLogIn(guestName) {
  _classes_fetchData__WEBPACK_IMPORTED_MODULE_2__["fetchData"].getUserData().then(data => {
      return data.find(user => {
        let clonedInput = `customer${user.id}`;
        if (guestName === clonedInput) {
          Promise.resolve(user)
            .then(user => guest = new _classes_userRepo__WEBPACK_IMPORTED_MODULE_3__["default"](user))
        }
      })
    })
    .then(data => displayUserName());
}

function determineUserInput() {
  let guestName = _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["userNameInput"].value;
  if (_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["userNameInput"].value.includes("customer") && _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["passwordInput"].value === "overlook2020") {
    matchGuestLogIn(guestName);
    displayGuestPage();
    _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["logInNavLink"].innerText = "Log Out"
  } else if (_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["userNameInput"].value === "manager" && _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["passwordInput"].value === "overlook2020") {
    displayManagerPage();
  } else {
    displayUserError()
  }
}

function clearUserLogIn() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["userNameInput"].value = "";
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["passwordInput"].value = "";
}


// -*-~-*-~-*- MANAGER Section: -*-~-*-~-*-
function populateRoomData() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].innerText = "";
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerDataTitle"].innerText = "";
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerDataTitle"].innerText = "Room Statuses";
  _classes_fetchData__WEBPACK_IMPORTED_MODULE_2__["fetchData"].getRoomData().then(data => data.forEach(room => {
    // manager.viewAvailableRooms(bookingData, roomData, today)
    // .then(data => { return data.forEach(room => {
    _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].insertAdjacentHTML('beforeend', `
    <article class="data-container room column-alignment" id="${room.number}">
      <a class="room-data" id="room-number"><u>Room #${room.number}</u></a>
      <a class="room-data" id="room-type"><i>${room.roomType}</i></a>
      <a class="room-data" id="bed-size"><b>${room.numBeds}</b> ${room.bedSize}-size bed(s)</a>
      <a class="room-data" id="room-cost">$${room.costPerNight} / night </a>
    </article>
`)
  }));
  calculateTodaysStats();
}



function collectData() {
  _classes_fetchData__WEBPACK_IMPORTED_MODULE_2__["fetchData"].getBookingData().then(data => {
    return data.forEach(bookingLog => {
      Promise.resolve(data)
        .then(data => bookingData.push(bookingLog))
    })
  });
  _classes_fetchData__WEBPACK_IMPORTED_MODULE_2__["fetchData"].getRoomData().then(data => {
    return data.forEach(room => {
      Promise.resolve(data)
        .then(data => roomData.push(room))
    })
  });
}

function calculateTodaysStats() {
  collectData();
  let totalRevenue = manager.totalRevenue(bookingData, roomData, today);
  let totalOccupancy = manager.totalPercentOccupied(bookingData, roomData, today);
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["dataTitle"].innerText = `${today} Stats:`;
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["occupancy"].innerText = `%${totalOccupancy}`;
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["revenue"].innerText = `$${totalRevenue}`;
}


// -*-~-*-~-*- SEARCH BAR / CUSTOMER HISTORY Functions: -*-~-*-~-*-

function searchInputHandler(e) {
  if (_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["searchInput"].value !== undefined && e.key === 'Enter') {
    let searchEntry = _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["searchInput"].value;
    let lowerCaseSearch = searchEntry.toLowerCase();
    gatherSearchResults(lowerCaseSearch);
    _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["searchInput"].value = "";
  }
}

function gatherSearchResults(searchEntry) {
  userData = [];
  let lowerCaseSearchEntry = searchEntry.toLowerCase();
  _classes_fetchData__WEBPACK_IMPORTED_MODULE_2__["fetchData"].getUserData().then(data => {
      return data.filter(user => {
        let userName = `${user['name'].toLowerCase()}`;
        if (userName.includes(lowerCaseSearchEntry)) {
          userData.push(user);
          Promise.resolve(user)
            .then(user => guest = new _classes_userRepo__WEBPACK_IMPORTED_MODULE_3__["default"](user))
        }
      })
    })
    .then(data => populateCustomerHistory(userData));
  registerClickEvent(userData)
}

function populateCustomerHistory(searchResults) {
  clearManagerData();
  let sortedSearchResults = searchResults.sort((a, b) => {
    return a.name > b.name ? 1 : -1
  });
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].innerText = "";
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerDataTitle"].innerText = "Customer History";
  sortedSearchResults.forEach(user => {
    _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].insertAdjacentHTML('beforeend', `
    <article class="user-history data-container column-alignment" id=${user.id}>
      <a class="user-name">${user.name}</a>
    </article>
    `)
  })
}

function displayUserHistory(clickedUser, grandTotal, bookingDates) {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].innerText = "";
  console.log(clickedUser, grandTotal, bookingDates);
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerDataTitle"].innerText = `${clickedUser['name']}'s History`;
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].classList.remove('row-alignment');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].classList.add('column-alignment');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].insertAdjacentHTML('beforeend', `
  <article class="clickedUser-grandTotal">Total Amount Spent: $${grandTotal}</article>
  `);
  bookingDates.forEach(date => {
    _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].insertAdjacentHTML('beforeend', `
  <article class="clickedUser-booking">${date}</article>
  `)
  })
}

function collectUserHistory(clickedUser) {
  let userBookings = clickedUser.viewMyBookings(bookingData);
  let userGrandTotal = clickedUser.viewMyTotal(bookingData, roomData);
  let bookingDates = userBookings.map(booking => {
    return booking['date']
  });
  displayUserHistory(clickedUser, userGrandTotal, bookingDates);
}

function registerClickEvent(searchResults) {
  let clickedUserName = event.target.innerText;
  let clickedUser;
  userData.forEach(user => {
    if (user['name'] === clickedUserName) {
      clickedUser = new _classes_userRepo__WEBPACK_IMPORTED_MODULE_3__["default"](user)
      return collectUserHistory(clickedUser);
    }
  });
}

// -*-~-*-~-*- BOOKINGS SECTION Functions: -*-~-*-~-*-
function displayBookingsForm() {
  manaageBookingsSection.classList.remove('hidden');
}

function updateAvailableRooms() {
  // bookingData = fetchedData.getBookingData();
  // bookingData.then(data => {
  //   let booking = data['bookings']
  // })
  // .then(() =>
    }

function bookRoom(){

}

function manageBookings(){
// let newBooking = manager.addCustomerBooking(userData, clickedUser['name'], )
}

function cancelBoooking(){
  // let bookingId;
  // let deleteBooking = manager.deleteCustomerBooking(bookingData, bookingId)''

}

// -*-~-*-~-*- DISPLAY (x)MANAGER SECTION Functions: -*-~-*-~-*-

function clearManagerData() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].innerText = "";
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerDataTitle"].innerText = "";
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["hotelStatsSection"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].classList.add('row-alignment');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerData"].classList.remove('column-alignment');
}

function displayManageBookings() {
  clearManagerData();
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["manageBookingsSection"].classList.remove('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerDataTitle"].innerText = "";
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerDataTitle"].innerText = "Manage Bookings";
}


function displayRoomStatuses() {
  clearManagerData();
  populateRoomData();
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["hotelStatsSection"].classList.remove('hidden');
}

function displayManagerPage() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["userLoginSection"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerMotto"].classList.remove('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerNavBar"].classList.remove('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerView"].classList.remove('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["hotelStatsSection"].classList.remove('hidden');
  clearUserLogIn();
  hideGuestPage();
  populateRoomData();
}

function hideManagerPage() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerMotto"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerNavBar"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["managerView"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["hotelStatsSection"].classList.add('hidden');
}



// -*-~-*-~-*- GUEST Section: -*-~-*-~-*-
function displayGuestPage() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["userLoginSection"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["hotelMotto"].classList.remove('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["navBar"].classList.remove('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["mainSection"].classList.remove('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["bookingSection"].classList.remove('hidden');
}

function hideGuestPage() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["userLoginSection"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["hotelMotto"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["navBar"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["mainSection"].classList.add('hidden');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_1__["bookingSection"].classList.add('hidden');
}

// -*-~-*-~-*- BOOK A ROOM Functions: -*-~-*-~-*-
function displayAvailableRooms() {

}

function checkAvailableRooms() {
  console.log(_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["checkInDate"].value);
  console.log(_classes_domObject__WEBPACK_IMPORTED_MODULE_1__["checkOutDate"].value);
  displayAvailableRooms();
}

// function handleAvailableRoomsSection() {
//   checkAvailableRooms();
// }


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9ib29raW5nUmVwby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9kb21PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvZmV0Y2hEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL21hbmFnZXJSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL3VzZXJSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2EyMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJ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LDhEQUFXO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLEVBQUUsd0VBQXFCO0FBQ3ZCLEVBQUUsbUVBQWdCO0FBQ2xCLEVBQUUsbUVBQWdCO0FBQ2xCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9FQUFpQjtBQUNuQjs7QUFFQTtBQUNBLEVBQUUsbUVBQWdCO0FBQ2xCLEVBQUUsK0RBQVk7QUFDZCxFQUFFLGdFQUFhO0FBQ2YsRUFBRSw4REFBVztBQUNiLEVBQUUsb0VBQWlCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwrREFBWTtBQUNkLEVBQUUsZ0VBQWE7QUFDZixFQUFFLDhEQUFXO0FBQ2IsRUFBRSxvRUFBaUI7QUFDbkI7Ozs7QUFJQTtBQUNBO0FBQ0EsRUFBRSxtRUFBZ0I7QUFDbEIsRUFBRSw2REFBVTtBQUNaLEVBQUUseURBQU07QUFDUixFQUFFLDhEQUFXO0FBQ2IsRUFBRSxpRUFBYztBQUNoQjs7QUFFQTtBQUNBLEVBQUUsbUVBQWdCO0FBQ2xCLEVBQUUsNkRBQVU7QUFDWixFQUFFLHlEQUFNO0FBQ1IsRUFBRSw4REFBVztBQUNiLEVBQUUsaUVBQWM7QUFDaEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGNBQWMsOERBQVc7QUFDekIsY0FBYywrREFBWTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IH1cXG5cXG4uY29sdW1uLWFsaWdubWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5yb3ctYWxpZ25tZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdERkUwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dzsgfVxcblxcbmhlYWRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGJhc2VsaW5lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdGVhbDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMzB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0MHB4IDBweDsgfVxcblxcbi5ob3RlbC10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDIwcHg7IH1cXG5cXG5oMSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDVlbTtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG5uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1jb250ZW50OiBiYXNlbGluZTtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgYm94LXNoYWRvdzogMCA2cHggMTJweCAwICMwMDAwMDAzZDtcXG4gIHotaW5kZXg6IDEwcHg7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHBhZGRpbmctdG9wOiAyNXB4OyB9XFxuXFxuLm5hdi1saW5rcyB7XFxuICBhbGlnbi1zZWxmOiBiYXNlbGluZTsgfVxcblxcbm1haW4ge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuYXJ0aWNsZSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB3aWR0aDogMTB2dzsgfVxcblxcbmgzIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNWVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cXG5cXG4uaG9tZS1tYWluLWNvbnRlbnQge1xcbiAgcGFkZGluZy1yaWdodDogMnZ3O1xcbiAgd2lkdGg6IDcwdnc7IH1cXG5cXG4uaG9tZS1tYWluLWNvbnRlbnQgPiBoMSB7XFxuICBmb250LXNpemU6IDNlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDV2aDsgfVxcblxcbi5tYWluLWNvbnRlbnQtYmxvY2sge1xcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICBib3JkZXItcmFkaXVzOiA1JTtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IDAgIzAwMDAwMDNkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXgtd2lkdGg6IDIzdnc7XFxuICBwYWRkaW5nOiA1MHB4OyB9XFxuXFxuLm1haW4tY29udGVudC10aXRsZSB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBmb250LXNpemU6IDIuNWVtO1xcbiAgcGFkZGluZzogMCAxdnc7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4sIGNvbG9yIGVhc2UtaW4gMC4yczsgfVxcblxcbi5tYWluLWNvbnRlbnQtLXRpdGxlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBjb2xvcjogYmxhY2s7IH1cXG5cXG4ubWFpbi1jb250ZW50LWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxuICBmb250LXdlaWdodDogMTAwO1xcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICBwYWRkaW5nOiAwLjV2dyAxLjJ2dztcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIHdpZHRoOiA1MHZ3O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2UtaW4sIGNvbG9yIGVhc2UtaW4gMC4yczsgfVxcblxcbi5tYWluLWNvbnRlbnQtZGVzY3JpcHRpb246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbiAgY29sb3I6IHRlYWw7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4OyB9XFxuXFxuLmNvbnRlbnQtdGl0bGUtYmxvY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAydmggMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyOyB9XFxuXFxuLmJvb2tpbmctc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxNTBweDtcXG4gIG1hcmdpbi1yaWdodDogODBweDsgfVxcblxcbi5ib29raW5nLWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xcbiAgYm9yZGVyOiBzb2xpZCAxMHB4O1xcbiAgYm9yZGVyLWNvbG9yOiB0ZWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiA0MHZoO1xcbiAgbWF4LXdpZHRoOiAyMHZ3O1xcbiAgcGFkZGluZzogMCAyZW0gM2VtOyB9XFxuXFxuaDQge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjhlbTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdERkUwO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udDogMC41ZW0gc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmctdG9wOiAxMHB4OyB9XFxuXFxuaW5wdXQsXFxubGFiZWwge1xcbiAgbWFyZ2luOiAwLjRyZW0gMDsgfVxcblxcbi5jaGVjay1hdmFpbGFiaWxpdHktYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBib3JkZXItd2lkdGg6IG1lZGl1bTsgfVxcblxcbi51c2VyLWxvZ2luLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDgwcHg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi51c2VyLWxvZ2luLWJsb2NrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxMHB4IHNvbGlkO1xcbiAgcGFkZGluZzogMTAwcHggMTAwcHggNDBweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXFxuLnVzZXItaW5wdXQge1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogXFxcIkdpbGwgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7IH1cXG5cXG5pbnB1dCB7XFxuICBoZWlnaHQ6IDN2aDsgfVxcblxcbi5sb2dpbi1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItd2lkdGg6IG1lZGl1bTsgfVxcblxcbi5tYW5hZ2VyLWJsb2NrLWluZm8ge1xcbiAgbWFyZ2luLXRvcDogNWVtOyB9XFxuXFxuLm1hbmFnZXItZGF0YS1ibG9jayB7XFxuICB3aWR0aDogODB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAydnc7XFxuICBib3JkZXI6IHNvbGlkIDVweDsgfVxcblxcbi5tYW5hZ2VyLWRhdGEtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5tYW5hZ2VyLWRhdGEge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcblxcbi5kYXRhLWNvbnRhaW5lciB7XFxuICBtaW4td2lkdGg6IDEydnc7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcXG4gIG1hcmdpbi10b3A6IDJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEzdmg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0OyB9XFxuXFxuLmRhdGEtY29udGFpbmVyOmhvdmVyIHtcXG4gIGN1cnNvcjogbm9uZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMjUpO1xcbiAgYm94LXNoYWRvdzogMnB4IDNweCAyMHB4IDFweCBncmV5O1xcbiAgei1pbmRleDogMDsgfVxcblxcbi5tYW5hZ2VyLWRhdGEge1xcbiAgZm9udC1zaXplOiAwLjZlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiR2lsbCBTYW5zXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbiNyb29tLW51bWJlciB7XFxuICBmb250LXNpemU6IDAuOGVtOyB9XFxuXFxuI3Jvb20tY29zdCB7XFxuICBmb250LXNpemU6IDAuN2VtOyB9XFxuXFxuLmhvdGVsLXN0YXRzLXNlY3Rpb24ge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgbWF4LW1hcmdpbi1sZWZ0OiAyZW07XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uaG90ZWwtc3RhdHMtYmxvY2sge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWF4LXdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgbWluLWhlaWdodDogMzV2aDsgfVxcblxcbi5kYXRhLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMWVtOyB9XFxuXFxuLmhvdGVsLXN0YXRzIHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBib3JkZXI6IDNweCBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG5cXG4uY29sb3Ita2V5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTUlO1xcbiAgYm9yZGVyOiAzcHggc29saWQ7XFxuICBtYXgtd2lkdGg6IDh2dzsgfVxcblxcbi5rZXktbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjdlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmU7IH1cXG5cXG4jZ3JlZW4ge1xcbiAgY29sb3I6IGdyZWVuOyB9XFxuXFxuI3JlZCB7XFxuICBjb2xvcjogcmVkOyB9XFxuXFxuLm1hbmFnZXItbmF2LWJhciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcblxcbi5uYXYtc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4OyB9XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA5OCU7XFxuICBzdHJva2Utd2lkdGg6IDFlbTtcXG4gIHdpZHRoOiAxODBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxLjZlbTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggLjlzO1xcbiAgZm9udC1zaXplOiAuOGVtOyB9XFxuXFxuLnNlYXJjaC1pbnB1dDpob3ZlciB7XFxuICB3aWR0aDogMzV2dzsgfVxcblxcbi5jdXN0b21lci1oaXN0b3J5LWJsb2NrIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LXdyYXA6IHdyYXA7IH1cXG5cXG4udXNlci1oaXN0b3J5IHtcXG4gIG1pbi13aWR0aDogMTJ2dztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgbWluLWhlaWdodDogMTN2aDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDEuNXB4IHNvbGlkO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9va2luZyB7XG4gIGNvbnN0cnVjdG9yKGJvb2tpbmdEYXRhKSB7XG4gICAgdGhpcy5pZCA9IGJvb2tpbmdEYXRhLmlkO1xuICAgIHRoaXMudXNlcklEID0gYm9va2luZ0RhdGEudXNlcklEO1xuICAgIHRoaXMuZGF0ZSA9IGJvb2tpbmdEYXRhLmRhdGU7XG4gICAgdGhpcy5yb29tTnVtYmVyID0gYm9va2luZ0RhdGEucm9vbU51bWJlcjtcbiAgICB0aGlzLnJvb21TZXJ2aWNlQ2hhcmdlcyA9IGJvb2tpbmdEYXRhLnJvb21TZXJ2aWNlQ2hhcmdlcyB8fCBbXTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHVzZXJMb2dpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1sb2dpbi1zZWN0aW9uJyk7XG5leHBvcnQgY29uc3QgbG9nSW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tYnV0dG9uJyk7XG5leHBvcnQgY29uc3QgdXNlck5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1c2VyLW5hbWUnKTtcbmV4cG9ydCBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJyk7XG5leHBvcnQgY29uc3QgaG90ZWxNb3R0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3R0bycpO1xuZXhwb3J0IGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtYmFyJyk7XG5leHBvcnQgY29uc3QgbG9nSW5OYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZy1pbi1saW5rJyk7XG5leHBvcnQgY29uc3QgbG9nT3V0TmF2TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2ctb3V0LW5hdicpO1xuZXhwb3J0IGNvbnN0IG1haW5TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tc2VjdGlvbicpO1xuZXhwb3J0IGNvbnN0IGJvb2tpbmdTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvb2tpbmctc2VjdGlvbicpO1xuZXhwb3J0IGNvbnN0IGNoZWNrSW5EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJjaGVjay1pblwiXScpO1xuZXhwb3J0IGNvbnN0IGNoZWNrT3V0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiY2hlY2stb3V0XCJdJyk7XG5leHBvcnQgY29uc3QgY2hlY2tBdmFpbGFiaWxpdHlCdHRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrLWF2YWlsYWJpbGl0eS1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBtYW5hZ2VyTW90dG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1tb3R0bycpO1xuZXhwb3J0IGNvbnN0IG1hbmFnZXJOYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci1uYXYtYmFyJyk7XG5leHBvcnQgY29uc3QgbWFuYWdlclZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFuYWdlci12aWV3Jyk7XG5leHBvcnQgY29uc3QgbWFuYWdlckRhdGFCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2VyLWRhdGEtYmxvY2snKTtcbmV4cG9ydCBjb25zdCBtYW5hZ2VyRGF0YVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItZGF0YS10aXRsZScpO1xuZXhwb3J0IGNvbnN0IG1hbmFnZXJEYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hbmFnZXItZGF0YScpO1xuZXhwb3J0IGNvbnN0IHJvb21TdGF0dXNlc05hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vbS1zdGF0dXNlcy1uYXYnKTtcbmV4cG9ydCBjb25zdCBob3RlbFN0YXRzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3RlbC1zdGF0cy1zZWN0aW9uJyk7XG5leHBvcnQgY29uc3QgaG90ZWxTdGF0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3RlbC1zdGF0cy1ibG9jaycpO1xuZXhwb3J0IGNvbnN0IGRhdGFUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRhLXRpdGxlJyk7XG5leHBvcnQgY29uc3Qgb2NjdXBhbmN5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI29jY3VwYW5jeScpO1xuZXhwb3J0IGNvbnN0IHJldmVudWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV2ZW51ZScpO1xuLy9leHBvcnQgY29uc3QgY3VzdG9tZXJIaXN0b3J5U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21lci1oaXN0b3J5LXNlY3Rpb24nKTtcbi8vZXhwb3J0IGNvbnN0IGN1c3RvbWVySGlzdG9yeUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1c3RvbWVyLWhpc3RvcnktYmxvY2snKTtcbmV4cG9ydCBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbmV4cG9ydCBjb25zdCBtYW5hZ2VCb29raW5nc05hdkxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFuYWdlLWJvb2tpbmdzLW5hdicpO1xuZXhwb3J0IGNvbnN0IG1hbmFnZUJvb2tpbmdzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2UtYm9va2luZ3Mtc2VjdGlvbicpO1xuZXhwb3J0IGNvbnN0IG1hbmFnZUJvb2tpbmdzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYW5hZ2UtYm9va2luZ3MtZm9ybScpO1xuIiwiZXhwb3J0IGNvbnN0IGZldGNoRGF0YSA9IHtcblxuICBnZXRVc2VyRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3VzZXJzL3VzZXJzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS51c2VycylcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciwgXCJFbmNvdW50ZXJlZCBhbiBlcnJvciB3aXRoIGdldFVzZXJEYXRhXCIpKTtcbiAgfSxcbiAgZ2V0Um9vbURhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9yb29tcy9yb29tcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEucm9vbXMpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IsIFwiRW5jb3VudGVyZWQgYW4gZXJyb3Igd2l0aCBnZXRSb29tRGF0YVwiKSk7XG4gIH0sXG5cbiAgZ2V0Qm9va2luZ0RhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5ncycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuYm9va2luZ3MpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IsIFwiRW5jb3VudGVyZWQgYW4gZXJyb3Igd2l0aCBnZXRCb29raW5nRGF0YVwiKSk7XG4gIH0sXG5cbiAgY3JlYXRlQm9va2luZyhib29raW5nKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5ncycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvb2tpbmcpLFxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKFwiQm9va2luZyBzdWNjZXNzZnVsbHkgQ1JFQVRFRFwiKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciwgXCJFbmNvdW50ZXJlZCBhbiBlcnJvciB3aXRoIGNyZWF0ZUJvb2tpbmdcIikpXG4gIH0sXG5cbiAgZGVsZXRlQm9va2luZyhib29raW5nKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9ib29raW5ncy9ib29raW5ncycsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9va2luZyksXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2coXCJCb29raW5nIHN1Y2Nlc3NmdWxseSBERUxFVEVEXCIpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLCBcIkVuY291bnRlcmVkIGFuIGVycm9yIHdpdGggZGVsZXRlQm9va2luZ1wiKSlcbiAgfVxufTtcbiIsImltcG9ydCBCb29raW5nIGZyb20gJy4vYm9va2luZ1JlcG8nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi91c2VyUmVwbyc7XG5pbXBvcnQge1xuICBmZXRjaERhdGFcbn0gZnJvbSAnLi9mZXRjaERhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyIGV4dGVuZHMgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJEYXRhKSB7XG4gICAgc3VwZXIodXNlckRhdGEpXG4gIH1cbiAgdG90YWxBdmFpbGFibGVSb29tcyhib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3QXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKS5sZW5ndGhcbiAgfVxuXG4gIHRvdGFsUmV2ZW51ZShib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy52aWV3VW5hdmFpbGFibGVSb29tcyhib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpLnJlZHVjZSgodG90YWxSZXZlbnVlLCByb29tKSA9PiB7XG4gICAgICB0b3RhbFJldmVudWUgKz0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICByZXR1cm4gdG90YWxSZXZlbnVlXG4gICAgICB9LCAwKS50b0ZpeGVkKDIpXG4gIH1cblxuICB0b3RhbFBlcmNlbnRPY2N1cGllZChib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpIHtcbiAgICByZXR1cm4gKHRoaXMudmlld1VuYXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKS5sZW5ndGggL1xuICAgICAgcm9vbURhdGEubGVuZ3RoKS50b0ZpeGVkKDIpXG4gIH1cblxuICB2aWV3Q3VzdG9tZXIodXNlckRhdGEsIG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFVzZXIodXNlckRhdGEuZmluZCh1c2VyID0+IHVzZXIubmFtZSA9PT0gbmFtZSkpXG4gIH1cblxuICB2aWV3Q3VzdG9tZXJJbmZvKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgdXNlckRhdGEsIG5hbWUpIHtcbiAgICBsZXQgY3VzdG9tZXIgPSB0aGlzLnZpZXdDdXN0b21lcih1c2VyRGF0YSwgbmFtZSk7XG4gICAgbGV0IGJvb2tpbmdzID0gY3VzdG9tZXIudmlld015Qm9va2luZ3MoYm9va2luZ0RhdGEpO1xuICAgIGxldCB0b3RhbCA9IGN1c3RvbWVyLnZpZXdNeVRvdGFsKGJvb2tpbmdEYXRhLCByb29tRGF0YSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBjdXN0b21lci5pZCxcbiAgICAgIG5hbWU6IGN1c3RvbWVyLm5hbWUsXG4gICAgICBib29raW5nSGlzdG9yeTogYm9va2luZ3MsXG4gICAgICB0b3RhbFNwZW50OiB0b3RhbFxuICAgIH1cbiAgfVxuXG4gIGFkZEN1c3RvbWVyQm9va2luZyh1c2VyRGF0YSwgbmFtZSwgZGF0ZSwgcm9vbU51bWJlcikge1xuICAgIGxldCBjdXN0b21lciA9IHRoaXMudmlld0N1c3RvbWVyKHVzZXJEYXRhLCBuYW1lKTtcbiAgICByZXR1cm4gY3VzdG9tZXIuYm9va015Um9vbShkYXRlLCByb29tTnVtYmVyKTtcbiAgfVxuXG4gIGRlbGV0ZUN1c3RvbWVyQm9va2luZyhib29raW5nRGF0YSwgYm9va2luZ0lEKSB7XG4gICAgbGV0IG1hdGNoZWRCb29raW5nID0gYm9va2luZ0RhdGEuZmluZChib29raW5nID0+IGJvb2tpbmcuaWQgPT09IGJvb2tpbmdJRCk7XG4gICAgaWYgKG1hdGNoZWRCb29raW5nLmRhdGUgPiB0aGlzLmdldERhdGUoKSkge1xuICAgICAgbGV0IGJvb2tpbmcgPSB7XG4gICAgICAgIFwiaWRcIjogYm9va2luZ0lEXG4gICAgICB9XG4gICAgICBmZXRjaERhdGEuZGVsZXRlQm9va2luZyhib29raW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBDYW5ub3QgZGVsZXRlIGJvb2tpbmdzIG9uIG9yIGJlZm9yZSB0b2RheVxcJ3MgZGF0ZTogJHt0aGlzLmRhdGV9YFxuICAgIH1cbiAgfVxuXG4gIGdldERhdGUoKSB7XG4gICAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgbGV0IGRhdGUgPSBuZXdEYXRlLmdldERhdGUoKTtcbiAgICBpZiAoZGF0ZS50b1N0cmluZygpLmxlbmd0aCA8IDIpIHtcbiAgICAgIGRhdGUgPSAnMCcgKyBkYXRlXG4gICAgfVxuICAgIGlmIChtb250aC50b1N0cmluZygpLmxlbmd0aCA8IDIpIHtcbiAgICAgIG1vbnRoID0gJzAnICsgbW9udGhcbiAgICB9XG4gICAgcmV0dXJuIGAke25ld0RhdGUuZ2V0RnVsbFllYXIoKX0vJHttb250aH0vJHtkYXRlfWBcbiAgfVxufVxuIiwiaW1wb3J0IEJvb2tpbmcgZnJvbSAnLi9ib29raW5nUmVwbyc7XG5pbXBvcnQge1xuICBmZXRjaERhdGFcbn0gZnJvbSAnLi9mZXRjaERhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEgPSB7fSkge1xuICAgIHRoaXMuaWQgPSB1c2VyRGF0YS5pZCB8fCA2NjY7XG4gICAgdGhpcy5uYW1lID0gdXNlckRhdGEubmFtZSB8fCAnTWFuYWdlcic7XG4gIH1cblxuICBib29rTXlSb29tKGRhdGUsIHJvb21OdW1iZXIpIHtcbiAgICBsZXQgYm9va2luZyA9IHtcbiAgICAgIFwidXNlcklEXCI6IHRoaXMuaWQsXG4gICAgICBcImRhdGVcIjogZGF0ZSxcbiAgICAgIFwicm9vbU51bWJlclwiOiByb29tTnVtYmVyXG4gICAgfTtcbiAgICBmZXRjaERhdGEuY3JlYXRlQm9va2luZyhib29raW5nKVxuICB9XG5cbiAgdmlld015Qm9va2luZ3MoYm9va2luZ0RhdGEpIHtcbiAgICBsZXQgbXlCb29raW5ncyA9IGJvb2tpbmdEYXRhLmZpbHRlcihib29raW5nID0+IHtcbiAgICAgIHJldHVybiBib29raW5nLnVzZXJJRCA9PT0gdGhpcy5pZFxuICAgIH0pO1xuICAgIHJldHVybiBteUJvb2tpbmdzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiBhLmRhdGUgPCBiLmRhdGUgPyAtMSA6IDE7XG4gICAgfSlcbiAgfVxuXG4gIHZpZXdNeVRvdGFsKGJvb2tpbmdEYXRhLCByb29tRGF0YSkge1xuICAgIGxldCBncmFuZFRvdGFsID0gdGhpcy52aWV3TXlCb29raW5ncyhib29raW5nRGF0YSkucmVkdWNlKChteUdyYW5kVG90YWwsIG15Qm9va2luZykgPT4ge1xuICAgICAgbGV0IG1hdGNoZWRSb29tID0gcm9vbURhdGEuZmluZChyb29tID0+IHJvb20ubnVtYmVyID09PSBteUJvb2tpbmcucm9vbU51bWJlcik7XG4gICAgICBteUdyYW5kVG90YWwgKz0gbWF0Y2hlZFJvb20uY29zdFBlck5pZ2h0O1xuICAgICAgcmV0dXJuIG15R3JhbmRUb3RhbDtcbiAgICB9LCAwKS50b0ZpeGVkKDIpO1xuICAgIHJldHVybiBOdW1iZXIoZ3JhbmRUb3RhbClcbiAgfVxuXG4gIHZpZXdVbmF2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSkge1xuICAgIHJldHVybiBib29raW5nRGF0YS5yZWR1Y2UoKGJvb2tlZFJvb21zLCBib29raW5nKSA9PiB7XG4gICAgICBpZiAoYm9va2luZy5kYXRlID09PSBkYXRlKSB7XG4gICAgICAgIGJvb2tlZFJvb21zLnB1c2gocm9vbURhdGEuZmluZChyb29tID0+IHJvb20ubnVtYmVyID09PSBib29raW5nLnJvb21OdW1iZXIpKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGJvb2tlZFJvb21zXG4gICAgfSwgW10pO1xuICB9XG5cbiAgdmlld0F2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSkge1xuICAgIGxldCB1bmF2YWlsYWJsZVJvb21zID0gdGhpcy52aWV3VW5hdmFpbGFibGVSb29tcyhib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpO1xuICAgIHJldHVybiByb29tRGF0YS5maWx0ZXIocm9vbSA9PiAhdW5hdmFpbGFibGVSb29tcy5pbmNsdWRlcyhyb29tKSlcbiAgfVxuXG4gIHZpZXdBdmFpbGFibGVSb29tc0J5VHlwZShib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUsIHJvb21UeXBlKSB7XG4gICAgbGV0IGF2YWlsYWJsZVJvb21zID0gdGhpcy52aWV3QXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKTtcbiAgICByZXR1cm4gYXZhaWxhYmxlUm9vbXMuZmlsdGVyKHJvb20gPT4gcm9vbS5yb29tVHlwZSA9PT0gcm9vbVR5cGUpXG4gIH1cbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCB7XG4gIHVzZXJMb2dpblNlY3Rpb24sXG4gIGxvZ0luQnV0dG9uLFxuICB1c2VyTmFtZUlucHV0LFxuICBwYXNzd29yZElucHV0LFxuICBob3RlbE1vdHRvLFxuICBuYXZCYXIsXG4gIGxvZ0luTmF2TGluayxcbiAgbG9nT3V0TmF2TGluayxcbiAgbWFpblNlY3Rpb24sXG4gIGJvb2tpbmdTZWN0aW9uLFxuICBjaGVja0luRGF0ZSxcbiAgY2hlY2tPdXREYXRlLFxuICBjaGVja0F2YWlsYWJpbGl0eUJ0dG4sXG4gIG1hbmFnZXJNb3R0byxcbiAgbWFuYWdlck5hdkJhcixcbiAgbWFuYWdlclZpZXcsXG4gIG1hbmFnZXJEYXRhQmxvY2ssXG4gIG1hbmFnZXJEYXRhVGl0bGUsXG4gIG1hbmFnZXJEYXRhLFxuICByb29tU3RhdHVzZXNOYXZMaW5rLFxuICBob3RlbFN0YXRzU2VjdGlvbixcbiAgaG90ZWxTdGF0c0NvbnRhaW5lcixcbiAgZGF0YVRpdGxlLFxuICBvY2N1cGFuY3ksXG4gIHJldmVudWUsXG4gIHNlYXJjaElucHV0LFxuICBtYW5hZ2VCb29raW5nc05hdkxpbmssXG4gIG1hbmFnZUJvb2tpbmdzU2VjdGlvbixcbiAgbWFuYWdlQm9va2luZ3NGb3JtXG59IGZyb20gJy4vY2xhc3Nlcy9kb21PYmplY3QnO1xuaW1wb3J0IHtcbiAgZmV0Y2hEYXRhXG59IGZyb20gJy4vY2xhc3Nlcy9mZXRjaERhdGEnO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuL2NsYXNzZXMvdXNlclJlcG8nO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9jbGFzc2VzL21hbmFnZXJSZXBvJztcbmltcG9ydCBCb29raW5nIGZyb20gJy4vY2xhc3Nlcy9ib29raW5nUmVwbyc7XG4vLyBpbXBvcnQgJy4vaW1hZ2VzL2F1ZGlvLm00YSc7XG4vLyBhdWRpby5wbGF5KCk7XG5cbmxldCBjdXJyZW50VXNlcjtcbmxldCBjbGlja2VkVXNlcjtcbmxldCBndWVzdDtcbmxldCBtYW5hZ2VyID0gbmV3IE1hbmFnZXIoKTtcbmxldCBib29raW5nO1xubGV0IHVzZXJEYXRhID0gW107XG5sZXQgYm9va2luZ0RhdGEgPSBbXTtcbmxldCByb29tRGF0YSA9IFtdO1xubGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcblxubGV0IHVzZXJOYW1lQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1oaXN0b3J5Jyk7XG5cblxuLy8gLS0tIEVWRU5UIExJU1RFTkVSUzogLS0tXG4vL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBkaXNwbGF5TWFuYWdlclBhZ2UpO1xubG9nSW5OYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUxvZ0luKTtcbmxvZ091dE5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TG9nSW4pO1xubG9nSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZXRlcm1pbmVVc2VySW5wdXQpO1xuY2hlY2tBdmFpbGFiaWxpdHlCdHRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tBdmFpbGFibGVSb29tcyk7XG5tYW5hZ2VyRGF0YS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZ2lzdGVyQ2xpY2tFdmVudCk7XG5yb29tU3RhdHVzZXNOYXZMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheVJvb21TdGF0dXNlcyk7XG5tYW5hZ2VCb29raW5nc05hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TWFuYWdlQm9va2luZ3MpO1xuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBzZWFyY2hJbnB1dEhhbmRsZXIpO1xuXG5cblxuLy8gLSotfi0qLX4tKi0gTE9HIElOIEZ1bmN0aW9uczogLSotfi0qLX4tKi1cbmZ1bmN0aW9uIGRpc3BsYXlMb2dJbigpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgaGlkZUd1ZXN0UGFnZSgpO1xuICBoaWRlTWFuYWdlclBhZ2UoKTtcbiAgY2xlYXJVc2VyTG9nSW4oKTtcbiAgdXNlckxvZ2luU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgaG90ZWxNb3R0by5pbm5lclRleHQgPSBcIlwiO1xuICBob3RlbE1vdHRvLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIG1haW5TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBib29raW5nU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVVzZXJFcnJvcigpIHtcbiAgdXNlck5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiaW5zZXJ0IGNvcnJlY3QgY3JlZGVudGlhbHNcIjtcbiAgcGFzc3dvcmRJbnB1dC5wbGFjZWhvbGRlciA9IFwiaW5zZXJ0IGNvcnJlY3QgY3JlZGVudGlhbHNcIlxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VXNlck5hbWUoKSB7XG4gIGhvdGVsTW90dG8uaW5uZXJUZXh0ID0gYFdlbGNvbWUgJHtndWVzdFsnbmFtZSddfWA7XG59XG5cbmZ1bmN0aW9uIG1hdGNoR3Vlc3RMb2dJbihndWVzdE5hbWUpIHtcbiAgZmV0Y2hEYXRhLmdldFVzZXJEYXRhKCkudGhlbihkYXRhID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZpbmQodXNlciA9PiB7XG4gICAgICAgIGxldCBjbG9uZWRJbnB1dCA9IGBjdXN0b21lciR7dXNlci5pZH1gO1xuICAgICAgICBpZiAoZ3Vlc3ROYW1lID09PSBjbG9uZWRJbnB1dCkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh1c2VyKVxuICAgICAgICAgICAgLnRoZW4odXNlciA9PiBndWVzdCA9IG5ldyBVc2VyKHVzZXIpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiBkaXNwbGF5VXNlck5hbWUoKSk7XG59XG5cbmZ1bmN0aW9uIGRldGVybWluZVVzZXJJbnB1dCgpIHtcbiAgbGV0IGd1ZXN0TmFtZSA9IHVzZXJOYW1lSW5wdXQudmFsdWU7XG4gIGlmICh1c2VyTmFtZUlucHV0LnZhbHVlLmluY2x1ZGVzKFwiY3VzdG9tZXJcIikgJiYgcGFzc3dvcmRJbnB1dC52YWx1ZSA9PT0gXCJvdmVybG9vazIwMjBcIikge1xuICAgIG1hdGNoR3Vlc3RMb2dJbihndWVzdE5hbWUpO1xuICAgIGRpc3BsYXlHdWVzdFBhZ2UoKTtcbiAgICBsb2dJbk5hdkxpbmsuaW5uZXJUZXh0ID0gXCJMb2cgT3V0XCJcbiAgfSBlbHNlIGlmICh1c2VyTmFtZUlucHV0LnZhbHVlID09PSBcIm1hbmFnZXJcIiAmJiBwYXNzd29yZElucHV0LnZhbHVlID09PSBcIm92ZXJsb29rMjAyMFwiKSB7XG4gICAgZGlzcGxheU1hbmFnZXJQYWdlKCk7XG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheVVzZXJFcnJvcigpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJVc2VyTG9nSW4oKSB7XG4gIHVzZXJOYW1lSW5wdXQudmFsdWUgPSBcIlwiO1xuICBwYXNzd29yZElucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuXG4vLyAtKi1+LSotfi0qLSBNQU5BR0VSIFNlY3Rpb246IC0qLX4tKi1+LSotXG5mdW5jdGlvbiBwb3B1bGF0ZVJvb21EYXRhKCkge1xuICBtYW5hZ2VyRGF0YS5pbm5lclRleHQgPSBcIlwiO1xuICBtYW5hZ2VyRGF0YVRpdGxlLmlubmVyVGV4dCA9IFwiXCI7XG4gIG1hbmFnZXJEYXRhVGl0bGUuaW5uZXJUZXh0ID0gXCJSb29tIFN0YXR1c2VzXCI7XG4gIGZldGNoRGF0YS5nZXRSb29tRGF0YSgpLnRoZW4oZGF0YSA9PiBkYXRhLmZvckVhY2gocm9vbSA9PiB7XG4gICAgLy8gbWFuYWdlci52aWV3QXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCB0b2RheSlcbiAgICAvLyAudGhlbihkYXRhID0+IHsgcmV0dXJuIGRhdGEuZm9yRWFjaChyb29tID0+IHtcbiAgICBtYW5hZ2VyRGF0YS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICA8YXJ0aWNsZSBjbGFzcz1cImRhdGEtY29udGFpbmVyIHJvb20gY29sdW1uLWFsaWdubWVudFwiIGlkPVwiJHtyb29tLm51bWJlcn1cIj5cbiAgICAgIDxhIGNsYXNzPVwicm9vbS1kYXRhXCIgaWQ9XCJyb29tLW51bWJlclwiPjx1PlJvb20gIyR7cm9vbS5udW1iZXJ9PC91PjwvYT5cbiAgICAgIDxhIGNsYXNzPVwicm9vbS1kYXRhXCIgaWQ9XCJyb29tLXR5cGVcIj48aT4ke3Jvb20ucm9vbVR5cGV9PC9pPjwvYT5cbiAgICAgIDxhIGNsYXNzPVwicm9vbS1kYXRhXCIgaWQ9XCJiZWQtc2l6ZVwiPjxiPiR7cm9vbS5udW1CZWRzfTwvYj4gJHtyb29tLmJlZFNpemV9LXNpemUgYmVkKHMpPC9hPlxuICAgICAgPGEgY2xhc3M9XCJyb29tLWRhdGFcIiBpZD1cInJvb20tY29zdFwiPiQke3Jvb20uY29zdFBlck5pZ2h0fSAvIG5pZ2h0IDwvYT5cbiAgICA8L2FydGljbGU+XG5gKVxuICB9KSk7XG4gIGNhbGN1bGF0ZVRvZGF5c1N0YXRzKCk7XG59XG5cblxuXG5mdW5jdGlvbiBjb2xsZWN0RGF0YSgpIHtcbiAgZmV0Y2hEYXRhLmdldEJvb2tpbmdEYXRhKCkudGhlbihkYXRhID0+IHtcbiAgICByZXR1cm4gZGF0YS5mb3JFYWNoKGJvb2tpbmdMb2cgPT4ge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGRhdGEpXG4gICAgICAgIC50aGVuKGRhdGEgPT4gYm9va2luZ0RhdGEucHVzaChib29raW5nTG9nKSlcbiAgICB9KVxuICB9KTtcbiAgZmV0Y2hEYXRhLmdldFJvb21EYXRhKCkudGhlbihkYXRhID0+IHtcbiAgICByZXR1cm4gZGF0YS5mb3JFYWNoKHJvb20gPT4ge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGRhdGEpXG4gICAgICAgIC50aGVuKGRhdGEgPT4gcm9vbURhdGEucHVzaChyb29tKSlcbiAgICB9KVxuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVG9kYXlzU3RhdHMoKSB7XG4gIGNvbGxlY3REYXRhKCk7XG4gIGxldCB0b3RhbFJldmVudWUgPSBtYW5hZ2VyLnRvdGFsUmV2ZW51ZShib29raW5nRGF0YSwgcm9vbURhdGEsIHRvZGF5KTtcbiAgbGV0IHRvdGFsT2NjdXBhbmN5ID0gbWFuYWdlci50b3RhbFBlcmNlbnRPY2N1cGllZChib29raW5nRGF0YSwgcm9vbURhdGEsIHRvZGF5KTtcbiAgZGF0YVRpdGxlLmlubmVyVGV4dCA9IGAke3RvZGF5fSBTdGF0czpgO1xuICBvY2N1cGFuY3kuaW5uZXJUZXh0ID0gYCUke3RvdGFsT2NjdXBhbmN5fWA7XG4gIHJldmVudWUuaW5uZXJUZXh0ID0gYCQke3RvdGFsUmV2ZW51ZX1gO1xufVxuXG5cbi8vIC0qLX4tKi1+LSotIFNFQVJDSCBCQVIgLyBDVVNUT01FUiBISVNUT1JZIEZ1bmN0aW9uczogLSotfi0qLX4tKi1cblxuZnVuY3Rpb24gc2VhcmNoSW5wdXRIYW5kbGVyKGUpIHtcbiAgaWYgKHNlYXJjaElucHV0LnZhbHVlICE9PSB1bmRlZmluZWQgJiYgZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBsZXQgc2VhcmNoRW50cnkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICBsZXQgbG93ZXJDYXNlU2VhcmNoID0gc2VhcmNoRW50cnkudG9Mb3dlckNhc2UoKTtcbiAgICBnYXRoZXJTZWFyY2hSZXN1bHRzKGxvd2VyQ2FzZVNlYXJjaCk7XG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdhdGhlclNlYXJjaFJlc3VsdHMoc2VhcmNoRW50cnkpIHtcbiAgdXNlckRhdGEgPSBbXTtcbiAgbGV0IGxvd2VyQ2FzZVNlYXJjaEVudHJ5ID0gc2VhcmNoRW50cnkudG9Mb3dlckNhc2UoKTtcbiAgZmV0Y2hEYXRhLmdldFVzZXJEYXRhKCkudGhlbihkYXRhID0+IHtcbiAgICAgIHJldHVybiBkYXRhLmZpbHRlcih1c2VyID0+IHtcbiAgICAgICAgbGV0IHVzZXJOYW1lID0gYCR7dXNlclsnbmFtZSddLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgICAgaWYgKHVzZXJOYW1lLmluY2x1ZGVzKGxvd2VyQ2FzZVNlYXJjaEVudHJ5KSkge1xuICAgICAgICAgIHVzZXJEYXRhLnB1c2godXNlcik7XG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHVzZXIpXG4gICAgICAgICAgICAudGhlbih1c2VyID0+IGd1ZXN0ID0gbmV3IFVzZXIodXNlcikpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICAudGhlbihkYXRhID0+IHBvcHVsYXRlQ3VzdG9tZXJIaXN0b3J5KHVzZXJEYXRhKSk7XG4gIHJlZ2lzdGVyQ2xpY2tFdmVudCh1c2VyRGF0YSlcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVDdXN0b21lckhpc3Rvcnkoc2VhcmNoUmVzdWx0cykge1xuICBjbGVhck1hbmFnZXJEYXRhKCk7XG4gIGxldCBzb3J0ZWRTZWFyY2hSZXN1bHRzID0gc2VhcmNoUmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGEubmFtZSA+IGIubmFtZSA/IDEgOiAtMVxuICB9KTtcbiAgbWFuYWdlckRhdGEuaW5uZXJUZXh0ID0gXCJcIjtcbiAgbWFuYWdlckRhdGFUaXRsZS5pbm5lclRleHQgPSBcIkN1c3RvbWVyIEhpc3RvcnlcIjtcbiAgc29ydGVkU2VhcmNoUmVzdWx0cy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgIG1hbmFnZXJEYXRhLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgIDxhcnRpY2xlIGNsYXNzPVwidXNlci1oaXN0b3J5IGRhdGEtY29udGFpbmVyIGNvbHVtbi1hbGlnbm1lbnRcIiBpZD0ke3VzZXIuaWR9PlxuICAgICAgPGEgY2xhc3M9XCJ1c2VyLW5hbWVcIj4ke3VzZXIubmFtZX08L2E+XG4gICAgPC9hcnRpY2xlPlxuICAgIGApXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlVc2VySGlzdG9yeShjbGlja2VkVXNlciwgZ3JhbmRUb3RhbCwgYm9va2luZ0RhdGVzKSB7XG4gIG1hbmFnZXJEYXRhLmlubmVyVGV4dCA9IFwiXCI7XG4gIGNvbnNvbGUubG9nKGNsaWNrZWRVc2VyLCBncmFuZFRvdGFsLCBib29raW5nRGF0ZXMpO1xuICBtYW5hZ2VyRGF0YVRpdGxlLmlubmVyVGV4dCA9IGAke2NsaWNrZWRVc2VyWyduYW1lJ119J3MgSGlzdG9yeWA7XG4gIG1hbmFnZXJEYXRhLmNsYXNzTGlzdC5yZW1vdmUoJ3Jvdy1hbGlnbm1lbnQnKTtcbiAgbWFuYWdlckRhdGEuY2xhc3NMaXN0LmFkZCgnY29sdW1uLWFsaWdubWVudCcpO1xuICBtYW5hZ2VyRGF0YS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgPGFydGljbGUgY2xhc3M9XCJjbGlja2VkVXNlci1ncmFuZFRvdGFsXCI+VG90YWwgQW1vdW50IFNwZW50OiAkJHtncmFuZFRvdGFsfTwvYXJ0aWNsZT5cbiAgYCk7XG4gIGJvb2tpbmdEYXRlcy5mb3JFYWNoKGRhdGUgPT4ge1xuICAgIG1hbmFnZXJEYXRhLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICA8YXJ0aWNsZSBjbGFzcz1cImNsaWNrZWRVc2VyLWJvb2tpbmdcIj4ke2RhdGV9PC9hcnRpY2xlPlxuICBgKVxuICB9KVxufVxuXG5mdW5jdGlvbiBjb2xsZWN0VXNlckhpc3RvcnkoY2xpY2tlZFVzZXIpIHtcbiAgbGV0IHVzZXJCb29raW5ncyA9IGNsaWNrZWRVc2VyLnZpZXdNeUJvb2tpbmdzKGJvb2tpbmdEYXRhKTtcbiAgbGV0IHVzZXJHcmFuZFRvdGFsID0gY2xpY2tlZFVzZXIudmlld015VG90YWwoYm9va2luZ0RhdGEsIHJvb21EYXRhKTtcbiAgbGV0IGJvb2tpbmdEYXRlcyA9IHVzZXJCb29raW5ncy5tYXAoYm9va2luZyA9PiB7XG4gICAgcmV0dXJuIGJvb2tpbmdbJ2RhdGUnXVxuICB9KTtcbiAgZGlzcGxheVVzZXJIaXN0b3J5KGNsaWNrZWRVc2VyLCB1c2VyR3JhbmRUb3RhbCwgYm9va2luZ0RhdGVzKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDbGlja0V2ZW50KHNlYXJjaFJlc3VsdHMpIHtcbiAgbGV0IGNsaWNrZWRVc2VyTmFtZSA9IGV2ZW50LnRhcmdldC5pbm5lclRleHQ7XG4gIGxldCBjbGlja2VkVXNlcjtcbiAgdXNlckRhdGEuZm9yRWFjaCh1c2VyID0+IHtcbiAgICBpZiAodXNlclsnbmFtZSddID09PSBjbGlja2VkVXNlck5hbWUpIHtcbiAgICAgIGNsaWNrZWRVc2VyID0gbmV3IFVzZXIodXNlcilcbiAgICAgIHJldHVybiBjb2xsZWN0VXNlckhpc3RvcnkoY2xpY2tlZFVzZXIpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIC0qLX4tKi1+LSotIEJPT0tJTkdTIFNFQ1RJT04gRnVuY3Rpb25zOiAtKi1+LSotfi0qLVxuZnVuY3Rpb24gZGlzcGxheUJvb2tpbmdzRm9ybSgpIHtcbiAgbWFuYWFnZUJvb2tpbmdzU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQXZhaWxhYmxlUm9vbXMoKSB7XG4gIC8vIGJvb2tpbmdEYXRhID0gZmV0Y2hlZERhdGEuZ2V0Qm9va2luZ0RhdGEoKTtcbiAgLy8gYm9va2luZ0RhdGEudGhlbihkYXRhID0+IHtcbiAgLy8gICBsZXQgYm9va2luZyA9IGRhdGFbJ2Jvb2tpbmdzJ11cbiAgLy8gfSlcbiAgLy8gLnRoZW4oKCkgPT5cbiAgICB9XG5cbmZ1bmN0aW9uIGJvb2tSb29tKCl7XG5cbn1cblxuZnVuY3Rpb24gbWFuYWdlQm9va2luZ3MoKXtcbi8vIGxldCBuZXdCb29raW5nID0gbWFuYWdlci5hZGRDdXN0b21lckJvb2tpbmcodXNlckRhdGEsIGNsaWNrZWRVc2VyWyduYW1lJ10sIClcbn1cblxuZnVuY3Rpb24gY2FuY2VsQm9vb2tpbmcoKXtcbiAgLy8gbGV0IGJvb2tpbmdJZDtcbiAgLy8gbGV0IGRlbGV0ZUJvb2tpbmcgPSBtYW5hZ2VyLmRlbGV0ZUN1c3RvbWVyQm9va2luZyhib29raW5nRGF0YSwgYm9va2luZ0lkKScnXG5cbn1cblxuLy8gLSotfi0qLX4tKi0gRElTUExBWSAoeClNQU5BR0VSIFNFQ1RJT04gRnVuY3Rpb25zOiAtKi1+LSotfi0qLVxuXG5mdW5jdGlvbiBjbGVhck1hbmFnZXJEYXRhKCkge1xuICBtYW5hZ2VyRGF0YS5pbm5lclRleHQgPSBcIlwiO1xuICBtYW5hZ2VyRGF0YVRpdGxlLmlubmVyVGV4dCA9IFwiXCI7XG4gIGhvdGVsU3RhdHNTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBtYW5hZ2VyRGF0YS5jbGFzc0xpc3QuYWRkKCdyb3ctYWxpZ25tZW50Jyk7XG4gIG1hbmFnZXJEYXRhLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbHVtbi1hbGlnbm1lbnQnKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU1hbmFnZUJvb2tpbmdzKCkge1xuICBjbGVhck1hbmFnZXJEYXRhKCk7XG4gIG1hbmFnZUJvb2tpbmdzU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbWFuYWdlckRhdGFUaXRsZS5pbm5lclRleHQgPSBcIlwiO1xuICBtYW5hZ2VyRGF0YVRpdGxlLmlubmVyVGV4dCA9IFwiTWFuYWdlIEJvb2tpbmdzXCI7XG59XG5cblxuZnVuY3Rpb24gZGlzcGxheVJvb21TdGF0dXNlcygpIHtcbiAgY2xlYXJNYW5hZ2VyRGF0YSgpO1xuICBwb3B1bGF0ZVJvb21EYXRhKCk7XG4gIGhvdGVsU3RhdHNTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TWFuYWdlclBhZ2UoKSB7XG4gIHVzZXJMb2dpblNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIG1hbmFnZXJNb3R0by5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbWFuYWdlck5hdkJhci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbWFuYWdlclZpZXcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGhvdGVsU3RhdHNTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBjbGVhclVzZXJMb2dJbigpO1xuICBoaWRlR3Vlc3RQYWdlKCk7XG4gIHBvcHVsYXRlUm9vbURhdGEoKTtcbn1cblxuZnVuY3Rpb24gaGlkZU1hbmFnZXJQYWdlKCkge1xuICBtYW5hZ2VyTW90dG8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIG1hbmFnZXJOYXZCYXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIG1hbmFnZXJWaWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBob3RlbFN0YXRzU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbn1cblxuXG5cbi8vIC0qLX4tKi1+LSotIEdVRVNUIFNlY3Rpb246IC0qLX4tKi1+LSotXG5mdW5jdGlvbiBkaXNwbGF5R3Vlc3RQYWdlKCkge1xuICB1c2VyTG9naW5TZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBob3RlbE1vdHRvLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG1haW5TZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBib29raW5nU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gaGlkZUd1ZXN0UGFnZSgpIHtcbiAgdXNlckxvZ2luU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgaG90ZWxNb3R0by5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBtYWluU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgYm9va2luZ1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG59XG5cbi8vIC0qLX4tKi1+LSotIEJPT0sgQSBST09NIEZ1bmN0aW9uczogLSotfi0qLX4tKi1cbmZ1bmN0aW9uIGRpc3BsYXlBdmFpbGFibGVSb29tcygpIHtcblxufVxuXG5mdW5jdGlvbiBjaGVja0F2YWlsYWJsZVJvb21zKCkge1xuICBjb25zb2xlLmxvZyhjaGVja0luRGF0ZS52YWx1ZSk7XG4gIGNvbnNvbGUubG9nKGNoZWNrT3V0RGF0ZS52YWx1ZSk7XG4gIGRpc3BsYXlBdmFpbGFibGVSb29tcygpO1xufVxuXG4vLyBmdW5jdGlvbiBoYW5kbGVBdmFpbGFibGVSb29tc1NlY3Rpb24oKSB7XG4vLyAgIGNoZWNrQXZhaWxhYmxlUm9vbXMoKTtcbi8vIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=
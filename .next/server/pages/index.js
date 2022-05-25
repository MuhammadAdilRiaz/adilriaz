module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }

    resolvedAs = delBasePath(resolvedAs);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/UIUX-Designs.png":
/*!*************************************!*\
  !*** ./src/assets/UIUX-Designs.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/UIUX-Designs-6a4be23997021f67dd28146611303914.png";

/***/ }),

/***/ "./src/assets/accordion-arrow-e.svg":
/*!******************************************!*\
  !*** ./src/assets/accordion-arrow-e.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE2IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04LjMyODQxIDguNzc0MjFDOC4wNTk2NSA4Ljc2ODIyIDcuNzkzMjEgOC42NTk2MiA3LjU5Mjg2IDguNDUwMjRMMS4yODg0NSAxLjg1ODQ0QzAuODg3NDA0IDEuNDM5MTIgMC45MDIyMiAwLjc3NDA4MSAxLjMyMTU0IDAuMzczMjA0QzEuNzQwNjkgLTAuMDI3Njc3MSAyLjQwNTU5IC0wLjAxMjg2MzMgMi44MDY2NyAwLjQwNjI5Mkw4LjM4NDkgNi4yMzkwOEwxNC4yMTc0IDAuNjYwNzE2QzE0LjYzNjcgMC4yNTk4MzkgMTUuMzAxNSAwLjI3NDY1MSAxNS43MDI0IDAuNjkzODAyQzE2LjEwMzYgMS4xMTI5NiAxNi4wODg4IDEuNzc4IDE1LjY2OTMgMi4xNzkwNEw5LjA3NzY2IDguNDgzNTJDOC44NjgwOSA4LjY4MzggOC41OTcwOCA4Ljc4MDIgOC4zMjg0MSA4Ljc3NDIxWiIgZmlsbD0iIzAyMDczRSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/accordion-arrow.svg":
/*!****************************************!*\
  !*** ./src/assets/accordion-arrow.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDkgMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04LjY5ODg4IDcuNTAwMDNDOC42OTg4OCA3Ljc2ODg2IDguNTk2MjMgOC4wMzc2NSA4LjM5MTM3IDguMjQyNjFMMS45NDE2MyAxNC42OTIzQzEuNTMxMzUgMTUuMTAyNiAwLjg2NjE0MyAxNS4xMDI2IDAuNDU2MDI2IDE0LjY5MjNDMC4wNDU5MDgxIDE0LjI4MjIgMC4wNDU5MDgxIDEzLjYxNzEgMC40NTYwMjYgMTMuMjA2OEw2LjE2MzExIDcuNTAwMDNMMC40NTYyMjUgMS43OTMyNEMwLjA0NjEwNzQgMS4zODI5NSAwLjA0NjEwNzQgMC43MTc5NDggMC40NTYyMjUgMC4zMDc4NjNDMC44NjYzNDMgLTAuMTAyNjE5IDEuNTMxNTUgLTAuMTAyNjE5IDEuOTQxODMgMC4zMDc4NjNMOC4zOTE1NyA2Ljc1NzQ0QzguNTk2NDYgNi45NjI1IDguNjk4ODggNy4yMzEyOSA4LjY5ODg4IDcuNTAwMDNaIiBmaWxsPSIjMDIwNzNFIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/arrow-angle.svg":
/*!************************************!*\
  !*** ./src/assets/arrow-angle.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDYgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01Ljg0ODcyIDUuODQ2NzFDNS44NDg3MiA2LjAyNTkzIDUuNzgwMjkgNi4yMDUxMiA1LjY0MzcyIDYuMzQxNzZMMS4zNDM5IDEwLjY0MTVDMS4wNzAzOCAxMC45MTUxIDAuNjI2OTA3IDEwLjkxNTEgMC4zNTM0OTYgMTAuNjQxNUMwLjA4MDA4NDcgMTAuMzY4MSAwLjA4MDA4NDcgOS45MjQ3NSAwLjM1MzQ5NiA5LjY1MTJMNC4xNTgyMSA1Ljg0NjcxTDAuMzUzNjI5IDIuMDQyMTlDMC4wODAyMTc2IDEuNzY4NjcgMC4wODAyMTc2IDEuMzI1MzMgMC4zNTM2MjkgMS4wNTE5NEMwLjYyNzA0IDAuNzc4Mjg5IDEuMDcwNTEgMC43NzgyODkgMS4zNDQwMyAxLjA1MTk0TDUuNjQzODUgNS4zNTE2NUM1Ljc4MDQ0IDUuNDg4MzYgNS44NDg3MiA1LjY2NzU1IDUuODQ4NzIgNS44NDY3MVoiIGZpbGw9IiM0Rjk2RkYiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/banner-icon-1-1.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-1.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0MyA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjIgMTMuMzkxMUwwIDE3Ljk5MTFMMTIuNSA0Ny45OTExTDQyLjUgMzUuNDkxMUwzNy43IDIzLjg5MTFDMzcuNiAyMy43OTExIDM3LjYgMjMuNzkxMSAzNy41IDIzLjc5MTFDMzcuNCAyMy43OTExIDM3LjQgMjMuNjkxMSAzNy4zIDIzLjY5MTFDMzcuMiAyMy41OTExIDM3LjEgMjMuNTkxMSAzNi45IDIzLjU5MTFDMzYuOSAyMy41OTExIDM2LjkgMjMuNTkxMSAzNi44IDIzLjU5MTFIMzYuN0gzNi42SDM2LjVDMzYuNCAyMy41OTExIDM2LjQgMjMuNTkxMSAzNi4zIDIzLjU5MTFIMzYuMkMzNi4xIDIzLjU5MTEgMzYgMjMuNTkxMSAzNS45IDIzLjY5MTFDMzUuNCAyMy44OTExIDM1LjEgMjQuMjkxMSAzNSAyNC42OTExQzM0LjYgMjYuMTkxMSAzMy41IDI3LjU5MTEgMzEuOSAyOC4xOTExQzI5LjIgMjkuMjkxMSAyNi4xIDI3Ljk5MTEgMjQuOSAyNS4yOTExQzIzLjggMjIuNTkxMSAyNS4xIDE5LjQ5MTEgMjcuOCAxOC4yOTExQzI5LjQgMTcuNTkxMSAzMS4xIDE3Ljc5MTEgMzIuNSAxOC41OTExQzMyLjkgMTguNzkxMSAzMy40IDE4Ljg5MTEgMzMuOSAxOC42OTExQzM0IDE4LjY5MTEgMzQuMSAxOC41OTExIDM0LjEgMTguNTkxMUMzNC4xIDE4LjU5MTEgMzQuMiAxOC41OTExIDM0LjIgMTguNDkxMUwzNC4zIDE4LjM5MTFMMzQuNCAxOC4yOTExTDM0LjUgMTguMTkxMUwzNC42IDE4LjA5MTFDMzQuNiAxOC4wOTExIDM0LjYgMTguMDkxMSAzNC42IDE3Ljk5MTFDMzQuNyAxNy44OTExIDM0LjcgMTcuNzkxMSAzNC44IDE3LjY5MTFDMzQuOCAxNy41OTExIDM0LjggMTcuNTkxMSAzNC44IDE3LjQ5MTFDMzQuOCAxNy4zOTExIDM0LjggMTcuMzkxMSAzNC44IDE3LjI5MTFMMzAgNS41OTExMUwxOC44IDEwLjI5MTFDMTggMTAuNDkxMSAxNy4yIDEwLjE5MTEgMTYuOSA5LjM5MTExQzE2LjcgOC44OTExMSAxNi44IDguMzkxMTIgMTcgNy45OTExMkMxNy44IDYuNTkxMTEgMTggNC44OTExMSAxNy4zIDMuMjkxMTFDMTYuMiAwLjU5MTExNSAxMy4xIC0wLjcwODg4NSAxMC4zIDAuMzkxMTE1QzcuNiAxLjQ5MTExIDYuMyA0LjU5MTExIDcuNCA3LjM5MTEyQzggOC45OTExMiA5LjQgOS45OTExMSAxMC45IDEwLjQ5MTFDMTEuMyAxMC41OTExIDExLjcgMTAuODkxMSAxMS45IDExLjM5MTFDMTIuMyAxMi4wOTExIDExLjkgMTIuOTkxMSAxMS4yIDEzLjM5MTFaIiBmaWxsPSIjREFFMkU4Ii8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/banner-icon-1-2.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-2.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA1MyA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ5LjAxNDYgMjQuNDk5NkM0OC43OTM2IDI1LjQ3NDkgNDcuODM2NiAyNi4wNzgzIDQ2Ljg2MTMgMjUuODU3M0w0My4zNTAzIDI1LjA2MTdMNDEuODI1NSAzMS43OTExTDM0Ljg2NTQgMjMuMTM5MUwyMy40NTQ3IDIwLjU1MzRDMjIuNDc5NCAyMC4zMzI1IDIxLjg3NiAxOS4zNzU0IDIyLjA5NyAxOC40MDAyTDI1LjY3NzEgMi42MDA3MUMyNS44OTgxIDEuNjI1NDMgMjYuODU1MSAxLjAyMjAxIDI3LjgzMDQgMS4yNDMwMUw1MS4yMzcgNi41NDY4OEM1Mi4yMTIzIDYuNzY3ODggNTIuODE1NyA3LjcyNDg5IDUyLjU5NDcgOC43MDAxN0w0OS4wMTQ2IDI0LjQ5OTZaIiBmaWxsPSIjREFFMkU4Ii8+CjxwYXRoIGQ9Ik01LjI2NjYgMzguMzc0OEw3LjI1NTU2IDI5LjU5NzNMNS42OTUxMiAyOS4yNDM3QzMuNjQ3MDQgMjguNzc5NiAyLjM2NDc2IDI2Ljc0NiAyLjgyODg1IDI0LjY5NzlMNi40MDg5NyA4Ljg5ODQzQzYuODczMDYgNi44NTAzNSA4LjkwNjcyIDUuNTY4MDcgMTAuOTU0OCA2LjAzMjE2TDM0LjM2MTQgMTEuMzM2QzM2LjQwOTUgMTEuODAwMSAzNy42OTE3IDEzLjgzMzggMzcuMjI3NyAxNS44ODE5TDMzLjY2OTYgMzEuNTgzOEMzMy4yMDU2IDMzLjYzMTkgMzEuMTcxOSAzNC45MTQxIDI5LjEyMzggMzQuNDUwMUwxOC4zOTU4IDMyLjAxOTFMNS4yNjY2IDM4LjM3NDhaTTUuNzk2MjUgMjYuMjg5M0wxMi4wNjI3IDI3LjQ4MjdMMTAuMDAyIDMzLjE2NEwxOC4wMTE5IDI4LjgzMDdMMzAuOTEwMyAzMS41MjY5TDM0LjQwMiAxNC4xMTc1TDEwLjI4OCA4Ljg3OTk0TDUuNzk2MjUgMjYuMjg5M1oiIGZpbGw9IiNEQUUyRTgiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/banner-icon-1-3.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-3.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM5IiBoZWlnaHQ9IjQ1NiIgdmlld0JveD0iMCAwIDMzOSA0NTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMDEuODQgNjAuMjg0M0wzMDMuNzk4IDU1LjkwMjFDMjg3LjYxOCA1OS4xMjE3IDI3My40MDEgNjUuMjYyMiAyNjEuNDUyIDc0LjMxMDhDMjQ0LjYgODcuMDY0IDIzNi4yNjMgMTAyLjUxNiAyMzIuMjIzIDExMy4yMjdDMjMwLjQzMSAxMTguMDAyIDIyOS4wOTcgMTIyLjg5OCAyMjguMzE0IDEyNy42MTRDMjIyLjYzMiAxMjcuMzczIDIxNi4yNjIgMTI4LjMzNiAyMDkuNSAxMzAuNDY1QzE5Ni45OTkgMTM0LjM5MiAxODguMTY2IDE0NC4yNTkgMTgxLjY1NCAxNjEuNTA2QzE3NS45IDE3Ni43NzEgMTcyLjU2OSAxOTUuODg3IDE2OC43MDEgMjE4LjAyQzE2NS4xMiAyMzguNTU2IDE2MS4wNiAyNjEuODM3IDE1NC4yOCAyODQuNjA2QzE0Ni41NjUgMzEwLjYxNiAxMzYuNDQ3IDMzMi4xMDYgMTIzLjM4OSAzNTAuMjhDMTEyLjU5OCAzNjUuMjk1IDk5LjY3MzMgMzc3LjEgODQuOTkzNiAzODUuMzc1QzcyLjIxMDggMzkyLjU2MSA1Ny42ODYyIDM5Ny4yODcgNDEuNzcyIDM5OS40MzNDMjcuNzgzNyA0MDEuMzM0IDEzLjcyNTYgNDAxLjI4NyAwLjAxNDg3OTkgMzk5Ljg0MkwxMC4zOTYzIDQwNC40ODJDMjAuODk1NCA0MDUuMTMgMzEuNjI2OCA0MDQuNzMzIDQyLjMxOTQgNDAzLjI3NUM1OC43MTg2IDQwMS4wNDcgNzMuNzI0MyAzOTYuMTUzIDg2LjkzMjggMzg4LjczMkMxMDIuMTE1IDM4MC4xOTIgMTE1LjQ0MiAzNjguMDEzIDEyNi41NyAzNTIuNTMxQzEzOS44NzQgMzMzLjk5OSAxNTAuMTc1IDMxMi4xNDUgMTU4LjAyIDI4NS43MDJDMTY0Ljg1MSAyNjIuNzIzIDE2OC45NDEgMjM5LjMyOCAxNzIuNTI2IDIxOC42ODdDMTc2LjM1IDE5Ni43NDcgMTc5LjY3MSAxNzcuNzk3IDE4NS4yOTMgMTYyLjg3N0MxOTEuMzM1IDE0Ni44MjUgMTk5LjQwNyAxMzcuNzA0IDIxMC42NjkgMTM0LjE1OUMyMTcuNjgxIDEzMS45NSAyMjMuMzQyIDEzMS4zMyAyMjcuNzYzIDEzMS40NzZDMjI3LjUzOCAxMzMuNjUzIDIyNy40MjQgMTM1Ljc3MyAyMjcuNDM2IDEzNy44QzIyNy41MDQgMTQ1LjE1MyAyMjkuMjQzIDE1MC44NjkgMjMyLjMyNyAxNTMuODY0QzIzNC43OTkgMTU2LjI2OCAyMzguMDQ0IDE1Ni44NDYgMjQxLjQ0NiAxNTUuNDVDMjQ0Ljk5MyAxNTQuMDEzIDI0Ny42MDQgMTUxLjcxIDI0OC45OTkgMTQ4Ljc3OUMyNTAuMzM5IDE0NS45NzIgMjUwLjQ1NiAxNDIuNzQ2IDI0OS4zNDIgMTM5LjY5NEMyNDcuNTMzIDEzNC43NTYgMjQyLjgzNyAxMzAuODI3IDIzNi40MjYgMTI4LjkxOUMyMzUuMDcyIDEyOC41MDYgMjMzLjY2MyAxMjguMjE3IDIzMi4xODcgMTI3Ljk4M0MyMzIuOTUgMTIzLjU5OCAyMzQuMTg3IDExOS4wNjQgMjM1Ljg2MiAxMTQuNTk3QzIzOS43MzEgMTA0LjM2NCAyNDcuNjggODkuNTg5OSAyNjMuNzkgNzcuMzk4OEMyNzQuNjE4IDY5LjIzMjggMjg3LjM2MiA2My41MTk2IDMwMS44NCA2MC4yODQzWk0yMzUuMzI5IDEzMi42NjVDMjQwLjUyOSAxMzQuMjIzIDI0NC4zMTMgMTM3LjI3NiAyNDUuNjg2IDE0MS4wNEMyNDcuMzE5IDE0NS41NTkgMjQ1LjA3NiAxNDkuODE0IDIzOS45NiAxNTEuODkxQzIzOC4wMDYgMTUyLjY3OCAyMzYuMzg5IDE1Mi40MjMgMjM1LjA0OCAxNTEuMTIyQzIzMi43NTggMTQ4Ljg4NSAyMzEuMzk4IDE0NC4wNDEgMjMxLjMzNyAxMzcuODJDMjMxLjMxMiAxMzUuOTE0IDIzMS40MTUgMTMzLjkxNyAyMzEuNjU0IDEzMS44NTJDMjMzLjA1OSAxMzIuMDU1IDIzNC4yNzYgMTMyLjM0MyAyMzUuMzI5IDEzMi42NjVaIiBmaWxsPSIjREFFMkU4Ii8+CjxwYXRoIGQ9Ik0zMzguNzQ5IDQ5Ljc0NkwyODQuODg5IDM4LjI1MTVMMjkyLjYzNyA1Mi42NTgzTDMyNS4wNTQgNTEuNjY5M0wyOTUuNDk4IDU3Ljk3NzRMMjk1LjUwNSA1Ny45OTEyTDI5NS40OTUgNTcuOTc1MkwyODYuNzUxIDY3Ljg5MTdMMjk5Ljg0MSA2Ni4wNTM0TDMwNS4zNDYgNzYuMjg4MkwzMzguNzQ5IDQ5Ljc0NloiIGZpbGw9IiNEQUUyRTgiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/banner-icon-1-4.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-4.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM4IiBoZWlnaHQ9IjMxNiIgdmlld0JveD0iMCAwIDMzOCAzMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMTguMzI4IDg1LjgyODFDMTEzLjQzMyA3NC4zMjA1IDEwNi4wMSA2NC4wMzUgOTYuODY2MyA1Ni4xMTlDODkuMDgzNyA0OS4zNTMgNzkuNzQ4IDQ0LjA4MjEgNjkuNjkwNiA0MC43MDM2TDcxLjc2OTEgMzcuMTc3M0M4Mi4xNCA0MC44MSA5MS41MTQxIDQ2LjE3MzEgOTkuNDkyOSA1My4wNzc5QzEwOS4wOTIgNjEuNDAxMiAxMTYuODc0IDcyLjE3NyAxMjIuMDE3IDg0LjI0NzZDMTI3LjE1OSA5Ni4zMTgyIDEyOS41MDIgMTA5LjQwNCAxMjguODI5IDEyMi4xMDNDMTI4LjY0NCAxMjUuNjggMTI4LjIxMyAxMjkuMjAzIDEyNy41NjEgMTMyLjY2N0MxMzguNzg1IDE0NyAxNDUuODcxIDE2My44MzIgMTUxLjgxOSAxODAuMDRDMTUzLjI3MyAxODMuOTggMTU0LjY5NCAxODguMDE2IDE1Ni4wNjMgMTkxLjkwNUMxNjEuMTAyIDIwNi4xMTcgMTY2LjMwNSAyMjAuNzk2IDE3My42MTUgMjM0LjE0NEMxODEuODYxIDI0OS4yMDMgMTkzLjI4MyAyNjMuMDA0IDIwNi42NDggMjc0LjA1OEMyMjAuMzg1IDI4NS40MjMgMjM1LjY2IDI5My43MDggMjUyLjA2IDI5OC42NjlDMjU4Ljc5MyAzMDAuNjkxIDI2NS43IDMwMi4xNDIgMjcyLjYxMiAzMDIuOTk1TDI3MC40MTEgMzA2LjcyOEMyNjMuNzgzIDMwNS43ODcgMjU3LjMwMSAzMDQuNDAxIDI1MC45MTIgMzAyLjQ2NkMyNDAuOTE5IDI5OS40NSAyMzEuMzE0IDI5NS4yMjUgMjIyLjIzNCAyODkuODczQzIxNS45NCAyODYuMTY0IDIwOS44ODIgMjgxLjg5NyAyMDQuMSAyNzcuMTIyQzE5MC4zNjMgMjY1Ljc1NyAxNzguNjAzIDI1MS41NDcgMTcwLjExIDIzNi4wNDJDMTYyLjY1OCAyMjIuNDI0IDE1Ny4zODUgMjA3LjU4OCAxNTIuMzEgMTkzLjI0QzE1MC45NDIgMTg5LjM1IDE0OS41MTEgMTg1LjMzMiAxNDguMDYzIDE4MS40MTlDMTQyLjU4IDE2Ni41MDUgMTM2LjE1NiAxNTEuMTA2IDEyNi40MDIgMTM3Ljc3OEMxMjMuMDQgMTUwLjY3NyAxMTYuNDY4IDE2Mi4xMDEgMTA3LjQwMSAxNzAuNDA4QzEwMC42ODMgMTc2LjU3NyA5Mi40MjE0IDE4MS4wMDIgODMuNTE2MiAxODMuMjE3Qzc0LjI4MyAxODUuNTE2IDY0Ljk4NTYgMTg1LjI1MSA1Ni42MTY5IDE4Mi40MjhDNDguMDQ1OSAxNzkuNTU0IDQwLjQwNzEgMTczLjY4NCAzNS4wNTQ3IDE2NS45NEMyOS41NzM5IDE1Ny45ODEgMjcuMTA2NyAxNDguNzYyIDI4LjA3MzIgMTM5Ljk2OEMyOS4xMzg4IDEzMC4yNTkgMzQuMzM3NiAxMjEuMDg1IDQyLjcxMDIgMTE0LjE1M0M1MC42MjY5IDEwNy42MDEgNjAuODg0MSAxMDMuNTY0IDcwLjg3NzYgMTAzLjA4QzgwLjU1NjMgMTAyLjYyIDkwLjM1NDggMTA0LjgyNiA5OS45NDcxIDEwOS42MjJDMTA4LjYzMiAxMTMuOTUzIDExNi44NDMgMTIwLjM0NiAxMjMuNjk5IDEyOC4wOTVDMTIzLjg0NyAxMjguMjc2IDEyNC4wMDYgMTI4LjQzOSAxMjQuMTU1IDEyOC42MTlDMTI0LjQ3NyAxMjYuNDIyIDEyNC42ODUgMTI0LjE4IDEyNC44MDUgMTIxLjkzM0MxMjUuNDY1IDEwOS44MDYgMTIzLjIyMyA5Ny4zMzU3IDExOC4zMjggODUuODI4MVpNMTIwLjczMyAxMzAuNzI4QzExNC4yMDkgMTIzLjM2IDEwNi40MDUgMTE3LjI5OSA5OC4xNzAxIDExMy4xODdDODkuMTgyOCAxMDguNzAxIDgwLjA2MzMgMTA2LjY0IDcxLjA3NiAxMDcuMDY4QzYxLjk0NDkgMTA3LjUwNCA1Mi41MzQxIDExMS4yMDUgNDUuMjgwOSAxMTcuMjIxQzM3LjcxNDcgMTIzLjQ5MyAzMy4wMTg5IDEzMS43MzUgMzIuMDYxNyAxNDAuMzk1QzMwLjI5NDIgMTU2LjM2NiA0MS42NTk3IDE3My4xNzEgNTcuOTE2NCAxNzguNjUxQzY1LjU1MDQgMTgxLjIyNiA3NC4wODA3IDE4MS40NTYgODIuNTc1OCAxNzkuMzQ4QzkwLjgzNTEgMTc3LjI4NiA5OC40ODMxIDE3My4xOTUgMTA0LjcyMiAxNjcuNDg1QzExMy45MjIgMTU5LjA3IDEyMC4zOTQgMTQ3LjE0NyAxMjMuMjczIDEzMy43MzJDMTIyLjQ1IDEzMi42OSAxMjEuNTk3IDEzMS43MDEgMTIwLjczMyAxMzAuNzI4WiIgZmlsbD0iI0RBRTJFOCIvPgo8cGF0aCBkPSJNMzMuOTk5MyAyNi42MDUxTDg1LjEzMTQgMjAuMzQzOEw3Ni43MjIzIDMzLjEyNzFMNDYuNjAwNCAyOS41MjgyTDczLjYxNzcgMzcuODQ2OEw3My42MDk3IDM3Ljg1OUw3My42MjAyIDM3Ljg0NDlMODAuOTQ4MiA0Ny44MDY2TDY4LjkwMzYgNDUuMDEyN0w2Mi45Mjk4IDU0LjA5NDFMMzMuOTk5MyAyNi42MDUxWiIgZmlsbD0iI0RBRTJFOCIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/banner-icon-1-5.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-5.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-icon-1-5-6f6037481c286ac1b5b7ede808e0a314.svg";

/***/ }),

/***/ "./src/assets/banner-icon-1-6.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-6.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-icon-1-6-0de6ddc0c0bb50bda0b3e0348e02891f.svg";

/***/ }),

/***/ "./src/assets/banner-logo.png":
/*!************************************!*\
  !*** ./src/assets/banner-logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-logo-a6a75831491ef4eeff69f806e88906f8.png";

/***/ }),

/***/ "./src/assets/blog-1-1.png":
/*!*********************************!*\
  !*** ./src/assets/blog-1-1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-1-1-d86f9e76171d4076536f2b5bd12ea54c.png";

/***/ }),

/***/ "./src/assets/blog-1-2.png":
/*!*********************************!*\
  !*** ./src/assets/blog-1-2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-1-2-c2b2210ffbf19096a63e88517589962a.png";

/***/ }),

/***/ "./src/assets/blog-1-3.png":
/*!*********************************!*\
  !*** ./src/assets/blog-1-3.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-1-3-00722a86a6fc65f08db8c1d043eb8121.png";

/***/ }),

/***/ "./src/assets/blog-1-4.png":
/*!*********************************!*\
  !*** ./src/assets/blog-1-4.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-1-4-0b516e1514e67dc24dec5e71bd8f52e7.png";

/***/ }),

/***/ "./src/assets/call-image.png":
/*!***********************************!*\
  !*** ./src/assets/call-image.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/call-image-0322bd43c52fb16fe81fdc165368f6b9.png";

/***/ }),

/***/ "./src/assets/dot-pattern.svg":
/*!************************************!*\
  !*** ./src/assets/dot-pattern.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dot-pattern-4ba98265d9e86ed2f3a83bf546338e1b.svg";

/***/ }),

/***/ "./src/assets/jackpot-1-1.png":
/*!************************************!*\
  !*** ./src/assets/jackpot-1-1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/jackpot-1-2.png":
/*!************************************!*\
  !*** ./src/assets/jackpot-1-2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/jackpot.png":
/*!********************************!*\
  !*** ./src/assets/jackpot.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/jackpot-863e783244002e4d9142bfff4bc475db.png";

/***/ }),

/***/ "./src/assets/logo-light.svg":
/*!***********************************!*\
  !*** ./src/assets/logo-light.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-light-ace59116dba39942f71e81c03ee4d4f6.svg";

/***/ }),

/***/ "./src/assets/muhammadadilriaz.svg":
/*!*****************************************!*\
  !*** ./src/assets/muhammadadilriaz.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/muhammadadilriaz-54a3e0ca0f0d933c0dc665ad5e78dc39.svg";

/***/ }),

/***/ "./src/assets/price-arrow.svg":
/*!************************************!*\
  !*** ./src/assets/price-arrow.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEuMTI0MjIgMTAuMjYyNEwxLjA5MyAxMC4yNTU2SDE0LjQ3NjFMMTAuMjY4OSAxNC40NzJDMTAuMDYyOSAxNC42Nzc5IDkuOTQ5OTEgMTQuOTU2NyA5Ljk0OTkxIDE1LjI0OTRDOS45NDk5MSAxNS41NDIxIDEwLjA2MjkgMTUuODE5IDEwLjI2ODkgMTYuMDI1NEwxMC45MjM2IDE2LjY4MDNDMTEuMTI5NCAxNi44ODYyIDExLjQwMzcgMTcgMTEuNjk2MyAxN0MxMS45ODg5IDE3IDEyLjI2MzQgMTYuODg3IDEyLjQ2OTMgMTYuNjgxMUwxOS42ODExIDkuNDY5OTJDMTkuODg3OCA5LjI2MzI1IDIwLjAwMDggOC45ODc5NyAyMCA4LjY5NTEyQzIwLjAwMDggOC40MDA2NSAxOS44ODc4IDguMTI1MiAxOS42ODExIDcuOTE4ODZMMTIuNDY5MyAwLjcwNjk5MkMxMi4yNjM0IDAuNTAxMzAxIDExLjk4OTEgMC4zODgxMyAxMS42OTYzIDAuMzg4MTNDMTEuNDAzNyAwLjM4ODEzIDExLjEyOTQgMC41MDE0NjMgMTAuOTIzNiAwLjcwNjk5MkwxMC4yNjg5IDEuMzYxOTVDMTAuMDYyOSAxLjU2NzQ4IDkuOTQ5OTEgMS44NDE5NSA5Ljk0OTkxIDIuMTM0NjNDOS45NDk5MSAyLjQyNzE1IDEwLjA2MjkgMi42ODcxNSAxMC4yNjg5IDIuODkyODVMMTQuNTIzNiA3LjEzMjg0SDEuMTA5MjZDMC41MDY1IDcuMTMyODQgLTQuMjE3MTVlLTA2IDcuNjUyMzYgLTQuMjE3MTVlLTA2IDguMjU0OFY5LjE4MTE0Qy00LjIxNzE1ZS0wNiA5Ljc4MzU4IDAuNTIxNDU5IDEwLjI2MjQgMS4xMjQyMiAxMC4yNjI0WiIgZmlsbD0iIzYzNjg3OSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/price-check.svg":
/*!************************************!*\
  !*** ./src/assets/price-check.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05Ljk5OTk2IDBDNC40ODYwOCAwIDAgNC40ODU0OCAwIDkuOTk5OTlDMCAxNS41MTQgNC40ODYwOCAyMCA5Ljk5OTk2IDIwQzE1LjUxMzggMjAgMjAgMTUuNTE0IDIwIDkuOTk5OTlDMjAgNC40ODU0OCAxNS41MTM4IDAgOS45OTk5NiAwWk0xNS41NzUgNi42NjQ1M0w5LjQyMTEyIDEzLjU4NzZDOS4yNjk2IDEzLjc1ODYgOS4wNTg0NiAxMy44NDYyIDguODQ1NzEgMTMuODQ2MkM4LjY3NjkxIDEzLjg0NjIgOC41MDczMSAxMy43OTA4IDguMzY1NCAxMy42Nzc0TDQuNTE5MTYgMTAuNjAwNUM0LjE4NzYxIDEwLjMzNTUgNC4xMzM4NCA5Ljg1MTYxIDQuMzk5MjEgOS41MTkzNkM0LjY2NDI2IDkuMTg3MSA1LjE0ODggOS4xMzM4OCA1LjQ4MDM1IDkuMzk5NDZMOC43NTYxIDEyLjAxOTNMMTQuNDI0OSA1LjY0MjQ4QzE0LjcwNjYgNS4zMjQ3MyAxNS4xOTM0IDUuMjk2MjMgMTUuNTEwNyA1LjU3ODQ5QzE1LjgyODQgNS44NjEzIDE1Ljg1NzMgNi4zNDY3OCAxNS41NzUgNi42NjQ1M1oiIGZpbGw9IiMzRkRCQjEiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/price-cross.svg":
/*!************************************!*\
  !*** ./src/assets/price-cross.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjAwMDggMEM0LjQ3ODE2IDAgMC4wMDEwMDcwOCA0LjQ3NzIyIDAuMDAxMDA3MDggOS45OTk5QzAuMDAxMDA3MDggMTUuNTIyNCA0LjQ3ODEgMjAgMTAuMDAwNyAyMEMxNS41MjMzIDIwIDIwLjAwMDkgMTUuNTIyNCAyMC4wMDA5IDkuOTk5OUMyMC4wMDA5IDQuNDc3MjIgMTUuNTIzNCAwIDEwLjAwMDggMFpNMTMuNzczMSAxMy44MTEzQzEzLjM3MzggMTQuMjEwMiAxMi43MjcgMTQuMjEwMiAxMi4zMjgxIDEzLjgxMTNMMTAuMDUyNiAxMS41MzU4TDcuNjczNiAxMy45MTQ5QzcuMjc0NTQgMTQuMzEzOCA2LjYyNzY3IDE0LjMxMzggNi4yMjg4MSAxMy45MTQ5QzUuODI5NTUgMTMuNTE1NSA1LjgyOTU1IDEyLjg2ODggNi4yMjg4MSAxMi40Njk1TDguNjA3NjYgMTAuMDkwN0w2LjM5Mjc0IDcuODc1OTJDNS45OTM4MSA3LjQ3NjUzIDUuOTkzODEgNi44Mjk4NiA2LjM5Mjc0IDYuNDMwNzRDNi43OTE4MSA2LjAzMTY3IDcuNDM4OCA2LjAzMTY3IDcuODM3OTMgNi40MzA3NEwxMC4wNTI3IDguNjQ1NTFMMTIuMTY0MSA2LjUzNEMxMi41NjMxIDYuMTM1MDcgMTMuMjEwMyA2LjEzNDk0IDEzLjYwOTEgNi41MzRDMTQuMDA4MyA2LjkzMzQgMTQuMDA4MyA3LjU4MDQ2IDEzLjYwOTEgNy45NzkxOUwxMS40OTc5IDEwLjA5MDZMMTMuNzczMiAxMi4zNjZDMTQuMTcyMSAxMi43NjQ5IDE0LjE3MjMgMTMuNDEyMSAxMy43NzMxIDEzLjgxMTNaIiBmaWxsPSIjQ0VEN0UxIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/price-user-1-1.svg":
/*!***************************************!*\
  !*** ./src/assets/price-user-1-1.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzMiIGhlaWdodD0iNjUiIHZpZXdCb3g9IjAgMCA3MyA2NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTY5LjQxMDcgNDQuMzE3N0w2OS40MTExIDQ0LjMxNzlDNzEuMzA3OSA0NS40MDYzIDcyLjUwMDUgNDcuNTAwOSA3Mi41MDA0IDQ5Ljc5MjZWNjIuNzEyN0M3Mi41MDA0IDYzLjcwMDUgNzEuNzAxNiA2NC40OTkzIDcwLjcxMzggNjQuNDk5M0g1OS43ODFWNjAuOTI2Mkg2OC40MjcySDY4LjkyNzJWNjAuNDI2MlY0OS43OTI3QzY4LjkyNzIgNDguODEwMSA2OC40NTIyIDQ3Ljg4ODMgNjcuNjM0IDQ3LjQxNjdMNjcuNjMzNSA0Ny40MTY0QzY0LjU3OTkgNDUuNjYxOCA2MS4yOTIzIDQ0LjMyNjUgNTcuODc4NiA0My4zNjM1QzU2Ljg4NjQgNDEuNzk2NSA1NS41NTMzIDQwLjQzODcgNTMuODk2NSAzOS40ODUxTDUzLjg5NjMgMzkuNDg1QzUzLjM1MDYgMzkuMTcxMyA1Mi43OTIxIDM4Ljg4MTIgNTIuMjI4MyAzOC42MDU4QzU4LjMzMSAzOS40MTczIDY0LjE4MjkgNDEuMzEyMSA2OS40MTA3IDQ0LjMxNzdaIiBmaWxsPSIjOEQ0NDhCIiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik01MS4yODggNDQuMzE3OUM1My4xODc2IDQ1LjQxMDcgNTQuMzc3OCA0Ny41MDM3IDU0LjM3NzggNDkuNzkwOFY2Mi43MTMxQzU0LjM3NzggNjMuNzAwOSA1My41NzkgNjQuNDk5NyA1Mi41OTEyIDY0LjQ5OTdIMi4yODY2QzEuMjk4ODIgNjQuNDk5NyAwLjUgNjMuNzAwOSAwLjUgNjIuNzEzMVY0OS43OTNDMC41IDQ3LjUwMzYgMS42OTAyNiA0NS40MTA4IDMuNTg5NjkgNDQuMzE4TDUxLjI4OCA0NC4zMTc5Wk01MS4yODggNDQuMzE3OUMzNy4wNDg2IDM2LjEzMTIgMTcuODI5NSAzNi4xMzEyIDMuNTg5ODEgNDQuMzE3OUg1MS4yODhaTTUwLjMwNDggNjAuOTI2NUg1MC44MDQ4VjYwLjQyNjVWNDkuNzkwOEM1MC44MDQ4IDQ4LjgxMDEgNTAuMzI5NiA0Ny44ODgyIDQ5LjUwODkgNDcuNDE2OEMzNi4zNDA4IDM5Ljg0NzYgMTguNTM3MiAzOS44NDc2IDUuMzY5MTQgNDcuNDE2OEM0LjU0ODQ1IDQ3Ljg4ODMgNC4wNzMzMyA0OC44MTAzIDQuMDczMzMgNDkuNzkzVjYwLjQyNjVWNjAuOTI2NUg0LjU3MzMzSDUwLjMwNDhaIiBmaWxsPSIjOEQ0NDhCIiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik00NS41NjIyIDMyLjQ4NzdDNDQuMzQyNiAzMi40ODc3IDQzLjEzOSAzMi4zMDAzIDQxLjk1NCAzMS45OTJDNDIuOTUxMyAzMS4wMzQxIDQzLjg3MzIgMjkuOTkzIDQ0LjY2NzEgMjguODM5NkM0NC45NDM1IDI4Ljg3NDcgNDUuMjU5OSAyOC45MTQ2IDQ1LjU2MjIgMjguOTE0NkM1Mi4xNDIgMjguOTE0NiA1Ny40OTUxIDIzLjU2MTYgNTcuNDk1MSAxNi45ODE4QzU3LjQ5NTEgMTAuNDAyIDUyLjE0MjIgNS4wNDg5MSA0NS41NjIyIDUuMDQ4OTFDNDUuMjU5NiA1LjA0ODkxIDQ0Ljk0MzUgNS4wODg1OSA0NC42NjY5IDUuMTIzNThDNDMuODcyOSAzLjk3MDIxIDQyLjk1MSAyLjkyOTI3IDQxLjk1MzcgMS45NzEyNUM0My4xMzg3IDEuNjYyOTYgNDQuMzQyNCAxLjQ3NTU5IDQ1LjU2MjIgMS40NzU1OUM1NC4xMTA5IDEuNDc1NTkgNjEuMDY4MyA4LjQzMjk0IDYxLjA2ODMgMTYuOTgxNkM2MS4wNjgzIDI1LjUzMDMgNTQuMTEwOCAzMi40ODc3IDQ1LjU2MjIgMzIuNDg3N1oiIGZpbGw9IiM4RDQ0OEIiIHN0cm9rZT0id2hpdGUiLz4KPHBhdGggZD0iTTQyLjk0NSAxNi45ODE3QzQyLjk0NSAyNS41MzA0IDM1Ljk4NzUgMzIuNDg3NyAyNy40Mzg5IDMyLjQ4NzdDMTguODkwNCAzMi40ODc3IDExLjkzMjkgMjUuNTMwNCAxMS45MzI5IDE2Ljk4MTdDMTEuOTMyOSA4LjQzMjk1IDE4Ljg5MDIgMS40NzU1OSAyNy40Mzg5IDEuNDc1NTlDMzUuOTg3NiAxLjQ3NTU5IDQyLjk0NSA4LjQzMjk1IDQyLjk0NSAxNi45ODE3Wk0zOS4zNzE4IDE2Ljk4MTdDMzkuMzcxOCAxMC40MDE5IDM0LjAxODkgNS4wNDg3OSAyNy40Mzg5IDUuMDQ4NzlDMjAuODU5MiA1LjA0ODc5IDE1LjUwNjEgMTAuNDAxOSAxNS41MDYxIDE2Ljk4MTdDMTUuNTA2MSAyMy41NjE1IDIwLjg1OTIgMjguOTE0NSAyNy40Mzg5IDI4LjkxNDVDMzQuMDE4NyAyOC45MTQ1IDM5LjM3MTggMjMuNTYxNSAzOS4zNzE4IDE2Ljk4MTdaIiBmaWxsPSIjOEQ0NDhCIiBzdHJva2U9IndoaXRlIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/price-user-1-2.svg":
/*!***************************************!*\
  !*** ./src/assets/price-user-1-2.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iNjUiIHZpZXdCb3g9IjAgMCA4NCA2NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTY5LjQxMDcgNDQuMzE3N0w2OS40MTExIDQ0LjMxNzlDNzEuMzA3OSA0NS40MDYzIDcyLjUwMDUgNDcuNTAwOSA3Mi41MDA0IDQ5Ljc5MjZWNjIuNzEyN0M3Mi41MDA0IDYzLjcwMDUgNzEuNzAxNiA2NC40OTkzIDcwLjcxMzggNjQuNDk5M0g1OS43ODFWNjAuOTI2Mkg2OC40MjcySDY4LjkyNzJWNjAuNDI2MlY0OS43OTI3QzY4LjkyNzIgNDguODEwMSA2OC40NTIyIDQ3Ljg4ODMgNjcuNjM0IDQ3LjQxNjdMNjcuNjMzNSA0Ny40MTY0QzY0LjU3OTkgNDUuNjYxOCA2MS4yOTIzIDQ0LjMyNjUgNTcuODc4NiA0My4zNjM1QzU2Ljg4NjQgNDEuNzk2NSA1NS41NTMzIDQwLjQzODcgNTMuODk2NSAzOS40ODUxTDUzLjg5NjMgMzkuNDg1QzUzLjM1MDYgMzkuMTcxMyA1Mi43OTIxIDM4Ljg4MTIgNTIuMjI4MyAzOC42MDU4QzU4LjMzMSAzOS40MTczIDY0LjE4MjkgNDEuMzEyMSA2OS40MTA3IDQ0LjMxNzdaIiBmaWxsPSIjOEQ0NDhCIiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik01MS4yODggNDQuMzE3OUM1My4xODc2IDQ1LjQxMDcgNTQuMzc3OCA0Ny41MDM3IDU0LjM3NzggNDkuNzkwOFY2Mi43MTMxQzU0LjM3NzggNjMuNzAwOSA1My41NzkgNjQuNDk5NyA1Mi41OTEyIDY0LjQ5OTdIMi4yODY2QzEuMjk4ODIgNjQuNDk5NyAwLjUgNjMuNzAwOSAwLjUgNjIuNzEzMVY0OS43OTNDMC41IDQ3LjUwMzYgMS42OTAyNiA0NS40MTA4IDMuNTg5NjkgNDQuMzE4TDUxLjI4OCA0NC4zMTc5Wk01MS4yODggNDQuMzE3OUMzNy4wNDg2IDM2LjEzMTIgMTcuODI5NSAzNi4xMzEyIDMuNTg5ODEgNDQuMzE3OUg1MS4yODhaTTUwLjMwNDggNjAuOTI2NUg1MC44MDQ4VjYwLjQyNjVWNDkuNzkwOEM1MC44MDQ4IDQ4LjgxMDEgNTAuMzI5NiA0Ny44ODgyIDQ5LjUwODkgNDcuNDE2OEMzNi4zNDA4IDM5Ljg0NzYgMTguNTM3MiAzOS44NDc2IDUuMzY5MTQgNDcuNDE2OEM0LjU0ODQ1IDQ3Ljg4ODMgNC4wNzMzMyA0OC44MTAzIDQuMDczMzMgNDkuNzkzVjYwLjQyNjVWNjAuOTI2NUg0LjU3MzMzSDUwLjMwNDhaIiBmaWxsPSIjOEQ0NDhCIiBzdHJva2U9IndoaXRlIi8+CjxwYXRoIGQ9Ik00NS41NjIyIDMyLjQ4NzdDNDQuMzQyNiAzMi40ODc3IDQzLjEzOSAzMi4zMDAzIDQxLjk1NCAzMS45OTJDNDIuOTUxMyAzMS4wMzQxIDQzLjg3MzIgMjkuOTkzIDQ0LjY2NzEgMjguODM5NkM0NC45NDM1IDI4Ljg3NDcgNDUuMjU5OSAyOC45MTQ2IDQ1LjU2MjIgMjguOTE0NkM1Mi4xNDIgMjguOTE0NiA1Ny40OTUxIDIzLjU2MTYgNTcuNDk1MSAxNi45ODE4QzU3LjQ5NTEgMTAuNDAyIDUyLjE0MjIgNS4wNDg5MSA0NS41NjIyIDUuMDQ4OTFDNDUuMjU5NiA1LjA0ODkxIDQ0Ljk0MzUgNS4wODg1OSA0NC42NjY5IDUuMTIzNThDNDMuODcyOSAzLjk3MDIxIDQyLjk1MSAyLjkyOTI3IDQxLjk1MzcgMS45NzEyNUM0My4xMzg3IDEuNjYyOTYgNDQuMzQyNCAxLjQ3NTU5IDQ1LjU2MjIgMS40NzU1OUM1NC4xMTA5IDEuNDc1NTkgNjEuMDY4MyA4LjQzMjk0IDYxLjA2ODMgMTYuOTgxNkM2MS4wNjgzIDI1LjUzMDMgNTQuMTEwOCAzMi40ODc3IDQ1LjU2MjIgMzIuNDg3N1oiIGZpbGw9IiM4RDQ0OEIiIHN0cm9rZT0id2hpdGUiLz4KPHBhdGggZD0iTTgxLjIwMDcgNDIuMTM5NUw4MS4yMDA4IDQyLjEzOTZDODIuNzY3NiA0My4wNDc5IDgzLjc1MDEgNDQuNzk0MiA4My43NSA0Ni43MDE3VjU3LjE1MDdDODMuNzUgNTguMDM3MyA4My4wNDA5IDU4Ljc1IDgyLjE2OTggNTguNzVINzMuMjY4OFY1NS41NTE1SDgwLjMzOTZIODAuNTg5NlY1NS4zMDE1VjQ2LjcwMTdDODAuNTg5NiA0NS45NTU5IDgwLjIzMyA0NS4yNjUzIDc5LjYzMDYgNDQuOTE0NUw3OS42MzA0IDQ0LjkxNDNDNzcuMTgxNSA0My40OTI2IDc0LjU0MjYgNDIuNDEyMiA3MS44MDA4IDQxLjYzNTJDNzEuMDE1MiA0MC4zNjU3IDY5Ljk1NDkgMzkuMjY3NSA2OC42MzUgMzguNDk5OUw2OC42MzQ5IDM4LjQ5OThDNjcuOTI3NiAzOC4wODkxIDY3LjE5MzQgMzcuNzI4NyA2Ni40NTQ5IDM3LjM4NjNDNzEuNjk0OCAzNy45Njc5IDc2LjczMDYgMzkuNTQyNyA4MS4yMDA3IDQyLjEzOTVaIiBmaWxsPSIjOEQ0NDhCIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8cGF0aCBkPSJNNTguNTAwOCA3LjczMDgzQzU5LjU3NjkgNy40MzQ4IDYwLjY3NjIgNy4yNSA2MS43OTQ2IDcuMjVDNjguOTQwOSA3LjI1IDc0Ljc1IDEyLjk3NDMgNzQuNzUgMjBDNzQuNzUgMjcuMDI1NyA2OC45NDA4IDMyLjc1IDYxLjc5NDYgMzIuNzVDNjAuNjc2NCAzMi43NSA1OS41NzcyIDMyLjU2NTIgNTguNTAxMSAzMi4yNjkyQzU5LjQxOTYgMzEuNDIzMSA2MC4yNjQgMzAuNDk4NiA2MC45NzY5IDI5LjQ2MzdDNjEuMDExOSAyOS40Njc5IDYxLjA0NzUgMjkuNDcyNCA2MS4wODM2IDI5LjQ3NjlDNjEuMzA5NiAyOS41MDUxIDYxLjU1NDkgMjkuNTM1OCA2MS43OTQ2IDI5LjUzNThDNjcuMTI5NiAyOS41MzU4IDcxLjQ3NyAyNS4yNjE2IDcxLjQ3NyAyMC4wMDAxQzcxLjQ3NyAxNC43Mzg2IDY3LjEyOTcgMTAuNDY0NCA2MS43OTQ2IDEwLjQ2NDRDNjEuNTU0MiAxMC40NjQ0IDYxLjMwODYgMTAuNDk1IDYxLjA4MjEgMTAuNTIzMkM2MS4wNDY1IDEwLjUyNzcgNjEuMDExMyAxMC41MzIgNjAuOTc2NyAxMC41MzYyQzYwLjI2MzcgOS41MDEyNSA1OS40MTkzIDguNTc2OTkgNTguNTAwOCA3LjczMDgzWiIgZmlsbD0iIzhENDQ4QiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPHBhdGggZD0iTTQyLjk0NSAxNi45ODE3QzQyLjk0NSAyNS41MzA0IDM1Ljk4NzUgMzIuNDg3NyAyNy40MzkgMzIuNDg3N0MxOC44OTA0IDMyLjQ4NzcgMTEuOTMyOSAyNS41MzA0IDExLjkzMjkgMTYuOTgxN0MxMS45MzI5IDguNDMyOTUgMTguODkwMyAxLjQ3NTU5IDI3LjQzOSAxLjQ3NTU5QzM1Ljk4NzYgMS40NzU1OSA0Mi45NDUgOC40MzI5NSA0Mi45NDUgMTYuOTgxN1pNMzkuMzcxOCAxNi45ODE3QzM5LjM3MTggMTAuNDAxOSAzNC4wMTg5IDUuMDQ4NzkgMjcuNDM5IDUuMDQ4NzlDMjAuODU5MiA1LjA0ODc5IDE1LjUwNjEgMTAuNDAxOSAxNS41MDYxIDE2Ljk4MTdDMTUuNTA2MSAyMy41NjE1IDIwLjg1OTIgMjguOTE0NSAyNy40MzkgMjguOTE0NUMzNC4wMTg3IDI4LjkxNDUgMzkuMzcxOCAyMy41NjE1IDM5LjM3MTggMTYuOTgxN1oiIGZpbGw9IiM4RDQ0OEIiIHN0cm9rZT0id2hpdGUiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/assets/service-1.png":
/*!**********************************!*\
  !*** ./src/assets/service-1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAA4VBMVEUAAADwNkHwNUHwNkDvNkDvNUDvNEDwNkHvNEDvNEDvMEDxNkDvM0DxNkLxNkDwNUHwNkLvN0DvQEDvNEDvNkDwNkDxNUDwNkH/////fYXMGybzT1ntND7RHinkLDfbJTD95uf7tLjfKTT2gYj+8vP9ztD4m6D/jZT+eID9dH36YmvxQ03yP0nrMTzOHCj5cnrSJzLWIiz/7/D/rrLzZm/4WWPfP0rxO0X/3d/4p6z3jpTrVl/aNUD/9/j/vsL/naP/hYz7a3T4Xmf3VV7mTFb/xsr6wMP/pavvXmfiRVDTJzLmo1loAAAAF3RSTlMA3++/gGAgkEAwEJ9Qf3/Pr3AQcLCvb+z2RQkAAALiSURBVFjDtZnZcuIwEEUly8Y2NgMkkxE2CWsICVkJCVlnSTL7/3/QUOOHxo6llkVz3iiqTnW1btuSzHSE3m7UEpw7MofDuRC+G4fMgnrgNyWK8ON6JW0gHGlKyzMutgFWI3ijZq4lV3ugrabWN6QmpDWRpuiAyw3gyvh9khvSKPd+kBvToPaCmdgLtIveUBIRFHLGqcQ8n7pIkiFy8yYJ8WgbATh12kQALnXBUDIUvJ2SObXYUUSCakpa0ozueNytkuW6oXbYWTHsmi9fLA04PTrsZDx0TXvhG2szBo8Sx1+JhcQYDzo5BmOJ0VyJJcLNpPOOwaVEYCysogV+Iq0OWYxEQQEWEI+5yJopwALSZr6NFg9IxAQSBQVYQD6qxNBchIliqFWPtompeKh4pzJO2woQO1LFI6o+PDpVP5J1KX5AtWpATDgguPhsNr0v195/nZ1Zi+9uj5Mk+XVdpk1WvOrUTKvNWBTU14sk4+TNQtw9SYDhmvrzl2/wx0m3qniW5Jj+yGuBl4ril6TAdPJ/gKdJgZl1K0C9WIC2eiuAN1ArOL69s4rb2SuqtR8QtddiQIDz/tXvcu3Nc//cWrw/ukjT9PmyTJuu0KqZo9NmLAvqy2WacTBSeh3lg753kAJ/1tTH39f+OejJim+Qfprj6imvBeYqsZClzNO0TP10lRboq16mLawVoF4u/8IvpBVCcyYdgVrBxWhfvY/d1cStj2qVuHC0qarWD0iMbWP35+XaeQ/bxjIJ4KsIWgTGWFMaqyEKGAI/3EBAYM3MDjeBBJBVBC1GvBLXHWmmhijg1Bmcx3B1r4dpYdvNoBdkwO2NQ+3lLMOlFruZ12j57K7eXPKCoWTSgrd9oQdZJiHa/qUp7ZSErECbOBGAS+0FM5WX3txmCsLNPrAETEktsveKGtPhWRbteAyh5nILrbsDBjI1aHG8PXOrCFgVdmJf4NamH+wwC8LY9UX55+O9aNcLmYZ/LJFt9G1UvkEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/service-2.png":
/*!**********************************!*\
  !*** ./src/assets/service-2.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAw1BMVEUAAAB1Mcx1Mcx0MMtwMM91Mcx2Ms10MMt0Mcx1MMp0MMx1MM10Mc10MMt0MMx4MMdwMMd1MMp1Msx0Mcx2Ms11MMt2MsxwMMp2Mcx1Mcz///+5g/+wefl+O9N9Ps/38vy0fvx5NtC6mOWWWOWPV9aCQNbl2fasc/aiZ+6GStPu5fndy/Kpft+OUN+HRtqGS9Pcy/KobvLLsuybX+mXZNnu5vnLseyxi+KXZdnu5fjUvu/Cpenl2PXUv+/Cpeixi+OgcdxnmzggAAAAGXRSTlMA37+AEO9/QO8wkGCfcFAgIGCvz4+wrzDPCK3t3gAAAvtJREFUWMO12elaozAUgOEk0FKWUveZQ1lasSOj3eu4znb/VzU+ZPC0QkiI8ftl/7zPMYYIlLTl+sPgglE6gIN6lDJ2ZoUu0ch2zk5BGjsL7U6swwag2sWx8rB9VJWi/SN11jjtI9uNbl+QIwbaBS1DOxQ+EBVuvyF8sH6z2wcwK6NrVEbXSMPasQCGct7tM2oKpoe7LgBjsX3XB4Mdm10IrGeb3RGYZXpgHBkH/pyRqWm4V9sSZq+SE+jY1eU6i6Kf94/te9nuyKbbqOr2e9ufL+w47o8Iy+Yta+F1c7PooL/QmPcKMw0Xy5pX4+srrOVmT9VPz9AYIV803OxPCjD/v9gpNOWSsLt7w3/9Ff/4IDjiLB2Xd1l+vBf8i/K0XVjxzQxNBcqbYlVzIW2Bz5Xh+VOGLu+xBWZdjrb0brvmLo9f27+hKcphrS6jsjsBPFAxpnkRx/EmT+ruDQiOZBV2N64qEnR5omNIAZ7FYyxODt0X0IZnk/F+k2Tf/ZbqwehieauLsLJbLchO6iIsdyf5FGBR2jOZi7DcjRNIVwDJZhznchdhuZuuq6tZ7iIsd+GhvBbmV6vHNbpSWO7CbYShK4PlLvyqu7pwgi6e8lJXDicxurX7lG0K2nCBLm+1rdj1HSgkODaTNxdL5y+3z/cPSiz0BAf9Dl29qADelPACsHxcLJbJVB1m0FS5JSYHLm+mCDPBbTdfibp7PVWGg5aJ9V3wBG8/rktnqe2CRfzWXaHrQii4jV1yKl5MYVlouOASAoL9hmm4QAg5FZ9B+i4TP9wsNF18uHGguWU8xopuLoSvsD2A5pKiYuMFdMwmrc9jSV5srovdErp2zl88gtnw7c3AtEsJzzINW4RnGx6ZjgiObH5gHNn8wOZf6GHMnBuQ/Ub0ExbC7FXikncNDe8IzDLtomzKNS8PiSCXfoSlDhE2CvRdNiJt+ZpD946JpJFFNVjLRsEYjaw8/0RdZQ7pkh16TK6eeo5NNHJDy2OM0l796+OTYOi7pKV/lmqayNIvXqQAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/service-3.png":
/*!**********************************!*\
  !*** ./src/assets/service-3.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAWlBMVEUAAAAzXe8zXe40XO80XO0yXew0Xu80XOswYO8zXO0zWuozXe8zXO4zXO4zXOwwYO8wWOc0XO8wUN80Xe0zXO80Xe7///8UJXgXKoPy9f7m6/2AmfQoSMIoSMHwfS8pAAAAFXRSTlMA3++/gGB/QBCQMK+fcFAgIM8QjzDkfvqUAAAB5UlEQVRYw+3Z3W7iMBCG4W/8Q/4TKJg20L3/21wpXdVLycSJMyNVVZ9DH7waDfYBgCW179rGEpnwwBBZe3Z9jQwvxfkUkuy5f8EWhTVhrcavHvZgwiZ0OGZkpdLehCzkseRoQ7Z2YeiCwg5Ug9GFnQ6YdQi7HaS7sSzcjTp8UQchBR4cSSpMj7euDWIsEPkgyMsuIjKl7I2InPTAceQ4sM7IJB02T1dC9pU0gfP+9jp5e+dP+btcBtZUmBr8Kf/x9Xz49RN/yu+i0ghXACy33TR+0ycA/HbT+E0DdWIJabOBC3qdsIfTCXeodMItrE640QpbkE6Y9MJG54EYhFl/Mp90hLDbb3hP+D5eJ7c7c5obvl3/GZnT3PD10/zpdwpPe0xY3jQS200bN4WvG/yYsNEJG5BOmPTCVids0WiFW51whU4n7OB1wj1qnfAF0AkDOGmELYBKI1wBKDTCPYDShGfj+u5tLlyC+T52v63tjvfwrAHiLiR5TIx0l/DBSYcdPpTCI9MAnZEdoDIyDfo/6AFWrtvifwMpLEL2lVzwRSd8IyIn3Y1lka5KuQOjpj1ZKsAa2vyuHbDEZw5tPBIGRxlZVwKQTsdsmm/WV22BLcq+sunqqSpKZKh7V9n5v4+btvM1FvwF+34qwOxad7EAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/service-4.png":
/*!**********************************!*\
  !*** ./src/assets/service-4.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAtFBMVEUAAAD/fkf/fkf/fkb/f0f/fEj/eED/fEf/fUX/fUf/fUX/fkf/fEb/fUf/fUj/fkf/fkb/fUf/fkb/fkf/fkfUXSr////pbTj/jl7/7+j+9vP/nnX6ekP9fEXlajXXXyzvwq//lmr0dT/ij2zZcUXfZDD/39H/z7rvuKD/poD/hlLZcUTwcjz34df118r/v6P/spLsrJHno4ffhl/ZYS7/593/x6//xq7kmnrvglPce1LWZzgDcEZWAAAAFHRSTlMA34DvvyAQQDCQYK9QcGCfz4+gb2W7HX0AAAKOSURBVFjDtdnpdqIwGIDhJERQVu18YRAX3Nq6tNN19vu/r4lTNVqiJiR5/vSUH+/JCR+KgC5ph0kWUYw9OOFhTGmPxG3UgB/0unAV7cW+VjagHqiKQuXFEg+0YNIyyJqmQw8awZc3pEWhsezCogMMBvDZ8fsChoi8S8AYUe+alwlYkdQ+FsCS4NOcYbAEn05dBtbQk+sNLArtboTg+XYnQiC2FyyWLBbsZskYLPNqI2H3KolAsDnLPghWT18MgtW96IADHR6m4ECXh8EJ8UFsWRvF4ESICDiRaAxFsVpNQVWmPBSDu5zrD0BNdDY8HazhyFO+8ySOracDrjhzUWN5ts8bP47+zw8Oay76HweeQQLLw0WZb90Xe9t9eHx93abu9see8w99edgDifu87pFx3+rH5WEPgUw/r5szbq4aBs3wm2H4Z163ZNzEJCxO+LJi3H5vX/5slvzPhO382oW/a4Sh4KevfGEHizLfKRdsSyy/XCmFhfWMHZmXu+4bE/7+5lMHoBkeVuzYYlLy7GTBjlVDAN3w6J19ttnUDr2PtMNjpmSsGx4yRTPN8K1q+FYvPGPKZlrhsXp4rBMeMXWVfDDkH5sPjBnuhYew2U5wY7VvEDETRnOB5V+mlU64kn+ZRobnjhtJwzdNLzthKL2PTdyECQql4/ZVwwNIxM5uY93deKMuOEBd/rgJwIGYh30P7PORm99jEUJu9iJF/1nfC+z0QYiD04dbrh828SU7WTCX2h8JzvIsZ+4fmtq9SmoP6hNbE+H+Ubp52f1rhQSd0TZ7wRKgs1o30BhtoUvShov2UnRFi+AGWeIjTjNtnhXSSL1KA6TDjzsUrup2Ah810I5Jh8pfH0dZkrbRBf8AHkYUPvOU+08AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/service-5.png":
/*!**********************************!*\
  !*** ./src/assets/service-5.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAclBMVEUAAABIp/9Hp/9Ip/9Ip/9Ipv9Ip/9An/9Hp/9Ipv9Ipv9Hpf9Ip/9Ipv9Gpv9Hp/9HqP9Hp/9JqP9Jpv9Ip//////o9P9fsv/d7/9TrP/0+v92vf/R6f+NyP+k0/+j0/+Yzv9ruP+63v+v2P/G5P+Bw/98LCfxAAAAFHRSTlMA3++/gGAgEJB/QDCfcFDPr7CvUAUHM0oAAAKqSURBVFjDtZnpeqowEEATwiaL2nZYEkAttO//ipcUvQMfJTU4Of8w5DhOJoMAM5EGeXYWnHuwwONciNj/SNkOoiQ+wZ+I+COy0ibCg2c5B08He/DACn4ILbTU6gC1dmpzQkIBu8kMQSccXoBvll8OL3L43XsAoDWjl9SMXhLyVVsAIpKlN+RABF9WXQZkiMV+A0IC2kQgXkRbEYhPHTCGjAG7CZkDMd6qJGh3yRkQylqOACFdviMgpLmIwQHxKBbggNMoBidgIyYmpV47bHE+OCHHoqAlYwKc8OZKLEytrRlKVah2qFYD11oVRd03sAnfFjdt8aBfqCscKJttsbcxci1mlJ848KnmI9fNlmz0qrqtJ8EN7nTTcd22ymhei3F62Un9yy93AX6husifk0p90FiJ9ZRaPn68PrqApl8kpqr1kY240xMqXK5ySoWsi+WA1F/5bSH+Gs/vAKmau3+klYDcxg++LMQ6MrmqP6W9A8yRq1yYxXj6Mjid6vVi7Bdj/XXwmrhcpWLQWqXLYZWK2nLxboDIFsuhkYB0lov3rTVyXm7/6/p29+NAZ71BKtwgI/0j1WiW1hsEmmlL/8y+qlk53Pe3VstpS3fPi1Gg2lUTuj2aUK3m9bcWe9tmRDWgwcRojF7P0OhR0C4bfY8Djc0VBNV9rVvyZTW7GlpVqHIwXZrcXUzPgJCKM3BCzHJwgs8CcMLR2d9Yd3+82QkcIFze3CTggOMojjygJ2Ju7sfetJc8F/j0hjwXnE34QIyvrQ6WDx+9+eQBOwmZh64f6BHXcub0oSmSEDbiJTlxRSA+tRfNVF56c842SF97wZIYXgllsBsRMhPBzqC9gP1B6PMdWj9Cg0lNrEWC9+etImE2RMdYwJ+c4iRiO0iPfix+f338nuVBygz8AxJEDfiSd7+KAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/service-6.png":
/*!**********************************!*\
  !*** ./src/assets/service-6.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAV1BMVEUAAAD2SXz1SXz1SXz2SXzzSHjzSHz0SHrzSHzvRXX0SXz2SXz1SXzySHr0Snr0SXv0RXr1SXv/QHD2SX3ySHr2SX31SXz////3X4z6pL3+6e/5mbX2VIR8gw8fAAAAFnRSTlMA3++/fyCAYEAQkK+fUDBwMM8Qj2BwCzrN+AAAAadJREFUWMPt2dluIjEQheFT3ntvllTI8v7POcxkJIvIxtBUKYrEd+WrXyXavYJr1uMyDpbI8AVDZO0hTCs26NJhx032MHW4R7KGbzXEm4d1hu9Czm/ISqWj4U0o4hpvebPRoyoRP4BWVLzwgxyKHD/MVboqZcciXvDNzEISLnhiIXS560YWY4EssqAo+0NkppPdEZmTHjiPnAfWGZlYmKlsCamzZGBxFmcdZ6KHb2IFCUDPCnoAlhXsAHDZ6ePt7NReltUvxO+vf71/tpdFK6bKwK9fTu1lUUTQCS/odcIjrE540ApbkE6Y9MJGJ2zAOmF+hp/hZ/gZ/tGw2mXzF95B1G6mg1Z41An3WHTCAUed8ISZiz7/P6W2l2Vr/cH77ezj1F6WAdixAqv5cpNYwQSgMyyvg8772ADo/BYR/xgWRvgSWJjDmcLhIw+dkR2gMjJ57Q96wnt51P9oKnuWzPhmEd4RWRDuZkGkq1JeUDETP4ASqvzIm1mPa+LGoU1Egw+0IRv2AKTTOdsWh9urNuEe+6m33LTr0x4bzFPobfnv42FcjjOu+ANCG0GtzOkAkAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/tab-image-1.png":
/*!************************************!*\
  !*** ./src/assets/tab-image-1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tab-image-1-b2c2c2777a421898f2116161599c253d.png";

/***/ }),

/***/ "./src/assets/testimonial-1-1.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-1.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial-1-2.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-2.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial-1-3.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-3.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial-1-4.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-4.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial-1-5.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-5.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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UmVhZHlxyWU8AAADI2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDYgNzkuMTY0NzUzLCAyMDIxLzAyLzE1LTExOjUyOjEzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjIzODUyNDNENzY1MTFFQ0FFNTE5REJEMUY2MUQyMzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjIzODUyNDRENzY1MTFFQ0FFNTE5REJEMUY2MUQyMzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MjM4NTI0MUQ3NjUxMUVDQUU1MTlEQkQxRjYxRDIzMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MjM4NTI0MkQ3NjUxMUVDQUU1MTlEQkQxRjYxRDIzMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmF5lPcAAAMAUExURUZERol1ZNuTbOOibOWWeNmuh3toWdJwXhQRFG8yFatxSPLy8jIjGLB0TW4zKNp9W9NvUxQHAtKEXuKcbIdXR0YmF3xcMql6VntjR65ZQAcCAZmKfFlJO5ljPolnSG1TO9KGYnVpYRsZHaZcQYJpUZh5VjoXBJdyS9SUXN6aa818W08ZDuzs7dSNbWMzOINGLGpoamNIORkWGuKGZr15U7eXZiYjI7GYWEY5LZuBRZN8YqxsSRcaJd7d3nFeSsR8ZFIqFpdoTt2WcbmAX9uMadKJYqprQjs4OrhaPMOEXRIOESoWBqFiQ+Sng86GYrRjQHxWLq2EWKVsRcuidNiMYBUUGMVsSLprS8yNYXVFI7OppSUbGFI8KYlyWeuffd6Zc51cPaeMcZybnPf399eofMCKXjYcD8yQZL5xTrWxrDUqJxcPC486OCINBbV6UpOSlHdLNPSmhdeRaWJQP8ORZPC0fOyrc7pjTVtALYxbNIBybW9ZQY9/cVgmCKpSOeembOGhcp6BXk1ANM2AXw0MDbmOXrVsUINPO49ROYFvYt2YYnBjV2pZVAsRFoFcQLRqR8WEZcx0Vt2McHRfWYhVPp9UPhUbHZRSMfG/ll0wF8N6VqyJYhcTFo9MKbm1sYxgO7SBZ+Ojfa6ur59VNIB9fMSKYj8rI21cScNxXuumcWJVS4lYLueqcWVaTkowGx0YE2lXRh4bI4GBgsN1VLlsR8qMabmAVUE/Qn9/f7CvsBAQEaCUid+ffayTeHFvceyqe5mTi0A1JrqhYFY3MPPz862CUfDw8KegmjIKBOqxgKJjSc2eb6FwR6dlPapoRpdNNT8gDlkyBcFhR5hsXe2saY4/IOqiY6BQL+6lfH9/gKRSLcRvUuOpea9OMzQNAGZALcl7WcmKW86HaN2Zh+Pi4eqxfMOEVcSWa8Gbcs6SbK+vsJ+en+uQcbtyWKCfobl6WNGgfunn5LCAULCBWeCUbuScZteHZdWZbZRfOZNaP8qOdG5tbrKYdId3cOpvX////3X5CbgAAAEAdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////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"

/***/ }),

/***/ "./src/assets/testimonial-1-6.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-6.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAADAFBMVEUAAAATDgtwRC5hRzxQMiD48Og+My5VNSgNDAonIBoLCAVrU0YDAwMODAsICAYNCQsrIx9vV04aFhIIBgcWDQn68u0nHhv8+fQFAgJZNyVHLiX79uoEAgFYMiMNCwg9Jx54aGQgEApHMyhIMCkQCQnIgWEeGhoOCguQiYBXSkaLV0F9SjNiOigZGBL/9+y+fFj/9uylZUkYEBD/+/H9+ff/9uuZXURQSFD/9OqfZUoBAAAEAwMIBgYQDg0MCgj/9+378ujin30rIRweFhMwJSAtGhP89enmo4LppHu/jG/dlGfOjmQiGhXbnovZnoPal3nWl2+bblgeEw0YDQnmqYvNmYnrqYfjpofgoYXmoHzfm3rmoXe5h23VkGWweGDGiFxYSEJAKSEuHhsnHRkVExH9/vrspYLDjXHDhG/Lj2y6eVTMg1PFfk1dTkixaTp8TDdFLSESCwf9+PP59Oz88OLnoozZpIrWmofgm4XPmIHGk3jSkHjUmHXknnLIkXLgmWrFjWm2gGCic156Yluzc1ipdFepbEqQW0eFWUa0bj+pZz9NKx4xHRP55tfSoI/np4LMk33EinnLlnTPmHPhmnHOkXHMiF++f127d0l6V0hQQj1zSzk5JR724MzuqpDdqY7hn4vKkYjRnofGl3/TmX7cnHXaj2u3gWmvgGnTlWjChmGZaFbHhlGdZEmjZEZlQjdVPzZFODI9MixjOys1KyZaNSM3IBrev6vrs53iqZSekInFkH/Znnu+hXKre2TRh2OndmPViWHEhFvQiFplV1ilZ1eTZVC0bUuHXkudXj6kYDVrPClGLylDJBgmFg3s5t/u2L6tpJ7Xrp3zr5Xao5PXkoO+j3/OnXmHeHTMhW68emVxYVmga0xrUEiCUTZNOTJbOyj67d3e08fkybvzr4q3iXayemrFeWm+hGiXcWZ0ZGZfUU9lTDqUWTWNWDVzPCfv4Nfw3s/PwLbCtKXbuZrUp5a0oJHUioOZiXbSkXCLbGWyaWXOgWLAekm7rJWUXFIy38STAAAAOnRSTlMAIP0g/fznd3BEMO/v38+/up+AgF8g79/f17egoJ+fgFhQMBAQ7+/v39/f39/fv7+vr5+Af3BwQDAweXwQ9AAABl5JREFUSMd91WVYU1EcBvArYnd3d3ft3k3WrIttbLIRY2NswAjp7u5QBGkBUUAkbGkEEezu7u72bLPr/Xp+z/v8z7n3ngv9nsk9xo2a8zBENW3BouWroP+maw8Dg0dlKpqEnbJZQlOFzR7U9Z+2y2iD8LawdbQU35QUkQhraqosfVw97u9+yoTqC+vSahupKWvWrDEWKYQmu9w8pZXVV3r8bYhRhhEl5mlp9VRfY2PAjYUmJm5x+UGVldVz/6jvZZiRcWFdQ1phob8vNt54DVaMJZsymXl7Wh9EX+nT61c8tDPGUFOmaqBRqf6+2kGwZDIYnJmXUHzF0dIJGfoznkTkETsM2g6YSyRUf39fX5EoPl4gFAqZeZ7F5TU4GIX6qX1YH6JTZ7TmYVQDDWgwN5lMFgpMTEyy3TyLMhzRKBSqb5fveoR9DI9oaKBpa0hrlIBdCgTxYI9CZsFpCsXGwBEBGu439SteKj/P7SQaRj+O2qpW26kCKNLAJLGrm7L0kqYlPNQAhwJB0IO/nt1h+TWuFTezo02t/niwLbC4pVR6522Oe2CoWVKSMjQDD+u0tX6WQdfkcnsZzzI6RG13UGWbmhpwp8gGK2AEBnE4t6Rm6RidxqAH6KrPP5PLd/O4ltFhW+0+loSEtaZvCQ1gxzOldeftgyPMOIhWwxg0uou2uumos/xwTExHR9TWrTTzsvD0d4kh7FqxB8UrLz8/7+XNGpQ2QA8BelbTbhf5tcfV1YYH7bb6s9lspmcqu7A+xdXLq6CgIHvXHkuUfpvoGeB9trh/5on83IGwS5VRQINHzhLHG0saqYIET2ZW1s6d/EPfNLo31GODffAzZ+VZ2qP2SLtGqrFAoVAIyFR1vSLH0zTr+M6dcdu+amt0T2j0Bgv73U+8a9mRDyPXN25eo7hxI0tBrq8tzNqV4O16/PjOuB/d46GBFRYWTa+Uhaz1DpGRaskmxY3jArFp7e0Q733Nft6urrs8v3db94eGbwfl54vFLLWDg4MdjS0SZHmzyLbKc9Jbp3ITlSeZXuWw7kys6fR5EL7qsoX9/eAPH9QOkQ52aRIxlnWWxdqb4H0uMZe/b5+SSUmHYZ2WyegQGqctv3iungpGWW9O2yRO9fNmMU1NPNz5uYl7EgvMtsBorhOMweNwdAjBEyoAb01LoWk1exN2b7Lt2bO3b79vfv85PLHAzavGml6TSeThcQQZNNKJXlWxzcIig1Ma5aDV8abNzUr+sR3Hduw4Veee7XYKw8VZOloSuTjCcKi/E5ew/fK2DRWO4WFR60ts9wpNxD6F3vyXx/i5uSfcsvl3MTwZ0AQcjjAQGouhW2VaHqrY7njB/OCBdbZJbqYKkYh18uTr17lxcYy8/IsYDFqWSSDgCED3RPAyKwKhikB8RIuKUgUkJ+8lk0XCXQx3d4b7ibg9lBoEcLwMh8PJekK9YTSejufh8bxL5tryANtUFpaM9WCcdGcwTvDBiSAIAg7byopu3RuC+sIYDAIjGMTA3D+sDMxi67MXi/Xw8MhxzT6Rvz8ThrWreKD7QRA0BNYFg7Q3SGhlZaqSkgCfTVgP15ycHAb/ZqV+0QlvReSOB7qLXiPbOXabN60rLQ0JDAywZXm4MhjuCTcjEBSMgnmdnTExRLzuwxyg529eqKjJp0vCwi+ESgMpngz+nn23wtthoJ2IHdGONcTF+osY0XU/37hj82Yfn4DA0C1bOEFBdUFBLZpLrSgUwNGV7eWHrHTVYHLAUVVHjsRuzAY8iWK2n8NpCW+NiGjhRMAILya6XaMpPzQB0mfqSATj9ObIxti1a18k+5xOsgG+jsPZElQXGkG0vFyeodFkPOj+46fQF191ZCPQRi6xx/ySk/0oZsX79xcXFYVGbLsY/O7u3fT0Pl1/ur3RFU83xl41MlpLIj2N80v1s6FQzMz2FYWkA33mzL3g4Im/3N+857GxV0E3ieTicj3fL8nPBkQaUn55w/1795qaAP45k7ofBtjIiGQEsvb66bepXl53mqXBVjEywvbuK/74oc0kaXW3bt2MVq92Ju3wCkookp56ZXglk969C/RnlpBIoJu0GsTZ2floZoJN4vVPDxzRg6dAf8uwMVqq1y5nrLm7ux3dzR2gK/6HH6HnLoer0GgEN30wsP/LymUL53db7XK0X/+xPXv/vvgFIxnj4tgeq8gAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/components/accordion/accordion.js":
/*!***********************************************!*\
  !*** ./src/components/accordion/accordion.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-accordion */ "./src/components/accordion/base-accordion.js");
/* harmony import */ var assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/accordion-arrow.svg */ "./src/assets/accordion-arrow.svg");
/* harmony import */ var assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/accordion-arrow-e.svg */ "./src/assets/accordion-arrow-e.svg");
/* harmony import */ var assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ "./src/components/accordion/shared.js");
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\accordion\\accordion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function Accordion(_ref) {
  let {
    items
  } = _ref,
      props = _objectWithoutProperties(_ref, ["items"]);

  const openIcon = __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "open icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 20
    }
  });

  const closeIcon = __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "close icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  });

  return __jsx(_base_accordion__WEBPACK_IMPORTED_MODULE_2__["BaseAccordion"], _extends({
    stateReducer: Object(_shared__WEBPACK_IMPORTED_MODULE_5__["combineReducers"])(_shared__WEBPACK_IMPORTED_MODULE_5__["single"], _shared__WEBPACK_IMPORTED_MODULE_5__["preventClose"])
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), ({
    openIndexes,
    handleItemClick
  }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, items.map((item, index) => __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["AccordionItem"], {
    key: item.title,
    isOpen: openIndexes.includes(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["AccordionButton"], {
    onClick: () => handleItemClick(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, openIndexes.includes(index) ? openIcon : closeIcon), item.title), __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["AccordionContents"], {
    isOpen: openIndexes.includes(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, item.contents)))));
}

/***/ }),

/***/ "./src/components/accordion/base-accordion.js":
/*!****************************************************!*\
  !*** ./src/components/accordion/base-accordion.js ***!
  \****************************************************/
/*! exports provided: BaseAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAccordion", function() { return BaseAccordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class BaseAccordion extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      openIndexes: [0]
    });

    _defineProperty(this, "handleItemClick", index => {
      this.internalSetState(state => {
        const closing = state.openIndexes.includes(index);
        return {
          type: closing ? 'closing' : 'opening',
          openIndexes: closing ? state.openIndexes.filter(i => i !== index) : [...state.openIndexes, index]
        };
      });
      console.log('clicked');
    });
  }

  getState(state = this.state) {
    return {
      openIndexes: this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes
    };
  }

  internalSetState(changes, callback = () => {}) {
    let allChanges;
    this.setState(state => {
      const actualState = this.getState(state);
      const changesObject = typeof changes === 'function' ? changes(actualState) : changes;
      allChanges = this.props.stateReducer(actualState, changesObject);
      return allChanges;
    }, () => {
      this.props.onStateChange(allChanges);
      callback();
    });
  }

  render() {
    return this.props.children({
      openIndexes: this.getState().openIndexes,
      handleItemClick: this.handleItemClick
    });
  }

}

_defineProperty(BaseAccordion, "defaultProps", {
  stateReducer: (state, changes) => changes,
  onStateChange: () => {}
});



/***/ }),

/***/ "./src/components/accordion/shared.js":
/*!********************************************!*\
  !*** ./src/components/accordion/shared.js ***!
  \********************************************/
/*! exports provided: AccordionButton, AccordionContents, AccordionItem, preventClose, single, combineReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionButton", function() { return AccordionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContents", function() { return AccordionContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventClose", function() { return preventClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\accordion\\shared.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


const AccordionButton = _ref => {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: {
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '-0.2px',
      cursor: 'pointer',
      fontSize: '17px',
      lineHeight: 1.5,
      fontWeight: '500',
      border: 'none',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '15px',
      paddingRight: '30px',
      position: 'relative',
      color: '#0F2137',
      '@media(min-width: 768px)': {
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingTop: '20px',
        paddingBottom: '20px',
        fontSize: '15px'
      },
      ':focus': {
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
      },
      span: {
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: '#fff',
        '@media(min-width: 768px)': {
          right: '30px'
        },
        img: {
          width: '7px',
          '@media(min-width: 768px)': {
            width: 'auto'
          }
        }
      }
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }), children);
};
const variants = {
  open: {
    // maxHeight: 200,
    height: 'auto',
    marginBottom: 10,
    '@media(min-width: 768px)': {
      marginBottom: 30
    }
  },
  closed: {
    height: 0,
    marginTop: 0,
    marginBottom: 0
  }
};
function AccordionContents(_ref2) {
  let {
    isOpen
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["isOpen"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    initial: "closed",
    animate: isOpen ? 'open' : 'closed',
    variants: variants,
    css: {
      overflowY: 'hidden',
      fontSize: 15,
      padding: '0 15px',
      paddingRight: '40px',
      lineHeight: '30px',
      color: '#343D48',
      '@media(min-width: 768px)': {
        padding: '0 30px'
      }
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }));
}
const AccordionItem = _ref3 => {
  let {
    isOpen,
    children
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, ["isOpen", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: {
      borderRadius: 5,
      marginBottom: 10,
      border: '1px solid #EDEFF2',
      padding: 0,
      overflow: 'hidden'
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 3
    }
  }), children);
};
const preventClose = (state, changes) => changes.type === 'closing' && state.openIndexes.length < 2 ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: state.openIndexes
}) : changes;
const single = (state, changes) => changes.type === 'opening' ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: changes.openIndexes.slice(-1)
}) : changes;
const combineReducers = (...reducers) => (state, changes) => reducers.reduce((acc, reducer) => reducer(state, acc), changes);

/***/ }),

/***/ "./src/components/block-title.js":
/*!***************************************!*\
  !*** ./src/components/block-title.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\block-title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const BlockTitle = ({
  title,
  text
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.blockTitle,
    className: "blockTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, title), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, text));
};

/* harmony default export */ __webpack_exports__["default"] = (BlockTitle);
const styles = {
  blockTitle: {
    textAlign: 'center',
    mb: ['60px', null, null, null, '60px', null, '80px'],
    h3: {
      color: '#0F2137',
      fontSize: ['23px', null, null, '30px'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1,
      mb: '20px'
    },
    p: {
      lineHeight: 1,
      fontSize: '18px',
      color: '#858B91'
    }
  }
};

/***/ }),

/***/ "./src/components/cards/blog-card.js":
/*!*******************************************!*\
  !*** ./src/components/cards/blog-card.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link */ "./src/components/link.js");
/* harmony import */ var _assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/arrow-angle.svg */ "./src/assets/arrow-angle.svg");
/* harmony import */ var _assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\cards\\blog-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const BlogCard = ({
  image,
  title,
  description,
  path,
  linkLabel
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.blogCard,
    className: `blogCard ${image === null ? 'noThumb ' : ' '} ${description === null ? 'noDescription  ' : ''} ${linkLabel === null ? 'noLabel ' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, image !== null && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    alt: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    className: "blogContent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, title)), description !== null && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 34
    }
  }, description), linkLabel !== null && __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    sx: styles.linkLabel,
    path: path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, linkLabel, " ", __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "angle icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogCard);
const styles = {
  blogCard: {
    position: 'relative',
    overflow: 'hidden',
    mb: 30,
    mx: 15,
    width: ['calc(100% - 30px)', 'calc(100% - 30px)', 'calc(50% - 30px)', 'calc(50% - 30px)', 'calc(33.3333% - 30px)'],
    '&.noThumb': {
      p: '25px',
      backgroundColor: '#F0F0F4',
      borderRadius: '5px',
      h3: {
        fontSize: '20px',
        lineHeight: 1.75,
        fontWeight: 500,
        m: 0
      }
    },
    '&.noDescription:not(.noThumb)': {
      position: 'relative',
      img: {
        width: '100%'
      },
      '.blogContent': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(180.06deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.71) 99.95%)',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'flex-end',
        p: '25px',
        h3: {
          m: 0,
          color: '#fff'
        }
      }
    }
  },
  image: {
    img: {
      borderRadius: '5px',
      width: '100%',
      display: 'block'
    }
  },
  content: {
    h3: {
      fontSize: '18px',
      color: '#0F2137',
      lineHeight: 1.67,
      fontWeight: 700,
      mt: '20px',
      mb: '15px',
      a: {
        color: 'inherit'
      }
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#0F2137',
      opacity: 0.6,
      mb: '15px'
    }
  },
  linkLabel: {
    color: '#3183FF',
    fontSize: '16px',
    fontWeight: '500',
    img: {
      ml: '6px'
    }
  }
};

/***/ }),

/***/ "./src/components/cards/jackpot-card.js":
/*!**********************************************!*\
  !*** ./src/components/cards/jackpot-card.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\cards\\jackpot-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const JackpotCard = ({
  image,
  heading,
  text
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.jackpotCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    alt: heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, heading), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, text)));
};

/* harmony default export */ __webpack_exports__["default"] = (JackpotCard);
const styles = {
  jackpotCard: {
    p: ['30px', null, null, null, null, '15px 30px', '30px'],
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, null, 'left'],
    transition: 'all 500ms ease',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    '&:hover': {
      boxShadow: ' 0px 8px 24px rgba(69, 88, 157, 0.07)'
    }
  },
  image: {
    flexShrink: '0',
    mr: ['0', null, null, '30px'],
    mb: ['20px', null, null, '0px']
  },
  content: {
    h3: {
      color: '#0F2137',
      fontSize: '18px',
      lineHeight: 1,
      fontWeight: 700,
      mb: '10px'
    },
    p: {
      fontSize: '15px',
      color: '#343D48',
      lineHeight: 1.73
    }
  }
};

/***/ }),

/***/ "./src/components/cards/price-card.js":
/*!********************************************!*\
  !*** ./src/components/cards/price-card.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var assets_price_check_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/price-check.svg */ "./src/assets/price-check.svg");
/* harmony import */ var assets_price_check_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_price_check_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_price_cross_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/price-cross.svg */ "./src/assets/price-cross.svg");
/* harmony import */ var assets_price_cross_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_price_cross_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_price_arrow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/price-arrow.svg */ "./src/assets/price-arrow.svg");
/* harmony import */ var assets_price_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_price_arrow_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\cards\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const PriceCard = ({
  data: {
    title,
    icon,
    amount,
    options,
    recommended
  }
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: `${recommended === null ? 'priceCard ' : 'priceCard recommended'}`,
    sx: styles.priceCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.priceHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "priceHeader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, recommended === null ? null : __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.recommended,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, recommended), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: icon,
    alt: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, title))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "ul",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, options.map((option, index) => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "li",
    className: `${option.status === true ? '' : 'closed'}`,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, option.status === true ? __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_price_check_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }) : __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_price_cross_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }), option.label))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.buttonWrap,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "priceAmount",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Starting from"), __jsx(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "#",
    sx: styles.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, amount)), __jsx(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "#",
    className: "priceButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_price_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "price button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (PriceCard);
const styles = {
  priceCard: {
    px: ['20px', null, null, null, '40px'],
    border: '1px solid #E0E2E4',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    ul: {
      p: 0,
      mt: ['30px', null, null, null, '50px'],
      listStyle: 'none',
      li: {
        display: 'flex',
        alignItems: 'flex-start',
        color: '#343D48',
        fontSize: '16px',
        lineHeight: '26px',
        width: '100%',
        maxWidth: ['100%', null, null, null, '90%'],
        '+li': {
          mt: ['10px', null, null, null, '20px']
        },
        '&.closed': {
          color: 'rgba(52,61,72,.6)'
        },
        img: {
          flexShrink: 0,
          position: 'relative',
          top: '5px',
          mr: '15px'
        }
      }
    }
  },
  priceHeader: {
    pt: ['40px', null, null, null, '60px'],
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: ['column', null, 'row'],
    '.priceAmount': {
      textAlign: 'right'
    },
    '.priceHeader': {
      mb: ['20px', null, '0'],
      h3: {
        lineHeight: 1,
        color: '#0F2137',
        fontSize: '22px',
        fontWeight: 700,
        letterSpacing: '-0.55px',
        mt: '35px'
      }
    }
  },
  recommended: {
    display: 'inline-block',
    backgroundColor: 'primary',
    borderRadius: '3px',
    lineHeight: 1,
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '-0.14px',
    padding: '5px 8px',
    position: 'absolute',
    top: ['-15px', null, null, null],
    left: '0px'
  },
  buttonWrap: {
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    py: '44px',
    mt: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    mx: ['-20px', null, null, null, '-40px'],
    px: ['20px', null, null, null, '40px'],
    img: {
      display: 'block'
    },
    '.priceAmount': {
      p: {
        lineHeight: 1,
        fontSize: '16px',
        color: '#343D48',
        mb: '10px'
      }
    }
  },
  heading: {
    color: 'primary',
    fontSize: '26px',
    fontWeight: 700,
    lineHeight: 1
  }
};

/***/ }),

/***/ "./src/components/cards/service-card.js":
/*!**********************************************!*\
  !*** ./src/components/cards/service-card.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/arrow-angle.svg */ "./src/assets/arrow-angle.svg");
/* harmony import */ var assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\cards\\service-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ServiceCard = ({
  image,
  text,
  heading,
  path
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.serviceCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    alt: heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, heading), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, text), __jsx(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    sx: styles.link,
    path: path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Learn More ", __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "angle icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 22
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceCard);
const styles = {
  serviceCard: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, null, 'left']
  },
  image: {
    flexShrink: 0
  },
  content: {
    ml: ['0', null, null, '30px'],
    mt: ['20px', null, null, '0px'],
    h3: {
      color: '#0F2137',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: 1
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      mt: '20px',
      mb: '20px'
    }
  },
  link: {
    color: '#3183FF',
    fontSize: '16px',
    fontWeight: 500,
    display: 'inline-block',
    img: {
      ml: '5px'
    }
  }
};

/***/ }),

/***/ "./src/components/cards/testimonial-card.js":
/*!**************************************************!*\
  !*** ./src/components/cards/testimonial-card.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\cards\\testimonial-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TestimonialsCard = ({
  image,
  text,
  name,
  username
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, text), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    alt: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, name), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, username))));
};

/* harmony default export */ __webpack_exports__["default"] = (TestimonialsCard);
const styles = {
  testimonialsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    mb: '20px',
    px: ['20px', null, null, null, null, '25px', '35px'],
    py: ['20px', null, null, null, null, '20px', '25px'],
    pb: ['25px', null, null, null, null, '25px', '35px'],
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48'
    }
  },
  testimonialsInfo: {
    display: 'flex',
    alignItems: 'center',
    mt: '20px'
  },
  testimonialsImage: {
    img: {
      display: 'block',
      mr: '15px'
    }
  },
  testimonialsContent: {
    h3: {
      m: 0,
      color: '#343D48',
      fontSize: '17px',
      fontWeight: 500,
      lineHeight: 1
    },
    p: {
      m: 0,
      lineHeight: 1,
      color: '#4F96FF',
      fontSize: '14px',
      fontWeight: 500,
      mt: '10px'
    }
  }
};

/***/ }),

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Drawer = _ref => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement,
    drawerStyle,
    closeBtnStyle
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: `drawer ${className ? className : ''}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: "0.4s"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "div",
    onClick: toggleHandler,
    sx: closeBtnStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: drawerStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, drawerHandler));
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo-light.svg */ "./src/assets/logo-light.svg");
/* harmony import */ var assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\footer\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





function Footer() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "footer",
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: ['column', null, null, null, null, 'row']
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: {
      color: '#ffffff',
      opacity: '0.7',
      fontSize: '14px',
      mt: ['10px', null, null, null, null, '0']
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Copyright by ", new Date().getFullYear(), " RedQ, Inc")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.linksWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Home"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Advertise"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Supports"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Marketing"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "FAQ"))));
}
const styles = {
  footer: {
    py: ['40px', null, null, null, null, '30px', '40px'],
    backgroundColor: '#020718',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff',
      opacity: '0.05'
    }
  },
  container: {
    display: 'flex',
    flexDirection: ['column', null, null, null, null, 'row'],
    justifyContent: ['center', null, null, null, null, 'space-between'],
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap'
  },
  linksWrap: {
    mt: ['15px', null, null, null, null, '0'],
    display: 'flex',
    flexWrap: 'wrap',
    a: {
      fontSize: ['14px', null, null, null, '16px'],
      color: '#ffffff',
      transition: 'all 500ms ease',
      '&:hover': {
        opacity: 0.7
      }
    },
    'a+a': {
      ml: ['15px', null, null, null, '35px']
    }
  }
};

/***/ }),

/***/ "./src/components/header/header.data.js":
/*!**********************************************!*\
  !*** ./src/components/header/header.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'banner',
  label: 'Home'
}, {
  path: 'services',
  label: 'Services'
}, {
  path: 'pricing',
  label: 'Portfolio'
}, {
  path: 'testimonials',
  label: 'Testimonials'
}, {
  path: 'news',
  label: 'Blogs'
}]);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.js");
/* harmony import */ var _mobileDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobileDrawer */ "./src/components/header/mobileDrawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var assets_muhammadadilriaz_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/muhammadadilriaz.svg */ "./src/assets/muhammadadilriaz.svg");
/* harmony import */ var assets_muhammadadilriaz_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_muhammadadilriaz_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\header\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








function Header({
  className
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_5__["DrawerProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", {
    sx: styles.header,
    className: className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    image: assets_muhammadadilriaz_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "active",
    sx: styles.nav.navLink,
    to: path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, label))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/https://www.behance.net/muhammadadilriaz",
    ml: 2,
    label: "Behance",
    sx: styles.headerBtn,
    variant: "buttons.primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_mobileDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
}
const styles = {
  headerBtn: {
    backgroundColor: 'black',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '-0.16px',
    borderRadius: '5px',
    color: '#ffffff',
    padding: '6.5px 24px',
    display: ['none', null, null, null, 'inline-block'],
    ml: ['0', null, null, 'auto', '0'],
    mr: ['0', null, null, '20px', '0'],
    '&:hover': {
      color: '#fff'
    }
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: 'background',
      color: 'text',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)'
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: [null, null, null, null, null, null, '1390px'],
    '@media screen and (max-width: 960px)': {
      justifyContent: 'space-between'
    }
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 960px)': {
      display: 'none'
    },
    navLink: {
      fontSize: '16px',
      color: '#000000',
      fontWeight: '600',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0'
      },
      '&:hover, &.active': {
        color: '#6a0dad'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/header/mobileDrawer.js":
/*!***********************************************!*\
  !*** ./src/components/header/mobileDrawer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/drawer/drawer.context */ "./src/contexts/drawer/drawer.context.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_muhammadadilriaz_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/muhammadadilriaz.svg */ "./src/assets/muhammadadilriaz.svg");
/* harmony import */ var assets_muhammadadilriaz_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_muhammadadilriaz_svg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\header\\mobileDrawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const MobileDrawer = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__["DrawerContext"]); // Toggle drawer

  const toggleHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    dispatch({
      type: 'TOGGLE'
    });
  }, [dispatch]);
  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdMenu"], {
      size: "22px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    })),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdClose"], {
      size: "24px",
      color: "#02073E",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 20
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(components_logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    image: assets_muhammadadilriaz_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map(({
    path,
    label
  }, i) => __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    activeClass: "active",
    to: path,
    spy: true,
    smooth: true,
    offset: 10,
    duration: 500,
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, label))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    sx: styles.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Behances")))));
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 960px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    background: '#fff'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30px',
    right: '30px',
    zIndex: '1'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '30px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    a: {
      fontSize: '16px',
      fontWeight: '400',
      color: 'black',
      py: '5px',
      cursor: 'pointer'
    }
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  button: {
    fontSize: '15px',
    fw: '700',
    height: '48px',
    borderRadius: '3px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
    backgroundColor: 'black',
    color: '#fff'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MobileDrawer);

/***/ }),

/***/ "./src/components/image.js":
/*!*********************************!*\
  !*** ./src/components/image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\image.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Image(_ref) {
  let {
    src
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["src"]);

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({
    src: src
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/app/app.provider */ "./src/contexts/app/app.provider.js");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-waypoint */ "react-waypoint");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */








function Layout({
  children
}) {
  const isSticky = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_3__["useStickyState"])('isSticky');
  const dispatch = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_3__["useStickyDispatch"])();
  const setSticky = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => dispatch({
    type: 'SET_STICKY'
  }), [dispatch]);
  const removeSticky = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => dispatch({
    type: 'REMOVE_STICKY'
  }), [dispatch]);

  const onWaypointPositionChange = ({
    currentPosition
  }) => {
    if (currentPosition === 'above') {
      setSticky();
    }

    if (currentPosition === 'below') {
      removeSticky();
    }
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    enabled: isSticky,
    innerZ: 991,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_header_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: `${isSticky ? 'sticky' : 'unSticky'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_waypoint__WEBPACK_IMPORTED_MODULE_4__["Waypoint"], {
    onEnter: removeSticky // onLeave={setSticky}
    ,
    onPositionChange: onWaypointPositionChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    sx: {
      variant: 'layout.main'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, children), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_footer_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: NavLink, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


function NavLink(_ref) {
  let {
    path,
    label,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["NavLink"], _extends({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children ? children : label));
}
function Link(_ref2) {
  let {
    path,
    label,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), children ? children : label));
}

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function Logo({
  image
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    sx: {
      variant: 'links.logo',
      display: 'flex',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    alt: "startup landing logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\components\\seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SEO({
  description = 'I am a Professional UX/UI Designer and Front End Developer',
  author = 'Muhammad Adil Riaz',
  meta,
  title = 'Muhammad Adil Riaz'
}) {
  const metaData = [{
    name: `description`,
    content: description
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }, {
    name: `twitter:creator`,
    content: author
  }, {
    name: `twitter:title`,
    content: title
  }, {
    name: `twitter:description`,
    content: description
  }].concat(meta);
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, title), metaData.map(({
    name,
    content
  }, i) => __jsx("meta", {
    key: i,
    name: name,
    content: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })));
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

/***/ }),

/***/ "./src/contexts/app/app.provider.js":
/*!******************************************!*\
  !*** ./src/contexts/app/app.provider.js ***!
  \******************************************/
/*! exports provided: useStickyState, useStickyDispatch, StickyProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStickyState", function() { return useStickyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStickyDispatch", function() { return useStickyDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyProvider", function() { return StickyProvider; });
/* harmony import */ var _create_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-context */ "./src/contexts/create-context.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.reducer */ "./src/contexts/app/app.reducer.js");


const [state, useDispatch, provider] = Object(_create_context__WEBPACK_IMPORTED_MODULE_0__["useCreateContext"])(_app_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"], _app_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]);
const useStickyState = state;
const useStickyDispatch = useDispatch;
const StickyProvider = provider;

/***/ }),

/***/ "./src/contexts/app/app.reducer.js":
/*!*****************************************!*\
  !*** ./src/contexts/app/app.reducer.js ***!
  \*****************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isSticky: false,
  isSidebarSticky: true
};
function reducer(state, {
  type
}) {
  switch (type) {
    case 'SET_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: true
      });

    case 'REMOVE_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: false
      });

    case 'SET_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: true
      });

    case 'REMOVE_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: false
      });

    default:
      {
        throw new Error(`Unsupported action type: ${type}`);
      }
  }
}

/***/ }),

/***/ "./src/contexts/create-context.js":
/*!****************************************!*\
  !*** ./src/contexts/create-context.js ***!
  \****************************************/
/*! exports provided: useCreateContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateContext", function() { return useCreateContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\contexts\\create-context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function useCreateContext(defaultValue, reducer) {
  const defaultDispatch = () => defaultValue;

  const stateCtx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue);
  const dispatchCtx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultDispatch);

  function useStateCtx(property) {
    const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(dispatchCtx);
  }

  function Provider({
    children
  }) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducer, defaultValue);
    return __jsx(dispatchCtx.Provider, {
      value: dispatch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx(stateCtx.Provider, {
      value: state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, children));
  }

  return [useStateCtx, useDispatchCtx, Provider];
}

/***/ }),

/***/ "./src/contexts/drawer/drawer.context.js":
/*!***********************************************!*\
  !*** ./src/contexts/drawer/drawer.context.js ***!
  \***********************************************/
/*! exports provided: DrawerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DrawerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "./src/contexts/drawer/drawer.provider.js":
/*!************************************************!*\
  !*** ./src/contexts/drawer/drawer.provider.js ***!
  \************************************************/
/*! exports provided: DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _drawer_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.context */ "./src/contexts/drawer/drawer.context.js");
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\contexts\\drawer\\drawer.provider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState);
  return __jsx(_drawer_context__WEBPACK_IMPORTED_MODULE_1__["DrawerContext"].Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/app/app.provider */ "./src/contexts/app/app.provider.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var sections_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sections/banner */ "./src/sections/banner.js");
/* harmony import */ var sections_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sections/services */ "./src/sections/services.js");
/* harmony import */ var sections_jackpot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sections/jackpot */ "./src/sections/jackpot.js");
/* harmony import */ var sections_call_to_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sections/call-to-action */ "./src/sections/call-to-action.js");
/* harmony import */ var sections_featured__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sections/featured */ "./src/sections/featured.js");
/* harmony import */ var sections_pricing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sections/pricing */ "./src/sections/pricing.js");
/* harmony import */ var sections_testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sections/testimonials */ "./src/sections/testimonials.js");
/* harmony import */ var sections_blogs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sections/blogs */ "./src/sections/blogs.js");
/* harmony import */ var sections_faq__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sections/faq */ "./src/sections/faq.js");
/* harmony import */ var sections_subscribe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sections/subscribe */ "./src/sections/subscribe.js");
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function IndexPage() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_2__["StickyProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Muhammad Adil Riaz",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(sections_banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx(sections_services__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(sections_jackpot__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(sections_call_to_action__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(sections_featured__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(sections_pricing__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx(sections_testimonials__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(sections_blogs__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(sections_faq__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(sections_subscribe__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_banner_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/banner-logo.png */ "./src/assets/banner-logo.png");
/* harmony import */ var assets_banner_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_banner_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_UIUX_Designs_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/UIUX-Designs.png */ "./src/assets/UIUX-Designs.png");
/* harmony import */ var assets_UIUX_Designs_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_UIUX_Designs_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/banner-icon-1-1.svg */ "./src/assets/banner-icon-1-1.svg");
/* harmony import */ var assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/banner-icon-1-2.svg */ "./src/assets/banner-icon-1-2.svg");
/* harmony import */ var assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/banner-icon-1-3.svg */ "./src/assets/banner-icon-1-3.svg");
/* harmony import */ var assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/banner-icon-1-4.svg */ "./src/assets/banner-icon-1-4.svg");
/* harmony import */ var assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/banner-icon-1-5.svg */ "./src/assets/banner-icon-1-5.svg");
/* harmony import */ var assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/banner-icon-1-6.svg */ "./src/assets/banner-icon-1-6.svg");
/* harmony import */ var assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/dot-pattern.svg */ "./src/assets/dot-pattern.svg");
/* harmony import */ var assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\sections\\banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const Banner = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "banner",
    sx: styles.banner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon1,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon2,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon3,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon4,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon5,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon6,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon7,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.logo,
    src: assets_banner_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "logo image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 10
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "I'm Muhammad Adil Riaz"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "Freelancer, multi_xpert"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, "UX/UI Designer & Front End Developer"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_UIUX_Designs_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    sx: styles.bannerImage,
    alt: "banner moc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);
const bannerAnim1 = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;
const bannerAnim2 = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;
const bannerAnim3 = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;
const styles = {
  banner: {
    overflow: 'hidden',
    backgroundColor: '#20CD9A',
    textAlign: 'center',
    pt: ['110px', null, null, null, '130px'],
    h2: {
      fontSize: ['28px', null, null, '32px', '38px', '48px', '64px'],
      lineHeight: 1.25,
      color: '#fff',
      fontWeight: 700,
      width: '100%',
      maxWidth: ['100%', null, null, '55%', '500px', '640px', '851px'],
      mx: 'auto',
      mt: '30px',
      mb: ['40px', null, null, '65px']
    },
    h3: {
      fontSize: ['12px', null, null, '18px', '22px', '22px', '26px'],
      lineHeight: 1.10,
      color: '#000000',
      fontWeight: 400,
      width: '100%',
      maxWidth: ['100%', null, null, '45%', '400px', '540px', '751px'],
      mx: 'auto',
      mt: '18px',
      mb: ['20px', null, null, '55px']
    },
    h4: {
      fontSize: ['16px', null, null, '16px', '18px', '18px', '28px'],
      lineHeight: 0.10,
      color: '#000000',
      fontWeight: 400,
      width: '100%',
      maxWidth: ['100%', null, null, '35%', '300px', '340px', '451px'],
      mx: 'auto',
      mt: '10px',
      mb: ['10px', null, null, '25px']
    }
  },
  logo: {
    display: 'block',
    borderRadius: '50%',
    mx: 'auto',
    boxShadow: '0px 15px 35px rgba(65, 104, 139, 0.12)'
  },
  bannerImage: {
    display: 'block',
    mx: 'auto',
    position: 'relative',
    maxWidth: ['100%', null, null, '80%', null, '100%']
  },
  container: {
    position: 'relative',
    '.bannerIcon': {
      position: 'absolute',
      display: ['none', null, null, null, 'block']
    }
  },
  bannerIcon1: {
    top: '10%',
    left: '10%',
    animation: `${bannerAnim2} 8s linear infinite`
  },
  bannerIcon2: {
    top: '10%',
    right: '10%',
    animation: `${bannerAnim2} 8s linear infinite`
  },
  bannerIcon3: {
    bottom: '40px',
    right: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`
  },
  bannerIcon4: {
    bottom: '130px',
    left: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`
  },
  bannerIcon5: {
    bottom: '50%',
    left: '15%'
  },
  bannerIcon6: {
    bottom: '-65px',
    left: '0px',
    animation: `${bannerAnim3} 9s linear infinite`
  },
  bannerIcon7: {
    bottom: '30%',
    right: '0%'
  }
};

/***/ }),

/***/ "./src/sections/blogs.js":
/*!*******************************!*\
  !*** ./src/sections/blogs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-masonry-component */ "react-masonry-component");
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_cards_blog_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards/blog-card */ "./src/components/cards/blog-card.js");
/* harmony import */ var assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/blog-1-1.png */ "./src/assets/blog-1-1.png");
/* harmony import */ var assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/blog-1-2.png */ "./src/assets/blog-1-2.png");
/* harmony import */ var assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/blog-1-3.png */ "./src/assets/blog-1-3.png");
/* harmony import */ var assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/blog-1-4.png */ "./src/assets/blog-1-4.png");
/* harmony import */ var assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\sections\\blogs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const BLOG_DATA = [{
  image: assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'How to work with prototype design with adobe xd featuring tools',
  description: 'The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design',
  path: '/',
  linkLabel: 'Learn More'
}, {
  image: null,
  title: 'Antibias receives honorable gift mention at Fast Company’s most Innovation by Design Awards',
  description: null,
  path: '/',
  linkLabel: null
}, {
  image: assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Multiple task wireframing with team management perform better',
  description: null,
  path: '/',
  linkLabel: null
}, {
  image: assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Multiple art board prototype with Figma',
  description: 'Beyond launched antibias, a Chrome extension that replaces LinkedIn profile photos',
  path: '/',
  linkLabel: 'Learn More'
}, {
  image: assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  title: 'Team presentation with latest user interface & experience reach more',
  description: null,
  path: '/',
  linkLabel: null
}];
const masonryOptions = {
  transitionDuration: 0
};

const Blogs = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "news",
    sx: styles.blogs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Popular blog post we updated",
    text: "Updete newsfeed blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default.a,
    options: masonryOptions,
    sx: styles.blogWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, BLOG_DATA.map(({
    image,
    title,
    description,
    path,
    linkLabel
  }, index) => __jsx(components_cards_blog_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    image: image,
    title: title,
    description: description,
    path: path,
    linkLabel: linkLabel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Blogs);
const styles = {
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px']
  },
  blogWrapper: {
    mx: '-15px'
  }
};

/***/ }),

/***/ "./src/sections/call-to-action.js":
/*!****************************************!*\
  !*** ./src/sections/call-to-action.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var assets_call_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/call-image.png */ "./src/assets/call-image.png");
/* harmony import */ var assets_call_image_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_call_image_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\sections\\call-to-action.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CallToAction = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.callToAction,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.flex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Behind the design"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Code that we used to built the website with integrating apps"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "I Just do front end code in React.js, Flutter, Next.js, Vue.js, Nuxt.js, and Wordpress"), __jsx(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/https://www.behance.net/muhammadadilriaz",
    sx: styles.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "More here")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_call_image_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "call image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);
const styles = {
  callToAction: {
    mt: ['-90px', null, null, null, '0'],
    py: ['50px', null, null, null, '110px', null, '140px']
  },
  flex: {
    flexWrap: 'wrap'
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 38.5%'],
    textAlign: ['center', null, null, null, 'left'],
    pt: ['80px', null, null, null, '0'],
    maxWidth: ['100%', null, null, '80%', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['30px', null, null, null, '0'],
    span: {
      fontSize: '18px',
      fontWeight: 700,
      color: 'primary',
      display: 'block',
      lineHeight: 1
    },
    h3: {
      color: '#0F2137',
      fontWeight: 700,
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      lineHeight: 1.36,
      letterSpacing: '-1.5px',
      mt: '20px',
      mb: '30px'
    },
    p: {
      color: '#02073E',
      fontSize: ['16px', null, null, '18px'],
      lineHeight: ['2', null, null, 2.33],
      mb: '30px'
    }
  },
  button: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8
    }
  },
  images: {
    flex: ['0 0 100%', null, null, null, '0 0 61.5%']
  }
};

/***/ }),

/***/ "./src/sections/faq.js":
/*!*****************************!*\
  !*** ./src/sections/faq.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/accordion/accordion */ "./src/components/accordion/accordion.js");
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\sections\\faq.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const accordionData = [{
  isExpanded: false,
  title: 'How much does it cost to be a credit card merchant?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: true,
  title: 'How can I open a merchant account?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: false,
  title: 'How long does the application take?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: false,
  title: 'Can I make payment outside of Hong Kong?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: false,
  title: 'How do I get the payment complete?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}];

const FAQ = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Frequently Ask Question",
    text: "Ask your question and meet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.flex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.faqWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(components_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: accordionData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Do you have any quesiton? Please ask here we ready to support"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "If your question is not list here, please feel free to make a manual support."), __jsx(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    sx: styles.askButton,
    path: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "Ask your Question")))));
};

/* harmony default export */ __webpack_exports__["default"] = (FAQ);
const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px']
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px']
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px']
    }
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8
    }
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%']
  }
};

/***/ }),

/***/ "./src/sections/featured.js":
/*!**********************************!*\
  !*** ./src/sections/featured.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/tab-image-1.png */ "./src/assets/tab-image-1.png");
/* harmony import */ var assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/dot-pattern.svg */ "./src/assets/dot-pattern.svg");
/* harmony import */ var assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\sections\\featured.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Featured = () => {
  const {
    0: tab,
    1: setTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    active: 'budget'
  });

  const handleTab = tab => {
    if (tab === 'budget') {
      setTab(_objectSpread(_objectSpread({}, tab), {}, {
        active: 'budget'
      }));
    }

    if (tab === 'adjust') {
      setTab(_objectSpread(_objectSpread({}, tab), {}, {
        active: 'adjust'
      }));
    }

    if (tab === 'report') {
      setTab(_objectSpread(_objectSpread({}, tab), {}, {
        active: 'report'
      }));
    }

    if (tab === 'create') {
      setTab(_objectSpread(_objectSpread({}, tab), {}, {
        active: 'create'
      }));
    }
  };

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.featured,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Do you want to design UX/UI of your idea?",
    text: "Introducing all screen details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.tabButtonTopWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.tabButtonWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleTab('budget'),
    className: `${tab.active === 'budget' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillDollarCircle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }), "Budget Overview"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleTab('adjust'),
    className: `${tab.active === 'adjust' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaCog"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }), "Create & adjust"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleTab('report'),
    className: `${tab.active === 'report' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillPieChart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), "View Reports"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleTab('create'),
    className: `${tab.active === 'create' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaBriefcase"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }), "Create & adjust"))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.tabContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, tab.active === 'budget' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "tab image",
    className: "tabImage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), tab.active === 'create' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "tab image",
    className: "tabImage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), tab.active === 'adjust' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "tab image",
    className: "tabImage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), tab.active === 'report' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "tab image",
    className: "tabImage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Featured);
const fadeIn = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const styles = {
  featured: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    backgroundColor: '#F9FAFC'
  },
  container: {
    position: 'relative',
    top: '150px',
    mt: '-150px'
  },
  tabButtonTopWrapper: {
    overflowY: ['hidden', null, null, null, null, 'inherit'],
    overflowX: ['auto', null, null, null, null, 'inherit']
  },
  tabButtonWrapper: {
    width: ['700px', null, null, null, null, '100%'],
    mx: ['auto', null, null, null, null, '0'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(1,7,13,.1)',
    mb: '35px',
    button: {
      display: 'flex',
      alignItems: 'center',
      pb: ['15px', null, null, null, '35px'],
      px: ['15px', null, null, null, '30px'],
      flexShrink: '0',
      border: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#0F2137',
      fontSize: ['14px', null, null, null, '18px'],
      fontWeight: 500,
      lineHeight: 1,
      position: 'relative',
      transition: 'all 500ms ease',
      svg: {
        fontSize: ['18px', null, null, null, '30px'],
        color: '#ADBDD0',
        opacity: 0.7,
        mr: '15px',
        transition: 'all 500ms ease'
      },
      '&:hover, &.active': {
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#0F2137',
        svg: {
          color: '#0F2137',
          opacity: 1
        },
        '&::before': {
          transform: 'scale(1,1)'
        }
      },
      '&::before': {
        content: "''",
        position: 'absolute',
        bottom: '-2px',
        backgroundColor: '#0F2137',
        left: 0,
        width: '100%',
        height: '3px',
        transform: 'scale(0,1)',
        transition: 'transform 500ms ease'
      }
    }
  },
  tabContent: {
    minHeight: ['190px', null, '300px', '385px', null, '600px'],
    position: 'relative',
    '&::before': {
      content: "''",
      width: '302px',
      height: '347px',
      backgroundImage: `url(${assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_8___default.a})`,
      position: 'absolute',
      bottom: '-30px',
      right: '-40px',
      display: ['none', null, null, null, null, 'block']
    },
    '.tabImage': {
      position: 'relative',
      animation: `${fadeIn} 0.8s linear`
    }
  }
};

/***/ }),

/***/ "./src/sections/jackpot.js":
/*!*********************************!*\
  !*** ./src/sections/jackpot.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_cards_jackpot_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/cards/jackpot-card */ "./src/components/cards/jackpot-card.js");
/* harmony import */ var assets_jackpot_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jackpot.png */ "./src/assets/jackpot.png");
/* harmony import */ var assets_jackpot_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_jackpot_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_jackpot_1_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jackpot-1-1.png */ "./src/assets/jackpot-1-1.png");
/* harmony import */ var assets_jackpot_1_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_jackpot_1_1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jackpot_1_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jackpot-1-2.png */ "./src/assets/jackpot-1-2.png");
/* harmony import */ var assets_jackpot_1_2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_jackpot_1_2_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\sections\\jackpot.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const JACKPOT_DATA = [{
  image: assets_jackpot_1_1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managments your blood tests.',
  heading: 'Clean Minimal Features'
}, {
  image: assets_jackpot_1_2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  text: 'Get your blood tests delivered at let home collect sample from the victory of the managments your blood tests.',
  heading: 'Eye Catching Design'
}];

const Jackpot = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.jackpot,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.flex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_jackpot_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "jackpot image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "Core features"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "Dashboard Design of your Business")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.jackpotCardBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, JACKPOT_DATA.map(({
    image,
    heading,
    text
  }, index) => __jsx(components_cards_jackpot_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: image,
    heading: heading,
    text: text,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Jackpot);
const styles = {
  jackpot: {
    pt: ['65px', null, null, null, '85px', null, '125px']
  },
  flex: {
    flexWrap: 'wrap'
  },
  image: {
    flex: ['0 0 100%', null, null, null, null, '0 0 62.5%'],
    img: {
      maxWidth: ['100%', null, null, null, null, null, 'none'],
      float: 'right'
    }
  },
  content: {
    flex: ['0 0 100%', null, null, null, null, '0 0 37.5%']
  },
  heading: {
    mb: '30px',
    pt: '60px',
    textAlign: ['center', null, null, null, null, 'left'],
    pl: ['0', null, null, '30px'],
    maxWidth: ['80%', null, null, '100%'],
    mx: ['auto', null, null, '0'],
    span: {
      display: 'block',
      fontSize: '18px',
      color: 'primary',
      fontWeight: 700,
      lineHeight: 1,
      mb: '20px'
    },
    h3: {
      color: '#0F2137',
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1.36
    }
  },
  jackpotCardBox: {
    display: ['grid', null, null, null, null, 'block'],
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr']
  }
};

/***/ }),

/***/ "./src/sections/pricing.js":
/*!*********************************!*\
  !*** ./src/sections/pricing.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_cards_price_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards/price-card */ "./src/components/cards/price-card.js");
/* harmony import */ var assets_price_user_1_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/price-user-1-1.svg */ "./src/assets/price-user-1-1.svg");
/* harmony import */ var assets_price_user_1_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_price_user_1_1_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_price_user_1_2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/price-user-1-2.svg */ "./src/assets/price-user-1-2.svg");
/* harmony import */ var assets_price_user_1_2_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_price_user_1_2_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\sections\\pricing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const PRICE_MONTHLY_DATA = [{
  recommended: null,
  title: 'For Team pack',
  icon: assets_price_user_1_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  amount: '29.99/mo',
  options: [{
    status: true,
    label: 'Ultimate access to all course, exercises and assessments'
  }, {
    status: true,
    label: 'Free access for all kind of exercise corrections with downloads.'
  }, {
    status: true,
    label: 'Total assessment corrections with free download access system'
  }, {
    status: false,
    label: 'Unlimited download of courses on the mobile app contents'
  }, {
    status: false,
    label: 'Download and print courses and exercises in PDF'
  }]
}, {
  recommended: 'Recommended',
  title: 'For Organization pack',
  icon: assets_price_user_1_2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  amount: '49.99/mo',
  options: [{
    status: true,
    label: 'Ultimate access to all course, exercises and assessments'
  }, {
    status: true,
    label: 'Free access for all kind of exercise corrections with downloads.'
  }, {
    status: true,
    label: 'Total assessment corrections with free download access system'
  }, {
    status: true,
    label: 'Unlimited download of courses on the mobile app contents'
  }, {
    status: true,
    label: 'Download and print courses and exercises in PDF'
  }]
}];
const PRICE_YEARLY_DATA = [{
  recommended: null,
  title: 'For Team pack',
  icon: assets_price_user_1_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  amount: '99.99/yr',
  options: [{
    status: true,
    label: 'Ultimate access to all course, exercises and assessments'
  }, {
    status: true,
    label: 'Free access for all kind of exercise corrections with downloads.'
  }, {
    status: true,
    label: 'Total assessment corrections with free download access system'
  }, {
    status: false,
    label: 'Unlimited download of courses on the mobile app contents'
  }, {
    status: false,
    label: 'Download and print courses and exercises in PDF'
  }]
}, {
  recommended: 'Recommended',
  title: 'For Organization pack',
  icon: assets_price_user_1_2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  amount: '199.99/yr',
  options: [{
    status: true,
    label: 'Ultimate access to all course, exercises and assessments'
  }, {
    status: true,
    label: 'Free access for all kind of exercise corrections with downloads.'
  }, {
    status: true,
    label: 'Total assessment corrections with free download access system'
  }, {
    status: true,
    label: 'Unlimited download of courses on the mobile app contents'
  }, {
    status: true,
    label: 'Download and print courses and exercises in PDF'
  }]
}];

const Pricing = () => {
  const {
    0: plan,
    1: setPlan
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    active: 'monthly',
    pricingPlan: PRICE_MONTHLY_DATA
  });

  const handlePlan = plan => {
    if (plan === 'monthly') {
      setPlan(_objectSpread(_objectSpread({}, plan), {}, {
        active: 'monthly',
        pricingPlan: PRICE_MONTHLY_DATA
      }));
    }

    if (plan === 'yearly') {
      setPlan(_objectSpread(_objectSpread({}, plan), {}, {
        active: 'yearly',
        pricingPlan: PRICE_YEARLY_DATA
      }));
    }
  };

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "section",
    id: "pricing",
    sx: styles.pricing,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "What deal suit you perfect",
    text: "Meet our pricing plan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.btnWrap,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => handlePlan('monthly'),
    className: `${plan.active === 'monthly' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, "Monthly Plan"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => handlePlan('yearly'),
    className: `${plan.active === 'yearly' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, "Annual Plan")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, plan.pricingPlan.map((price, index) => __jsx(components_cards_price_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: price,
    key: `${plan.active}-card--key${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);
const fadeIn = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricing: {
    pt: ['200px', null, null, null, '200px', null, '240px'],
    pb: ['80px', null, null, null, '80px', '100px', '140px']
  },
  btnWrap: {
    width: '302px',
    height: '60px',
    mt: ['-20px', null, null, '0px'],
    mb: ['40px', null, null, '60px'],
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    p: '7px',
    mx: 'auto',
    button: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: '5px',
      color: '#0F2137',
      letterSpacing: '-0.24px',
      fontSize: '16px',
      fontWeight: 500,
      position: 'relative',
      outline: 'none',
      fontFamily: 'DM Sans',
      transition: 'all 500ms ease',
      '&.active': {
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
        backgroundColor: '#ffffff'
      },
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0)'
      }
    }
  },
  grid: {
    width: '100%',
    maxWidth: '960px',
    mx: ['auto'],
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/services.js":
/*!**********************************!*\
  !*** ./src/sections/services.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_cards_service_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cards/service-card */ "./src/components/cards/service-card.js");
/* harmony import */ var assets_service_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/service-1.png */ "./src/assets/service-1.png");
/* harmony import */ var assets_service_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_service_1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_service_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/service-2.png */ "./src/assets/service-2.png");
/* harmony import */ var assets_service_2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_service_2_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_service_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/service-3.png */ "./src/assets/service-3.png");
/* harmony import */ var assets_service_3_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_service_3_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_service_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/service-4.png */ "./src/assets/service-4.png");
/* harmony import */ var assets_service_4_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_service_4_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_service_5_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/service-5.png */ "./src/assets/service-5.png");
/* harmony import */ var assets_service_5_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_service_5_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_service_6_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/service-6.png */ "./src/assets/service-6.png");
/* harmony import */ var assets_service_6_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_service_6_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\sections\\services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const SERVICES_DATA = [{
  image: assets_service_1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  text: 'Design your low and high fidelity prototype of your idea into bussiness, Convert your design into code',
  heading: 'Low/High fidelity Prototype',
  path: '#'
}, {
  image: assets_service_2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  text: 'Get your wireframes for backend developers. who are able to understand your apps layout flow',
  heading: 'Prototype Wireframe',
  path: '#'
}, {
  image: assets_service_3_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  text: 'UI layout design a best front end developer who can make your layout animated and eye-catching look',
  heading: 'Front End Development',
  path: '#'
}, {
  image: assets_service_4_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  text: 'I will advertise your services and also rank your app or handover your social media account to my management team.',
  heading: 'Marketing & advertising',
  path: '#'
}, {
  image: assets_service_5_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  text: 'You need website for your bussiness? I will offer you a wix, wordpress for your business.',
  heading: 'Ultimate development',
  path: '#'
}, {
  image: assets_service_6_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  text: '6 months of support services, if you will come form my account ',
  heading: 'Online support',
  path: '#'
}];

const Services = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "services",
    sx: styles.services,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "What is the perfect services for your bussiness",
    text: "Starting from Androd/iOS App's to website & dashboard design",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, SERVICES_DATA.map(({
    image,
    text,
    heading,
    path
  }, index) => __jsx(components_cards_service_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: image,
    text: text,
    heading: heading,
    path: path,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);
const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px']
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr']
  }
};

/***/ }),

/***/ "./src/sections/subscribe.js":
/*!***********************************!*\
  !*** ./src/sections/subscribe.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\sections\\subscribe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Subscribe = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.subscribe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Subscribe to get notified about New Services"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "By subscribing with your mail, you will accept our privacy policy"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "form",
    sx: styles.form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "label",
    htmlFor: "subscribeEmail",
    variant: "styles.srOnly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Email"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Enter your email",
    type: "email",
    id: "subscribeEmail",
    sx: styles.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    sx: styles.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Subscribe us"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);
const styles = {
  subscribe: {
    py: ['80px', null, null, null, '80px', '100px', '140px'],
    backgroundColor: '#020718',
    h3: {
      textAlign: 'center',
      fontSize: ['23px', null, null, null, null, '30px', '36px'],
      lineHeight: [1.5, null, null, '1'],
      color: '#fff',
      letterSpacing: ['-0.5px'],
      mb: ['0px', null, null, '15px'],
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0']
    },
    p: {
      fontSize: ['16px'],
      color: '#fff',
      opacity: '.6',
      letterSpacing: ['-0.5px'],
      textAlign: 'center',
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      mt: ['10px', null, null, '0']
    }
  },
  form: {
    width: ['100%'],
    maxWidth: ['555px'],
    mx: ['auto'],
    display: ['flex'],
    flexWrap: ['wrap'],
    mt: ['30px', null, null, null, '60px']
  },
  input: {
    width: ['100%'],
    maxWidth: ['100%', null, '370px', '380px'],
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255, .08)',
    outline: 'none',
    color: 'rgba(255,255,255, .8)',
    fontSize: '16px',
    pl: ['0px', null, null, '30px'],
    height: ['50px', null, null, '60px'],
    mr: ['0px', null, null, '15px'],
    textAlign: ['center', null, null, 'left']
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    fontWeight: '500',
    fontSize: ['18px'],
    color: '#020718',
    letterSpacing: '-0.5px',
    outline: 'none',
    padding: ['0px 30.75px'],
    minHeight: ['50px', null, null, '60px'],
    width: ['100%', null, null, 'auto'],
    mt: ['10px', null, null, '0'],
    mx: ['auto', null, null, '0'],
    '&:hover': {
      backgroundColor: '#fff',
      opacity: '0.8'
    }
  }
};

/***/ }),

/***/ "./src/sections/testimonials.js":
/*!**************************************!*\
  !*** ./src/sections/testimonials.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_cards_testimonial_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/cards/testimonial-card */ "./src/components/cards/testimonial-card.js");
/* harmony import */ var assets_testimonial_1_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/testimonial-1-1.png */ "./src/assets/testimonial-1-1.png");
/* harmony import */ var assets_testimonial_1_1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_1_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial-1-2.png */ "./src/assets/testimonial-1-2.png");
/* harmony import */ var assets_testimonial_1_2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_1_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial-1-3.png */ "./src/assets/testimonial-1-3.png");
/* harmony import */ var assets_testimonial_1_3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_3_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_1_4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial-1-4.png */ "./src/assets/testimonial-1-4.png");
/* harmony import */ var assets_testimonial_1_4_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_4_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_testimonial_1_5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/testimonial-1-5.png */ "./src/assets/testimonial-1-5.png");
/* harmony import */ var assets_testimonial_1_5_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_5_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_testimonial_1_6_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/testimonial-1-6.png */ "./src/assets/testimonial-1-6.png");
/* harmony import */ var assets_testimonial_1_6_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_6_png__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "E:\\React web app\\014-agency-classic-next\\src\\sections\\testimonials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













swiper__WEBPACK_IMPORTED_MODULE_2___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_2__["Autoplay"]]);
const TESTIMONIALS_DATA = [[{
  image: assets_testimonial_1_1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  text: 'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
  username: '@hello.mimmie',
  name: 'Minnie Horn'
}, {
  image: assets_testimonial_1_2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  text: 'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.',
  username: '@merryn.manley',
  name: 'Merryn Manley'
}], [{
  image: assets_testimonial_1_3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  text: 'Excellent service. I would Sincerely thank Adil, from the bottom of my heart. He has given me plenty of revisions and treated me as his family member. He has taken care of and provided me with the best knowledge and excellent work. Thank you so much.',
  username: '@vsharath17',
  name: 'Vsharath'
}, {
  image: assets_testimonial_1_4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  text: 'The service provider is very professional and responsive, willing to cooperate with our demands.',
  username: '@qingshunli',
  name: 'Qing Shunli'
}], [{
  image: assets_testimonial_1_5_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  text: 'Website design task in Figma. Very responsive seller and we iterated several times the designs until we had a good solution.',
  username: '@chriswin',
  name: 'Chriswin'
}, {
  image: assets_testimonial_1_6_png__WEBPACK_IMPORTED_MODULE_11___default.a,
  text: 'Sunny is a Sunshine to work with. It is my second time workibg with him. He has been proactive, creative, kind and overdelivered my expectations I had :)) Thanks again.',
  username: '@startupjulius',
  name: 'Julius Freund'
}], [{
  image: assets_testimonial_1_1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  text: 'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
  username: '@hello.mimmie',
  name: 'Minnie Horn'
}, {
  image: assets_testimonial_1_2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  text: 'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.',
  username: '@merryn.manley',
  name: 'Merryn Manley'
}], [{
  image: assets_testimonial_1_3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  text: 'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
  username: '@hi.veona',
  name: 'Veona Watson'
}, {
  image: assets_testimonial_1_4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  text: 'I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result',
  username: '@hey.nku',
  name: 'Paseka Nku'
}], [{
  image: assets_testimonial_1_5_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  text: 'Thank you for all your help. Your service was excellent and very FAST.',
  username: '@cherice.me',
  name: 'Cherice Justin'
}, {
  image: assets_testimonial_1_6_png__WEBPACK_IMPORTED_MODULE_11___default.a,
  text: 'For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend',
  username: '@myself.thais',
  name: 'Thais Carballal'
}]];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  };
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "testimonials",
    sx: styles.testimonials,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "What client say about us",
    text: "Customer testimonial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }), __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__["Swiper"], _extends({}, testimonialCarousel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }), TESTIMONIALS_DATA.map((item, index) => __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, item.map(({
    image,
    text,
    name,
    username
  }, _index) => __jsx(components_cards_testimonial_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: image,
    text: text,
    name: name,
    key: _index,
    username: username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);
const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px']
  }
};

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  breakpoints: ['376px', '576px', '768px', '992px', '1200px', '1650px'],
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#02073E',
    // primary heading color
    heading_secondary: '#343D48',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E9EDF5',
    // border color
    primary: '#8D448B',
    // primary button and link color
    secondary: '#793677',
    // secondary color - can be used for hover states
    black: '#0F2137',
    // black color
    gray: '#F8FAFC',
    muted: '#7B8188',
    // muted color
    accent: '#609' // a contrast color for emphasizing UI

  },
  fonts: {
    body: 'DM Sans',
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'DM Sans',
    // heading: 'Bree Serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [13, 14, 16, 18, 20, 21, 30, 36, 48, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 2,
    heading: '50px'
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  // space: [0, 4, 8, 16, 32, 64],
  sizes: {
    container: ['1250px']
  },
  // variants can use custom, user-defined names
  layout: {
    container: {
      px: ['15px', null, null, '30px', '40px']
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center' // justifyContent: 'space-between',

    },
    main: {},
    footer: {
      backgroundColor: 'background_secondary'
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      letterSpacing: 'heading',
      color: 'heading'
    },
    heroPrimary: {
      fontSize: [5, 55],
      fontWeight: 'normal',
      lineHeight: ['40px', '80px'],
      letterSpacing: '-1px',
      textAlign: ['center', 'left']
    },
    title: {
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: '30px',
      color: '#0F2137'
    },
    heroSecondary: {
      color: 'text_secondary',
      lineHeight: ['30px', '42px'],
      letterSpacing: '0.1em',
      textAlign: ['center', 'left']
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      p: 2
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    primary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      cursor: 'pointer',
      transition: '500ms',
      fontSize: 2,
      outline: 'none',
      '&:hover': {
        bg: 'secondary'
      }
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      WebkitFontSmoothing: 'antialiased'
    },
    a: {
      cursor: 'pointer',
      textDecoration: 'none'
    },
    button: {
      cursor: 'pointer'
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-masonry-component":
/*!******************************************!*\
  !*** external "react-masonry-component" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "react-waypoint":
/*!*********************************!*\
  !*** external "react-waypoint" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1VJVVgtRGVzaWducy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hY2NvcmRpb24tYXJyb3ctZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hY2NvcmRpb24tYXJyb3cuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYXJyb3ctYW5nbGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyLWljb24tMS0xLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lci1pY29uLTEtMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItaWNvbi0xLTMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyLWljb24tMS00LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lci1pY29uLTEtNS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItaWNvbi0xLTYuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyLWxvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmxvZy0xLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmxvZy0xLTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmxvZy0xLTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmxvZy0xLTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY2FsbC1pbWFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kb3QtcGF0dGVybi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYWNrcG90LTEtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYWNrcG90LTEtMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qYWNrcG90LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2xvZ28tbGlnaHQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbXVoYW1tYWRhZGlscmlhei5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS1jaGVjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS1jcm9zcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS11c2VyLTEtMS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS11c2VyLTEtMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NlcnZpY2UtMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlLTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS01LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NlcnZpY2UtNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90YWItaW1hZ2UtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwtMS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsLTEtMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwtMS01LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsLTEtNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYmFzZS1hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9jay10aXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9ibG9nLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvamFja3BvdC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL3ByaWNlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvc2VydmljZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL3Rlc3RpbW9uaWFsLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZURyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9jcmVhdGUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvZHJhd2VyL2RyYXdlci5jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9ibG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY2FsbC10by1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvZmVhdHVyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2phY2twb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9zdWJzY3JpYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy1kcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC13YXlwb2ludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlci9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkSHJlZiIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsInF1ZXJ5IiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJyZXNvbHZlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJjbGVhblBhdGhuYW1lIiwicGFyc2VkSHJlZiIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJlbmNvZGVVUklDb21wb25lbnQiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImRlY29kZSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInZhbHVlIiwiQXJyYXkiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJhbXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsImVuY29kZVVSSSIsInNlYXJjaFBhcmFtcyIsInJlc3VsdCIsIml0ZW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJvcHRpb25hbCIsInJlcGVhdCIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInNlZ21lbnQiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJBY2NvcmRpb24iLCJpdGVtcyIsIm9wZW5JY29uIiwiYWNjb3JkaW9uSWNvbk9wZW4iLCJjbG9zZUljb24iLCJhY2NvcmRpb25JY29uQ2xvc2UiLCJjb21iaW5lUmVkdWNlcnMiLCJzaW5nbGUiLCJwcmV2ZW50Q2xvc2UiLCJvcGVuSW5kZXhlcyIsImhhbmRsZUl0ZW1DbGljayIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJpbmNsdWRlcyIsImNvbnRlbnRzIiwiQmFzZUFjY29yZGlvbiIsImludGVybmFsU2V0U3RhdGUiLCJjbG9zaW5nIiwidHlwZSIsImZpbHRlciIsImxvZyIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwiY2hhbmdlcyIsImNhbGxiYWNrIiwiYWxsQ2hhbmdlcyIsInNldFN0YXRlIiwiYWN0dWFsU3RhdGUiLCJjaGFuZ2VzT2JqZWN0Iiwic3RhdGVSZWR1Y2VyIiwib25TdGF0ZUNoYW5nZSIsInJlbmRlciIsIkFjY29yZGlvbkJ1dHRvbiIsInJlc3QiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImxldHRlclNwYWNpbmciLCJjdXJzb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInBvc2l0aW9uIiwiY29sb3IiLCJvdXRsaW5lIiwiYmFja2dyb3VuZENvbG9yIiwic3BhbiIsInRvcCIsInJpZ2h0IiwidHJhbnNmb3JtIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXJSYWRpdXMiLCJpbWciLCJ3aWR0aCIsInZhcmlhbnRzIiwib3BlbiIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSIsImNsb3NlZCIsIm1hcmdpblRvcCIsIkFjY29yZGlvbkNvbnRlbnRzIiwiaXNPcGVuIiwib3ZlcmZsb3dZIiwicGFkZGluZyIsIkFjY29yZGlvbkl0ZW0iLCJvdmVyZmxvdyIsImxlbmd0aCIsInNsaWNlIiwicmVkdWNlcnMiLCJyZWR1Y2UiLCJhY2MiLCJyZWR1Y2VyIiwiQmxvY2tUaXRsZSIsInRleHQiLCJzdHlsZXMiLCJibG9ja1RpdGxlIiwidGV4dEFsaWduIiwibWIiLCJoMyIsIkJsb2dDYXJkIiwiaW1hZ2UiLCJkZXNjcmlwdGlvbiIsImxpbmtMYWJlbCIsImJsb2dDYXJkIiwiY29udGVudCIsImFycm93QW5nbGUiLCJteCIsImxlZnQiLCJib3R0b20iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtdCIsImEiLCJvcGFjaXR5IiwibWwiLCJKYWNrcG90Q2FyZCIsImhlYWRpbmciLCJqYWNrcG90Q2FyZCIsImZsZXhEaXJlY3Rpb24iLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93IiwiZmxleFNocmluayIsIm1yIiwiUHJpY2VDYXJkIiwiaWNvbiIsImFtb3VudCIsInJlY29tbWVuZGVkIiwicHJpY2VDYXJkIiwicHJpY2VIZWFkZXIiLCJvcHRpb24iLCJzdGF0dXMiLCJwcmljZUNoZWNrIiwicHJpY2VDcm9zcyIsImxhYmVsIiwiYnV0dG9uV3JhcCIsInByaWNlQXJyb3ciLCJweCIsInVsIiwibGlzdFN0eWxlIiwibGkiLCJtYXhXaWR0aCIsInB0IiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwicHkiLCJTZXJ2aWNlQ2FyZCIsInNlcnZpY2VDYXJkIiwibGluayIsIlRlc3RpbW9uaWFsc0NhcmQiLCJ1c2VybmFtZSIsInRlc3RpbW9uaWFsc0NhcmQiLCJ0ZXN0aW1vbmlhbHNJbmZvIiwidGVzdGltb25pYWxzSW1hZ2UiLCJ0ZXN0aW1vbmlhbHNDb250ZW50IiwicGIiLCJEcmF3ZXIiLCJjbGFzc05hbWUiLCJjbG9zZUJ1dHRvbiIsImNsb3NlQnV0dG9uU3R5bGUiLCJkcmF3ZXJIYW5kbGVyIiwidG9nZ2xlSGFuZGxlciIsInBsYWNlbWVudCIsImRyYXdlclN0eWxlIiwiY2xvc2VCdG5TdHlsZSIsInRyaW0iLCJkZWZhdWx0UHJvcHMiLCJGb290ZXIiLCJmb290ZXIiLCJjb250YWluZXIiLCJsb2dvTGlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJsaW5rc1dyYXAiLCJmbGV4V3JhcCIsIkhlYWRlciIsImhlYWRlciIsImxvZ29EYXJrIiwibmF2IiwibWVudUl0ZW1zIiwibmF2TGluayIsImhlYWRlckJ0biIsIk1vYmlsZURyYXdlciIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJ1c2VDYWxsYmFjayIsImRyYXdlciIsImNsb3NlIiwibWVudSIsIm1lbnVGb290ZXIiLCJidXR0b24iLCJiYWNrZ3JvdW5kIiwiekluZGV4IiwiZnciLCJJbWFnZSIsInNyYyIsIkxheW91dCIsImlzU3RpY2t5IiwidXNlU3RpY2t5U3RhdGUiLCJ1c2VTdGlja3lEaXNwYXRjaCIsInNldFN0aWNreSIsInJlbW92ZVN0aWNreSIsIm9uV2F5cG9pbnRQb3NpdGlvbkNoYW5nZSIsImN1cnJlbnRQb3NpdGlvbiIsInZhcmlhbnQiLCJOYXZMaW5rIiwiTG9nbyIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsInByb3BlcnR5IiwiY29uY2F0IiwibGFuZyIsInVzZURpc3BhdGNoIiwicHJvdmlkZXIiLCJ1c2VDcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiU3RpY2t5UHJvdmlkZXIiLCJpc1NpZGViYXJTdGlja3kiLCJFcnJvciIsImRlZmF1bHRWYWx1ZSIsImRlZmF1bHREaXNwYXRjaCIsInN0YXRlQ3R4IiwiY3JlYXRlQ29udGV4dCIsImRpc3BhdGNoQ3R4IiwidXNlU3RhdGVDdHgiLCJ1c2VEaXNwYXRjaEN0eCIsIlByb3ZpZGVyIiwidXNlUmVkdWNlciIsImFjdGlvbiIsIkRyYXdlclByb3ZpZGVyIiwiSW5kZXhQYWdlIiwidGhlbWUiLCJCYW5uZXIiLCJiYW5uZXIiLCJiYW5uZXJJY29uMSIsImJhbm5lckljb24yIiwiYmFubmVySWNvbjMiLCJiYW5uZXJJY29uNCIsImJhbm5lckljb241IiwiYmFubmVySWNvbjYiLCJiYW5uZXJJY29uNyIsImxvZ28iLCJsb2dvSW1hZ2UiLCJiYW5uZXJJbWFnZSIsImJhbm5lckFuaW0xIiwia2V5ZnJhbWVzIiwiYmFubmVyQW5pbTIiLCJiYW5uZXJBbmltMyIsImgyIiwiaDQiLCJhbmltYXRpb24iLCJCTE9HX0RBVEEiLCJibG9nSW1hZ2UxIiwiYmxvZ0ltYWdlMyIsImJsb2dJbWFnZTIiLCJibG9nSW1hZ2U0IiwibWFzb25yeU9wdGlvbnMiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJCbG9ncyIsImJsb2dzIiwiTWFzb25yeSIsImJsb2dXcmFwcGVyIiwiQ2FsbFRvQWN0aW9uIiwiY2FsbFRvQWN0aW9uIiwiZmxleCIsImltYWdlcyIsImNhbGxJbWFnZSIsInZlcnRpY2FsQWxpZ24iLCJhY2NvcmRpb25EYXRhIiwiaXNFeHBhbmRlZCIsIkZBUSIsImZhcVdyYXBwZXIiLCJhc2tCdXR0b24iLCJwciIsIkZlYXR1cmVkIiwidGFiIiwic2V0VGFiIiwidXNlU3RhdGUiLCJhY3RpdmUiLCJoYW5kbGVUYWIiLCJmZWF0dXJlZCIsInRhYkJ1dHRvblRvcFdyYXBwZXIiLCJ0YWJCdXR0b25XcmFwcGVyIiwidGFiQ29udGVudCIsInRhYkltYWdlMSIsImZhZGVJbiIsIm92ZXJmbG93WCIsImJvcmRlckJvdHRvbSIsInN2ZyIsIm1pbkhlaWdodCIsImRvdFBhdHRlcm4iLCJKQUNLUE9UX0RBVEEiLCJqYWNrcG90SW1hZ2UxIiwiamFja3BvdEltYWdlMiIsIkphY2twb3QiLCJqYWNrcG90IiwiamFja3BvdEltYWdlIiwiamFja3BvdENhcmRCb3giLCJmbG9hdCIsInBsIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIlBSSUNFX01PTlRITFlfREFUQSIsInByaWNlSWNvbjEiLCJwcmljZUljb24yIiwiUFJJQ0VfWUVBUkxZX0RBVEEiLCJQcmljaW5nIiwicGxhbiIsInNldFBsYW4iLCJwcmljaW5nUGxhbiIsImhhbmRsZVBsYW4iLCJwcmljaW5nIiwiYnRuV3JhcCIsImdyaWQiLCJwcmljZSIsImZhZGVJbjIiLCJmb250RmFtaWx5IiwiZ3JpZEdhcCIsIlNFUlZJQ0VTX0RBVEEiLCJzZXJ2aWNlSW1hZ2UxIiwic2VydmljZUltYWdlMiIsInNlcnZpY2VJbWFnZTMiLCJzZXJ2aWNlSW1hZ2U0Iiwic2VydmljZUltYWdlNSIsInNlcnZpY2VJbWFnZTYiLCJTZXJ2aWNlcyIsInNlcnZpY2VzIiwiU3Vic2NyaWJlIiwic3Vic2NyaWJlIiwiZm9ybSIsImlucHV0IiwiU3dpcGVyQ29yZSIsInVzZSIsIkF1dG9wbGF5IiwiVEVTVElNT05JQUxTX0RBVEEiLCJ0ZXN0aW1vbmlhbHNJbWFnZTEiLCJ0ZXN0aW1vbmlhbHNJbWFnZTIiLCJ0ZXN0aW1vbmlhbHNJbWFnZTMiLCJ0ZXN0aW1vbmlhbHNJbWFnZTQiLCJ0ZXN0aW1vbmlhbHNJbWFnZTUiLCJ0ZXN0aW1vbmlhbHNJbWFnZTYiLCJUZXN0aW1vbmlhbHMiLCJ0ZXN0aW1vbmlhbENhcm91c2VsIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImxvb3AiLCJzcGVlZCIsImNlbnRlcmVkU2xpZGVzIiwiYXV0b0hlaWdodCIsImF1dG9wbGF5Iiwid2FpdEZvclRyYW5zaXRpb24iLCJkZWxheSIsImJyZWFrcG9pbnRzIiwidGVzdGltb25pYWxzIiwiX2luZGV4IiwiY29sb3JzIiwidGV4dF9zZWNvbmRhcnkiLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmRfc2Vjb25kYXJ5IiwiYm9yZGVyX2NvbG9yIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImJsYWNrIiwiZ3JheSIsIm11dGVkIiwiYWNjZW50IiwiZm9udHMiLCJib2R5IiwibW9ub3NwYWNlIiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzaXplcyIsImxheW91dCIsInRvb2xiYXIiLCJtYWluIiwiaGVyb1ByaW1hcnkiLCJoZXJvU2Vjb25kYXJ5IiwibGVhZCIsImxpbmtzIiwidGV4dERlY29yYXRpb24iLCJhdmF0YXIiLCJidXR0b25zIiwiYmciLCJyb290IiwiV2Via2l0Rm9udFNtb290aGluZyIsImhyIiwiYm9yZGVyQ29sb3IiLCJzck9u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QUFnQyxtQ0FBbUMsNEJBQTRCLCtCQUErQixvQkFBb0IseUJBQXlCLFVBQVU7QUFDcFYsaUQ7Ozs7Ozs7Ozs7O0FDREEsaUJBQWlCLG1CQUFPLENBQUMsbUVBQW9COzs7Ozs7Ozs7Ozs7QUNBN0MsMEY7Ozs7Ozs7Ozs7O0FDQUEscUNBQXFDLDRxQjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDRyQjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLG9yQjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLGdzRDs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLG90Qzs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDRyRjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDQrRjs7Ozs7Ozs7Ozs7QUNBckMsNkY7Ozs7Ozs7Ozs7O0FDQUEsNkY7Ozs7Ozs7Ozs7O0FDQUEseUY7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEseUY7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDLG9rRjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHdsRTs7Ozs7Ozs7Ozs7QUNBakMscUY7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsOEY7Ozs7Ozs7Ozs7O0FDQUEscUNBQXFDLHduQzs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLG80Qjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLHdsQzs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDR6Rjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDR4STs7Ozs7Ozs7Ozs7QUNBckMsaUNBQWlDLHc1Qzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG81Qzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGc1Qjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHd1Qzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG9yQzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDR6Qjs7Ozs7Ozs7Ozs7QUNBakMseUY7Ozs7Ozs7Ozs7O0FD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Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL1VJVVgtRGVzaWducy02YTRiZTIzOTk3MDIxZjY3ZGQyODE0NjYxMTMwMzkxNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU9TSWdkbWxsZDBKdmVEMGlNQ0F3SURFMklEa2lJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4d1lYUm9JR1E5SWswNExqTXlPRFF4SURndU56YzBNakZET0M0d05UazJOU0E0TGpjMk9ESXlJRGN1Tnprek1qRWdPQzQyTlRrMk1pQTNMalU1TWpnMklEZ3VORFV3TWpSTU1TNHlPRGcwTlNBeExqZzFPRFEwUXpBdU9EZzNOREEwSURFdU5ETTVNVElnTUM0NU1ESXlNaUF3TGpjM05EQTRNU0F4TGpNeU1UVTBJREF1TXpjek1qQTBRekV1TnpRd05qa2dMVEF1TURJM05qYzNNU0F5TGpRd05UVTVJQzB3TGpBeE1qZzJNek1nTWk0NE1EWTJOeUF3TGpRd05qSTVNa3c0TGpNNE5Ea2dOaTR5TXprd09Fd3hOQzR5TVRjMElEQXVOall3TnpFMlF6RTBMall6TmpjZ01DNHlOVGs0TXprZ01UVXVNekF4TlNBd0xqSTNORFkxTVNBeE5TNDNNREkwSURBdU5qa3pPREF5UXpFMkxqRXdNellnTVM0eE1USTVOaUF4Tmk0d09EZzRJREV1TnpjNElERTFMalkyT1RNZ01pNHhOemt3TkV3NUxqQTNOelkySURndU5EZ3pOVEpET0M0NE5qZ3dPU0E0TGpZNE16Z2dPQzQxT1Rjd09DQTRMamM0TURJZ09DNHpNamcwTVNBNExqYzNOREl4V2lJZ1ptbHNiRDBpSXpBeU1EY3pSU0l2UGdvOEwzTjJaejRLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT1NJZ2FHVnBaMmgwUFNJeE5TSWdkbWxsZDBKdmVEMGlNQ0F3SURrZ01UVWlJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrQ2p4d1lYUm9JR1E5SWswNExqWTVPRGc0SURjdU5UQXdNRE5ET0M0Mk9UZzRPQ0EzTGpjMk9EZzJJRGd1TlRrMk1qTWdPQzR3TXpjMk5TQTRMak01TVRNM0lEZ3VNalF5TmpGTU1TNDVOREUyTXlBeE5DNDJPVEl6UXpFdU5UTXhNelVnTVRVdU1UQXlOaUF3TGpnMk5qRTBNeUF4TlM0eE1ESTJJREF1TkRVMk1ESTJJREUwTGpZNU1qTkRNQzR3TkRVNU1EZ3hJREUwTGpJNE1qSWdNQzR3TkRVNU1EZ3hJREV6TGpZeE56RWdNQzQwTlRZd01qWWdNVE11TWpBMk9FdzJMakUyTXpFeElEY3VOVEF3TUROTU1DNDBOVFl5TWpVZ01TNDNPVE15TkVNd0xqQTBOakV3TnpRZ01TNHpPREk1TlNBd0xqQTBOakV3TnpRZ01DNDNNVGM1TkRnZ01DNDBOVFl5TWpVZ01DNHpNRGM0TmpORE1DNDROall6TkRNZ0xUQXVNVEF5TmpFNUlERXVOVE14TlRVZ0xUQXVNVEF5TmpFNUlERXVPVFF4T0RNZ01DNHpNRGM0TmpOTU9DNHpPVEUxTnlBMkxqYzFOelEwUXpndU5UazJORFlnTmk0NU5qSTFJRGd1TmprNE9EZ2dOeTR5TXpFeU9TQTRMalk1T0RnNElEY3VOVEF3TUROYUlpQm1hV3hzUFNJak1ESXdOek5GSWk4K0Nqd3ZjM1puUGdvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5pSWdhR1ZwWjJoMFBTSXhNU0lnZG1sbGQwSnZlRDBpTUNBd0lEWWdNVEVpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHdZWFJvSUdROUlrMDFMamcwT0RjeUlEVXVPRFEyTnpGRE5TNDRORGczTWlBMkxqQXlOVGt6SURVdU56Z3dNamtnTmk0eU1EVXhNaUExTGpZME16Y3lJRFl1TXpReE56Wk1NUzR6TkRNNUlERXdMalkwTVRWRE1TNHdOekF6T0NBeE1DNDVNVFV4SURBdU5qSTJPVEEzSURFd0xqa3hOVEVnTUM0ek5UTTBPVFlnTVRBdU5qUXhOVU13TGpBNE1EQTRORGNnTVRBdU16WTRNU0F3TGpBNE1EQTRORGNnT1M0NU1qUTNOU0F3TGpNMU16UTVOaUE1TGpZMU1USk1OQzR4TlRneU1TQTFMamcwTmpjeFREQXVNelV6TmpJNUlESXVNRFF5TVRsRE1DNHdPREF5TVRjMklERXVOelk0TmpjZ01DNHdPREF5TVRjMklERXVNekkxTXpNZ01DNHpOVE0yTWprZ01TNHdOVEU1TkVNd0xqWXlOekEwSURBdU56YzRNamc1SURFdU1EY3dOVEVnTUM0M056Z3lPRGtnTVM0ek5EUXdNeUF4TGpBMU1UazBURFV1TmpRek9EVWdOUzR6TlRFMk5VTTFMamM0TURRMElEVXVORGc0TXpZZ05TNDRORGczTWlBMUxqWTJOelUxSURVdU9EUTROeklnTlM0NE5EWTNNVm9pSUdacGJHdzlJaU0wUmprMlJrWWlMejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTkRNaUlHaGxhV2RvZEQwaU5EZ2lJSFpwWlhkQ2IzZzlJakFnTUNBME15QTBPQ0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRURXhMaklnTVRNdU16a3hNVXd3SURFM0xqazVNVEZNTVRJdU5TQTBOeTQ1T1RFeFREUXlMalVnTXpVdU5Ea3hNVXd6Tnk0M0lESXpMamc1TVRGRE16Y3VOaUF5TXk0M09URXhJRE0zTGpZZ01qTXVOemt4TVNBek55NDFJREl6TGpjNU1URkRNemN1TkNBeU15NDNPVEV4SURNM0xqUWdNak11TmpreE1TQXpOeTR6SURJekxqWTVNVEZETXpjdU1pQXlNeTQxT1RFeElETTNMakVnTWpNdU5Ua3hNU0F6Tmk0NUlESXpMalU1TVRGRE16WXVPU0F5TXk0MU9URXhJRE0yTGprZ01qTXVOVGt4TVNBek5pNDRJREl6TGpVNU1URklNell1TjBnek5pNDJTRE0yTGpWRE16WXVOQ0F5TXk0MU9URXhJRE0yTGpRZ01qTXVOVGt4TVNBek5pNHpJREl6TGpVNU1URklNell1TWtNek5pNHhJREl6TGpVNU1URWdNellnTWpNdU5Ua3hNU0F6TlM0NUlESXpMalk1TVRGRE16VXVOQ0F5TXk0NE9URXhJRE0xTGpFZ01qUXVNamt4TVNBek5TQXlOQzQyT1RFeFF6TTBMallnTWpZdU1Ua3hNU0F6TXk0MUlESTNMalU1TVRFZ016RXVPU0F5T0M0eE9URXhRekk1TGpJZ01qa3VNamt4TVNBeU5pNHhJREkzTGprNU1URWdNalF1T1NBeU5TNHlPVEV4UXpJekxqZ2dNakl1TlRreE1TQXlOUzR4SURFNUxqUTVNVEVnTWpjdU9DQXhPQzR5T1RFeFF6STVMalFnTVRjdU5Ua3hNU0F6TVM0eElERTNMamM1TVRFZ016SXVOU0F4T0M0MU9URXhRek15TGprZ01UZ3VOemt4TVNBek15NDBJREU0TGpnNU1URWdNek11T1NBeE9DNDJPVEV4UXpNMElERTRMalk1TVRFZ016UXVNU0F4T0M0MU9URXhJRE0wTGpFZ01UZ3VOVGt4TVVNek5DNHhJREU0TGpVNU1URWdNelF1TWlBeE9DNDFPVEV4SURNMExqSWdNVGd1TkRreE1Vd3pOQzR6SURFNExqTTVNVEZNTXpRdU5DQXhPQzR5T1RFeFRETTBMalVnTVRndU1Ua3hNVXd6TkM0MklERTRMakE1TVRGRE16UXVOaUF4T0M0d09URXhJRE0wTGpZZ01UZ3VNRGt4TVNBek5DNDJJREUzTGprNU1URkRNelF1TnlBeE55NDRPVEV4SURNMExqY2dNVGN1TnpreE1TQXpOQzQ0SURFM0xqWTVNVEZETXpRdU9DQXhOeTQxT1RFeElETTBMamdnTVRjdU5Ua3hNU0F6TkM0NElERTNMalE1TVRGRE16UXVPQ0F4Tnk0ek9URXhJRE0wTGpnZ01UY3VNemt4TVNBek5DNDRJREUzTGpJNU1URk1NekFnTlM0MU9URXhNVXd4T0M0NElERXdMakk1TVRGRE1UZ2dNVEF1TkRreE1TQXhOeTR5SURFd0xqRTVNVEVnTVRZdU9TQTVMak01TVRFeFF6RTJMamNnT0M0NE9URXhNU0F4Tmk0NElEZ3VNemt4TVRJZ01UY2dOeTQ1T1RFeE1rTXhOeTQ0SURZdU5Ua3hNVEVnTVRnZ05DNDRPVEV4TVNBeE55NHpJRE11TWpreE1URkRNVFl1TWlBd0xqVTVNVEV4TlNBeE15NHhJQzB3TGpjd09EZzROU0F4TUM0eklEQXVNemt4TVRFMVF6Y3VOaUF4TGpRNU1URXhJRFl1TXlBMExqVTVNVEV4SURjdU5DQTNMak01TVRFeVF6Z2dPQzQ1T1RFeE1pQTVMalFnT1M0NU9URXhNU0F4TUM0NUlERXdMalE1TVRGRE1URXVNeUF4TUM0MU9URXhJREV4TGpjZ01UQXVPRGt4TVNBeE1TNDVJREV4TGpNNU1URkRNVEl1TXlBeE1pNHdPVEV4SURFeExqa2dNVEl1T1RreE1TQXhNUzR5SURFekxqTTVNVEZhSWlCbWFXeHNQU0lqUkVGRk1rVTRJaTgrQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTlRNaUlHaGxhV2RvZEQwaU5EVWlJSFpwWlhkQ2IzZzlJakFnTUNBMU15QTBOU0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRUUTVMakF4TkRZZ01qUXVORGs1TmtNME9DNDNPVE0ySURJMUxqUTNORGtnTkRjdU9ETTJOaUF5Tmk0d056Z3pJRFEyTGpnMk1UTWdNalV1T0RVM00wdzBNeTR6TlRBeklESTFMakEyTVRkTU5ERXVPREkxTlNBek1TNDNPVEV4VERNMExqZzJOVFFnTWpNdU1UTTVNVXd5TXk0ME5UUTNJREl3TGpVMU16UkRNakl1TkRjNU5DQXlNQzR6TXpJMUlESXhMamczTmlBeE9TNHpOelUwSURJeUxqQTVOeUF4T0M0ME1EQXlUREkxTGpZM056RWdNaTQyTURBM01VTXlOUzQ0T1RneElERXVOakkxTkRNZ01qWXVPRFUxTVNBeExqQXlNakF4SURJM0xqZ3pNRFFnTVM0eU5ETXdNVXcxTVM0eU16Y2dOaTQxTkRZNE9FTTFNaTR5TVRJeklEWXVOelkzT0RnZ05USXVPREUxTnlBM0xqY3lORGc1SURVeUxqVTVORGNnT0M0M01EQXhOMHcwT1M0d01UUTJJREkwTGpRNU9UWmFJaUJtYVd4c1BTSWpSRUZGTWtVNElpOCtDanh3WVhSb0lHUTlJazAxTGpJMk5qWWdNemd1TXpjME9FdzNMakkxTlRVMklESTVMalU1TnpOTU5TNDJPVFV4TWlBeU9TNHlORE0zUXpNdU5qUTNNRFFnTWpndU56YzVOaUF5TGpNMk5EYzJJREkyTGpjME5pQXlMamd5T0RnMUlESTBMalk1TnpsTU5pNDBNRGc1TnlBNExqZzVPRFF6UXpZdU9EY3pNRFlnTmk0NE5UQXpOU0E0TGprd05qY3lJRFV1TlRZNE1EY2dNVEF1T1RVME9DQTJMakF6TWpFMlRETTBMak0yTVRRZ01URXVNek0yUXpNMkxqUXdPVFVnTVRFdU9EQXdNU0F6Tnk0Mk9URTNJREV6TGpnek16Z2dNemN1TWpJM055QXhOUzQ0T0RFNVRETXpMalkyT1RZZ016RXVOVGd6T0VNek15NHlNRFUySURNekxqWXpNVGtnTXpFdU1UY3hPU0F6TkM0NU1UUXhJREk1TGpFeU16Z2dNelF1TkRVd01Vd3hPQzR6T1RVNElETXlMakF4T1RGTU5TNHlOalkySURNNExqTTNORGhhVFRVdU56azJNalVnTWpZdU1qZzVNMHd4TWk0d05qSTNJREkzTGpRNE1qZE1NVEF1TURBeUlETXpMakUyTkV3eE9DNHdNVEU1SURJNExqZ3pNRGRNTXpBdU9URXdNeUF6TVM0MU1qWTVURE0wTGpRd01pQXhOQzR4TVRjMVRERXdMakk0T0NBNExqZzNPVGswVERVdU56azJNalVnTWpZdU1qZzVNMW9pSUdacGJHdzlJaU5FUVVVeVJUZ2lMejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpNNUlpQm9aV2xuYUhROUlqUTFOaUlnZG1sbGQwSnZlRDBpTUNBd0lETXpPU0EwTlRZaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHUTlJazB6TURFdU9EUWdOakF1TWpnME0wd3pNRE11TnprNElEVTFMamt3TWpGRE1qZzNMall4T0NBMU9TNHhNakUzSURJM015NDBNREVnTmpVdU1qWXlNaUF5TmpFdU5EVXlJRGMwTGpNeE1EaERNalEwTGpZZ09EY3VNRFkwSURJek5pNHlOak1nTVRBeUxqVXhOaUF5TXpJdU1qSXpJREV4TXk0eU1qZERNak13TGpRek1TQXhNVGd1TURBeUlESXlPUzR3T1RjZ01USXlMamc1T0NBeU1qZ3VNekUwSURFeU55NDJNVFJETWpJeUxqWXpNaUF4TWpjdU16Y3pJREl4Tmk0eU5qSWdNVEk0TGpNek5pQXlNRGt1TlNBeE16QXVORFkxUXpFNU5pNDVPVGtnTVRNMExqTTVNaUF4T0RndU1UWTJJREUwTkM0eU5Ua2dNVGd4TGpZMU5DQXhOakV1TlRBMlF6RTNOUzQ1SURFM05pNDNOekVnTVRjeUxqVTJPU0F4T1RVdU9EZzNJREUyT0M0M01ERWdNakU0TGpBeVF6RTJOUzR4TWlBeU16Z3VOVFUySURFMk1TNHdOaUF5TmpFdU9ETTNJREUxTkM0eU9DQXlPRFF1TmpBMlF6RTBOaTQxTmpVZ016RXdMall4TmlBeE16WXVORFEzSURNek1pNHhNRFlnTVRJekxqTTRPU0F6TlRBdU1qaERNVEV5TGpVNU9DQXpOalV1TWprMUlEazVMalkzTXpNZ016YzNMakVnT0RRdU9Ua3pOaUF6T0RVdU16YzFRemN5TGpJeE1EZ2dNemt5TGpVMk1TQTFOeTQyT0RZeUlETTVOeTR5T0RjZ05ERXVOemN5SURNNU9TNDBNek5ETWpjdU56Z3pOeUEwTURFdU16TTBJREV6TGpjeU5UWWdOREF4TGpJNE55QXdMakF4TkRnM09Ua2dNems1TGpnME1rd3hNQzR6T1RZeklEUXdOQzQwT0RKRE1qQXVPRGsxTkNBME1EVXVNVE1nTXpFdU5qSTJPQ0EwTURRdU56TXpJRFF5TGpNeE9UUWdOREF6TGpJM05VTTFPQzQzTVRnMklEUXdNUzR3TkRjZ056TXVOekkwTXlBek9UWXVNVFV6SURnMkxqa3pNamdnTXpnNExqY3pNa014TURJdU1URTFJRE00TUM0eE9USWdNVEUxTGpRME1pQXpOamd1TURFeklERXlOaTQxTnlBek5USXVOVE14UXpFek9TNDROelFnTXpNekxqazVPU0F4TlRBdU1UYzFJRE14TWk0eE5EVWdNVFU0TGpBeUlESTROUzQzTURKRE1UWTBMamcxTVNBeU5qSXVOekl6SURFMk9DNDVOREVnTWpNNUxqTXlPQ0F4TnpJdU5USTJJREl4T0M0Mk9EZERNVGMyTGpNMUlERTVOaTQzTkRjZ01UYzVMalkzTVNBeE56Y3VOemszSURFNE5TNHlPVE1nTVRZeUxqZzNOME14T1RFdU16TTFJREUwTmk0NE1qVWdNVGs1TGpRd055QXhNemN1TnpBMElESXhNQzQyTmprZ01UTTBMakUxT1VNeU1UY3VOamd4SURFek1TNDVOU0F5TWpNdU16UXlJREV6TVM0ek15QXlNamN1TnpZeklERXpNUzQwTnpaRE1qSTNMalV6T0NBeE16TXVOalV6SURJeU55NDBNalFnTVRNMUxqYzNNeUF5TWpjdU5ETTJJREV6Tnk0NFF6SXlOeTQxTURRZ01UUTFMakUxTXlBeU1qa3VNalF6SURFMU1DNDROamtnTWpNeUxqTXlOeUF4TlRNdU9EWTBRekl6TkM0M09Ua2dNVFUyTGpJMk9DQXlNemd1TURRMElERTFOaTQ0TkRZZ01qUXhMalEwTmlBeE5UVXVORFZETWpRMExqazVNeUF4TlRRdU1ERXpJREkwTnk0Mk1EUWdNVFV4TGpjeElESTBPQzQ1T1RrZ01UUTRMamMzT1VNeU5UQXVNek01SURFME5TNDVOeklnTWpVd0xqUTFOaUF4TkRJdU56UTJJREkwT1M0ek5ESWdNVE01TGpZNU5FTXlORGN1TlRNeklERXpOQzQzTlRZZ01qUXlMamd6TnlBeE16QXVPREkzSURJek5pNDBNallnTVRJNExqa3hPVU15TXpVdU1EY3lJREV5T0M0MU1EWWdNak16TGpZMk15QXhNamd1TWpFM0lESXpNaTR4T0RjZ01USTNMams0TTBNeU16SXVPVFVnTVRJekxqVTVPQ0F5TXpRdU1UZzNJREV4T1M0d05qUWdNak0xTGpnMk1pQXhNVFF1TlRrM1F6SXpPUzQzTXpFZ01UQTBMak0yTkNBeU5EY3VOamdnT0RrdU5UZzVPU0F5TmpNdU56a2dOemN1TXprNE9FTXlOelF1TmpFNElEWTVMakl6TWpnZ01qZzNMak0yTWlBMk15NDFNVGsySURNd01TNDROQ0EyTUM0eU9EUXpXazB5TXpVdU16STVJREV6TWk0Mk5qVkRNalF3TGpVeU9TQXhNelF1TWpJeklESTBOQzR6TVRNZ01UTTNMakkzTmlBeU5EVXVOamcySURFME1TNHdORU15TkRjdU16RTVJREUwTlM0MU5Ua2dNalExTGpBM05pQXhORGt1T0RFMElESXpPUzQ1TmlBeE5URXVPRGt4UXpJek9DNHdNRFlnTVRVeUxqWTNPQ0F5TXpZdU16ZzVJREUxTWk0ME1qTWdNak0xTGpBME9DQXhOVEV1TVRJeVF6SXpNaTQzTlRnZ01UUTRMamc0TlNBeU16RXVNems0SURFME5DNHdOREVnTWpNeExqTXpOeUF4TXpjdU9ESkRNak14TGpNeE1pQXhNelV1T1RFMElESXpNUzQwTVRVZ01UTXpMamt4TnlBeU16RXVOalUwSURFek1TNDROVEpETWpNekxqQTFPU0F4TXpJdU1EVTFJREl6TkM0eU56WWdNVE15TGpNME15QXlNelV1TXpJNUlERXpNaTQyTmpWYUlpQm1hV3hzUFNJalJFRkZNa1U0SWk4K0NqeHdZWFJvSUdROUlrMHpNemd1TnpRNUlEUTVMamMwTmt3eU9EUXVPRGc1SURNNExqSTFNVFZNTWpreUxqWXpOeUExTWk0Mk5UZ3pURE15TlM0d05UUWdOVEV1TmpZNU0wd3lPVFV1TkRrNElEVTNMamszTnpSTU1qazFMalV3TlNBMU55NDVPVEV5VERJNU5TNDBPVFVnTlRjdU9UYzFNa3d5T0RZdU56VXhJRFkzTGpnNU1UZE1Nams1TGpnME1TQTJOaTR3TlRNMFRETXdOUzR6TkRZZ056WXVNamc0TWt3ek16Z3VOelE1SURRNUxqYzBObG9pSUdacGJHdzlJaU5FUVVVeVJUZ2lMejRLUEM5emRtYytDZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpNNElpQm9aV2xuYUhROUlqTXhOaUlnZG1sbGQwSnZlRDBpTUNBd0lETXpPQ0F6TVRZaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStDanh3WVhSb0lHUTlJazB4TVRndU16STRJRGcxTGpneU9ERkRNVEV6TGpRek15QTNOQzR6TWpBMUlERXdOaTR3TVNBMk5DNHdNelVnT1RZdU9EWTJNeUExTmk0eE1UbERPRGt1TURnek55QTBPUzR6TlRNZ056a3VOelE0SURRMExqQTRNakVnTmprdU5qa3dOaUEwTUM0M01ETTJURGN4TGpjMk9URWdNemN1TVRjM00wTTRNaTR4TkNBME1DNDRNU0E1TVM0MU1UUXhJRFEyTGpFM016RWdPVGt1TkRreU9TQTFNeTR3TnpjNVF6RXdPUzR3T1RJZ05qRXVOREF4TWlBeE1UWXVPRGMwSURjeUxqRTNOeUF4TWpJdU1ERTNJRGcwTGpJME56WkRNVEkzTGpFMU9TQTVOaTR6TVRneUlERXlPUzQxTURJZ01UQTVMalF3TkNBeE1qZ3VPREk1SURFeU1pNHhNRE5ETVRJNExqWTBOQ0F4TWpVdU5qZ2dNVEk0TGpJeE15QXhNamt1TWpBeklERXlOeTQxTmpFZ01UTXlMalkyTjBNeE16Z3VOemcxSURFME55QXhORFV1T0RjeElERTJNeTQ0TXpJZ01UVXhMamd4T1NBeE9EQXVNRFJETVRVekxqSTNNeUF4T0RNdU9UZ2dNVFUwTGpZNU5DQXhPRGd1TURFMklERTFOaTR3TmpNZ01Ua3hMamt3TlVNeE5qRXVNVEF5SURJd05pNHhNVGNnTVRZMkxqTXdOU0F5TWpBdU56azJJREUzTXk0Mk1UVWdNak0wTGpFME5FTXhPREV1T0RZeElESTBPUzR5TURNZ01Ua3pMakk0TXlBeU5qTXVNREEwSURJd05pNDJORGdnTWpjMExqQTFPRU15TWpBdU16ZzFJREk0TlM0ME1qTWdNak0xTGpZMklESTVNeTQzTURnZ01qVXlMakEySURJNU9DNDJOamxETWpVNExqYzVNeUF6TURBdU5qa3hJREkyTlM0M0lETXdNaTR4TkRJZ01qY3lMall4TWlBek1ESXVPVGsxVERJM01DNDBNVEVnTXpBMkxqY3lPRU15TmpNdU56Z3pJRE13TlM0M09EY2dNalUzTGpNd01TQXpNRFF1TkRBeElESTFNQzQ1TVRJZ016QXlMalEyTmtNeU5EQXVPVEU1SURJNU9TNDBOU0F5TXpFdU16RTBJREk1TlM0eU1qVWdNakl5TGpJek5DQXlPRGt1T0RjelF6SXhOUzQ1TkNBeU9EWXVNVFkwSURJd09TNDRPRElnTWpneExqZzVOeUF5TURRdU1TQXlOemN1TVRJeVF6RTVNQzR6TmpNZ01qWTFMamMxTnlBeE56Z3VOakF6SURJMU1TNDFORGNnTVRjd0xqRXhJREl6Tmk0d05ESkRNVFl5TGpZMU9DQXlNakl1TkRJMElERTFOeTR6T0RVZ01qQTNMalU0T0NBeE5USXVNekVnTVRrekxqSTBRekUxTUM0NU5ESWdNVGc1TGpNMUlERTBPUzQxTVRFZ01UZzFMak16TWlBeE5EZ3VNRFl6SURFNE1TNDBNVGxETVRReUxqVTRJREUyTmk0MU1EVWdNVE0yTGpFMU5pQXhOVEV1TVRBMklERXlOaTQwTURJZ01UTTNMamMzT0VNeE1qTXVNRFFnTVRVd0xqWTNOeUF4TVRZdU5EWTRJREUyTWk0eE1ERWdNVEEzTGpRd01TQXhOekF1TkRBNFF6RXdNQzQyT0RNZ01UYzJMalUzTnlBNU1pNDBNakUwSURFNE1TNHdNRElnT0RNdU5URTJNaUF4T0RNdU1qRTNRemMwTGpJNE15QXhPRFV1TlRFMklEWTBMams0TlRZZ01UZzFMakkxTVNBMU5pNDJNVFk1SURFNE1pNDBNamhETkRndU1EUTFPU0F4TnprdU5UVTBJRFF3TGpRd056RWdNVGN6TGpZNE5DQXpOUzR3TlRRM0lERTJOUzQ1TkVNeU9TNDFOek01SURFMU55NDVPREVnTWpjdU1UQTJOeUF4TkRndU56WXlJREk0TGpBM016SWdNVE01TGprMk9FTXlPUzR4TXpnNElERXpNQzR5TlRrZ016UXVNek0zTmlBeE1qRXVNRGcxSURReUxqY3hNRElnTVRFMExqRTFNME0xTUM0Mk1qWTVJREV3Tnk0Mk1ERWdOakF1T0RnME1TQXhNRE11TlRZMElEY3dMamczTnpZZ01UQXpMakE0UXpnd0xqVTFOak1nTVRBeUxqWXlJRGt3TGpNMU5EZ2dNVEEwTGpneU5pQTVPUzQ1TkRjeElERXdPUzQyTWpKRE1UQTRMall6TWlBeE1UTXVPVFV6SURFeE5pNDRORE1nTVRJd0xqTTBOaUF4TWpNdU5qazVJREV5T0M0d09UVkRNVEl6TGpnME55QXhNamd1TWpjMklERXlOQzR3TURZZ01USTRMalF6T1NBeE1qUXVNVFUxSURFeU9DNDJNVGxETVRJMExqUTNOeUF4TWpZdU5ESXlJREV5TkM0Mk9EVWdNVEkwTGpFNElERXlOQzQ0TURVZ01USXhMamt6TTBNeE1qVXVORFkxSURFd09TNDRNRFlnTVRJekxqSXlNeUE1Tnk0ek16VTNJREV4T0M0ek1qZ2dPRFV1T0RJNE1WcE5NVEl3TGpjek15QXhNekF1TnpJNFF6RXhOQzR5TURrZ01USXpMak0ySURFd05pNDBNRFVnTVRFM0xqSTVPU0E1T0M0eE56QXhJREV4TXk0eE9EZERPRGt1TVRneU9DQXhNRGd1TnpBeElEZ3dMakEyTXpNZ01UQTJMalkwSURjeExqQTNOaUF4TURjdU1EWTRRell4TGprME5Ea2dNVEEzTGpVd05DQTFNaTQxTXpReElERXhNUzR5TURVZ05EVXVNamd3T1NBeE1UY3VNakl4UXpNM0xqY3hORGNnTVRJekxqUTVNeUF6TXk0d01UZzVJREV6TVM0M016VWdNekl1TURZeE55QXhOREF1TXprMVF6TXdMakk1TkRJZ01UVTJMak0yTmlBME1TNDJOVGszSURFM015NHhOekVnTlRjdU9URTJOQ0F4TnpndU5qVXhRelkxTGpVMU1EUWdNVGd4TGpJeU5pQTNOQzR3T0RBM0lERTRNUzQwTlRZZ09ESXVOVGMxT0NBeE56a3VNelE0UXprd0xqZ3pOVEVnTVRjM0xqSTROaUE1T0M0ME9ETXhJREUzTXk0eE9UVWdNVEEwTGpjeU1pQXhOamN1TkRnMVF6RXhNeTQ1TWpJZ01UVTVMakEzSURFeU1DNHpPVFFnTVRRM0xqRTBOeUF4TWpNdU1qY3pJREV6TXk0M016SkRNVEl5TGpRMUlERXpNaTQyT1NBeE1qRXVOVGszSURFek1TNDNNREVnTVRJd0xqY3pNeUF4TXpBdU56STRXaUlnWm1sc2JEMGlJMFJCUlRKRk9DSXZQZ284Y0dGMGFDQmtQU0pOTXpNdU9UazVNeUF5Tmk0Mk1EVXhURGcxTGpFek1UUWdNakF1TXpRek9FdzNOaTQzTWpJeklETXpMakV5TnpGTU5EWXVOakF3TkNBeU9TNDFNamd5VERjekxqWXhOemNnTXpjdU9EUTJPRXczTXk0Mk1EazNJRE0zTGpnMU9VdzNNeTQyTWpBeUlETTNMamcwTkRsTU9EQXVPVFE0TWlBME55NDRNRFkyVERZNExqa3dNellnTkRVdU1ERXlOMHcyTWk0NU1qazRJRFUwTGpBNU5ERk1Nek11T1RrNU15QXlOaTQyTURVeFdpSWdabWxzYkQwaUkwUkJSVEpGT0NJdlBnbzhMM04yWno0S1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lci1pY29uLTEtNS02ZjYwMzc0ODFjMjg2YWMxYjViN2VkZTgwOGUwYTMxNC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyLWljb24tMS02LTBkZTZkZGMwYzBiYjUwYmRhMGIzZTAzNDhlMDI4OTFmLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYW5uZXItbG9nby1hNmE3NTgzMTQ5MWVmNGVlZmY2OWY4MDZlODg5MDZmOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmxvZy0xLTEtZDg2ZjllNzYxNzFkNDA3NjUzNmYyYjViZDEyZWE1NGMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jsb2ctMS0yLWMyYjIyMTBmZmJmMTkwOTZhNjNlODg1MTc1ODk5NjJhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9ibG9nLTEtMy0wMDcyMmE4NmE2ZmM2NWYwOGRiOGMxZDA0M2ViODEyMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmxvZy0xLTQtMGI1MTZlMTUxNGU2N2RjMjRkZWM1ZTcxYmQ4ZjUyZTcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhbGwtaW1hZ2UtMDMyMmJkNDNjNTJmYjE2ZmU4MWZkYzE2NTM2OGY2YjkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2RvdC1wYXR0ZXJuLTRiYTk4MjY1ZDllODZlZDJmM2E4M2JmNTQ2MzM4ZTFiLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBZENTVVJCVkhnQjVadDViRlJWRk1hLysyYmFtUzdEV290WWxoYVF5R0tFUWxRa3hhYUpMUmhSREltWUtLQnhneEFTRFNwRWpBeEdDRVNxZjVCbzFFQUF3Y1JFb29sRUdFd0FRVUdKZ21nVHdMQzBwQ3d0cGFWTXA1MzFYYi83cHJYTFRFdm5EVjFtL0NYVHZybnYzdmZldWN1NTU1eDNSaUFPcEJNYTZtY01RdWFBU1JCaUJFVG9Qa2pMYUVEUEE3VEJyREVNVXRwNExwUFZMYmU1bk02NmJ0YjE4YmdXRXBVOHZzempjcDQ2alpCZUFaOTJBWm43YTRTVGRVMGlZQkw1VnVIZHNOdVdVMlFLaWNtOFZDNUxVOUV6ZVBtcFpJZjhBMDA3QVovY0xqYTR6c0VFTVFrc0Z4Wm5ZQlNtUVJNZnNPVU1GbG5STnpTeWt3OUQ2SnZnQ1p5Q283QldPSjNkR3ZWdUN5eFhGejhDcTFqQkc4M2kxeXowRHpqMTVRSG9jcU5ZOStQdjNXbHdXNEhsNjRXRE1ORDJCaS84UElYTjQ3b3l2UXg2Q0RXeWFucHZSUkE3eEhyWDFhNHFkL253Y3MyY0VaQWhKNnM5eDY5MjlHKzhISkJ0c0lpTndybXZ2TE5LblFvc1Z4WG1JdFgyQ1EvbklKR1EyQWM5c0VTc08xQVI3WFJVZ2FWemRpNm44S2RzUEJ1SmlNUmVhdk5YeGRxOWxSMVBhUkYxM3lrWlRtRlhKcXl3Q3NGWnlhVm82SjhPUkFqTWtrVVU5Z1VrUE5RN1N0bDJMRzA1a0U2bmhzQXYrYkJvdS9oMVBKSUNjWUVXMmtLeGJ2L1JscExXRVhZZkdrS0RZaVdQeGlGcGtIbGN5eXZrbXpTWW1ta1ZPTTAyaFh0c0VhSk44OFJGUU1oWnNORTZiRVpyYzJvRi93NUI4cEZsbU1MTkdHdFlyaW9aaDFTYzRtRTZrcE1nbWl3anhZYy9YTk1NRjg4bUZ5TjVoVlZZa1I1YXJtVFYwRkNjUldzMEg4bU9UamVXdnJ1R3ROQllLcXNrMllhNlFOQm5UM2RNcHRKU0VRcU1RUEtUUytVMWdnTExDZWovbnRDZElCVVdPVjZETUViNC80R3U1VnJwS09TZ3QxeDZhd293NEM0Z20zMnNNYVozL1JKd2d3Nk5iam9tRnh0QzVsa3BiSHpyMTA2ckxZVXJ3bFBYOVlObk1vajU4TlBBdEJKdWdBUERaUUVHS0gvOUx2eHBxSXZlenNxNFlKcURxc2JhMnNaekU2YVFjckM2aWpuclNrVjZIbm9LZUhBdVlPTVdYdkVYNE5wQ203d21zcTZGSXp1TjN1YU1lWkFhSjVXdlVkbDhFS25zcUlJRmZCQjIxSkd2YVI3NDI3ZXpNN3I3eERKZzFQM2greGtQemJyZmxnTG5UOEFFdzZ6TmNXUEV6TWlKUVBITHJUMC82VkZPMTJ3R1U4OUUxazJ4QVJObkdxUGwrZnRuM0hEdHBPcXdZRWpSczhoOG9BQ1kvamhIbmE1cndOdStuUkk0YnlyUERXaGZQamJmcE1EQ3hpa3RIREREbUNtdHdyWXdja0w0MHdVMWU3YkNjL28zNDFnRy9HR0IxUlNmM2d1UkpJbE01VHlZODQ2Q0FjU0xEUG5ScTRpSUlZcUJzOGU0L3A0SlQ3dG0zRC90UnUzUlBleEkyYTZxeGpVK2ZORnFwR1RsWUdqSlFnb2FoUFI3a1RYM05lTzg3OHA1Vk8vZWpGQkRlMldVbWowSzJmT1d3anAwZVB0N3g5SFpRcjVYSW1HV2UrN2wyaXlBN2hpTXVyTGpxRDd3RGZSZ2xGRVRHaHo1UmNoNWFTMHNtZTNEVE1FYjEzRGx5L1Z3bnp3WVZrZ2RjRXd0eEpDWlR5SWpJejI4ZS9xYmdJTTdnZnBxbUNFK2dadngrRU80WEZXRlFERFVhUjJOR3RreHBSRFo4NWNoSlR0czZ3U3FMdUg2OTUvajFuRVhJNnUrNkEycFVGTnNhY2dabG9VTXV6MnN5ZlVRekJLM3dENS9BQmV2VmpOMDFIM2pRVTF4aGM3dHFkdHQ2TmlOR1Q0TXR0VDRYbWZGRmM2UlVxTE83WWxKV0lVU05CWmhqVGE4UjUzYkhmTzlPaEtYd083R0p0eHM4S0MzcUc5b1JBUHZHUTl4Q1Z6dmFZcTd4Mk1oeUh1cGU4YURFdGlVQmxDQ3V1UHNiVE40bXJ3SWhVeDNzcTV4SVRiQUJFMWV2N0dHZXh1ZDkvVDZUUnNzYnEwNXB5Sm12SUZldHBMYTRQR2FlbVFpZlNyaVVZVVlVU1ByOHdmUlZ3UzUzNXViWEtLV1V4cW1uRXU5RjVWVjVMMlZ0Q1lrbHFpa3Q2UmQ0RkVCWWlUZGJqTzBabDlndDV0TUZoTGlNZ1VPVmRBcmo3R2R3Q0JIQmh3WmFlZ0xyQXdQbVV3MUtiZFNVWitsVmE0MFVFemRacUdwcHo2SmcyUjBRWjdXcU9kVldrQTVraDVSeVpsOFNVT0tLT01JbHlIWlVWbDhUYmZPYzA2NmxKWStnMlJIaUpQSVBGcWpHWW1hd3JlWlhkQjNHMnZQMDBnamVwdVMxZEE2d25ub0d2OGVRN0lpY0ZnNHc4bW9yV28ySk4vbG1Sb2tIN1YwajBwYnZyUUs3TU1makg4Y2pvakFKVGJLTWpySVZ6eC90aFQ4SjdEWXROOURnVXVoeVl0SUhzN3hIZFlHQnIxcld3b2l6Qlc1cG1RdHgvaHRKUDRyVlBVYXd5bmVkMjFzV3hocEtnbmZ4OXl6dmtMQ0k3ZkRoaDBkUzZNbmw2cTBZVjMvZ21jVE5ibDBIeXhpYWJRMDRxakdzSkdGeWdaczZFS2kwWVd3aWs2dGY2T0JSU3poRlQ1RGVEMzBkL2lNWWdzRDJLK1lTaEJ2d1VnbnRzakZOTTFlUkRnUHMzKzVTQ3I4SWpUdUxISVhOTjlITktLNkRHakU4Q09QeDZZYnlhY0NSV3pXWDFJVWE1UVZoYUFzYlpzeDJ4WGRINjJVbVNkZ1NWMUtvUmMwciszWVhoM2NXWlRkZndSYVlENDhjbEYzaFZXWS82R1dzMlFjcDVOS1djeUhOQkxiVks1SVQrM2RLa0JSem80dTR4Q2RVYzVPMlA2UG5ianlkNHc4VFJSbklhU05wUlUzMnNqNU10S2dwQkkrQnlwL0pKeFNvYklNYmplYlFrYU0zQWdiQzBaU1pSMy9YelJDVUxvOHkvQktKZXJwdXc5MDNZem5wM2ovQWtOS2h5M1dkSUw2QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFYUFNVUkJWSGdCN1p2ZmJ4UlZGTWUvNTg3czlzZHVhWXRWaXRRVWhCQ0lKQmpwQzVvZ01iR2wrT2lEVVJIUVJBTVBKaW9LaEdwWUV5Q2dnQThtR2tQOEFVYi9BNEdpVVlJSnZnaENVaU1TZnJSYXRHRFRuN3ZkM2U3TVBaNjd5NjVZdG1XWnBxRTd5eWRwdC9mT3ZkTTVNL2VlZTgvWjd4QW1BU09paHBZUDFnUm5oQjlpU3pld3F4YXgwbzBLMWp5UXJtWEdMQWJLQ0J3R3lKcndaQVF0N1ljSlNCSlJINE83bWZtS3hkVEpwSDREM0M3WFRWNEtId3YzRWlJYUhpRjRKTHI2clhyaThsZkJ2SWlKbG9oUmM2VTZpS2toUWFCdXVRbm53WFRhNGRUQjZ2YmRGK0NCMnpLNHAvbUZVQWozTHlNN3NJTTBsa3R2RzNlR0VmbmZKMWlydlRvUk83dC9aVlZmSkZMWVV5L1k0S0duMmg2VjRiVkp4dkVLS2RaaGV0QW5KbndQUis4SmZidno1MEk2M05MZy9wV3YxUVFycWw2WGhtdVl0Y3hOOGp3TnBnZ3QwK21DVnZSWjNOR0g3bTNmOWZkRWpTZTgrSkhXN1EzTWJrUmFQUy9GY2t4dkV1Skd2MURzN3FrNHVydHp2RWJqR3R5L2F1dmNvTEkrRWlmUmltS0NjRlNCTjFRYzN0bVYvM0FlTXNiYUg4dDhYWVdpaEk4UVVxOVVIbm12ZSt3Uk5iWWkxckp0ZGxBRnRoU3ZzUVpxWlE1R2pQOFplK1FtZzFtcHRiSzJya2V4STM3SE9OdXgxVG1EWlIxVHNkVnRUUXIwRXFhL2d5cUVjaUs5WmtTVzB4c3Jjd2EvY1h4NHBqaW9MYktiV1FDZndFeno0TkttbnVZM1E5bTZuTUc2ck9KaCtYZ0NlWVo1RVVOTVdCR0N0U3hia1RQT0p0bEZBVFBoUCtvc0ZkaVJMYVNYcGNHV3JRc0N5ajRya1UwbC9JbkRsSHdnZlBqOUhtVkNQTnNLclBPeHNRYmJSSGJHVmhWdGp0Yko3SDRFZmtmQzJHNkozUldyd0h6eHpndmhjMHpNWGxNYlhHSkxTTnNvdnF3Qlhpa1B3bG9pcDdBekNRM2RPd2g5c2NmY1VmRVFCTlY0SDZpK05yZUhkYzljQWlkR0o5LzNOa2tuS0Z5cndaWlV6R0lwZXR0b3lFVUZubjBjOXFvbThmZlhIWDQwZ1dUa1MraXVhNkJaTlNqYkxvRldxRHpkMXFDT25rTHE0SGRnMS9YZTEzSGdnU0NSV21qTHpxb1JYaWtMZ0diZkE2cTZ3ZC9KQlZKNUp0TkROU0c1OE5yL2RhRloxZUpDVlBySGMxOVA5cG9UWUs1RVVwaURFb0doNWlsU2s1aS9SWVlrUm11Vlp2TGo3aW8va2pZMlE3b01KWUxKa1N0eGdGVW9FWWc0Yk5ZRFAwVkh0NENzRWpJMncxMkQvYzVkZy8zT1hZUDlqaGpNTGtvRjJVd3J5ZDFHVVNLd3hyRFpXaVpSSWhqOWlKbkRWMUVpU0NqY0orRWhCbEFpTUtoYktjSWxsQW9hVjJ5dHFVdEpPdDRUcmdaZjZ3ZkhFcG15bklaamNmQmdMRk1lR1lXVzR4U3F1UDRQNWF1NnY2UjlNaVc1S2N0N1g2OG9kRkswWmR0enBOVG44S3F4cXBCVTY5SUhrYjFxdmpvQTNYbnR2MVRyL0hwUVhYWG1zR1FiOWE5L2dPT2prKzk3K3lUa2pPdHB1TGx0aFVTSkJ5UnY2K3RrUElFdXlEMWRxelFGT21SRWQ4RG5NUE41ZHloK1VjMVlqZ0VtZlE1K2gvRkwrS1RSYVFyUmxaRjZxbkQrbEQvdmxKUndxaGx4dExQVTZEUFR3VVA0ZUtSSC9NUlA4Q3VNRTFreGFpNWFZczF2eTBjdmZJWU00VDdGenI1c09XZHdETWxUNWs1azFnVGZZRmJ2SDFLQjhqUFppcHpCOWNmMnhraXozQWwxR1Q3QmlFN2wxKzZxSnFPNnpkYU5JZGI2enJ2eWxEZWorTFZhc3RIUWtjb2p1L2JjV0hsVHhtTTBibjBnOC9sckZEbWE5VUdKZncrTnJjOHJMaDFwM2R6Z2NQQ0FSVVdxdDJTanFIVTI1cE1SNTgxcEdSV3FLeDFrZDlLT1lvTjVYR01ONHlieGFxVkRDdTRHR1JxZklDMitudllrNU1sK1NwUjYyWk5BUE1zL0xkdG1seEd0azdqNVJkbUFHeDNtTk10MHlqSktzckt3KzlWb1BMaS85bmhrd29SR3dlOHZ4SjVzYTRKTlc1RFJZMDZMTDlGbHc5QXJnYzhKeCtKOU03N1plYktRUGdVL3JjckhBcWRkeTk0b251OFpMWE9iektzMGR3NUhudXVQbHN0UEQrbkUya0tOTlhoK1E4WG9NNE5XWUoxT3EvaU1zQzJ0RlptcXRYdFV4bTJuSXJlRDJUckhjZXREcy8rSEJ5YjFTbzdSTGthYmpWbzFPZDlOQzl6MFlqSXlLQmJqbFpwRHpHYm9HMG1GVVJuY2FqU1pMd1JNanR5a2phL0toZlZMQXVteWZIWTVtbjlYVE4xaEd1bEFlL1hBWkY3Rit4ZWdXbXMyQi83eVZBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvamFja3BvdC04NjNlNzgzMjQ0MDAyZTRkOTE0MmJmZmY0YmM0NzVkYi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nby1saWdodC1hY2U1OTExNmRiYTM5OTQyZjcxZTgxYzAzZWU0ZDRmNi5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbXVoYW1tYWRhZGlscmlhei01NGEzZTBjYTBmMGQ5MzNjMGRjNjY1YWQ1ZTc4ZGMzOS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTWpBaUlHaGxhV2RvZEQwaU1UY2lJSFpwWlhkQ2IzZzlJakFnTUNBeU1DQXhOeUlnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRURXVNVEkwTWpJZ01UQXVNall5TkV3eExqQTVNeUF4TUM0eU5UVTJTREUwTGpRM05qRk1NVEF1TWpZNE9TQXhOQzQwTnpKRE1UQXVNRFl5T1NBeE5DNDJOemM1SURrdU9UUTVPVEVnTVRRdU9UVTJOeUE1TGprME9Ua3hJREUxTGpJME9UUkRPUzQ1TkRrNU1TQXhOUzQxTkRJeElERXdMakEyTWprZ01UVXVPREU1SURFd0xqSTJPRGtnTVRZdU1ESTFORXd4TUM0NU1qTTJJREUyTGpZNE1ETkRNVEV1TVRJNU5DQXhOaTQ0T0RZeUlERXhMalF3TXpjZ01UY2dNVEV1TmprMk15QXhOME14TVM0NU9EZzVJREUzSURFeUxqSTJNelFnTVRZdU9EZzNJREV5TGpRMk9UTWdNVFl1TmpneE1Vd3hPUzQyT0RFeElEa3VORFk1T1RKRE1Ua3VPRGczT0NBNUxqSTJNekkxSURJd0xqQXdNRGdnT0M0NU9EYzVOeUF5TUNBNExqWTVOVEV5UXpJd0xqQXdNRGdnT0M0ME1EQTJOU0F4T1M0NE9EYzRJRGd1TVRJMU1pQXhPUzQyT0RFeElEY3VPVEU0T0RaTU1USXVORFk1TXlBd0xqY3dOams1TWtNeE1pNHlOak0wSURBdU5UQXhNekF4SURFeExqazRPVEVnTUM0ek9EZ3hNeUF4TVM0Mk9UWXpJREF1TXpnNE1UTkRNVEV1TkRBek55QXdMak00T0RFeklERXhMakV5T1RRZ01DNDFNREUwTmpNZ01UQXVPVEl6TmlBd0xqY3dOams1TWt3eE1DNHlOamc1SURFdU16WXhPVFZETVRBdU1EWXlPU0F4TGpVMk56UTRJRGt1T1RRNU9URWdNUzQ0TkRFNU5TQTVMamswT1RreElESXVNVE0wTmpORE9TNDVORGs1TVNBeUxqUXlOekUxSURFd0xqQTJNamtnTWk0Mk9EY3hOU0F4TUM0eU5qZzVJREl1T0RreU9EVk1NVFF1TlRJek5pQTNMakV6TWpnMFNERXVNVEE1TWpaRE1DNDFNRFkxSURjdU1UTXlPRFFnTFRRdU1qRTNNVFZsTFRBMklEY3VOalV5TXpZZ0xUUXVNakUzTVRWbExUQTJJRGd1TWpVME9GWTVMakU0TVRFMFF5MDBMakl4TnpFMVpTMHdOaUE1TGpjNE16VTRJREF1TlRJeE5EVTVJREV3TGpJMk1qUWdNUzR4TWpReU1pQXhNQzR5TmpJMFdpSWdabWxzYkQwaUl6WXpOamczT1NJdlBnbzhMM04yWno0S1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qQWlJR2hsYVdkb2REMGlNakFpSUhacFpYZENiM2c5SWpBZ01DQXlNQ0F5TUNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQSEJoZEdnZ1ptbHNiQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmpiR2x3TFhKMWJHVTlJbVYyWlc1dlpHUWlJR1E5SWswNUxqazVPVGsySURCRE5DNDBPRFl3T0NBd0lEQWdOQzQwT0RVME9DQXdJRGt1T1RrNU9UbERNQ0F4TlM0MU1UUWdOQzQwT0RZd09DQXlNQ0E1TGprNU9UazJJREl3UXpFMUxqVXhNemdnTWpBZ01qQWdNVFV1TlRFMElESXdJRGt1T1RrNU9UbERNakFnTkM0ME9EVTBPQ0F4TlM0MU1UTTRJREFnT1M0NU9UazVOaUF3V2sweE5TNDFOelVnTmk0Mk5qUTFNMHc1TGpReU1URXlJREV6TGpVNE56WkRPUzR5TmprMklERXpMamMxT0RZZ09TNHdOVGcwTmlBeE15NDRORFl5SURndU9EUTFOekVnTVRNdU9EUTJNa000TGpZM05qa3hJREV6TGpnME5qSWdPQzQxTURjek1TQXhNeTQzT1RBNElEZ3VNelkxTkNBeE15NDJOemMwVERRdU5URTVNVFlnTVRBdU5qQXdOVU0wTGpFNE56WXhJREV3TGpNek5UVWdOQzR4TXpNNE5DQTVMamcxTVRZeElEUXVNems1TWpFZ09TNDFNVGt6TmtNMExqWTJOREkySURrdU1UZzNNU0ExTGpFME9EZ2dPUzR4TXpNNE9DQTFMalE0TURNMUlEa3VNems1TkRaTU9DNDNOVFl4SURFeUxqQXhPVE5NTVRRdU5ESTBPU0ExTGpZME1qUTRRekUwTGpjd05qWWdOUzR6TWpRM015QXhOUzR4T1RNMElEVXVNamsyTWpNZ01UVXVOVEV3TnlBMUxqVTNPRFE1UXpFMUxqZ3lPRFFnTlM0NE5qRXpJREUxTGpnMU56TWdOaTR6TkRZM09DQXhOUzQxTnpVZ05pNDJOalExTTFvaUlHWnBiR3c5SWlNelJrUkNRakVpTHo0S1BDOXpkbWMrQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qQWlJR2hsYVdkb2REMGlNakFpSUhacFpYZENiM2c5SWpBZ01DQXlNQ0F5TUNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNEtQSEJoZEdnZ1pEMGlUVEV3TGpBd01EZ2dNRU0wTGpRM09ERTJJREFnTUM0d01ERXdNRGN3T0NBMExqUTNOekl5SURBdU1EQXhNREEzTURnZ09TNDVPVGs1UXpBdU1EQXhNREEzTURnZ01UVXVOVEl5TkNBMExqUTNPREVnTWpBZ01UQXVNREF3TnlBeU1FTXhOUzQxTWpNeklESXdJREl3TGpBd01Ea2dNVFV1TlRJeU5DQXlNQzR3TURBNUlEa3VPVGs1T1VNeU1DNHdNREE1SURRdU5EYzNNaklnTVRVdU5USXpOQ0F3SURFd0xqQXdNRGdnTUZwTk1UTXVOemN6TVNBeE15NDRNVEV6UXpFekxqTTNNemdnTVRRdU1qRXdNaUF4TWk0M01qY2dNVFF1TWpFd01pQXhNaTR6TWpneElERXpMamd4TVROTU1UQXVNRFV5TmlBeE1TNDFNelU0VERjdU5qY3pOaUF4TXk0NU1UUTVRemN1TWpjME5UUWdNVFF1TXpFek9DQTJMall5TnpZM0lERTBMak14TXpnZ05pNHlNamc0TVNBeE15NDVNVFE1UXpVdU9ESTVOVFVnTVRNdU5URTFOU0ExTGpneU9UVTFJREV5TGpnMk9EZ2dOaTR5TWpnNE1TQXhNaTQwTmprMVREZ3VOakEzTmpZZ01UQXVNRGt3TjB3MkxqTTVNamMwSURjdU9EYzFPVEpETlM0NU9UTTRNU0EzTGpRM05qVXpJRFV1T1Rrek9ERWdOaTQ0TWprNE5pQTJMak01TWpjMElEWXVORE13TnpSRE5pNDNPVEU0TVNBMkxqQXpNVFkzSURjdU5ETTRPQ0EyTGpBek1UWTNJRGN1T0RNM09UTWdOaTQwTXpBM05Fd3hNQzR3TlRJM0lEZ3VOalExTlRGTU1USXVNVFkwTVNBMkxqVXpORU14TWk0MU5qTXhJRFl1TVRNMU1EY2dNVE11TWpFd015QTJMakV6TkRrMElERXpMall3T1RFZ05pNDFNelJETVRRdU1EQTRNeUEyTGprek16UWdNVFF1TURBNE15QTNMalU0TURRMklERXpMall3T1RFZ055NDVOemt4T1V3eE1TNDBPVGM1SURFd0xqQTVNRFpNTVRNdU56Y3pNaUF4TWk0ek5qWkRNVFF1TVRjeU1TQXhNaTQzTmpRNUlERTBMakUzTWpNZ01UTXVOREV5TVNBeE15NDNOek14SURFekxqZ3hNVE5hSWlCbWFXeHNQU0lqUTBWRU4wVXhJaTgrQ2p3dmMzWm5QZ289XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTnpNaUlHaGxhV2RvZEQwaU5qVWlJSFpwWlhkQ2IzZzlJakFnTUNBM015QTJOU0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0S1BIQmhkR2dnWkQwaVRUWTVMalF4TURjZ05EUXVNekUzTjB3Mk9TNDBNVEV4SURRMExqTXhOemxETnpFdU16QTNPU0EwTlM0ME1EWXpJRGN5TGpVd01EVWdORGN1TlRBd09TQTNNaTQxTURBMElEUTVMamM1TWpaV05qSXVOekV5TjBNM01pNDFNREEwSURZekxqY3dNRFVnTnpFdU56QXhOaUEyTkM0ME9Ua3pJRGN3TGpjeE16Z2dOalF1TkRrNU0wZzFPUzQzT0RGV05qQXVPVEkyTWtnMk9DNDBNamN5U0RZNExqa3lOekpXTmpBdU5ESTJNbFkwT1M0M09USTNRelk0TGpreU56SWdORGd1T0RFd01TQTJPQzQwTlRJeUlEUTNMamc0T0RNZ05qY3VOak0wSURRM0xqUXhOamRNTmpjdU5qTXpOU0EwTnk0ME1UWTBRelkwTGpVM09Ua2dORFV1TmpZeE9DQTJNUzR5T1RJeklEUTBMak15TmpVZ05UY3VPRGM0TmlBME15NHpOak0xUXpVMkxqZzROalFnTkRFdU56azJOU0ExTlM0MU5UTXpJRFF3TGpRek9EY2dOVE11T0RrMk5TQXpPUzQwT0RVeFREVXpMamc1TmpNZ016a3VORGcxUXpVekxqTTFNRFlnTXprdU1UY3hNeUExTWk0M09USXhJRE00TGpnNE1USWdOVEl1TWpJNE15QXpPQzQyTURVNFF6VTRMak16TVNBek9TNDBNVGN6SURZMExqRTRNamtnTkRFdU16RXlNU0EyT1M0ME1UQTNJRFEwTGpNeE56ZGFJaUJtYVd4c1BTSWpPRVEwTkRoQ0lpQnpkSEp2YTJVOUluZG9hWFJsSWk4K0NqeHdZWFJvSUdROUlrMDFNUzR5T0RnZ05EUXVNekUzT1VNMU15NHhPRGMySURRMUxqUXhNRGNnTlRRdU16YzNPQ0EwTnk0MU1ETTNJRFUwTGpNM056Z2dORGt1Tnprd09GWTJNaTQzTVRNeFF6VTBMak0zTnpnZ05qTXVOekF3T1NBMU15NDFOemtnTmpRdU5EazVOeUExTWk0MU9URXlJRFkwTGpRNU9UZElNaTR5T0RZMlF6RXVNams0T0RJZ05qUXVORGs1TnlBd0xqVWdOak11TnpBd09TQXdMalVnTmpJdU56RXpNVlkwT1M0M09UTkRNQzQxSURRM0xqVXdNellnTVM0Mk9UQXlOaUEwTlM0ME1UQTRJRE11TlRnNU5qa2dORFF1TXpFNFREVXhMakk0T0NBME5DNHpNVGM1V2swMU1TNHlPRGdnTkRRdU16RTNPVU16Tnk0d05EZzJJRE0yTGpFek1USWdNVGN1T0RJNU5TQXpOaTR4TXpFeUlETXVOVGc1T0RFZ05EUXVNekUzT1VnMU1TNHlPRGhhVFRVd0xqTXdORGdnTmpBdU9USTJOVWcxTUM0NE1EUTRWall3TGpReU5qVldORGt1Tnprd09FTTFNQzQ0TURRNElEUTRMamd4TURFZ05UQXVNekk1TmlBME55NDRPRGd5SURRNUxqVXdPRGtnTkRjdU5ERTJPRU16Tmk0ek5EQTRJRE01TGpnME56WWdNVGd1TlRNM01pQXpPUzQ0TkRjMklEVXVNelk1TVRRZ05EY3VOREUyT0VNMExqVTBPRFExSURRM0xqZzRPRE1nTkM0d056TXpNeUEwT0M0NE1UQXpJRFF1TURjek16TWdORGt1TnprelZqWXdMalF5TmpWV05qQXVPVEkyTlVnMExqVTNNek16U0RVd0xqTXdORGhhSWlCbWFXeHNQU0lqT0VRME5EaENJaUJ6ZEhKdmEyVTlJbmRvYVhSbElpOCtDanh3WVhSb0lHUTlJazAwTlM0MU5qSXlJRE15TGpRNE56ZERORFF1TXpReU5pQXpNaTQwT0RjM0lEUXpMakV6T1NBek1pNHpNREF6SURReExqazFOQ0F6TVM0NU9USkROREl1T1RVeE15QXpNUzR3TXpReElEUXpMamczTXpJZ01qa3VPVGt6SURRMExqWTJOekVnTWpndU9ETTVOa00wTkM0NU5ETTFJREk0TGpnM05EY2dORFV1TWpVNU9TQXlPQzQ1TVRRMklEUTFMalUyTWpJZ01qZ3VPVEUwTmtNMU1pNHhORElnTWpndU9URTBOaUExTnk0ME9UVXhJREl6TGpVMk1UWWdOVGN1TkRrMU1TQXhOaTQ1T0RFNFF6VTNMalE1TlRFZ01UQXVOREF5SURVeUxqRTBNaklnTlM0d05EZzVNU0EwTlM0MU5qSXlJRFV1TURRNE9URkRORFV1TWpVNU5pQTFMakEwT0RreElEUTBMamswTXpVZ05TNHdPRGcxT1NBME5DNDJOalk1SURVdU1USXpOVGhETkRNdU9EY3lPU0F6TGprM01ESXhJRFF5TGprMU1TQXlMamt5T1RJM0lEUXhMamsxTXpjZ01TNDVOekV5TlVNME15NHhNemczSURFdU5qWXlPVFlnTkRRdU16UXlOQ0F4TGpRM05UVTVJRFExTGpVMk1qSWdNUzQwTnpVMU9VTTFOQzR4TVRBNUlERXVORGMxTlRrZ05qRXVNRFk0TXlBNExqUXpNamswSURZeExqQTJPRE1nTVRZdU9UZ3hOa00yTVM0d05qZ3pJREkxTGpVek1ETWdOVFF1TVRFd09DQXpNaTQwT0RjM0lEUTFMalUyTWpJZ016SXVORGczTjFvaUlHWnBiR3c5SWlNNFJEUTBPRUlpSUhOMGNtOXJaVDBpZDJocGRHVWlMejRLUEhCaGRHZ2daRDBpVFRReUxqazBOU0F4Tmk0NU9ERTNRelF5TGprME5TQXlOUzQxTXpBMElETTFMams0TnpVZ016SXVORGczTnlBeU55NDBNemc1SURNeUxqUTROemRETVRndU9Ea3dOQ0F6TWk0ME9EYzNJREV4TGprek1qa2dNalV1TlRNd05DQXhNUzQ1TXpJNUlERTJMams0TVRkRE1URXVPVE15T1NBNExqUXpNamsxSURFNExqZzVNRElnTVM0ME56VTFPU0F5Tnk0ME16ZzVJREV1TkRjMU5UbERNelV1T1RnM05pQXhMalEzTlRVNUlEUXlMamswTlNBNExqUXpNamsxSURReUxqazBOU0F4Tmk0NU9ERTNXazB6T1M0ek56RTRJREUyTGprNE1UZERNemt1TXpjeE9DQXhNQzQwTURFNUlETTBMakF4T0RrZ05TNHdORGczT1NBeU55NDBNemc1SURVdU1EUTROemxETWpBdU9EVTVNaUExTGpBME9EYzVJREUxTGpVd05qRWdNVEF1TkRBeE9TQXhOUzQxTURZeElERTJMams0TVRkRE1UVXVOVEEyTVNBeU15NDFOakUxSURJd0xqZzFPVElnTWpndU9URTBOU0F5Tnk0ME16ZzVJREk0TGpreE5EVkRNelF1TURFNE55QXlPQzQ1TVRRMUlETTVMak0zTVRnZ01qTXVOVFl4TlNBek9TNHpOekU0SURFMkxqazRNVGRhSWlCbWFXeHNQU0lqT0VRME5EaENJaUJ6ZEhKdmEyVTlJbmRvYVhSbElpOCtDand2YzNablBnbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRFFpSUdobGFXZG9kRDBpTmpVaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TkNBMk5TSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajRLUEhCaGRHZ2daRDBpVFRZNUxqUXhNRGNnTkRRdU16RTNOMHcyT1M0ME1URXhJRFEwTGpNeE56bEROekV1TXpBM09TQTBOUzQwTURZeklEY3lMalV3TURVZ05EY3VOVEF3T1NBM01pNDFNREEwSURRNUxqYzVNalpXTmpJdU56RXlOME0zTWk0MU1EQTBJRFl6TGpjd01EVWdOekV1TnpBeE5pQTJOQzQwT1RreklEY3dMamN4TXpnZ05qUXVORGs1TTBnMU9TNDNPREZXTmpBdU9USTJNa2cyT0M0ME1qY3lTRFk0TGpreU56SldOakF1TkRJMk1sWTBPUzQzT1RJM1F6WTRMamt5TnpJZ05EZ3VPREV3TVNBMk9DNDBOVEl5SURRM0xqZzRPRE1nTmpjdU5qTTBJRFEzTGpReE5qZE1OamN1TmpNek5TQTBOeTQwTVRZMFF6WTBMalUzT1RrZ05EVXVOall4T0NBMk1TNHlPVEl6SURRMExqTXlOalVnTlRjdU9EYzROaUEwTXk0ek5qTTFRelUyTGpnNE5qUWdOREV1TnprMk5TQTFOUzQxTlRNeklEUXdMalF6T0RjZ05UTXVPRGsyTlNBek9TNDBPRFV4VERVekxqZzVOak1nTXprdU5EZzFRelV6TGpNMU1EWWdNemt1TVRjeE15QTFNaTQzT1RJeElETTRMamc0TVRJZ05USXVNakk0TXlBek9DNDJNRFU0UXpVNExqTXpNU0F6T1M0ME1UY3pJRFkwTGpFNE1qa2dOREV1TXpFeU1TQTJPUzQwTVRBM0lEUTBMak14TnpkYUlpQm1hV3hzUFNJak9FUTBORGhDSWlCemRISnZhMlU5SW5kb2FYUmxJaTgrQ2p4d1lYUm9JR1E5SWswMU1TNHlPRGdnTkRRdU16RTNPVU0xTXk0eE9EYzJJRFExTGpReE1EY2dOVFF1TXpjM09DQTBOeTQxTURNM0lEVTBMak0zTnpnZ05Ea3VOemt3T0ZZMk1pNDNNVE14UXpVMExqTTNOemdnTmpNdU56QXdPU0ExTXk0MU56a2dOalF1TkRrNU55QTFNaTQxT1RFeUlEWTBMalE1T1RkSU1pNHlPRFkyUXpFdU1qazRPRElnTmpRdU5EazVOeUF3TGpVZ05qTXVOekF3T1NBd0xqVWdOakl1TnpFek1WWTBPUzQzT1RORE1DNDFJRFEzTGpVd016WWdNUzQyT1RBeU5pQTBOUzQwTVRBNElETXVOVGc1TmprZ05EUXVNekU0VERVeExqSTRPQ0EwTkM0ek1UYzVXazAxTVM0eU9EZ2dORFF1TXpFM09VTXpOeTR3TkRnMklETTJMakV6TVRJZ01UY3VPREk1TlNBek5pNHhNekV5SURNdU5UZzVPREVnTkRRdU16RTNPVWcxTVM0eU9EaGFUVFV3TGpNd05EZ2dOakF1T1RJMk5VZzFNQzQ0TURRNFZqWXdMalF5TmpWV05Ea3VOemt3T0VNMU1DNDRNRFE0SURRNExqZ3hNREVnTlRBdU16STVOaUEwTnk0NE9EZ3lJRFE1TGpVd09Ea2dORGN1TkRFMk9FTXpOaTR6TkRBNElETTVMamcwTnpZZ01UZ3VOVE0zTWlBek9TNDRORGMySURVdU16WTVNVFFnTkRjdU5ERTJPRU0wTGpVME9EUTFJRFEzTGpnNE9ETWdOQzR3TnpNek15QTBPQzQ0TVRBeklEUXVNRGN6TXpNZ05Ea3VOemt6VmpZd0xqUXlOalZXTmpBdU9USTJOVWcwTGpVM016TXpTRFV3TGpNd05EaGFJaUJtYVd4c1BTSWpPRVEwTkRoQ0lpQnpkSEp2YTJVOUluZG9hWFJsSWk4K0NqeHdZWFJvSUdROUlrMDBOUzQxTmpJeUlETXlMalE0TnpkRE5EUXVNelF5TmlBek1pNDBPRGMzSURRekxqRXpPU0F6TWk0ek1EQXpJRFF4TGprMU5DQXpNUzQ1T1RKRE5ESXVPVFV4TXlBek1TNHdNelF4SURRekxqZzNNeklnTWprdU9Ua3pJRFEwTGpZMk56RWdNamd1T0RNNU5rTTBOQzQ1TkRNMUlESTRMamczTkRjZ05EVXVNalU1T1NBeU9DNDVNVFEySURRMUxqVTJNaklnTWpndU9URTBOa00xTWk0eE5ESWdNamd1T1RFME5pQTFOeTQwT1RVeElESXpMalUyTVRZZ05UY3VORGsxTVNBeE5pNDVPREU0UXpVM0xqUTVOVEVnTVRBdU5EQXlJRFV5TGpFME1qSWdOUzR3TkRnNU1TQTBOUzQxTmpJeUlEVXVNRFE0T1RGRE5EVXVNalU1TmlBMUxqQTBPRGt4SURRMExqazBNelVnTlM0d09EZzFPU0EwTkM0Mk5qWTVJRFV1TVRJek5UaERORE11T0RjeU9TQXpMamszTURJeElEUXlMamsxTVNBeUxqa3lPVEkzSURReExqazFNemNnTVM0NU56RXlOVU0wTXk0eE16ZzNJREV1TmpZeU9UWWdORFF1TXpReU5DQXhMalEzTlRVNUlEUTFMalUyTWpJZ01TNDBOelUxT1VNMU5DNHhNVEE1SURFdU5EYzFOVGtnTmpFdU1EWTRNeUE0TGpRek1qazBJRFl4TGpBMk9ETWdNVFl1T1RneE5rTTJNUzR3TmpneklESTFMalV6TURNZ05UUXVNVEV3T0NBek1pNDBPRGMzSURRMUxqVTJNaklnTXpJdU5EZzNOMW9pSUdacGJHdzlJaU00UkRRME9FSWlJSE4wY205clpUMGlkMmhwZEdVaUx6NEtQSEJoZEdnZ1pEMGlUVGd4TGpJd01EY2dOREl1TVRNNU5VdzRNUzR5TURBNElEUXlMakV6T1RaRE9ESXVOelkzTmlBME15NHdORGM1SURnekxqYzFNREVnTkRRdU56azBNaUE0TXk0M05TQTBOaTQzTURFM1ZqVTNMakUxTURkRE9ETXVOelVnTlRndU1ETTNNeUE0TXk0d05EQTVJRFU0TGpjMUlEZ3lMakUyT1RnZ05UZ3VOelZJTnpNdU1qWTRPRlkxTlM0MU5URTFTRGd3TGpNek9UWklPREF1TlRnNU5sWTFOUzR6TURFMVZqUTJMamN3TVRkRE9EQXVOVGc1TmlBME5TNDVOVFU1SURnd0xqSXpNeUEwTlM0eU5qVXpJRGM1TGpZek1EWWdORFF1T1RFME5VdzNPUzQyTXpBMElEUTBMamt4TkRORE56Y3VNVGd4TlNBME15NDBPVEkySURjMExqVTBNallnTkRJdU5ERXlNaUEzTVM0NE1EQTRJRFF4TGpZek5USkROekV1TURFMU1pQTBNQzR6TmpVM0lEWTVMamsxTkRrZ016a3VNalkzTlNBMk9DNDJNelVnTXpndU5EazVPVXcyT0M0Mk16UTVJRE00TGpRNU9UaEROamN1T1RJM05pQXpPQzR3T0RreElEWTNMakU1TXpRZ016Y3VOekk0TnlBMk5pNDBOVFE1SURNM0xqTTROak5ETnpFdU5qazBPQ0F6Tnk0NU5qYzVJRGMyTGpjek1EWWdNemt1TlRReU55QTRNUzR5TURBM0lEUXlMakV6T1RWYUlpQm1hV3hzUFNJak9FUTBORGhDSWlCemRISnZhMlU5SW5kb2FYUmxJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqQXVOU0l2UGdvOGNHRjBhQ0JrUFNKTk5UZ3VOVEF3T0NBM0xqY3pNRGd6UXpVNUxqVTNOamtnTnk0ME16UTRJRFl3TGpZM05qSWdOeTR5TlNBMk1TNDNPVFEySURjdU1qVkROamd1T1RRd09TQTNMakkxSURjMExqYzFJREV5TGprM05ETWdOelF1TnpVZ01qQkROelF1TnpVZ01qY3VNREkxTnlBMk9DNDVOREE0SURNeUxqYzFJRFl4TGpjNU5EWWdNekl1TnpWRE5qQXVOamMyTkNBek1pNDNOU0ExT1M0MU56Y3lJRE15TGpVMk5USWdOVGd1TlRBeE1TQXpNaTR5TmpreVF6VTVMalF4T1RZZ016RXVOREl6TVNBMk1DNHlOalFnTXpBdU5EazROaUEyTUM0NU56WTVJREk1TGpRMk16ZEROakV1TURFeE9TQXlPUzQwTmpjNUlEWXhMakEwTnpVZ01qa3VORGN5TkNBMk1TNHdPRE0ySURJNUxqUTNOamxETmpFdU16QTVOaUF5T1M0MU1EVXhJRFl4TGpVMU5Ea2dNamt1TlRNMU9DQTJNUzQzT1RRMklESTVMalV6TlRoRE5qY3VNVEk1TmlBeU9TNDFNelU0SURjeExqUTNOeUF5TlM0eU5qRTJJRGN4TGpRM055QXlNQzR3TURBeFF6Y3hMalEzTnlBeE5DNDNNemcySURZM0xqRXlPVGNnTVRBdU5EWTBOQ0EyTVM0M09UUTJJREV3TGpRMk5EUkROakV1TlRVME1pQXhNQzQwTmpRMElEWXhMak13T0RZZ01UQXVORGsxSURZeExqQTRNakVnTVRBdU5USXpNa00yTVM0d05EWTFJREV3TGpVeU56Y2dOakV1TURFeE15QXhNQzQxTXpJZ05qQXVPVGMyTnlBeE1DNDFNell5UXpZd0xqSTJNemNnT1M0MU1ERXlOU0ExT1M0ME1Ua3pJRGd1TlRjMk9Ua2dOVGd1TlRBd09DQTNMamN6TURneldpSWdabWxzYkQwaUl6aEVORFE0UWlJZ2MzUnliMnRsUFNKM2FHbDBaU0lnYzNSeWIydGxMWGRwWkhSb1BTSXdMalVpTHo0S1BIQmhkR2dnWkQwaVRUUXlMamswTlNBeE5pNDVPREUzUXpReUxqazBOU0F5TlM0MU16QTBJRE0xTGprNE56VWdNekl1TkRnM055QXlOeTQwTXprZ016SXVORGczTjBNeE9DNDRPVEEwSURNeUxqUTROemNnTVRFdU9UTXlPU0F5TlM0MU16QTBJREV4TGprek1qa2dNVFl1T1RneE4wTXhNUzQ1TXpJNUlEZ3VORE15T1RVZ01UZ3VPRGt3TXlBeExqUTNOVFU1SURJM0xqUXpPU0F4TGpRM05UVTVRek0xTGprNE56WWdNUzQwTnpVMU9TQTBNaTQ1TkRVZ09DNDBNekk1TlNBME1pNDVORFVnTVRZdU9UZ3hOMXBOTXprdU16Y3hPQ0F4Tmk0NU9ERTNRek01TGpNM01UZ2dNVEF1TkRBeE9TQXpOQzR3TVRnNUlEVXVNRFE0TnprZ01qY3VORE01SURVdU1EUTROemxETWpBdU9EVTVNaUExTGpBME9EYzVJREUxTGpVd05qRWdNVEF1TkRBeE9TQXhOUzQxTURZeElERTJMams0TVRkRE1UVXVOVEEyTVNBeU15NDFOakUxSURJd0xqZzFPVElnTWpndU9URTBOU0F5Tnk0ME16a2dNamd1T1RFME5VTXpOQzR3TVRnM0lESTRMamt4TkRVZ016a3VNemN4T0NBeU15NDFOakUxSURNNUxqTTNNVGdnTVRZdU9UZ3hOMW9pSUdacGJHdzlJaU00UkRRME9FSWlJSE4wY205clpUMGlkMmhwZEdVaUx6NEtQQzl6ZG1jK0NnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZnQUFBQllDQU1BQUFCR1M4QUdBQUFBNFZCTVZFVUFBQUR3TmtId05VSHdOa0R2TmtEdk5VRHZORUR3TmtIdk5FRHZORUR2TUVEeE5rRHZNMER4TmtMeE5rRHdOVUh3TmtMdk4wRHZRRUR2TkVEdk5rRHdOa0R4TlVEd05rSC8vLy8vZllYTUd5YnpUMW50TkQ3UkhpbmtMRGZiSlREOTV1Zjd0TGpmS1RUMmdZais4dlA5enRENG02RC9qWlQrZUlEOWRIMzZZbXZ4UTAzeVAwbnJNVHpPSENqNWNuclNKekxXSWl6LzcvRC9yckx6Wm0vNFdXUGZQMHJ4TzBYLzNkLzRwNnozanBUclZsL2FOVUQvOS9qL3ZzTC9uYVAvaFl6N2EzVDRYbWYzVlY3bVRGYi94c3I2d01QL3BhdnZYbWZpUlZEVEp6TG1vMWxvQUFBQUYzUlNUbE1BMysrL2dHQWdrRUF3RUo5UWYzL1ByM0FRY0xDdmIrejJSUWtBQUFMaVNVUkJWRmpEdFpuWmN1SXdFRVVseThZMk5nTWtreEUyQ1dzSUNWa0pDVmxuU1RMNy8zL1FVT09IeG82bGxrVnozaWlxVG5XMWJ0dVN6SFNFM203VUVwdzdNb2ZEdVJDK0c0Zk1nbnJnTnlXSzhPTjZKVzBnSEdsS3l6TXV0Z0ZXSTNpalpxNGxWM3VncmFiV042UW1wRFdScHVpQXl3M2d5dmg5a2h2U0tQZCtrQnZUb1BhQ21kZ0x0SXZlVUJJUkZITEdxY1E4bjdwSWtpRnk4eVlKOFdnYkFUaDEya1FBTG5YQlVESVV2SjJTT2JYWVVVU0Nha3BhMG96dWVOeXRrdVc2b1hiWVdUSHNtaTlmTEEwNFBUcnNaRHgwVFh2aEcyc3pCbzhTeDErSmhjUVlEem81Qm1PSjBWeUpKY0xOcFBPT3dhVkVZQ3lzb2dWK0lxME9XWXhFUVFFV0VJKzV5Sm9wd0FMU1pyNk5GZzlJeEFRU0JRVllRRDZxeE5CY2hJbGlxRldQdG9tcGVLaDRwekpPMndvUU8xTEZJNm8rUERwVlA1SjFLWDVBdFdwQVREZ2d1UGhzTnIwdjE5NS9uWjFaaSs5dWo1TWsrWFZkcGsxV3ZPclVUS3ZOV0JUVTE0c2s0K1ROUXR3OVNZRGhtdnJ6bDIvd3gwbTNxbmlXNUpqK3lHdUJsNHJpbDZUQWRQSi9nS2RKZ1psMUswQzlXSUMyZWl1QU4xQXJPTDY5czRyYjJTdXF0UjhRdGRkaVFJRHovdFh2Y3UzTmMvL2NXcncvdWtqVDlQbXlUSnV1MEtxWm85Tm1MQXZxeTJXYWNUQlNlaDNsZzc1M2tBSi8xdFRIMzlmK09lakppbStRZnByajZpbXZCZVlxc1pDbHpOTzBUUDEwbFJib3ExNm1MYXdWb0Y0dS84SXZwQlZDY3lZZGdWckJ4V2hmdlkvZDFjU3RqMnFWdUhDMHFhcldEMGlNYldQMzUrWGFlUS9ieGpJSjRLc0lXZ1RHV0ZNYXF5RUtHQUkvM0VCQVlNM01EamVCQkpCVkJDMUd2QkxYSFdtbWhpamcxQm1jeDNCMXI0ZHBZZHZOb0Jka3dPMk5RKzNsTE1PbEZydVoxMmo1N0s3ZVhQS0NvV1RTZ3JkOW9RZFpKaUhhL3FVcDdaU0VyRUNiT0JHQVMrMEZNNVdYM3R4bUNzTE5QckFFVEVrdHN2ZUtHdFBoV1JidGVBeWg1bklMcmJzREJqSTFhSEc4UFhPckNGZ1ZkbUpmNE5hbUgrd3dDOExZOVVYNTUrTzlhTmNMbVlaL0xKRnQ5RzFVdmtFQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZnQUFBQllDQU1BQUFCR1M4QUdBQUFBdzFCTVZFVUFBQUIxTWN4MU1jeDBNTXR3TU05MU1jeDJNczEwTU10ME1jeDFNTXAwTU14MU1NMTBNYzEwTU10ME1NeDRNTWR3TU1kMU1NcDFNc3gwTWN4Mk1zMTFNTXQyTXN4d01NcDJNY3gxTWN6Ly8vKzVnLyt3ZWZsK085TjlQcy8zOHZ5MGZ2eDVOdEM2bU9XV1dPV1BWOWFDUU5ibDJmYXNjL2FpWis2R1N0UHU1Zm5keS9LcGZ0K09VTitIUnRxR1M5UGN5L0tvYnZMTHN1eWJYK21YWk5udTV2bkxzZXl4aStLWFpkbnU1ZmpVdnUvQ3BlbmwyUFhVdisvQ3BlaXhpK09nY2R4bm16Z2dBQUFBR1hSU1RsTUEzNytBRU85L1FPOHdrR0NmY0ZBZ0lHQ3Z6NCt3cnpEUENLM3QzZ0FBQXZ0SlJFRlVXTU8xMmVsYW96QVVnT0VrMEZLV1V2ZVpRMWxhc1NPajNldTR6bmIvVnpVK1pQQzBRa2lJOGZ0bC83elBNWVlJbExUbCtzUGdnbEU2Z0lONmxESjJab1V1MGNoMnprNUJHanNMN1U2c3d3YWcyc1d4OHJCOVZKV2kvU04xMWpqdEk5dU5ibCtRSXdiYUJTMURPeFErRUJWdXZ5RjhzSDZ6Mndjd0s2TnJWRWJYU01QYXNRQ0djdDd0TTJvS3BvZTdMZ0Jqc1gzWEI0TWRtMTBJckdlYjNSR1laWHBnSEJrSC9weVJxV200VjlzU1pxK1NFK2pZMWVVNmk2S2Y5NC90ZTludXlLYmJxT3IyZTl1ZkwrdzQ3bzhJeStZdGErRjFjN1Bvb0wvUW1QY0tNdzBYeTVwWDQrc3JyT1ZtVDlWUHo5QVlJVjgwM094UENqRC92OWdwTk9XU3NMdDd3My85RmYvNElEamlMQjJYZDFsK3ZCZjhpL0swWFZqeHpReE5CY3FiWWxWeklXMkJ6NVhoK1ZPR0x1K3hCV1pkanJiMGJydm1MbzlmMjcraEtjcGhyUzZqc2pzQlBGQXhwbmtSeC9FbVQrcnVEUWlPWkJWMk42NHFFblI1b21OSUFaN0ZZeXhPRHQwWDBJWm5rL0YrazJUZi9aYnF3ZWhpZWF1THNMSmJMY2hPNmlJc2R5ZjVGR0JSMmpPWmk3RGNqUk5JVndESlpoem5jaGRodVp1dXE2dFo3aUlzZCtHaHZCYm1WNnZITmJwU1dPN0NiWVNoSzRQbEx2eXF1N3B3Z2k2ZThsSlhEaWN4dXJYN2xHMEsybkNCTG0rMXJkajFIU2drT0RhVE54ZEw1eSszei9jUFNpejBCQWY5RGwyOXFBRGVsUEFDc0h4Y0xKYkpWQjFtMEZTNUpTWUhMbSttQ0RQQmJUZGZpYnA3UFZXR2c1YUo5VjN3Qkc4L3JrdG5xZTJDUmZ6V1hhSHJRaWk0alYxeUtsNU1ZVmxvdU9BU0FvTDlobW00UUFnNUZaOUIraTRUUDl3c05GMTh1SEdndVdVOHhvcHVMb1N2c0QyQTVwS2lZdU1GZE13bXJjOWpTVjVzcm92ZEVycDJ6bDg4Z3RudzdjM0F0RXNKenpJTlc0Um5HeDZaamdpT2JINWdITm44d09aZjZHSE1uQnVRL1ViMEV4YkM3Rlhpa25jTkRlOEl6REx0b216S05TOFBpU0NYZm9TbERoRTJDdlJkTmlKdCtacEQ5NDZKcEpGRk5WakxSc0VZamF3OC8wUmRaUTdwa2gxNlRLNmVlbzVOTkhKRHkyT00wbDc5NitPVFlPaTdwS1YvbG1xYXlOSXZYcVFBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBTUFBQUJHUzhBR0FBQUFXbEJNVkVVQUFBQXpYZTh6WGU0MFhPODBYTzB5WGV3MFh1ODBYT3N3WU84elhPMHpXdW96WGU4elhPNHpYTzR6WE93d1lPOHdXT2MwWE84d1VOODBYZTB6WE84MFhlNy8vLzhVSlhnWEtvUHk5ZjdtNi8yQW1mUW9TTUlvU01Id2ZTOHBBQUFBRlhSU1RsTUEzKysvZ0dCL1FCQ1FNSytmY0ZBZ0lNOFFqekRrZnZxVUFBQUI1VWxFUVZSWXcrM1ozVzdpTUJDRzRXLzhRLzRUS0pnMjBMMy8yMXdwWGRWTHljU0pNeU5WVlo5REg3d2FEZllCZ0NXMTc5ckdFcG53d0JCWmUzWjlqUXd2eGZrVWt1eTVmOEVXaFRWaHJjYXZIdlpnd2laME9HWmtwZExlaEN6a3NlUm9RN1oyWWVpQ3dnNVVnOUdGblE2WWRRaTdIYVM3c1N6Y2pUcDhVUWNoQlI0Y1NTcE1qN2V1RFdJc0VQa2d5TXN1SWpLbDdJMkluUFRBY2VRNHNNN0lKQjAyVDFkQzlwVTBnZlArOWpwNWUrZFArYnRjQnRaVW1CcjhLZi94OVh6NDlSTi95dStpMGdoWEFDeTMzVFIrMHljQS9IYlQrRTBEZFdJSmFiT0JDM3Fkc0lmVENYZW9kTUl0ckU2NDBRcGJrRTZZOU1KRzU0RVloRmwvTXA5MGhMRGJiM2hQK0Q1ZUo3YzdjNW9idmwzL0dablQzUEQxMC96cGR3cFBlMHhZM2pRUzIwMGJONFd2Ry95WXNORUpHNUJPbVBUQ1ZpZHMwV2lGVzUxd2hVNG43T0Ixd2oxcW5mQUYwQWtET0dtRUxZQktJMXdCS0RUQ1BZRFNoR2ZqK3U1dExseUMrVDUydjYzdGp2ZndyQUhpTGlSNVRJeDBsL0RCU1ljZFBwVENJOU1BblpFZG9ESXlEZm8vNkFGV3J0dmlmd01wTEVMMmxWendSU2Q4SXlJbjNZMWxrYTVLdVFPanBqMVpLc0FhMnZ5dUhiREVadzV0UEJJR1J4bFpWd0tRVHNkc21tL1dWMjJCTGNxK3N1bnFxU3BLWktoN1Y5bjV2NCtidHZNMUZ2d0YrMzRxd094YWQ3RUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGZ0FBQUJZQ0FNQUFBQkdTOEFHQUFBQXRGQk1WRVVBQUFEL2ZrZi9ma2YvZmtiL2YwZi9mRWovZUVEL2ZFZi9mVVgvZlVmL2ZVWC9ma2YvZkViL2ZVZi9mVWovZmtmL2ZrYi9mVWYvZmtiL2ZrZi9ma2ZVWFNyLy8vL3BiVGovamw3Lzcrais5dlAvbm5YNmVrUDlmRVhsYWpYWFh5enZ3cS8vbG1yMGRUL2lqMnpaY1VYZlpERC8zOUgvejdydnVLRC9wb0QvaGxMWmNVVHdjanozNGRmMTE4ci92NlAvc3BMc3JKSG5vNGZmaGwvWllTNy81OTMveDYvL3hxN2ttbnJ2Z2xQY2UxTFdaemdEY0VaV0FBQUFGSFJTVGxNQTM0RHZ2eUFRUURDUVlLOVFjR0NmejQrZ2IyVzdIWDBBQUFLT1NVUkJWRmpEdGRucGRxSXdHSURoSkVSUVZ1MThZUkFYM05xNnROTjE5dnUvcjRsVE5WcWlKaVI1L3ZTVUgrL0pDUitLZ0M1cGgwa1dVWXc5T09GaFRHbVB4RzNVZ0IvMHVuQVY3Y1crVmphZ0hxaUtRdVhGRWcrMFlOSXl5SnFtUXc4YXdaYzNwRVdoc2V6Q29nTU1CdkRaOGZzQ2hvaThTOEFZVWUrYWx3bFlrZFErRnNDUzROT2NZYkFFbjA1ZEJ0YlFrK3NOTEFydGJvVGcrWFluUWlDMkZ5eVdMQmJzWnNrWUxQTnFJMkgzS29sQXNEbkxQZ2hXVDE4TWd0Vzk2SUFESFI2bTRFQ1hoOEVKOFVGc1dSdkY0RVNJQ0RpUmFBeEZzVnBOUVZXbVBCU0R1NXpyRDBCTmREWThIYXpoeUZPKzh5U09yYWNEcmpoelVXTjV0czhiUDQ3K3p3OE9heTc2SHdlZVFRTEx3MFdaYjkwWGU5dDllSHg5M2FidTlzZWU4dzk5ZWRnRGlmdTg3cEZ4MytySDVXRVBnVXcvcjVzemJxNGFCczN3bTJINFoxNjNaTnpFSkN4TytMSmkzSDV2WC81c2x2elBoTzM4Mm9XL2E0U2g0S2V2ZkdFSGl6TGZLUmRzU3l5L1hDbUZoZldNSFptWHUrNGJFLzcrNWxNSG9Ca2VWdXpZWWxMeTdHVEJqbFZEQU4zdzZKMTl0dG5VRHIyUHRNTmpwbVNzR3g0eVJUUE44SzFxK0ZZdlBHUEtabHJoc1hwNHJCTWVNWFdWZkREa0g1c1BqQm51aFlldzJVNXdZN1Z2RURFVFJuT0I1VittbFU2NGtuK1pSb2Juamh0Snd6ZE5MenRoS0wyUFRkeUVDUXFsNC9aVnd3Tkl4TTV1WTkzZGVLTXVPRUJkL3JnSndJR1loMzBQN1BPUm05OWpFVUp1OWlKRi8xbmZDK3owUVlpRDA0ZGJyaDgyOFNVN1dUQ1gyaDhKenZJc1orNGZtdHE5U21vUDZoTmJFK0grVWJwNTJmMXJoUVNkMFRaN3dSS2dzMW8zMEJodG9VdlNob3YyVW5SRmkrQUdXZUlqVGpOdG5oWFNTTDFLQTZURGp6c1VydXAyQWg4MTBJNUpoOHBmSDBkWmtyYlJCZjhBSGtZVVB2T1UrMDhBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBTUFBQUJHUzhBR0FBQUFjbEJNVkVVQUFBQklwLzlIcC85SXAvOUlwLzlJcHY5SXAvOUFuLzlIcC85SXB2OUlwdjlIcGY5SXAvOUlwdjlHcHY5SHAvOUhxUDlIcC85SnFQOUpwdjlJcC8vLy8vL285UDlmc3YvZDcvOVRyUC8wK3Y5MnZmL1I2ZitOeVArazAvK2owLytZenY5cnVQKzYzdit2MlAvRzVQK0J3Lzk4TENmeEFBQUFGSFJTVGxNQTMrKy9nR0FnRUpCL1FEQ2ZjRkRQcjdDdlVBVUhNMG9BQUFLcVNVUkJWRmpEdFpucGVxb3dFRUFUd2lhTDJuWllFa0F0dE8vL2lwY1V2UU1mSlRVNE9mOHc1RGhPSm9NQU01RUdlWFlXbkh1d3dPTmNpTmovU05rT29pUSt3WitJK0NPeTBpYkNnMmM1QjA4SGUvREFDbjRJTGJUVTZnQzFkbXB6UWtJQnU4a01RU2NjWG9CdmxsOE9MM0w0M1hzQW9EV2psOVNNWGhMeVZWc0FJcEtsTitSQUJGOVdYUVpraU1WK0EwSUMya1FnWGtSYkVZaFBIVENHakFHN0Naa0RNZDZxSkdoM3lSa1F5bHFPQUNGZHZpTWdwTG1Jd1FIeEtCYmdnTk1vQmlkZ0l5WW1wVjQ3YkhFK09DSEhvcUFsWXdLYzhPWktMRXl0clJsS1ZhaDJxRllEMTFvVlJkMDNzQW5mRmpkdDhhQmZxQ3NjS0p0dHNiY3hjaTFtbEo4NDhLbm1JOWZObG16MHFycXRKOEVON25UVGNkMjJ5bWhlaTNGNjJVbjl5eTkzQVg2aHVzaWZrMHA5MEZpSjlaUmFQbjY4UHJxQXBsOGtwcXIxa1kyNDB4TXFYSzV5U29Xc2krV0ExRi81YlNIK0dzL3ZBS21hdTMra2xZRGN4ZysrTE1RNk1ybXFQNlc5QTh5UnExeVl4WGo2TWppZDZ2Vmk3QmRqL1hYd21yaGNwV0xRV3FYTFlaV0sybkx4Ym9ESUZzdWhrWUIwbG92M3JUVnlYbTcvNi9wMjkrTkFaNzFCS3R3Z0kvMGoxV2lXMWhzRW1tbEwvOHkrcWxrNTNQZTNWc3RwUzNmUGkxR2cybFVUdWoyYVVLM205YmNXZTl0bVJEV2d3Y1JvakY3UDBPaFIwQzRiZlk4RGpjMFZCTlY5clZ2eVpUVzdHbHBWcUhJd1hacmNYVXpQZ0pDS00zQkN6SEp3Z3M4Q2NNTFIyZDlZZDMrODJRa2NJRnplM0NUZ2dPTW9qanlnSjJKdTdzZmV0SmM4Ri9qMGhqd1huRTM0UUl5dnJRNldEeCs5K2VRQk93bVpoNjRmNkJIWGN1YjBvU21TRURiaUpUbHhSU0ErdFJmTlZGNTZjODQyU0Y5N3daSVlYZ2xsc0JzUk1oUEJ6cUM5Z1AxQjZQTWRXajlDZzBsTnJFV0M5K2V0SW1FMlJNZFl3SitjNGlSaU8waVBmaXgrZjMzOG51VkJ5Z3o4QXhKRURmaVNkNytLQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBTUFBQUJHUzhBR0FBQUFWMUJNVkVVQUFBRDJTWHoxU1h6MVNYejJTWHp6U0hqelNIejBTSHJ6U0h6dlJYWDBTWHoyU1h6MVNYenlTSHIwU25yMFNYdjBSWHIxU1h2L1FIRDJTWDN5U0hyMlNYMzFTWHovLy8vM1g0ejZwTDMrNmUvNW1iWDJWSVI4Z3c4ZkFBQUFGblJTVGxNQTMrKy9meUNBWUVBUWtLK2ZVREJ3TU04UWoyQndDenJOK0FBQUFhZEpSRUZVV01QdDJkbHVJakVRaGVGVDNudHZsbFRJOHY3UE9jeGtKSXZJeHRCVUtZckVkK1dyWHlYYXZZSnIxdU15RHBiSThBVkRaTzBoVENzMjZOSmh4MDMyTUhXNFI3S0dielhFbTRkMWh1OUN6bS9JU3FXajRVMG80aHB2ZWJQUm95b1JQNEJXVkx6d2d4eUtIRC9NVmJvcVpjY2lYdkROekVJU0xuaGlJWFM1NjBZV1k0RXNzcUFvKzBOa3BwUGRFWm1USGppUG5BZldHWmxZbUtsc0NhbXpaR0J4Rm1jZFo2S0hiMklGQ1VEUENub0FsaFhzQUhEWjZlUHQ3TlJlbHRVdnhPK3ZmNzEvdHBkRks2Ykt3SzlmVHUxbFVVVFFDUy9vZGNJanJFNTQwQXBia0U2WTlNSkdKMnpBT21GK2hwL2haL2daL3RHdzJtWHpGOTVCMUc2bWcxWjQxQW4zV0hUQ0FVZWQ4SVNaaXo3L1A2VzJsMlZyL2NINzdlemoxRjZXQWRpeEFxdjVjcE5Zd1FTZ015eXZnODc3MkFEby9CWVIveGdXUnZnU1dKakRtY0xoSXcrZGtSMmdNako1N1E5NndudDUxUDlvS251V3pQaG1FZDRSV1JEdVprR2txMUplVURFVFA0QVNxdnpJbTFtUGErTEdvVTFFZ3crMElSdjJBS1RUT2RzV2g5dXJOdUVlKzZtMzNMVHIweDRiekZQb2JmbnY0MkZjampPdStBTkNHMEd0ek9rQWtBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdGFiLWltYWdlLTEtYjJjMmMyNzc3YTQyMTg5OGYyMTE2MTYxNTk5YzI1M2QucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzBBQUFBdENBTUFBQUFOeEJLb0FBQUMvVkJNVkVVQUFBRG41OWZYeHJEbjRNenU3TnZyN05yZXpiYnE2ZGZyNnRucTZkbGdURVRmMzhmbTV0aE1PVG5sNWRYTnZhZmozOURkekxQWHhhOCtMelRtNTluUXhMUHE2TmJkeTdOQk1qZnY3dHJyNjliZHliUE12YTdlemJoQk1UTHE2dHZwNmR2TndhODlNakxoeTdqV3g3QXdLREZBTXpEajVOWTVMakZsVDBqczY5Ym82TnZmekxYWnpMVFd4N0xmejdqcDZkZWhqWUZBTGpiWHdxL3Y3OXZqNTlQYndxYmN5N0xlekxQaHo3ZEFMVExuNXRNK0tTN3A2TlhQdEp2aTRjN1l2cUxWdktFc0d5UHQ3Tmc1S1M0MkpDbmYzczdkeEtpemtuc3lJaXc2SnlzeklpanE2dGZyNmRYZ3piUmVSa05TUHo5UVBEaE9PRGRJTlRZdkhTYlp5YlhLcjVkR01qVThLU3ZjeWJIV3VKN05yWmE5bllWRU1ERThLekFwRnlIazVOTG41ZERrNDgvYnc2dk9ySkJWUWoxRU5ETS9MUzQzSmkwMElDWGgzOUxSdWFIU3VKdkVyNXZGcElpNm1IMnVpSFNzZzI5WVJVSktOamxYT1RoRE1qZ3dJQ3JuNDlmajR0WHA1OUxYMThiUXpiL1Z4ckxZd2FySnQ2WFV0YURGc3AvVHVwM1B0NTNMc3AzV3M1ckFySnE2cDVUUnJwT25obk53VVV0WlFqMURMUy9iMjh6Y3pMYmN4cTNZdjZiSHFwUEJvNCsxbDRDNWszK1ZoMzZRZ25lY2UycWRkbUY2YUdCNFlseHVXVkJrVUU5Sk16RS9LU3JvNTlyajBibkd2ckhadVo2enA1M1h1WnZVc0piU3RKWFBzWlhJcDR1K29JbXlqM1NnZzIrWmVHVnlZVmx4VzFpQ1lGSm5Va3RqUXp4ZVFEdExPanRLTFM0aEVoM2w2TmpqNWRmYjFjakl3clRTdmFmYnU2UElwSTdHbjQ3THA0ekRvSXE1bTRqQ29JUy9tWUdKYWx3ekpUQTdKQ2MvSkNRV0RCdmgyc3JWMDhiVnpyekp4N25aeDY3QnVhNnVvNW5DcUk2MW1ZV3Znbm0xbEhpRGNXeVdiMTEzV1ZGcVRrVmlTa1Z4VEVSblMwTnJSa0JXUFR4UE5ESHI2ZHZVME1UUndhN1d3cU80cmFIUHM1S3FuWks4b295MW5JcWNqSWFqZG0yb2dXdVJjV2FTYlY2QlpWbUxaMWVJWGxTQVdsRjZWRXJlMThYTnhiVE91cW05dEtuQ3RLVy9tNDZrazQ2bGozMldmWE9EYkdMUHVhYkdySnZMcEpXYWtZTzBpSU9PY1dJRldsdS9BQUFBTm5SU1RsTUFJQ0F3MysvYnY1OXdJQkR2bjRCVjcrL3Y3OS9mMTcrM240Q0FnSEJ3WDFCQU1PL2YzOS9Qejcrd3I2K2dvSitBZjM5Z1FFQitWKzhlQUFBR2RFbEVRVlJJeDMyVWRWUlRZUnlHcjkzZDNkMDF4OTFkaDB1WHJEYzIxcUFEeGdhS29vQW9wWlIwQ1VpWGhOM2QzZDNkM1hyOHJ0M1BPZmV2KzV6M3Z2ZUxIL1E3L1h1M0dqcklLcTd0MExWcjcvN1FmMmsrdm9PNU50c3NTSCtWbGlrUVcrREJyWnIvMngwbTBMcHF4Y0xUa1pzU3JoMksvSmlSUmE4Vi9zTnYwVFBOSWRZSVpHZXJJemRJQ2RNSWhQakVxaGpFSVRzNTdpOXl2WTQzS210aHNVQVRYYldSUUNhVFNXdThDWnRPVzZJRm92Uk85WDZYSjdYTXJlQzdYQUtOdUNaRnVpWU9FNGN4a0paR2xHZEZtNFQ4cExaOWY1WDdyR0M4cmpUTGFzVXkvek5NS1FtRHdVeVpRbElXK1RxRnBtaEI1bE5xbjUvbHZqazVCOUw1WnJHL0N4WTlYRHlQL05WV01aMUNJZDhrU05MaEovN1V1ZEdLVmE4cnRTNk54a1U3ZTIvTFhNeG5nTDJsK3B5STd6aGJFWVJ2OUtON3d4VXI4NCtiV0RTemJKdllHUWwrRXFoa2NxZ3kzQmlWSmViem81Zk5JbklidHZncWQrZmlGaDdOMEFaWXpWcWE2Tnp0Ni9POHlXR2gwd0NGRzA5cU5HZjVEdFRtanYzYWc3dEN0N2RDSU5rR3V6aitjTlR0NHllMlJxNHJpUEFwdnh0MTF3VEhPUGtuTTRJWWVEeitTNWVtWEowdVB3UDIyQVpURUFRNWZpOGxwZndPTXp3aU5UV1NtVm90ajRtT2pxcGdlT0x3M0NaZm92RzZvQnNuMlFIYnRsbGh4Rm5uejYrczhtWG1HVXVyVG1UVXNWbm1hR0ZVMm1lYldnK05QbjkrOStxclFpM0hhcVd4blZ0VHlzdVl6TVRFdFVVYnkyOXY1U01VaTBrV2xSRkV4T0h3dk83b2d1U3N1bkFoV2NUV1dpWDA3Q2pmemZFcVZieDYwOXBDNHhYN2tSUW5oU1BVOEUrdjF1bUEzUWlDR3B3UDNNMllsWnpGZ1RrYzJvNnEwbUlDZ1NBdDJUUzNLQ0pQcWZRN2JaUElZRkgxZnJRS2o5b0FhcGJqdGZ2Qy9xUXNsNVZPcDJ5Lzc1c1E1dTB0M1pRd3Q4aElJb2Y3blVJb2RJdW1KbWtoVWNmZ1VadEJJM0lDZDgvS3ZlcUFyUjRCSHB6N2ZtclYzTG54aHhMV0tqZms1Ulg0blpKSktGcTIwRkdSdkVxUHAzYURtZ1I2TFp5VmV5QVQ5Z0EyNjRHZnp6cGdNNDh0dnJVNUlqekM3NHpJWnFOWjVDSitaYTRleitzTXRReWM0YlZ3OVlGMG00ZkVTbUU5OVBOWnJ5SklFOVRxZFJIaEJjWmIxVFUyR2dlSmtRbE5lNGg0WGtNb0VOaEJzL0tQSWhRSmkwTjU4TVdXemwyN05yeWdZRVBxbVJva2dNYU9rV1crSjNyTzVGR2hRQy9Hd3FDOUI5TGtFbitZTFhub3UxaTlidDN6d3pmOURtOHhHcmNjTytXTW9YRGtXckVqMlJPc0lSWEttZUhGQ05xYnY4d2tzdEFwTzZPQXZkbjN6czNESHc3ZlROM3NrM29teGtLQjZTei81RDFFSEpyZGNlV01XWXluNlVLUkdhRXQzeWtEdGwzMWZQSDZkK3ZYRjJ4WWZLeEdyZzJRMFZuaVpGQmtKdGllSVY2N2NwTmVPTExrY3JiSDh1VTdqelBWSlFmajdWdDg3QkdGUnQ4SGRRaWJvd0haRmJuNm1UaGVFNmpwcXFTMFpTYUJHYkZwZ2I0enV6eXg1S0IwbXBKRVduckZlSDhISXFkenREU3I1bHphNWNlZTFPRlFzeG03Vmw5K2tTa3d3eFk1Wi9sTy85VEl4QkxWTkhJY3NGTjJiRWM0RXJBbTJTTGhhaTRQM2NzR29IZCswdEZLRjUwdVoxT1dMN3ZGWkRMVmRudXhzYmlzdW82TlNDUXNHdDJVL0FpSG0wa0Y1d1JxdWRMcjZsRUJ6R0lGeUMwVWo2MlJQbXFmSTBkS2o1U1dIcXM2dDUxdUM2Qko2STZYai9WNkxyVWhPTEd0VjZ3a1hwWlRQQ1FzbTRnaVRtRnVMaTYyMnpjVTJ6ZVczanUxdzhhbTBWaXNtSXpaK3BsY2FqZjA3dUJ4TTJic3Y1RzUzWVprSWVrdkQ1V29pb29LQzhQREMzMFM3OVJsYjdmQXNHalpnbDJvL2ZsaU5zRjVFb21CKzlNeS9kTlBsQjBxU1FBamMrbFNaZDdTUEJYelJFM2RqdXhzNXdJaUVhZkhOLzF5NTNGNlR5SzYvZm12eWhLdkhZeVhUZ3NORFNXVE1LUlF3a0YxMmRhN1pRbnVqNGllT0I0YWpUYkg2Y0JoV2ZYcyt2VnJDeFpNbnk0TnZVUWlvYU50Q3VaU0dFR3BKTWRkV3VPK1M5LzYyK1R1VEdRdzlzei96UFNRZWZPOE1haUwydVJRY08rOHc4TG1lYThaK0dNT3R0MHpKMlRPbkpEcEFOU09BeUk2MjhMQ3dzZ1lySnNiMWhEYnZqNzBuWDdQUXFhSHpGOEFtRC85TGNnMnhCcmk0Z3l4Q3V4VWdOdlVmY0hCYmFDZmFETm56cE1uYzBMQUI5NnNDVGJFeGhxQ2c0TVZVOTJXTEZuaWhwMnMyTGR2QW5CKzF0dlBubjF4OW14M2QzY3NGcXRRR0lJTis3N0preFh0K2tHL1ViL1R4WXV6M1JjdFdqUVp2QWJac1pQZEFGTW5BeHFEem4vUUUwUURGS2l1VUdCUkdZdktQVnBBZjZQK2FIZDNOQnM3R1lzRnoxVDBIN0ZkdmdmLzZZOXFqTnFBcVNCMmtkdUFIc0Q5SHcxNmplelNEcFJvM0hoTXJ3YlFiM3dDRktmYzlJemsyY1FBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzBBQUFBdENBTUFBQUFOeEJLb0FBQUM5MUJNVkVVQUFBRFh6ZEZXSmhoVUtoaXptWXZTd3JoZ01pQVlFeEM1ZUYrL2kyemYyTjdSdjd3K0h4VG0zT0xMcTVUbTJ1UFcwdC9TME40NUdRNU5JaGVKVER6UXo5N1V5OGN1RlJGREhoZk13THdXREFxdGtYSzJvNThVQ2dtU2FWQy91cmZUeThpZlkwTFN3YnJQejkyVFpVUXZGeEhlMU56cDRlTGwxOXZYejlmUHp0N1YwZGs5TFNlSVpsdkFjazFQTHlFSUJ3Zk9tM1VIQmdiSWptVk1JQlRRejkwRkJ3ZkNsM3BFS0NUbTIrUGUydURZMTkvaTIrTFh5OGptalczUXo5M2F5c1RYeU1MRGRGbEFJQmJWaFduYWUxTHE0T2JVMU43aWszM1pqSFhNZ21ubDN1VGoyZC9sbDREWmhHVEtlbURiZjFtemNWalBkRXRaTGg1Z0tCblMwZDNQeGNiVnhielJoM0RlZ2wvWWYxNmFhVlhOZGxQWGNsQ01UemhNSXhjMkhSWTlHZzQxRnc3VXhjSGZqVy9oaUdUQ2ZXUzdjVnErYkVoSkhoRFN5Y1hpd2F1bmxJN3JrR3JxaW1HNWVWNmhaRTNVZTB5TFdrUXBHUlFrRVEzazNkN2cxTmJ3b29uaGtYWFlpbkRiaFd5aWNWekpjbEN5YkUvTGNVU1NWME8wWVVDOFpEdDFRelpyT0N1WlF5Z3RJeUJuTHg5YUlCUlBIUkF2RWdzTUNRckt2TGJMc3A3cW5JUzVnR3ZiaUdmVGcyVFNmV1BsaEdDc2NWelRlbG1xYWxPcFpVekVha1cyWmtTa1dUK2FWRCtkVXpXTVJpNUtLeVJ5TkJ6ajJOdlYwOXZjemMzTXdzTHlwWTdOb0hyYmtIcnRsM25EbEhYemxIRzdlMldPWkZlNmVsWGhlbE9CWEZHY1N6dTBYRE9uVFNtR1BDaUJPQjBHQlFYSnY3NzNvSU9taFh2Y25YcjBublBUa25PWmUzTG1oV3Jma21pWGNHWE5pMkhLZDFyamdWaWpaMUs1YkZIRmNrbWJZRW5PYjBmRFl6NkJTenEwVERaME5pTVZDd3JQdkxmQXVyYkV0S3pDbzV2bHZKZTlub215a29DZGk0REVoV3gzYUdYRWUxbXhmbEtWWGxLOVlVek9ZMENoWXo5MFBpazlKaUZHR0E3eTJzankxYmJGcktXWGpJdlVwNGlRaElMSG1JSGlzbml5aUhhd2dXbVBiMlZvWEZodlVFaUFVaitzV3p5dFREbXFXUzgxTVMvaDFjbTNvNkxrcXBtL2hYS0tkMjdjYm1ERVoxN0laRTlmUGpXK2NUSE54OG5ueGEvZnJKSVdrVll5QUFBQU9YUlNUbE1BSVA0aS9mMzgrU0Q3Z0RRdzcrcmZ4WitmZjFYZjM5L1h6NyszcUtlZ240Q0FlSEJ3Y0Y5UVFCRHY3Ky9mMzkvZno4Ky92Njl3WUVEU3E5TmlBQUFHVFVsRVFWUkl4MzNWWlZpVFVSZ0c0SThKZG5kM2QrdGdHMHZjaHF4MTZab0ZHeXhCdWh1a3V4UUZFWkMybXc2N3U3dTcvZUVaWU1meis3NmU2ejA3NTNzSC9aN2VVd1lPSDQ0VE03dU5IRE9sTi9UZmRCbkVaRVd3d2lPdlNpOUxwR2F6YU43QUx2KzJpME9FV1psWk9UazVWZUhNdkZhY0dkZFZMUUgrNzcxcWxqQlZpY1ZpZlgzck02TmdJcVlVSjVIZ2NLSkJmOFBESkpjRGt1bFlhbUlpUG9HSGhabWxVbWFrU0dLV1NwakQvcWhmUHRzVTBxQ25LdzhtNHIyOHZlTzVnZEtvcUs0c0ppektiTUxsZGgzOEt4NmNHeVkyNmxPVlpBN0p5Y21KS04rN04wTXRsY0JZTEpFMFNvM0x1ekgxWnp4Tis4aVV5OWNuNnpoZVJLZDFhOWV0Mjd6RlZTZ1NNNW13aUtzNE5mUHlEby9wUDdCVkgrU1pzQS84MmxRbGgyVFJtOWJ1MnVWNnFBckdaS29qcitKeUplRWxiS1RWZDkzUGNlTkQweU4rTFYxQjd0RGJ0Kzl5VFNKVXEwV3dxeEx4RlhGa3lJMzhvVE02Y2MvMUNPU1ZzREsrajA3QktTUTZPVzNhdEJaTTR1YW1DaGVKSWlQRkpseEUrQTRYNVBqT09XeHQzZk56VFNVK3ljV25keGVDTTdaUEFqZ3RzSm9WRWFIR3dWak4rMk9RbmJNTXNMTnpkM2dqM3M5dmlEdE41bmg2ZWhLZE5tMTM1ZFV6Q0RSVlJuVkVWQlFyTDNqSERUUnlSSHYxcWhWMkNFVCttYkxnMXRZQUJUbkJTKzZKVjVhSFZncFNCTDc0ZytuVmtWRjVvYW5XUjJWSWpKV2xlaFhndHJZdkgvRDF6ZUd0YVdmeFhyeUswTkFuZFZRZUx6NmVRbnNXRVZtNUp1N2tZU1FhTXhIb0lmYnRPdWFSMkd3U2k3bzJlSGtLQXJORHJvakZvcHpzZ3hSdWZRN3I2Y1hYeDloSXRNd0dnbm9Cdk1MT3pqYS9MT3hLTHU1RGlORnJNemNqSjZSTWtpdGwrU1ZRS0lLTTZwYUx3YWZZR0NUbVRHOW9FdENXd1QxOFNvS0RqVVkrbjdUWkxjR3Y0WEZ6Z04vWkJPLzRCRUY5NkJxdStUWWJnMEUvWHdvdHNiZFVJeHpYK3hUcjZQVDd5YlVrbEhNOFhxRlFVUEZ5dVRNRm4rSmZlUWpiZGh1SlJtUEN4a0Q5TzdYSCtXSXlwL0MxRDUySUFwSGp2YjFSS0dkS1BKNlMwcFFrYkx1WmowYXp3eFpDTSswdFo3UUZXc2toRmhiWDZqeWRYVkdlNjV5SW03ZTRKWEc5dmJ6cVhMUHoybTZDbjRRZE5oK3l0MSsxQVJ3U2FEOHFoNXlxVjhpZGs3Z3BpZXZXYm0vWHBFSWNMQytrVFl2RzJMRERhaXdhZENQZzZ3TXlWWFZaV1dsa29Od1lUeTVROWg3YVN1UGhDM2RMMVhsZHpWcjBZUnNiVTNSSE45QU8vUExBTEtFK0lDdjlZbm82alp3WnRBWWtoVUlpcThNdjQ5cHVvMjNZTnRIUjRITHNPL1FPWVdhVk1KVWVFRm9oY0pZN1k4c3ZNSURta1lwWndmdE4wYyszeVdSbmFycEIvVmQxVE9JUTA1eGRKY3hLVTJJUEVyMlRhRHpmMEVBR2djQWo2VXIyV0QrTWpvN3UxcTJtWmlRMHdINEZ3QWc0M01GNHRpNGdJcmdxOU9uVGxwYVd5cXBNRlhpRUZFN2NIdkNpYmo2UHJxbnA5bkEwdU1zTnRpdmhjTGlqZzNYYVBsM0lnNU05RkR0Mzd0dnBkeUZCUUtOeDhlUzRrN0dIWmVnWG1KZ1lObnNpMUd0RGgzYUhleGp4dXRyeTVEdXZYaEVGVFZ3NXhabEw0NUdwY1M5bE1oa2FnMFRLWW1KNlFkQXN1NVVXRFFmblROUHh5OSs5ZlVmYSszWXJTbzdpR2d5Q3hKVGlZeGdRRnhlWGJVZEdXTDdLbGV2YkozRjA5SGljN0tNdmI3bncvajBOQmE3ZFlHQUlDR3ZvdWdJTkd1bXljZU9SSStPQXRyTG9qdkpqeG1SOUtoWjdrQksvRDVWRVlQajdHN1l5c1BkMjMzSnhXYjE2NDdZajdSOW0vNVhmTkh5L1hnRldDc2tUTkFPY3ppQnM5Zldsbjc1M3VGMkRha3M1Nk83a3lCSTZHU3lnemE1dUJQL0dwa2JDMWpVWG04NGVQeEdMV1ExaTFibFB2bWxIeExiOWRlQmRvdzRaZ29JcUdnMUErKzYrZnZ6TE5UVEE0NkdPek9nSC84WTlOcDdQZmhJWUZGVDVyS0tlWVNBY1lueSt0bnZudGVOM2pyb00vV2tQZG1wMzkwL2E0UERXNnNvZ2YvL0dSc0plOGkyTlJuVjMzNzZkSi9wYVFkOHovWnQyMEo1NjNDeThGS2hLYjBybjBmd1BIUGM3ZmIzaVFHelJyVjgyK05UT3VSMjAycEljNGFVTVZWQ0ZJREhvN2wyNlJoTjNvS0FvWUJuMFM2YUJZUkFJOS94VDFzYUc3TXpBakF4Vm91OUh3OGR6c1Qzb1BVcDc5SUoraTFVL2k5NVRGaXRNOC9OVHFaUllhdW4xU3dWRjV3b09ISmpiSGZvelBlRU8yZ2VuanQ1TFUxS3BWQ3hXVVhEdVhKR202Rm4yaEw5aFVELzZmdGtiN1lsTHBRQ1hsaGJjNGNleU5hV0xnUDFIdW8rZFk3VFdGTVVkTzNIeWhjWW45bjVmMFB2ZjlKNDhhcFQxbmowK2ZSZU1uZnpILytSWEEwM2EyNlVIUTdZQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUMwQUFBQXRDQU1BQUFBTnhCS29BQUFDOUZCTVZFVUFBQUFUSEJraUp5QXFKeUFhSGhyQXFLVVhIUmtlSWgwYUlCbDJTamdWSEJkd1JUUWhKQ0FnS0I5WVBDb3BLQnhJTXlVa0t5U0VVejRtTHljZkpoNGdJaGxiT1NxVmNXUWFKQnlDWEVvVEhCWWdKQjRSR1JkSk55aCtUejFwUXkwa0tpQ1RYa1RJc2E5a1Rra21NQ1VQR1JiSXI2dVRYRVRMc0szRnNxMXdZRjFIT3pwaVBTdklzcTl6UmkwUUdCVEZyNm9QR1JjWUhCZ1ZHaGdXR2hZYkhCY2NIeHdSR1JZZ0loNGtMaVVhSXhzaUhoZ2ZJQjBZSVJvVEdSYzhLaCtOVlRvcUp5SXhKaDRmSUJzYkhSa2RLQjhjSlIwcUlSc2VIaGtaR3hhUlhraVRYVVFrSVJ2V3RxNklVVG1EVHpkS01DTWtKU0F0SXh3V0h4clVzcWZHcXFkOFREY3RMQ1VoS3lKRkxpRWlLQjg0S0I0WkhodkhuSTJkWjFOc1JUUnRRUzQwS1NFbkl4MGRIQmZQdWJYR3FLR1NZaytLV0VFb01pbFhOU1pRTXlZZ0poMFVIUmpadWJEVHJxTFBxSnE5bnBuTm9wS3pqNFREbFlPSlcwaVRXaitEVVQxL1RUZDVTREp6UmpGZlBDNUFNU29pSkI4bklCcmZ5c1hleHNIWndiM2F2TFBLc0t2S3A1L0puNUMra1lLYVlVZUhWajJLVVRXSFRUU0RURE4rU0M5bVB5NUtOeTVkT2lnekxpYk50YkhQc3EzUHJxWEhvWml3bUphdWs0N0dtb3ZHbUlhMGlYeTZpWFcxaFhTWmFsMnBkRnhpVDBpQ1ZFV1BXa0E1TUN0ZU14bmF2YmZRc3F2QW81N01wWmZFbTVHM21KQzRqNG01aVlPdWlvREJrWDZuZ0htdmZYS2xmbkdWZEhHemdXeWNibWVEWEZTTVhGQ2VaVXgxVFVCbVNUNXpTVFZZT0N0R01TbFFMeVBrMWRMaTBNemV3N3ZWdkxuVXViWEp0TExScTUvTG9wYWJmSFdnZG15bGNGbDJXMU9JVlVHWFd6OVFOeXMzS3lVOUx5UXFLeUpZTUJURXI2eTVvNkcvZ1lLOWpYeXdoWHF2ZVdtaFkyR2djVjl4WlYrTFpWcUtWMVJQUjBKY1JUeFhQVHAzUVRkM1FpcHFPeCtpaTRhNmpYcWxjMjJMYldhQ2EyV2JiMWVSWTFkNVVraCtVejlGUFRkMFJDRzJZeUNTVGg0K0tCaHhPeFdGUWhLQVB4SFF5Y3JIdnIyWmdINnZmbnF2ZTJPa2FrOXFPemZIYnlWak1pV2JVQnFPVEJpT1NSZytwRmNkQUFBQU1YUlNUbE1BSUNEdmdQemZjREQ3Nzl1L255QVE1ZCtsZ0Y5UU5TRHYzNyt3b0lCNGFFRHYzOC9QejcrL3I1K2ZuNTl3VUVBd1JxdmhWQUFBQm50SlJFRlVTTWQ5bFZWMEdsRVFocmZ1N3U2dXJMRkljQUlFSjBnSUVLelFBbTNjcFkwblRTTk40NDAwcWJ1N3U3dTd1N3UrOUtaeTZ2MGU5bVcvODUrWk8zZG5vZDlwM0doWXZ5Njdpb0liREJ3OFlqVDBYK3JVcjBjbjhpcHZGZ1Zya3FlT0dUT203NUJPLzNUck5pZUllTnpJelZrMk8za3FrQUhianc2dDgxZTNWWDA2UVNkd21FZms3Sm85ZGV2Mlk0V0Z4eG9jMVJTeDYvK3RpSVk0Z1JOMG5wR3dyVjNxR0ZOWUdjYzVlR25adk5DOTFkdzJkWCtYUnpVMUVuUWxuY2VqYytQT3pVc3VYRlpZK1BLaVlrM3AwZzJWT2wyOURyL0s3UmtJamlzSkhvL2dzdTh1MUdoMmFUUWF4L3lWcTRKbkx5dXFaSHM4N1grV095QU14SWdiOGZoNFFyVjJvU001dUVHRDROMHJ6NjBNVFU3VXJMeGs4L2NlMS91SDNMSWVzQmxHT3NHbDB5c1hPdktUTmNHTDEyNkl5OWtick5tYTJPQUMxK05GN2Z5ajl0WmNCR0dRWVdVOHpvdTc1c2lmTlMxbGZ2bTVsWGRXekp1NkxYRnI0dmF6dUJlVjM2YlZON21kamdlalpCSUt3N0N5Y2w2K1ZLcVdUcEJLazJZbVRweTRiZXUyL0xUNUY3d3A0OGExK3pZVWloK01JeVF1amhqcHVvdWgwNlRTQ1JPU1prN2F2R25UcGxrRk02ZXRpRngxbjAraDhMMitqcW5GT0lvSWgrTjJyMWhiemE1ZVV6b25VRDBoYVVJU3NEZFBXdUp6MnJYeDhwS3ozbDVldnI3TnY0eUZXcHVOclhtZnJWMlRjeUM4ck5nMFo0ZDZ3cGFKRXlmTlRObTllRlY0MVoyQVd4NHFxSnhTMjJoM3FqK2Z5N05mTGc4dEQzQlduU2tMQ3lzSkNVemFzbVdtTkNWMDN0UmtSL0JzNTE0L0NvWGk1MWRiZVVNOFhrbkFXTldTVTVZbWFhSFRyNGVWbElTQVdxVFRDaFlzbloyZmN1UDBhZG5GY1FDK2QyZHduNG54M2tvNmJOeXdZTW1xazZhNXBXRWxwdFFndFZxZE1uZDYrZEtGNXkrZlg3RmlYdzZGQXRLOWZSdERqWUFkRDhNNGVxdTBRTDJndURTdEpDUW9VS3Jlc2ZORVFOWGR0K2VMdGo5L3NiVGE0OGZuODcyOUdrSGRsT005QkdMMHhhMjdkdTRNT1FVcUNka1J1Q053VG1yWTdvMlhibDQ3VnJRNDlPUkJmeERPOTZPMGdKcnJ4dE9OQ0l6RUs5bDdUMDR2TzdWOEVjZ09EQW94bWVZc1hMeHMvb0xqeDQrL3N1cEFsM3kvY2YyaGVua1lIUVUybTYza1dXOHN5YjVkbGpvbktDZ2t0ZGdVTkcxVy9xeVV1UXRLUXptSC9mbDhLcGcreEs2V0FCdGhzUFBZTUpJUTg5aGNFWmFhbW1vcUxpNHBEbEpMd1pWeE9EUVhkQjRxMWN0My9IaElsNmNVOG1DRW5IZVFqYVBZa1FjdW4rV0xGcVdscFlISFRqQ2t4RWtUTjA4OGV0K2Y2dlhGcHVLRWtBNHp5TG80Tm4yODZ1cUhxeGsrRmN1WFQ1OWVWbmJDRkNoTkF2YWtiWTZ6L3Q2MXVpL1VFT1lDbTB6Q3FwVTh0T2JUczBlc0dWbnBlL1pVdkY1K0lzeGttbHRRVURCMy91S2NyM1pUYUFDTUNia0ltVVJtRXlqNjRPSFRSL3ZUcDF6Sll1MVBmMU5SVWJFbkFPQ3N5ckVlQmpyVnF5dlVIVUZ4bUVFaWtYaENWRlR6N3VPVHpBaldsU3RUSm1kbVprNEdaTWxkaHc1eXJCeWxCNlIzZ3hveHdFZEdJcE5JTU1aQWF4NCt1Um90eTVveUpTdVRWVXRtcGxsRnM4YXBEbG5ab0UvZlJsQmpNZ0JFTTRBdHFubDZwQ1pHR3cxc0dTdENIQkVScGFjSnVkWTRxLzVRM21HUTNSaUNtcEsrZ01BWWloeDVkcVRHRWhNZEZSV1ZNVU1zamxoSFF6Rk1hRGhnWURJUDZmeTlHNEliV3g4a0E4Z3dqS0MwQklIYkVoMGwzeGNlN3VNelk1MmRER3dKTTFheFZzRmsrM3RhQUx2T2QxdUVZZ0o3Z3RzU0pSL3I0M1Q2aU1NTktBUEY3QktPYTkwOXJWdDEyTy9Ma3VqNlZlZUpSRFNWVUxBeEpqSmpyRTh0QnpBUktoTFNKQ3BtYkxZMm5La0QwZC9ER1F3N2hpV283S3FONnlMSEFzUStrUUpNQkFKc0FwVkJvYzhkYTg3N3RuL3FnMU5CaFRSTUtMSFJtTzZZeUxFWnRUM0dTdXdpb1JDanFheE12VjZSZTd2SDk4M2RFRUdGQWduR3RkRTRDcGRGR3ltWHNWZ1pDaHROd0JGZ3FEMEJITW5HM0M0L2RuZFR1MFFnc1lPM0c5eTV0V2NpejVKcDNRYURnaWtBcGRNNEJrTnVrNTkrS2IyNUVwREUzS0JZSDV0dGlkYktaWEtaMWh6cmNuTm9HQW95bUk4dEkzL1ozNUlFem9IMXNiR3g1blV4TWRGeTJlVEorL1pwMXpNVGFEellabURxMS9lQ2ZxRkRQZjM2YkxNNWU4MjlxT2dwTXBtTUpaNFJvK2NrMEl5K05yMmlkVWZvTjFvMk01dWJSRFlKZHpySGdpWWo5a2ZJWFhxRFFJTDcyaFN0VzBKLzBuTlYrWm55cWpON0FzVGk5UFQ5TEl0YndWUko0bkZPajFiUTMralVOdHlwZFFZRXJGNjlPajFDbnUxeTZUbGNvbmxkNkYrMGJOdk1uQ0ZPWDcxYXpOSmFjblBkOWVyWGdmNUx4NTV0Qi9VUno0aHMxbXg0cnorYSt3dzh2SjQ5SklzQ2tRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDMEFBQUF0Q0FNQUFBQU54QktvQUFBQzkxQk1WRVVBQUFDWmxZUEN0NmUvblltZW1vbVpsb1cycjU3bDQ5Mjh1TENwb3BHYmxvT1psSVBYMDhpL3Q2ZVdrb0Nwb28vWXpyK2VtWW5hMWN1c3FKZk13S3lhbFlVVklpM2w0dDdKd2JIYTE4ekh3TEtTa0lHd3FwZXVtWWZLdGFBYUpqRGo0OTY5dHFVYUtDK2ZtNHZsNU9EZHdxeXNwSlRtNXVIQ3hiMjJ1cnpNcVpSUVNVamczdFhadUovbTV1QlpTMGlhZW1uSHY3Q3FvcExidTZYazM5dUxjbWJIdjYvazM5cUFaV0RnM2RiazR0M2QydERIdjdDN3RhTWFLREVTSXkvTnhyakZ2YTNEdTZ6QnVxcSt0cVdtb0pDZ200c3BMVFFVSlRMajROdmkzOWpQeWJ6THhMYTJycDBZSml6ZTNOUGIxODI0c1o2d3FwaldzWmV2cDVhcG81R0lhRnRYUmtSTlB6NUhQajdsNU4vWjFjclYwc2EvdUtkeVZVMUhPVGNoTERZZEtqTWdLVEFYSkMvSXdiSG54YTNmdXFHNXNxSGFzNXM3Tnpza0xERVZKeTdYMU1uU3pjSEt3N0xqdjZhZG1ZaVlsSUtXZDJoNFhsVnVWRXhBT1RvM05EY2VKeXpKd3JYYXVxQ3pySm5ZcTVlc3BaVE5wWXVBWVZwN1cxRFR6c0xweUxEbXdxckVvb3VTa0lPdWpYMS9hR0YzVjAxZFNrWk9SRU15TVRMazRObnF6cm5xeTdUandxelJ0Snl6ckp5WGxZaXhnMitxZldwMVcxUnZXbEpnVFV4alRVaFdRVDh3TmpoUU9qZmw0dDN0ejdyT3VxamR2YVRRcUpHaG5vM01uNG0ybElXK2tIdWVlV3VqZDJlZWRXU1pjR0dGWTFlQVhsRmpVa3hhUzBscVVFaGJRajh1THpZbUtDcmx4N0hkd3F2WXZLWGh1NlBldDV2S3JwclJxNVNsbm96Rm5vcTZtb2ZFbVlYQmxZQ0NnbnUwalhpNmlIYXRobldzZ1c5cGJXaGFXbGhwVWs5TVVFeFVSVUpqU1VFUkl5cmYzOXZoM05PMXI2SFhzcDYycHB1OG41T29tNU9OaUg2amczRnRjM0IyZUcrRGVXNmJnR3lEY0dtVmMyU1BiV05uV1ZOZFZGRnVUVVV1TGk4N01TM3kxOFRVME1TMnRhdnF2S21xcUp5OXBwZWpvWmVkbnBXcGs0V1VibDZTWjFvME8wSFN6TC9IdUtYVnJJMnZsNDJjaEhtaWZteUtkMnAxYldoMmFHTmNYMTV4WTF0RlIwZno0ZFBDeDhXOXZiU2pwcWZEckptem9wT3ViMlNTWEZYVUxkb1FBQUFBT1hSU1RsTUFJQ0Q5ZisvbklCRGwycnF3bjU5d2EyVktTakF3SU8vdjU5L2Z4Nytvb0lDQWdFRHY3Ky9mMzkvZjM4L1B2Nyt2bjUrQWNIQmdNREEyZG5lQkFBQUY2VWxFUVZSSXgzMlVaVmlUVVJpR1A4WHU3dTd1QXRrR0NHd29UR0N3UUYyeXNRMTFzakZ3empHSmJXd1MwaVVncVhRajNXRkx0OTNkN1EvUDl3RzIzci92ODV6blBkZTVYdWgzSm84ZE0yS0VuNFBENEpFangwK0cvc3VBUVlPTmpZMFBIZkx6S0dtcXJHd3NtVGxtd0wvZDJhY0F4c1oralRWWUpoNlBweitzdXVyeEQzL1lJQ09FVTAxaGVCWU9od0d3K0RVZUhoNkQvaFk4M05yYStxaTF0ZDlyNTNxZ0lybzlHdnNhakREemovaUZTNDVhQWU0MGRiTXdPRXc5SHMzQXMvQjRCdjFoaVFPWWVPS3Y4bmdySzB2TFM1YW4zakxBL2ZiMjltZzBuWTVHTStqMDlFNEhNTFREK0ovbGlaWW5BQmR1MWVCeHNBazhOSVBQcE5QcFRMN1lBMzRraDRVLzVJRkRUcGdCTGxTaWNUaDdQSnFQVGRkb2VtZ1VtcGhHeThDV2VNQ1BPdmhIOXlGbVpoWjJkbllYd2xnNGV4WVR5eU9UVXVWRW9iQ04yTktTZ2cycjhUTTZhM3hveExBK2ViNmRIUXJtRmgvMFlLVHp5SFh5K3duK2NUSFIrVStleEhaa09GY1p3ZnFndmg0b2xDSENIV2ZRQTh1amhLWW1KZmlYeGVSekpibTVGeFU5ckRCalJPL3RNbnJmdmgwSXdNWTU4eWhxVDhjekFXWEZCSUtFd3hGd2ZVVk0vdFdqMWtBZmlVUWJHQmpvSTl4MXhxR3hZbkp0aU9wQlFGd01nY0NKWXJ0eEpMRWFack1Wb3NQaDYzVmhiRzF0ZFdHN214THFtWnAwMzc4NGhrdmcrR1M2dXVVUWdwMmJMUzJCYmdRM24zRVl4dFQwOE9FYlREUlRRNjRGUlU3N0Y4bTRCRUtPVHlaYndGVXltNDVZZ25UcjRSQTBTZTg3TjV3WjZSUVNLU1ZZUkN5UGtYS2paYmtDZHFZZ1Y4ajNPTktyVDRiRzdmcEJHSmJpU1ZLTG5YamlqdkpvaVZRbWk3MmNKK0VvS0xjc3pFN0ErbGhvMUlFK0hqMDZVS1ZKQ2E1MTZpRlR3cnJyU3ZPbE1pVTVQSlZJMEhxRHNqQXpnOU0zUUtPdVh6L1d4eVdhVTJkS2VKb3lPQ1dZUkdxVHlRcEtGYkZhQ3FIN0MwT1VuUVdzejRLbTcrM24rdTFxY25XSXA2TTZvK3B6RURtMUtKZlFIblR2T2JmUXZjRVFoYktBOWVIUW52MTc5c01BL2JKTGlDTlZwQW9OZlpaL09wUlc3aGJkZGVWZGtVeHcwZjN4UGhCdWNlS0lGV1J1YnI0SEFCOTVtaFpJbFJOZDVBOFNLdUxUeUcyY25HaWZhMnlCYTFUZTQzMTlYYUR0MjRIZmU2STFYRW1sRXRzU0V3SVM1S0hoWjNMWWJpZXZYZlB5OW9rMDJBSHJZRkpvK25ZRTRKdGZTVk1HVW9tSkZRR0pENmloNUNRcDI5WDdwSmUzcTAra1BxeUQ2a09nVmRxN0FjaUJYVUdCSXFyTDZRcC8vMFJIR3EyRjYrYnE0NVBwN1owRjIwaVhXZEFvYmNCdWJlU0NWcEVMc0FQSzR1TERhV1NGMUUzZ3h2YjI4c3FLMUFXNklRaWZBMjB5MmJrVCtFajhybFlYYXRMcGl1S0MrSEIxVDFkQUVZZkRQbm5TS3p0U1Y3YzNmQ3kwVmNmRXhLVFBOMjhXQlFiZUQ0aUxpM2NNcjZ1UVNtOEtZRHNTZkUrNEN3bzFDWUttUnVqbzlPV2Z2NW9jQkQ1Z0lqRTFqYW9va3NxNFlFNnZ6RThIRHlPMjRSRHdZK2ZwQVBzNDBJRjlKVGtraE9xaXFxTUZ0NWZGY0tNS3RISmNYYk51SXpiUVJ3TjdxQTJ3SXhEOS9JVU9Fc25UVVpVbXBuVjkvVklXVjV6a3pvN0t1M1RRMWxZZkRoOElBZGJZMk9oRUlQcnVBeDBwNnRvZ29paWttaGdydlhsVFVPb3U4YjF0WUhvUUtRNmlrWEFibXdnVHVNenU4Ni9JYXBKblhaZEtKVmVwRkJJM0RvR2c5VlFQMk9CVkRKQm8wQnpvT2liQTE5YStvdVpSS0dJeVZaaVlKSFFYRU53THRGcjBFVnRmZjM3LzVsNEtWNGRIUGJlL3hpa01pM1VpRVJQS2kvTzU3ZzNDRjBhNzlFeE5EK3Jxem9ENkdicklSZ2R3L056N3F5ODFXRG9ENitSNXB0eS9vUENaNDVzU1BUM0VuZ1o2OURNQk5JblFPZGZvblBHeUZzdEFvL2s4a3RKRjJGcEZTNjc4MEd0UGdINWlISWpXYnF6SFpMeHlGUE5oUFozSEV6czVWVi9TTU84QzJYWUw5QXNUcHA3N2lNZGdLSUdCeVpSMEpoUHNlYXlHRWhTZGw0SGgzekNkTmhINmphSExIN0l3ZUhXMVhCUkVBcW04dDUzTjl5NXpMbmJXNHl1WGdjNS9zSUNGWWZHU1JXZmFsU0drWk9XOVBGOWYzeWpKNWU3NkJjT2d2ekZsTGdzTDlsUjhnMUF1YnkvTWx2aG1aMFZkWERzRkF2ekRYK2xDZkY1YUdpOXNpUFhOenM1YXZCR1UrQi9iTnErYnJWV29LRnl4ZXM2NFNkQnZmQU14cjkwUFZMRlQwZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzBBQUFBdENBTUFBQUFOeEJLb0FBQUtRMmxEUTFCSlEwTWdjSEp2Wm1sc1pRQUFlTnFkVTNkWWsvY1dQdC8zWlE5V1F0andzWmRzZ1FBaUk2d0l5QkJab2hDU0FHR0VFQkpBeFlXSUNsWVVGUkdjU0ZYRWd0VUtTSjJJNHFBb3VHZEJpb2hhaTFWY09PNGYzS2UxZlhydjdlMzcxL3U4NTV6bi9NNTV6dytBRVJJbWtlYWlhZ0E1VW9VOE90Z2ZqMDlJeE1tOWdBSVZTT0FFSUJEbXk4Sm5CY1VBQVBBRGVYaCtkTEEvL0FHdmJ3QUNBSERWTGlRU3grSC9nN3BRSmxjQUlKRUE0Q0lTNXdzQmtGSUF5QzVVeUJRQXlCZ0FzRk96WkFvQWxBQUFiSGw4UWlJQXFnMEE3UFJKUGdVQTJLbVQzQmNBMktJY3FRZ0FqUUVBbVNoSEpBSkF1d0JnVllGU0xBTEF3Z0NnckVBaUxnVEFyZ0dBV2JZeVJ3S0F2UVVBZG81WWtBOUFZQUNBbVVJc3pBQWdPQUlBUXg0VHpRTWdUQU9nTU5LLzRLbGZjSVc0U0FFQXdNdVZ6WmRMMGpNVXVKWFFHbmZ5OE9EaUllTENiTEZDWVJjcEVHWUo1Q0tjbDVzakUwam5BMHpPREFBQUd2blJ3ZjQ0UDVEbjV1VGg1bWJuYk8vMHhhTCthL0J2SWo0aDhkLyt2SXdDQkFBUVRzL3YybC9sNWRZRGNNY0JzSFcvYTZsYkFOcFdBR2pmK1YwejJ3bWdXZ3JRZXZtTGVUajhRQjZlb1ZESVBCMGNDZ3NMN1NWaW9iMHc0NHMrL3pQaGIrQ0xmdmI4UUI3KzIzcndBSEdhUUptdHdLT0QvWEZoYm5hdVVvN255d1JDTVc3MzV5UCt4NFYvL1k0cDBlSTBzVndzRllyeFdJbTRVQ0pOeDNtNVVwRkVJY21WNGhMcGZ6THhINWI5Q1pOM0RRQ3Noay9BVHJZSHRjdHN3SDd1QVFLTERsalNkZ0JBZnZNdGpCb0xrUUFRWnpReWVmY0FBSk8vK1k5QUt3RUF6WmVrNHdBQXZPZ1lYS2lVRjB6R0NBQUFSS0NCS3JCQkJ3ekJGS3pBRHB6QkhiekFGd0poQmtSQURDVEFQQkJDQnVTQUhBcWhHSlpCR1ZUQU90Z0V0YkFER3FBUm11RVF0TUV4T0EzbjRCSmNnZXR3RndaZ0dKN0NHTHlHQ1FSQnlBZ1RZU0U2aUJGaWp0Z2l6Z2dYbVk0RUltRklOSktBcENEcGlCUlJJc1hJY3FRQ3FVSnFrVjFJSS9JdGNoUTVqVnhBK3BEYnlDQXlpdnlLdkVjeGxJR3lVUVBVQW5WQXVhZ2ZHb3JHb0hQUmREUVBYWUNXb212UkdyUWVQWUMyb3FmUlMraDFkQUI5aW81amdORXhEbWFNMldGY2pJZEZZSWxZR2liSEZtUGxXRFZXanpWakhWZzNkaFVid0o1aDd3Z2tBb3VBRSt3SVhvUVF3bXlDa0pCSFdFeFlRNmdsN0NPMEVyb0lWd21EaERIQ0p5S1RxRSswSlhvUytjUjRZanF4a0ZoR3JDYnVJUjRobmlWZUp3NFRYNU5JSkE3Smt1Uk9DaUVsa0RKSkMwbHJTTnRJTGFSVHBEN1NFR21jVENicmtHM0ozdVFJc29Dc0lKZVJ0NUFQa0UrUys4bkQ1TGNVT3NXSTRrd0pvaVJTcEpRU1NqVmxQK1VFcFo4eVFwbWdxbEhOcVo3VUNLcUlPcDlhU1cyZ2RsQXZVNGVwRXpSMW1pWE5teFpEeTZRdG85WFFtbWxuYWZkb0wrbDB1Z25kZ3g1Rmw5Q1gwbXZvQitubjZZUDBkd3dOaGcyRHgwaGlLQmxyR1hzWnB4aTNHUytaVEtZRjA1ZVp5RlF3MXpJYm1XZVlENWh2VlZncTlpcDhGWkhLRXBVNmxWYVZmcFhucWxSVmMxVS8xWG1xQzFTclZRK3JYbFo5cGtaVnMxRGpxUW5VRnF2VnFSMVZ1NmsycnM1U2QxS1BVTTlSWDZPK1gvMkMrbU1Oc29hRlJxQ0dTS05VWTdmR0dZMGhGc1l5WmZGWVF0WnlWZ1ByTEd1WVRXSmJzdm5zVEhZRit4dDJMM3RNVTBOenFtYXNacEZtbmVaeHpRRU94ckhnOERuWm5Fck9JYzROem5zdEF5MC9MYkhXYXExbXJYNnROOXA2MnI3YVl1MXk3UmJ0NjlydmRYQ2RRSjBzbmZVNmJUcjNkUW02TnJwUnVvVzYyM1hQNmo3VFkrdDU2UW4xeXZVTzZkM1JSL1Z0OUtQMUYrcnYxdS9SSHpjd05BZzJrQmxzTVRoajhNeVFZK2hybUdtNDBmQ0U0YWdSeTJpNmtjUm9vOUZKb3llNEp1NkhaK00xZUJjK1pxeHZIR0tzTk41bDNHczhZV0pwTXR1a3hLVEY1TDRwelpScm1tYTYwYlRUZE16TXlDemNyTmlzeWV5T09kV2NhNTVodnRtODIveU5oYVZGbk1WS2l6YUx4NWJhbG56TEJaWk5sdmVzbUZZK1ZubFc5VmJYckVuV1hPc3M2MjNXVjJ4UUcxZWJESnM2bTh1MnFLMmJyY1IybTIzZkZPSVVqeW5TS2ZWVGJ0b3g3UHpzQ3V5YTdBYnRPZlpoOWlYMmJmYlBIY3djRWgzV08zUTdmSEowZGN4MmJIQzg2NlRoTk1PcHhLbkQ2VmRuRzJlaGM1M3pOUmVtUzVETEVwZDJseGRUYmFlS3AyNmZlc3VWNVJydXV0SzEwL1dqbTd1YjNLM1piZFRkekQzRmZhdjdUUzZiRzhsZHd6M3ZRZlR3OTFqaWNjempuYWVicDhMemtPY3ZYblplV1Y3N3ZSNVBzNXdtbnRZd2JjamJ4RnZndmN0N1lEbytQV1g2enVrRFBzWStBcDk2bjRlK3ByNGkzejIrSTM3V2ZwbCtCL3llK3p2NnkvMlArTC9oZWZJVzhVNEZZQUhCQWVVQnZZRWFnYk1EYXdNZkJKa0VwUWMxQlkwRnV3WXZERDRWUWd3SkRWa2ZjcE52d0JmeUcvbGpNOXhuTEpyUkZjb0luUlZhRy9vd3pDWk1IdFlSam9iUENOOFFmbSttK1V6cHpMWUlpT0JIYklpNEgya1ptUmY1ZlJRcEtqS3FMdXBSdEZOMGNYVDNMTmFzNUZuN1o3Mk84WStwakxrNzIycTJjblpuckdwc1VteGo3SnU0Z0xpcXVJRjRoL2hGOFpjU2RCTWtDZTJKNU1UWXhEMko0M01DNTJ5YU01emttbFNXZEdPdTVkeWl1UmZtNmM3TG5uYzhXVFZaa0h3NGhaZ1NsN0kvNVlNZ1FsQXZHRS9scDI1TkhSUHloSnVGVDBXK29vMmlVYkczdUVvOGt1YWRWcFgyT04wN2ZVUDZhSVpQUm5YR013bFBVaXQ1a1JtU3VTUHpUVlpFMXQ2c3o5bHgyUzA1bEp5VW5LTlNEV21XdEN2WE1MY290MDltS3l1VERlUjU1bTNLRzVPSHl2ZmtJL2x6ODlzVmJJVk0wYU8wVXE1UURoWk1MNmdyZUZzWVczaTRTTDFJV3RRejMyYis2dmtqQzRJV2ZMMlFzRkM0c0xQWXVIaFo4ZUFpdjBXN0ZpT0xVeGQzTGpGZFVycGtlR253MG4zTGFNdXlsdjFRNGxoU1ZmSnFlZHp5amxLRDBxV2xReXVDVnpTVnFaVEp5MjZ1OUZxNVl4VmhsV1JWNzJxWDFWdFdmeW9YbFYrc2NLeW9ydml3UnJqbTRsZE9YOVY4OVhsdDJ0cmVTcmZLN2V0STY2VHJicXozV2IrdlNyMXFRZFhRaHZBTnJSdnhqZVViWDIxSzNuU2hlbXIxanMyMHpjck5BelZoTmUxYnpMYXMyL0toTnFQMmVwMS9YY3RXL2EycnQ3N1pKdHJXdjkxM2UvTU9neDBWTzk3dmxPeTh0U3Q0VjJ1OVJYMzFidEx1Z3QyUEdtSWJ1ci9tZnQyNFIzZFB4WjZQZTZWN0IvWkY3K3RxZEc5czNLKy92N0lKYlZJMmpSNUlPbkRsbTRCdjJwdnRtbmUxY0ZvcURzSkI1Y0VuMzZaOGUrTlE2S0hPdzl6RHpkK1pmN2YxQ090SWVTdlNPcjkxckMyamJhQTlvYjN2Nkl5am5SMWVIVWUrdC85Kzd6SGpZM1hITlk5WG5xQ2RLRDN4K2VTQ2srT25aS2VlblU0L1BkU1ozSG4zVFB5WmExMVJYYjFuUTgrZVB4ZDA3a3kzWC9mSjg5N25qMTN3dkhEMEl2ZGkyeVczUzYwOXJqMUhmbkQ5NFVpdlcyL3JaZmZMN1ZjOHJuVDBUZXM3MGUvVGYvcHF3TlZ6MS9qWExsMmZlYjN2eHV3YnQyNG0zUnk0SmJyMStIYjI3UmQzQ3U1TTNGMTZqM2l2L0w3YS9lb0grZy9xZjdUK3NXWEFiZUQ0WU1CZ3o4TlpEKzhPQ1llZS9wVC8wNGZoMGtmTVI5VWpSaU9OajUwZkh4c05HcjN5Wk02VDRhZXlweFBQeW41Vy8zbnJjNnZuMy8zaSswdlBXUHpZOEF2NWk4Ky9ybm1wODNMdnE2bXZPc2NqeHgrOHpuazk4YWI4cmM3YmZlKzQ3N3JmeDcwZm1TajhRUDVRODlINlk4ZW4wRS8zUHVkOC92d3Y5NFR6KzRBNUpSRUFBQUFaZEVWWWRGTnZablIzWVhKbEFFRmtiMkpsSUVsdFlXZGxVbVZoWkhseHlXVThBQUFESTJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU0x2dTc4aUlHbGtQU0pYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUWlQejRnUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNKaFpHOWlaVHB1Y3pwdFpYUmhMeUlnZURwNGJYQjBhejBpUVdSdlltVWdXRTFRSUVOdmNtVWdOaTR3TFdNd01EWWdOemt1TVRZME56VXpMQ0F5TURJeEx6QXlMekUxTFRFeE9qVXlPakV6SUNBZ0lDQWdJQ0FpUGlBOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNaVBpQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMGlJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRiRzV6T25odGNFMU5QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YlcwdklpQjRiV3h1Y3pwemRGSmxaajBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDNOVWVYQmxMMUpsYzI5MWNtTmxVbVZtSXlJZ2VHMXdPa055WldGMGIzSlViMjlzUFNKQlpHOWlaU0JRYUc5MGIzTm9iM0FnTWpJdU15QW9WMmx1Wkc5M2N5a2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZOakl6T0RVeU5ETkVOelkxTVRGRlEwRkZOVEU1UkVKRU1VWTJNVVF5TXpNaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk5qSXpPRFV5TkRSRU56WTFNVEZGUTBGRk5URTVSRUpFTVVZMk1VUXlNek1pUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvMk1qTTROVEkwTVVRM05qVXhNVVZEUVVVMU1UbEVRa1F4UmpZeFJESXpNeUlnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG8yTWpNNE5USTBNa1EzTmpVeE1VVkRRVVUxTVRsRVFrUXhSall4UkRJek15SXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QbUY1bFBjQUFBTUFVRXhVUlVaRVJvbDFaTnVUYk9PaWJPV1dlTm11aDN0b1dkSndYaFFSRkc4eUZhdHhTUEx5OGpJakdMQjBUVzR6S05wOVc5TnZVeFFIQXRLRVh1S2NiSWRYUjBZbUYzeGNNcWw2Vm50alI2NVpRQWNDQVptS2ZGbEpPNWxqUG9sblNHMVRPOUtHWW5WcFlSc1pIYVpjUVlKcFVaaDVWam9YQkpkeVM5U1VYTjZhYTgxOFcwOFpEdXpzN2RTTmJXTXpPSU5HTEdwb2FtTklPUmtXR3VLR1pyMTVVN2VYWmlZakk3R1lXRVk1TFp1QlJaTjhZcXhzU1JjYUpkN2QzbkZlU3NSOFpGSXFGcGRvVHQyV2NibUFYOXVNYWRLSllxcHJRanM0T3JoYVBNT0VYUklPRVNvV0JxRmlRK1NuZzg2R1lyUmpRSHhXTHEyRVdLVnNSY3VpZE5pTVlCVVVHTVZzU0xwclM4eU5ZWFZGSTdPcHBTVWJHRkk4S1lseVdldWZmZDZaYzUxY1BhZU1jWnliblBmMzk5ZW9mTUNLWGpZY0Q4eVFaTDV4VHJXeHJEVXFKeGNQQzQ4Nk9DSU5CYlY2VXBPU2xIZExOUFNtaGRlUmFXSlFQOE9SWlBDMGZPeXJjN3BqVFZ0QUxZeGJOSUJ5Ylc5WlFZOS9jVmdtQ0twU09lZW1iT0doY3A2QlhrMUFOTTJBWHcwTURibU9YclZzVUlOUE80OVJPWUZ2WXQyWVluQmpWMnBaVkFzUkZvRmNRTFJxUjhXRVpjeDBWdDJNY0hSZldZaFZQcDlVUGhVYkhaUlNNZkcvbGwwd0Y4TjZWcXlKWWhjVEZvOU1LYm0xc1l4Z083U0JaK09qZmE2dXI1OVZOSUI5Zk1TS1lqOHJJMjFjU2NOeFh1dW1jV0pWUzRsWUx1ZXFjV1ZhVGtvd0d4MFlFMmxYUmg0Ykk0R0Jnc04xVkxsc1I4cU1hYm1BVlVFL1FuOS9mN0N2c0JBUUVhQ1VpZCtmZmF5VGVIRnZjZXlxZTVtVGkwQTFKcnFoWUZZM01QUHo4NjJDVWZEdzhLZWdtaklLQk9xeGdLSmpTYzJlYjZGd1I2ZGxQYXBvUnBkTk5UOGdEbGt5QmNGaFI1aHNYZTJzYVk0L0lPcWlZNkJRTCs2bGZIOS9nS1JTTGNSdlV1T3BlYTlPTXpRTkFHWkFMY2w3V2NtS1c4NkhhTjJaaCtQaTRlcXhmTU9FVmNTV2E4R2JjczZTYksrdnNKK2VuK3VRY2J0eVdLQ2ZvYmw2V05HZ2Z1bm41TENBVUxDQldlQ1VidVNjWnRlSFpkV1piWlJmT1pOYVA4cU9kRzV0YnJLWWRJZDNjT3B2WC8vLy8zWDVDYmdBQUFFQWRGSk9VLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL3dCVDl3Y2xBQUFGejBsRVFWUjQycFRWZjF3VGRSZ0hjQmcvdXVIUURoeU1Bd0lPbUFxU2NNSkVHRWdJREwvOERMbVFnRUJodzFnYnlGUVFJUVFPRlJSUmlPbmtFTlJFUldYTS9IbVZaU0paQVMzTHJDd2xLelUxTlNQeVIwYmYyekRSMUY1OS85enIvWHJ1cytlZWU3NG13Ly9ubUR6NlE4ZzFYeE1SVHVFaUU5OXJJVS9YUGZrU1FJMDZrdnllSitydVF6aGc2Z0REMU5YVlVYSTV3ekFVaFgvZC9YaDlXVVF4RElLUURNbFFkRjVnbmxZdWx3TkFpUTQvUm1mN1VvQkJTSkpRa3dDVkZmdjV0ZlBTRkNnS1BiaWIvYWp1TVRGYVFpMG1LWDVyMHUxaXZZd1hBemtLSDJEUzg3Q2VMR0ZZVEJKaWNSM2xjbURpUkdtclJpOWpOY1hHa1V3ZXJiTVBNc2JLRUFPUG5QTHkzVDlKVXpXYU1yNU1nYkxwcVlQWm8vUmRGaE1FZ1l0SnhYTWZtWmt0V3JSb21US3FyeTlyQmYrRVhJNVJBUGcrMEZ0Z013eFlKd2JudnYyeTFteDN1Wm1aV1cxeXNrMWtrMUFoeDFoKytMNGVJMkpnWkp3OXRPeTNMMnJOb0xXRlp6QTUyWFpveWdrVXd6QUFSR05HOUNHS2pjRmFBdmhaTEM1ZnpPcEo4SEE0bklZWm5TamtGQVAyR25VUHpoaXhWcFRIYzFtekVlSnlNOXZhMmttY1FVNGhaMFlZcW9BY0FYaVBRZWN6Q0pzWjE2WkoxT2xyaEdlZGwrM2N1Y3hRZURBOG5PTXNWTVFvWUhFRTVCdTBCSXhvU1o1QzhKd2ZMMnptOTFIS24rTXlPWnp3ekhEL1ZKbEMxcTVnaTB0WUhVSkJ6ZjVEa1VSUjBHdm5seWZqYThyS05DOFUybkl5TTJkdDFRaGo5TzA4REdOb0tnVHFLeFJDUTYzRDFhSmpVcWw5SjlxdThFNE5PeXVjTXZoS2VHRVVWeWpqNi9rOEZHTkljQVZxM3hHdHErTjlibjFCK1ZucWpmRUZYRzlOY2VlNU8xLzl2cThzTEwxVHFFL0RNSktHYjhoazJNUVlSSWRUSG5lY28vcWkzbnRueFJSdW1EREdwVGhHc09BcU55eWRMNU1wTUlSQUFMVERJa0FiTkhMVUluT2JsTFBncWsvQjdVKzVZNFdhbFNoMjdBZDNQWjh2aTBHaHBvRUlhdHhRVzYyanVqWVV6cEw2REUwMVg4bGQ3dERrSHN2Vm5FT0ZMbnErWGdoSGtTWm9oSUNhR3FrTkJMT3RnbU9EL2QycmRxUzJOTGtIcitmT1hQdExHQ2FISHdVY1JKeWtFY3BRbXpiVXBqTmV2SFU5TnN1NnhXSEgydjM5VGU3cmw1K3ZHcHdwd3pCNURLclE0alJwcUgwL054NTBuTHR5ZjMvTDF0Y1Qxc2JGK2ZpWU4zaU5tMW92MUQvdmZRS1Zhd21vUmNhZWtKQ0xkWjdWM05nTk42NjdGeFgxU2VNMkQwWkVlSGxGdEhpZmFTaHE4Z1k0UWRQZ0lOdHY5c1d6VVNwbXowbHF0c2d4OTNMSTJuVnhjNFNyVGRYQXVsTU82MTRhZDJZc29sYVRpS0hmODRCaFh0VzZvSnhKeXQ0bDY4K3NPOFhkVmYySHE0Mk4xL3lFbEliVDMxeU5Ia3VMMVNRSjVobm1CS0Z4cUxVWkZvWDEvZnVpdjR1dWIrbjlaQTdVQXlrcFZlWUowZU9hOUFpdWhTMEpNY3dnZlBNd0NpM0lLZHgzT3NGcmFLandRblgxaFVnYm00MzFiN2tPUGZ0WEVaL0NZVzdqREE3bkd5WldMWGU2bEJ2dkdoOFo2UnFmZS94bWJtVFZ3UHlVcXZNUno3d21vOVFRSTVSeHZudDBiSEdDT1RyMzRyYjQrUGlxZ1kwSGJpN01uZVVQVTIrZG4rS04xWWx4Z3FDWmtXOW5lQzlEMHlRaDEyNzN0RmRhUlFVSFcxdExGeDd3VjlZbm5JeE84TWJVWWgzYmJPclFQOTg4M0pWd0VIZ3Vkb2xMbHV4eTdsVXFyYTJzb3JMY2kwNUd4MkFFMjJzRWlIcnU3NVBMQ0VCb2t0UUtKaVRhSlJZa092ZjJPaWNseFg1czM5Wm16OE8wTUFhQ2dDMFBkdFVSQUdCNStkS0FDUUk3Tzd2VzFsdEp3ZjFaNDhjTE1qenkxREFsZ296ZVZYQVBzaHBkZXFtNVl2cjA1bWJQQ1cxdGJ4U0htdFpZZHJBeFlPbUg5aURjc1FBd1dPanNnR25UUHFodzhYaDNicWhscVdPcHFha1R4VnJtNFIxcjJOOFVKcmdVRVBDblFHVnBXbFBpNkdqcXBBcHFiSWRqd1ZDUDdtLzJic0FDZ3lvOFRSdEw3cFhjS3kyOXQ5cXlNYWdydlRFTkx0Ui8zdzN3YkZwVnZEUjBWYU9ibTlzOU4xVmpxSk5qcVV0R293Z1RYWDc4blpiOTRaNk9EcmZWcS9aVVZuYXAwaTIzcXl6OW5DcmZIUFBFKzdKNzA1RU9wMENueXNCMGxhVksxVlZjODNMMzArL2lIMTk5djhReXRLdW1xL1R0VGIvKzU4MzkxUE8zQUFNQWg1QXJ4YVNYOVFzQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUMwQUFBQXRDQU1BQUFBTnhCS29BQUFEQUZCTVZFVUFBQUFURGd0d1JDNWhSenhRTWlENDhPZytNeTVWTlNnTkRBb25JQm9MQ0FWclUwWURBd01PREFzSUNBWU5DUXNySXg5dlYwNGFGaElJQmdjV0RRbjY4dTBuSGh2OCtmUUZBZ0paTnlWSExpWDc5dW9FQWdGWU1pTU5Dd2c5Sng1NGFHUWdFQXBITXloSU1Da1FDUW5JZ1dFZUdob09DZ3VRaVlCWFNrYUxWMEY5U2pOaU9pZ1pHQkwvOSt5K2ZGai85dXlsWlVrWUVCRC8rL0g5K2ZmLzl1dVpYVVJRU0ZELzlPcWZaVW9CQUFBRUF3TUlCZ1lRRGcwTUNnai85KzM3OHVqaW4zMHJJUndlRmhNd0pTQXRHaFA4OWVubW80THBwSHUvakcvZGxHZk9qbVFpR2hYYm5vdlpub1BhbDNuV2wyK2JibGdlRXcwWURRbm1xWXZObVlucnFZZmpwb2Znb1lYbW9IemZtM3Jtb1hlNWgyM1ZrR1d3ZUdER2lGeFlTRUpBS1NFdUhoc25IUmtWRXhIOS92cnNwWUxEalhIRGhHL0xqMnk2ZVZUTWcxUEZmazFkVGtpeGFUcDhURGRGTFNFU0N3ZjkrUFA1OU96ODhPTG5vb3pacElyV21vZmdtNFhQbUlIR2szalNrSGpVbUhYa25uTElrWExnbVdyRmpXbTJnR0NpYzE1NllsdXpjMWlwZEZlcGJFcVFXMGVGV1VhMGJqK3BaejlOS3g0eEhSUDU1dGZTb0kvbnA0TE1rMzNFaW5uTGxuVFBtSFBobW5IT2tYSE1pRisrZjEyN2QwbDZWMGhRUWoxelN6azVKUjcyNE16dXFwRGRxWTdobjR2S2tZalJub2ZHbDMvVG1YN2NuSFhhajJ1M2dXbXZnR25UbFdqQ2htR1phRmJIaGxHZFpFbWpaRVpsUWpkVlB6WkZPREk5TWl4ak95czFLeVphTlNNM0lCcmV2NnZyczUzaXFaU2VrSW5Ga0gvWm5udStoWEtyZTJUUmgyT25kbVBWaVdIRWhGdlFpRnBsVjFpbFoxZVRaVkMwYlV1SFhrdWRYajZrWURWclBDbEdMeWxESkJnbUZnM3M1dC91Mkw2dHBKN1hycDN6cjVYYW81UFhrb08rajMvT25YbUhlSFRNaFc2OGVtVnhZVm1nYTB4clVFaUNVVFpOT1RKYk95ajY3ZDNlMDhma3lidnpyNHEzaVhheWVtckZlV20raEdpWGNXWjBaR1pmVVU5bFREcVVXVFdOV0RWelBDZnY0TmZ3M3MvUHdMYkN0S1hidVpyVXA1YTBvSkhVaW9PWmlYYlNrWENMYkdXeWFXWE9nV0xBZWttN3JKV1VYRkl5MzhTVEFBQUFPblJTVGxNQUlQMGcvZnpuZDNCRU1PL3YzOCsvdXArQWdGOGc3OS9mMTdlZ29KK2ZnRmhRTUJBUTcrL3YzOS9mMzkvZnY3K3ZyNStBZjNCd1FEQXdlWHdROUFBQUJsNUpSRUZVU01kOTFXVllVMUVjQnZBclluZDNkM2Z0M2szV3JJdHRiTElSWTJOc3dBanA3dTVRQkdrQlVVQWtiR2tFRWV6dTd1NzJiTFByL1hwK3ovdjh6N24zbmd2OW5zazl4bzJhOHpCRU5XM0JvdVdyb1ArbWF3OERnMGRsS3BxRW5iSlpRbE9GelI3VTlaKzJ5MmlEOExhd2RiUVUzNVFVa1FocmFxb3NmVnc5N3U5K3lvVHFDK3ZTYWh1cEtXdldyREVXS1lRbXU5dzhwWlhWVjNyOGJZaFJoaEVsNW1scDlWUmZZMlBBallVbUptNXgrVUdWbGRWei82anZaWmlSY1dGZFExcGhvYjh2TnQ1NERWYU1KWnN5bVhsN1doOUVYK25UNjFjOHREUEdVRk9tYXFCUnFmNisya0d3WkRJWW5KbVhVSHpGMGRJSkdmb3pua1RrRVRzTTJnNllTeVJVZjM5Zlg1RW9QbDRnRkFxWmVaN0Y1VFU0R0lYNnFYMVlINkpUWjdUbVlWUUREV2d3TjVsTUZncE1URXl5M1R5TE1oelJLQlNxYjVmdmVvUjlESTlvYUtCcGEwaHJsSUJkQ2dUeFlJOUNac0ZwQ3NYR3dCRUJHdTQzOVN0ZUtqL1A3U1FhUmorTzJxcFcyNmtDS05MQUpMR3JtN0wwa3FZbFBOUUFod0pCMElPL250MWgrVFd1RlRlem8wMnQvbml3TGJDNHBWUjY1MjJPZTJDb1dWS1NNalFERCt1MHRYNldRZGZrY25zWnp6STZSRzEzVUdXYm1ocHdwOGdHSzJBRUJuRTR0NlJtNlJpZHhxQUg2S3JQUDVQTGQvTzRsdEZoVyswK2xvU0V0YVp2Q1ExZ3h6T2xkZWZ0Z3lQTU9JaFd3eGcwdW91MnV1bW9zL3h3VEV4SFI5VFdyVFR6c3ZEMGQ0a2g3RnF4QjhVckx6OC83K1hOR3BRMlFBOEJlbGJUYmhmNXRjZlYxWVlIN2JiNnM5bHNwbWNxdTdBK3hkWExxNkNnSUh2WEhrdVVmcHZvR2VCOXRyaC81b244M0lHd1M1VlJRSU5IemhMSEcwc2FxWUlFVDJaVzFzNmQvRVBmTkxvMzFHT0RmZkF6WitWWjJxUDJTTHRHcXJGQW9WQUl5RlIxdlNMSDB6VHIrTTZkY2R1K2FtdDBUMmowQmd2NzNVKzhhOW1SRHlQWE4yNWVvN2h4STB0QnJxOHR6TnFWNE8xNi9Qak91Qi9kNDZHQkZSWVdUYStVaGF6MURwR1Jhc2tteFkzakFyRnA3ZTBRNzMzTmZ0NnVycnM4djNkYjk0ZUdid2ZsNTR2RkxMV0RnNE1kalMwU1pIbXp5TGJLYzlKYnAzSVRsU2VaWHVXdzdreXM2ZlI1RUw3cXNvWDkvZUFQSDlRT2tRNTJhUkl4bG5XV3hkcWI0SDB1TVplL2I1K1NTVW1IWVoyV3llZ1FHcWN0djNpdW5ncEdXVzlPMnlSTzlmTm1NVTFOUE56NXVZbDdFZ3ZNdHNCb3JoT013ZU53ZEFqQkV5b0FiMDFMb1drMWV4TjJiN0x0MmJPM2I3OXZmdjg1UExIQXphdkdtbDZUU2VUaGNRUVpOTktKWGxXeHpjSWlnMU1hNWFEVjhhYk56VXIrc1IzSGR1dzRWZWVlN1hZS3c4VlpPbG9TdVRqQ2NLaS9FNWV3L2ZLMkRSV080V0ZSNjB0czl3cE54RDZGM3Z5WHgvaTV1U2Zjc3ZsM01Ud1owQVFjampBUUdvdWhXMlZhSHFyWTduakIvT0NCZGJaSmJxWUtrWWgxOHVUcjE3bHhjWXk4L0lzWURGcVdTU0RnQ0VEM1JQQXlLd0toaWtCOFJJdUtVZ1VrSis4bGswWENYUXgzZDRiN2liZzlsQm9FY0x3TWg4UEpla0s5WVRTZWp1Zmg4YnhMNXRyeUFOdFVGcGFNOVdDY2RHY3dUdkRCaVNBSUFnN2J5b3B1M1J1QytzSVlEQUlqR01UQTNEK3NETXhpNjdNWGkvWHc4TWh4elQ2UnZ6OFRocldyZUtEN1FSQTBCTllGZzdRM1NHaGxaYXFTa2dDZlRWZ1AxNXljSEFiL1pxViswUWx2UmVTT0I3cUxYaVBiT1hhYk42MHJMUTBKREF5d1pYbTRNaGp1Q1RjakVCU01nbm1kblRFeFJMenV3eHlnNTI5ZXFLakpwMHZDd2krRVNnTXBuZ3orbm4yM3d0dGhvSjJJSGRHT05jVEYrb3NZMFhVLzM3aGo4MllmbjREQTBDMWJPRUZCZFVGQkxacExyU2dVd05HVjdlV0hySFRWWUhMQVVWVkhqc1J1ekFZOGlXSzJuOE5wQ1crTmlHamhSTUFJTHlhNlhhTXBQelFCMG1mcVNBVGo5T2JJeHRpMWExOGsrNXhPc2dHK2pzUFpFbFFYR2tHMHZGeWVvZEZrUE9qKzQ2ZlFGMTkxWkNQUVJpNnh4L3lTay8wb1pzWDc5eGNYRllWR2JMc1kvTzd1M2ZUMFBsMS91cjNSRlU4M3hsNDFNbHBMSWoyTjgwdjFzNkZRek16MkZZV2tBMzNtekwzZzRJbS8zTis4NTdHeFYwRTNpZVRpY2ozZkw4blBCa1FhVW41NXcvMTc5NXFhQVA0NWs3b2ZCdGpJaUdRRXN2YjY2YmVwWGw1M21xWEJWakV5d3ZidUsvNzRvYzBrYVhXM2J0Mk1WcTkySnUzd0Nrb29rcDU2WlhnbGs5NjlDL1JubHBCSW9KdTBHc1RaMmZsb1pvSk40dlZQRHh6Umc2ZEFmOHV3TVZxcTF5NW5yTG03dXgzZHpSMmdLLzZISDZIbkxvZXIwR2dFTjMwd3NQL0x5bVVMNTNkYjdYSzBYLyt4UFh2L3Z2Z0ZJeG5qNHRnZXE4Z0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBCYXNlQWNjb3JkaW9uIH0gZnJvbSAnLi9iYXNlLWFjY29yZGlvbic7XG5pbXBvcnQgYWNjb3JkaW9uSWNvbkNsb3NlIGZyb20gJ2Fzc2V0cy9hY2NvcmRpb24tYXJyb3cuc3ZnJztcbmltcG9ydCBhY2NvcmRpb25JY29uT3BlbiBmcm9tICdhc3NldHMvYWNjb3JkaW9uLWFycm93LWUuc3ZnJztcbmltcG9ydCB7XG4gIEFjY29yZGlvbkJ1dHRvbixcbiAgQWNjb3JkaW9uSXRlbSxcbiAgQWNjb3JkaW9uQ29udGVudHMsXG4gIHNpbmdsZSxcbiAgcHJldmVudENsb3NlLFxuICBjb21iaW5lUmVkdWNlcnMsXG59IGZyb20gJy4vc2hhcmVkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3JkaW9uKHsgaXRlbXMsIC4uLnByb3BzIH0pIHtcbiAgY29uc3Qgb3Blbkljb24gPSA8SW1hZ2Ugc3JjPXthY2NvcmRpb25JY29uT3Blbn0gYWx0PVwib3BlbiBpY29uXCIgLz47XG4gIGNvbnN0IGNsb3NlSWNvbiA9IDxJbWFnZSBzcmM9e2FjY29yZGlvbkljb25DbG9zZX0gYWx0PVwiY2xvc2UgaWNvblwiIC8+O1xuICByZXR1cm4gKFxuICAgIDxCYXNlQWNjb3JkaW9uXG4gICAgICBzdGF0ZVJlZHVjZXI9e2NvbWJpbmVSZWR1Y2VycyhzaW5nbGUsIHByZXZlbnRDbG9zZSl9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAgeyh7IG9wZW5JbmRleGVzLCBoYW5kbGVJdGVtQ2xpY2sgfSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWNjb3JkaW9uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhpbmRleCl9PlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAge29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KSA/IG9wZW5JY29uIDogY2xvc2VJY29ufVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50cyBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX0+XG4gICAgICAgICAgICAgICAge2l0ZW0uY29udGVudHN9XG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudHM+XG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L0Jhc2VBY2NvcmRpb24+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBCYXNlQWNjb3JkaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgY2hhbmdlcykgPT4gY2hhbmdlcyxcbiAgICBvblN0YXRlQ2hhbmdlOiAoKSA9PiB7fSxcbiAgfTtcbiAgc3RhdGUgPSB7IG9wZW5JbmRleGVzOiBbMF0gfTtcbiAgZ2V0U3RhdGUoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW5JbmRleGVzOlxuICAgICAgICB0aGlzLnByb3BzLm9wZW5JbmRleGVzID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzXG4gICAgICAgICAgOiB0aGlzLnByb3BzLm9wZW5JbmRleGVzLFxuICAgIH07XG4gIH1cbiAgaW50ZXJuYWxTZXRTdGF0ZShjaGFuZ2VzLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XG4gICAgbGV0IGFsbENoYW5nZXM7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIChzdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBhY3R1YWxTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICBjb25zdCBjaGFuZ2VzT2JqZWN0ID1cbiAgICAgICAgICB0eXBlb2YgY2hhbmdlcyA9PT0gJ2Z1bmN0aW9uJyA/IGNoYW5nZXMoYWN0dWFsU3RhdGUpIDogY2hhbmdlcztcbiAgICAgICAgYWxsQ2hhbmdlcyA9IHRoaXMucHJvcHMuc3RhdGVSZWR1Y2VyKGFjdHVhbFN0YXRlLCBjaGFuZ2VzT2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIGFsbENoYW5nZXM7XG4gICAgICB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLm9uU3RhdGVDaGFuZ2UoYWxsQ2hhbmdlcyk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoaW5kZXgpID0+IHtcbiAgICB0aGlzLmludGVybmFsU2V0U3RhdGUoKHN0YXRlKSA9PiB7XG4gICAgICBjb25zdCBjbG9zaW5nID0gc3RhdGUub3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogY2xvc2luZyA/ICdjbG9zaW5nJyA6ICdvcGVuaW5nJyxcbiAgICAgICAgb3BlbkluZGV4ZXM6IGNsb3NpbmdcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5kZXgpXG4gICAgICAgICAgOiBbLi4uc3RhdGUub3BlbkluZGV4ZXMsIGluZGV4XSxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHtcbiAgICAgIG9wZW5JbmRleGVzOiB0aGlzLmdldFN0YXRlKCkub3BlbkluZGV4ZXMsXG4gICAgICBoYW5kbGVJdGVtQ2xpY2s6IHRoaXMuaGFuZGxlSXRlbUNsaWNrLFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCB7IEJhc2VBY2NvcmRpb24gfTtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBjb25zdCBBY2NvcmRpb25CdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjJweCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRTaXplOiAnMTdweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgcGFkZGluZ1RvcDogJzEwcHgnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogJzEwcHgnLFxuICAgICAgcGFkZGluZ0xlZnQ6ICcxNXB4JyxcbiAgICAgIHBhZGRpbmdSaWdodDogJzMwcHgnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxuICAgICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICczMHB4JyxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnMzBweCcsXG4gICAgICAgIHBhZGRpbmdUb3A6ICcyMHB4JyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogJzIwcHgnLFxuICAgICAgICBmb250U2l6ZTogJzE1cHgnLFxuICAgICAgfSxcblxuICAgICAgJzpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknLFxuICAgICAgfSxcbiAgICAgIHNwYW46IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgIHJpZ2h0OiAnMjBweCcsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICdAbWVkaWEobWluLXdpZHRoOiA3NjhweCknOiB7XG4gICAgICAgICAgcmlnaHQ6ICczMHB4JyxcbiAgICAgICAgfSxcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgd2lkdGg6ICc3cHgnLFxuICAgICAgICAgICdAbWVkaWEobWluLXdpZHRoOiA3NjhweCknOiB7XG4gICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH19XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIG9wZW46IHtcbiAgICAvLyBtYXhIZWlnaHQ6IDIwMCxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICdAbWVkaWEobWluLXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IDMwLFxuICAgIH0sXG4gIH0sXG4gIGNsb3NlZDogeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiAwIH0sXG59O1xuZXhwb3J0IGZ1bmN0aW9uIEFjY29yZGlvbkNvbnRlbnRzKHsgaXNPcGVuLCAuLi5wcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxuICAgICAgYW5pbWF0ZT17aXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCd9XG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICBjc3M9e3tcbiAgICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcbiAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICBwYWRkaW5nOiAnMCAxNXB4JyxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnNDBweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICczMHB4JyxcbiAgICAgICAgY29sb3I6ICcjMzQzRDQ4JyxcbiAgICAgICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnMCAzMHB4JyxcbiAgICAgICAgfSxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkl0ZW0gPSAoeyBpc09wZW4sIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgbWFyZ2luQm90dG9tOiAxMCxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRURFRkYyJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfX1cbiAgICB7Li4ucmVzdH1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgcHJldmVudENsb3NlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxuICBjaGFuZ2VzLnR5cGUgPT09ICdjbG9zaW5nJyAmJiBzdGF0ZS5vcGVuSW5kZXhlcy5sZW5ndGggPCAyXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBzdGF0ZS5vcGVuSW5kZXhlcyB9XG4gICAgOiBjaGFuZ2VzO1xuXG5leHBvcnQgY29uc3Qgc2luZ2xlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxuICBjaGFuZ2VzLnR5cGUgPT09ICdvcGVuaW5nJ1xuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogY2hhbmdlcy5vcGVuSW5kZXhlcy5zbGljZSgtMSkgfVxuICAgIDogY2hhbmdlcztcblxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9ICguLi5yZWR1Y2VycykgPT4gKHN0YXRlLCBjaGFuZ2VzKSA9PlxuICByZWR1Y2Vycy5yZWR1Y2UoKGFjYywgcmVkdWNlcikgPT4gcmVkdWNlcihzdGF0ZSwgYWNjKSwgY2hhbmdlcyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xuXG5jb25zdCBCbG9ja1RpdGxlID0gKHsgdGl0bGUsIHRleHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5ibG9ja1RpdGxlfSBjbGFzc05hbWU9XCJibG9ja1RpdGxlXCI+XG4gICAgICA8SGVhZGluZyBhcz1cImgzXCI+e3RpdGxlfTwvSGVhZGluZz5cbiAgICAgIDxUZXh0IGFzPVwicFwiPnt0ZXh0fTwvVGV4dD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrVGl0bGU7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYmxvY2tUaXRsZToge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgbWI6IFsnNjBweCcsIG51bGwsIG51bGwsIG51bGwsICc2MHB4JywgbnVsbCwgJzgwcHgnXSxcbiAgICBoMzoge1xuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcbiAgICAgIGZvbnRTaXplOiBbJzIzcHgnLCBudWxsLCBudWxsLCAnMzBweCddLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgbWI6ICcyMHB4JyxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgY29sb3I6ICcjODU4QjkxJyxcbiAgICB9LFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIFRleHQsIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL2xpbmsnO1xuXG5pbXBvcnQgYXJyb3dBbmdsZSBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3ctYW5nbGUuc3ZnJztcblxuY29uc3QgQmxvZ0NhcmQgPSAoeyBpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwYXRoLCBsaW5rTGFiZWwgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXtzdHlsZXMuYmxvZ0NhcmR9XG4gICAgICBjbGFzc05hbWU9e2BibG9nQ2FyZCAke2ltYWdlID09PSBudWxsID8gJ25vVGh1bWIgJyA6ICcgJ30gJHtcbiAgICAgICAgZGVzY3JpcHRpb24gPT09IG51bGwgPyAnbm9EZXNjcmlwdGlvbiAgJyA6ICcnXG4gICAgICB9ICR7bGlua0xhYmVsID09PSBudWxsID8gJ25vTGFiZWwgJyA6ICcnfWB9XG4gICAgPlxuICAgICAge2ltYWdlICE9PSBudWxsICYmIChcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmltYWdlfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICApfVxuXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0gY2xhc3NOYW1lPVwiYmxvZ0NvbnRlbnRcIj5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPlxuICAgICAgICAgIDxMaW5rIHBhdGg9e3BhdGh9Pnt0aXRsZX08L0xpbms+XG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAge2Rlc2NyaXB0aW9uICE9PSBudWxsICYmIDxUZXh0IGFzPVwicFwiPntkZXNjcmlwdGlvbn08L1RleHQ+fVxuICAgICAgICB7bGlua0xhYmVsICE9PSBudWxsICYmIChcbiAgICAgICAgICA8TGluayBzeD17c3R5bGVzLmxpbmtMYWJlbH0gcGF0aD17cGF0aH0+XG4gICAgICAgICAgICB7bGlua0xhYmVsfSA8SW1hZ2Ugc3JjPXthcnJvd0FuZ2xlfSBhbHQ9XCJhbmdsZSBpY29uXCIgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dDYXJkO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJsb2dDYXJkOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIG1iOiAzMCxcbiAgICBteDogMTUsXG4gICAgd2lkdGg6IFtcbiAgICAgICdjYWxjKDEwMCUgLSAzMHB4KScsXG4gICAgICAnY2FsYygxMDAlIC0gMzBweCknLFxuICAgICAgJ2NhbGMoNTAlIC0gMzBweCknLFxuICAgICAgJ2NhbGMoNTAlIC0gMzBweCknLFxuICAgICAgJ2NhbGMoMzMuMzMzMyUgLSAzMHB4KScsXG4gICAgXSxcbiAgICAnJi5ub1RodW1iJzoge1xuICAgICAgcDogJzI1cHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0YwRjBGNCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgaDM6IHtcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICAgICAgbGluZUhlaWdodDogMS43NSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBtOiAwLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmLm5vRGVzY3JpcHRpb246bm90KC5ub1RodW1iKSc6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgaW1nOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB9LFxuICAgICAgJy5ibG9nQ29udGVudCc6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoMTgwLjA2ZGVnLCByZ2JhKDAsIDAsIDAsIDApIDUwJSwgcmdiYSgwLCAwLCAwLCAwLjcxKSA5OS45NSUpJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxuICAgICAgICBwOiAnMjVweCcsXG4gICAgICAgIGgzOiB7XG4gICAgICAgICAgbTogMCxcbiAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBpbWFnZToge1xuICAgIGltZzoge1xuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIH0sXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBoMzoge1xuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjY3LFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbXQ6ICcyMHB4JyxcbiAgICAgIG1iOiAnMTVweCcsXG4gICAgICBhOiB7XG4gICAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuODcsXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxuICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgbWI6ICcxNXB4JyxcbiAgICB9LFxuICB9LFxuICBsaW5rTGFiZWw6IHtcbiAgICBjb2xvcjogJyMzMTgzRkYnLFxuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgaW1nOiB7XG4gICAgICBtbDogJzZweCcsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBIZWFkaW5nLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmNvbnN0IEphY2twb3RDYXJkID0gKHsgaW1hZ2UsIGhlYWRpbmcsIHRleHQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy5qYWNrcG90Q2FyZH0+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMuaW1hZ2V9PlxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PXtoZWFkaW5nfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57aGVhZGluZ308L0hlYWRpbmc+XG4gICAgICAgIDxUZXh0IGFzPVwicFwiPnt0ZXh0fTwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSmFja3BvdENhcmQ7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgamFja3BvdENhcmQ6IHtcbiAgICBwOiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTVweCAzMHB4JywgJzMwcHgnXSxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcbiAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcblxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYm94U2hhZG93OiAnIDBweCA4cHggMjRweCByZ2JhKDY5LCA4OCwgMTU3LCAwLjA3KScsXG4gICAgfSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBmbGV4U2hyaW5rOiAnMCcsXG4gICAgbXI6IFsnMCcsIG51bGwsIG51bGwsICczMHB4J10sXG4gICAgbWI6IFsnMjBweCcsIG51bGwsIG51bGwsICcwcHgnXSxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGgzOiB7XG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogJzEwcHgnLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6ICcxNXB4JyxcbiAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjczLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgSW1hZ2UsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcblxuaW1wb3J0IHByaWNlQ2hlY2sgZnJvbSAnYXNzZXRzL3ByaWNlLWNoZWNrLnN2Zyc7XG5pbXBvcnQgcHJpY2VDcm9zcyBmcm9tICdhc3NldHMvcHJpY2UtY3Jvc3Muc3ZnJztcbmltcG9ydCBwcmljZUFycm93IGZyb20gJ2Fzc2V0cy9wcmljZS1hcnJvdy5zdmcnO1xuXG5jb25zdCBQcmljZUNhcmQgPSAoeyBkYXRhOiB7IHRpdGxlLCBpY29uLCBhbW91bnQsIG9wdGlvbnMsIHJlY29tbWVuZGVkIH0gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgIHJlY29tbWVuZGVkID09PSBudWxsID8gJ3ByaWNlQ2FyZCAnIDogJ3ByaWNlQ2FyZCByZWNvbW1lbmRlZCdcbiAgICAgIH1gfVxuICAgICAgc3g9e3N0eWxlcy5wcmljZUNhcmR9XG4gICAgPlxuICAgICAgPEJveCBzeD17c3R5bGVzLnByaWNlSGVhZGVyfT5cbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJwcmljZUhlYWRlclwiPlxuICAgICAgICAgIHtyZWNvbW1lbmRlZCA9PT0gbnVsbCA/IG51bGwgOiAoXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMucmVjb21tZW5kZWR9PntyZWNvbW1lbmRlZH08L0JveD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ljb259IGFsdD17dGl0bGV9IC8+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPnt0aXRsZX08L0hlYWRpbmc+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGFzPVwidWxcIj5cbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgYXM9XCJsaVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake29wdGlvbi5zdGF0dXMgPT09IHRydWUgPyAnJyA6ICdjbG9zZWQnfWB9XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtvcHRpb24uc3RhdHVzID09PSB0cnVlID8gKFxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcmljZUNoZWNrfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJpY2VDcm9zc30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApKX1cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBzeD17c3R5bGVzLmJ1dHRvbldyYXB9PlxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInByaWNlQW1vdW50XCI+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCI+U3RhcnRpbmcgZnJvbTwvVGV4dD5cbiAgICAgICAgICA8TGluayBwYXRoPVwiI1wiIHN4PXtzdHlsZXMuaGVhZGluZ30+XG4gICAgICAgICAgICB7YW1vdW50fVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxMaW5rIHBhdGg9XCIjXCIgY2xhc3NOYW1lPVwicHJpY2VCdXR0b25cIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcmljZUFycm93fSBhbHQ9XCJwcmljZSBidXR0b25cIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlQ2FyZDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBwcmljZUNhcmQ6IHtcbiAgICBweDogWycyMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzQwcHgnXSxcbiAgICBib3JkZXI6ICcxcHggc29saWQgI0UwRTJFNCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgdWw6IHtcbiAgICAgIHA6IDAsXG4gICAgICBtdDogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzUwcHgnXSxcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgbGk6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcyNnB4JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsICc5MCUnXSxcbiAgICAgICAgJytsaSc6IHtcbiAgICAgICAgICBtdDogWycxMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzIwcHgnXSxcbiAgICAgICAgfSxcbiAgICAgICAgJyYuY2xvc2VkJzoge1xuICAgICAgICAgIGNvbG9yOiAncmdiYSg1Miw2MSw3MiwuNiknLFxuICAgICAgICB9LFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIHRvcDogJzVweCcsXG4gICAgICAgICAgbXI6ICcxNXB4JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcHJpY2VIZWFkZXI6IHtcbiAgICBwdDogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzYwcHgnXSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsICdyb3cnXSxcbiAgICAnLnByaWNlQW1vdW50Jzoge1xuICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgIH0sXG4gICAgJy5wcmljZUhlYWRlcic6IHtcbiAgICAgIG1iOiBbJzIwcHgnLCBudWxsLCAnMCddLFxuICAgICAgaDM6IHtcbiAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgY29sb3I6ICcjMEYyMTM3JyxcbiAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNTVweCcsXG4gICAgICAgIG10OiAnMzVweCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHJlY29tbWVuZGVkOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXG4gICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjE0cHgnLFxuICAgIHBhZGRpbmc6ICc1cHggOHB4JyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IFsnLTE1cHgnLCBudWxsLCBudWxsLCBudWxsXSxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgfSxcbiAgYnV0dG9uV3JhcDoge1xuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICcxMHB4JyxcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzEwcHgnLFxuICAgIHB5OiAnNDRweCcsXG4gICAgbXQ6ICc2MHB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjhGOEZBJyxcbiAgICBteDogWyctMjBweCcsIG51bGwsIG51bGwsIG51bGwsICctNDBweCddLFxuICAgIHB4OiBbJzIwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNDBweCddLFxuICAgIGltZzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB9LFxuICAgICcucHJpY2VBbW91bnQnOiB7XG4gICAgICBwOiB7XG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXG4gICAgICAgIG1iOiAnMTBweCcsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgIGZvbnRTaXplOiAnMjZweCcsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBhcnJvd0FuZ2xlIGZyb20gJ2Fzc2V0cy9hcnJvdy1hbmdsZS5zdmcnO1xuXG5jb25zdCBTZXJ2aWNlQ2FyZCA9ICh7IGltYWdlLCB0ZXh0LCBoZWFkaW5nLCBwYXRoIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN4PXtzdHlsZXMuc2VydmljZUNhcmR9PlxuICAgICAgPEJveCBzeD17c3R5bGVzLmltYWdlfT5cbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD17aGVhZGluZ30gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+e2hlYWRpbmd9PC9IZWFkaW5nPlxuICAgICAgICA8VGV4dCBhcz1cInBcIj57dGV4dH08L1RleHQ+XG4gICAgICAgIDxMaW5rIHN4PXtzdHlsZXMubGlua30gcGF0aD17cGF0aH0+XG4gICAgICAgICAgTGVhcm4gTW9yZSA8SW1hZ2Ugc3JjPXthcnJvd0FuZ2xlfSBhbHQ9XCJhbmdsZSBpY29uXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlQ2FyZDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzZXJ2aWNlQ2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsICdyb3cnXSxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBmbGV4U2hyaW5rOiAwLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgbWw6IFsnMCcsIG51bGwsIG51bGwsICczMHB4J10sXG4gICAgbXQ6IFsnMjBweCcsIG51bGwsIG51bGwsICcwcHgnXSxcbiAgICBoMzoge1xuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuODcsXG4gICAgICBjb2xvcjogJyMzNDNENDgnLFxuICAgICAgbXQ6ICcyMHB4JyxcbiAgICAgIG1iOiAnMjBweCcsXG4gICAgfSxcbiAgfSxcbiAgbGluazoge1xuICAgIGNvbG9yOiAnIzMxODNGRicsXG4gICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgaW1nOiB7XG4gICAgICBtbDogJzVweCcsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBIZWFkaW5nLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmNvbnN0IFRlc3RpbW9uaWFsc0NhcmQgPSAoeyBpbWFnZSwgdGV4dCwgbmFtZSwgdXNlcm5hbWUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3N0eWxlcy50ZXN0aW1vbmlhbHNDYXJkfT5cbiAgICAgIDxUZXh0IGFzPVwicFwiPnt0ZXh0fTwvVGV4dD5cbiAgICAgIDxCb3ggc3g9e3N0eWxlcy50ZXN0aW1vbmlhbHNJbmZvfT5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc0ltYWdlfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PXtuYW1lfSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc0NvbnRlbnR9PlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57bmFtZX08L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCI+e3VzZXJuYW1lfTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc0NhcmQ7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdGVzdGltb25pYWxzQ2FyZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgbWI6ICcyMHB4JyxcbiAgICBweDogWycyMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzI1cHgnLCAnMzVweCddLFxuICAgIHB5OiBbJzIwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMjBweCcsICcyNXB4J10sXG4gICAgcGI6IFsnMjVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcyNXB4JywgJzM1cHgnXSxcbiAgICBwOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgbGluZUhlaWdodDogMS44NyxcbiAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXG4gICAgfSxcbiAgfSxcbiAgdGVzdGltb25pYWxzSW5mbzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBtdDogJzIwcHgnLFxuICB9LFxuICB0ZXN0aW1vbmlhbHNJbWFnZToge1xuICAgIGltZzoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG1yOiAnMTVweCcsXG4gICAgfSxcbiAgfSxcbiAgdGVzdGltb25pYWxzQ29udGVudDoge1xuICAgIGgzOiB7XG4gICAgICBtOiAwLFxuICAgICAgY29sb3I6ICcjMzQzRDQ4JyxcbiAgICAgIGZvbnRTaXplOiAnMTdweCcsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgbTogMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICBjb2xvcjogJyM0Rjk2RkYnLFxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIG10OiAnMTBweCcsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmNEcmF3ZXIgZnJvbSAncmMtZHJhd2VyJztcblxuY29uc3QgRHJhd2VyID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjaGlsZHJlbixcbiAgY2xvc2VCdXR0b24sXG4gIGNsb3NlQnV0dG9uU3R5bGUsXG4gIGRyYXdlckhhbmRsZXIsXG4gIHRvZ2dsZUhhbmRsZXIsXG4gIG9wZW4sXG4gIHdpZHRoLFxuICBwbGFjZW1lbnQsXG4gIGRyYXdlclN0eWxlLFxuICBjbG9zZUJ0blN0eWxlLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxSY0RyYXdlclxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXt0b2dnbGVIYW5kbGVyfVxuICAgICAgICBjbGFzc05hbWU9e2BkcmF3ZXIgJHtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31gLnRyaW0oKX1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cbiAgICAgICAgaGFuZGxlcj17ZmFsc2V9XG4gICAgICAgIGxldmVsPXtudWxsfVxuICAgICAgICBkdXJhdGlvbj1cIjAuNHNcIlxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiAoXG4gICAgICAgICAgPEJveCBhcz1cImRpdlwiIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9IHN4PXtjbG9zZUJ0blN0eWxlfT5cbiAgICAgICAgICAgIHtjbG9zZUJ1dHRvbn1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgICAgPEJveCBzeD17ZHJhd2VyU3R5bGV9PntjaGlsZHJlbn08L0JveD5cbiAgICAgIDwvUmNEcmF3ZXI+XG4gICAgICA8Qm94XG4gICAgICAgIGNsYXNzTmFtZT1cImRyYXdlcl9faGFuZGxlclwiXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICA+XG4gICAgICAgIHtkcmF3ZXJIYW5kbGVyfVxuICAgICAgPC9Cb3g+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHdpZHRoOiAnMzIwcHgnLFxuICBwbGFjZW1lbnQ6ICdsZWZ0Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcbiIsIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCwgQm94LCBUZXh0LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XG5pbXBvcnQgbG9nb0xpZ2h0IGZyb20gJ2Fzc2V0cy9sb2dvLWxpZ2h0LnN2Zyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cImZvb3RlclwiIHN4PXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAncm93J10sXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMb2dvIGltYWdlPXtsb2dvTGlnaHR9IC8+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIGFzPVwicFwiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAnMC43JyxcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICAgICAgICAgICAgbXQ6IFsnMTBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvcHlyaWdodCBieSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBSZWRRLCBJbmNcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMubGlua3NXcmFwfT5cbiAgICAgICAgICA8TGluayBwYXRoPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgPExpbmsgcGF0aD1cIi9cIj5BZHZlcnRpc2U8L0xpbms+XG4gICAgICAgICAgPExpbmsgcGF0aD1cIi9cIj5TdXBwb3J0czwvTGluaz5cbiAgICAgICAgICA8TGluayBwYXRoPVwiL1wiPk1hcmtldGluZzwvTGluaz5cbiAgICAgICAgICA8TGluayBwYXRoPVwiL1wiPkZBUTwvTGluaz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb290ZXI6IHtcbiAgICBweTogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnLCAnNDBweCddLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMjA3MTgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgb3BhY2l0eTogJzAuMDUnLFxuICAgIH0sXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdyb3cnXSxcbiAgICBqdXN0aWZ5Q29udGVudDogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnc3BhY2UtYmV0d2VlbiddLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG4gIGxpbmtzV3JhcDoge1xuICAgIG10OiBbJzE1cHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMCddLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGE6IHtcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMTZweCddLFxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgNTAwbXMgZWFzZScsXG4gICAgICAnJjpob3Zlcic6IHsgb3BhY2l0eTogMC43IH0sXG4gICAgfSxcbiAgICAnYSthJzogeyBtbDogWycxNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzM1cHgnXSB9LFxuICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IFtcbiAge1xuICAgIHBhdGg6ICdiYW5uZXInLFxuICAgIGxhYmVsOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnc2VydmljZXMnLFxuICAgIGxhYmVsOiAnU2VydmljZXMnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJ3ByaWNpbmcnLFxuICAgIGxhYmVsOiAnUG9ydGZvbGlvJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd0ZXN0aW1vbmlhbHMnLFxuICAgIGxhYmVsOiAnVGVzdGltb25pYWxzJyxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICduZXdzJyxcbiAgICBsYWJlbDogJ0Jsb2dzJyxcbiAgfSxcbl07XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XG5pbXBvcnQgeyBMaW5rIGFzIFNjcm9sbExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcbmltcG9ydCB7IERyYXdlclByb3ZpZGVyIH0gZnJvbSAnY29udGV4dHMvZHJhd2VyL2RyYXdlci5wcm92aWRlcic7XG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gJy4vbW9iaWxlRHJhd2VyJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XG5pbXBvcnQgbG9nb0RhcmsgZnJvbSAnYXNzZXRzL211aGFtbWFkYWRpbHJpYXouc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgY2xhc3NOYW1lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyUHJvdmlkZXI+XG4gICAgICA8aGVhZGVyIHN4PXtzdHlsZXMuaGVhZGVyfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxMb2dvIGltYWdlPXtsb2dvRGFya30gLz5cblxuICAgICAgICAgIDxGbGV4IGFzPVwibmF2XCIgc3g9e3N0eWxlcy5uYXZ9PlxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8U2Nyb2xsTGlua1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICBzeD17c3R5bGVzLm5hdi5uYXZMaW5rfVxuICAgICAgICAgICAgICAgIHRvPXtwYXRofVxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgICAgICAgb2Zmc2V0PXstNzB9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvU2Nyb2xsTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBwYXRoPVwiL2h0dHBzOi8vd3d3LmJlaGFuY2UubmV0L211aGFtbWFkYWRpbHJpYXpcIlxuICAgICAgICAgICAgbWw9ezJ9XG4gICAgICAgICAgICBsYWJlbD1cIkJlaGFuY2VcIlxuICAgICAgICAgICAgc3g9e3N0eWxlcy5oZWFkZXJCdG59XG4gICAgICAgICAgICB2YXJpYW50PVwiYnV0dG9ucy5wcmltYXJ5XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPE1vYmlsZURyYXdlciAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvRHJhd2VyUHJvdmlkZXI+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyQnRuOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGxldHRlclNwYWNpbmc6ICctMC4xNnB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgcGFkZGluZzogJzYuNXB4IDI0cHgnLFxuICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcbiAgICBtbDogWycwJywgbnVsbCwgbnVsbCwgJ2F1dG8nLCAnMCddLFxuICAgIG1yOiBbJzAnLCBudWxsLCBudWxsLCAnMjBweCcsICcwJ10sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgIH0sXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGNvbG9yOiAndGV4dF93aGl0ZScsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgcHk6ICcyNXB4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuNHMgZWFzZScsXG5cbiAgICAnJi5zdGlja3knOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kJyxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBweTogJzE1cHgnLFxuICAgICAgYm94U2hhZG93OiAnMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiknLFxuICAgIH0sXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICB3aWR0aDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMzkwcHgnXSxcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpJzoge1xuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICB9LFxuICB9LFxuICBuYXY6IHtcbiAgICBteDogJ2F1dG8nLFxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCknOiB7XG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgfSxcbiAgICBuYXZMaW5rOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4yJyxcbiAgICAgIG1yOiAnNDhweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnNTAwbXMnLFxuICAgICAgJzpsYXN0LWNoaWxkJzoge1xuICAgICAgICBtcjogJzAnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyLCAmLmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6ICcjNmEwZGFkJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnY29tcG9uZW50cy9kcmF3ZXInO1xuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXIuY29udGV4dCc7XG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IGxvZ29EYXJrIGZyb20gJ2Fzc2V0cy9tdWhhbW1hZGFkaWxyaWF6LnN2Zyc7XG5cbmNvbnN0IE1vYmlsZURyYXdlciA9ICgpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XG5cbiAgLy8gVG9nZ2xlIGRyYXdlclxuICBjb25zdCB0b2dnbGVIYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6ICdUT0dHTEUnLFxuICAgIH0pO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJcbiAgICAgIHdpZHRoPVwiMzIwcHhcIlxuICAgICAgZHJhd2VySGFuZGxlcj17XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oYW5kbGVyfT5cbiAgICAgICAgICA8SW9NZE1lbnUgc2l6ZT1cIjIycHhcIiAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIH1cbiAgICAgIG9wZW49e3N0YXRlLmlzT3Blbn1cbiAgICAgIHRvZ2dsZUhhbmRsZXI9e3RvZ2dsZUhhbmRsZXJ9XG4gICAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAyMDczRVwiIC8+fVxuICAgICAgZHJhd2VyU3R5bGU9e3N0eWxlcy5kcmF3ZXJ9XG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XG4gICAgPlxuICAgICAgPFNjcm9sbGJhcnMgYXV0b0hpZGU+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8TG9nbyBpbWFnZT17bG9nb0Rhcmt9IC8+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnV9PlxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8U2Nyb2xsTGlua1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XG4gICAgICAgICAgICAgICAgc21vb3RoPXt0cnVlfVxuICAgICAgICAgICAgICAgIG9mZnNldD17MTB9XG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgIDwvU2Nyb2xsTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnVGb290ZXJ9PlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHN4PXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgICAgQmVoYW5jZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU2Nyb2xsYmFycz5cbiAgICA8L0RyYXdlcj5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGFuZGxlcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZmxleFNocmluazogJzAnLFxuICAgIHdpZHRoOiAnMjZweCcsXG5cbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG5cbiAgZHJhd2VyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gIH0sXG5cbiAgY2xvc2U6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzMwcHgnLFxuICAgIHJpZ2h0OiAnMzBweCcsXG4gICAgekluZGV4OiAnMScsXG4gIH0sXG5cbiAgY29udGVudDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHB0OiAnMzBweCcsXG4gICAgcGI6ICc0MHB4JyxcbiAgICBweDogJzMwcHgnLFxuICB9LFxuXG4gIG1lbnU6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtYXJnaW5Ub3A6ICczMHB4JyxcblxuICAgIGE6IHtcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgcHk6ICc1cHgnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgfSxcbiAgfSxcblxuICBtZW51Rm9vdGVyOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgbXQ6ICdhdXRvJyxcbiAgfSxcblxuICBidXR0b246IHtcbiAgICBmb250U2l6ZTogJzE1cHgnLFxuICAgIGZ3OiAnNzAwJyxcbiAgICBoZWlnaHQ6ICc0OHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBweTogJzAnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlRHJhd2VyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEltYWdlIGFzIEltZyB9IGZyb20gJ3RoZW1lLXVpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2UoeyBzcmMsIC4uLnJlc3QgfSkge1xuICByZXR1cm4gPEltZyBzcmM9e3NyY30gey4uLnJlc3R9IC8+O1xufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xuaW1wb3J0IHsgdXNlU3RpY2t5U3RhdGUgfSBmcm9tICdjb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyJztcbmltcG9ydCB7IFdheXBvaW50IH0gZnJvbSAncmVhY3Qtd2F5cG9pbnQnO1xuaW1wb3J0IHsgdXNlU3RpY2t5RGlzcGF0Y2ggfSBmcm9tICdjb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9mb290ZXInO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBpc1N0aWNreSA9IHVzZVN0aWNreVN0YXRlKCdpc1N0aWNreScpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZVN0aWNreURpc3BhdGNoKCk7XG4gIGNvbnN0IHNldFN0aWNreSA9IHVzZUNhbGxiYWNrKCgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9TVElDS1knIH0pLCBbXG4gICAgZGlzcGF0Y2gsXG4gIF0pO1xuICBjb25zdCByZW1vdmVTdGlja3kgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfU1RJQ0tZJyB9KSwgW1xuICAgIGRpc3BhdGNoLFxuICBdKTtcblxuICBjb25zdCBvbldheXBvaW50UG9zaXRpb25DaGFuZ2UgPSAoeyBjdXJyZW50UG9zaXRpb24gfSkgPT4ge1xuICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09ICdhYm92ZScpIHtcbiAgICAgIHNldFN0aWNreSgpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSAnYmVsb3cnKSB7XG4gICAgICByZW1vdmVTdGlja3koKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8U3RpY2t5IGVuYWJsZWQ9e2lzU3RpY2t5fSBpbm5lclo9ezk5MX0+XG4gICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPXtgJHtpc1N0aWNreSA/ICdzdGlja3knIDogJ3VuU3RpY2t5J31gfSAvPlxuICAgICAgPC9TdGlja3k+XG4gICAgICA8V2F5cG9pbnRcbiAgICAgICAgb25FbnRlcj17cmVtb3ZlU3RpY2t5fVxuICAgICAgICAvLyBvbkxlYXZlPXtzZXRTdGlja3l9XG4gICAgICAgIG9uUG9zaXRpb25DaGFuZ2U9e29uV2F5cG9pbnRQb3NpdGlvbkNoYW5nZX1cbiAgICAgIC8+XG4gICAgICA8bWFpblxuICAgICAgICBzeD17e1xuICAgICAgICAgIHZhcmlhbnQ6ICdsYXlvdXQubWFpbicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIE5hdkxpbmsgYXMgTWVudUxpbmssIExpbmsgYXMgQSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuZXhwb3J0IGZ1bmN0aW9uIE5hdkxpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxOZXh0TGluayBocmVmPXtwYXRofT5cbiAgICAgIDxNZW51TGluayB7Li4ucmVzdH0+e2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH08L01lbnVMaW5rPlxuICAgIDwvTmV4dExpbms+XG4gICk7XG59XG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxuICAgICAgPEEgey4uLnJlc3R9PntjaGlsZHJlbiA/IGNoaWxkcmVuIDogbGFiZWx9PC9BPlxuICAgIDwvTmV4dExpbms+XG4gICk7XG59XG4iLCIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyh7IGltYWdlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgcGF0aD1cIi9cIlxuICAgICAgc3g9e3tcbiAgICAgICAgdmFyaWFudDogJ2xpbmtzLmxvZ28nLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwic3RhcnR1cCBsYW5kaW5nIGxvZ29cIiAvPlxuICAgIDwvTGluaz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oe1xuICBkZXNjcmlwdGlvbiA9ICdJIGFtIGEgUHJvZmVzc2lvbmFsIFVYL1VJIERlc2lnbmVyIGFuZCBGcm9udCBFbmQgRGV2ZWxvcGVyJyxcbiAgYXV0aG9yID0gJ011aGFtbWFkIEFkaWwgUmlheicsXG4gIG1ldGEsXG4gIHRpdGxlID0gJ011aGFtbWFkIEFkaWwgUmlheicsXG59KSB7XG4gIGNvbnN0IG1ldGFEYXRhID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IGBkZXNjcmlwdGlvbmAsXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3BlcnR5OiBgb2c6dGl0bGVgLFxuICAgICAgY29udGVudDogdGl0bGUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCxcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvcGVydHk6IGBvZzp0eXBlYCxcbiAgICAgIGNvbnRlbnQ6IGB3ZWJzaXRlYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNhcmRgLFxuICAgICAgY29udGVudDogYHN1bW1hcnlgLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogYHR3aXR0ZXI6Y3JlYXRvcmAsXG4gICAgICBjb250ZW50OiBhdXRob3IsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBgdHdpdHRlcjp0aXRsZWAsXG4gICAgICBjb250ZW50OiB0aXRsZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmRlc2NyaXB0aW9uYCxcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxuICAgIH0sXG4gIF0uY29uY2F0KG1ldGEpO1xuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAge21ldGFEYXRhLm1hcCgoeyBuYW1lLCBjb250ZW50IH0sIGkpID0+IChcbiAgICAgICAgPG1ldGEga2V5PXtpfSBuYW1lPXtuYW1lfSBjb250ZW50PXtjb250ZW50fSAvPlxuICAgICAgKSl9XG4gICAgPC9IZWFkPlxuICApO1xufVxuXG5TRU8uZGVmYXVsdFByb3BzID0ge1xuICBsYW5nOiBgZW5gLFxuICBtZXRhOiBbXSxcbiAgZGVzY3JpcHRpb246IGBgLFxufTtcbiIsImltcG9ydCB7IHVzZUNyZWF0ZUNvbnRleHQgfSBmcm9tICcuLi9jcmVhdGUtY29udGV4dCc7XG5pbXBvcnQgeyByZWR1Y2VyLCBpbml0aWFsU3RhdGUgfSBmcm9tICcuL2FwcC5yZWR1Y2VyJztcblxuY29uc3QgW3N0YXRlLCB1c2VEaXNwYXRjaCwgcHJvdmlkZXJdID0gdXNlQ3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUsIHJlZHVjZXIpO1xuZXhwb3J0IGNvbnN0IHVzZVN0aWNreVN0YXRlID0gc3RhdGU7XG5leHBvcnQgY29uc3QgdXNlU3RpY2t5RGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDtcbmV4cG9ydCBjb25zdCBTdGlja3lQcm92aWRlciA9IHByb3ZpZGVyO1xuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNTdGlja3k6IGZhbHNlLFxuICBpc1NpZGViYXJTdGlja3k6IHRydWUsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyB0eXBlIH0pIHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnU0VUX1NUSUNLWSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTdGlja3k6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgJ1JFTU9WRV9TVElDS1knOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzU3RpY2t5OiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSAnU0VUX1NJREVCQVJfU1RJQ0tZJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc1NpZGViYXJTdGlja3k6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgJ1JFTU9WRV9TSURFQkFSX1NUSUNLWSc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNTaWRlYmFyU3RpY2t5OiBmYWxzZSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBhY3Rpb24gdHlwZTogJHt0eXBlfWApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgcmVkdWNlcikge1xuICBjb25zdCBkZWZhdWx0RGlzcGF0Y2ggPSAoKSA9PiBkZWZhdWx0VmFsdWU7XG4gIGNvbnN0IHN0YXRlQ3R4ID0gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpO1xuICBjb25zdCBkaXNwYXRjaEN0eCA9IGNyZWF0ZUNvbnRleHQoZGVmYXVsdERpc3BhdGNoKTtcblxuICBmdW5jdGlvbiB1c2VTdGF0ZUN0eChwcm9wZXJ0eSkge1xuICAgIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChzdGF0ZUN0eCk7XG4gICAgcmV0dXJuIHN0YXRlW3Byb3BlcnR5XTsgLy8gb25seSBvbmUgZGVwdGggc2VsZWN0b3IgZm9yIGNvbXBhcmlzb25cbiAgfVxuXG4gIGZ1bmN0aW9uIHVzZURpc3BhdGNoQ3R4KCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KGRpc3BhdGNoQ3R4KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBkZWZhdWx0VmFsdWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGlzcGF0Y2hDdHguUHJvdmlkZXIgdmFsdWU9e2Rpc3BhdGNofT5cbiAgICAgICAgPHN0YXRlQ3R4LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvc3RhdGVDdHguUHJvdmlkZXI+XG4gICAgICA8L2Rpc3BhdGNoQ3R4LlByb3ZpZGVyPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIFt1c2VTdGF0ZUN0eCwgdXNlRGlzcGF0Y2hDdHgsIFByb3ZpZGVyXTtcbn1cbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBEcmF3ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICcuL2RyYXdlci5jb250ZXh0JztcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnVE9HR0xFJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc09wZW46ICFzdGF0ZS5pc09wZW4sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBEcmF3ZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgPERyYXdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IFN0aWNreVByb3ZpZGVyIH0gZnJvbSAnY29udGV4dHMvYXBwL2FwcC5wcm92aWRlcic7XG5pbXBvcnQgdGhlbWUgZnJvbSAndGhlbWUnO1xuaW1wb3J0IFNFTyBmcm9tICdjb21wb25lbnRzL3Nlbyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBCYW5uZXIgZnJvbSAnc2VjdGlvbnMvYmFubmVyJztcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICdzZWN0aW9ucy9zZXJ2aWNlcyc7XG5pbXBvcnQgSmFja3BvdCBmcm9tICdzZWN0aW9ucy9qYWNrcG90JztcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnc2VjdGlvbnMvY2FsbC10by1hY3Rpb24nO1xuaW1wb3J0IEZlYXR1cmVkIGZyb20gJ3NlY3Rpb25zL2ZlYXR1cmVkJztcbmltcG9ydCBQcmljaW5nIGZyb20gJ3NlY3Rpb25zL3ByaWNpbmcnO1xuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICdzZWN0aW9ucy90ZXN0aW1vbmlhbHMnO1xuaW1wb3J0IEJsb2dzIGZyb20gJ3NlY3Rpb25zL2Jsb2dzJztcbmltcG9ydCBGQVEgZnJvbSAnc2VjdGlvbnMvZmFxJztcbmltcG9ydCBTdWJzY3JpYmUgZnJvbSAnc2VjdGlvbnMvc3Vic2NyaWJlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8U3RpY2t5UHJvdmlkZXI+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPFNFTyB0aXRsZT1cIk11aGFtbWFkIEFkaWwgUmlhelwiIC8+XG4gICAgICAgICAgPEJhbm5lciAvPlxuICAgICAgICAgIDxTZXJ2aWNlcyAvPlxuICAgICAgICAgIDxKYWNrcG90IC8+XG4gICAgICAgICAgPENhbGxUb0FjdGlvbiAvPlxuICAgICAgICAgIDxGZWF0dXJlZCAvPlxuICAgICAgICAgIDxQcmljaW5nIC8+XG4gICAgICAgICAgPFRlc3RpbW9uaWFscyAvPlxuICAgICAgICAgIDxCbG9ncyAvPlxuICAgICAgICAgIDxGQVEgLz5cbiAgICAgICAgICA8U3Vic2NyaWJlIC8+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9TdGlja3lQcm92aWRlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEltYWdlLCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJ2Fzc2V0cy9iYW5uZXItbG9nby5wbmcnO1xuaW1wb3J0IGJhbm5lckltYWdlIGZyb20gJ2Fzc2V0cy9VSVVYLURlc2lnbnMucG5nJztcbmltcG9ydCBiYW5uZXJJY29uMSBmcm9tICdhc3NldHMvYmFubmVyLWljb24tMS0xLnN2Zyc7XG5pbXBvcnQgYmFubmVySWNvbjIgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtMi5zdmcnO1xuaW1wb3J0IGJhbm5lckljb24zIGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTMuc3ZnJztcbmltcG9ydCBiYW5uZXJJY29uNCBmcm9tICdhc3NldHMvYmFubmVyLWljb24tMS00LnN2Zyc7XG5pbXBvcnQgYmFubmVySWNvbjUgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtNS5zdmcnO1xuaW1wb3J0IGJhbm5lckljb242IGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTYuc3ZnJztcbmltcG9ydCBiYW5uZXJJY29uNyBmcm9tICdhc3NldHMvZG90LXBhdHRlcm4uc3ZnJztcblxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJiYW5uZXJcIiBzeD17c3R5bGVzLmJhbm5lcn0+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uMX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uMX1cbiAgICAgICAgLz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uMn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uMn1cbiAgICAgICAgLz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uM31cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uM31cbiAgICAgICAgLz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uNH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uNH1cbiAgICAgICAgLz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uNX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uNX1cbiAgICAgICAgLz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uNn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uNn1cbiAgICAgICAgLz5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uN31cbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcbiAgICAgICAgICBhbHQ9XCJiYW5uZXIgaWNvblwiXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uN31cbiAgICAgICAgLz5cblxuICAgICAgICAgPEltYWdlIHN4PXtzdHlsZXMubG9nb30gc3JjPXtsb2dvSW1hZ2V9IGFsdD1cImxvZ28gaW1hZ2VcIiAvPlxuICAgICAgICBcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiPkknbSBNdWhhbW1hZCBBZGlsIFJpYXo8L0hlYWRpbmc+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj5GcmVlbGFuY2VyLCBtdWx0aV94cGVydDwvSGVhZGluZz5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPlVYL1VJIERlc2lnbmVyICYgRnJvbnQgRW5kIERldmVsb3BlcjwvSGVhZGluZz5cbiAgICAgICAgPEltYWdlIHNyYz17YmFubmVySW1hZ2V9IHN4PXtzdHlsZXMuYmFubmVySW1hZ2V9IGFsdD1cImJhbm5lciBtb2NcIiAvPlxuXG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcblxuY29uc3QgYmFubmVyQW5pbTEgPSBrZXlmcmFtZXNgXG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIH1cblxuICAgIDMwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XG4gICAgfVxuXG4gICAgNjAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAwLCAwLCAwZGVnKTtcbiAgICB9XG5cbiAgICA4MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDVkZWcpO1xuICAgIH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xuICAgIH1cbmA7XG5cbmNvbnN0IGJhbm5lckFuaW0yID0ga2V5ZnJhbWVzYFxuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoMCk7XG4gICAgfVxuXG4gICAgMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpIHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKDE1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCkgdHJhbnNsYXRlWCg1MHB4KSByb3RhdGUoNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gICAgfVxuXG4gICAgODAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpIHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKDE1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHRyYW5zbGF0ZVgoMCkgcm90YXRlKDApO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgIH1cbmA7XG5cbmNvbnN0IGJhbm5lckFuaW0zID0ga2V5ZnJhbWVzYFxuICAgIDAlLFxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwKTtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVaKDIwcHgpIHRyYW5zbGF0ZVkoMjBweCkgdHJhbnNsYXRlWCgyMHB4KTtcbiAgICB9XG5gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJhbm5lcjoge1xuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjBDRDlBJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIHB0OiBbJzExMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzEzMHB4J10sXG4gICAgaDI6IHtcbiAgICAgIGZvbnRTaXplOiBbJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsICczOHB4JywgJzQ4cHgnLCAnNjRweCddLFxuICAgICAgbGluZUhlaWdodDogMS4yNSxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICc1NSUnLCAnNTAwcHgnLCAnNjQwcHgnLCAnODUxcHgnXSxcbiAgICAgIG14OiAnYXV0bycsXG4gICAgICBtdDogJzMwcHgnLFxuICAgICAgbWI6IFsnNDBweCcsIG51bGwsIG51bGwsICc2NXB4J10sXG4gICAgfSxcbiAgICBoMzoge1xuICAgICAgZm9udFNpemU6IFsnMTJweCcsIG51bGwsIG51bGwsICcxOHB4JywgJzIycHgnLCAnMjJweCcsICcyNnB4J10sXG4gICAgICBsaW5lSGVpZ2h0OiAxLjEwLFxuICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgJzQ1JScsICc0MDBweCcsICc1NDBweCcsICc3NTFweCddLFxuICAgICAgbXg6ICdhdXRvJyxcbiAgICAgIG10OiAnMThweCcsXG4gICAgICBtYjogWycyMHB4JywgbnVsbCwgbnVsbCwgJzU1cHgnXSxcbiAgICB9LFxuICAgIGg0OiB7XG4gICAgICBmb250U2l6ZTogWycxNnB4JywgbnVsbCwgbnVsbCwgJzE2cHgnLCAnMThweCcsICcxOHB4JywgJzI4cHgnXSxcbiAgICAgIGxpbmVIZWlnaHQ6IDAuMTAsXG4gICAgICBjb2xvcjogJyMwMDAwMDAnLFxuICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1heFdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAnMzUlJywgJzMwMHB4JywgJzM0MHB4JywgJzQ1MXB4J10sXG4gICAgICBteDogJ2F1dG8nLFxuICAgICAgbXQ6ICcxMHB4JyxcbiAgICAgIG1iOiBbJzEwcHgnLCBudWxsLCBudWxsLCAnMjVweCddLFxuICAgIH0sXG4gIH0sXG4gIGxvZ286IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgbXg6ICdhdXRvJyxcbiAgICBib3hTaGFkb3c6ICcwcHggMTVweCAzNXB4IHJnYmEoNjUsIDEwNCwgMTM5LCAwLjEyKScsXG4gIH0sXG4gIGJhbm5lckltYWdlOiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBteDogJ2F1dG8nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIG1heFdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAnODAlJywgbnVsbCwgJzEwMCUnXSxcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJy5iYW5uZXJJY29uJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCAnYmxvY2snXSxcbiAgICB9LFxuICB9LFxuICBiYW5uZXJJY29uMToge1xuICAgIHRvcDogJzEwJScsXG4gICAgbGVmdDogJzEwJScsXG4gICAgYW5pbWF0aW9uOiBgJHtiYW5uZXJBbmltMn0gOHMgbGluZWFyIGluZmluaXRlYCxcbiAgfSxcbiAgYmFubmVySWNvbjI6IHtcbiAgICB0b3A6ICcxMCUnLFxuICAgIHJpZ2h0OiAnMTAlJyxcbiAgICBhbmltYXRpb246IGAke2Jhbm5lckFuaW0yfSA4cyBsaW5lYXIgaW5maW5pdGVgLFxuICB9LFxuICBiYW5uZXJJY29uMzoge1xuICAgIGJvdHRvbTogJzQwcHgnLFxuICAgIHJpZ2h0OiAnLTEyMHB4JyxcbiAgICBhbmltYXRpb246IGAke2Jhbm5lckFuaW0xfSA1cyBlYXNlLW91dCBpbmZpbml0ZWAsXG4gIH0sXG4gIGJhbm5lckljb240OiB7XG4gICAgYm90dG9tOiAnMTMwcHgnLFxuICAgIGxlZnQ6ICctMTIwcHgnLFxuICAgIGFuaW1hdGlvbjogYCR7YmFubmVyQW5pbTF9IDVzIGVhc2Utb3V0IGluZmluaXRlYCxcbiAgfSxcbiAgYmFubmVySWNvbjU6IHtcbiAgICBib3R0b206ICc1MCUnLFxuICAgIGxlZnQ6ICcxNSUnLFxuICB9LFxuICBiYW5uZXJJY29uNjoge1xuICAgIGJvdHRvbTogJy02NXB4JyxcbiAgICBsZWZ0OiAnMHB4JyxcbiAgICBhbmltYXRpb246IGAke2Jhbm5lckFuaW0zfSA5cyBsaW5lYXIgaW5maW5pdGVgLFxuICB9LFxuICBiYW5uZXJJY29uNzoge1xuICAgIGJvdHRvbTogJzMwJScsXG4gICAgcmlnaHQ6ICcwJScsXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnO1xuaW1wb3J0IEJsb2NrVGl0bGUgZnJvbSAnY29tcG9uZW50cy9ibG9jay10aXRsZSc7XG5pbXBvcnQgQmxvZ0NhcmQgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9ibG9nLWNhcmQnO1xuXG5pbXBvcnQgYmxvZ0ltYWdlMSBmcm9tICdhc3NldHMvYmxvZy0xLTEucG5nJztcbmltcG9ydCBibG9nSW1hZ2UyIGZyb20gJ2Fzc2V0cy9ibG9nLTEtMi5wbmcnO1xuaW1wb3J0IGJsb2dJbWFnZTMgZnJvbSAnYXNzZXRzL2Jsb2ctMS0zLnBuZyc7XG5pbXBvcnQgYmxvZ0ltYWdlNCBmcm9tICdhc3NldHMvYmxvZy0xLTQucG5nJztcblxuY29uc3QgQkxPR19EQVRBID0gW1xuICB7XG4gICAgaW1hZ2U6IGJsb2dJbWFnZTEsXG4gICAgdGl0bGU6ICdIb3cgdG8gd29yayB3aXRoIHByb3RvdHlwZSBkZXNpZ24gd2l0aCBhZG9iZSB4ZCBmZWF0dXJpbmcgdG9vbHMnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RoZSAyMDE5IElubm92YXRpb24gYnkgRGVzaWduIEF3YXJkcyBob25vciB0aGUgZGVzaWduZXJzIGFuZCBidXNpbmVzc2VzIHNvbHZpbmcgdGhlIHByb2JsZW1zIG9mIHRvZGF5IGFuZCB0b21vcnJvdy4gSXQgaXMgb25lIG9mIHRoZSBtb3N0IHNvdWdodC1hZnRlciBkZXNpZ24nLFxuICAgIHBhdGg6ICcvJyxcbiAgICBsaW5rTGFiZWw6ICdMZWFybiBNb3JlJyxcbiAgfSxcbiAge1xuICAgIGltYWdlOiBudWxsLFxuICAgIHRpdGxlOlxuICAgICAgJ0FudGliaWFzIHJlY2VpdmVzIGhvbm9yYWJsZSBnaWZ0IG1lbnRpb24gYXQgRmFzdCBDb21wYW554oCZcyBtb3N0IElubm92YXRpb24gYnkgRGVzaWduIEF3YXJkcycsXG4gICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgcGF0aDogJy8nLFxuICAgIGxpbmtMYWJlbDogbnVsbCxcbiAgfSxcbiAge1xuICAgIGltYWdlOiBibG9nSW1hZ2UzLFxuICAgIHRpdGxlOiAnTXVsdGlwbGUgdGFzayB3aXJlZnJhbWluZyB3aXRoIHRlYW0gbWFuYWdlbWVudCBwZXJmb3JtIGJldHRlcicsXG4gICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgcGF0aDogJy8nLFxuICAgIGxpbmtMYWJlbDogbnVsbCxcbiAgfSxcbiAge1xuICAgIGltYWdlOiBibG9nSW1hZ2UyLFxuICAgIHRpdGxlOiAnTXVsdGlwbGUgYXJ0IGJvYXJkIHByb3RvdHlwZSB3aXRoIEZpZ21hJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdCZXlvbmQgbGF1bmNoZWQgYW50aWJpYXMsIGEgQ2hyb21lIGV4dGVuc2lvbiB0aGF0IHJlcGxhY2VzIExpbmtlZEluIHByb2ZpbGUgcGhvdG9zJyxcbiAgICBwYXRoOiAnLycsXG4gICAgbGlua0xhYmVsOiAnTGVhcm4gTW9yZScsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogYmxvZ0ltYWdlNCxcbiAgICB0aXRsZTpcbiAgICAgICdUZWFtIHByZXNlbnRhdGlvbiB3aXRoIGxhdGVzdCB1c2VyIGludGVyZmFjZSAmIGV4cGVyaWVuY2UgcmVhY2ggbW9yZScsXG4gICAgZGVzY3JpcHRpb246IG51bGwsXG4gICAgcGF0aDogJy8nLFxuICAgIGxpbmtMYWJlbDogbnVsbCxcbiAgfSxcbl07XG5cbmNvbnN0IG1hc29ucnlPcHRpb25zID0ge1xuICB0cmFuc2l0aW9uRHVyYXRpb246IDAsXG59O1xuXG5jb25zdCBCbG9ncyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwibmV3c1wiIHN4PXtzdHlsZXMuYmxvZ3N9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJsb2NrVGl0bGVcbiAgICAgICAgICB0aXRsZT1cIlBvcHVsYXIgYmxvZyBwb3N0IHdlIHVwZGF0ZWRcIlxuICAgICAgICAgIHRleHQ9XCJVcGRldGUgbmV3c2ZlZWQgYmxvZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxCb3ggYXM9e01hc29ucnl9IG9wdGlvbnM9e21hc29ucnlPcHRpb25zfSBzeD17c3R5bGVzLmJsb2dXcmFwcGVyfT5cbiAgICAgICAgICB7QkxPR19EQVRBLm1hcChcbiAgICAgICAgICAgICh7IGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBhdGgsIGxpbmtMYWJlbCB9LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8QmxvZ0NhcmRcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgICAgbGlua0xhYmVsPXtsaW5rTGFiZWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dzO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGJsb2dzOiB7XG4gICAgcHQ6IFsnODBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgcGI6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsICcxNDBweCcsIG51bGwsICcxMDBweCddLFxuICB9LFxuICBibG9nV3JhcHBlcjoge1xuICAgIG14OiAnLTE1cHgnLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgRmxleCwgVGV4dCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcblxuaW1wb3J0IGNhbGxJbWFnZSBmcm9tICdhc3NldHMvY2FsbC1pbWFnZS5wbmcnO1xuXG5jb25zdCBDYWxsVG9BY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLmNhbGxUb0FjdGlvbn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLmZsZXh9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiPkJlaGluZCB0aGUgZGVzaWduPC9UZXh0PlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPlxuICAgICAgICAgICAgICBDb2RlIHRoYXQgd2UgdXNlZCB0byBidWlsdCB0aGUgd2Vic2l0ZSB3aXRoIGludGVncmF0aW5nIGFwcHNcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiPlxuICAgICAgICAgICAgICBJIEp1c3QgZG8gZnJvbnQgZW5kIGNvZGUgaW4gUmVhY3QuanMsIEZsdXR0ZXIsIE5leHQuanMsIFZ1ZS5qcywgTnV4dC5qcywgYW5kIFdvcmRwcmVzc1xuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPExpbmsgcGF0aD1cIi9odHRwczovL3d3dy5iZWhhbmNlLm5ldC9tdWhhbW1hZGFkaWxyaWF6XCIgc3g9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgICAgICBNb3JlIGhlcmVcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaW1hZ2VzfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2NhbGxJbWFnZX0gYWx0PVwiY2FsbCBpbWFnZVwiIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsbFRvQWN0aW9uO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhbGxUb0FjdGlvbjoge1xuICAgIG10OiBbJy05MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcbiAgICBweTogWyc1MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzExMHB4JywgbnVsbCwgJzE0MHB4J10sXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZmxleDogWycwIDAgMTAwJScsIG51bGwsIG51bGwsIG51bGwsICcwIDAgMzguNSUnXSxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgICBwdDogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcbiAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXG4gICAgbWI6IFsnMzBweCcsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXG4gICAgc3Bhbjoge1xuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICB9LFxuICAgIGgzOiB7XG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgZm9udFNpemU6IFsnMjNweCcsIG51bGwsIG51bGwsIG51bGwsICczMHB4JywgJzM2cHgnLCAnNDRweCddLFxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc5MCUnLCAnMTAwJSddLFxuICAgICAgbGluZUhlaWdodDogMS4zNixcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxuICAgICAgbXQ6ICcyMHB4JyxcbiAgICAgIG1iOiAnMzBweCcsXG4gICAgfSxcbiAgICBwOiB7XG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxuICAgICAgZm9udFNpemU6IFsnMTZweCcsIG51bGwsIG51bGwsICcxOHB4J10sXG4gICAgICBsaW5lSGVpZ2h0OiBbJzInLCBudWxsLCBudWxsLCAyLjMzXSxcbiAgICAgIG1iOiAnMzBweCcsXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAyMDczRScsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIHA6ICc2LjVweCAxOXB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMTZweCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICB9LFxuICB9LFxuICBpbWFnZXM6IHtcbiAgICBmbGV4OiBbJzAgMCAxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMCA2MS41JSddLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgRmxleCwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IEJsb2NrVGl0bGUgZnJvbSAnY29tcG9uZW50cy9ibG9jay10aXRsZSc7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbic7XG5cbmNvbnN0IGFjY29yZGlvbkRhdGEgPSBbXG4gIHtcbiAgICBpc0V4cGFuZGVkOiBmYWxzZSxcbiAgICB0aXRsZTogJ0hvdyBtdWNoIGRvZXMgaXQgY29zdCB0byBiZSBhIGNyZWRpdCBjYXJkIG1lcmNoYW50PycsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIEZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQVxuICAgICAgICBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5XG4gICAgICAgIHdpdGggYWxsIHRoZSBib29raW5ncyBhbmQgYWxzbyB5b3VyIGJvb2tpbmcgd2FzIHZlcnkgcXVpY2sgYW5kXG4gICAgICAgIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhXG4gICAgICAgIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvXG4gICAgICAgIHJlY29tbWVuZFxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbiAge1xuICAgIGlzRXhwYW5kZWQ6IHRydWUsXG4gICAgdGl0bGU6ICdIb3cgY2FuIEkgb3BlbiBhIG1lcmNoYW50IGFjY291bnQ/JyxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgICAgRm9yIG91ciByZWNlbnQgdHJpcCB0byBTLkEuIEkgYm9va2VkIHNldmVyYWwgYWNjb21tb2RhdGlvbiB0aHJ1IFNBXG4gICAgICAgIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHlcbiAgICAgICAgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmRcbiAgICAgICAgcHJvZmVzc2lvbmFsLiBJIGhvcGUgSSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byByZS12aXNpdCBTb3V0aCBBZnJpY2FcbiAgICAgICAgc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc29cbiAgICAgICAgcmVjb21tZW5kXG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LFxuICB7XG4gICAgaXNFeHBhbmRlZDogZmFsc2UsXG4gICAgdGl0bGU6ICdIb3cgbG9uZyBkb2VzIHRoZSBhcHBsaWNhdGlvbiB0YWtlPycsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIEZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQVxuICAgICAgICBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5XG4gICAgICAgIHdpdGggYWxsIHRoZSBib29raW5ncyBhbmQgYWxzbyB5b3VyIGJvb2tpbmcgd2FzIHZlcnkgcXVpY2sgYW5kXG4gICAgICAgIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhXG4gICAgICAgIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvXG4gICAgICAgIHJlY29tbWVuZFxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbiAge1xuICAgIGlzRXhwYW5kZWQ6IGZhbHNlLFxuICAgIHRpdGxlOiAnQ2FuIEkgbWFrZSBwYXltZW50IG91dHNpZGUgb2YgSG9uZyBLb25nPycsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIEZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQVxuICAgICAgICBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5XG4gICAgICAgIHdpdGggYWxsIHRoZSBib29raW5ncyBhbmQgYWxzbyB5b3VyIGJvb2tpbmcgd2FzIHZlcnkgcXVpY2sgYW5kXG4gICAgICAgIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhXG4gICAgICAgIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvXG4gICAgICAgIHJlY29tbWVuZFxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbiAge1xuICAgIGlzRXhwYW5kZWQ6IGZhbHNlLFxuICAgIHRpdGxlOiAnSG93IGRvIEkgZ2V0IHRoZSBwYXltZW50IGNvbXBsZXRlPycsXG4gICAgY29udGVudHM6IChcbiAgICAgIDxkaXY+XG4gICAgICAgIEZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQVxuICAgICAgICBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5XG4gICAgICAgIHdpdGggYWxsIHRoZSBib29raW5ncyBhbmQgYWxzbyB5b3VyIGJvb2tpbmcgd2FzIHZlcnkgcXVpY2sgYW5kXG4gICAgICAgIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhXG4gICAgICAgIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvXG4gICAgICAgIHJlY29tbWVuZFxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbl07XG5cbmNvbnN0IEZBUSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJsb2NrVGl0bGVcbiAgICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgQXNrIFF1ZXN0aW9uXCJcbiAgICAgICAgICB0ZXh0PVwiQXNrIHlvdXIgcXVlc3Rpb24gYW5kIG1lZXRcIlxuICAgICAgICAvPlxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLmZsZXh9PlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mYXFXcmFwcGVyfT5cbiAgICAgICAgICAgIDxBY2NvcmRpb24gaXRlbXM9e2FjY29yZGlvbkRhdGF9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPlxuICAgICAgICAgICAgICBEbyB5b3UgaGF2ZSBhbnkgcXVlc2l0b24/IFBsZWFzZSBhc2sgaGVyZSB3ZSByZWFkeSB0byBzdXBwb3J0XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dCBhcz1cInBcIj5cbiAgICAgICAgICAgICAgSWYgeW91ciBxdWVzdGlvbiBpcyBub3QgbGlzdCBoZXJlLCBwbGVhc2UgZmVlbCBmcmVlIHRvIG1ha2UgYVxuICAgICAgICAgICAgICBtYW51YWwgc3VwcG9ydC5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxMaW5rIHN4PXtzdHlsZXMuYXNrQnV0dG9ufSBwYXRoPVwiI1wiPlxuICAgICAgICAgICAgICBBc2sgeW91ciBRdWVzdGlvblxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZBUTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmbGV4OiB7XG4gICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdyb3ctcmV2ZXJzZSddLFxuICAgIHBiOiBbJzcwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnOTBweCcsIG51bGwsICcxMzBweCddLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgZmxleDogWycwIDAgMTAwJScsIG51bGwsIG51bGwsIG51bGwsICcwIDAgMzMuMzMzJSddLFxuICAgIG1heFdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAnNDUwcHgnLCAnMTAwJSddLFxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCAnMCddLFxuICAgIG1iOiBbJzBweCcsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gICAgbXQ6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXG4gICAgaDM6IHtcbiAgICAgIGZvbnRTaXplOiBbJzIzcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMjRweCddLFxuICAgICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgbnVsbCwgbnVsbCwgMS42N10sXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxuICAgICAgbXQ6ICctNXB4JyxcbiAgICAgIHByOiBbJzAnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMzBweCddLFxuICAgIH0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuODcsXG4gICAgICBjb2xvcjogJyMzNDNENDgnLFxuICAgICAgb3BhY2l0eTogMC43LFxuICAgICAgbXQ6ICcxMHB4JyxcbiAgICAgIHByOiBbJzAnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnODBweCddLFxuICAgIH0sXG4gIH0sXG4gIGFza0J1dHRvbjoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMjA3M0UnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBwOiAnNi41cHggMTlweCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjE2cHgnLFxuICAgIG10OiAnMjVweCcsXG4gICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcbiAgICAnJjpob3Zlcic6IHtcbiAgICAgIG9wYWNpdHk6IDAuOCxcbiAgICB9LFxuICB9LFxuICBmYXFXcmFwcGVyOiB7XG4gICAgZmxleDogWycwIDAgMTAwJScsIG51bGwsIG51bGwsIG51bGwsICcwIDAgNjYuNjY2JSddLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xuaW1wb3J0IHsgQWlGaWxsRG9sbGFyQ2lyY2xlLCBBaUZpbGxQaWVDaGFydCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCB7IEZhQnJpZWZjYXNlLCBGYUNvZyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmltcG9ydCB0YWJJbWFnZTEgZnJvbSAnYXNzZXRzL3RhYi1pbWFnZS0xLnBuZyc7XG5pbXBvcnQgZG90UGF0dGVybiBmcm9tICdhc3NldHMvZG90LXBhdHRlcm4uc3ZnJztcblxuY29uc3QgRmVhdHVyZWQgPSAoKSA9PiB7XG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aXZlOiAnYnVkZ2V0JyxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlVGFiID0gKHRhYikgPT4ge1xuICAgIGlmICh0YWIgPT09ICdidWRnZXQnKSB7XG4gICAgICBzZXRUYWIoe1xuICAgICAgICAuLi50YWIsXG4gICAgICAgIGFjdGl2ZTogJ2J1ZGdldCcsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRhYiA9PT0gJ2FkanVzdCcpIHtcbiAgICAgIHNldFRhYih7XG4gICAgICAgIC4uLnRhYixcbiAgICAgICAgYWN0aXZlOiAnYWRqdXN0JyxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGFiID09PSAncmVwb3J0Jykge1xuICAgICAgc2V0VGFiKHtcbiAgICAgICAgLi4udGFiLFxuICAgICAgICBhY3RpdmU6ICdyZXBvcnQnLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0YWIgPT09ICdjcmVhdGUnKSB7XG4gICAgICBzZXRUYWIoe1xuICAgICAgICAuLi50YWIsXG4gICAgICAgIGFjdGl2ZTogJ2NyZWF0ZScsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLmZlYXR1cmVkfT5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8QmxvY2tUaXRsZVxuICAgICAgICAgIHRpdGxlPVwiRG8geW91IHdhbnQgdG8gZGVzaWduIFVYL1VJIG9mIHlvdXIgaWRlYT9cIlxuICAgICAgICAgIHRleHQ9XCJJbnRyb2R1Y2luZyBhbGwgc2NyZWVuIGRldGFpbHNcIlxuICAgICAgICAvPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGFiQnV0dG9uVG9wV3JhcHBlcn0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLnRhYkJ1dHRvbldyYXBwZXJ9PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWIoJ2J1ZGdldCcpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3RhYi5hY3RpdmUgPT09ICdidWRnZXQnID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWlGaWxsRG9sbGFyQ2lyY2xlIC8+XG4gICAgICAgICAgICAgIEJ1ZGdldCBPdmVydmlld1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYignYWRqdXN0Jyl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7dGFiLmFjdGl2ZSA9PT0gJ2FkanVzdCcgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGYUNvZyAvPlxuICAgICAgICAgICAgICBDcmVhdGUgJiBhZGp1c3RcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWIoJ3JlcG9ydCcpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3RhYi5hY3RpdmUgPT09ICdyZXBvcnQnID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8QWlGaWxsUGllQ2hhcnQgLz5cbiAgICAgICAgICAgICAgVmlldyBSZXBvcnRzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiKCdjcmVhdGUnKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHt0YWIuYWN0aXZlID09PSAnY3JlYXRlJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhQnJpZWZjYXNlIC8+XG4gICAgICAgICAgICAgIENyZWF0ZSAmIGFkanVzdFxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGFiQ29udGVudH0+XG4gICAgICAgICAge3RhYi5hY3RpdmUgPT09ICdidWRnZXQnICYmIChcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RhYkltYWdlMX0gYWx0PVwidGFiIGltYWdlXCIgY2xhc3NOYW1lPVwidGFiSW1hZ2VcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RhYi5hY3RpdmUgPT09ICdjcmVhdGUnICYmIChcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RhYkltYWdlMX0gYWx0PVwidGFiIGltYWdlXCIgY2xhc3NOYW1lPVwidGFiSW1hZ2VcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RhYi5hY3RpdmUgPT09ICdhZGp1c3QnICYmIChcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RhYkltYWdlMX0gYWx0PVwidGFiIGltYWdlXCIgY2xhc3NOYW1lPVwidGFiSW1hZ2VcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3RhYi5hY3RpdmUgPT09ICdyZXBvcnQnICYmIChcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3RhYkltYWdlMX0gYWx0PVwidGFiIGltYWdlXCIgY2xhc3NOYW1lPVwidGFiSW1hZ2VcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDtcbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmZWF0dXJlZDoge1xuICAgIHB0OiBbJzgwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGOUZBRkMnLFxuICB9LFxuICBjb250YWluZXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6ICcxNTBweCcsXG4gICAgbXQ6ICctMTUwcHgnLFxuICB9LFxuICB0YWJCdXR0b25Ub3BXcmFwcGVyOiB7XG4gICAgb3ZlcmZsb3dZOiBbJ2hpZGRlbicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdpbmhlcml0J10sXG4gICAgb3ZlcmZsb3dYOiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnaW5oZXJpdCddLFxuICB9LFxuICB0YWJCdXR0b25XcmFwcGVyOiB7XG4gICAgd2lkdGg6IFsnNzAwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTAwJSddLFxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMCddLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMSw3LDEzLC4xKScsXG4gICAgbWI6ICczNXB4JyxcbiAgICBidXR0b246IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcGI6IFsnMTVweCcsIG51bGwsIG51bGwsIG51bGwsICczNXB4J10sXG4gICAgICBweDogWycxNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnXSxcbiAgICAgIGZsZXhTaHJpbms6ICcwJyxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMThweCddLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcbiAgICAgIHN2Zzoge1xuICAgICAgICBmb250U2l6ZTogWycxOHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnXSxcbiAgICAgICAgY29sb3I6ICcjQURCREQwJyxcbiAgICAgICAgb3BhY2l0eTogMC43LFxuICAgICAgICBtcjogJzE1cHgnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDUwMG1zIGVhc2UnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyLCAmLmFjdGl2ZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXG4gICAgICAgIGNvbG9yOiAnIzBGMjEzNycsXG4gICAgICAgIHN2Zzoge1xuICAgICAgICAgIGNvbG9yOiAnIzBGMjEzNycsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgfSxcbiAgICAgICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLDEpJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgICBjb250ZW50OiBcIicnXCIsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBib3R0b206ICctMnB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzBGMjEzNycsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzNweCcsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAsMSknLFxuICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDUwMG1zIGVhc2UnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0YWJDb250ZW50OiB7XG4gICAgbWluSGVpZ2h0OiBbJzE5MHB4JywgbnVsbCwgJzMwMHB4JywgJzM4NXB4JywgbnVsbCwgJzYwMHB4J10sXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcbiAgICAgIHdpZHRoOiAnMzAycHgnLFxuICAgICAgaGVpZ2h0OiAnMzQ3cHgnLFxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZG90UGF0dGVybn0pYCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYm90dG9tOiAnLTMwcHgnLFxuICAgICAgcmlnaHQ6ICctNDBweCcsXG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnYmxvY2snXSxcbiAgICB9LFxuICAgICcudGFiSW1hZ2UnOiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjhzIGxpbmVhcmAsXG4gICAgfSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEZsZXgsIEltYWdlLCBUZXh0LCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IEphY2twb3RDYXJkIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvamFja3BvdC1jYXJkJztcbmltcG9ydCBqYWNrcG90SW1hZ2UgZnJvbSAnYXNzZXRzL2phY2twb3QucG5nJztcbmltcG9ydCBqYWNrcG90SW1hZ2UxIGZyb20gJ2Fzc2V0cy9qYWNrcG90LTEtMS5wbmcnO1xuaW1wb3J0IGphY2twb3RJbWFnZTIgZnJvbSAnYXNzZXRzL2phY2twb3QtMS0yLnBuZyc7XG5cbmNvbnN0IEpBQ0tQT1RfREFUQSA9IFtcbiAge1xuICAgIGltYWdlOiBqYWNrcG90SW1hZ2UxLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnbWVudHMgeW91ciBibG9vZCB0ZXN0cy4nLFxuICAgIGhlYWRpbmc6ICdDbGVhbiBNaW5pbWFsIEZlYXR1cmVzJyxcbiAgfSxcbiAge1xuICAgIGltYWdlOiBqYWNrcG90SW1hZ2UyLFxuICAgIHRleHQ6XG4gICAgICAnR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlIHZpY3Rvcnkgb2YgdGhlIG1hbmFnbWVudHMgeW91ciBibG9vZCB0ZXN0cy4nLFxuICAgIGhlYWRpbmc6ICdFeWUgQ2F0Y2hpbmcgRGVzaWduJyxcbiAgfSxcbl07XG5cbmNvbnN0IEphY2twb3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLmphY2twb3R9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5mbGV4fT5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaW1hZ2V9PlxuICAgICAgICAgICAgPEltYWdlIHNyYz17amFja3BvdEltYWdlfSBhbHQ9XCJqYWNrcG90IGltYWdlXCIgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaGVhZGluZ30+XG4gICAgICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiPkNvcmUgZmVhdHVyZXM8L1RleHQ+XG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj5EYXNoYm9hcmQgRGVzaWduIG9mIHlvdXIgQnVzaW5lc3M8L0hlYWRpbmc+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5qYWNrcG90Q2FyZEJveH0+XG4gICAgICAgICAgICAgIHtKQUNLUE9UX0RBVEEubWFwKCh7IGltYWdlLCBoZWFkaW5nLCB0ZXh0IH0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPEphY2twb3RDYXJkXG4gICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICBoZWFkaW5nPXtoZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKYWNrcG90O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGphY2twb3Q6IHtcbiAgICBwdDogWyc2NXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzg1cHgnLCBudWxsLCAnMTI1cHgnXSxcbiAgfSxcbiAgZmxleDoge1xuICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgZmxleDogWycwIDAgMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcwIDAgNjIuNSUnXSxcbiAgICBpbWc6IHtcbiAgICAgIG1heFdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnbm9uZSddLFxuICAgICAgZmxvYXQ6ICdyaWdodCcsXG4gICAgfSxcbiAgfSxcbiAgY29udGVudDoge1xuICAgIGZsZXg6IFsnMCAwIDEwMCUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMCAwIDM3LjUlJ10sXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICBtYjogJzMwcHgnLFxuICAgIHB0OiAnNjBweCcsXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gICAgcGw6IFsnMCcsIG51bGwsIG51bGwsICczMHB4J10sXG4gICAgbWF4V2lkdGg6IFsnODAlJywgbnVsbCwgbnVsbCwgJzEwMCUnXSxcbiAgICBteDogWydhdXRvJywgbnVsbCwgbnVsbCwgJzAnXSxcbiAgICBzcGFuOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgbWI6ICcyMHB4JyxcbiAgICB9LFxuICAgIGgzOiB7XG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxuICAgICAgZm9udFNpemU6IFsnMjNweCcsIG51bGwsIG51bGwsIG51bGwsICczMHB4JywgJzM2cHgnLCAnNDRweCddLFxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc5MCUnLCAnMTAwJSddLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjM2LFxuICAgIH0sXG4gIH0sXG4gIGphY2twb3RDYXJkQm94OiB7XG4gICAgZGlzcGxheTogWydncmlkJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWycxZnInLCBudWxsLCBudWxsLCAnMWZyIDFmciddLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQsIEJ1dHRvbiwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xuaW1wb3J0IFByaWNlQ2FyZCBmcm9tICdjb21wb25lbnRzL2NhcmRzL3ByaWNlLWNhcmQnO1xuaW1wb3J0IHByaWNlSWNvbjEgZnJvbSAnYXNzZXRzL3ByaWNlLXVzZXItMS0xLnN2Zyc7XG5pbXBvcnQgcHJpY2VJY29uMiBmcm9tICdhc3NldHMvcHJpY2UtdXNlci0xLTIuc3ZnJztcblxuY29uc3QgUFJJQ0VfTU9OVEhMWV9EQVRBID0gW1xuICB7XG4gICAgcmVjb21tZW5kZWQ6IG51bGwsXG4gICAgdGl0bGU6ICdGb3IgVGVhbSBwYWNrJyxcbiAgICBpY29uOiBwcmljZUljb24xLFxuICAgIGFtb3VudDogJzI5Ljk5L21vJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIGxhYmVsOlxuICAgICAgICAgICdGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgIGxhYmVsOiAnVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgbGFiZWw6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICByZWNvbW1lbmRlZDogJ1JlY29tbWVuZGVkJyxcbiAgICB0aXRsZTogJ0ZvciBPcmdhbml6YXRpb24gcGFjaycsXG4gICAgaWNvbjogcHJpY2VJY29uMixcbiAgICBhbW91bnQ6ICc0OS45OS9tbycsXG4gICAgb3B0aW9uczogW1xuICAgICAge1xuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIGxhYmVsOiAnVWx0aW1hdGUgYWNjZXNzIHRvIGFsbCBjb3Vyc2UsIGV4ZXJjaXNlcyBhbmQgYXNzZXNzbWVudHMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBsYWJlbDpcbiAgICAgICAgICAnRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIGxhYmVsOiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIGxhYmVsOiAnVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBsYWJlbDogJ0Rvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmNvbnN0IFBSSUNFX1lFQVJMWV9EQVRBID0gW1xuICB7XG4gICAgcmVjb21tZW5kZWQ6IG51bGwsXG4gICAgdGl0bGU6ICdGb3IgVGVhbSBwYWNrJyxcbiAgICBpY29uOiBwcmljZUljb24xLFxuICAgIGFtb3VudDogJzk5Ljk5L3lyJyxcbiAgICBvcHRpb25zOiBbXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICAgIGxhYmVsOlxuICAgICAgICAgICdGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgIGxhYmVsOiAnVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiBmYWxzZSxcbiAgICAgICAgbGFiZWw6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICByZWNvbW1lbmRlZDogJ1JlY29tbWVuZGVkJyxcbiAgICB0aXRsZTogJ0ZvciBPcmdhbml6YXRpb24gcGFjaycsXG4gICAgaWNvbjogcHJpY2VJY29uMixcbiAgICBhbW91bnQ6ICcxOTkuOTkveXInLFxuICAgIG9wdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBsYWJlbDogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgbGFiZWw6XG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBsYWJlbDogJ1RvdGFsIGFzc2Vzc21lbnQgY29ycmVjdGlvbnMgd2l0aCBmcmVlIGRvd25sb2FkIGFjY2VzcyBzeXN0ZW0nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxuICAgICAgICBsYWJlbDogJ1VubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5jb25zdCBQcmljaW5nID0gKCkgPT4ge1xuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSB1c2VTdGF0ZSh7XG4gICAgYWN0aXZlOiAnbW9udGhseScsXG4gICAgcHJpY2luZ1BsYW46IFBSSUNFX01PTlRITFlfREFUQSxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlUGxhbiA9IChwbGFuKSA9PiB7XG4gICAgaWYgKHBsYW4gPT09ICdtb250aGx5Jykge1xuICAgICAgc2V0UGxhbih7XG4gICAgICAgIC4uLnBsYW4sXG4gICAgICAgIGFjdGl2ZTogJ21vbnRobHknLFxuICAgICAgICBwcmljaW5nUGxhbjogUFJJQ0VfTU9OVEhMWV9EQVRBLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwbGFuID09PSAneWVhcmx5Jykge1xuICAgICAgc2V0UGxhbih7XG4gICAgICAgIC4uLnBsYW4sXG4gICAgICAgIGFjdGl2ZTogJ3llYXJseScsXG4gICAgICAgIHByaWNpbmdQbGFuOiBQUklDRV9ZRUFSTFlfREFUQSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwicHJpY2luZ1wiIHN4PXtzdHlsZXMucHJpY2luZ30+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8QmxvY2tUaXRsZVxuICAgICAgICAgIHRpdGxlPVwiV2hhdCBkZWFsIHN1aXQgeW91IHBlcmZlY3RcIlxuICAgICAgICAgIHRleHQ9XCJNZWV0IG91ciBwcmljaW5nIHBsYW5cIlxuICAgICAgICAvPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYnRuV3JhcH0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGxhbignbW9udGhseScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwbGFuLmFjdGl2ZSA9PT0gJ21vbnRobHknID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIE1vbnRobHkgUGxhblxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYW4oJ3llYXJseScpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwbGFuLmFjdGl2ZSA9PT0gJ3llYXJseScgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQW5udWFsIFBsYW5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAge3BsYW4ucHJpY2luZ1BsYW4ubWFwKChwcmljZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxQcmljZUNhcmQgZGF0YT17cHJpY2V9IGtleT17YCR7cGxhbi5hY3RpdmV9LWNhcmQtLWtleSR7aW5kZXh9YH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nO1xuXG5jb25zdCBmYWRlSW4gPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5jb25zdCBmYWRlSW4yID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBwcmljaW5nOiB7XG4gICAgcHQ6IFsnMjAwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMjAwcHgnLCBudWxsLCAnMjQwcHgnXSxcbiAgICBwYjogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCAnMTAwcHgnLCAnMTQwcHgnXSxcbiAgfSxcbiAgYnRuV3JhcDoge1xuICAgIHdpZHRoOiAnMzAycHgnLFxuICAgIGhlaWdodDogJzYwcHgnLFxuICAgIG10OiBbJy0yMHB4JywgbnVsbCwgbnVsbCwgJzBweCddLFxuICAgIG1iOiBbJzQwcHgnLCBudWxsLCBudWxsLCAnNjBweCddLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y4RkInLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcbiAgICBwOiAnN3B4JyxcbiAgICBteDogJ2F1dG8nLFxuICAgIGJ1dHRvbjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC4yNHB4JyxcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgNTAwbXMgZWFzZScsXG4gICAgICAnJi5hY3RpdmUnOiB7XG4gICAgICAgIGJveFNoYWRvdzogJzBweCAzcHggMy44cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgZ3JpZDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICc5NjBweCcsXG4gICAgbXg6IFsnYXV0byddLFxuICAgIGdyaWRHYXA6ICczMHB4JyxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJzFmcicsIG51bGwsIG51bGwsICcxZnIgMWZyJ10sXG4gICAgJy5wcmljZUNhcmQnOiB7XG4gICAgICAnLnByaWNlSGVhZGVyJzoge1xuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbn0gMC44cyBsaW5lYXJgLFxuICAgICAgfSxcbiAgICAgICd1bCA+IGxpJzoge1xuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuN3MgbGluZWFyYCxcbiAgICAgIH0sXG4gICAgICAnLnByaWNlQW1vdW50Jzoge1xuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbn0gMC45cyBsaW5lYXJgLFxuICAgICAgfSxcbiAgICAgICcucHJpY2VCdXR0b24nOiB7XG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMC43cyBsaW5lYXJgLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgR3JpZCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xuaW1wb3J0IFNlcnZpY2VDYXJkIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvc2VydmljZS1jYXJkJztcbmltcG9ydCBzZXJ2aWNlSW1hZ2UxIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLTEucG5nJztcbmltcG9ydCBzZXJ2aWNlSW1hZ2UyIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLTIucG5nJztcbmltcG9ydCBzZXJ2aWNlSW1hZ2UzIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLTMucG5nJztcbmltcG9ydCBzZXJ2aWNlSW1hZ2U0IGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLTQucG5nJztcbmltcG9ydCBzZXJ2aWNlSW1hZ2U1IGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLTUucG5nJztcbmltcG9ydCBzZXJ2aWNlSW1hZ2U2IGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLTYucG5nJztcblxuY29uc3QgU0VSVklDRVNfREFUQSA9IFtcbiAge1xuICAgIGltYWdlOiBzZXJ2aWNlSW1hZ2UxLFxuICAgIHRleHQ6XG4gICAgICAnRGVzaWduIHlvdXIgbG93IGFuZCBoaWdoIGZpZGVsaXR5IHByb3RvdHlwZSBvZiB5b3VyIGlkZWEgaW50byBidXNzaW5lc3MsIENvbnZlcnQgeW91ciBkZXNpZ24gaW50byBjb2RlJyxcbiAgICBoZWFkaW5nOiAnTG93L0hpZ2ggZmlkZWxpdHkgUHJvdG90eXBlJyxcbiAgICBwYXRoOiAnIycsXG4gIH0sXG4gIHtcbiAgICBpbWFnZTogc2VydmljZUltYWdlMixcbiAgICB0ZXh0OlxuICAgICAgJ0dldCB5b3VyIHdpcmVmcmFtZXMgZm9yIGJhY2tlbmQgZGV2ZWxvcGVycy4gd2hvIGFyZSBhYmxlIHRvIHVuZGVyc3RhbmQgeW91ciBhcHBzIGxheW91dCBmbG93JyxcbiAgICBoZWFkaW5nOiAnUHJvdG90eXBlIFdpcmVmcmFtZScsXG4gICAgcGF0aDogJyMnLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IHNlcnZpY2VJbWFnZTMsXG4gICAgdGV4dDpcbiAgICAgICdVSSBsYXlvdXQgZGVzaWduIGEgYmVzdCBmcm9udCBlbmQgZGV2ZWxvcGVyIHdobyBjYW4gbWFrZSB5b3VyIGxheW91dCBhbmltYXRlZCBhbmQgZXllLWNhdGNoaW5nIGxvb2snLFxuICAgIGhlYWRpbmc6ICdGcm9udCBFbmQgRGV2ZWxvcG1lbnQnLFxuICAgIHBhdGg6ICcjJyxcbiAgfSxcbiAge1xuICAgIGltYWdlOiBzZXJ2aWNlSW1hZ2U0LFxuICAgIHRleHQ6XG4gICAgICAnSSB3aWxsIGFkdmVydGlzZSB5b3VyIHNlcnZpY2VzIGFuZCBhbHNvIHJhbmsgeW91ciBhcHAgb3IgaGFuZG92ZXIgeW91ciBzb2NpYWwgbWVkaWEgYWNjb3VudCB0byBteSBtYW5hZ2VtZW50IHRlYW0uJyxcbiAgICBoZWFkaW5nOiAnTWFya2V0aW5nICYgYWR2ZXJ0aXNpbmcnLFxuICAgIHBhdGg6ICcjJyxcbiAgfSxcbiAge1xuICAgIGltYWdlOiBzZXJ2aWNlSW1hZ2U1LFxuICAgIHRleHQ6XG4gICAgICAnWW91IG5lZWQgd2Vic2l0ZSBmb3IgeW91ciBidXNzaW5lc3M/IEkgd2lsbCBvZmZlciB5b3UgYSB3aXgsIHdvcmRwcmVzcyBmb3IgeW91ciBidXNpbmVzcy4nLFxuICAgIGhlYWRpbmc6ICdVbHRpbWF0ZSBkZXZlbG9wbWVudCcsXG4gICAgcGF0aDogJyMnLFxuICB9LFxuICB7XG4gICAgaW1hZ2U6IHNlcnZpY2VJbWFnZTYsXG4gICAgdGV4dDpcbiAgICAgICc2IG1vbnRocyBvZiBzdXBwb3J0IHNlcnZpY2VzLCBpZiB5b3Ugd2lsbCBjb21lIGZvcm0gbXkgYWNjb3VudCAnLFxuICAgIGhlYWRpbmc6ICdPbmxpbmUgc3VwcG9ydCcsXG4gICAgcGF0aDogJyMnLFxuICB9LFxuXTtcbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJzZXJ2aWNlc1wiIHN4PXtzdHlsZXMuc2VydmljZXN9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJsb2NrVGl0bGVcbiAgICAgICAgICB0aXRsZT1cIldoYXQgaXMgdGhlIHBlcmZlY3Qgc2VydmljZXMgZm9yIHlvdXIgYnVzc2luZXNzXCJcbiAgICAgICAgICB0ZXh0PVwiU3RhcnRpbmcgZnJvbSBBbmRyb2QvaU9TIEFwcCdzIHRvIHdlYnNpdGUgJiBkYXNoYm9hcmQgZGVzaWduXCJcbiAgICAgICAgLz5cbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7U0VSVklDRVNfREFUQS5tYXAoKHsgaW1hZ2UsIHRleHQsIGhlYWRpbmcsIHBhdGggfSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTZXJ2aWNlQ2FyZFxuICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgICAgIHRleHQ9e3RleHR9XG4gICAgICAgICAgICAgIGhlYWRpbmc9e2hlYWRpbmd9XG4gICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHNlcnZpY2VzOiB7XG4gICAgcHQ6IFsnODBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBncmlkR2FwOiAnMzBweCcsXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWycxZnInLCBudWxsLCBudWxsLCAnMWZyIDFmcicsIG51bGwsICcxZnIgMWZyIDFmciddLFxuICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBCb3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcblxuY29uc3QgU3Vic2NyaWJlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgc3g9e3N0eWxlcy5zdWJzY3JpYmV9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPlN1YnNjcmliZSB0byBnZXQgbm90aWZpZWQgYWJvdXQgTmV3IFNlcnZpY2VzPC9IZWFkaW5nPlxuICAgICAgICA8VGV4dCBhcz1cInBcIj5cbiAgICAgICAgICBCeSBzdWJzY3JpYmluZyB3aXRoIHlvdXIgbWFpbCwgeW91IHdpbGwgYWNjZXB0IG91ciBwcml2YWN5IHBvbGljeVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxCb3ggYXM9XCJmb3JtXCIgc3g9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICA8Qm94IGFzPVwibGFiZWxcIiBodG1sRm9yPVwic3Vic2NyaWJlRW1haWxcIiB2YXJpYW50PVwic3R5bGVzLnNyT25seVwiPlxuICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJzdWJzY3JpYmVFbWFpbFwiXG4gICAgICAgICAgICBzeD17c3R5bGVzLmlucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc3g9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgICAgU3Vic2NyaWJlIHVzXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpYmU7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3Vic2NyaWJlOiB7XG4gICAgcHk6IFsnODBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgJzEwMHB4JywgJzE0MHB4J10sXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAyMDcxOCcsXG4gICAgaDM6IHtcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBmb250U2l6ZTogWycyM3B4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnLCAnMzZweCddLFxuICAgICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgbnVsbCwgJzEnXSxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBbJy0wLjVweCddLFxuICAgICAgbWI6IFsnMHB4JywgbnVsbCwgbnVsbCwgJzE1cHgnXSxcbiAgICAgIHdpZHRoOiBbJzcwJScsIG51bGwsIG51bGwsICdhdXRvJ10sXG4gICAgICBteDogWydhdXRvJywgbnVsbCwgbnVsbCwgJzAnXSxcbiAgICB9LFxuICAgIHA6IHtcbiAgICAgIGZvbnRTaXplOiBbJzE2cHgnXSxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBvcGFjaXR5OiAnLjYnLFxuICAgICAgbGV0dGVyU3BhY2luZzogWyctMC41cHgnXSxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICB3aWR0aDogWyc3MCUnLCBudWxsLCBudWxsLCAnYXV0byddLFxuICAgICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsICcwJ10sXG4gICAgICBtdDogWycxMHB4JywgbnVsbCwgbnVsbCwgJzAnXSxcbiAgICB9LFxuICB9LFxuICBmb3JtOiB7XG4gICAgd2lkdGg6IFsnMTAwJSddLFxuICAgIG1heFdpZHRoOiBbJzU1NXB4J10sXG4gICAgbXg6IFsnYXV0byddLFxuICAgIGRpc3BsYXk6IFsnZmxleCddLFxuICAgIGZsZXhXcmFwOiBbJ3dyYXAnXSxcbiAgICBtdDogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzYwcHgnXSxcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICB3aWR0aDogWycxMDAlJ10sXG4gICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsICczNzBweCcsICczODBweCddLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwgLjA4KScsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwgLjgpJyxcbiAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgIHBsOiBbJzBweCcsIG51bGwsIG51bGwsICczMHB4J10sXG4gICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCBudWxsLCAnNjBweCddLFxuICAgIG1yOiBbJzBweCcsIG51bGwsIG51bGwsICcxNXB4J10sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4gICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgZm9udFNpemU6IFsnMThweCddLFxuICAgIGNvbG9yOiAnIzAyMDcxOCcsXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIHBhZGRpbmc6IFsnMHB4IDMwLjc1cHgnXSxcbiAgICBtaW5IZWlnaHQ6IFsnNTBweCcsIG51bGwsIG51bGwsICc2MHB4J10sXG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICdhdXRvJ10sXG4gICAgbXQ6IFsnMTBweCcsIG51bGwsIG51bGwsICcwJ10sXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsICcwJ10sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICAgIG9wYWNpdHk6ICcwLjgnLFxuICAgIH0sXG4gIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTd2lwZXJDb3JlLCB7IEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyJztcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xuaW1wb3J0IEJsb2NrVGl0bGUgZnJvbSAnY29tcG9uZW50cy9ibG9jay10aXRsZSc7XG5pbXBvcnQgVGVzdGltb25pYWxzQ2FyZCBmcm9tICdjb21wb25lbnRzL2NhcmRzL3Rlc3RpbW9uaWFsLWNhcmQnO1xuaW1wb3J0IHRlc3RpbW9uaWFsc0ltYWdlMSBmcm9tICdhc3NldHMvdGVzdGltb25pYWwtMS0xLnBuZyc7XG5pbXBvcnQgdGVzdGltb25pYWxzSW1hZ2UyIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTIucG5nJztcbmltcG9ydCB0ZXN0aW1vbmlhbHNJbWFnZTMgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsLTEtMy5wbmcnO1xuaW1wb3J0IHRlc3RpbW9uaWFsc0ltYWdlNCBmcm9tICdhc3NldHMvdGVzdGltb25pYWwtMS00LnBuZyc7XG5pbXBvcnQgdGVzdGltb25pYWxzSW1hZ2U1IGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTUucG5nJztcbmltcG9ydCB0ZXN0aW1vbmlhbHNJbWFnZTYgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsLTEtNi5wbmcnO1xuXG5Td2lwZXJDb3JlLnVzZShbQXV0b3BsYXldKTtcblxuY29uc3QgVEVTVElNT05JQUxTX0RBVEEgPSBbXG4gIFtcbiAgICB7XG4gICAgICBpbWFnZTogdGVzdGltb25pYWxzSW1hZ2UxLFxuICAgICAgdGV4dDpcbiAgICAgICAgJ0kgd291bGQgbGlrZSB0byB0YWtlIHRoaXMgb3BwZXJ0dW5pdHkgdG8gdGhhbmsgU0EgUGxhY2VzIGZvciB0aGUgZ3JlYXQgc2VydmljZSByZW5kZXJlZCB0byB1cyBhbmQgaW4gcGFydGljdWxhciBFc3RlbGxlLiBZb3UgZ290IG1lIHRoZSBiZXN0IHBsYWNlIGV2ZXIgaW4ganVzdCBhIGZldyBtb21lbnRzIGFmdGVyIEkgc3Bva2UgdG8geW91LicsXG4gICAgICB1c2VybmFtZTogJ0BoZWxsby5taW1taWUnLFxuICAgICAgbmFtZTogJ01pbm5pZSBIb3JuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTIsXG4gICAgICB0ZXh0OlxuICAgICAgICAnTWFueSB0aGFua3MgZm9yIHlvdSBraW5kIGFuZCBlZmZpY2llbnQgc2VydmljZS4gSSBoYXZlIGFscmVhZHkgYW5kIHdpbGwgZGVmaW5pdGVseSBjb250aW51ZSB0byByZWNvbW1lbmQgeW91ciBzZXJ2aWNlcyB0byBvdGhlcnMgaW4gdGhlIGZ1dHVyZS4nLFxuICAgICAgdXNlcm5hbWU6ICdAbWVycnluLm1hbmxleScsXG4gICAgICBuYW1lOiAnTWVycnluIE1hbmxleScsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTMsXG4gICAgICB0ZXh0OlxuICAgICAgICAnRXhjZWxsZW50IHNlcnZpY2UuIEkgd291bGQgU2luY2VyZWx5IHRoYW5rIEFkaWwsIGZyb20gdGhlIGJvdHRvbSBvZiBteSBoZWFydC4gSGUgaGFzIGdpdmVuIG1lIHBsZW50eSBvZiByZXZpc2lvbnMgYW5kIHRyZWF0ZWQgbWUgYXMgaGlzIGZhbWlseSBtZW1iZXIuIEhlIGhhcyB0YWtlbiBjYXJlIG9mIGFuZCBwcm92aWRlZCBtZSB3aXRoIHRoZSBiZXN0IGtub3dsZWRnZSBhbmQgZXhjZWxsZW50IHdvcmsuIFRoYW5rIHlvdSBzbyBtdWNoLicsXG4gICAgICB1c2VybmFtZTogJ0B2c2hhcmF0aDE3JyxcbiAgICAgIG5hbWU6ICdWc2hhcmF0aCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogdGVzdGltb25pYWxzSW1hZ2U0LFxuICAgICAgdGV4dDpcbiAgICAgICAgJ1RoZSBzZXJ2aWNlIHByb3ZpZGVyIGlzIHZlcnkgcHJvZmVzc2lvbmFsIGFuZCByZXNwb25zaXZlLCB3aWxsaW5nIHRvIGNvb3BlcmF0ZSB3aXRoIG91ciBkZW1hbmRzLicsXG4gICAgICB1c2VybmFtZTogJ0BxaW5nc2h1bmxpJyxcbiAgICAgIG5hbWU6ICdRaW5nIFNodW5saScsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTUsXG4gICAgICB0ZXh0OlxuICAgICAgICAnV2Vic2l0ZSBkZXNpZ24gdGFzayBpbiBGaWdtYS4gVmVyeSByZXNwb25zaXZlIHNlbGxlciBhbmQgd2UgaXRlcmF0ZWQgc2V2ZXJhbCB0aW1lcyB0aGUgZGVzaWducyB1bnRpbCB3ZSBoYWQgYSBnb29kIHNvbHV0aW9uLicsXG4gICAgICB1c2VybmFtZTogJ0BjaHJpc3dpbicsXG4gICAgICBuYW1lOiAnQ2hyaXN3aW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlNixcbiAgICAgIHRleHQ6XG4gICAgICAgICdTdW5ueSBpcyBhIFN1bnNoaW5lIHRvIHdvcmsgd2l0aC4gSXQgaXMgbXkgc2Vjb25kIHRpbWUgd29ya2liZyB3aXRoIGhpbS4gSGUgaGFzIGJlZW4gcHJvYWN0aXZlLCBjcmVhdGl2ZSwga2luZCBhbmQgb3ZlcmRlbGl2ZXJlZCBteSBleHBlY3RhdGlvbnMgSSBoYWQgOikpIFRoYW5rcyBhZ2Fpbi4nLFxuICAgICAgdXNlcm5hbWU6ICdAc3RhcnR1cGp1bGl1cycsXG4gICAgICBuYW1lOiAnSnVsaXVzIEZyZXVuZCcsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTEsXG4gICAgICB0ZXh0OlxuICAgICAgICAnSSB3b3VsZCBsaWtlIHRvIHRha2UgdGhpcyBvcHBlcnR1bml0eSB0byB0aGFuayBTQSBQbGFjZXMgZm9yIHRoZSBncmVhdCBzZXJ2aWNlIHJlbmRlcmVkIHRvIHVzIGFuZCBpbiBwYXJ0aWN1bGFyIEVzdGVsbGUuIFlvdSBnb3QgbWUgdGhlIGJlc3QgcGxhY2UgZXZlciBpbiBqdXN0IGEgZmV3IG1vbWVudHMgYWZ0ZXIgSSBzcG9rZSB0byB5b3UuJyxcbiAgICAgIHVzZXJuYW1lOiAnQGhlbGxvLm1pbW1pZScsXG4gICAgICBuYW1lOiAnTWlubmllIEhvcm4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlMixcbiAgICAgIHRleHQ6XG4gICAgICAgICdNYW55IHRoYW5rcyBmb3IgeW91IGtpbmQgYW5kIGVmZmljaWVudCBzZXJ2aWNlLiBJIGhhdmUgYWxyZWFkeSBhbmQgd2lsbCBkZWZpbml0ZWx5IGNvbnRpbnVlIHRvIHJlY29tbWVuZCB5b3VyIHNlcnZpY2VzIHRvIG90aGVycyBpbiB0aGUgZnV0dXJlLicsXG4gICAgICB1c2VybmFtZTogJ0BtZXJyeW4ubWFubGV5JyxcbiAgICAgIG5hbWU6ICdNZXJyeW4gTWFubGV5JyxcbiAgICB9LFxuICBdLFxuICBbXG4gICAge1xuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlMyxcbiAgICAgIHRleHQ6XG4gICAgICAgICdJIHdvdWxkIGp1c3QgbGlrZSB0byBjb21wbGltZW50IEVzdGVsbGUgUGVzdGFuYS4gU2hlIGhhcyBiZWVuIG1vc3QgcHJvZmVzc2lvbmFsIGFuZCBnb25lIHRvIGdyZWF0IGxlbmd0aHMgdG8gYXNzaXN0IG1lLiBIZXIgcGF0aWVuY2Ugd2l0aCBtZSBhcyBJIGNvbnRpbnVvdXNseSBjaGFuZ2VkIG15IHBsYW5zIGlzIHRvIGJlIGNvbW1lbmRlZC4gSGVyIHNlcnZpY2UgcmUtYWZmaXJtcyB3aHkgSSBhbHdheXMgY2hvb3NlIHRvIGJvb2sgdGhyb3VnaCBhbiBhZ2VuY3kgaW5zdGVhZCBvZiBkaXJlY3RseS4gVGhhbmsgeW91JyxcbiAgICAgIHVzZXJuYW1lOiAnQGhpLnZlb25hJyxcbiAgICAgIG5hbWU6ICdWZW9uYSBXYXRzb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlNCxcbiAgICAgIHRleHQ6XG4gICAgICAgICdJIGhhdmUgc2VsZG9tIGV4cGVyaWVuY2VkIHN1Y2ggYW4gZWZmaWNpZW50IGhlbHAgYW5kIHN1cHBvcnQgbGlrZSBmcm9tIHlvdSEgVGhhbmsgeW91IHNvIG11Y2guIFdlIHdpbGwgZG8gYWxsIHRoZSBib29raW5ncyBkdXJpbmcgdGhlIG5leHQgZmV3IGRheXMgYW5kIEkgd2lsbCByZXZlcnQgdG8geW91IHdpdGggdGhlIGVuZCByZXN1bHQnLFxuICAgICAgdXNlcm5hbWU6ICdAaGV5Lm5rdScsXG4gICAgICBuYW1lOiAnUGFzZWthIE5rdScsXG4gICAgfSxcbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTUsXG4gICAgICB0ZXh0OlxuICAgICAgICAnVGhhbmsgeW91IGZvciBhbGwgeW91ciBoZWxwLiBZb3VyIHNlcnZpY2Ugd2FzIGV4Y2VsbGVudCBhbmQgdmVyeSBGQVNULicsXG4gICAgICB1c2VybmFtZTogJ0BjaGVyaWNlLm1lJyxcbiAgICAgIG5hbWU6ICdDaGVyaWNlIEp1c3RpbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogdGVzdGltb25pYWxzSW1hZ2U2LFxuICAgICAgdGV4dDpcbiAgICAgICAgJ0ZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQSBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5IHdpdGggYWxsIHRoZSBib29raW5ncyBhbmQgYWxzbyB5b3VyIGJvb2tpbmcgd2FzIHZlcnkgcXVpY2sgYW5kIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvIHJlY29tbWVuZCcsXG4gICAgICB1c2VybmFtZTogJ0BteXNlbGYudGhhaXMnLFxuICAgICAgbmFtZTogJ1RoYWlzIENhcmJhbGxhbCcsXG4gICAgfSxcbiAgXSxcbl07XG5cbmNvbnN0IFRlc3RpbW9uaWFscyA9ICgpID0+IHtcbiAgY29uc3QgdGVzdGltb25pYWxDYXJvdXNlbCA9IHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBzcGVlZDogMTAwMCxcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICB3YWl0Rm9yVHJhbnNpdGlvbjogZmFsc2UsXG4gICAgICBkZWxheTogNDAwMCxcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2NDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIH0sXG4gICAgICA3Njg6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgIH0sXG4gICAgICAxMDI0OiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICB9LFxuICAgICAgMTIwMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJ0ZXN0aW1vbmlhbHNcIiBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc30+XG4gICAgICA8QmxvY2tUaXRsZVxuICAgICAgICB0aXRsZT1cIldoYXQgY2xpZW50IHNheSBhYm91dCB1c1wiXG4gICAgICAgIHRleHQ9XCJDdXN0b21lciB0ZXN0aW1vbmlhbFwiXG4gICAgICAvPlxuICAgICAgPFN3aXBlciB7Li4udGVzdGltb25pYWxDYXJvdXNlbH0+XG4gICAgICAgIHtURVNUSU1PTklBTFNfREFUQS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aW5kZXh9PlxuICAgICAgICAgICAge2l0ZW0ubWFwKCh7IGltYWdlLCB0ZXh0LCBuYW1lLCB1c2VybmFtZSB9LCBfaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsc0NhcmRcbiAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XG4gICAgICAgICAgICAgICAgdGV4dD17dGV4dH1cbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgIGtleT17X2luZGV4fVxuICAgICAgICAgICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICkpfVxuICAgICAgPC9Td2lwZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHM7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdGVzdGltb25pYWxzOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y0RjRGNicsXG4gICAgcHQ6IFsnODBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgcGI6IFsnNjBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgbnVsbCwgJzEyMHB4J10sXG4gIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxuICBicmVha3BvaW50czogWyczNzZweCcsICc1NzZweCcsICc3NjhweCcsICc5OTJweCcsICcxMjAwcHgnLCAnMTY1MHB4J10sXG4gIGNvbG9yczoge1xuICAgIHRleHQ6ICcjMzQzRDQ4JywgLy8gYm9keSBjb2xvciBhbmQgcHJpbWFyeSBjb2xvclxuICAgIHRleHRfc2Vjb25kYXJ5OiAnIzAyMDczRScsIC8vIHNlY29uZGFyeSBib2R5IGNvbG9yXG4gICAgaGVhZGluZzogJyMwMjA3M0UnLCAvLyBwcmltYXJ5IGhlYWRpbmcgY29sb3JcbiAgICBoZWFkaW5nX3NlY29uZGFyeTogJyMzNDNENDgnLCAvLyBoZWFkaW5nIGNvbG9yXG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLCAvLyBib2R5IGJhY2tncm91bmQgY29sb3JcbiAgICBiYWNrZ3JvdW5kX3NlY29uZGFyeTogJyNGOUZCRkQnLCAvLyBzZWNvbmRhcnkgYmFja2dyb3VuZCBjb2xvclxuICAgIGJvcmRlcl9jb2xvcjogJyNFOUVERjUnLCAvLyBib3JkZXIgY29sb3JcbiAgICBwcmltYXJ5OiAnIzhENDQ4QicsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXG4gICAgc2Vjb25kYXJ5OiAnIzc5MzY3NycsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcbiAgICBibGFjazogJyMwRjIxMzcnLCAvLyBibGFjayBjb2xvclxuICAgIGdyYXk6ICcjRjhGQUZDJyxcbiAgICBtdXRlZDogJyM3QjgxODgnLCAvLyBtdXRlZCBjb2xvclxuICAgIGFjY2VudDogJyM2MDknLCAvLyBhIGNvbnRyYXN0IGNvbG9yIGZvciBlbXBoYXNpemluZyBVSVxuICB9LFxuICBmb250czoge1xuICAgIGJvZHk6ICdETSBTYW5zJyxcbiAgICAvLyBib2R5OlxuICAgIC8vICAgJ3N5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgICBoZWFkaW5nOiAnRE0gU2FucycsXG4gICAgLy8gaGVhZGluZzogJ0JyZWUgU2VyaWYnLFxuICAgIG1vbm9zcGFjZTogJ01lbmxvLCBtb25vc3BhY2UnLFxuICB9LFxuICBmb250U2l6ZXM6IFsxMywgMTQsIDE2LCAxOCwgMjAsIDIxLCAzMCwgMzYsIDQ4LCA2NF0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgYm9keTogJ25vcm1hbCcsXG4gICAgaGVhZGluZzogNTAwLFxuICAgIGJvbGQ6IDcwMCxcbiAgfSxcbiAgbGluZUhlaWdodHM6IHtcbiAgICBib2R5OiAyLFxuICAgIGhlYWRpbmc6ICc1MHB4JyxcbiAgfSxcbiAgbGV0dGVyU3BhY2luZ3M6IHtcbiAgICBib2R5OiAnbm9ybWFsJyxcbiAgICBjYXBzOiAnMC4yZW0nLFxuICAgIGhlYWRpbmc6ICctMC41cHgnLFxuICB9LFxuICAvLyBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjRdLFxuICBzaXplczoge1xuICAgIGNvbnRhaW5lcjogWycxMjUwcHgnXSxcbiAgfSxcbiAgLy8gdmFyaWFudHMgY2FuIHVzZSBjdXN0b20sIHVzZXItZGVmaW5lZCBuYW1lc1xuICBsYXlvdXQ6IHtcbiAgICBjb250YWluZXI6IHtcbiAgICAgIHB4OiBbJzE1cHgnLCBudWxsLCBudWxsLCAnMzBweCcsICc0MHB4J10sXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIHB5OiAzLFxuICAgIH0sXG4gICAgdG9vbGJhcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAvLyBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIH0sXG4gICAgbWFpbjoge30sXG4gICAgZm9vdGVyOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kX3NlY29uZGFyeScsXG4gICAgfSxcbiAgfSxcbiAgdGV4dDoge1xuICAgIGhlYWRpbmc6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiA0LFxuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICB9LFxuICAgIGhlcm9QcmltYXJ5OiB7XG4gICAgICBmb250U2l6ZTogWzUsIDU1XSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgICAgbGluZUhlaWdodDogWyc0MHB4JywgJzgwcHgnXSxcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMXB4JyxcbiAgICAgIHRleHRBbGlnbjogWydjZW50ZXInLCAnbGVmdCddLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgZm9udFNpemU6IDE4LFxuICAgICAgbGluZUhlaWdodDogJzMwcHgnLFxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcbiAgICB9LFxuICAgIGhlcm9TZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiAndGV4dF9zZWNvbmRhcnknLFxuICAgICAgbGluZUhlaWdodDogWyczMHB4JywgJzQycHgnXSxcbiAgICAgIGxldHRlclNwYWNpbmc6ICcwLjFlbScsXG4gICAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgJ2xlZnQnXSxcbiAgICB9LFxuICAgIGxlYWQ6IHtcbiAgICAgIGZvbnRTaXplOiA0MCxcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgbGluZUhlaWdodDogJzYwcHgnLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxuICAgIH0sXG4gICAgbXV0ZWQ6IHtcbiAgICAgIGxpbmVIZWlnaHQ6ICcyNnB4JyxcbiAgICAgIGNvbG9yOiAnbXV0ZWQnLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxuICAgICAgbGluZUhlaWdodDogJzQwcHgnLFxuICAgIH0sXG4gIH0sXG4gIGxpbmtzOiB7XG4gICAgYm9sZDoge1xuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH0sXG4gICAgbmF2OiB7XG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXG4gICAgICBwOiAyLFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcHg6IDAsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gIH0sXG4gIGltYWdlczoge1xuICAgIGF2YXRhcjoge1xuICAgICAgd2lkdGg6IDQ4LFxuICAgICAgaGVpZ2h0OiA0OCxcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXG4gICAgfSxcbiAgfSxcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcbiAgYnV0dG9uczoge1xuICAgIG1lbnU6IHtcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxuICAgIH0sIC8vIGRlZmF1bHQgdmFyaWFudCBmb3IgTWVudUJ1dHRvblxuICAgIC8vIHlvdSBjYW4gcmVmZXJlbmNlIG90aGVyIHZhbHVlcyBkZWZpbmVkIGluIHRoZSB0aGVtZVxuICAgIHByaW1hcnk6IHtcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmc6ICdwcmltYXJ5JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNpdGlvbjogJzUwMG1zJyxcbiAgICAgIGZvbnRTaXplOiAyLFxuICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGJnOiAnc2Vjb25kYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBzdHlsZXM6IHtcbiAgICAvLyBUbyBhZGQgYmFzZSwgdG9wLWxldmVsIHN0eWxlcyB0byB0aGUgPGJvZHk+IGVsZW1lbnQsIHVzZSB0aGVtZS5zdHlsZXMucm9vdC5cbiAgICByb290OiB7XG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBsaW5lSGVpZ2h0OiAnYm9keScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICAgIH0sXG4gICAgYToge1xuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9LFxuICAgIC8vIERpdmlkZXIgc3R5bGVzXG4gICAgaHI6IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxuICAgIH0sXG4gICAgLy8gYWxzbyB5b3UgY2FuIHVzZSBvdGhlciBIVE1MIGVsZW1lbnRzIHN0eWxlIGhlcmVcbiAgICB1bDoge1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgfSxcbiAgICBzck9ubHk6IHtcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpICFpbXBvcnRhbnQnLFxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxuICAgICAgaGVpZ2h0OiAnMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgbWFyZ2luOiAnLTFweCAhaW1wb3J0YW50JyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxuICAgICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnLFxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwICFpbXBvcnRhbnQnLFxuICAgIH0sXG4gIH0sXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYy1kcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFzb25yeS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0aWNreW5vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtd2F5cG9pbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3aXBlci9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9
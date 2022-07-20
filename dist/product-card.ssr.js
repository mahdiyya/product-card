'use strict';var vue=require('vue');function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = {
  name: 'ProductCard',
  props: {
    img: {
      default: ""
    },
    type: {
      default: "active"
    },
    size: {
      default: "normal"
    },
    title: {
      default: ""
    },
    price: {
      default: "Rp.00.000"
    },
    prevPrice: {
      default: "Rp.00.000"
    },
    discount: {
      default: "Rp.00.000"
    }
  },
  data: function data() {
    return {
      isDisabled: false,
      isDiscount: false,
      isSmall: false
    };
  },
  mounted: function mounted() {
    this.type === "disabled" ? this.isDisabled = true : this.isDisabled = false;
    this.size === "small" ? this.isSmall = true : this.isSmall = false;
    this.prevPrice !== "" ? this.isDiscount = true : this.isDiscount = false;
  }
};var _withScopeId = function _withScopeId(n) {
  return vue.pushScopeId("data-v-272ac874"), n = n(), vue.popScopeId(), n;
};

var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/vue.createElementVNode("img", {
    src: "{{img}}",
    alt: "image judul"
  }, null, -1);
});

var _hoisted_2 = [_hoisted_1];
var _hoisted_3 = {
  class: "product-card__card-bottom"
};
var _hoisted_4 = {
  class: "product-card__card-bottom__title"
};
var _hoisted_5 = {
  class: "product-card__card-bottom__price"
};
var _hoisted_6 = {
  key: 0,
  class: "product-card__card-bottom__discount"
};
var _hoisted_7 = {
  class: "product-card__card-bottom__discount-sum"
};
var _hoisted_8 = {
  class: "product-card__btn-blue"
};

var _hoisted_9 = /*#__PURE__*/vue.createTextVNode(" Add to bag ");

var _hoisted_10 = /*#__PURE__*/vue.createTextVNode(" Out of Stock ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["product-card", {
      small: $data.isSmall
    }])
  }, [vue.createElementVNode("div", {
    class: vue.normalizeClass(["product-card__card-top", {
      disabled: $data.isDisabled
    }])
  }, _hoisted_2, 2), vue.createElementVNode("div", _hoisted_3, [vue.createElementVNode("p", _hoisted_4, vue.toDisplayString($props.title), 1), vue.createElementVNode("p", _hoisted_5, vue.toDisplayString($props.price), 1), $data.isDiscount ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_6, [vue.createTextVNode(vue.toDisplayString($props.prevPrice) + " ", 1), vue.createElementVNode("span", _hoisted_7, vue.toDisplayString($props.discount), 1)])) : vue.createCommentVNode("", true), vue.createElementVNode("button", _hoisted_8, [$data.isDisabled ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
    key: 0
  }, [_hoisted_9], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, {
    key: 1
  }, [_hoisted_10], 64))])])], 2);
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = "\n.product-card[data-v-272ac874] {\n\t position: relative;\n\t flex: 1 132px;\n\t min-width: 132px;\n\t background-color: #fff;\n\t border-radius: 16px;\n\t overflow: hidden;\n\t margin: 0 8px;\n\t box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\n\t transition: box-shadow 0.5s ease-in-out;\n}\n.product-card[data-v-272ac874]:hover {\n\t box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);\n}\n.product-card[data-v-272ac874]:last-child {\n\t margin-right: 0;\n}\n.product-card[data-v-272ac874]:first-child {\n\t margin-left: 0;\n}\n.product-card p[data-v-272ac874] {\n\t margin: 0;\n}\n.product-card__card-top[data-v-272ac874] {\n\t position: relative;\n}\n.product-card__card-top img[data-v-272ac874] {\n\t width: 100%;\n\t height: 100%;\n\t object-fit: contain;\n}\n.product-card img.disabled[data-v-272ac874] {\n    opacity: 0.5;\n}\n.product-card__card-bottom[data-v-272ac874] {\n\t position: relative;\n\t width: 100%;\n\t padding: 8px;\n}\n.product-card__card-bottom__title[data-v-272ac874] {\n\t font-size: 14px;\n\t font-weight: 600;\n\t color: rgba(0, 0, 0, 0.8);\n\t line-height: 1.4em;\n\t overflow: hidden;\n\t box-orient: vertical;\n\t -webkit-box-orient: vertical;\n\t line-clamp: 2;\n\t -webkit-line-clamp: 2;\n\t display: -webkit-box;\n\t padding-right: 1rem;\n\t text-overflow: ellipsis;\n}\n.product-card__card-bottom__price[data-v-272ac874] {\n\t color: #ed7d45;\n\t font-size: 14px;\n\t font-weight: 600;\n\t line-height: 1.3;\n}\n.product-card__card-bottom__discount[data-v-272ac874] {\n\t color: rgba(0, 0, 0, 0.5);\n\t font-size: 12px;\n\t line-height: 1.3;\n}\n.product-card__card-bottom__discount-sum[data-v-272ac874] {\n\t padding: 0px 4px;\n\t border-radius: 12px;\n\t line-height: 1;\n\t font-size: 10px;\n\t font-weight: 600;\n\t background: #feb1b4;\n\t color: #f06067;\n}\n.product-card__btn-blue[data-v-272ac874] {\n\t width: calc(100% - 16px);\n\t font-weight: 600;\n\t padding: 8px;\n\t font-size: 11px;\n\t border: none;\n\t outline: 0;\n\t border-radius: 8px;\n\t cursor: pointer;\n\t background: #0a8cd2;\n\t color: #fff;\n\t margin-top: 8px;\n\t transition: all 0.3s ease-in-out;\n}\n.product-card__btn-blue[data-v-272ac874]:hover {\n\t background: #0873ad;\n}\n@media all and (min-width: 789px) {\n.product-card[data-v-272ac874] {\n\t\t flex: 1 182px;\n\t\t min-width: 182px;\n}\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-272ac874";// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var component = /*#__PURE__*/(function () {
  // Get component instance
  var installable = script; // Attach install function executed by Vue.use()

  installable.install = function (app) {
    app.component('ProductCard', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)

Object.entries(namedExports).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      exportName = _ref2[0],
      exported = _ref2[1];

  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;
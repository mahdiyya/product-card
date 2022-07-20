import { openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createTextVNode, createCommentVNode, Fragment, pushScopeId, popScopeId } from 'vue';

var script = {
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

  data() {
    return {
      isDisabled: false,
      isDiscount: false,
      isSmall: false
    };
  },

  mounted() {
    this.type === "disabled" ? this.isDisabled = true : this.isDisabled = false;
    this.size === "small" ? this.isSmall = true : this.isSmall = false;
    this.prevPrice !== "" ? this.isDiscount = true : this.isDiscount = false;
  }

};

const _withScopeId = n => (pushScopeId("data-v-272ac874"), n = n(), popScopeId(), n);

const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/createElementVNode("img", {
  src: "{{img}}",
  alt: "image judul"
}, null, -1));

const _hoisted_2 = [_hoisted_1];
const _hoisted_3 = {
  class: "product-card__card-bottom"
};
const _hoisted_4 = {
  class: "product-card__card-bottom__title"
};
const _hoisted_5 = {
  class: "product-card__card-bottom__price"
};
const _hoisted_6 = {
  key: 0,
  class: "product-card__card-bottom__discount"
};
const _hoisted_7 = {
  class: "product-card__card-bottom__discount-sum"
};
const _hoisted_8 = {
  class: "product-card__btn-blue"
};

const _hoisted_9 = /*#__PURE__*/createTextVNode(" Add to bag ");

const _hoisted_10 = /*#__PURE__*/createTextVNode(" Out of Stock ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["product-card", {
      small: $data.isSmall
    }])
  }, [createElementVNode("div", {
    class: normalizeClass(["product-card__card-top", {
      disabled: $data.isDisabled
    }])
  }, _hoisted_2, 2), createElementVNode("div", _hoisted_3, [createElementVNode("p", _hoisted_4, toDisplayString($props.title), 1), createElementVNode("p", _hoisted_5, toDisplayString($props.price), 1), $data.isDiscount ? (openBlock(), createElementBlock("p", _hoisted_6, [createTextVNode(toDisplayString($props.prevPrice) + " ", 1), createElementVNode("span", _hoisted_7, toDisplayString($props.discount), 1)])) : createCommentVNode("", true), createElementVNode("button", _hoisted_8, [$data.isDisabled ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [_hoisted_9], 64)) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [_hoisted_10], 64))])])], 2);
}

function styleInject(css, ref) {
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
}

var css_248z = "\n.product-card[data-v-272ac874] {\n\t position: relative;\n\t flex: 1 132px;\n\t min-width: 132px;\n\t background-color: #fff;\n\t border-radius: 16px;\n\t overflow: hidden;\n\t margin: 0 8px;\n\t box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);\n\t transition: box-shadow 0.5s ease-in-out;\n}\n.product-card[data-v-272ac874]:hover {\n\t box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);\n}\n.product-card[data-v-272ac874]:last-child {\n\t margin-right: 0;\n}\n.product-card[data-v-272ac874]:first-child {\n\t margin-left: 0;\n}\n.product-card p[data-v-272ac874] {\n\t margin: 0;\n}\n.product-card__card-top[data-v-272ac874] {\n\t position: relative;\n}\n.product-card__card-top img[data-v-272ac874] {\n\t width: 100%;\n\t height: 100%;\n\t object-fit: contain;\n}\n.product-card img.disabled[data-v-272ac874] {\n    opacity: 0.5;\n}\n.product-card__card-bottom[data-v-272ac874] {\n\t position: relative;\n\t width: 100%;\n\t padding: 8px;\n}\n.product-card__card-bottom__title[data-v-272ac874] {\n\t font-size: 14px;\n\t font-weight: 600;\n\t color: rgba(0, 0, 0, 0.8);\n\t line-height: 1.4em;\n\t overflow: hidden;\n\t box-orient: vertical;\n\t -webkit-box-orient: vertical;\n\t line-clamp: 2;\n\t -webkit-line-clamp: 2;\n\t display: -webkit-box;\n\t padding-right: 1rem;\n\t text-overflow: ellipsis;\n}\n.product-card__card-bottom__price[data-v-272ac874] {\n\t color: #ed7d45;\n\t font-size: 14px;\n\t font-weight: 600;\n\t line-height: 1.3;\n}\n.product-card__card-bottom__discount[data-v-272ac874] {\n\t color: rgba(0, 0, 0, 0.5);\n\t font-size: 12px;\n\t line-height: 1.3;\n}\n.product-card__card-bottom__discount-sum[data-v-272ac874] {\n\t padding: 0px 4px;\n\t border-radius: 12px;\n\t line-height: 1;\n\t font-size: 10px;\n\t font-weight: 600;\n\t background: #feb1b4;\n\t color: #f06067;\n}\n.product-card__btn-blue[data-v-272ac874] {\n\t width: calc(100% - 16px);\n\t font-weight: 600;\n\t padding: 8px;\n\t font-size: 11px;\n\t border: none;\n\t outline: 0;\n\t border-radius: 8px;\n\t cursor: pointer;\n\t background: #0a8cd2;\n\t color: #fff;\n\t margin-top: 8px;\n\t transition: all 0.3s ease-in-out;\n}\n.product-card__btn-blue[data-v-272ac874]:hover {\n\t background: #0873ad;\n}\n@media all and (min-width: 789px) {\n.product-card[data-v-272ac874] {\n\t\t flex: 1 182px;\n\t\t min-width: 182px;\n}\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-272ac874";

// Import vue component
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),

var entry_esm = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script; // Attach install function executed by Vue.use()

  installable.install = app => {
    app.component('ProductCard', installable);
  };

  return installable;
})(); // It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;

export { entry_esm as default };

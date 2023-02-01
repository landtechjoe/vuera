import React from 'react';
import { createRoot } from 'react-dom';
import Vue from 'vue';

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var _excluded$1 = ["component"],
  _excluded2 = ["component", "on"];
var VUE_COMPONENT_NAME = 'vuera-internal-component-name';
var wrapReactChildren = function wrapReactChildren(createElement, children) {
  return createElement('vuera-internal-react-wrapper', {
    props: {
      component: function component() {
        return /*#__PURE__*/React.createElement("div", null, children);
      }
    }
  });
};
var VueContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(VueContainer, _React$Component);
  var _super = _createSuper(VueContainer);
  function VueContainer(props) {
    var _this;
    _classCallCheck(this, VueContainer);
    _this = _super.call(this, props);

    /**
     * We have to track the current Vue component so that we can reliably catch updates to the
     * `component` prop.
     */
    _this.currentVueComponent = props.component;

    /**
     * Modify createVueInstance function to pass this binding correctly. Doing this in the
     * constructor to avoid instantiating functions in render.
     */
    var createVueInstance = _this.createVueInstance;
    var self = _assertThisInitialized(_this);
    _this.createVueInstance = function (element, component, prevComponent) {
      createVueInstance(element, self, component, prevComponent);
    };
    return _this;
  }
  _createClass(VueContainer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var component = nextProps.component,
        props = _objectWithoutProperties(nextProps, _excluded$1);
      if (this.currentVueComponent !== component) {
        this.updateVueComponent(this.props.component, component);
      }
      /**
       * NOTE: we're not comparing this.props and nextProps here, because I didn't want to write a
       * function for deep object comparison. I don't know if this hurts performance a lot, maybe
       * we do need to compare those objects.
       */
      Object.assign(this.vueInstance.$data, props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.vueInstance.$destroy();
    }

    /**
     * Creates and mounts the Vue instance.
     * NOTE: since we need to access the current instance of VueContainer, as well as the Vue instance
     * inside of the Vue constructor, we cannot bind this function to VueContainer, and we need to
     * pass VueContainer's binding explicitly.
     * @param {HTMLElement} targetElement - element to attact the Vue instance to
     * @param {ReactInstance} reactThisBinding - current instance of VueContainer
     */
  }, {
    key: "createVueInstance",
    value: function createVueInstance(targetElement, reactThisBinding) {
      var _components;
      var _reactThisBinding$pro = reactThisBinding.props,
        component = _reactThisBinding$pro.component,
        on = _reactThisBinding$pro.on,
        props = _objectWithoutProperties(_reactThisBinding$pro, _excluded2);

      // `this` refers to Vue instance in the constructor
      reactThisBinding.vueInstance = new Vue(_objectSpread2(_objectSpread2({
        el: targetElement,
        data: props
      }, config.vueInstanceOptions), {}, {
        render: function render(createElement) {
          return createElement(VUE_COMPONENT_NAME, {
            props: this.$data,
            on: on
          }, [wrapReactChildren(createElement, this.children)]);
        },
        components: (_components = {}, _defineProperty(_components, VUE_COMPONENT_NAME, component), _defineProperty(_components, 'vuera-internal-react-wrapper', ReactWrapper), _components)
      }));
    }
  }, {
    key: "updateVueComponent",
    value: function updateVueComponent(prevComponent, nextComponent) {
      this.currentVueComponent = nextComponent;

      /**
       * Replace the component in the Vue instance and update it.
       */
      this.vueInstance.$options.components[VUE_COMPONENT_NAME] = nextComponent;
      this.vueInstance.$forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        ref: this.createVueInstance
      });
    }
  }]);
  return VueContainer;
}(React.Component);

var _excluded = ["children", ""];
var makeReactContainer = function makeReactContainer(Component) {
  var _class;
  return _class = /*#__PURE__*/function (_React$Component) {
    _inherits(ReactInVue, _React$Component);
    var _super = _createSuper(ReactInVue);
    function ReactInVue(props) {
      var _this;
      _classCallCheck(this, ReactInVue);
      _this = _super.call(this, props);

      /**
       * We create a stateful component in order to attach a ref on it. We will use that ref to
       * update component's state, which seems better than re-rendering the whole thing with
       * ReactDOM.
       */
      _this.state = _objectSpread2({}, props);
      return _this;
    }
    _createClass(ReactInVue, [{
      key: "wrapVueChildren",
      value: function wrapVueChildren(children) {
        return {
          render: function render(createElement) {
            return createElement('div', children);
          }
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
          children = _this$state.children;
          _this$state[''];
          var rest = _objectWithoutProperties(_this$state, _excluded);
        var wrappedChildren = this.wrapVueChildren(children);
        return /*#__PURE__*/React.createElement(Component, rest, children && /*#__PURE__*/React.createElement(VueContainer, {
          component: wrappedChildren
        }));
      }
    }]);
    return ReactInVue;
  }(React.Component), _defineProperty(_class, "displayName", "ReactInVue".concat(Component.displayName || Component.name || 'Component')), _class;
};
var ReactWrapper = {
  props: ['component', 'passedProps'],
  data: {
    root: {
      type: Object
    }
  },
  render: function render(createElement) {
    return createElement('div', {
      ref: 'react'
    });
  },
  methods: {
    mountReactComponent: function mountReactComponent(component) {
      var _this2 = this;
      var Component = makeReactContainer(component);
      var children = this.$slots["default"] !== undefined ? {
        children: this.$slots["default"]
      } : {};
      this.root = createRoot(this.$refs.react);
      this.root.render( /*#__PURE__*/React.createElement(Component, _extends({}, this.$props.passedProps, this.$attrs, this.$listeners, children, {
        ref: function ref(_ref) {
          return _this2.reactComponentRef = _ref;
        }
      })), this.$refs.react);
    }
  },
  mounted: function mounted() {
    this.mountReactComponent(this.$props.component);
  },
  beforeDestroy: function beforeDestroy() {
    this.root.unmount();
  },
  updated: function updated() {
    /**
     * AFAIK, this is the only way to update children. It doesn't seem to be possible to watch
     * `$slots` or `$children`.
     */
    if (this.reactComponentRef) {
      if (this.$slots["default"] !== undefined) {
        this.reactComponentRef.setState({
          children: this.$slots["default"]
        });
      } else {
        this.reactComponentRef.setState({
          children: null
        });
      }
    }
  },
  inheritAttrs: false,
  watch: {
    $attrs: {
      handler: function handler() {
        if (this.reactComponentRef) {
          this.reactComponentRef.setState(_objectSpread2({}, this.$attrs));
        }
      },
      deep: true
    },
    '$props.component': {
      handler: function handler(newValue) {
        this.mountReactComponent(newValue);
      }
    },
    $listeners: {
      handler: function handler() {
        if (this.reactComponentRef) {
          this.reactComponentRef.setState(_objectSpread2({}, this.$listeners));
        }
      },
      deep: true
    },
    '$props.passedProps': {
      handler: function handler() {
        if (this.reactComponentRef) {
          this.reactComponentRef.setState(_objectSpread2({}, this.$props.passedProps));
        }
      },
      deep: true
    }
  }
};

function isReactComponent(component) {
  if (_typeof(component) === 'object' && !isReactForwardReference(component)) {
    return false;
  }
  return !(typeof component === 'function' && component.prototype && (component.prototype.constructor["super"] && component.prototype.constructor["super"].isVue || component.prototype instanceof Vue));
}
function isReactForwardReference(component) {
  return component.$$typeof && component.$$typeof.toString() === 'Symbol(react.forward_ref)';
}

function VueResolver(component) {
  return {
    components: {
      ReactWrapper: ReactWrapper
    },
    props: ['passedProps'],
    inheritAttrs: false,
    render: function render(createElement) {
      return createElement('react-wrapper', {
        props: {
          component: component,
          passedProps: this.$props.passedProps
        },
        attrs: this.$attrs,
        on: this.$listeners
      }, this.$slots["default"]);
    }
  };
}

/**
 * This mixin automatically wraps all React components into Vue.
 */
var VuePlugin = {
  install: function install(Vue, options) {
    /**
     * We define a custom merging strategy for the `components` field. This strategy really just
     * wraps all the React components while leaving Vue components as is.
     */
    var originalComponentsMergeStrategy = Vue.config.optionMergeStrategies.components;
    Vue.config.optionMergeStrategies.components = function (parent) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var mergedValue = originalComponentsMergeStrategy.apply(void 0, [parent].concat(args));
      var wrappedComponents = mergedValue ? Object.entries(mergedValue).reduce(function (acc, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];
        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, k, isReactComponent(v) ? VueResolver(v) : v));
      }, {}) : mergedValue;
      return Object.assign(mergedValue, wrappedComponents);
    };
    Vue.prototype.constructor.isVue = true;
  }
};

function ReactResolver(component) {
  return isReactComponent(component) ? component : function (props) {
    return /*#__PURE__*/React.createElement(VueContainer, _extends({}, props, {
      component: component
    }));
  };
}

/**
 * This function gets imported by the babel plugin. It wraps a suspected React element and, if it
 * isn't a valid React element, wraps it into a Vue container.
 */
function babelReactResolver(component, props, children) {
  return isReactComponent(component) ? /*#__PURE__*/React.createElement(component, props, children) : /*#__PURE__*/React.createElement(VueContainer, Object.assign({
    component: component
  }, props), children);
}

function defaultConfig() {
  return {
    vueInstanceOptions: {}
  };
}
var config = defaultConfig();

export { VueResolver as ReactInVue, ReactWrapper, ReactResolver as VueInReact, VuePlugin, VueContainer as VueWrapper, babelReactResolver as __vueraReactResolver, config };

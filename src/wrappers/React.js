import React from "react";
import { createRoot } from "react-dom";
import VueWrapper from "./Vue";

const makeReactContainer = (Component) => {
  return class ReactInVue extends React.Component {
    static displayName = `ReactInVue${Component.displayName || Component.name || "Component"}`;

    constructor(props) {
      super(props);

      /**
       * We create a stateful component in order to attach a ref on it. We will use that ref to
       * update component's state, which seems better than re-rendering the whole thing with
       * ReactDOM.
       */
      this.state = { ...props };
    }

    wrapVueChildren(children) {
      return {
        render: (createElement) => createElement("div", children),
      };
    }

    render() {
      const {
        children,
        // Vue attaches an event handler, but it is missing an event name, so
        // it ends up using an empty string. Prevent passing an empty string
        // named prop to React.
        // eslint-disable-next-line no-unused-vars
        "": _invoker,
        ...rest
      } = this.state;
      const wrappedChildren = this.wrapVueChildren(children);

      return (
        <Component {...rest}>{children && <VueWrapper component={wrappedChildren} />}</Component>
      );
    }
  };
};

export default {
  props: ["component", "passedProps"],
  data: {
    root: {
      type: Object,
    },
  },
  render(createElement) {
    return createElement("div", { ref: "react" });
  },
  methods: {
    mountReactComponent(component) {
      const Component = makeReactContainer(component);
      const children = this.$slots.default !== undefined ? { children: this.$slots.default } : {};
      this.root = createRoot(this.$refs.react);
      this.root.render(
        <Component
          {...this.$props.passedProps}
          {...this.$attrs}
          {...this.$listeners}
          {...children}
          ref={(ref) => (this.reactComponentRef = ref)}
        />,
        this.$refs.react
      );
    },
  },
  mounted() {
    this.mountReactComponent(this.$props.component);
  },
  beforeDestroy() {
    this.root.unmount();
  },
  updated() {
    /**
     * AFAIK, this is the only way to update children. It doesn't seem to be possible to watch
     * `$slots` or `$children`.
     */
    if (this.reactComponentRef) {
      if (this.$slots.default !== undefined) {
        this.reactComponentRef.setState({ children: this.$slots.default });
      } else {
        this.reactComponentRef.setState({ children: null });
      }
    }
  },
  inheritAttrs: false,
  watch: {
    $attrs: {
      handler() {
        if (this.reactComponentRef) {
          this.reactComponentRef.setState({ ...this.$attrs });
        }
      },
      deep: true,
    },
    "$props.component": {
      handler(newValue) {
        this.mountReactComponent(newValue);
      },
    },
    $listeners: {
      handler() {
        if (this.reactComponentRef) {
          this.reactComponentRef.setState({ ...this.$listeners });
        }
      },
      deep: true,
    },
    "$props.passedProps": {
      handler() {
        if (this.reactComponentRef) {
          this.reactComponentRef.setState({ ...this.$props.passedProps });
        }
      },
      deep: true,
    },
  },
};

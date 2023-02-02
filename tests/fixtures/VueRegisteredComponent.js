import Vue from "vue";

export default Vue.component("VueRegisteredComponent", {
  props: ["message", "reset"],
  render(createElement) {
    return createElement("div", [
      createElement("span", this.message),
      createElement("button", {
        on: {
          click: this.reset,
        },
      }),
    ]);
  },
});

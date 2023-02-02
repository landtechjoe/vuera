import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

const shared = {
  input: "src/index.js",
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    babel({
      exclude: "node-modules/**",
    }),
  ],
  external: ["react", "react-dom", "vue"],
};

export default [
  Object.assign({}, shared, {
    output: {
      file: "dist/vuera.cjs.js",
      format: "cjs",
    },
  }),
  Object.assign({}, shared, {
    output: {
      file: "dist/vuera.es.js",
      format: "es",
    },
  }),
  Object.assign({}, shared, {
    output: {
      file: "dist/vuera.iife.js",
      format: "iife",
      name: "vuera",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        vue: "Vue",
      },
    },
  }),
];

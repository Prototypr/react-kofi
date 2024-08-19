import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs"; // Ensure you have this import

import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json"; // Add this import

import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";

export default [
  {
    input: "./src/index.js",
    watch: {
      include: "./src/**",
      clearScreen: false,
    },
    output: [
      {
        dir: "dist/esm",
        format: "es",
        exports: "named",
        preserveModules: false,
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        exports: "named",
        preserveModules: false,
      },
      {
        file: "dist/styles.css", // Add this output for CSS
        format: "es",
      },
    ],
    plugins: [
      postcss({
        plugins: [
          tailwindcss("./tailwind.config.js"), // path to your tailwind.config.js
          autoprefixer(),
        ],
        extract: "styles.css", // Add this line to extract CSS
        minimize: true,
      }),
      babel({
        runtimeHelpers: true,

        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      commonjs({
        sourceMap: false
      }),
      external({
        includeDependencies: false,
      }),
      resolve(),
      json(),
      // ,
      // terser()
    ],
  },
];

const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
const flexbugs = require("postcss-flexbugs-fixes");
const presetEnv = require("postcss-preset-env");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
  plugins: [
    tailwindcss,
    flexbugs,
    presetEnv({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    }),
    !dev &&
      cssnano({
        preset: "default",
      }),
  ],
};

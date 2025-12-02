import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import {vitePreprocess} from "@sveltejs/kit/vite";

const isProd = (process.env.NODE_ENV = "production");

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),

    paths: {
      base: isProd ? "/saife" : "",
    },
  },
};

export default config;

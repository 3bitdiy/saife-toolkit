import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/kit/vite";

// Use explicit BASE_PATH for GitHub Pages, empty for everything else
const base = process.env.BASE_PATH || "";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter({
      fallback: "200.html",
    }),

    paths: {
      base,
    },
  },
};

export default config;
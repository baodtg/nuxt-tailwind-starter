import { defineNuxtConfig } from "nuxt";
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
   runtimeConfig: {
      apiSecret: '',
      public: {
         apiBase: '', // Or a default value
      }
   },
   typescript: {
      strict: true,
   },
   ssr: true,
   css: ["@/assets/css/main.css"],
   build: {
      postcss: {
         postcssOptions: {
            plugins: {
               tailwindcss: {},
               autoprefixer: {},
            },
         },
      },
   },
   vite: {
      plugins: [svgLoader()]
   }
});

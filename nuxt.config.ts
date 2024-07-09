// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseURL: 'https://kuber123.pythonanywhere.com/'
    }
  },

  plugins: ['~/plugins/axios.js'],
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["nuxt-tiptap-editor"],

  tiptap: {
    prefix: "Tiptap",
  },
});
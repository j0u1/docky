import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  modules: ["nuxt-shiki"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit", "@lucide/vue", "@vueuse/core"],
    },
  },
  shiki: {
    defaultTheme: "catppuccin-mocha",
    bundledLangs: ["dockerfile", "bash", "typescript", "vue"],
  },
  app: {
    head: {
      title: "Docky",
      meta: [
        { name: "title", content: "Docky" },
        { name: "description", content: "A search engine for production-ready web Dockerfiles" },
        { name: "theme-color", content: "#181820" },
        { name: "color-scheme", content: "dark" },
        { name: "charset", content: "utf-8" },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  modules: ["nuxt-shiki"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit", "@lucide/vue"],
    },
  },
  shiki: {
    defaultTheme: "catppuccin-mocha",
    bundledLangs: ["dockerfile", "bash", "typescript", "vue"],
  },
  app: {
    head: {
      title: "Docky",
      meta: [{ name: "description", content: "A search engine for production-ready web Dockerfiles" }],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});

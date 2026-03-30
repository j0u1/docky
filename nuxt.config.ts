import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  modules: ["nuxt-shiki"],
  vite: {
    plugins: [tailwindcss()],
  },
  shiki: {
    defaultTheme: "catppuccin-mocha",
    bundledLangs: ["dockerfile", "bash", "typescript", "vue"],
  },
  app: {
    head: {
      title: "Docky",
      meta: [{ name: "description", content: "" }],
    },
  },
});

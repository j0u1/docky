<script setup lang="ts">
useSeoMeta({
  ogTitle: "Docky",
  description: "A search engine for production-ready web Dockerfiles",
  ogDescription: "A search engine for production-ready web Dockerfiles",
  ogImage: "/images/cover.webp",
  ogUrl: "docky.d1yy.ru",
  twitterTitle: "Docky",
  twitterDescription: "A search engine for production-ready web Dockerfiles",
  twitterImage: "/images/twitter_cover.webp",
  twitterCard: "summary",
  keywords: "docky, docker, search, engine, web, dockerfile, production-ready, diy, d1yy, докер, докерфайл, javascript, typescript, react, vue, bun",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div class="container mx-auto px-4 lg:px-8 duration-300 transition-all flex flex-col gap-8 pb-8">
    <NuxtRouteAnnouncer class="absolute" />
    <NuxtPage />
    <Footer />
  </div>
</template>

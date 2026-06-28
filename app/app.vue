<script setup lang="ts">
useSeoMeta({
  ogTitle: "Docky",
  description: "A search engine for production-ready web Dockerfiles",
  ogDescription: "A search engine for production-ready web Dockerfiles",
  ogImage: "/images/cover.webp",
  ogUrl: "docky.d1yy.ru",
  twitterTitle: "Docky",
  twitterDescription: "A search engine for production-ready web Dockerfiles",
  twitterImage: "/images/cover.webp",
  twitterCard: "summary_large_image",
  keywords:
    "docky, docker, search, engine, web, dockerfile, production-ready, diy, d1yy, докер, докерфайл, javascript, typescript, react, vue, bun",
  author: "d1yy",
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
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.svg",
    },
  ],
});

if (import.meta.client) {
  console.info(
    `
  ██████╗  ██████╗  ██████╗██╗  ██╗██╗   ██╗
  ██╔══██╗██╔═══██╗██╔════╝██║ ██╔╝╚██╗ ██╔╝
  ██║  ██║██║   ██║██║     █████╔╝  ╚████╔╝
  ██║  ██║██║   ██║██║     ██╔═██╗   ╚██╔╝
  ██████╔╝╚██████╔╝╚██████╗██║  ██╗   ██║
  ╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝   ╚═╝

  Add your Dockerfile:
  %chttps://github.com/j0u1/docky/pulls%c
  `,
    "background:#181820;color:#649ab6;padding:2px 6px;border-radius:4px;font-weight:semibold;",
  );
}
</script>

<template>
  <div
    class="container mx-auto px-4 lg:px-8 duration-300 transition-all flex flex-col gap-8 pb-8 justify-between min-h-dvh"
  >
    <NuxtRouteAnnouncer class="absolute" />
    <NuxtPage />
    <Footer />
  </div>
</template>

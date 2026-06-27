<script setup lang="ts">
import type { NuxtError } from "#app";
import { ArrowLeftIcon } from "@lucide/vue";

defineProps({
  error: Object as () => NuxtError,
});

useSeoMeta({
  title: "Error — Docky",
});

const handler = () => clearError({ redirect: "/" });
</script>

<template>
  <main class="flex flex-col gap-4 items-center justify-center min-h-dvh">
    <div class="space-y-2 text-center">
      <h2
        class="text-[clamp(86px,10vw,250px)] font-medium duration-280 transition-transform leading-none"
      >
        {{ error?.status }}
      </h2>
      <p class="text-additional">
        {{ error?.message }}
      </p>
    </div>
    <button
      @click="handler"
      class="group flex items-center gap-2.5 text-additional cursor-pointer duration-300 transition-colors hover:text-accent"
      title="Clears and resets errors"
    >
      <ArrowLeftIcon class="size-4 shrink-0 group-hover:translate-x-1.5 transition-transform" />
      Go back
  </button>
  </main>
</template>

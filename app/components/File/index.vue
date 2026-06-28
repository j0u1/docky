<script setup lang="ts">
import type { FileType } from "~/types/fileType";
import Head from "./Head/index.vue";

const props = defineProps<{
  file: FileType;
}>();
</script>

<template>
  <div class="flex flex-col gap-4 outline outline-secondary p-4 rounded-2xl bg-bg">
    <Head :file="file" />
    <Shiki
      :code="file.code"
      lang="dockerfile"
      class="relative rounded-xl p-4 overflow-x-auto shadow-lg code min-h-82 max-h-82 overflow-y-hidden"
    />
  </div>
</template>

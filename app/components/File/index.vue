<script setup lang="ts">
import { type FileType } from "~/data/files";
import Head from "./Head/index.vue";

const emit = defineEmits<{ copied: [] }>();

const props = defineProps<{
  file: FileType;
  copied: boolean;
}>();
</script>

<template>
  <div class="flex flex-col gap-4 outline outline-secondary p-4 rounded-2xl bg-bg">
    <Head :file="file" :copied="copied" @copied="emit('copied')" />
    <Shiki
      :code="file.code"
      lang="dockerfile"
      class="relative rounded-xl p-4 overflow-x-auto shadow-lg code max-h-92 overflow-y-hidden"
    />
  </div>
</template>

<script setup lang="ts">
import { CopyIcon } from "@lucide/vue";
import PackageAndTags from "./PackageAndTags.vue";
import type { FileType } from "~/types/fileType.js";

defineProps<{
  file: FileType;
}>();

const { copied, copyToClipboard } = useClipboard();
</script>

<template>
  <div class="flex items-center justify-between text-additional">
    <PackageAndTags :file="file" />
    <CopyIcon
      @click="copyToClipboard(file.code)"
      class="size-4 cursor-pointer duration-300 transition-all hover:brightness-120"
      :class="{ 'text-accent': copied }"
    />
  </div>

  <Toast :isCopy="copied" />
</template>

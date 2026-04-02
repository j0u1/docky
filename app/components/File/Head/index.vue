<script setup lang="ts">
import { CopyIcon } from "@lucide/vue";
import PackageAndTags from "./PackageAndTags.vue";
import { type FileType } from "~/data/files";

defineProps<{
  file: FileType;
  copied: boolean;
}>();

const emit = defineEmits<{ copied: [] }>();

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    emit("copied");
  } catch (err) {
    console.log("Не удалось скопировать: ", err);
  }
};
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
</template>

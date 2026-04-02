<script setup lang="ts">
import { files } from "@/data/files";

const props = defineProps({
  search: {
    type: String,
    default: "",
  },
});

const copied = ref(false);

const filteredFiles = computed(() => {
  const search = props.search?.toLocaleLowerCase() || "";
  return files.filter((file) => {
    return file.tags.some((tag) => tag.toLowerCase().includes(search));
  });
});

const onCopied = () => {
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 duration-300 transition-all gap-4 lg:gap-8">
    <File v-for="(file, index) in filteredFiles" :key="index" :file="file" :copied="copied" @copied="onCopied" />
  </div>
  <Toast :isCopy="copied" />
</template>

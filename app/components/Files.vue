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
  const search = props.search?.toLowerCase().trim() || "";
  return files.filter(
    (file) =>
      file.tags.some((tag) => tag.toLowerCase().includes(search)) ||
      file.packageManager.toLowerCase().includes(search),
  );
});

const onCopied = () => {
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
};
</script>

<template>
  <section
    v-if="filteredFiles.length"
    class="grid grid-cols-1 md:grid-cols-2 duration-300 transition-all gap-4 lg:gap-6"
  >
    <File
      v-for="(file, index) in filteredFiles"
      :key="index"
      :file="file"
      :copied="copied"
      @copied="onCopied"
    />
  </section>
  <section v-else class="flex items-center justify-center">
    <p class="mx-auto text-additional">No such Dockerfile here</p>
  </section>

  <Toast :isCopy="copied" />
</template>

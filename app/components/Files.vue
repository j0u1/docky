<script setup lang="ts">
const props = defineProps({
  search: {
    type: String,
    default: "",
  },
});

const { filteredFiles } = useFilteredFiles(toRef(props, "search"));
</script>

<template>
  <section
    v-if="filteredFiles.length"
    class="grid grid-cols-1 md:grid-cols-2 duration-300 transition-all gap-4 lg:gap-6"
  >
    <File v-for="(file, index) in filteredFiles" :key="index" :file="file" />
  </section>
  <section v-else class="flex items-center justify-center">
    <p class="mx-auto text-additional">No such Dockerfile here</p>
  </section>
</template>

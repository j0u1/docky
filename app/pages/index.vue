<script setup lang="ts">
import { refDebounced } from "@vueuse/core";

const search = ref("");
const debouncedSearch = refDebounced(search, 200);
</script>

<template>
    <Hero v-model="search" />

    <Files :search="debouncedSearch" />
</template>

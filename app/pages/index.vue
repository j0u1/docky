<script setup lang="ts">
const search = ref("");
</script>

<template>
    <Hero v-model="search" />
    <Files :search="search" />
</template>

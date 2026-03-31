<script setup>
const search = defineModel({ type: String });
</script>

<template>
    <main class="flex flex-col items-center justify-center gap-4 pt-24 pb-16">
        <HeroTitle />
        <p class="text-additional">Dockerfile snippets for popular frameworks and tools</p>
        <HeroSearch v-model="search" />
    </main>
</template>

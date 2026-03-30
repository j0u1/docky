<script setup>
import { SearchIcon } from "@lucide/vue";

const search = defineModel({ type: String });
</script>

<template>
    <main class="flex flex-col items-center justify-center gap-4 py-12">
        <h1 class="text-3xl font-medium">🐋 Docky</h1>
        <p class="text-additional">Dockerfile snippets for popular frameworks and tools</p>
        <div class="flex items-center outline outline-secondary bg-bg rounded-xl py-2 px-3 gap-2.5 w-full max-w-md">
            <SearchIcon class="size-4 text-additional" />
            <input type="text" v-model="search" placeholder="Search..." class="w-full outline-0" />
        </div>
    </main>
</template>

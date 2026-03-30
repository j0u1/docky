<script setup>
import { SearchIcon, XIcon } from "@lucide/vue";

const search = defineModel({ type: String });
</script>

<template>
    <main class="flex flex-col items-center justify-center gap-4 pt-24 pb-12">
        <HeroTitle />
        <p class="text-additional">Dockerfile snippets for popular frameworks and tools</p>
        <div class="flex items-center outline outline-secondary bg-bg rounded-xl py-2 px-3 gap-2.5 w-full max-w-md focus-within:outline-accent duration-200 transition-all">
            <SearchIcon class="size-4 text-additional" />
            <input type="search" v-model="search" placeholder="Search Dockerfile..." class="w-full outline-0" inputmode="search" autofocus />
            <XIcon @click="search = ''" class="size-4 text-additional duration-200 transition-all" :class="search ? 'cursor-pointer scale-100' : 'cursor-default scale-0'" />
        </div>
    </main>
</template>

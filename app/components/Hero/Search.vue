<script setup lang="ts">
import { SearchIcon, XIcon } from "@lucide/vue";

const search = defineModel({ type: String });
</script>

<template>
    <div class="flex items-center outline outline-secondary bg-bg rounded-xl py-2 px-3 gap-2.5 w-full max-w-md focus-within:outline-accent duration-200 transition-all">
        <SearchIcon class="size-4.5 text-additional" />
        <input type="search" v-model="search" placeholder="Search Dockerfile..." class="w-full outline-0" inputmode="search" autofocus />
        <XIcon @click="search = ''" class="size-4 text-additional duration-200 transition-all" :class="search ? 'cursor-pointer scale-100' : 'cursor-default scale-0'" />
    </div>
</template>

<script setup lang="ts">
import { CopyIcon } from "@lucide/vue";

defineProps<{ isCopy: boolean }>();
</script>

<template>
  <div
    class="fixed bg-bg outline outline-secondary text-additional p-4 rounded-xl space-x-2 duration-250 transition-all origin-right bottom-8.5 z-1"
    :class="isCopy ? 'scale-100 right-8' : 'scale-60 -right-40'"
  >
    <CopyIcon class="size-4 inline-block shrink-0 mb-1" />
    <span>Copied!</span>
  </div>
</template>

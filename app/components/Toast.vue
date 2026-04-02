<script setup lang="ts">
import { CheckIcon } from "@lucide/vue";

defineProps<{ isCopy: boolean }>();
</script>

<template>
  <div
    class="fixed bg-bg outline outline-secondary text-white p-4 rounded-xl space-x-2 duration-300 transition-all origin-right"
    :class="isCopy ? 'scale-100 right-8 bottom-8' : 'scale-0 -right-40 -bottom-40'"
  >
    <CheckIcon class="size-4 inline-block shrink-0 mb-1" />
    <span>Copied!</span>
  </div>
</template>

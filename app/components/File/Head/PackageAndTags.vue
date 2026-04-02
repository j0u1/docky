<script setup lang="ts">
import { pmIcons } from "~/data/files";

type PackageManager = keyof typeof pmIcons;

defineProps<{
  file: {
    packageManager: PackageManager;
    tags: string[];
  };
}>();
</script>

<template>
  <div class="flex gap-2 items-center text-sm">
    <span class="flex gap-1 items-center">
      <component :is="pmIcons[file.packageManager]" class="size-4 mt-0.5" />
      {{ file.packageManager }}
    </span>
    <div class="h-3 mt-0.5 w-px bg-additional/50" />
    <div class="space-x-2">
      <span v-for="tag in file.tags">{{ tag }}</span>
    </div>
  </div>
</template>

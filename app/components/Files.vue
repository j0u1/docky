<script setup lang="ts">
import { files, pmIcons } from "@/data/files";
import { CopyIcon } from "@lucide/vue";

const props = defineProps({
  search: {
    type: String,
    default: "",
  },
});

const copied = ref(false);

const filteredFiles = computed(() => {
  const search = props.search?.toLocaleLowerCase() || "";
  return files.filter((file) => {
    return file.tags.some((tag) => tag.toLowerCase().includes(search));
  });
});

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    copied.value = true;

    setTimeout(() => {
      copied.value = false;
    }, 1500);
  } catch (err) {
    console.log("Не удалось скопировать: ", err);
  }
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 duration-300 transition-all gap-4 lg:gap-8">
    <div v-for="file in filteredFiles" class="flex flex-col gap-4 outline outline-secondary p-4 rounded-2xl bg-bg">
      <div class="flex items-center justify-between text-additional">
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
        <CopyIcon
          @click="copyToClipboard(file.code)"
          class="size-4 cursor-pointer duration-300 transition-all hover:brightness-120"
          :class="{ 'text-accent': copied }"
        />
      </div>

      <Shiki
        :code="file.code"
        lang="dockerfile"
        class="relative rounded-xl p-4 overflow-x-auto shadow-lg code max-h-92 overflow-y-hidden"
      />
    </div>
  </div>
  <Toast v-if="copied" />
</template>

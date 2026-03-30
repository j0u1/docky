<script setup>
import { files } from "@/data/files";
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

const copyToClipboard = async (text) => {
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
                    <span v-for="tag in file.tags">{{ tag }}</span>
                </div>
                <CopyIcon @click="copyToClipboard(file.code)" class="size-4 cursor-pointer duration-300 transition-transform" />
            </div>

            <Shiki :code="file.code" lang="dockerfile" class="relative rounded-xl p-4 overflow-x-auto shadow-lg code max-h-92 overflow-y-hidden" />
        </div>
    </div>
    <div v-if="copied" class="fixed bottom-4 right-4 bg-bg outline outline-secondary text-white p-4 rounded-xl">Скопировано!</div>
</template>

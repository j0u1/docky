import { files } from "~/data/files";

export const useFilteredFiles = (search: Ref<string>) => {
  const filteredFiles = computed(() => {
    const query = search.value.toLowerCase().trim() || "";
    return files.filter(
      (file) =>
        file.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        file.packageManager.toLowerCase().includes(query),
    );
  });

  return { filteredFiles };
};

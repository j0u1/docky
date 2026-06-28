export const useClipboard = () => {
  const copied = ref(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      copied.value = true;
      setTimeout(() => (copied.value = false), 2000);
    } catch (err) {
      console.log("Couldn't sync: ", err);
    }
  };

  return { copied, copyToClipboard };
};

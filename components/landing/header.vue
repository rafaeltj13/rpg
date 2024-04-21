<script setup lang="ts">
const isScrollAtTop = ref(true);

const handleScroll = () => {
  isScrollAtTop.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div
    class="fixed flex items-center justify-between w-full h-20 px-8 max-w-[1366px] top-2 left-0 right-0 mx-auto"
    :class="{
      'shadow-xl opacity-90 bg-background z-50 rounded-lg border transition duration-300':
        !isScrollAtTop,
    }"
  >
    <div><h1 class="text-2xl">RPG</h1></div>
    <div class="flex gap-2 items-center">
      <Button :variant="isScrollAtTop ? 'ghost' : 'link'" size="lg"
        >Classes</Button
      >
      <Button :variant="isScrollAtTop ? 'ghost' : 'link'" size="lg"
        >About</Button
      >
    </div>
    <LoginButton />
  </div>
  <SharedDarkModeDropdown class="fixed bottom-6 left-6 z-50" />
</template>

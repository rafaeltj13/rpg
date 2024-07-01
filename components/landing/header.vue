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
    class="fixed flex items-center justify-between lg:w-full h-20 mx-4 px-4 lg:mx-auto lg:px-8 max-w-[1366px] top-2 left-0 right-0"
    :class="{
      'shadow-xl opacity-90 bg-background z-50 rounded-lg transition duration-300':
        !isScrollAtTop,
    }"
  >
    <div><h1 class="text-2xl">miniRPG</h1></div>
    <div class="gap-2 items-center hidden sm:flex">
      <Button :variant="isScrollAtTop ? 'ghost' : 'link'" size="lg"
        >Classes</Button
      >
      <Button :variant="isScrollAtTop ? 'ghost' : 'link'" size="lg"
        >About</Button
      >
    </div>
    <LoginButton />
  </div>
</template>

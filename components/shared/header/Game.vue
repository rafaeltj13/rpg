<script setup lang="ts">
import { Icon } from "@iconify/vue";

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
    class="z-50 fixed flex bg-background items-center justify-between lg:w-full h-20 mx-4 px-4 lg:mx-auto lg:px-8 max-w-[1366px] top-2 left-0 right-0"
    :class="{
      'shadow-xl z-50 rounded-lg border transition duration-300':
        !isScrollAtTop,
    }"
  >
    <div class="flex items-center gap-2">
      <SharedMenu />
      <p class="font-bold">miniRPG</p>
    </div>
    <div class="flex items-center gap-4">
      <SharedDarkModeDropdown />
    </div>
  </div>
</template>

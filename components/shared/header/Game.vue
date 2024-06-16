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
      'shadow-xl z-50 rounded-lg border-2 transition duration-300':
        !isScrollAtTop,
    }"
  >
    <ClientOnly>
      <div class="flex items-center gap-2">
        <SharedMenu />
        <p class="font-bold">miniRPG</p>
      </div>
      <div class="flex items-center gap-2">
        <div class="h-full flex flex-col items-center justify-center">
          <div class="flex items-center justify-between gap-4 mr-4">
            <div class="flex flex-col items-center">
              <Icon icon="game-icons:two-coins" class="h-5 w-5" />
              <p class="text-sm">200</p>
            </div>
            <div class="flex flex-col items-center">
              <Icon icon="game-icons:rupee" class="h-5 w-5" />
              <p class="text-sm">3</p>
            </div>
          </div>
        </div>
        <SharedDarkModeDropdown />
        <SharedSettingsDropdown />
      </div>
    </ClientOnly>
  </div>
</template>

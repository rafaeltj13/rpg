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
    class="z-50 fixed flex bg-background items-center justify-between rounded-xl lg:w-full max-w-screen-xl h-16 mx-4 lg:mx-auto lg:px-0 top-2 left-0 right-0 border-0"
    :class="{
      'shadow-xl !border !opacity-90 z-50 transition-all duration-200 lg:px-6 bg-popover':
        !isScrollAtTop,
      'opacity-100 z-50 transition-all duration-200 lg:px-0': isScrollAtTop,
    }"
  >
    <ClientOnly>
      <div class="flex items-center gap-2">
        <SharedMenu />
        <p class="font-bold text-xl flex items-center">
          <img src="/public/logo.png" alt="miniRPG" class="h-10 w-10" />
          miniRPG
        </p>
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

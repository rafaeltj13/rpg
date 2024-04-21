<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="w-full h-[10vh] max-auto bg-gradient-to-r from-secondary to-primary"
  >
    <div
      class="max-w-[1366px] h-full mx-auto px-8 flex items-center justify-between"
    >
      <p class="text-3xl">RPG</p>
      <div class="flex items-center gap-4">
        <Icon
          icon="fa:github"
          class="w-6 h-6 transition-all hover:scale-110 hover:text-accent cursor-pointer"
        />
        <Icon
          icon="fa:instagram"
          class="w-6 h-6 transition-all hover:scale-110 hover:text-accent cursor-pointer"
        />
        <Icon
          icon="fa:reddit"
          class="w-6 h-6 transition-all hover:scale-110 hover:text-accent cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

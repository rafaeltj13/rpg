<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <NuxtLink
    to="/city/study"
    class="col-span-1 h-40 border p-4 rounded-lg hover:scale-105 scale-100 transition-all cursor-pointer flex flex-col items-center justify-center shadow-lg hover:bg-actions-foreground hover:text-background gap-4"
  >
    <Icon icon="game-icons:spell-book" class="w-20 h-20" />
    <p class="text-xl font-semibold">Study</p>
  </NuxtLink>
</template>

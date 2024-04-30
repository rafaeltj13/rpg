<script setup lang="ts">
import { Icon } from "@iconify/vue";

const availableQuests = 40;
</script>

<template>
  <NuxtLink
    to="/city/quests"
    :class="{
      'col-span-1': !availableQuests,
      'col-span-2 bg-primary': availableQuests > 0,
    }"
    class="h-40 border p-4 rounded-lg hover:scale-105 scale-100 transition-all cursor-pointer flex items-center justify-center shadow-lg hover:bg-actions-foreground hover:text-background gap-4"
  >
    <div class="flex flex-col items-center justify-center">
      <Icon icon="game-icons:stabbed-note" class="w-20 h-20" />
      <p v-if="!availableQuests" class="text-xl font-semibold">Quest Board</p>
    </div>
    <div v-if="availableQuests > 0">
      <p class="text-2xl">{{ availableQuests }} available quests</p>
    </div>
  </NuxtLink>
</template>

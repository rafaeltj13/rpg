<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="h-24 gap-4 bg-actions text-primary rounded-2xl p-3 flex items-center border shadow-lg"
  >
    <SharedActionsHubHealthBar :current="100" :max="150" />
    <div class="h-full flex flex-col items-center justify-between">
      <div class="flex items-center justify-between gap-4">
        <div>
          <Icon icon="game-icons:two-coins" class="h-8 w-8" />
          <p>200</p>
        </div>
        <div>
          <Icon icon="game-icons:two-coins" class="h-8 w-8" />
          <p>200</p>
        </div>
        <div>
          <Icon icon="game-icons:two-coins" class="h-8 w-8" />
          <p>200</p>
        </div>
      </div>
      <SharedActionsHubHonorBar :current="100" :max="550" />
    </div>
    <div class="grid grid-rows-2 grid-cols-2 grid-flow-col gap-2">
      <SharedActionsHubQuestButton />
      <SharedActionsHubMapButton />
      <!-- <SharedClassItem icon="orb-wand" /> -->
      <SharedActionsHubAttributesButton />
      <SharedActionsHubBackpackButton />
    </div>
  </div>
</template>

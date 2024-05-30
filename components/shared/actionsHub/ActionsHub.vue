<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="bg-actions text-primary rounded-2xl border-2 shadow-lg">
    <div class="h-28 gap-4 flex items-center">
      <SharedActionsHubHealthBar :current="100" :max="150" />
      <div class="h-full flex flex-col items-center justify-center">
        <div class="flex items-center justify-between gap-4">
          <div class="flex flex-col items-center">
            <Icon icon="game-icons:two-coins" class="h-8 w-8" />
            <p>200</p>
          </div>
          <div class="flex flex-col items-center">
            <Icon icon="game-icons:round-potion" class="h-8 w-8" />
            <p>3</p>
          </div>
        </div>
      </div>
      <SharedClassItem icon="wood-axe" type="sm" />
      <div class="grid grid-rows-2 grid-cols-2 grid-flow-col gap-2 py-2">
        <SharedActionsHubQuestButton />
        <SharedActionsHubMapButton />
        <SharedActionsHubAttributesButton />
        <SharedActionsHubBackpackButton />
      </div>
      <SharedActionsHubHonorBar :current="400" :max="550" />
    </div>
  </div>
</template>

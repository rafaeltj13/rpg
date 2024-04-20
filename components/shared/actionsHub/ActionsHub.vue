<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="w-[360px] gap-2 bg-actions text-primary rounded-xl p-3 flex flex-col justify-between items border shadow-lg"
  >
    <div class="flex items-center justify-between">
      <SharedActionsHubQuestButton />
      <SharedActionsHubMapButton />
      <div
        class="h-16 w-16 text-primary border rounded-xl hover:scale-125 scale-100 transition-all cursor-pointer flex items-center justify-center shadow-lg hover:bg-actions-foreground hover:text-background"
      >
        <Icon icon="game-icons:broadsword" class="w-12 h-12" />
      </div>
      <SharedActionsHubAttributesButton />
      <SharedActionsHubBackpackButton />
    </div>
    <SharedActionsHubHealthBar :current="140" :max="150" />
    <SharedActionsHubHonorBar :current="100" :max="550" />
  </div>
</template>

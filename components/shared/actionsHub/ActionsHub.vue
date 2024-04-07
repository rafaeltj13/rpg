<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="w-[420px] h-[148px] bg-slate-800 rounded-xl p-4 flex flex-col justify-between items"
  >
    <div class="flex items-center justify-between gap-4">
      <SharedActionsHubHealthBar :current="100" :max="150" />
      <SharedActionsHubHonorBar :current="100" :max="550" />
    </div>
    <SharedActionsHubExperienceBar :current="100" :max="2250" />
    <div class="flex items-center justify-between gap-4">
      <SharedActionsHubQuestButton />
      <SharedActionsHubMapButton />
      <div
        class="h-14 w-14 bg-slate-400 rounded-xl hover:scale-125 scale-100 transition-all cursor-pointer flex items-center justify-center"
      >
        <Icon icon="game-icons:broadsword" class="w-12 h-12" />
      </div>
      <SharedActionsHubSkillsButton />
      <SharedActionsHubBackpackButton />
    </div>
  </div>
</template>

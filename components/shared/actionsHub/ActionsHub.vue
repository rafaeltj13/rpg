<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex gap-2 h-24">
    <SharedActionsHubHealthBar :current="130" :max="250" />
    <div class="text-primary flex gap-2 items-end">
      <SharedActionsHubQuestButton />
      <SharedActionsHubMapButton />
      <SharedClassItem icon="wood-axe" type="sm" />
      <SharedActionsHubAttributesButton />
      <SharedActionsHubBackpackButton />
    </div>
    <SharedActionsHubStaminaBar :current="20" :max="110" />
  </div>
  <SharedActionsHubHonorBar :current="260" :max="550" />
</template>

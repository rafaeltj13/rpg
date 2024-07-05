<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-col gap-2 bg-popover border p-2 shadow-xl rounded-lg min-w-72"
  >
    <ClientOnly>
      <div class="text-primary flex justify-between items-end">
        <SharedActionsHubQuestButton />
        <SharedActionsHubMapButton />
        <SharedClassItem icon="wood-axe" type="sm" />
        <SharedActionsHubCharacterButton />
        <SharedActionsHubBackpackButton />
      </div>
    </ClientOnly>
    <div class="flex items-center justify-between gap-2">
      <SharedActionsHubHealthBar :current="130" :max="250" />
      <SharedActionsHubStaminaBar :current="20" :max="110" />
    </div>
    <SharedActionsHubHonorBar :current="260" :max="550" />
  </div>
</template>

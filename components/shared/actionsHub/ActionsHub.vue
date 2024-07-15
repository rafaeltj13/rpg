<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <div class="flex gap-4 bg-popover border p-2 shadow-xl rounded-lg min-w-72">
      <SharedClassItem icon="wood-axe" type="sm" />
      <div class="flex flex-col gap-2 items-center justify-center">
        <div class="flex gap-2">
          <SharedActionsHubHealthBar :current="130" :max="250" />
          <SharedActionsHubStaminaBar :current="20" :max="110" />
        </div>
        <SharedActionsHubHonorBar :current="260" :max="550" />
      </div>
      <div class="text-primary flex justify-center items-center gap-2">
        <SharedActionsHubQuestButton />
        <SharedActionsHubMapButton />
        <SharedActionsHubCharacterButton />
        <SharedActionsHubBackpackButton />
      </div>
    </div>
  </ClientOnly>
</template>

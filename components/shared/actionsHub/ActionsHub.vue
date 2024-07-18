<script setup lang="ts"></script>

<template>
  <ClientOnly>
    <div class="bg-popover border p-2 shadow-xl rounded-lg min-w-72">
      <div class="flex gap-4">
        <SharedRaceItem icon="barbarian" type="sm" />
        <SharedClassItem icon="piercing-sword" type="sm" />
        <div class="flex flex-col gap-2 items-center justify-center">
          <div class="flex flex-col gap-2">
            <SharedActionsHubHealthBar :current="130" :max="250" />
            <SharedActionsHubStaminaBar :current="20" :max="110" />
          </div>
        </div>
        <!-- <div class="text-primary flex justify-center items-center gap-2">
          <SharedActionsHubQuestButton />
          <SharedActionsHubMapButton />
          <SharedActionsHubCharacterButton />
          <SharedActionsHubInventoryButton />
        </div> -->
      </div>
      <SharedActionsHubHonorBar class="mt-2" :current="260" :max="550" />
    </div>
  </ClientOnly>
</template>

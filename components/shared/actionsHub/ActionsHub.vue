<template>
  <div
    class="w-[360px] gap-2 bg-actions text-primary rounded-xl p-3 flex flex-col justify-between items border shadow-lg"
  >
    <div class="flex items-center justify-between">
      <SharedActionsHubQuestButton />
      <SharedActionsHubMapButton />
      <SharedClassItem icon="orb-wand" />
      <SharedActionsHubAttributesButton />
      <SharedActionsHubBackpackButton />
    </div>
    <SharedActionsHubHealthBar :current="140" :max="150" />
    <SharedActionsHubHonorBar :current="100" :max="550" />
  </div>
</template>

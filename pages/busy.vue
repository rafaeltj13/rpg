<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { soleFields } from "~/mock";

const location = soleFields;

const typeIcon = computed(() => {
  switch (location.type) {
    case "forest":
      return "forest-entrance";
    case "dungeon":
      return "dungeon-gate";
    default:
      return "village";
  }
});
</script>

<template>
  <div>
    <SharedPageTitle title="Hunting" />
    <h4 class="flex items-center gap-4 text-4xl font-bold">
      <Icon
        :icon="`game-icons:${typeIcon}`"
        class="w-10 h-10 cursor-pointer"
      />{{ location.name }}
    </h4>
    <div class="flex items-center gap-12 my-8">
      <div
        v-for="(monster, index) of location.monsters"
        :key="monster.name + index"
        class="flex items-center justify-center flex-col"
      >
        <Icon :icon="`game-icons:${monster.icon}`" class="w-32 h-32 pb-2" />
        <p class="text-lg">{{ monster.name }}</p>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <p class="text-2xl font-bold">Time remaining:10 minute(s)</p>
      <div class="flex gap-2">
        <div
          class="h-4 w-4 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"
        ></div>
        <div
          class="h-4 w-4 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"
        ></div>
        <div class="h-4 w-4 bg-primary rounded-full animate-bounce"></div>
      </div>
    </div>
    <NuxtLink to="/rewards">
      <Button class="mt-4" variant="default" size="lg">Finish</Button>
    </NuxtLink>
  </div>
</template>

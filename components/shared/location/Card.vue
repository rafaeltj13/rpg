<script setup lang="ts">
import type { Location } from "@/types";
import { Icon } from "@iconify/vue";

const props = defineProps<{ location: Location }>();

const icon = computed(() => {
  switch (props.location.type) {
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
  <NuxtLink
    to=""
    class="col-span-1 border-2 p-4 rounded-xl hover:scale-105 scale-100 transition-all cursor-pointer flex flex-col items-start justify-start shadow-lg hover:bg-actions-foreground hover:text-background gap-3"
  >
    <p class="flex gap-4 text-xl font-bold">
      {{ props.location.name }}: 1 - 10
      <Icon :icon="`game-icons:${icon}`" class="w-8 h-8 cursor-pointer" />
    </p>
    <div class="w-full pt-2">
      <div class="gap-4 pb-2 flex flex-wrap">
        <Icon
          v-for="(monster, index) of location.monsters"
          :key="monster.name + index"
          :icon="`game-icons:${monster.icon}`"
          class="w-8 h-8"
        />
      </div>
    </div>
  </NuxtLink>
</template>

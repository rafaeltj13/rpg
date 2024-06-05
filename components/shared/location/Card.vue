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
    class="col-span-1 border-2 p-4 rounded-xl hover:scale-105 scale-100 transition-all cursor-pointer flex flex-col items-center justify-center shadow-lg hover:bg-actions-foreground hover:text-background gap-4"
  >
    <p class="flex gap-4 text-2xl font-bold">
      {{ props.location.name }}
      <Icon :icon="`game-icons:${icon}`" class="w-8 h-8 cursor-pointer" />
    </p>
  </NuxtLink>
</template>

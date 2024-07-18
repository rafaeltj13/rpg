<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { Item } from "~/types";

defineProps({
  item: {
    type: Object as PropType<Item>,
    required: false,
  },
});
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>
      <div
        class="bg-popover border p-2 shadow-xl rounded-lg w-20 h-20 hover:scale-105 scale-100 transition-all cursor-pointer flex items-center justify-center"
      >
        <Icon :icon="`game-icons:${item?.icon}`" class="w-14 h-14" />
      </div>
    </HoverCardTrigger>
    <HoverCardContent v-if="item">
      <div class="w-full">
        <p class="text-xl font-bold">{{ item?.name }}</p>
        <p class="text-sm">{{ item?.description }}</p>
        <div>
          <Badge class="mt-4">{{ item?.type }}</Badge>
        </div>
        <div>
          <Badge class="mt-4" v-if="item?.class">{{ item?.class.name }}</Badge>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>

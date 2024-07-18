<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { Item } from "~/types";

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
});

console.log(props.item);
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>
      <div
        class="bg-popover border p-2 shadow-xl rounded-lg w-20 h-20 hover:scale-105 scale-100 transition-all cursor-pointer flex items-center justify-center"
      >
        <Icon
          :class="!item.type ? 'opacity-40' : 'opacity-100'"
          :icon="`game-icons:${item.icon}`"
          class="w-12 h-12"
        />
      </div>
    </HoverCardTrigger>
    <HoverCardContent v-if="item.id">
      <div class="w-full">
        <p class="text-xl font-bold">{{ item?.name }}</p>
        <p class="text-sm">{{ item?.description }}</p>
        <Badge class="mt-4">{{ item?.type }}</Badge>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>

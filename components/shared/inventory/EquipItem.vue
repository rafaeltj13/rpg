<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { Item } from "~/types";

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
  isLoading: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <div v-if="isLoading">
    <Skeleton class="w-20 h-20" />
  </div>
  <HoverCard v-else>
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
        <div class="mt-4 flex flex-col gap-1">
          <p class="text-sm text-strength" v-if="item.strength">
            Strength: {{ item?.strength }}
          </p>
          <p class="text-sm text-agility" v-if="item.agility">
            Agility: {{ item?.agility }}
          </p>
          <p class="text-sm text-intelligence" v-if="item.intelligence">
            Intelligence: {{ item?.intelligence }}
          </p>
          <p class="text-sm text-vitality" v-if="item.vitality">
            Vitality: {{ item?.vitality }}
          </p>
        </div>
        <div>
          <Badge class="mt-4">{{ item?.type }}</Badge>
        </div>
        <div>
          <Badge class="mt-4" v-if="item?.class" variant="secondary">{{
            item?.class.name
          }}</Badge>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>

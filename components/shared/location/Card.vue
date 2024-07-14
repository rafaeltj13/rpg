<script setup lang="ts">
import type { Item, Location } from "@/types";
import { Icon } from "@iconify/vue";

const props = defineProps<{ location: Location }>();

const typeIcon = computed(() => {
  switch (props.location.type) {
    case "forest":
      return "forest-entrance";
    case "dungeon":
      return "dungeon-gate";
    default:
      return "village";
  }
});

const completeLoot: ComputedRef<Item[]> = computed(() => {
  return props.location.monsters
    .map((monster) => {
      return (monster.loots || []).map((loot) => {
        return loot.item;
      });
    })
    .flat() as Item[];
});
</script>

<template>
  <div
    class="border h-full col-span-1 p-4 rounded-xl hover:scale-105 scale-100 transition-all cursor-pointer flex flex-col items-start justify-start shadow-lg hover:bg-actions-foreground hover:text-background gap-3"
  >
    <div class="flex items-center justify-between w-full">
      <Icon
        :icon="`game-icons:${typeIcon}`"
        class="w-8 h-8 cursor-pointer"
        :class="location.type === 'city' ? '!w-12 !h-12' : ''"
      />
    </div>
    <p
      class="flex gap-4 text-xl font-bold"
      :class="location.type === 'city' ? '!text-4xl' : ''"
    >
      {{ props.location.name }}
    </p>
    <div class="w-full pt-2">
      <div class="gap-4 flex flex-wrap">
        <Icon
          v-for="(monster, index) of location.monsters"
          :key="monster.name + index"
          :icon="`game-icons:${monster.icon}`"
          class="w-8 h-8"
        />
      </div>
      <div v-if="completeLoot.length">
        <div class="w-[100%] h-[0.25px] bg-primary my-3 px-2"></div>
        <div class="gap-2 flex flex-wrap">
          <SharedItem
            v-for="(item, index) of completeLoot"
            :key="item.name + index"
            :icon="item.icon"
            iconStyle="w-5 h-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item, Location, Monster } from "@/types";
import { Icon } from "@iconify/vue";

const itens: Item[] = [
  {
    name: "Animal hide",
    icon: "animal-hide",
    type: "consumable",
  },
  {
    name: "Bowie knife",
    icon: "bowie-knife",
    type: "consumable",
  },
];

const location: Location = {
  name: "Sole Fields",
  npcs: [],
  monsters: [
    {
      name: "Wolf",
      maxHp: 15,
      damage: 7,
      exp: 15,
      icon: "wolf-head",
      loot: itens.map((item) => {
        return {
          item,
          percentage: 99,
        };
      }),
    },
    {
      name: "Goblin",
      maxHp: 10,
      damage: 5,
      exp: 10,
      icon: "goblin",
      loot: itens.map((item) => {
        return {
          item,
          percentage: 99,
        };
      }),
    },
  ] as Monster[],
  type: "forest",
};

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
  <h1 class="text-[64px] text-primary font-bold pb-8">Hunting</h1>
  <h4 class="flex items-center gap-4 text-4xl font-bold">
    <Icon :icon="`game-icons:${typeIcon}`" class="w-10 h-10 cursor-pointer" />{{
      location.name
    }}
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
    <p class="text-2xl font-bold">Time remaining: 52 minute(s)</p>
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
</template>

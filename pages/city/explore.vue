<script setup lang="ts">
import type { Location, Monster } from "@/types";

const locations: Location[] = [
  {
    name: "Sole Fields",
    npcs: [],
    monsters: [
      {
        name: "Wolf",
        maxHp: 15,
        damage: 7,
        exp: 15,
        icon: "wolf-head",
      },
      {
        name: "Goblin",
        maxHp: 10,
        damage: 5,
        exp: 10,
        icon: "goblin",
      },
    ] as Monster[],
    type: "forest",
  },
  {
    name: "Sole Dungeons",
    npcs: [],
    monsters: [
      {
        name: "Mite",
        maxHp: 10,
        damage: 5,
        exp: 10,
        icon: "mite",
      },
      {
        name: "Bat",
        maxHp: 20,
        damage: 10,
        exp: 20,
        icon: "bat",
      },
    ] as Monster[],
    type: "dungeon",
  },
  {
    name: "Sole Fields II",
    npcs: [],
    monsters: [
      {
        name: "Boar",
        maxHp: 10,
        damage: 5,
        exp: 10,
        icon: "boar",
      },
      {
        name: "Wasp",
        maxHp: 20,
        damage: 10,
        exp: 20,
        icon: "wasp-sting",
      },
      {
        name: "Goblin",
        maxHp: 10,
        damage: 5,
        exp: 10,
        icon: "goblin",
      },
      {
        name: "Boar",
        maxHp: 10,
        damage: 5,
        exp: 10,
        icon: "boar",
      },
    ] as Monster[],
    type: "forest",
  },
];
</script>

<template>
  <div class="mx-auto">
    <h1 class="text-[64px] text-primary font-bold pb-8">Explore</h1>
    <div class="pt-6 grid grid-cols-4 gap-8">
      <SharedLocationCard
        v-for="loc of [...locations, ...locations]"
        :key="loc.name"
        :location="loc"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Location } from "@/types";

const locations: Location[] = [
  {
    name: "Sole Fields",
    npcs: [],
    monsters: [],
    type: "forest",
  },
  {
    name: "Sole Dungeons",
    npcs: [],
    monsters: [],
    type: "dungeon",
  },
  {
    name: "CGCITY",
    npcs: [],
    monsters: [],
    type: "city",
  },
];
</script>

<template>
  <div class="mx-auto">
    <h1 class="text-[64px] text-primary font-bold pb-8">Explore</h1>
    <h6 class="text-xl">Near sole:</h6>
    <div class="pt-12 flex items-center gap-12">
      <SharedLocationCard
        v-for="loc of locations"
        :key="loc.name"
        :location="loc"
      />
    </div>
  </div>
</template>

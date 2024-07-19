<script setup lang="ts">
import type { Player } from "~/types";

const player = ref<Player>({
  name: "TJ-",
  age: 27,
  country: "BR",
  honor: 260,
  created_at: new Date(),
  class: {
    name: "Swordsman",
    icon: "wood-axe",
  },
  currentLocation: {
    name: "Sole",
    type: "city",
    monsters: [],
    npcs: [],
  },
  attributes: {
    strength: 73,
    agility: 59,
    intelligence: 21,
    vitality: 68,
  },
});
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-1">
    <div class="col-span-2">
      <div class="flex items-center gap-6">
        <SharedPageTitle :title="player.name" />
        <img
          class="pb-8"
          :src="`https://flagsapi.com/${player.country}/flat/48.png`"
        />
      </div>
      <div class="mb-12 max-w-screen-sm">
        <h4 class="text-3xl text-primary font-bold mb-4">Strength</h4>
        <CharacterAttributesBar
          :attribute="player.attributes.strength"
          color="strength"
        />
      </div>
      <div class="mb-12 max-w-sc max-w-screen-sm">
        <h4 class="text-3xl text-primary font-bold mb-4">Agility</h4>
        <CharacterAttributesBar
          :attribute="player.attributes.agility"
          color="agility"
        />
      </div>
      <div class="mb-12 max-w-screen-sm">
        <h4 class="text-3xl text-primary font-bold mb-4">Intelligence</h4>
        <CharacterAttributesBar
          :attribute="player.attributes.intelligence"
          color="intelligence"
        />
      </div>
      <div class="mb-12 max-w-screen-sm">
        <h4 class="text-3xl text-primary font-bold mb-4">Vitality</h4>
        <CharacterAttributesBar
          :attribute="player.attributes.vitality"
          color="vitality"
        />
      </div>
    </div>
    <CharacterDetails :player="player" />
  </div>
</template>

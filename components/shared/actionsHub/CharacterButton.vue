<script setup lang="ts">
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Icon } from "@iconify/vue";
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
  <HoverCard>
    <HoverCardTrigger
      ><NuxtLink
        to="/character"
        class="bg-background border w-10 h-10 flex items-center justify-center cursor-pointer rounded-md transition-all hover:scale-110 shadow-md hover:bg-actions-foreground hover:text-background"
      >
        <Icon icon="game-icons:skills" class="w-6 h-6" /></NuxtLink
    ></HoverCardTrigger>
    <HoverCardContent>
      <div class="w-full">
        <h6 class="text-lg text-primary font-bold">Attributes</h6>
        <CharacterAttributesBar
          :attribute="player.attributes.strength"
          color="rose"
        />
        <CharacterAttributesBar
          :attribute="player.attributes.agility"
          color="lime"
        />
        <CharacterAttributesBar
          :attribute="player.attributes.intelligence"
          color="sky"
        />
        <CharacterAttributesBar
          :attribute="player.attributes.vitality"
          color="orange"
        />
      </div>
    </HoverCardContent>
  </HoverCard>
</template>

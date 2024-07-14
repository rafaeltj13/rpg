<script setup lang="ts">
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Icon } from "@iconify/vue";

import { usePlayerStore } from "~/stores/player";

const playerStore = usePlayerStore();

const playerState = computed(() => playerStore.playerState);
</script>

<template>
  <HoverCard v-if="Object.keys(playerState.attributes).length > 0">
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
          v-if="playerState.attributes.strength"
          :attribute="playerState.attributes.strength"
          color="rose"
        />
        <CharacterAttributesBar
          v-if="playerState.attributes.agility"
          :attribute="playerState.attributes.agility"
          color="lime"
        />
        <CharacterAttributesBar
          v-if="playerState.attributes.intelligence"
          :attribute="playerState.attributes.intelligence"
          color="sky"
        />
        <CharacterAttributesBar
          v-if="playerState.attributes.vitality"
          :attribute="playerState.attributes.vitality"
          color="orange"
        />
      </div>
    </HoverCardContent>
  </HoverCard>
</template>

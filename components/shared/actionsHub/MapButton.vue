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

onMounted(() => {
  console.log("playerState", playerState.value.currentLocation);
});
</script>

<template>
  <HoverCard>
    <HoverCardTrigger
      ><NuxtLink
        to="/map"
        class="bg-background border w-10 h-10 flex items-center justify-center cursor-pointer rounded-md transition-all hover:scale-110 shadow-md hover:bg-actions-foreground hover:text-background"
      >
        <Icon icon="game-icons:treasure-map" class="w-6 h-6" /></NuxtLink
    ></HoverCardTrigger>
    <HoverCardContent>
      <h6 class="text-lg text-primary font-bold mb-2">Current Location</h6>
      <div class="hover:scale-105 scale-100 transition-all cursor-pointer">
        <NuxtLink
          to="/city"
          class="flex items-center gap-4 border p-4 rounded-md text-xl font-bold hover:bg-actions-foreground hover:text-background"
        >
          <Icon icon="game-icons:village" class="w-8 h-8" />
          <span>{{ playerState.currentLocation?.name }}</span>
        </NuxtLink>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>

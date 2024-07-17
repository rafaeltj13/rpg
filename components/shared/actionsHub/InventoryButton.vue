<script setup lang="ts">
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Icon } from "@iconify/vue";
</script>

<template>
  <HoverCard>
    <HoverCardTrigger
      ><div
        class="bg-background border w-10 h-10 flex items-center justify-center cursor-pointer rounded-md transition-all hover:scale-110 shadow-md hover:bg-actions-foreground hover:text-background"
      >
        <Icon icon="game-icons:backpack" class="w-6 h-6" /></div
    ></img></HoverCardTrigger>
    <HoverCardContent>
      <div class="w-full text-xl">Inventory
      </div>
    </HoverCardContent>
  </HoverCard>
</template>

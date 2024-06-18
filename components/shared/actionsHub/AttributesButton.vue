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
        class="w-10 h-10 flex items-center justify-center cursor-pointer border-2 rounded-md transition-all bg-actions hover:scale-110 shadow-md hover:bg-actions-foreground hover:text-background"
      >
        <Icon icon="game-icons:skills" class="w-6 h-6" /></div
    ></HoverCardTrigger>
    <HoverCardContent>
      <div class="w-full text-xl">Attributes</div>
    </HoverCardContent>
  </HoverCard>
</template>

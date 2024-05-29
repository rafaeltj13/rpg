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
        class="w-8 h-8 flex items-center justify-center cursor-pointer border rounded-md transition-all hover:scale-110 shadow-md hover:bg-actions-foreground hover:text-background"
      >
        <Icon icon="game-icons:skills" class="w-6 h-6" /></div
    ></HoverCardTrigger>
    <HoverCardContent>
      <div class="w-full text-xl">Attributes</div>
    </HoverCardContent>
  </HoverCard>
</template>

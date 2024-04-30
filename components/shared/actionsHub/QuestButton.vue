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
    <HoverCardTrigger>
      <div
        class="w-16 h-16 flex items-center justify-center cursor-pointer border rounded-xl transition-all hover:scale-110 shadow-md hover:bg-actions-foreground hover:text-background"
      >
        <Icon icon="game-icons:stabbed-note" class="w-12 h-12" />
      </div>
    </HoverCardTrigger>
    <HoverCardContent>
      <div class="w-full text-xl">Quests</div>
    </HoverCardContent>
  </HoverCard>
</template>

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
        class="w-14 h-14 flex items-center justify-center cursor-pointer border rounded-xl transition-all hover:scale-110 shadow-md hover:bg-foreground hover:text-actions"
      >
        <Icon icon="game-icons:checklist" class="h-10 w-10" />
      </div>
    </HoverCardTrigger>
    <HoverCardContent>
      <div class="w-full text-xl">Quests</div>
    </HoverCardContent>
  </HoverCard>
</template>

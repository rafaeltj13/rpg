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
        class="w-12 h-12 flex items-center justify-center cursor-pointer border rounded-xl transition-all hover:scale-110"
      >
        <Icon icon="game-icons:book-pile" class="h-10 w-10" /></div
    ></HoverCardTrigger>
    <HoverCardContent>
      <div class="w-full text-xl">Skills</div>
    </HoverCardContent>
  </HoverCard>
</template>

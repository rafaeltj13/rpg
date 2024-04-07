<script setup lang="ts">
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
</script>

<template>
  <HoverCard>
    <HoverCardTrigger
      ><img
        src="/assets/images/backpack.webp"
        class="h-14 w-14 rounded-xl hover:scale-110 scale-100 transition-all cursor-pointer"
      ></img></HoverCardTrigger>
    <HoverCardContent>
      <div class="w-full text-xl">Backpack</div>
    </HoverCardContent>
  </HoverCard>
</template>

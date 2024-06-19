<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const props = defineProps<{ icon: string; iconStyle?: string }>();
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>
      <Icon :icon="`game-icons:${props.icon}`" :class="iconStyle" />
    </HoverCardTrigger>
    <HoverCardContent>
      <div class="w-full text-xl">Item</div>
    </HoverCardContent>
  </HoverCard>
</template>

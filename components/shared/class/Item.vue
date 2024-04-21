<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  icon: {
    type: string;
    required: true;
  };
}>();
</script>

<template>
  <div
    class="h-16 w-16 text-primary border rounded-xl hover:scale-125 scale-100 transition-all cursor-pointer flex items-center justify-center shadow-lg hover:bg-actions-foreground hover:text-background"
  >
    <Icon :icon="`game-icons:${props.icon}`" class="w-12 h-12" />
  </div>
</template>

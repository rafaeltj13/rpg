<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  icon: string;
}>();
</script>

<template>
  <div
    class="h-20 w-20 text-primary border rounded-xl hover:scale-125 scale-100 transition-all cursor-pointer flex items-center justify-center shadow-lg hover:bg-actions-foreground hover:text-background"
  >
    <Icon :icon="`game-icons:${props.icon}`" class="w-16 h-16" />
  </div>
</template>

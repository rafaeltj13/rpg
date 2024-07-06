<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  icon?: string;
  type: "sm" | "lg";
}>();

const classes = computed(() => {
  return {
    "w-20 h-20 rounded-xl": props.type === "lg",
    "w-14 h-14 rounded-md": props.type === "sm" || !props.type,
  };
});
</script>

<template>
  <div
    :class="classes"
    class="bg-background border text-primary hover:scale-125 scale-100 transition-all cursor-pointer flex items-center justify-center shadow-lg hover:bg-actions-foreground hover:text-background"
  >
    <Icon :icon="`game-icons:${props.icon}`" class="w-10 h-10" />
  </div>
</template>

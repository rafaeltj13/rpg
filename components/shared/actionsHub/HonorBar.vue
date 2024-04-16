<script setup lang="ts">
const props = defineProps<{
  current: number;
  max: number;
}>();
</script>

<template>
  <div class="h-4 w-full bg-indigo-900 rounded-lg relative shadow-md">
    <div
      :style="`width: ${((props.current * 100) / props.max).toFixed(0)}%`"
      :class="`h-4 bg-indigo-700 rounded-lg flex items-center justify-center`"
    ></div>
    <div class="absolute w-full top-0 flex items-center justify-center">
      <p class="text-xs text-actions dark:text-primary-foreground">
        {{ props.current }} / {{ props.max }}
      </p>
    </div>
  </div>
</template>

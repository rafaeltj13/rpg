<script setup lang="ts">
const props = defineProps<{
  current: number;
  max: number;
}>();
</script>

<template>
  <div class="h-full w-12 bg-red-900 rounded-md relative shadow-md">
    <div
      :style="`height: ${((props.current * 100) / props.max).toFixed(0)}%`"
      class="absolute bg-rose-700 rounded-md w-full bottom-0"
    ></div>
    <div class="h-full w-full flex items-center justify-center text-center">
      <p class="text-xs text-background dark:text-foreground z-50">
        {{ props.current }}
      </p>
    </div>
  </div>
</template>

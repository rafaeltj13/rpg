<script setup lang="ts">
const props = defineProps<{
  current: number;
  max: number;
}>();
</script>

<template>
  <div class="h-4 w-full bg-yellow-900 rounded-md relative">
    <div
      :style="`width: ${((props.current * 100) / props.max).toFixed(0)}%`"
      :class="`h-4 bg-yellow-600 rounded-md flex items-center justify-center`"
    ></div>
    <div class="absolute w-full top-0 flex items-center justify-center">
      <p class="text-xs">{{ props.current }} / {{ props.max }}</p>
    </div>
  </div>
</template>

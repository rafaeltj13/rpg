<script setup lang="ts">
const props = defineProps<{
  current: number;
  max: number;
}>();
</script>

<template>
  <div class="h-6 w-full bg-green-900 rounded-lg relative">
    <div
      :style="`width: ${((props.current * 100) / props.max).toFixed(0)}%`"
      :class="`h-6 bg-emerald-700 rounded-lg flex items-center justify-center`"
    ></div>
    <div class="absolute w-full top-0 flex items-center justify-center">
      <p>{{ props.current }} / {{ props.max }}</p>
    </div>
  </div>
</template>

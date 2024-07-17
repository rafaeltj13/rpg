<script setup lang="ts">
import { Icon } from "@iconify/vue";
const props = defineProps<{
  current: number;
  max: number;
}>();
</script>

<template>
  <div
    class="h-5 w-40 border bg-yellow-900 border-yellow-600 rounded-lg relative shadow-md"
  >
    <div
      :style="`width: ${((props.current * 100) / props.max).toFixed(0)}%`"
      class="absolute bg-yellow-700 rounded-md h-full bottom-0"
    ></div>
    <div class="h-full w-full flex items-center justify-center text-center">
      <p
        class="text-xs text-background dark:text-foreground z-50 flex items-center gap-2"
      >
        {{ props.current }} ({{
          ((props.current * 100) / props.max).toFixed(0)
        }}%)
        <Icon icon="game-icons:electric" class="h-3 w-3" />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  current: number;
  max: number;
}>();
</script>

<template>
  <div
    class="h-5 w-full bg-indigo-700 border-indigo-500 border rounded-md relative shadow-md"
  >
    <div
      :style="`width: ${((props.current * 100) / props.max).toFixed(0)}%`"
      class="absolute bg-indigo-500 rounded-sm h-full bottom-0"
    ></div>
    <div class="h-full w-full flex items-center justify-center text-center">
      <p
        class="text-xs text-background dark:text-foreground z-50 flex items-center gap-2"
      >
        {{ props.current }} ({{
          ((props.current * 100) / props.max).toFixed(2)
        }}%)
        <Icon icon="game-icons:vertical-banner" class="h-3 w-3" />
      </p>
    </div>
  </div>
</template>

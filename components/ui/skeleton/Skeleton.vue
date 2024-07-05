<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<SkeletonProps>();
</script>

<template>
  <div
    :class="
      cn('animate-pulse duration-1000 rounded-md bg-popover', props.class)
    "
  />
</template>

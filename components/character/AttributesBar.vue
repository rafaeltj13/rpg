<script setup lang="ts">
import { Skeleton } from "@/components/ui/skeleton";

const MAX_ATTRIBUTE = 99;

const props = defineProps<{
  attribute: number;
  color: string;
}>();
</script>

<template>
  <div v-if="!props.attribute">
    <Skeleton class="h-6 w-[100%]" />
  </div>
  <div
    v-else
    :class="[`bg-${props.color} border-2 !border-${props.color}-foreground`]"
    class="mt-2 h-6 w-[100%] rounded-sm relative shadow-lg"
  >
    <div
      :style="`width: ${(props.attribute / MAX_ATTRIBUTE) * 100}%`"
      :class="[`from-${props.color} to-${props.color}-foreground`]"
      class="absolute bg-gradient-to-r rounded-sm h-5 bottom-0"
    ></div>
    <div class="h-full w-full flex items-center justify-center text-center">
      <p
        class="text-sm text-background dark:text-foreground z-50 flex items-center gap-2 font-bold"
      >
        {{ props.attribute }} / {{ MAX_ATTRIBUTE }}
      </p>
    </div>
  </div>
</template>

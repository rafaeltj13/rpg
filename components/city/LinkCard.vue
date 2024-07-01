<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{
  to: string;
  icon: string;
  text: string;
  description?: string;
  color?: string;
}>();
</script>

<template>
  <NuxtLink
    :to="props.to"
    :class="[
      props.description ? 'col-span-2 !flex-row' : '',
      props.color ? `bg-${color}` : 'bg-popover',
    ]"
    class="col-span-1 border h-40 p-4 rounded-xl hover:scale-105 scale-100 transition-all cursor-pointer flex flex-col items-center justify-center shadow-lg hover:bg-actions-foreground hover:text-background gap-4"
  >
    <Icon :icon="`game-icons:${props.icon}`" class="w-20 h-20" />
    <p v-if="!props.description" class="text-xl font-semibold">
      {{ props.text }}
    </p>
    <div v-if="props.description">
      <p class="text-2xl">{{ props.description }}</p>
    </div>
  </NuxtLink>
</template>

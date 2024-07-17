<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { Item } from "~/types";

defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="bg-popover border p-2 shadow-xl rounded-lg w-20 h-20 hover:scale-105 scale-100 transition-all cursor-pointer flex items-center justify-center"
  >
    <Icon :icon="`game-icons:${placeholder}`" class="w-12 h-12 opacity-70" />
  </div>
</template>

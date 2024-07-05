<script setup lang="ts">
const loading = ref(false);
</script>

<template>
  <div v-if="loading">
    <Skeleton class="h-28 w-28 rounded-full mx-auto mb-8" />
  </div>
  <div
    v-else
    class="h-28 w-28 bg-secondary rounded-full mb-8 shadow-lg mx-auto flex items-center justify-center"
  >
    <p class="text-2xl">T</p>
  </div>
</template>

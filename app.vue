<script setup lang="ts">
import Toaster from "@/components/ui/sonner/Sonner.vue";
import { useSupabase } from "@/composables/api/useSupabase";
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <Toaster />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

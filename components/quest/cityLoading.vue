<script setup lang="ts">
import Skeleton from "~/components/ui/skeleton/Skeleton.vue";
</script>

<template>
  <div>
    <Skeleton class="w-60 h-8 mb-4" />
    <div class="grid grid-cols-4 grid-flow-row gap-8 pb-16">
      <Skeleton class="h-[190px] col-span-2 w-full" />
      <Skeleton class="h-[190px] col-span-2 w-full" />
      <Skeleton class="h-[190px] col-span-2 w-full" />
      <Skeleton class="h-[190px] col-span-2 w-full" />
    </div>
  </div>
</template>

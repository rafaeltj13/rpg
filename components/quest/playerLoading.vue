<script setup lang="ts">
import Skeleton from "~/components/ui/skeleton/Skeleton.vue";
</script>

<template>
  <div class="grid grid-cols-4 grid-flow-row gap-8 pb-16">
    <Skeleton class="h-[190px] col-span-4 w-full" />
    <Skeleton class="h-[190px] col-span-4 w-full" />
    <Skeleton class="h-[190px] col-span-4 w-full" />
    <Skeleton class="h-[190px] col-span-4 w-full" />
  </div>
</template>

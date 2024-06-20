<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <h1 class="text-[64px] text-primary font-bold pb-8">{{ props.title }}</h1>
</template>

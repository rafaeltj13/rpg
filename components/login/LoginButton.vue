<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <NuxtLink to="/login">
    <Button variant="ghost" class="h-12">
      <Icon
        icon="game-icons:person"
        class="h-[1.5rem] w-[1.5rem] scale-100 transition-all hover:scale-110"
      />
      <span class="sr-only"> Login </span>
    </Button>
  </NuxtLink>
</template>

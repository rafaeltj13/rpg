<script setup lang="ts">
import { Icon } from "@iconify/vue";

const availableMails = 20;
</script>

<template>
  <NuxtLink
    to="/city/mailbox"
    :class="{
      'col-span-1': !availableMails,
      'col-span-2 bg-accent': availableMails > 0,
    }"
    class="col-span-1 h-40 border p-4 rounded-lg hover:scale-105 scale-100 transition-all cursor-pointer flex items-center justify-center shadow-lg hover:bg-actions-foreground hover:text-background gap-4"
  >
    <div class="flex flex-col items-center justify-center">
      <Icon icon="game-icons:mailbox" class="w-20 h-20" />
      <p v-if="!availableMails" class="text-xl font-semibold">Mailbox</p>
    </div>
    <div v-if="availableMails > 0">
      <p class="text-2xl">{{ availableMails }} available mails</p>
    </div>
  </NuxtLink>
</template>

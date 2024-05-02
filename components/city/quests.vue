<script setup lang="ts">
import { Icon } from "@iconify/vue";

const availableQuests = 40;
</script>

<template>
  <CityCard
    to="/quests"
    icon="stabbed-note"
    text="Quest Board"
    color="primary"
    :description="
      availableQuests > 0 ? `${availableQuests} available quests` : ''
    "
  />
</template>

<script setup lang="ts">
const availableQuests = 40;
</script>

<template>
  <CityLinkCard
    to="/city/quests"
    icon="stabbed-note"
    text="Quest Board"
    color="primary"
    :description="
      availableQuests > 0 ? `${availableQuests} available quests` : ''
    "
  />
</template>

<script setup lang="ts">
const quests = [
  {
    title: "Kill the dragon",
    description:
      "The dragon is terrorizing the village. Kill it and save the village.",
    honor: 100,
    gold: 100,
  },
  {
    title: "Kill the goblin",
    description:
      "The globin is breaking the village. Kill it and save the village.",
    honor: 150,
    gold: 150,
  },
  {
    title: "Kill the Wolf",
    description:
      "The wolf is eating the village. Kill it and save the village.",
    honor: 150,
    gold: 150,
  },
];
</script>

<template>
  <h1 class="text-[64px] text-primary font-bold pb-8">Quest Board</h1>
  <div class="grid grid-cols-8 grid-flow-row gap-8">
    <QuestItem v-for="quest of quests" :key="quest.title" :quest="quest" />
  </div>
</template>

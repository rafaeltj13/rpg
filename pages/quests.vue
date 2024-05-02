<script setup lang="ts">
const quests = [
  {
    title: "Kill the dragon",
    description:
      "The dragon is terrorizing the village. Kill it and save the village.",
    honor: 100,
    gold: 100,
    state: "available",
  },
  {
    title: "Kill the dragon",
    description:
      "The dragon is terrorizing the village. Kill it and save the village.",
    honor: 100,
    gold: 100,
    state: "available",
  },
  {
    title: "Kill the dragon",
    description:
      "The dragon is terrorizing the village. Kill it and save the village.",
    honor: 100,
    gold: 100,
    state: "available",
  },
  {
    title: "Kill the dragon",
    description:
      "The dragon is terrorizing the village. Kill it and save the village.",
    honor: 100,
    gold: 100,
    state: "available",
  },
  {
    title: "Kill the goblin",
    description:
      "The globin is breaking the village. Kill it and save the village.",
    honor: 150,
    gold: 150,
    state: "inProgress",
  },
  {
    title: "Kill the Wolf",
    description:
      "The wolf is eating the village. Kill it and save the village.",
    honor: 150,
    gold: 150,
    state: "done",
  },
  {
    title: "Kill the Wolf",
    description:
      "The wolf is eating the village. Kill it and save the village.",
    honor: 150,
    gold: 150,
    state: "done",
  },
];

const availableQuests = computed(() =>
  quests.filter((quest) => quest.state === "available")
);

const myQuests = computed(() =>
  quests.filter(
    (quest) => quest.state === "inProgress" || quest.state === "done"
  )
);
</script>

<template>
  <div>
    <h1 class="text-[64px] text-primary font-bold pb-8">Quest Board</h1>
    <h3 class="text-2xl font-semibold pb-4">Available quests</h3>
    <div class="grid grid-cols-8 grid-flow-row gap-8 pb-16">
      <QuestItem
        v-for="quest of availableQuests"
        :key="quest.title"
        :quest="quest"
      />
    </div>
    <h3 class="text-2xl font-semibold pb-4">My quests</h3>
    <div class="grid grid-cols-8 grid-flow-row gap-8 pb-16">
      <QuestItem v-for="quest of myQuests" :key="quest.title" :quest="quest" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { quests } from "~/mock/quests";

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
    <SharedPageTitle title="Quest Board" />
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

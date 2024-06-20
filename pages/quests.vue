<script setup lang="ts">
import { quests } from "~/mock/quests";

const inProgressQuests = computed(() =>
  quests.filter((quest) => quest.state === "inProgress")
);

const completedQuests = computed(() =>
  quests.filter((quest) => quest.state === "done")
);
</script>

<template>
  <div>
    <SharedPageTitle title="My Quests" />
    <div class="grid grid-cols-8 grid-flow-row gap-8 pb-16">
      <QuestItem
        v-for="quest of inProgressQuests"
        :key="quest.title"
        :quest="quest"
      />
    </div>
    <h3 class="text-2xl font-semibold pb-4">Completed:</h3>
    <div class="grid grid-cols-8 grid-flow-row gap-8 pb-16">
      <QuestItem
        v-for="quest of completedQuests"
        :key="quest.title"
        :quest="quest"
      />
    </div>
  </div>
</template>

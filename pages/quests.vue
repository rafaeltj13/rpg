<script setup lang="ts">
// import { quests } from "~/mock/quests";
import { useSupabase } from "~/composables/api/useSupabase";
import type { Quest } from "~/types";

const quests = ref<Quest[]>([]);

async function getCountries() {
  const { data } = await useSupabase().from("quests").select();
  quests.value = data as Quest[];
}

onMounted(() => {
  getCountries();
});
</script>

<template>
  <div>
    <SharedPageTitle title="My Quests" />
    <div class="grid grid-cols-8 grid-flow-row gap-8 pb-16">
      <QuestItem v-for="quest of quests" :key="quest.title" :quest="quest" />
    </div>
    <h3 class="text-2xl font-semibold pb-4">Completed:</h3>
    <div class="grid grid-cols-8 grid-flow-row gap-8 pb-16">
      <QuestItem v-for="quest of quests" :key="quest.title" :quest="quest" />
    </div>
  </div>
</template>

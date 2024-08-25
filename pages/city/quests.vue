<script setup lang="ts">
import { useSupabase } from "~/composables/api/useSupabase";
import type { Quest } from "~/types";

const quests = ref<Quest[]>([]);
const isLoading = ref(true);

async function getQuests() {
  isLoading.value = true;
  const { data } = await useSupabase().from("quests").select();
  quests.value = data as Quest[];
  isLoading.value = false;
}

getQuests();
</script>

<template>
  <div>
    <SharedPageTitle title="Quest Board" />
    <QuestCityLoading v-if="isLoading" />
    <div v-else>
      <h3 class="text-2xl font-semibold pb-4">Available quests</h3>
      <div class="grid grid-cols-8 grid-flow-row gap-8 pb-16">
        <QuestItem v-for="quest of quests" :key="quest.title" :quest="quest" />
      </div>
      <h3 class="text-2xl font-semibold pb-4">Finished quests</h3>
      <div class="grid grid-cols-8 grid-flow-row gap-8 pb-16">
        <QuestItem v-for="quest of quests" :key="quest.title" :quest="quest" />
      </div>
    </div>
  </div>
</template>

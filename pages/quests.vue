<script setup lang="ts">
// import { quests } from "~/mock/quests";
import { useSupabase } from "~/composables/api/useSupabase";
import type { Quest } from "~/types";

const quests = ref<Quest[]>([]);
const isLoading = ref(true);

async function getQuests() {
  isLoading.value = true;
  // TODO: get quests from player
  // const { data } = await useSupabase().from("quests").select();
  // quests.value = data as Quest[];
  isLoading.value = false;
}

getQuests();
console.log({ quests: quests.value });
</script>

<template>
  <div>
    <SharedPageTitle title="My Quests" />
    <QuestPlayerLoading v-if="isLoading" />
    <div v-if="quests.length === 0">
      <p class="text-left text-2xl">
        No quests found, go to the city to find a new quest
      </p>
    </div>
    <div v-else>
      <div class="grid grid-cols-8 grid-flow-row gap-8 pb-16">
        <QuestProgressItem
          v-for="quest of quests"
          :key="quest.title"
          :quest="quest"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuests } from "~/composables/api/useQuests";
import type { Quest } from "~/types/quest";

const playerStore = usePlayerStore();
const { playerId } = storeToRefs(playerStore);

const quests = ref<Quest[]>([]);
const isLoading = ref(true);

async function getQuests(playerId: number) {
  isLoading.value = true;

  const playerQuests = await useQuests().getPlayerQuests(playerId);
  quests.value = playerQuests as Quest[];

  isLoading.value = false;
}


onMounted(async () => {
  if (playerId.value) {
    await getQuests(playerId.value);
  }
});

watch(() => playerId.value, async (newPlayerId) => {
  if (newPlayerId) {
    await getQuests(newPlayerId);
  }
}, { immediate: true });
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

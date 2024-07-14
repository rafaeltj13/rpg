<script setup lang="ts">
import type { Location } from "~/types";
import { useLocations } from "~/composables/api/useLocations";

const { getExploreLocations } = useLocations();
const { playerState } = usePlayerStore();

const locations = ref<Location[]>([]);
const loading = ref(false);

async function getLocations() {
  loading.value = true;
  const data = await getExploreLocations(
    playerState.currentLocation?.area || ""
  );
  locations.value = data;
  loading.value = false;
}

// Watch for changes in the entire playerState
watch(
  () => playerState,
  (newState, oldState) => {
    if (newState.currentLocation?.id !== oldState.currentLocation?.id) {
      console.log("Player location changed", { newState, oldState });
      getLocations();
    }
  },
  { deep: true }
);

// Initial fetch of locations
onMounted(() => {
  getLocations();
});
</script>

<template>
  <div class="mx-auto">
    <SharedPageTitle title="Explore" />
    <div class="pt-6 grid grid-cols-5 gap-8">
      <SharedLocationExploreCard
        v-for="loc of locations.filter((loc) => loc.type !== 'city')"
        :key="loc.name"
        :location="loc"
      />
    </div>
  </div>
</template>

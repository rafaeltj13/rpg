<script setup lang="ts">
import type { Location } from "~/types";
import { useLocations } from "~/composables/api/useLocations";

const { getExploreLocations } = useLocations();
const { playerState } = usePlayerStore();

const locations = ref<Location[]>([]);
const loading = ref(true);

async function getLocations() {
  loading.value = true;
  const data = await getExploreLocations(
    playerState.currentLocation?.area || ""
  );
  locations.value = data;
  loading.value = false;
}

// Initial fetch of locations
onMounted(() => {
  getLocations();
});
</script>

<template>
  <div class="mx-auto">
    <SharedPageTitle title="Explore" />
    <div v-if="loading">
      <ExploreLoading />
    </div>
    <div v-else>
      <div class="pt-6 grid grid-cols-5 gap-8">
        <SharedLocationExploreCard
          v-for="loc of locations.filter((loc) => loc.type !== 'city')"
          :key="loc.name"
          :location="loc"
        />
      </div>
    </div>
  </div>
</template>

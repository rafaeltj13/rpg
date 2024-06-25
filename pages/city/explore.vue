<script setup lang="ts">
import type { Location } from "~/types";
import { useLocations } from "~/composables/api/useLocations";

const locations = ref<Location[]>([]);
const { getNearLocations } = useLocations();

async function getLocations() {
  const data = await getNearLocations();
  locations.value = data;
}

onMounted(() => {
  getLocations();
});
</script>

<template>
  <div class="mx-auto">
    <SharedPageTitle title="Explore" />
    <div class="pt-6 grid grid-cols-4 gap-8">
      <SharedLocationCard
        v-for="loc of locations.filter((loc) => loc.type !== 'city')"
        :key="loc.name"
        :location="loc"
      />
    </div>
  </div>
</template>

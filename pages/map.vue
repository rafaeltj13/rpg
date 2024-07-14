<script setup lang="ts">
import type { Location } from "~/types";
import { useLocations } from "~/composables/api/useLocations";

const { getMapLocations } = useLocations();

const locationByArea = ref<Record<string, Location[]> | never[]>({});
const loading = ref(true);

async function getLocations() {
  loading.value = true;
  locationByArea.value = await getMapLocations();
  console.log({ data: locationByArea.value });
  loading.value = false;
}

onMounted(() => {
  getLocations();
});
</script>

<template>
  <div>
    <SharedPageTitle title="Map" />
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div
        v-for="(area, index) in Object.entries(locationByArea)"
        :key="area[0]"
      >
        <div class="pt-6 grid grid-cols-5 gap-8">
          <SharedLocationCard
            v-for="location in area[1]"
            :key="location.name"
            :location="location"
          />
        </div>
        <div
          v-if="index < Object.entries(locationByArea).length - 1"
          class="w-full h-[0.1px] my-8 bg-primary"
        ></div>
      </div>
    </div>
  </div>
</template>

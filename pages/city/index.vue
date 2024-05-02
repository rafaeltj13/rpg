<script setup lang="ts">
const cityName = "Sole";

useHead({
  title: `${cityName} - miniRPG`,
});

const npcs = [];
</script>

<template>
  <div>
    <h1 class="text-[64px] text-primary font-bold pb-8">{{ cityName }}</h1>
    <div class="grid grid-cols-6 grid-flow-row gap-6">
      <CityQuests />
      <CityMerchant />
      <CityStudy />
      <CityTraining />
      <CityHotel />
      <CityExplore />
      <CityTravel />
      <CityMailbox />
    </div>
  </div>
</template>

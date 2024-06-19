<script setup lang="ts">
const cityName = "Sole";

useHead({
  title: `${cityName} - miniRPG`,
});
</script>

<template>
  <div>
    <h1 class="text-[64px] text-primary font-bold pb-8">{{ cityName }}</h1>
    <div class="grid grid-cols-6 grid-flow-row gap-6">
      <CityExplore />
      <CityQuests />
      <CityMerchant />
      <CityStudy />
      <CityTraining />
      <CityHotel />
      <CityTravel />
      <CityMailbox />
    </div>
  </div>
</template>

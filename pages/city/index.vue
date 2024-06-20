<script setup lang="ts">
const cityName = "Sole";

useHead({
  title: `${cityName} - miniRPG`,
});
</script>

<template>
  <div>
    <SharedPageTitle :title="cityName" />
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

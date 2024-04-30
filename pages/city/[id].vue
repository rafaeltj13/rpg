<script setup lang="ts">
const npcs = [];
</script>

<template>
  <div class="">
    <h1 class="text-[64px] text-primary font-semibold pb-8">Sole</h1>
    <div class="grid grid-cols-6 grid-flow-row gap-6">
      <CityMerchant />
      <CityQuests />
      <CityExplore />
      <CityStudy />
      <CityTraining />
      <CityHotel />
      <CityMailbox />
    </div>
  </div>
</template>

<script setup lang="ts">
import { soleFields, soleFieldsII, soleDungeon } from "~/mock";

const locations = [soleFields, soleFieldsII, soleDungeon];
</script>

<template>
  <div class="mx-auto">
    <SharedPageTitle title="Explore" />
    <div class="pt-6 grid grid-cols-4 gap-8">
      <SharedLocationCard
        v-for="loc of locations"
        :key="loc.name"
        :location="loc"
      />
    </div>
  </div>
</template>

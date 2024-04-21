<script setup lang="ts">
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingHero />
  <div class="max-w-[1366px] mx-auto px-8">
    <LandingTimeSection />
    <LandingSkillsSection />
    <LandingBento />
  </div>
  <LandingFooter />
</template>

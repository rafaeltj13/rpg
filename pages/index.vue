<script setup lang="ts">
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <div class="font-['Montserrat']">
    <LandingHero />
    <ClientOnly>
      <div class="max-w-[1366px] mx-auto px-8">
        <LandingTimeSection />
        <LandingSkillsSection />
        <LandingBento />
      </div>
    </ClientOnly>
    <LandingFooter />
  </div>
</template>

<script setup lang="ts">
const availableMails = 20;
</script>

<template>
  <CityLinkCard
    to="/city/mailbox"
    icon="mailbox"
    text="Mailbox"
    color="accent"
    :description="availableMails > 0 ? `${availableMails} available mails` : ''"
  />
</template>

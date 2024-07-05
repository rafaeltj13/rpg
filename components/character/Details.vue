<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { Player } from "~/types";
import dayjs from "dayjs";

defineProps<{
  player: Player;
}>();
</script>

<template>
  <div class="col-span-1 px-4">
    <CharacterProfilePicture />
    <div v-if="!player.honor" class="grid grid-cols-2 grid-rows-2 gap-20">
      <Skeleton class="h-12 w-36" />
      <Skeleton class="h-12 w-36" />
      <Skeleton class="h-12 w-36" />
      <Skeleton class="h-12 w-36" />
    </div>
    <div v-else>
      <div class="flex items-start justify-between">
        <ClientOnly>
          <div class="mb-4">
            <h5 class="text-2xl text-primary font-bold mb-2">Class</h5>
            <p class="flex items-center gap-2 font-bold">
              <SharedClassItem :icon="player.class?.icon" type="sm" />
            </p>
          </div>
        </ClientOnly>
        <div class="w-36 mb-8">
          <h5 class="text-2xl text-primary font-bold mb-2">Honor</h5>
          <p class="font-bold text-xl flex items-center gap-2">
            <Icon
              icon="game-icons:vertical-banner"
              class="h-12 w-12 text-primary"
            />
            {{ player.honor }}
          </p>
        </div>
      </div>
      <div class="flex items-start justify-between">
        <div class="col-span-1">
          <div class="mb-4">
            <h5 class="text-2xl text-primary font-bold mb-2">Location</h5>
            <p class="font-bold text-xl">{{ player.currentLocation.name }}</p>
          </div>
        </div>
        <div class="w-36 mb-8">
          <h5 class="text-2xl text-primary font-bold mb-2">Since</h5>
          <p class="font-bold text-xl">
            {{ dayjs(player.created_at).format("MMMM DD, YYYY") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { Player } from "~/types";
import dayjs from "dayjs";

const MAX_ATTRIBUTE = 100;
const player = ref<Player>({
  name: "TJ-",
  age: 27,
  country: "BR",
  honor: 260,
  created_at: new Date(),
  class: {
    name: "Swordsman",
    icon: "wood-axe",
  },
  currentLocation: {
    name: "Sole",
    type: "city",
    monsters: [],
    npcs: [],
  },
  attributes: {
    strength: 73,
    agility: 48,
    intelligence: 21,
    vitality: 68,
  },
});
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-1">
    <div class="col-span-2">
      <div class="flex items-center gap-6">
        <SharedPageTitle :title="player.name" />
        <img
          class="pb-8"
          :src="`https://flagsapi.com/${player.country}/flat/48.png`"
        />
      </div>
      <div class="mb-12 max-w-screen-sm">
        <h4 class="text-3xl text-primary font-bold mb-4">Strength</h4>
        <div
          class="mt-2 h-5 w-[100%] bg-rose-900 border-2 border-rose-600 rounded-sm relative shadow-lg"
        >
          <div
            :style="`width: ${
              (player.attributes.strength / MAX_ATTRIBUTE) * 100
            }%`"
            class="absolute bg-rose-700 rounded-xs h-4 bottom-0"
          ></div>
          <div
            class="h-full w-full flex items-center justify-center text-center"
          >
            <p
              class="text-xs text-background dark:text-foreground z-50 flex items-center gap-2"
            >
              {{ player.attributes.strength }} / {{ MAX_ATTRIBUTE }}
            </p>
          </div>
        </div>
      </div>
      <div class="mb-12 max-w-sc max-w-screen-sm">
        <h4 class="text-3xl text-primary font-bold mb-4">Agility</h4>
        <div
          class="mt-2 h-5 w-[100%] bg-lime-900 border-2 border-lime-700 rounded-sm relative shadow-lg"
        >
          <div
            :style="`width: ${
              (player.attributes.agility / MAX_ATTRIBUTE) * 100
            }%`"
            class="absolute bg-lime-700 rounded-xs h-4 bottom-0"
          ></div>
          <div
            class="h-full w-full flex items-center justify-center text-center"
          >
            <p
              class="text-xs text-background dark:text-foreground z-50 flex items-center gap-2"
            >
              {{ player.attributes.agility }} / {{ MAX_ATTRIBUTE }}
            </p>
          </div>
        </div>
      </div>
      <div class="mb-12 max-w-screen-sm">
        <h4 class="text-3xl text-primary font-bold mb-4">Intelligence</h4>
        <div
          class="mt-2 h-5 w-[100%] bg-sky-900 border-2 border-sky-700 rounded-sm relative shadow-lg"
        >
          <div
            :style="`width: ${
              (player.attributes.intelligence / MAX_ATTRIBUTE) * 100
            }%`"
            class="absolute bg-sky-700 rounded-xs h-4 bottom-0"
          ></div>
          <div
            class="h-full w-full flex items-center justify-center text-center"
          >
            <p
              class="text-xs text-background dark:text-foreground z-50 flex items-center gap-2"
            >
              {{ player.attributes.intelligence }} / {{ MAX_ATTRIBUTE }}
            </p>
          </div>
        </div>
      </div>
      <div class="mb-12 max-w-screen-sm">
        <h4 class="text-3xl text-primary font-bold mb-4">Vitality</h4>
        <div
          class="mt-2 h-5 w-[100%] bg-orange-900 border-2 border-orange-700 rounded-sm relative shadow-lg"
        >
          <div
            :style="`width: ${
              (player.attributes.vitality / MAX_ATTRIBUTE) * 100
            }%`"
            class="absolute bg-orange-700 rounded-xs h-4 bottom-0"
          ></div>
          <div
            class="h-full w-full flex items-center justify-center text-center"
          >
            <p
              class="text-xs text-background dark:text-foreground z-50 flex items-center gap-2"
            >
              {{ player.attributes.vitality }} / {{ MAX_ATTRIBUTE }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-1 px-4">
      <div
        class="h-28 w-28 bg-secondary rounded-full mb-8 shadow-lg mx-auto flex items-center justify-center"
      >
        <p class="text-2xl">T</p>
      </div>
      <div class="flex items-start justify-between">
        <div class="mb-4">
          <h5 class="text-2xl text-primary font-bold mb-2">Class</h5>
          <p class="flex items-center gap-2 font-bold">
            <SharedClassItem :icon="player.class?.icon" type="sm" />
          </p>
        </div>
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

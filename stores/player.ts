import { defineStore } from "pinia";
import type { Player } from "~/types";

const PLAYER_DEFAULT_STORE: Player = {
  name: "",
  age: 0,
  country: "",
  honor: 0,
  quests: [],
  completedQuests: [],
  currentLocation: {
    id: 0,
    created_at: 0,
    name: "",
    npcs: [],
    monsters: [],
    type: "city",
  },
  attributes: {
    strength: 0,
    agility: 0,
    intelligence: 0,
    vitality: 0,
  },
};

export const usePlayerStore = defineStore("playerStore", {
  state: () => PLAYER_DEFAULT_STORE,
  actions: {
    async fetch() {
      const infos = await $fetch("https://api.nuxt.com/modules/pinia");
      console.log(infos);
    },
  },
});

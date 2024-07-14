import { defineStore } from "pinia";
import type { Player } from "~/types";

const PLAYER_DEFAULT_STORE: Player = {
  name: "",
  age: 0,
  country: "",
  email: "",
  honor: 0,
  quests: [],
  completedQuests: [],
  currentLocation: {
    id: null,
    name: "",
    npcs: [],
    monsters: [],
    type: "city",
    area: "sole"
  },
  attributes: null,
};

export const usePlayerStore = defineStore("player", () => {
  const playerStateRef = ref<Player>(PLAYER_DEFAULT_STORE);

  const playerState = computed(() => playerStateRef.value);

  function setPlayerState({ player }: { player: Player | null }) {
    playerStateRef.value = player || PLAYER_DEFAULT_STORE;

    console.log('player store', {
      playerState: playerStateRef.value,
    });
  }

  return { playerStateRef, playerState, setPlayerState };
});

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
  currentLocation: null,
  attributes: null,
};

export const usePlayerStore = defineStore("player", () => {
  const playerStateRef = ref<Player>(PLAYER_DEFAULT_STORE);

  const playerState = computed(() => playerStateRef.value);

  function setPlayerState({ player }: { player: Player | null }) {
    playerStateRef.value = player || PLAYER_DEFAULT_STORE;

    console.log({
      playerState: playerStateRef.value,
    });
  }

  return { playerState, setPlayerState };
});

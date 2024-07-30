import { defineStore } from "pinia";
import type { Player } from "~/types";

const PLAYER_DEFAULT_STORE: Player = {
  id: null,
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
  attributes: {
    id: null,
    strength: 0,
    agility: 0,
    intelligence: 0,
    vitality: 0
  },
};

export const usePlayerStore = defineStore("player", () => {
  const playerStateRef = ref<Player>(PLAYER_DEFAULT_STORE);

  const playerState = computed(() => playerStateRef.value);
  const playerId = computed(() => playerStateRef.value.id)

  function setPlayerState({ player }: { player: Player | null }) {
    playerStateRef.value = player || PLAYER_DEFAULT_STORE;
    console.log({ playerStateRef: playerStateRef.value });
  }

  return { playerStateRef, playerState, playerId, setPlayerState };
});

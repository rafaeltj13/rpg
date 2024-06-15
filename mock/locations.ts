import { bat, boar, goblin, mite, wasp, wolf } from "./monsters";
import type { Location, Monster } from "@/types";

export const soleFields: Location = {
  name: "Sole Fields",
  npcs: [],
  monsters: [goblin, wolf],
  type: "forest",
};

export const soleDungeon: Location = {
  name: "Sole Dungeon",
  npcs: [],
  monsters: [bat, mite],
  type: "dungeon",
};

export const soleFieldsII: Location = {
  name: "Sole Fields II",
  npcs: [],
  monsters: [boar, wolf, wasp],
  type: "forest",
};

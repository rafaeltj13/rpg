import type { NPC } from ".";
import type { Monster } from "./monster";

export type Location = {
  id: number | null;
  created_at?: number;
  name: string;
  npcs: NPC[];
  monsters: Monster[];
  type: LocationType;
  area: string;
};

export type LocationType = "city" | "dungeon" | "forest";
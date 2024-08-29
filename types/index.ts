import type { Item } from "./item";
import type { Quest } from "./quest";

export type NPC = {
  id?: number;
  created_at?: number;
  name: string;
  type: "vendor" | "character";
  quests?: Quest[];
  items?: Item[];
};

export type Skill = {
  id?: number;
  created_at?: number;
  name: string;
  description: string;
  type: "active" | "passive";
  calculateDamage: (attribute: number) => number;
};
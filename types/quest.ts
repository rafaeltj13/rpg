import type { Item } from "./item";
import type { Monster } from "./monster";

export type Quest = {
  id?: number;
  created_at?: number;
  title: string;
  description: string;
  type: "hunt" | "gather" | "class";
  honor?: number;
  gold?: number;
  itens?: Item[];
};

export type QuestRequirements = {
  id?: number;
  created_at?: number;
  quest: Quest["id"];
  targetMonster: Monster["id"];
  targetItem: Item["id"];
  quantity: number;
};
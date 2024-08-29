import type { Item } from "./item";
import type { Monster } from "./monster";
import type { Player } from "./player";

export type Quest = {
  id?: number;
  created_at?: number;
  title: string;
  description: string;
  type: "hunt" | "gather" | "class";
  honor?: number;
  gold?: number;
  itens?: Item[];
  requirements: QuestRequirements;
};

export type QuestRequirements = {
  id?: number;
  created_at?: number;
  targetMonster: Monster;
  targetItem: Item;
  quantity: number;
};

export type PlayerQuest = {
  id?: number;
  created_at?: number;
  player: Player["id"];
  quest: Quest;
  status: "available" | "inProgress" | "completed";
  currentQuantity: number;
};

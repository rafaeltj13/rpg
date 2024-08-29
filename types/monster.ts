import type { Skill } from ".";
import type { Item } from "./item";
import type { Attributes } from "./player";

export type Monster = {
  id?: number;
  created_at?: number;
  name: string;
  description: string;
  honor: number;
  attributes?: Attributes;
  loots?: {
    item: Item;
    percentage: number;
  }[];
  icon: string;
  skills?: Skill[];
};
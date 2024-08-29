import type { Skill } from ".";
import type { Attributes, Class } from "./player";

export type Item = {
  id?: number;
  created_at?: number;
  name: string;
  icon: string;
  type?: ItemType;
  skill?: Skill;
  class?: Class;
  stats?: { type: Attributes }[];
  description?: string;
  strength?: number;
  agility?: number;
  intelligence?: number;
  vitality?: number;
};

export type ItemType =
  | "weapon"
  | "offHand"
  | "helmet"
  | "chest"
  | "gloves"
  | "boots"
  | "consumable"
  | "collectable";
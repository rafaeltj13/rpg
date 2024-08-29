import type { Item } from "./item";
import type { Quest } from "./quest";
import type { Location } from "./location";

export type Player = {
  id: number | null;
  created_at?: Date;
  name: string;
  age: number;
  country: string;
  email: string;
  honor: number;
  quests?: Quest["id"][];
  completedQuests?: Quest["id"][];
  currentLocation: Location;
  class?: Class;
  attributes: Attributes;
};

export type Class = {
  id?: number;
  created_at?: number;
  name: string;
  icon?: string;
};

export type Attributes = {
  id: number | null;
  created_at?: number;
  player?: number;
  strength: number;
  agility: number;
  intelligence: number;
  vitality: number;
};

export type Equipment = {
  id: number | null;
  created_at?: number;
  player: Player["id"];
  helmet: Item | null;
  chest: Item | null;
  gloves: Item | null;
  boots: Item | null;
  weapon: Item | null;
  offHand: Item | null;
};

export type InventorySlot = {
  id: number | null;
  created_at?: number;
  player: Player["id"];
  item: Item | null;
  quantity: number;
};

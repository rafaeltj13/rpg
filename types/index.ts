export type Player = {
  name: string;
  age: number;
  country: string;
  currentHp: number;
  honor: number;
  quests: Quest[];
  currentLocation: Location;
  inventory: Inventory;
  class: Class;
  attributes: Attributes;
  skills: Skill[];
};

export type Class = {
  name: string;
  icon: string;
};

export type Attributes = {
  strength: number;
  dexterity: number;
  intelligence: number;
  vitality: number;
};

export type Inventory = {
  heml: Item;
  chest: Item;
  boots: Item;
  weapon: Item;
  backpack: Item[];
};

export type Item = {
  name: string;
  icon: string;
  type: ItemType;
  stats?: { type: Attributes }[];
};

export type ItemType =
  | "weapon"
  | "heml"
  | "chest"
  | "boots"
  | "consumable"
  | "collectable";

export type Location = {
  name: string;
  npcs: NPC[];
  monsters: Monster[];
  type: LocationType;
};

export type LocationType = "city" | "dungeon" | "forest";

export type NPC = {
  name: string;
  type: "vendor" | "character";
  quests?: Quest[];
  items?: Item[];
};

export type Monster = {
  name: string;
  description: string;
  honor: number;
  attributes?: Attributes;
  loot?: {
    item: Item;
    percentage: number;
  }[];
  icon: string;
  skills?: Skill[];
};

export type Quest = {
  title: string;
  description: string;
  type: "hunt" | "gather";
  honor?: number;
  gold?: number;
  itens?: Item[];
  requirements?: {
    target: Monster | Item;
    goal: number;
  };
  state: "available" | "inProgress" | "done";
};

export type Skill = {
  name: string;
  description: string;
  type: "active" | "passive";
  calculateDamage: (attribute: number) => number;
};

export type Player = {
  name: string;
  age: number;
  country: string;
  currentHp: number;
  maxHp: number;
  honor: number;
  quests: Quest[];
  currentLocation: Location;
  inventory: Inventory;
  class: Class;
  attributes: Attributes;
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
  stats: { type: Attributes }[];
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
  monsters?: Monster[];
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
  maxHp: number;
  attributes: Attributes;
  loot: {
    item: Item;
    percentage: number;
  }[];
};

export type Quest = {
  name: string;
  description: string;
  type: "hunt" | "gather";
  reward: {
    honor?: number;
    gold?: number;
    item?: Item;
  };
  requirements: {
    target: Monster | Item;
    goal: number;
  };
};

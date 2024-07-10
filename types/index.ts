export type Player = {
  id?: number;
  created_at?: Date;
  name: string;
  age: number;
  country: string;
  email: string;
  honor: number;
  quests?: Quest[];
  completedQuests?: Quest[];
  currentLocation: Location["id"];
  inventory?: Inventory;
  class?: Class;
  attributes: Attributes["id"];
};

export type Class = {
  id?: number;
  created_at?: number;
  name: string;
  icon: string;
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

export type Inventory = {
  id?: number;
  created_at?: number;
  player: number;
  heml: Item;
  chest: Item;
  boots: Item;
  weapon: Item;
  backpack: Item[];
};

export type Item = {
  id?: number;
  created_at?: number;
  name: string;
  icon: string;
  type: ItemType;
  skill: Skill;
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
  id: number | null;
  created_at?: number;
  name: string;
  npcs: NPC[];
  monsters: Monster[];
  type: LocationType;
};

export type LocationType = "city" | "dungeon" | "forest";

export type NPC = {
  id?: number;
  created_at?: number;
  name: string;
  type: "vendor" | "character";
  quests?: Quest[];
  items?: Item[];
};

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

export type Quest = {
  id?: number;
  created_at?: number;
  title: string;
  description: string;
  type: "hunt" | "gather" | "class";
  honor?: number;
  gold?: number;
  itens?: Item[];
  requirements?: [
    {
      target: Monster | Item;
      goal: number;
    }
  ];
};

export type Skill = {
  id?: number;
  created_at?: number;
  name: string;
  description: string;
  type: "active" | "passive";
  calculateDamage: (attribute: number) => number;
};

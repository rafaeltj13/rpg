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
  currentLocation: Location;
  inventory?: Inventory;
  class?: Class;
  attributes: Attributes;
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
  player: Player["id"];
  heml: Item;
  chest: Item;
  gloves: Item;
  boots: Item;
  weapon: Item;
  offHand: Item;
  slot1: Item;
  slot2: Item;
  slot3: Item;
  slot4: Item;
  slot5: Item;
  slot6: Item;
  slot7: Item;
  slot8: Item;
  slot9: Item;
  slot10: Item;
  slot11: Item;
  slot12: Item;
  slot13: Item;
  slot14: Item;
  slot15: Item;
  slot16: Item;
  slot17: Item;
  slot18: Item;
  slot19: Item;
  slot20: Item;
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
  area: string
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

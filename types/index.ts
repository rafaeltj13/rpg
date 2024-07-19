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

export type Inventory = {
  id?: number;
  created_at?: number;
  player: Player["id"];
  helmet: Item | null;
  chest: Item | null;
  gloves: Item | null;
  boots: Item | null;
  weapon: Item | null;
  offHand: Item | null;
  slot1: ItemStack | null;
  slot2: ItemStack | null;
  slot3: ItemStack | null;
  slot4: ItemStack | null;
  slot5: ItemStack | null;
  slot6: ItemStack | null;
  slot7: ItemStack | null;
  slot8: ItemStack | null;
  slot9: ItemStack | null;
  slot10: ItemStack | null;
  slot11: ItemStack | null;
  slot12: ItemStack | null;
  slot13: ItemStack | null;
  slot14: ItemStack | null;
  slot15: ItemStack | null;
  slot16: ItemStack | null;
  slot17: ItemStack | null;
  slot18: ItemStack | null;
  slot19: ItemStack | null;
  slot20: ItemStack | null;
};

export type ItemStack = Item & {
  quantity?: number;
};

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

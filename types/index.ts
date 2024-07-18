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
  slot1: Item | null;
  slot2: Item | null;
  slot3: Item | null;
  slot4: Item | null;
  slot5: Item | null;
  slot6: Item | null;
  slot7: Item | null;
  slot8: Item | null;
  slot9: Item | null;
  slot10: Item | null;
  slot11: Item | null;
  slot12: Item | null;
  slot13: Item | null;
  slot14: Item | null;
  slot15: Item | null;
  slot16: Item | null;
  slot17: Item | null;
  slot18: Item | null;
  slot19: Item | null;
  slot20: Item | null;
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

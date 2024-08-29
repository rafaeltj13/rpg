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
  area: string;
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
};

export type QuestRequirements = {
  id?: number;
  created_at?: number;
  quest: Quest["id"];
  targetMonster: Monster["id"];
  targetItem: Item["id"];
  quantity: number;
};

export type Skill = {
  id?: number;
  created_at?: number;
  name: string;
  description: string;
  type: "active" | "passive";
  calculateDamage: (attribute: number) => number;
};

export type PlayerQuest = {
  id?: number;
  created_at?: number;
  player: Player["id"];
  quest: Quest["id"];
  status: "available" | "inProgress" | "completed";
};

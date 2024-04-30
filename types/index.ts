export type Player {
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
}

export type Class {
  name: string;
  icon: string;
}

export type Attributes {
  strength: number;
  dexterity: number;
  intelligence: number;
  vitality: number;
}

export type Inventory {
  heml: Item;
  chest: Item;
  boots: Item;
  weapon: Item;
  backpack: Item[];
}

export type Item {
  name: string;
  icon: string;
  type: ItemType;
  stats: { type: Attributes }[];
}
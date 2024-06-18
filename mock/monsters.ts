import type { Monster } from "@/types";
import {
  batWing,
  bowieKnife,
  goblinHand,
  hide,
  spiderWeb,
  waspWing,
} from "./itens";

export const wolf: Monster = {
  name: "Wolf",
  description: "A large, wild canine with sharp teeth and claws.",
  honor: 15,
  icon: "wolf-head",
  loot: [
    {
      item: hide,
      percentage: 90,
    },
  ],
  attributes: {
    strength: 2,
    dexterity: 2,
    vitality: 4,
    intelligence: 1,
  },
};

export const goblin: Monster = {
  name: "Goblin",
  description: "A small, green creature with a big nose and pointy ears.",
  honor: 10,
  icon: "goblin",
  loot: [
    {
      item: goblinHand,
      percentage: 80,
    },
    {
      item: bowieKnife,
      percentage: 10,
    },
  ],
  attributes: {
    strength: 3,
    dexterity: 1,
    vitality: 7,
    intelligence: 1,
  },
};

export const mite: Monster = {
  name: "Mite",
  description: "A small, annoying insect that feeds on blood.",
  honor: 10,
  icon: "mite",
  loot: [
    {
      item: spiderWeb,
      percentage: 60,
    },
  ],
  attributes: {
    strength: 3,
    dexterity: 5,
    vitality: 4,
    intelligence: 4,
  },
};

export const bat: Monster = {
  name: "Bat",
  description: "A flying mammal that feeds on insects.",
  honor: 20,
  icon: "bat",
  loot: [
    {
      item: batWing,
      percentage: 90,
    },
  ],
  attributes: {
    strength: 1,
    dexterity: 8,
    vitality: 3,
    intelligence: 6,
  },
};

export const boar: Monster = {
  name: "Boar",
  description: "A large, wild pig with sharp tusks.",
  honor: 20,
  icon: "boar",
  loot: [
    {
      item: hide,
      percentage: 90,
    },
  ],
  attributes: {
    strength: 5,
    dexterity: 2,
    vitality: 8,
    intelligence: 1,
  },
};

export const wasp: Monster = {
  name: "Wasp",
  description: "A flying insect with a painful sting.",
  honor: 10,
  icon: "wasp-sting",
  loot: [
    {
      item: waspWing,
      percentage: 80,
    },
  ],
  attributes: {
    strength: 3,
    dexterity: 7,
    vitality: 5,
    intelligence: 5,
  },
};

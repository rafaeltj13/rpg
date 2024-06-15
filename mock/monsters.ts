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
  maxHp: 15,
  damage: 7,
  exp: 15,
  icon: "wolf-head",
  loot: [
    {
      item: hide,
      percentage: 90,
    },
  ],
};

export const goblin: Monster = {
  name: "Goblin",
  description: "A small, green creature with a big nose and pointy ears.",
  maxHp: 10,
  damage: 5,
  exp: 10,
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
};

export const mite: Monster = {
  name: "Mite",
  description: "A small, annoying insect that feeds on blood.",
  maxHp: 10,
  damage: 5,
  exp: 10,
  icon: "mite",
  loot: [
    {
      item: spiderWeb,
      percentage: 60,
    },
  ],
};

export const bat: Monster = {
  name: "Bat",
  description: "A flying mammal that feeds on insects.",
  maxHp: 20,
  damage: 10,
  exp: 20,
  icon: "bat",
  loot: [
    {
      item: batWing,
      percentage: 90,
    },
  ],
};

export const boar: Monster = {
  name: "Boar",
  description: "A large, wild pig with sharp tusks.",
  maxHp: 20,
  damage: 10,
  exp: 20,
  icon: "boar",
  loot: [
    {
      item: hide,
      percentage: 90,
    },
  ],
};

export const wasp: Monster = {
  name: "Wasp",
  description: "A flying insect with a painful sting.",
  maxHp: 10,
  damage: 5,
  exp: 10,
  icon: "wasp-sting",
  loot: [
    {
      item: waspWing,
      percentage: 80,
    },
  ],
};

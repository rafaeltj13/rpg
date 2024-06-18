import type { Skill } from "@/types";

export const basicAttack: Skill = {
  name: "Basic Attack",
  description: "A basic attack that deals damage to the target.",
  type: "active",
  calculateDamage: (strength: number) => {
    return strength;
  },
};

export const basicSpell: Skill = {
  name: "Basic Spell",
  description: "A basic spell that deals damage to the target.",
  type: "active",
  calculateDamage: (intelligence: number) => {
    return intelligence * 1.1;
  },
};

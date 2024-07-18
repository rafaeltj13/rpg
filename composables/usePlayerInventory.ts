import type { Inventory, Item } from "~/types";

const weaponPlaceholder = "gladius";
const offHandPlaceholder = "shield";
const helmPlaceholder = "crested-helmet";
const chestPlaceholder = "breastplate";
const glovesPlaceholder = "gauntlet";
const bootsPlaceholder = "leg-armor";

const PLACEHOLDERS = {
  weapon: weaponPlaceholder,
  offHand: offHandPlaceholder,
  helm: helmPlaceholder,
  chest: chestPlaceholder,
  gloves: glovesPlaceholder,
  boots: bootsPlaceholder,
}

export const usePlayerInventory = ({myInventory}: {myInventory: Inventory}) => {
  const backpack = ref(Object.entries(myInventory)
   .filter(([key]) => key.startsWith("slot"))
    .map(([_, value]) => value));

  const getEquipmentItem = (key: string): Item => {
    const item = myInventory[key as keyof Inventory];
    if (item && typeof item === 'object') {
      return item as Item;
    }
    return {
      name: "Empty",
      icon: `${PLACEHOLDERS[key as keyof typeof PLACEHOLDERS]}`,
    };
  };
  
  return { backpack, getEquipmentItem };
};
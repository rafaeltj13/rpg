import type { Equipment, InventorySlot, Item } from "~/types";
import { useInventories } from "~/composables/api/useInventories";

const weaponPlaceholder = "gladius";
const offHandPlaceholder = "shield";
const helmPlaceholder = "crested-helmet";
const chestPlaceholder = "breastplate";
const glovesPlaceholder = "gauntlet";
const bootsPlaceholder = "leg-armor";

const PLACEHOLDERS = {
  weapon: weaponPlaceholder,
  offHand: offHandPlaceholder,
  helmet: helmPlaceholder,
  chest: chestPlaceholder,
  gloves: glovesPlaceholder,
  boots: bootsPlaceholder,
}

export const usePlayerInventory = () => {
  const { getPlayerInventorySlots, getPlayerEquipment } = useInventories();
  const playerStore = usePlayerStore();
  const { playerId } = storeToRefs(playerStore);

  const inventory = ref<InventorySlot[] | null>(null);
  const equipment = ref<Equipment | null>(null);

  const fetchInventory = async () => {
    if (playerId.value) {
      inventory.value = await getPlayerInventorySlots(playerId.value);
      equipment.value = await getPlayerEquipment(playerId.value);
    }
  };

  const getEquipmentItem = (key: string): Item => {
    const equipmentSlot = equipment.value?.[key as keyof Equipment];

    if (!equipmentSlot) {
      return {
        name: "Empty",
        icon: `${PLACEHOLDERS[key as keyof typeof PLACEHOLDERS]}`,
      };
    }
    
    return equipmentSlot as Item;
  };
  
  onMounted(fetchInventory);
  watch(playerId, fetchInventory);

  return { inventory, equipment, getEquipmentItem, fetchInventory };
};
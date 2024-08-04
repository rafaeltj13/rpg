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
  const { getPlayerInventorySlots, getPlayerEquipment, switchInventorySlot, updateEquipment } = useInventories();
  const playerStore = usePlayerStore();
  const { playerId } = storeToRefs(playerStore);

  const isLoading = ref(true);

  const inventory = ref<InventorySlot[] | null>(null);
  const equipment = ref<Equipment | null>(null);

  const fetchInventory = async () => {
    if (playerId.value) {
      isLoading.value = true;
      inventory.value = await getPlayerInventorySlots(playerId.value);
      equipment.value = await getPlayerEquipment(playerId.value);
      isLoading.value = false;
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

  const handleEquip = async (item: Item, equippedItem: Item, equipSlot: keyof Equipment, inventorySlotId: number) => {
    await updateEquipment(playerId.value, item, equipSlot);
    await switchInventorySlot(equippedItem, inventorySlotId);

    fetchInventory();
  };

  onMounted(fetchInventory);
  watch(playerId, fetchInventory);

  return { inventory, equipment, getEquipmentItem, fetchInventory, isLoading, handleEquip };
};
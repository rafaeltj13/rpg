import { useSupabase } from "~/composables/api/useSupabase";
import type { Equipment, InventorySlot, Item } from "~/types";

export const useInventories = () => {
  const getPlayerEquipment = async (playerId: number) => {
    const { data, error } = await useSupabase()
      .from("equipments")
      .select(`
        *,
        helmet(*),
        chest(*),
        boots(*),
        gloves(*),
        weapon(*),
        offHand(*)
      `)
      .eq("player", playerId)
      .single();

    if (error || !data) {
      console.error("Error fetching player equipment:", error);
      return null;
    }

    return data as unknown as Equipment;
  };

  const getPlayerInventorySlots = async (playerId: number) => {
    const { data, error } = await useSupabase()
      .from("inventorySlots")
      .select(`
        *,
        item (
          *
        )
      `)
      .eq("player", playerId)
      .order("id", { ascending: false })

    if (error || !data) {
      console.error("Error fetching player inventory:", error);
      return null;
    }

    return data as unknown as InventorySlot[];
  };

  const updateEquipment = async (playerId: number | null, itemToBeEquipped: Item, slot: keyof Equipment) => {
    await useSupabase()
      .from("equipments")
      .update({ [slot]: itemToBeEquipped.id })
      .eq("player", playerId)
  };

  const switchInventorySlot = async (itemToInventory: Item, slotId: number) => {
    await useSupabase()
      .from("inventorySlots")
      .update({ item: itemToInventory.id })
      .eq("id", slotId)
  };

  return {  
    getPlayerEquipment,
    getPlayerInventorySlots,
    updateEquipment,
    switchInventorySlot
  };
};
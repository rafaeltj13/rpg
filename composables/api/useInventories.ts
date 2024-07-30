import { useSupabase } from "~/composables/api/useSupabase";
import type { Equipment, InventorySlot } from "~/types";

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

    if (error || !data) {
      console.error("Error fetching player inventory:", error);
      return null;
    }

    return data as unknown as InventorySlot[];
  };

  return {
    getPlayerEquipment,
    getPlayerInventorySlots
  };
};

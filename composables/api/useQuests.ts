import { useSupabase } from "~/composables/api/useSupabase";
import type { Location, Quest } from "~/types";

export const useQuests = () => {
  const getPlayerQuests = async (playerId: number) => {
    const { data, error } = await useSupabase()
      .from("playerQuests")
      .select(`*, quests(*)`)
      .eq("player", playerId)

    if (error) return [];

    return data as unknown as Quest[];
  };

  return {
    getPlayerQuests,
  };
};

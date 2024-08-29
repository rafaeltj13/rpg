import { useSupabase } from "~/composables/api/useSupabase";
import type { PlayerQuest } from "~/types/quest";

export const useQuests = () => {
  const getPlayerQuests = async (playerId: number) => {
    const { data, error } = await useSupabase()
      .from("playerQuests")
      .select(`*, quest(*, requirements(*, targetMonster(*), targetItem(*)))`)
      .eq("player", playerId);

    if (error) return [];

    console.log(data);

    return data as unknown as PlayerQuest[];
  };

  return {
    getPlayerQuests,
  };
};

import { useSupabase } from "~/composables/api/useSupabase";
import type { Location } from "~/types";

export const useLocations = () => {
  const getNearLocations = async () => {
    const { data, error } = await useSupabase()
      .from("locations")
      .select(`*, monsters(*, loots(*, item(*)))`)
      .neq("type", "city");

    if (error) return [];

    return data as unknown as Location[];
  };

  return {
    getNearLocations,
  };
};

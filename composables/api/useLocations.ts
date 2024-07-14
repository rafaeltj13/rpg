import { useSupabase } from "~/composables/api/useSupabase";
import type { Location } from "~/types";

export const useLocations = () => {
  const getExploreLocations = async (playerArea: string) => {
    const { data, error } = await useSupabase()
      .from("locations")
      .select(`*, monsters(*, loots(*, item(*)))`)
      .eq("area", playerArea)
      .neq("type", "city")

    if (error) return [];

    return data as unknown as Location[];
  };

  
  const getMapLocations = async () => {
    const { data, error } = await useSupabase()
    .from("locations")
    .select(`*, monsters(*, loots(*, item(*)))`)
    .order('area')

    if (error) return [];

    const groupedLocations: Record<string, Location[]> = data.reduce((acc, location) => {
      if (!acc[location.area]) {
        acc[location.area] = [];
      }
      acc[location.area].push(location);
      return acc;
    }, {});

    return groupedLocations;
  };

  return {
    getExploreLocations,
    getMapLocations,
  };
};

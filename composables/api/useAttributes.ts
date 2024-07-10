import { useSupabase } from "~/composables/api/useSupabase";
import type { Attributes } from "~/types";

export const useAttributes = () => {
  const createAttributes = async ({
    strength,
    agility,
    intelligence,
    vitality,
  }: {
    strength: number;
    agility: number;
    intelligence: number;
    vitality: number;
  }) => {
    const { data, error } = await useSupabase().from("attributes").insert([{ strength, agility, intelligence, vitality }]).select().single()

    if (error) {
      console.error("Error creating attributes:", error);
      return null;
    }
    
    return data as unknown as Attributes;
  };

  return {
    createAttributes,
  };
};

import { useSupabase } from "~/composables/api/useSupabase";
import type { Player } from "~/types";
import { useAttributes } from "./useAttributes";

export const usePlayer = () => {
  const createPlayer = async ({
    name,
    age,
    country,
    email,
  }: {
    name: string;
    age: number;
    country: string;
    email: string;
  }) => {
    const attributes = await useAttributes().createAttributes({
      strength: 0,
      agility: 0,
      intelligence: 0,
      vitality: 0,
    });

    if (!attributes) {
      console.error("Error creating attributes for player");
      return null;
    }

    const { data, error } = await useSupabase()
        .from("players")    
        .insert([{ name, age, country, email, currentLocation: 1, attributes: attributes.id }])
        .select()
        .single();

    if (error) {
      console.error("Error creating player:", error);
      return null;
    }

    return data as unknown as Player;
  };

  const getPlayerByEmail = async (email: string) => {
    const { data, error } = await useSupabase()
      .from("players")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      console.error("Error fetching player by email:", error);
      return null;
    }

    return data as Player;
  };

  return {
    createPlayer,
    getPlayerByEmail,
  };
};

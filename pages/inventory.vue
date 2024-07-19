<script setup lang="ts">
import type { Inventory, Item } from "~/types";

const myInventory = ref<Inventory>({
  player: 1,
  helmet: {
    id: 1,
    name: "Steel Helmet",
    description: "A helmet made of steel",
    icon: "visored-helm",
    type: "helmet",
  },
  chest: {
    id: 2,
    name: "Iron Chestplate",
    description: "A chestplate made of iron",
    icon: "breastplate",
    type: "chest",
    strength: 3,
    vitality: 5,
    intelligence: 2,
    agility: 1,
  },
  gloves: null,
  boots: {
    id: 4,
    name: "Leather Boots",
    description: "Boots made of leather",
    icon: "boots",
    type: "boots",
  },
  weapon: {
    id: 5,
    name: "Iron Sword",
    description: "A sword made of iron",
    icon: "broadsword",
    type: "weapon",
  },
  offHand: {
    id: 6,
    name: "Wooden Shield",
    description: "A shield made of wood",
    icon: "wood-frame",
    type: "offHand",
  },
  slot1: {
    id: 7,
    name: "Health Potion",
    description: "Heals 50 health",
    icon: "potion-ball",
    type: "consumable",
    quantity: 2,
  },
  slot2: {
    id: 8,
    name: "Mana Potion",
    description: "Heals 50 health",
    icon: "magic-potion",
    type: "consumable",
    quantity: 4,
  },
  slot3: {
    id: 9,
    name: "Gold Coin",
    icon: "coins",
    type: "collectable",
    quantity: 1,
  },
  slot4: {
    id: 10,
    name: "Silver Ore",
    description: "Used to smelt silver",
    icon: "ore",
    type: "collectable",
    quantity: 2,
  },
  slot5: {
    id: 11,
    name: "Iron Ore",
    description: "Used to smelt iron",
    icon: "rock",
    type: "collectable",
    quantity: 2,
  },
  slot6: {
    id: 12,
    name: "Wood Log",
    description: "Used to make a wooden bow",
    icon: "wood-stick",
    type: "collectable",
    quantity: 12,
  },
  slot7: {
    id: 13,
    name: "Fishing Rod",
    description: "Used to catch fish",
    icon: "fishing-pole",
    type: "weapon",
  },
  slot8: {
    id: 14,
    name: "Raw Fish",
    description: "Used to make a cooked fish",
    icon: "salmon",
    type: "consumable",
  },
  slot9: {
    id: 15,
    name: "Cooked Fish",
    description: "Used to make a fish stew",
    icon: "fish-cooked",
    type: "consumable",
  },
  slot10: {
    id: 16,
    name: "Magic Scroll",
    description: "Used to cast a magic spell",
    icon: "scroll-unfurled",
    type: "consumable",
  },
  slot11: {
    id: 17,
    name: "Leather",
    description: "Used to make a leather armor",
    icon: "animal-hide",
    type: "collectable",
  },
  slot12: {
    id: 18,
    name: "Iron Chestplate",
    description: "A chestplate made of iron",
    icon: "breastplate",
    type: "chest",
    strength: 2,
    vitality: 10,
    intelligence: 5,
    agility: 1,
    class: {
      id: 1,
      name: "Knight",
    },
  },
  slot13: {
    id: 19,
    name: "Gem",
    description: "Used to make a gem",
    icon: "gems",
    type: "collectable",
  },
  slot14: {
    id: 20,
    name: "Arrow",
    description: "Used to make a bow",
    icon: "arrow-dunk",
    type: "offHand",
  },
  slot15: {
    id: 21,
    name: "Bow",
    description: "Used to make a bow",
    icon: "bow-arrow",
    type: "weapon",
  },
  slot16: {
    id: 22,
    name: "Staff",
    description: "Used to make a staff",
    icon: "wizard-staff",
    type: "weapon",
  },
  slot17: {
    id: 23,
    name: "Dagger",
    description: "Used to make a dagger",
    icon: "daggers",
    type: "weapon",
  },
  slot18: {
    id: 24,
    name: "Axe",
    description: "Used to chop trees",
    icon: "battle-axe",
    type: "weapon",
  },
  slot19: {
    id: 25,
    name: "Pickaxe",
    description: "Used to mine rocks",
    icon: "war-pick",
    type: "weapon",
  },
  slot20: null,
});

const { backpack, getEquipmentItem } = usePlayerInventory({
  myInventory: myInventory.value,
});

const compareItem = ref<Item | undefined>();
const itemToBeCompared = ref<Item | undefined>();

const handleClickItem = (item: Item | undefined) => {
  if (!item) {
    compareItem.value = undefined;
    itemToBeCompared.value = undefined;
    return;
  }

  if (
    item.type === "weapon" ||
    item.type === "offHand" ||
    item.type === "helmet" ||
    item.type === "boots" ||
    item.type === "gloves" ||
    item.type === "chest"
  ) {
    compareItem.value = item;
    itemToBeCompared.value = getEquipmentItem(item.type);
    return;
  }
};
</script>

<template>
  <div class="mx-auto">
    <SharedPageTitle title="Inventory" />
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1 grid grid-cols-5 gap-4 pr-12">
        <div
          v-for="(item, index) in backpack"
          :key="index"
          @click="handleClickItem(item as Item)"
        >
          <SharedInventoryItem :item="item as Item | undefined" />
        </div>
      </div>
      <div class="col-span-1">
        <p class="text-center text-2xl font-bold mb-6 text-primary px-40">
          Equipment
        </p>
        <div class="grid grid-cols-3 gap-4 w-full px-40">
          <SharedInventoryEquipItem :item="getEquipmentItem('weapon')" />
          <SharedInventoryEquipItem :item="getEquipmentItem('helmet')" />
          <SharedInventoryEquipItem :item="getEquipmentItem('offHand')" />
          <SharedInventoryEquipItem :item="getEquipmentItem('gloves')" />
          <SharedInventoryEquipItem :item="getEquipmentItem('chest')" />
          <SharedInventoryEquipItem :item="getEquipmentItem('boots')" />
        </div>
        <div class="" v-if="compareItem">
          <SharedInventoryCompare
            :item="compareItem"
            :itemToBeCompared="itemToBeCompared"
          />
        </div>
      </div>
    </div>
  </div>
</template>

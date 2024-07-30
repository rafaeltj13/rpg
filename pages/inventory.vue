<script setup lang="ts">
import type { Item } from "~/types";

const { inventory, equipment, getEquipmentItem } = usePlayerInventory();

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
    itemToBeCompared.value = getEquipmentItem(item.type) as Item | undefined;
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
          v-for="(inventorySlot, index) in inventory"
          :key="index"
          @click="handleClickItem(inventorySlot.item as Item)"
        >
          <SharedInventoryItem
            :item="inventorySlot.item as Item | undefined"
            :quantity="inventorySlot.quantity"
          />
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

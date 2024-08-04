<script setup lang="ts">
import type { Equipment, Item } from "~/types";

const { inventory, getEquipmentItem, isLoading, handleEquip } =
  usePlayerInventory();

const compareItem = ref<Item | undefined>();
const compareItemSlot = ref<number | undefined>();
const itemToBeCompared = ref<Item | undefined>();
const equipSlot = ref<keyof Equipment | undefined>();

const handleClickItem = (item: Item | undefined, inventorySlotId: number) => {
  if (!item) {
    compareItem.value = undefined;
    itemToBeCompared.value = undefined;
    compareItemSlot.value = undefined;
    equipSlot.value = undefined;

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
    compareItemSlot.value = inventorySlotId;
    equipSlot.value = item.type;

    return;
  }
};

const handleEquipItem = () => {
  if (
    compareItem.value &&
    itemToBeCompared.value &&
    equipSlot.value &&
    compareItemSlot.value
  ) {
    handleEquip(
      compareItem.value,
      itemToBeCompared.value,
      equipSlot.value,
      compareItemSlot.value
    );
  }

  itemToBeCompared.value = undefined;
  compareItem.value = undefined;
  compareItemSlot.value = undefined;
  equipSlot.value = undefined;
};
</script>

<template>
  <div class="mx-auto">
    <SharedPageTitle title="Inventory" />
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1 grid grid-cols-5 gap-4 pr-12">
        <div
          v-for="(inventorySlot, index) in isLoading
            ? Array(20).fill({})
            : inventory"
          :key="index"
          @click="handleClickItem(inventorySlot.item as Item, inventorySlot.id)"
        >
          <SharedInventoryItem
            :item="inventorySlot.item as Item | undefined"
            :quantity="inventorySlot.quantity"
            :isLoading="isLoading"
          />
        </div>
      </div>
      <div class="col-span-1">
        <p class="text-center text-2xl font-bold mb-6 text-primary px-40">
          Equipment
        </p>
        <div class="grid grid-cols-3 gap-4 w-full px-40">
          <SharedInventoryEquipItem
            :item="getEquipmentItem('weapon')"
            :isLoading="isLoading"
          />
          <SharedInventoryEquipItem
            :item="getEquipmentItem('helmet')"
            :isLoading="isLoading"
          />
          <SharedInventoryEquipItem
            :item="getEquipmentItem('offHand')"
            :isLoading="isLoading"
          />
          <SharedInventoryEquipItem
            :item="getEquipmentItem('gloves')"
            :isLoading="isLoading"
          />
          <SharedInventoryEquipItem
            :item="getEquipmentItem('chest')"
            :isLoading="isLoading"
          />
          <SharedInventoryEquipItem
            :item="getEquipmentItem('boots')"
            :isLoading="isLoading"
          />
        </div>
        <div class="" v-if="compareItem">
          <SharedInventoryCompare
            :item="compareItem"
            :itemToBeCompared="itemToBeCompared"
            @equip="handleEquipItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

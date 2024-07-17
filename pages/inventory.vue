<script setup lang="ts">
const inventory = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const weaponPlaceholder = "gladius";
const offHandPlaceholder = "shield";
const helmPlaceholder = "crested-helmet";
const chestPlaceholder = "breastplate";
const glovesPlaceholder = "gauntlet";
const bootsPlaceholder = "leg-armor";
</script>

<template>
  <div class="mx-auto">
    <SharedPageTitle title="Inventory" />
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1 grid grid-cols-6 gap-4">
        <SharedInventoryItem v-for="item in inventory" :key="item" />
      </div>
      <div class="col-span-1">
        <div class="grid grid-cols-3 gap-4 w-full px-40">
          <SharedInventoryEquipItem :placeholder="weaponPlaceholder" />
          <SharedInventoryEquipItem :placeholder="helmPlaceholder" />
          <SharedInventoryEquipItem :placeholder="offHandPlaceholder" />
          <SharedInventoryEquipItem :placeholder="glovesPlaceholder" />
          <SharedInventoryEquipItem :placeholder="chestPlaceholder" />
          <SharedInventoryEquipItem :placeholder="bootsPlaceholder" />
        </div>
        <div class="">
          <SharedInventoryCompare />
        </div>
      </div>
    </div>
  </div>
</template>

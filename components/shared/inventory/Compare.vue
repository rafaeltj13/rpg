<script setup lang="ts">
import type { Item } from "~/types";

defineProps({
  item: {
    type: Object as PropType<Item>,
    required: false,
  },
  itemToBeCompared: {
    type: Object as PropType<Item>,
    required: false,
  },
});

defineEmits(["equip"]);
</script>

<template>
  <div
    class="flex items-center justify-center gap-4 mt-8 px-24"
    v-if="item && itemToBeCompared"
  >
    <SharedInventoryItem :item="item" />
    <div class="min-w-32 flex flex-col items-center justify-center">
      <p
        :class="
          (item?.strength ?? 0) > (itemToBeCompared?.strength ?? 0)
            ? 'text-green-500'
            : 'text-red-500'
        "
        class="text-md"
      >
        {{
          (item?.strength ?? 0) - (itemToBeCompared?.strength ?? 0) >= 0
            ? "+"
            : ""
        }}{{ (item?.strength ?? 0) - (itemToBeCompared?.strength ?? 0) }}
        Strength
      </p>
      <p
        :class="
          (item?.vitality ?? 0) > (itemToBeCompared?.vitality ?? 0)
            ? 'text-green-500'
            : 'text-red-500'
        "
        class="text-md"
      >
        {{
          (item?.vitality ?? 0) - (itemToBeCompared?.vitality ?? 0) >= 0
            ? "+"
            : ""
        }}{{ (item?.vitality ?? 0) - (itemToBeCompared?.vitality ?? 0) }}
        Vitality
      </p>
      <p
        :class="
          (item?.intelligence ?? 0) > (itemToBeCompared?.intelligence ?? 0)
            ? 'text-green-500'
            : 'text-red-500'
        "
        class="text-md"
      >
        {{
          (item?.intelligence ?? 0) - (itemToBeCompared?.intelligence ?? 0) >= 0
            ? "+"
            : ""
        }}{{
          (item?.intelligence ?? 0) - (itemToBeCompared?.intelligence ?? 0)
        }}
        Intelligence
      </p>
      <p
        :class="
          (item?.agility ?? 0) > (itemToBeCompared?.agility ?? 0)
            ? 'text-green-500'
            : 'text-red-500'
        "
        class="text-md"
      >
        {{
          (item?.agility ?? 0) - (itemToBeCompared?.agility ?? 0) >= 0
            ? "+"
            : ""
        }}{{ (item?.agility ?? 0) - (itemToBeCompared?.agility ?? 0) }} Agility
      </p>
      <Button @click="$emit('equip')" class="mx-auto mt-4" variant="default"
        >Equip</Button
      >
    </div>
    <SharedInventoryItem :item="itemToBeCompared" />
  </div>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { Item, Location } from "@/types";
import { Icon } from "@iconify/vue";

const props = defineProps<{ location: Location }>();

const icon = computed(() => {
  switch (props.location.type) {
    case "forest":
      return "forest-entrance";
    case "dungeon":
      return "dungeon-gate";
    default:
      return "village";
  }
});

const completeLoot: ComputedRef<Item[]> = computed(() => {
  return props.location.monsters
    .map((monster) => {
      return (monster.loot || []).map((loot) => {
        return loot.item;
      });
    })
    .flat() as Item[];
});
</script>

<template>
  <Drawer>
    <DrawerTrigger>
      <div
        class="h-full col-span-1 border-2 p-4 rounded-xl hover:scale-105 scale-100 transition-all cursor-pointer flex flex-col items-start justify-start shadow-lg hover:bg-actions-foreground hover:text-background gap-3"
      >
        <div class="flex items-center justify-between w-full">
          <Icon :icon="`game-icons:${icon}`" class="w-8 h-8 cursor-pointer" />
          <p class="text-md font-bold">1 - 10</p>
        </div>
        <p class="flex gap-4 text-xl font-bold">{{ props.location.name }}</p>
        <div class="w-full pt-2">
          <div class="gap-4 flex flex-wrap">
            <Icon
              v-for="(monster, index) of location.monsters"
              :key="monster.name + index"
              :icon="`game-icons:${monster.icon}`"
              class="w-8 h-8"
            />
          </div>
          <div v-if="completeLoot.length">
            <div class="w-[80%] h-[0.25px] bg-primary my-3 px-2"></div>
            <div class="gap-2 flex flex-wrap">
              <Icon
                v-for="(item, index) of completeLoot"
                :key="item.name + index"
                :icon="`game-icons:${item.icon}`"
                class="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm py-4">
        <DrawerHeader>
          <DrawerTitle class="text-4xl mb-2">{{ location.name }}</DrawerTitle>
        </DrawerHeader>
        <DrawerDescription>
          <div
            v-for="(monster, index) of location.monsters"
            :key="monster.name + index"
          >
            <div class="flex items-center gap-2">
              <Icon :icon="`game-icons:${monster.icon}`" class="w-8 h-8" />
              <p>{{ monster.name }} - HP: {{ monster.maxHp }}</p>
            </div>
            <div class="flex items-center gap-2 flex-wrap pt-1">
              <Icon
                v-for="(loot, index) of monster.loot || []"
                :key="loot.item.icon + index"
                :icon="`game-icons:${loot.item.icon}`"
                class="w-6 h-6"
              />
            </div>
            <div
              v-if="index + 1 !== location.monsters.length"
              class="w-[80%] h-[0.25px] bg-primary my-3"
            ></div>
          </div>
          <div class="py-6">Hour(s)</div>
        </DrawerDescription>
        <div
          class="w-full pb-4 px-4 flex items-center justify-center md:justify-start gap-4"
        >
          <DrawerClose>
            <Button variant="outline"> Cancel </Button>
          </DrawerClose>
          <Button size="lg">Hunt</Button>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>

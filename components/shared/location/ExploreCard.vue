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
import type { Location } from "@/types";
import { Icon } from "@iconify/vue";

const router = useRouter();
const props = defineProps<{ location: Location }>();

const time = ref<number>(30);

const typeIcon = computed(() => {
  switch (props.location.type) {
    case "forest":
      return "forest-entrance";
    case "dungeon":
      return "dungeon-gate";
    default:
      return "village";
  }
});

const hunt = () => {
  router.push({ name: "busy" });
};
</script>

<template>
  <Drawer>
    <DrawerTrigger>
      <SharedLocationCard :location="location" />
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm py-4">
        <DrawerHeader class="px-0">
          <DrawerTitle class="text-4xl mb-2 flex gap-2 px-0"
            ><Icon
              :icon="`game-icons:${typeIcon}`"
              class="w-8 h-8 cursor-pointer"
            />{{ location.name }}</DrawerTitle
          >
        </DrawerHeader>
        <DrawerDescription>
          <div
            v-for="(monster, index) of location.monsters"
            :key="monster.name + index"
          >
            <div class="flex items-center gap-2">
              <SharedItem :icon="monster.icon" iconStyle="w-10 h-10 pb-1" />
              <p class="text-lg">
                {{ monster.name }} - HP: {{ monster.attributes?.vitality }}
              </p>
            </div>
            <div
              v-for="(loot, index) of monster.loots || []"
              :key="loot.item.icon + index"
              class="flex items-center gap-2 flex-wrap py-1"
            >
              <SharedItem :icon="loot.item.icon" iconStyle="w-5 h-5" />
              <p class="text-xs">
                {{ loot.item.name }} - {{ loot.percentage }}%
              </p>
            </div>
            <div
              v-if="index + 1 !== location.monsters.length"
              class="w-[80%] h-[0.25px] bg-primary my-3"
            ></div>
          </div>
          <SharedTimeInput v-model="time" />
        </DrawerDescription>
        <div
          class="w-full pb-4 flex items-center justify-center md:justify-start gap-4"
        >
          <DrawerClose>
            <Button variant="outline"> Cancel </Button>
          </DrawerClose>
          <Button size="lg" @click="hunt">Hunt</Button>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>

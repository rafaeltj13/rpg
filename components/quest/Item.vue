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
import { Icon } from "@iconify/vue";

const props = defineProps<{
  quest: {
    title: string;
    description: string;
    honor: number;
    gold: number;
    state: "available" | "inProgress" | "done";
  };
}>();
</script>

<template>
  <div
    :class="{
      'bg-background': quest.state === 'available',
      'bg-primary': quest.state === 'done',
      'bg-secondary': quest.state === 'inProgress',
    }"
    class="col-span-4 h-40 border p-4 rounded-lg hover:scale-105 scale-100 transition-all cursor-pointer flex items-center justify-between shadow-lg hover:bg-actions-foreground hover:text-background gap-4"
  >
    <Drawer>
      <DrawerTrigger>
        <div class="flex items-center justify-between gap-8">
          <div class="flex flex-col items-start gap-4 text-left">
            <p class="text-xl font-semibold">{{ quest.title }}</p>
            <p class="text-md text-left">{{ quest.description }}</p>
          </div>
          <div class="flex items-center gap-3">
            <p class="text-xl font-semibold">
              {{ quest.honor }}
              <Icon
                icon="game-icons:vertical-banner"
                class="h-[1.5rem] w-[1.5rem] mx-auto"
              />
            </p>
            <p class="text-xl font-semibold">
              {{ quest.gold }}
              <Icon
                icon="game-icons:two-coins"
                class="h-[1.5rem] w-[1.5rem] mx-auto"
              />
            </p>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{{ quest.title }}</DrawerTitle>
          <DrawerDescription>{{ quest.description }}</DrawerDescription>
        </DrawerHeader>
        <div
          class="w-full pb-4 px-4 flex items-center justify-center md:justify-start gap-4"
        >
          <DrawerClose>
            <Button variant="outline"> Reject </Button>
          </DrawerClose>
          <Button size="lg">Accept</Button>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>

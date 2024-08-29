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
import type { PlayerQuest } from "~/types/quest";

defineProps<{
  playerQuest: PlayerQuest;
}>();
</script>

<template>
  <div
    class="bg-popover col-span-8 border h-42 p-4 rounded-lg hover:scale-105 scale-100 transition-all cursor-pointer flex items-center justify-between shadow-lg hover:bg-actions-foreground hover:text-background gap-4"
  >
    <Drawer>
      <DrawerTrigger>
        <div
          class="flex items-start justify-between gap-12 p-2 w-full h-[162px]"
        >
          <div class="flex flex-col items-start gap-4 text-left">
            <p class="text-2xl font-semibold">
              {{ playerQuest?.quest?.title }}
            </p>
            <p
              class="h-[92px] text-md text-left text-wrap break-words overflow-hidden overflow-ellipsis"
            >
              {{ playerQuest?.quest?.description }}
            </p>
          </div>
          <div
            class="flex flex-col items-center justify-between h-full w-[18rem]"
          >
            <div class="flex items-center gap-3">
              <p class="text-xl font-semibold">
                {{ playerQuest?.quest?.honor }}
                <Icon
                  icon="game-icons:vertical-banner"
                  class="h-[1.5rem] w-[1.5rem] mx-auto"
                />
              </p>
              <p class="text-xl font-semibold">
                {{ playerQuest?.quest?.gold }}
                <Icon
                  icon="game-icons:two-coins"
                  class="h-[1.5rem] w-[1.5rem] mx-auto"
                />
              </p>
            </div>
            <div class="flex items-center gap-2">
              <p class="text-xl font-semibold">
                {{ playerQuest.currentQuantity }} /
                {{ playerQuest.quest.requirements.quantity }}
              </p>
              <Icon
                :icon="`game-icons:${
                  playerQuest.quest.requirements.targetItem?.icon
                    ? playerQuest.quest.requirements.targetItem.icon
                    : playerQuest.quest.requirements.targetMonster.icon
                }`"
                class="h-[1.5rem] w-[1.5rem] mx-auto"
              />
            </div>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div class="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle
              ><p class="text-4xl pb-2">
                {{ playerQuest?.quest?.title }}
              </p>
            </DrawerTitle>
            <DrawerDescription>{{
              playerQuest?.quest?.description
            }}</DrawerDescription>
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-4">
                <p class="text-xl font-semibold">
                  {{ playerQuest?.quest?.honor }}
                  <Icon
                    icon="game-icons:vertical-banner"
                    class="h-[1.5rem] w-[1.5rem] mx-auto"
                  />
                </p>
                <p class="text-xl font-semibold">
                  {{ playerQuest?.quest?.gold }}
                  <Icon
                    icon="game-icons:two-coins"
                    class="h-[1.5rem] w-[1.5rem] mx-auto"
                  />
                </p>
              </div>
              <div class="flex items-center gap-2">
                <p class="text-xl font-semibold">
                  {{ playerQuest.currentQuantity }} /
                  {{ playerQuest.quest.requirements.quantity }}
                </p>
                <Icon
                  :icon="`game-icons:${
                    playerQuest.quest.requirements.targetItem?.icon
                      ? playerQuest.quest.requirements.targetItem.icon
                      : playerQuest.quest.requirements.targetMonster.icon
                  }`"
                  class="h-[1.5rem] w-[1.5rem] mx-auto"
                />
              </div>
            </div>
          </DrawerHeader>
          <div
            class="w-full pb-4 px-4 flex items-center justify-center md:justify-start gap-4"
          >
            <Button variant="outline" size="lg">Forfeit</Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>

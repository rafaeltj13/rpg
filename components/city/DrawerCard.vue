<script setup lang="ts">
import { Icon } from "@iconify/vue";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const props = defineProps<{
  icon: string;
  text: string;
  title: string;
  description?: string;
  handleConfirm: () => void;
}>();
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <div
        class="col-span-1 h-40 border-2 p-4 rounded-xl hover:scale-105 scale-100 transition-all cursor-pointer flex flex-col items-center justify-center shadow-lg hover:bg-actions-foreground hover:text-background gap-4"
      >
        <Icon :icon="`game-icons:${props.icon}`" class="w-20 h-20" />
        <p class="text-xl font-semibold">
          {{ props.text }}
        </p>
      </div>
    </DrawerTrigger>
    <DrawerContent>
      <div class="mx-auto w-full max-w-sm">
        <DrawerHeader class="px-0">
          <DrawerTitle class="text-[3rem] mb-2 flex gap-2 px-0">{{
            props.title
          }}</DrawerTitle>
        </DrawerHeader>
        <slot></slot>
        <div
          class="w-full pb-4 flex items-center justify-center md:justify-start gap-4"
        >
          <DrawerClose>
            <Button variant="outline"> Cancel </Button>
          </DrawerClose>
          <Button size="lg" @click="props.handleConfirm">Confirm</Button>
        </div>
      </div>
    </DrawerContent>
  </Drawer>
</template>

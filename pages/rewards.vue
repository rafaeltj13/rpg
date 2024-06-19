<script setup lang="ts">
import { hide, bowieKnife, goblinHand } from "~/mock";
import { Icon } from "@iconify/vue";
import { toast } from "vue-sonner";

const router = useRouter();

const loot = [hide, hide, bowieKnife, goblinHand];

const handleCollect = () => {
  router.push({ name: "city" });

  toast("Items collected", {
    description: `${loot.length} itens added to backpack`,
  });
};
</script>

<template>
  <div>
    <h1 class="text-[64px] text-primary font-bold pb-8">Hunting is done</h1>
    <h4 class="text-2xl mb-8">Rewards:</h4>
    <div class="flex items-center gap-4">
      <div class="flex flex-col items-center justify-center">
        <Icon icon="game-icons:vertical-banner" class="h-12 w-12 mb-2" />
        <p>137 honor</p>
      </div>
      <div
        v-for="item of loot"
        :key="item.icon"
        class="flex flex-col items-center justify-center"
      >
        <SharedItem :icon="item.icon" iconStyle="w-12 h-12 mb-2" />
        {{ item.name }}
      </div>
    </div>
    <Button class="mt-8" variant="default" size="lg" @click="handleCollect"
      >Collect</Button
    >
  </div>
</template>

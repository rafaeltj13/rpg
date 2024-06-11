<script setup lang="ts">
import { Icon } from "@iconify/vue";

const colorMode = useColorMode();
</script>

<template>
  <div>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="p-2">
          <Icon
            icon="game-icons:settings-knobs"
            class="h-[1.25rem] w-[1.25rem] rotate-0 transition-all dark:-rotate-90 dark:scale-0"
          />
          <span class="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem @click="() => {}"> Logout </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

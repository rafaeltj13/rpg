<script setup lang="ts">
import { Icon } from "@iconify/vue";

const colorMode = useColorMode();
</script>

<template>
  <div>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="h-12">
          <Icon
            icon="game-icons:moon-bats"
            class="h-[1.5rem] w-[1.5rem] rotate-0 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Icon
            icon="game-icons:sun"
            class="absolute h-[1.5rem] hover:scale-110 w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem @click="colorMode.preference = 'light'">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'dark'">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem @click="colorMode.preference = 'system'">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

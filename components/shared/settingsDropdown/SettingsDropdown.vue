<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="p-2">
          <Icon
            icon="game-icons:settings-knobs"
            class="h-[1.25rem] w-[1.25rem]"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem @click="() => {}"> Logout </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

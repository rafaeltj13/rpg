<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="text-foreground">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button size="sm" variant="ghost" class="p-2">
          <Icon
            icon="ic:baseline-format-list-bulleted"
            class="h-[1.25rem] w-[1.25rem]"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <NuxtLink class="cursor-pointer" to="/city">
          <DropdownMenuItem>
            <Icon
              icon="game-icons:hill-fort"
              class="h-[1.5rem] w-[1.5rem] mr-2"
            />
            <p class="text-md">City</p>
          </DropdownMenuItem>
        </NuxtLink>
        <NuxtLink class="cursor-pointer" to="/quests">
          <DropdownMenuItem>
            <Icon
              icon="game-icons:stabbed-note"
              class="h-[1.5rem] w-[1.5rem] mr-2"
            />
            <p class="text-md">My Quests</p>
          </DropdownMenuItem>
        </NuxtLink>
        <NuxtLink class="cursor-pointer" to="/map">
          <DropdownMenuItem>
            <Icon
              icon="game-icons:treasure-map"
              class="h-[1.5rem] w-[1.5rem] mr-2"
            />
            <p class="text-md">Map</p>
          </DropdownMenuItem>
        </NuxtLink>
        <NuxtLink class="cursor-pointer" to="/character">
          <DropdownMenuItem>
            <Icon icon="game-icons:skills" class="h-[1.5rem] w-[1.5rem] mr-2" />
            <p class="text-md">Character</p>
          </DropdownMenuItem>
        </NuxtLink>
        <NuxtLink class="cursor-pointer" to="/inventory">
          <DropdownMenuItem>
            <Icon
              icon="game-icons:backpack"
              class="h-[1.5rem] w-[1.5rem] mr-2"
            />
            <p class="text-md">Inventory</p>
          </DropdownMenuItem>
        </NuxtLink>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div>
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="h-12">
          <Icon
            icon="ic:baseline-format-list-bulleted"
            class="h-[1.5rem] w-[1.5rem]"
          />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <Icon icon="ph:house" class="h-[1.5rem] w-[1.5rem]" />
          <NuxtLink to="/" class="ml-2">Home</NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="game-icons:checklist" class="h-[1.5rem] w-[1.5rem]" />
          <NuxtLink to="/quests" class="ml-2">Quests</NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="game-icons:treasure-map" class="h-[1.5rem] w-[1.5rem]" />
          <NuxtLink to="/map" class="ml-2">Map</NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="game-icons:book-pile" class="h-[1.5rem] w-[1.5rem]" />
          <NuxtLink to="/skills" class="ml-2">Skills</NuxtLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Icon icon="game-icons:backpack" class="h-[1.5rem] w-[1.5rem]" />
          <NuxtLink to="/backpack" class="ml-2">Backpack</NuxtLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

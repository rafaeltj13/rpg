<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="text-foreground">
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
        <NuxtLink class="cursor-pointer" to="/">
          <DropdownMenuItem>
            <Icon icon="game-icons:house" class="h-[1.5rem] w-[1.5rem] mr-2" />
            <p class="text-md">Home</p>
          </DropdownMenuItem>
        </NuxtLink>
        <NuxtLink class="cursor-pointer" to="/quests">
          <DropdownMenuItem>
            <Icon
              icon="game-icons:checklist"
              class="h-[1.5rem] w-[1.5rem] mr-2"
            />
            <p class="text-md">Quests</p>
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
        <NuxtLink class="cursor-pointer" to="/skills">
          <DropdownMenuItem>
            <Icon
              icon="game-icons:book-pile"
              class="h-[1.5rem] w-[1.5rem] mr-2"
            />
            <p class="text-md">Skills</p>
          </DropdownMenuItem>
        </NuxtLink>
        <NuxtLink class="cursor-pointer" to="/backpack">
          <DropdownMenuItem>
            <Icon
              icon="game-icons:backpack"
              class="h-[1.5rem] w-[1.5rem] mr-2"
            />
            <p class="text-md">Backpack</p>
          </DropdownMenuItem>
        </NuxtLink>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

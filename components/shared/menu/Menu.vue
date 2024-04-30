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
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <NuxtLink class="cursor-pointer" to="/city">
          <DropdownMenuItem>
            <Icon icon="game-icons:house" class="h-[1.5rem] w-[1.5rem] mr-2" />
            <p class="text-md">Resume</p>
          </DropdownMenuItem>
        </NuxtLink>
        <NuxtLink class="cursor-pointer" to="/quests">
          <DropdownMenuItem>
            <Icon
              icon="game-icons:stabbed-note"
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
        <NuxtLink class="cursor-pointer" to="/attributes">
          <DropdownMenuItem>
            <Icon icon="game-icons:skills" class="h-[1.5rem] w-[1.5rem] mr-2" />
            <p class="text-md">Attributes</p>
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

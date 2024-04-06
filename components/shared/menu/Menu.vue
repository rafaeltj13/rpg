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
            class="h-[1.5rem] w-[1.5rem] hover:scale-110 transition-all"
          />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <NuxtLink to="/">
          <DropdownMenuItem> Home </DropdownMenuItem>
        </NuxtLink>
        <DropdownMenuItem> Market </DropdownMenuItem>
        <DropdownMenuItem> Shopping </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

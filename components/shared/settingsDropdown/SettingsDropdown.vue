<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useSupabase } from "~/composables/api/useSupabase";

const handleLogout = async () => {
  await useSupabase().auth.signOut();

  navigateTo("/signin");
  // Empty user data in state
};
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
        <DropdownMenuItem @click="handleLogout"> Logout </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>

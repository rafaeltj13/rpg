<script setup lang="ts">
import { useSupabase } from "~/composables/api/useSupabase";
import { toast } from "vue-sonner";

const { setSession } = useSessionStore();

onMounted(() => {
  useSupabase().auth.onAuthStateChange(async (event, session) => {
    console.log({ session });

    if (!session) {
      setSession({
        token: null,
        sessionId: null,
        sessionEmail: null,
      });

      setTimeout(() => {
        toast("You signed out", {
          description: ``,
        });
      }, 500);

      navigateTo("/signin");
      return;
    } else if (event === "SIGNED_IN") {
      toast("Welcome back!", {
        description: ``,
      });

      setSession({
        token: session?.access_token || null,
        sessionId: session?.user.id || null,
        sessionEmail: session?.user.email || null,
      });

      navigateTo("/city");
    }
  });
});
</script>

<template>
  <SharedHeaderGame />
  <div class="max-w-screen-xl mx-auto pt-32 pb-40">
    <slot />
  </div>
  <div class="fixed z-50 left-1/2 transform -translate-x-1/2 bottom-8">
    <SharedActionsHub />
  </div>
</template>

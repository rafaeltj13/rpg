<script setup lang="ts">
import { useSupabase } from "~/composables/api/useSupabase";
import { toast } from "vue-sonner";
import { usePlayer } from "~/composables/api/usePlayer";

const { setSession } = useSessionStore();
const colorMode = useColorMode();

const backgroundImage = ref("");

const updateBackgroundImage = () => {
  if (colorMode.preference === "system") {
    backgroundImage.value = `url('/bg-${colorMode.value}.png')`;
  } else {
    backgroundImage.value = `url('/bg-${colorMode.preference}.png')`;
  }
};

onMounted(() => {
  updateBackgroundImage();

  useSupabase().auth.onAuthStateChange(async (event, session) => {
    console.log({ event, session });

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
    }

    setSession({
      token: session?.access_token || null,
      sessionId: session?.user.id || null,
      sessionEmail: session?.user.email || null,
    });

    const player = await usePlayer().getPlayerByEmail(
      session?.user.email || "",
    );

    if (!player) {
      navigateTo("/info");
    } else {
      usePlayerStore().setPlayerState({ player });
    }
  });
});

watch(
  () => colorMode.value,
  (value) => (backgroundImage.value = `url('/bg-${value}.png')`),
);
</script>

<template>
  <div class="relative">
    <div
      class="bg-cover bg-center h-[100vh] w-full"
      v-if="backgroundImage"
      :style="{ backgroundImage }"
    ></div>
    <div class="h-[100vh] w-full z-10 absolute top-0">
      <SharedHeaderGame />
      <div class="max-w-screen-xl mx-auto pt-32 pb-40">
        <slot />
        <div class="fixed z-50 left-1/2 transform -translate-x-1/2 bottom-8">
          <SharedActionsHub />
        </div>
      </div>
    </div>
  </div>
</template>

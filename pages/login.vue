<template>
  <div class="w-full h-[100vh]">
    <div class="flex items-center justify-center py-12 h-full">
      <div class="mx-auto grid w-[350px] gap-6">
        <div class="grid gap-2 text-center">
          <h1 class="text-3xl font-bold">Login</h1>
          <p class="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <a
                href="/forgot-password"
                class="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" class="w-full py-2"> Login </Button>
          <div class="flex items-center">
            <div class="w-[100%] h-[0.25px] bg-secondary"></div>
            <p class="text-center px-6">or</p>
            <div class="w-[100%] h-[0.25px] bg-secondary"></div>
          </div>
          <Button
            variant="outline"
            class="w-full"
            @click="handleLoginWithGoogle"
          >
            Continue with Google
          </Button>
        </div>
        <div class="mt-4 text-center text-sm">
          Don't have an account?
          <a href="#" class="underline"> Sign up </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSupabase } from "~/composables/api/useSupabase";

definePageMeta({
  layout: "login",
});

const handleLoginWithGoogle = async () => {
  await useSupabase().auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/city",
    },
  });

  //TODO this have to be changed to the correct place, when the state of the user is changed in supabase
  navigateTo("/city");
};
</script>

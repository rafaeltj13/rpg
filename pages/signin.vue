<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { toast } from "vue-sonner";
import { z } from "zod";
import { useSupabase } from "~/composables/api/useSupabase";

definePageMeta({
  layout: "auth",
});

const handleLoginWithGoogle = async () => {
  await useSupabase().auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/city",
    },
  });
};

const handleLoginWithEmail = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const { data, error } = await useSupabase().auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    toast("Error", {
      description: error.message,
    });

    return;
  }

  console.log({ data });
  //TODO - set session
};

const formSchema = toTypedSchema(
  z.object({
    email: z.string().min(0).max(50),
    password: z.string().min(0).max(30),
  })
);

const { handleSubmit, isFieldDirty } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  try {
    handleLoginWithEmail({
      email: values.email as string,
      password: values.password as string,
    });
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="w-full h-[100vh]">
    <div class="flex items-center justify-center py-12 h-full">
      <ClientOnly>
        <div class="mx-auto grid w-[350px] gap-4">
          <img
            src="/public/logo.png"
            alt="miniRPG"
            class="h-20 w-20 mx-auto cursor-pointer transition-all hover:scale-110"
            @click="navigateTo(`/`)"
          />
          <div class="grid gap-2 text-center">
            <h1 class="text-3xl font-bold">Sign in</h1>
            <p class="text-balance text-muted-foreground">
              Enter your email below to sign in to your account
            </p>
          </div>
          <form class="grid gap-4" @submit="onSubmit">
            <FormField
              v-slot="{ componentField }"
              name="email"
              :validate-on-blur="!isFieldDirty"
              class="grid"
            >
              <FormItem>
                <FormLabel for="email">Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="miniRPG@example.com"
                    required
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField
              v-slot="{ componentField }"
              name="password"
              :validate-on-blur="!isFieldDirty"
              class="grid gap-2"
            >
              <FormItem>
                <FormLabel for="password">Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    required
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <Button type="submit" class="w-full py-2"> Enter </Button>
            <div class="flex items-center">
              <div class="w-[100%] h-[0.25px] bg-secondary"></div>
              <p class="text-center px-6">or</p>
              <div class="w-[100%] h-[0.25px] bg-secondary"></div>
            </div>
          </form>
          <Button
            variant="outline"
            class="w-full"
            @click="handleLoginWithGoogle"
          >
            Continue with Google
          </Button>
          <div class="mt-4 text-center text-sm">
            Don't have an account?
            <a href="/signup" class="underline"> Sign up </a>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

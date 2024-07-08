<script setup lang="ts">
import { useSupabase } from "~/composables/api/useSupabase";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useForm } from "vee-validate";
import { Input } from "~/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "vue-sonner";

definePageMeta({
  layout: "auth",
});

const loading = ref(false);

const handleSignUpWithGoogle = async () => {
  await useSupabase().auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://localhost:3000/city",
    },
  });
};

const handleSignUpEmail = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  loading.value = true;
  const { data, error } = await useSupabase().auth.signUp({
    email,
    password,
  });

  loading.value = false;
  console.log({ data });

  if (error) {
    toast("Error", {
      description: error.message,
    });

    return;
  }
};

const formSchema = toTypedSchema(
  z.object({
    email: z.string().min(2).max(50),
    password: z.string().min(6).max(30),
    confirmPassword: z.string().min(6).max(30),
  })
);

const { handleSubmit, isFieldDirty } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  handleSignUpEmail({
    email: values.email as string,
    password: values.password as string,
  });
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
            @click="navigateTo('/')"
          />
          <div class="grid gap-2 text-center">
            <h1 class="text-3xl font-bold">Sign up</h1>
            <p class="text-balance text-muted-foreground">
              Create your account for free
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
            <FormField
              v-slot="{ componentField }"
              name="confirmPassword"
              :validate-on-blur="!isFieldDirty"
              class="grid gap-2"
            >
              <FormItem>
                <FormLabel for="confirmPassword">Confirm password</FormLabel>
                <FormControl>
                  <Input
                    id="confirmPassword"
                    type="password"
                    required
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <Button v-if="!loading" type="submit" class="w-full py-2">
              Continue
            </Button>
            <div v-else class="w-full flex items-center justify-center pt-4">
              <SharedLoading />
            </div>
          </form>
          <div class="flex items-center">
            <div class="w-[100%] h-[0.25px] bg-secondary"></div>
            <p class="text-center px-6">or</p>
            <div class="w-[100%] h-[0.25px] bg-secondary"></div>
          </div>
          <Button
            variant="outline"
            class="w-full"
            @click="handleSignUpWithGoogle"
          >
            Continue with Google
          </Button>
          <div class="mt-4 text-center text-sm">
            Already have an account?
            <a href="/signin" class="underline"> Sign in </a>
          </div>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

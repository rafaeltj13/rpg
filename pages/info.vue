<script setup lang="ts">
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
import { usePlayer } from "~/composables/api/usePlayer";

const loading = ref(false);
const countries = ref([
  "Brazil",
  "Argentina",
  "Chile",
  "Peru",
  "Colombia",
  "Mexico",
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
]);

const handleUpdatePlayerInfo = async ({
  name,
  age,
  country,
}: {
  name: string;
  age: number;
  country: string;
}) => {
  loading.value = true;

  const player = await usePlayer().createPlayer({
    name,
    age,
    country,
    email: useSessionStore().email || "",
  });

  if (player) navigateTo("/city");

  loading.value = false;
};

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2).max(50),
    age: z.number().min(1).max(100),
    country: z.string().min(2).max(50),
  })
);

const { handleSubmit, isFieldDirty } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  handleUpdatePlayerInfo({
    name: values.name as string,
    age: values.age as number,
    country: values.country as string,
  });
});
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-1">
    <ClientOnly>
      <div class="col-span-2">
        <SharedPageTitle title="Player information" />
        <form class="grid col grid-cols-2 gap-4" @submit="onSubmit">
          <FormField
            v-slot="{ componentField }"
            name="name"
            :validate-on-blur="!isFieldDirty"
            class="col-span-1"
          >
            <FormItem>
              <FormLabel for="name">Name</FormLabel>
              <FormControl>
                <Input v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField
            v-slot="{ componentField }"
            name="age"
            :validate-on-blur="!isFieldDirty"
            class="col-span-1"
          >
            <FormItem>
              <FormLabel for="age">Age</FormLabel>
              <FormControl>
                <Input type="number" v-bind="componentField" />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField
            v-slot="{ componentField }"
            name="country"
            :validate-on-blur="!isFieldDirty"
            class="col-span-1"
          >
            <FormItem>
              <FormLabel for="country">Country</FormLabel>
              <FormControl>
                <Select v-bind="componentField">
                  <SelectTrigger class="w-full">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem v-for="country in countries" :value="country">
                        {{ country }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <Button v-if="!loading" type="submit" class="py-2 col-span-2">
            Continue
          </Button>
          <div
            v-else
            class="w-full flex items-center justify-center pt-4 col-span-2"
          >
            <SharedLoading />
          </div>
        </form>
      </div>
    </ClientOnly>
  </div>
</template>

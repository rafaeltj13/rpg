<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

const router = useRouter();

const time = ref<number>(10);

const handleConfirm = () => {
  router.push({ name: "busy" });
};
</script>

<template>
  <CityDrawerCard
    icon="muscular-torso"
    text="Training"
    title="Gym"
    :handleConfirm="handleConfirm"
  >
    <template #default>
      <p>
        Nestled in the heart of Eldoria, the Elite Training Grounds is a place
        where heroes come to hone their physical abilities and prepare for the
        challenges that await.
      </p>
      <RadioGroup default-value="option-one" class="pt-4">
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="option-one" value="option-one" />
          <Label for="option-one">Strength</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem id="option-two" value="option-two" />
          <Label for="option-two">Vitality</Label>
        </div>
      </RadioGroup>
      <SharedTimeInput v-model="time" />
    </template>
  </CityDrawerCard>
</template>

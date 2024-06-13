<script setup lang="ts">
const modelValue = defineModel<number>("modelValue");

function increase() {
  modelValue.value ??= 1;
  if (modelValue.value >= 12) return;

  modelValue.value++;
}

function decrease() {
  modelValue.value ??= 1;
  if (modelValue.value <= 1) return;

  modelValue.value--;
}
</script>

<template>
  <div class="flex items-center gap-2 pb-4 pt-1">
    <Button size="sm" variant="ghost" @click="decrease"> - </Button>
    <p>{{ modelValue }}</p>
    <Button size="sm" variant="ghost" @click="increase"> + </Button>
  </div>
</template>

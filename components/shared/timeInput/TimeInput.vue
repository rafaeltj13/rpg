<script setup lang="ts">
const modelValue = defineModel<number>("modelValue");
modelValue.value = 10;

function increase() {
  modelValue.value = (modelValue.value ?? 0) + 10;
}

function decrease() {
  if ((modelValue.value ?? 0) - 10 < 10) return;

  modelValue.value = (modelValue.value ?? 0) - 10;
}
</script>

<template>
  <div class="pt-6">Minutes</div>
  <div class="flex items-center gap-2 pb-4 pt-1">
    <Button size="sm" variant="ghost" @click="decrease"> - </Button>
    <p>{{ modelValue }}</p>
    <Button size="sm" variant="ghost" @click="increase"> + </Button>
  </div>
</template>

<script setup lang="ts"></script>

<template>
  <div class="flex items-center justify-between mt-8 px-24">
    <div
      class="bg-popover border p-2 shadow-xl rounded-lg w-32 h-32 hover:scale-105 scale-100 transition-all cursor-pointer"
    ></div>
    <div class="">
      <p class="text-green-500 text-md">+12 Strengh</p>
      <p class="text-green-500 text-md">+11 Vitality</p>
      <p class="text-red-500 text-md">-2 Intelligence</p>
      <p class="text-red-500 text-md">-6 Agility</p>
      <Button class="mx-auto mt-4" variant="default">Equip</Button>
    </div>
    <div
      class="bg-popover border p-2 shadow-xl rounded-lg w-32 h-32 hover:scale-105 scale-100 transition-all cursor-pointer"
    ></div>
  </div>
</template>

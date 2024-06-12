<template>
  <SharedHeaderGame />
  <div class="max-w-screen-xl mx-auto pt-32 pb-40">
    <slot />
  </div>
  <div class="fixed z-50 left-1/2 transform -translate-x-1/2 bottom-8">
    <SharedActionsHub />
  </div>
</template>

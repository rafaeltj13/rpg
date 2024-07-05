<template>
  <slot />
  <ClientOnly>
    <SharedDarkModeDropdown class="fixed bottom-6 left-6 z-50" />
  </ClientOnly>
</template>

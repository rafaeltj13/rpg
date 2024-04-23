<template>
  <LandingHeader />
  <div class="w-full overflow-x-hidden">
    <slot />
  </div>
  <SharedDarkModeDropdown class="fixed bottom-1 right-1 z-50" />
</template>

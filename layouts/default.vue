<template>
  <ClientOnly>
    <div
      class="h-16 w-full max-w-[1366px] mx-auto flex items-center justify-between"
    >
      <div class="flex items-center gap-2">
        <SharedMenu />
      </div>
      <div class="flex items-center gap-2 z-50">
        <SharedDarkModeDropdown />
      </div>
    </div>
  </ClientOnly>
  <div class="h-[90vh] overflow-y-hidden max-w-[1366px] mx-auto p-4 !pt-20">
    <slot />
  </div>
  <div class="absolute left-1/2 transform -translate-x-1/2 bottom-8">
    <SharedActionsHub />
  </div>
</template>

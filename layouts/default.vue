<template>
  <ClientOnly>
    <div class="absolute left-6 top-2 z-50 flex items-center gap-2">
      <SharedMenu />
    </div>
    <div class="absolute right-6 top-2 flex items-center gap-2 z-50">
      <SharedDarkModeDropdown />
      <LoginButton />
    </div>
    <div class="absolute left-1/2 transform -translate-x-1/2 bottom-8">
      <SharedActionsHub />
    </div>
  </ClientOnly>
  <div class="h-[100vh] max-w-[1366px] mx-auto p-4">
    <slot />
  </div>
</template>

<template>
  <div class="w-full h-[70vh] bg-gradient-to-r from-primary to-secondary">
    <div
      class="px-8 lg:px-0 flex flex-col items-center justify-center h-full gap-6"
    >
      <p class="lg:text-[104px] md:text-[68px] text-[46px]">Play Your Way</p>
      <p class="md:max-w-[900px] text-md md:text-xl lg:text-2xl">
        Whether you have minutes or hours, enjoy equal progress in this RPG.
        Experience gaming that fits your schedule, without missing a beat.
      </p>
      <div class="flex items-center justify-center gap-4">
        <NuxtLink to="/signup">
          <Button variant="secondary" size="lg">Create Account</Button>
        </NuxtLink>
        <LoginButton />
      </div>
    </div>
  </div>
</template>

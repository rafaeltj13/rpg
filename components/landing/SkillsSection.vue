<template>
  <div
    class="w-fulllg:h-[30vh] py-8 lg:py-0 flex flex-col-reverse lg:grid lg:grid-rows-1 lg:grid-cols-2 lg:grid-flow-col"
  >
    <div class="col-span-1 flex flex-col items-center justify-center">
      <SharedClassItem class="mb-4" icon="bowie-knife" />
      <div
        class="grid grid-rows-2 sm:grid-rows-1 grid-flow-col grid-col-2 gap-4"
      >
        <SharedClassItem icon="broadsword" />
        <SharedClassItem icon="orb-wand" />
        <SharedClassItem icon="bow-arrow" />
        <SharedClassItem icon="flanged-mace" />
      </div>
    </div>
    <div
      class="col-span-1 flex flex-col items-start justify-center gap-4 lg:max-w-[80%] pb-8 lg:pb-0"
    >
      <h1 class="text-3xl mb-2 text-primary">
        Choose Your path in the adventure
      </h1>
      <p class="text-lg">
        Choosing the right class is the first step on your path to glory. Each
        class offers a unique play style and role within the team. Consider your
        preferred approach to challenges and adventures as you select from our
        initial class lineup.
      </p>
    </div>
  </div>
</template>

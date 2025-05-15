<template>
  <div
    v-if="FEP === 'Menu'"
    class="relative overflow-hidden bg-neutral-1 aspect-[4/5] group max-w-[316px]"
  >
    <img
      src="/assets/images/entry-point-menu.jpg"
      alt="Menu preview"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
      <div class="absolute bottom-0 left-0 p-8 w-full">
        <h2 class="font-anton text-[16px] font-normal text-white mb-4">Menu</h2>
        <p class="font-inter text-[16px] font-normal text-white/40 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <BaseButton variant="light" arrow="true">Se menu</BaseButton>
      </div>
    </div>
  </div>

  <div
    v-else-if="FEP === 'Bryggeproces'"
    class="relative overflow-hidden bg-neutral-1 aspect-[4/5] group max-w-[316px]"
  >
    <img
      src="/assets/images/entry-point-menu.jpg"
      alt="Bryggeproces preview"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
      <div class="absolute bottom-0 left-0 p-8 w-full">
        <h2 class="font-anton text-[16px] font-normal text-white mb-4">
          Bryggeproces
        </h2>
        <p class="font-inter text-[16px] font-normal text-white/40 mb-6">
          Oplev vores unikke bryggeprocess og traditioner.
        </p>
        <BaseButton variant="light" arrow="true">Se bryggeproces</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  FEP: "Menu" | "Bryggeproces";
}>();
</script>

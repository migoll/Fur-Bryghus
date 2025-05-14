<template>
  <div class="relative overflow-hidden bg-neutral-1 aspect-[4/5] group max-w-[316px]">
    <img 
      src="https://placehold.co/800x1000" 
      alt="Menu preview" 
      class="w-full h-full object-cover"
    >
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
      <div class="absolute bottom-0 left-0 p-8 w-full">
        <h2 class="font-anton text-h2-mobile sm:text-h2 text-white mb-4">Menu</h2>
        <p class="font-inter text-body-mobile sm:text-body text-white/40 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        </p>
        <BaseButton variant="light">Se menu</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
  buttonText?: string
  imageUrl?: string
}>()
</script>
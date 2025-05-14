<template>
  <div class="relative inline-block group">
    <div 
      class="absolute inset-0 rounded"
      :class="[
        variant === 'dark' ? 'bg-[#FAF9F5]' : 'bg-[#132A3B]/10'
      ]"
    ></div>
    <button 
      :class="[
        'relative inline-flex items-center justify-center px-6 py-3 font-anton text-body-small rounded transition-all duration-200 ease-out',
        variant === 'dark' ? 'text-white bg-[#132A3B]' : 'text-[#132A3B] bg-white',
        'group-hover:-translate-y-2 group-hover:translate-x-2 active:translate-y-0 active:translate-x-0'
      ]"
    >
      <slot />
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-4 w-4 ml-2 transition-transform duration-200 ease-out" 
        :class="[
          variant === 'dark' ? 'text-white' : 'text-[#132A3B]',
          'group-hover:translate-x-1'
        ]"
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'light' | 'dark'
}>()
</script>
<template>
  <button
    :class="[
      'rounded-sm transition-all duration-200 border',
      sizeClasses[size],
      variantClasses[variant],
      { 'border-2': hasBorder }
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'
type ButtonVariant = 'white' | 'black' | 'transparentDark' | 'transparentLight'

interface Props {
  size?: ButtonSize
  variant?: ButtonVariant
  hasBorder?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'white',
  hasBorder: false
})

const sizeClasses = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl'
}

const variantClasses = {
  white: 'bg-white text-black border-gray-200 hover:shadow-md',
  black: 'bg-black text-white border-gray-800 hover:shadow-md',
  transparentDark: 'bg-transparent text-gray-800 border-gray-800 hover:shadow-md',
  transparentLight: 'bg-transparent text-white border-white hover:shadow-md'
}
</script>
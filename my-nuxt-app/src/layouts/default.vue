<template>
  <div class="min-h-screen bg-white">
    <TheHeader />
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Default layout styles can be added here */
</style>
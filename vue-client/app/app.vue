<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  htmlAttrs: {
    lang: 'en',
    class: 'dark h-full antialiased'
  }
});

useSeoMeta({
  title: 'BoardPilot AI — Vue 3 & Nuxt 3 Engine',
  description: 'Enterprise agile project management platform reference architecture implemented in Vue 3 & Nuxt 3.'
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

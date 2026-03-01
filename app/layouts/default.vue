<script setup lang="ts">
const navLinks = useNavLinks();
</script>

<template>
  <div>
    <UContainer class="pt-10">
      <slot />
      <AppNavigation :links="navLinks" />
      <AppFooter />
    </UContainer>
  </div>
</template>

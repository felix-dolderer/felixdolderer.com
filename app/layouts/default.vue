<script setup lang="ts">
const navLinks = useNavLinks();
</script>

<template>
  <div>
    <UContainer class="sm:border-x border-default pt-10">
      <slot />
      <AppNavigation :links="navLinks" />
      <AppFooter />
    </UContainer>
  </div>
</template>

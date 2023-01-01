<template>
  <div class="container">
    <header class="header">
      <locale-switcher />
      <the-navigation />
    </header>
  </div>
</template>

<script lang="ts" setup>
import TheNavigation from "@/components/navigation/TheNavigation.vue";
import LocaleSwitcher from "@/components/licale-switcher/LocaleSwitcher.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 25px;
  width: 100%;
  z-index: 1;
}
</style>

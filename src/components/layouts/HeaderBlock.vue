<template>
  <div class="wrapper">
    <the-header class="header"/>
    <the-hero/>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/header/TheHeader.vue";
import TheHero from "@/components/hero/TheHero.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  position: sticky;
  top: 0;
  background-color: $accent_background_color;

  .header{
    background-image: linear-gradient(rgba(47, 48, 58, 0.3), rgba(47, 48, 58, 0.3));
  }
}
</style>

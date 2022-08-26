<template>
  <div>
    <RouterView />
    <btn-scroll-to-top />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import BtnScrollToTop from "@/components/UI/BtnScrollToTop.vue";
</script>

<style lang="scss">
@import '@/assets/sass';
</style>

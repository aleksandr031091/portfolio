<template>
  <div class="wrapper">
    <div class="header_wrapper">
      <the-header />
    </div>
    <the-hero />
  </div>

  <main>
    <about-me />
    <MySkills />
  </main>

  <the-footer />
</template>

<script setup>
import AboutMe from "@/components/about-me/AboutMe.vue";
import TheFooter from "@/components/footer/TheFooter.vue";
import MySkills from "@/components/skills/MySkills.vue";
import TheHeader from "@/components/header/TheHeader.vue";
import TheHero from "@/components/hero/TheHero.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  position: sticky;
  top: 0;
  background-color: $accent_background_color;

  .header_wrapper {
    background-image: $linear_gradient;
    width: 100%;
  }
}
</style>



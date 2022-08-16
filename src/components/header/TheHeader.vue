<template>
  <section class="section_header">
    <div class="container">
      <header class="header">
        <locale-switcher/>
        <the-navigation/>
      </header>
    </div>
  </section>
</template>

<script lang="ts" setup>
import TheNavigation from "@/components/navigation/TheNavigation.vue";
import LocaleSwitcher from "@/components/licale-switcher/LocaleSwitcher.vue";

</script>

<style lang="scss" scoped>
.section_header {
  background-image: linear-gradient(rgba(47, 48, 58, 0.3), rgba(47, 48, 58, 0.3));

  padding: 20px 0;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
}

//@include for-size(tablet) {
//  .header {
//
//  }
//}
</style>

<template>

  <locale-switcher/>

  <section class="section">

    <div class="container">

      <projects-list :projects="tm('projects')"/>

    </div>
  </section>
  <the-footer/>
</template>

<script lang="ts" setup>
import LocaleSwitcher from "@/components/licale-switcher/LocaleSwitcher.vue";
import ProjectsList from "@/components/layouts/ProjectsList.vue";
// import projects from '../../src/projects.json'
import {useI18n} from "vue-i18n";
import TheFooter from "@/components/footer/TheFooter.vue";
const { tm } = useI18n()
</script>

<style lang="scss" scoped>

</style>

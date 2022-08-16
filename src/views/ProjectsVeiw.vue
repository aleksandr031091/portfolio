<template>

  <locale-switcher/>

  <section class="section">

    <div class="container">

      <projects-list :projects="projects"/>

    </div>
  </section>
</template>

<script lang="ts" setup>
import LocaleSwitcher from "@/components/licale-switcher/LocaleSwitcher.vue";
import ProjectsList from "@/components/layouts/ProjectsList.vue";
import projects from '../../src/projects.json'
</script>

<style lang="scss" scoped>

</style>

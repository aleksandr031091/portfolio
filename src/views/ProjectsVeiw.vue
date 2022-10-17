<template>
  <the-header/>
  <section class="section test">

    <div class="container">

      <projects-list :projects="tm('projects')"/>

    </div>
  </section>
  <the-footer/>
</template>

<script lang="ts" setup>
import ProjectsList from "@/components/projects/ProjectsList.vue";
import TheFooter from "@/components/footer/TheFooter.vue";
import TheHeader from "@/components/header/TheHeader.vue";
import {useI18n} from "vue-i18n";
const { tm } = useI18n()
</script>


<template>
  <section id="technology" class="section">
    <div class="container">
      <h1 class="title">Skills</h1>

      <div class="list_icons">
        <base-icon name="js"/>

        <base-icon name="html"/>

        <base-icon name="css"/>

        <base-icon name="docker"/>

        <base-icon name="figma"/>

        <base-icon name="firebase"/>

        <base-icon name="git-skills"/>

        <base-icon name="nuxt"/>

        <base-icon name="ts"/>

        <base-icon name="vue"/>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

import BaseIcon from "@/components/UI/BaseIcon.vue";
</script>

<style lang="scss" scoped>
.title {
  color: #ffffff;
}

.list_icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 40px;
  padding: 20px;
}


@include for-size(mobile) {
  .list_icons {
    column-gap: 70px;
  }
}

@include for-size(desktop) {
  .list_icons {
    column-gap: 80px;
  }
}
</style>

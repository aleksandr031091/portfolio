<template>
  <div class="wrapper">

    <ul class="list_title">
      <li class="list_title_item" v-for="l in tm('about-me.soft-skills-title')" :key="l">{{ l }}</li>
    </ul>

    <ul class="list_skills">
      <li class="list_skills_item" v-for="skill in tm('about-me.soft-skills')" :key="skill">{{ skill }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { tm } = useI18n();
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}

.list_title {
  padding-left: 20px;

  &_item {
    text-align: center;
    min-height: 10px;
    font-size: 28px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

.list_skills {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;
  width: 100%;
  text-align: center;

  &_item {
    font-size: 20px;
  }
}

@include for-size(mobile) {
  .list_title {
    padding: 0;
    margin-right: 60px;
  }

  .list_skills {
    text-align: start;
    list-style: initial;
  }
}

@include for-size(desktop) {
  .list_title {
    margin-right: 150px;
  }
}

</style>

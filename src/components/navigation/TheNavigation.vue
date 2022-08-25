<template>
  <nav>
    <button
      class="menu_btn"
      @click="onClickMenu"
      v-click-outside="onClickOutside"
    >
      <base-icon
        v-if="!isOpenList"
        name="menu"
        color="#ffffff"
      />
      <base-icon
        v-if="isOpenList"
        name="close"
        color="#ffffff"
      />
    </button>

    <navigation-mobile
      :navList="navList"
      :isOpenList="isOpenList"
    />
    <navigation-desktop :navList="navList" />

  </nav>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

import BaseIcon from "@/components/UI/BaseIcon.vue";
import NavigationMobile from "@/components/navigation/NavigationMobile.vue";
import NavigationDesktop from "@/components/navigation/NavigationDesktop.vue";


import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { tm } = useI18n();
const route = useRoute();

const isOpenList = ref(false);

const navList = computed(() => {
  const home = "/";
  const contacts = "#footer";
  const navList = JSON.parse(JSON.stringify(tm("navigation")));

  if (route.path === "/projects") {
    return navList.filter((el: { path: string, name: string }) => el.path === home || el.path === contacts);
  }

  return navList.filter((el: { path: string, name: string }) => el.path !== home);
});

const onClickMenu = () => {
  isOpenList.value = !isOpenList.value;
};

const onClickOutside = () => {
  isOpenList.value = false;
};
</script>

<style lang="scss" scoped>
.menu_btn {
  padding: 8px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50%;
}

@include for-size(tablet) {
  .menu_btn {
    display: none;
  }
}
</style>

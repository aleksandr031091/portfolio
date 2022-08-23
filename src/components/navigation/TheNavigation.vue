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
      :navList="tm('navigation')"
      :isOpenList="isOpenList"
    />
    <navigation-desktop :navList="tm('navigation')" />

  </nav>
</template>

<script lang="ts" setup>
import BaseIcon from "@/components/UI/BaseIcon.vue";
import { ref } from "vue";

import { useI18n } from "vue-i18n";
import NavigationMobile from "@/components/navigation/NavigationMobile.vue";
import NavigationDesktop from "@/components/navigation/NavigationDesktop.vue";

const { tm } = useI18n();

const isOpenList = ref(false);

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

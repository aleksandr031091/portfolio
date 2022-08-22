<template>

  <nav>
    <button
      class="menu_btn"
      @click="onClickMenu"
    >
      <base-icon
        v-if="!isOpenRouteList"
        name="menu"
        color="#ffffff"
      />
      <base-icon
        v-if="isOpenRouteList"
        name="close"
        color="#ffffff"
      />
    </button>

    <Transition name="dropdown-fade">
      <ul
        class="navigation_list_mobile"
        v-if="isOpenRouteList"
      >
        <li
          class="navigation_list_mobile_item"
          v-for="nav in tm('navigation')"
        >
          <router-link
            class="router_link hover_text"
            :to="nav.path"
            :key="nav.path"
          >
            {{ nav.name }}
          </router-link>
        </li>
      </ul>
    </Transition>

    <ul class="navigation_list">
      <li
        class="navigation_list_item"
        v-for="link in tm('navigation')"
      >
        <router-link
          class="router_link hover_text"
          :to="link.path"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import BaseIcon from "@/components/UI/BaseIcon.vue";
import { ref } from "vue";

import { useI18n } from "vue-i18n";
const { tm } = useI18n();

const isOpenRouteList = ref(false);

const onClickMenu = () => {
  isOpenRouteList.value = !isOpenRouteList.value;
};
</script>

<style lang="scss" scoped>


.navigation_list {
  display: none;
}

.menu_btn {
  padding: 8px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 50%;
}

.navigation_list_mobile {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  top: calc(100% + 10px);
  right: 0;
  width: 200px;
  z-index: 1;

  &_item {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

.router_link {
  font-size: 18px;
  line-height: 20px;
  color: $secondary_text_color;
  overflow: hidden;
  text-decoration: none;
}

@include for-size(tablet) {
  .menu_btn {
    display: none;
  }

  .navigation_list_mobile {
    display: none;
  }

  .navigation_list {
    display: flex;
    margin-left: auto;

    &_item {
      &:not(:last-child) {
        margin-right: 35px;
      }
    }
  }
}
</style>

<template>
  <Transition name="dropdown-fade">
    <ul
      :class="{navigation_list: true, bgColor: route.path === '/projects'}"
      v-if="isOpenList"
    >
      <li
        class="navigation_list_item"
        v-for="nav in navList"
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
</template>

<script lang="ts" setup>
defineProps({
  navList: {
    type: Array,
    default: () => [{
      path: String,
      name: String
    }]
  },
  isOpenList: {
    type: Boolean,
    default: false
  }
});

import { useRoute } from "vue-router";

const route = useRoute()
</script>

<style lang="scss" scoped>

.bgColor {
  padding: 10px 0;
  width: 100px !important;
  color: $text_color;
  background-color: rgb(0, 0, 0, 0.5);
  border-radius: 5px;
  top: calc(100% + 10px) !important;
}

.navigation_list {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + 30px);
  right: 0;
  width: 200px;
  z-index: 1;

.router_link{
  display: block;
  width: 100%;
}
  &_item {
    text-align: end;
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}

@include for-size(tablet) {
  .navigation_list {
    display: none;
  }
}
</style>

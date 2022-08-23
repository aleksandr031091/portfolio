<template>
  <Transition name="dropdown-fade">
    <ul
      class="navigation_list"
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
import { defineProps } from "vue";

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
</script>

<style lang="scss" scoped>
.router_link {
  font-size: 18px;
  line-height: 20px;
  color: $secondary_text_color;
  overflow: hidden;
  text-decoration: none;
}

.navigation_list {
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

@include for-size(tablet) {
  .navigation_list {
    display: none;
  }
}
</style>

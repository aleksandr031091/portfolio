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
.navigation_list {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: calc(100% + 10px);
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

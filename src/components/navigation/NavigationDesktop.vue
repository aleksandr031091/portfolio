<template>
  <ul class="navigation_list">
    <li
      class="navigation_list_item"
      v-for="link in navList"
    >
      <router-link
        class="router_link hover_text"
        :to="link.path"
      >
        {{ link.name }}
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>


defineProps({
  navList: {
    type: Array,
    default: () => [{
      path: String,
      name: String
    }]
  }
});
</script>

<style lang="scss" scoped>
.navigation_list {
  display: none;
}

@include for-size(tablet) {
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

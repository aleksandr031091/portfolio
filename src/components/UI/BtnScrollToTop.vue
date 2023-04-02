<template>
  <button
    :class="{
     scroll_button: isScrollPage,
     hiddenBtn: route.path === '/',
     zIndex: route.path !== '/'
  }"
    @click="onhandleClick"
  >
    <base-icon
      class="button_icon"
      name="dropdown-icon"
      color="#ffffff"
    />
  </button>
</template>

<script setup>
import BaseIcon from "@/components/UI/BaseIcon.vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const isScrollPage = ref(false);
const route = useRoute();

const onhandleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  window.scrollY > 600 ? isScrollPage.value = true : isScrollPage.value = false;
};

</script>

<style lang="scss" scoped>
.hiddenBtn {
  visibility: hidden;
}

.zIndex{
  z-index: 1;
}

.scroll_button {
  position: fixed;
  right: 20px;
  bottom: 110px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 20px;
  background-color: $background_color;
  background-image: $linear_gradient;
  border: none;
  border-radius: 100%;
  box-shadow: #22949A 0 0 0.25em, #22949A 0 0.25em 1em;

  transition: 1000ms;

  &:hover {
    background-color: $accent_color;
  }
}

.button_icon {
  transform: rotate(180deg);
}

@include for-size(tablet) {
  .scroll_button {
    bottom: 130px;
  }
}

@include for-size(desktop) {
  .scroll_button {
    right: 50px;
  }
}
</style>

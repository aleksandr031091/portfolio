<template>
  <button
    class="switch_btn"
    @click="onClickDropdown"
    v-click-outside="onClickOutside"
  >
    <base-icon
      class="flag_icon"
      :name="`flag-${$i18n.locale}`"
    />

    <base-icon
      :class="{dropdown_icon: true,isOpenList}"
      name="dropdown-icon"
      color="#ffffff"
    />

    <Transition name="dropdown-fade">
      <ul
        :class="{local_list:true,bgColor: route.path === '/projects'}"
        v-if="isOpenList"

      >
        <li
          class="local_list_item hover_text"
          @click="onChangeLocale(locale)"
          v-for="locale in tm('locales')"
          :key="locale"
        >
          <base-icon
            class="flag_icon"
            :name="`flag-${locale}`"
          />
          {{ locale }}
        </li>
      </ul>
    </Transition>
  </button>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import BaseIcon from "@/components/UI/BaseIcon.vue";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const { locale, tm } = useI18n();


onMounted(() => {
  console.log(locale);
  const lang = sessionStorage.getItem("locale")
  if (lang) {

    locale.value = lang

  } else {
    sessionStorage.setItem("locale", locale.value);
  }
});

const onChangeLocale = (lang: string) => {

  switch (lang) {
    case "английский":
    case "англійська":
      locale.value = "english";
      sessionStorage.setItem("locale", locale.value)
      break;
    case "russian":
    case "русский":
    case "російська":
      locale.value = "russian";
      sessionStorage.setItem("locale", locale.value)
      break;
    case "ukraine":
    case "украинский":
    case "українська":
      locale.value = "ukraine";
      sessionStorage.setItem("locale", locale.value)
      break;
    default:
      locale.value = 'english';
  }
};

const isOpenList = ref(false);

const onClickDropdown = () => {
  isOpenList.value = !isOpenList.value;
};

const onClickOutside = () => {
  isOpenList.value = false;
};
</script>

<style lang="scss" scoped>

.bgColor {
  color: $text_color;
  background-color: rgb(0, 0, 0, 0.5);
  border-radius: 5px;
}

.switch_btn {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  background-color: transparent;
  border: none;

  .flag_icon {
    margin-right: 5px;
  }

  .dropdown_icon {
    transition: 500ms;
  }

  .isOpenList {
    transform: rotateX(180deg);
  }
}

.local_list {
  position: absolute;
  top: calc(100% + 10px);
  padding: 0 10px 10px 0;
  z-index: 1;

  &_item {
    display: flex;
    align-items: center;
    font-size: 18px;
    text-transform: capitalize;
    cursor: pointer;

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}


@include for-size(tablet) {

  .local_list {
    left: 0;
  }
}

@include for-size(desktop) {

  .switch_btn {
    cursor: pointer;
  }
}
</style>

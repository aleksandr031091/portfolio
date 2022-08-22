<template>
  <div
    @click="onClickDropdown"
    class="switch_btn"
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
        class="local_list"
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
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import BaseIcon from "@/components/UI/BaseIcon.vue";
import { ref } from "vue";

const { locale, tm } = useI18n();
const onChangeLocale = (lang: string) => {
  switch (lang) {
    case "английский":
    case "англійська":
      locale.value = "english";
      break;
    case "русский":
    case "російська":
      locale.value = "russian";
      break;
    case "украинский":
    case "українська":
      locale.value = "ukraine";
      break;
    default:
      locale.value = lang;
  }
};

const isOpenList = ref(false);
const onClickDropdown = () => {
  isOpenList.value = !isOpenList.value;
};

</script>

<style lang="scss" scoped>
.switch_btn {
  position: relative;
  display: flex;
  align-items: center;
  color: $secondary_text_color;
  background-color: transparent;
  border: none;

  .flag_icon {
    margin-right: 5px;
    cursor: pointer;
  }

  .dropdown_icon {
    transition: 500ms;
    cursor: pointer;
  }

  .isOpenList {
    transform: rotateX(180deg);
  }
}

.local_list {
  position: absolute;
  top: calc(100% + 10px);
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
</style>

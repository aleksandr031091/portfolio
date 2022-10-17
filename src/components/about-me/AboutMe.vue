<template>

  <section id="about-me" class="section section_about">
    <div class="container">

      <img
        class="image"
        src="https://lh3.googleusercontent.com/CGveC4pRreouoeRc3AgsetQoRnRuiK11ZxTlkaTyzBE3BkAh29hz7xAiZrRcMCguWJFT3-6r47hF5oSeQlw_a2MzHmUBbAQyhON-QoRzdnjTc_xwI5vst5qb4gO-lw-g56E0ufH7=w2400"
        alt="my photo"
        width="500"
        referrerpolicy="no-referrer"
      >

      <p class="description">
        {{ tm("about-me.description") }}
      </p>

      <SoftSkills />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { tm } = useI18n();
// import {onMounted} from "vue";
//
// onMounted(() => {
//   window.addEventListener('scroll', paralaxScroll)
// })
// const paralaxScroll = () => {
//
//   const myImage = document.querySelector('.for_image')
//   const myDescription = document.querySelector('.my_description')
//
//   if (myImage && myDescription) {
//     myImage.style.top = window.scrollY / 5 + 1 + 'px'
//     myDescription.style.bottom = window.scrollY / 5 + 1 + 'px'
//   }
//
// }

import SoftSkills from "@/components/skills/SoftSkills.vue";
</script>

<style lang="scss" scoped>
.section_about {
  min-height: 100vh;
  box-shadow: inset 0px 10px 10px -12px $accent_color;
}

.image {
  margin: 0 auto 50px;
}

.description {
  position: static;
  margin-bottom: 100px;
  padding: 0 10px;
  font-size: 18px;
  text-align: center;
  color: $text_color;

}


@include for-size(mobile) {
  .section_about {
    background-image: url("/images/robot.png");
    background-repeat: no-repeat;
    background-position: 60px 100%;
  }

}

@include for-size(tablet) {
  .section_about {
    background-position: 150% 100%;
  }
}


@include for-size(desktop) {
  .image {

  }

  .section_about {
    background-image: url("/images/quadrocopter-1658967_640-2.png");
    background-repeat: no-repeat;
    background-position: 105% 100%;
  }
}


</style>

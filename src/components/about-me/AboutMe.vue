<template>

  <section id="about-me" class="section section_about">
    <div class="container">

      <img
        class="for_image"
        src="https://lh3.googleusercontent.com/KFY1xBx1B8pPwutTDgX9ePaQK8m5Gt7L_oPeHBqPQDTXjfOZNvMy11tnhoPgTLlFEsLtmmYYakEnjADKkaAYjV48qNEOOAMOgbsM21_sz6g-NUOQoqbMiMTZLpZSalsQY4tLauYg=w2400"
        alt="my photo"
        width="500"
      >


      <p class="my_description">
        I am a front-end developer looking for a full-time job in
        in a new team that is focused on making everyday tasks, life and business easier, more productive and more
        convenient.
        I have six months of practical experience working in a team. I am a fast learner and ready for challenging
        tasks.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
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
</script>

<style lang="scss" scoped>
.section_about {

  min-height: 100vh;
  box-shadow: inset 0px 10px 10px -12px $accent_color;
}


.for_image {
  position: static;
}

.my_description {
  position: static;
  padding: 0 10px;
  color: $text_color;
  text-align: center;

}


@include for-size(mobile) {


}

@include for-size(tablet) {

  .section_about {


  }


  .for_image {

  }

  .my_description {


  }
}


@include for-size(desktop) {
  .section_about {
    background-image: url("/images/quadrocopter-1658967_640-2.png");
    background-repeat: no-repeat;
    background-position: 105% 100%;
  }
}


</style>

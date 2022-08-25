<template>

  <section id="about-me" class="section section_about">
    <div class="container container_about">

      <img class="for_image" src="images/robot.png" alt="my photo">


      <p class="my_description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate esse eveniet hic illum, incidunt inventore
        ipsam laboriosam nihil numquam officia officiis pariatur quia rem repellat, saepe temporibus velit voluptas! A
        ipsa iure optio provident totam? Beatae cupiditate iste laudantium modi qui soluta! Alias architecto aspernatur
        at
        autem blanditiis harum labore, molestias nisi non officia porro quisquam quo suscipit velit vero voluptas
        voluptatem. Commodi consequuntur cum distinctio dolor doloribus id nobis perferendis reiciendis sint sit sunt
        tempore, vel? Alias animi consequuntur culpa dolorem eos eum eveniet ex iure nobis voluptate? Aperiam doloremque
        dolores in laborum minus possimus quo sint soluta veniam!
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
  overflow: hidden;
  padding: 0;

  box-shadow: inset 0px 10px 12px -12px $accent_color;

}

.container_about {


  .for_image {
    position: static;
  }

  .my_description {
    position: static;
    padding: 0 10px;
    //color: $secondary_text_color;
    text-align: center;

  }
}

@include for-size(mobile) {


}

@include for-size(tablet) {

  .section_about {
    height: 100vh;

  }

  .container_about {
    position: relative;
    height: 100%;


    .for_image {
      position: absolute;
      top: 0;
      left: 0;
      min-width: 500px;
      height: 500px;
      //background-color: grey;
    }

    .my_description {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 0 10px;

      width: 500px;
      height: 500px;
      //background-color: green;
    }
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

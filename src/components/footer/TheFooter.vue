<template>
  <section
      class="section section_footer"
      id="footer"
  >
    <div class="container">
      <footer class="footer">

        <div class="contact_link_wrapper">
          <a
              class="contact_link hover_text"
              href="mailto:aleksandrkasian0310@gmail.com"
          >
            aleksandrkasian0310@gmail.com
          </a>

          <a
              class="contact_link hover_text"
              href="tel:+380664696686"
          >
            +380664696686
          </a>
        </div>

        <div class="social_wrapper">
          <p class="social_title">Profiles</p>
          <div class="icon_box">
            <a
                class="icon_box_item"
                target="_blank"
                href="https://github.com/aleksandr031091"
            >
              <base-icon
                  name="git"
              />
            </a>

            <a
                class="icon_box_item"
                target="_blank"
                href="https://www.linkedin.com/in/aleksandr-kasian-0310/"
            >
              <base-icon
                  name="link-in"
              />
            </a>

            <a
                class="icon_box_item"
                target="_blank"
                href="https://www.instagram.com/vsenamnogoproshe/"
            >
              <base-icon
                  name="instagram"
              />
            </a>

            <a
                class="icon_box_item"
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100015199141489"
            >
              <base-icon
                  name="facebook"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>

<script lang="ts" setup>


import BaseIcon from "@/components/UI/BaseIcon.vue";
</script>

<style lang="scss" scoped>
.section_footer {
  padding: 20px 0;
}


.contact_link_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  .contact_link {
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 20px;
    color: $secondary_text_color;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &:hover {
      background-position: 0 100%;
    }
  }
}


.social_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;


  .social_title {
    font-size: 25px;
    margin-bottom: 20px;
  }

  .icon_box {
    display: flex;
    justify-content: center;

    &_item {
      fill: white;
      transition: 300ms;

      &:not(:last-child) {
        margin-right: 10px;
      }


      &:hover {
        fill: #38f5ff;
      }
    }
  }
}

@include for-size(tablet) {
  .section_footer {
    padding-bottom: 50px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
  }

  .contact_link_wrapper {
    align-items: flex-start;
    margin: 0;

    .contact_link{

      &:first-child{
        margin-bottom: 15px;
      }
    }
  }

  .social_wrapper {
    flex-direction: row;

    .social_title{
      margin: 0 20px 0;
    }

    .icon_box_item:not(:last-child){
      margin-right: 20px;
    }
  }
}

@include for-size(desktop) {

}

</style>

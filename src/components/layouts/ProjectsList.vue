<template>
  <ul class="list_card">
    <li
      class="card"
      v-for="project in projects"
      :key="project.image"
    >
      <img
        class="card_image"
        :src="`/images/${project.image}`"
        loading="lazy"
        alt="image of site"
      />

      <div class="card_box">
        <div>
          <h3 class="card_box_title">{{ project.title }}</h3>
          <p class="card_box_description">{{ project.description }}</p>
        </div>

        <div>
          <p class="technology_description">
            <span class="technology_title">Technology:</span>
            {{ project.technology }}
          </p>
          <div class="link_wrapper">
            <a
              v-if="project.githubLink"
              class="link"
              :href="project.githubLink"
              target="_blank"
            >
              code
            </a>

            <a
              v-if="project.githubLink"
              class="link"
              :href="project.githubLink"
              target="_blank"
            >
              site
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import BaseBtn from "@/components/UI/BaseBtn.vue";

defineProps({
  projects: {
    type: Array,
    default: () => [{
      image: String,
      title: String,
      technology: String,
      description: String,
      githubLink: String
    }]
  }
});


</script>

<style lang="scss" scoped>
.card {
  //position: relative;
  //width: 100%;
  padding: 7px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
  //border: 1px solid #22949A;
  border-radius: 5px;
  box-shadow: #22949A 0px 0px 0.25em, #22949A 0px 0.25em 1em;
  //box-shadow: #22949A 0px 0px 5px 0px, #22949A 0px 0px 1px 0px;

  &_image {
    min-height: 228px;
  }
}

.card_box {
  //top: 0;
  //left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  min-height: 218px;
  //width: 100%;
  //height: 100%;
  //background-color: #333333;
  //background-image: linear-gradient(
  //    rgba(47, 48, 58, 0.5),
  //    rgba(47, 48, 58, 0.5)
  //);

  &_title {
    font-weight: 500;
    font-size: 21px;
    margin-bottom: 10px;
  }


  &_description {
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 15px;
  }

  .technology_description {
    margin-bottom: 10px;
    font-size: 15px;

    .technology_title {
      font-size: 17px;
      font-weight: 500;
    }
  }


  .link_wrapper {
    display: flex;
    justify-content: space-between;

    .link {
      min-width: 100px;
      text-align: center;
      padding: 10px 20px;
      color: $secondary_text_color;
      background-color: $accent_color;
      background-image: linear-gradient(
          rgba(47, 48, 58, 0.5),
          rgba(47, 48, 58, 0.5)
      );
      border-radius: 100%;
    }
  }
}

@include for-size(tablet) {
  .list_card {
    display: flex;
    flex-wrap: wrap;
    margin-top: -20px;
    margin-left: -20px;
  }

  .card {
    margin-top: 20px;
    margin-left: 20px;
    width: calc((100% / 2) - 20px);

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }

  .card_image {
    //min-height: 417px;
  }
}

@include for-size(desktop) {
  .card_image {
    min-height: 577px;
  }
}
</style>

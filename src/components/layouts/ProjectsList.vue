<template>
  <ul class="list_card">
    <li
      class="card"
      v-for="project in projects"
      :key="project.image"
    >
      <img :src="`/images/${project.image}`" loading="lazy" alt="image of site" />

      <div class="card_box">
        <h3 class="card_box_title">{{ project.title }}</h3>
        <p class="card_box_description">{{ project.description }}</p>
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
  position: relative;
  width: 100%;
  min-height: 228px;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
}

.card_box {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 5px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.5),
      rgba(47, 48, 58, 0.5)
  );

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
    margin-bottom: 5px;
    font-size: 15px;

    .technology_title {
      font-size: 17px;
      font-weight: 500;
    }
  }


  .link_wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;

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
  .card {
    min-height: 417px;
  }
}

@include for-size(desktop) {
  .card {
    min-height: 577px;
  }
}
</style>

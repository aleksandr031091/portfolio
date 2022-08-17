<template>
  <ul>
    <li
        class="projects_card"
        v-for="project in projects"
        :key="project.image"
    >
      <img class="projects_card_image" :src="`/images/${project.image}`"/>
      <div class="projects_card_box">
        <h3 class="projects_card_title">{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <p>{{ project.technology }}</p>

<!--        <router-link-->
<!--            class="router_link hover_text"-->
<!--            :to="project.githubLink"-->
<!--            target="_blank"-->
<!--        >-->
<!--          code-->
<!--        </router-link>-->

<!--        <router-link-->
<!--          class="router_link hover_text"-->
<!--          :to="project.githubLink"-->
<!--          target="_blank"-->
<!--        >-->
<!--          site-->
<!--        </router-link>-->
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
})


</script>

<style lang="scss" scoped>
.projects_card {
  position: relative;
  //width: 200px;
  //height: 200px;
  //background-size: cover;
  //background-position: center;
  //background-repeat: no-repeat;


  &_image {

  }

  &_box {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    width: 100%;
    height: 100%;
    //color: black;
    background-image: linear-gradient(
            rgba(47, 48, 58, 0.5),
            rgba(47, 48, 58, 0.5)
    )
  }

  &_title {

  }
}

</style>

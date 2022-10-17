<template>
  <ul class="list_card">
    <li
      class="card"
      v-for="project in projects"
      :key="project.image"
    >
      <img
        class="card_image"
        :src="`${project.image}`"
        loading="lazy"
        alt="image of site"
        referrerpolicy="no-referrer"
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

          <ul class="list_link_wrapper">
            <a
              tag="li"
              v-if="project.githubLink"
              class="list_link_item"
              :href="project.githubLink"
              target="_blank"
            >
              {{ project.btnCodename }}
            </a>

            <a
              tag="li"
              v-if="project.siteLink"
              class="list_link_item"
              :href="project.siteLink"
              target="_blank"
            >
              {{ project.btnAppName }}
            </a>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" setup>

defineProps({
  projects: {
    type: Array,
    default: () => [{
      image: String,
      title: String,
      technology: String,
      description: String,
      githubLink: String,
      siteLink: String,
      btnCodename: String,
      btnAppName: String
    }]
  }
});


</script>

<style lang="scss" scoped>
.card {
  padding: 7px;
  border-radius: 5px;
  box-shadow: #22949A 0px 0px 0.25em, #22949A 0px 0.25em 1em;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  &_image {
    min-height: 228px;
  }
}

.card_box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  min-height: 218px;

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
    margin-bottom: 20px;
    font-size: 15px;

    .technology_title {
      font-size: 17px;
      font-weight: 500;
    }
  }


  .list_link_wrapper {
    display: flex;
    flex-direction: column;

    .list_link_item {
      min-width: 100px;
      text-align: center;
      padding: 10px 20px;
      color: $text_color;
      background-color: $accent_color;
      background-image: $linear_gradient;
      box-shadow: 1px 3px 5px rgba(255, 255, 255, 0.3);

      &:first-child{
        margin-bottom: 20px;
      }
    }

  }
}

@include for-size(tablet) {
  .list_card {
    display: flex;
    flex-wrap: wrap;
    margin: -20px 0 0 -20px;
  }

  .card {
    margin: 20px 0 0 20px;
    width: calc((100% / 2) - 20px);

    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
}

@include for-size(desktop) {
  .list_card {
    margin: 0;


    .card {
      position: relative;
      margin: 0;
      padding: 0;
      width: 100%;
      border-radius: 0;
      box-shadow: -25px 25px 118px 6px rgba(34, 148, 154, 1),;

      transition: 800ms;
      transform: perspective(3000px) rotateX(35deg) rotateY(10deg) rotate(-10deg) skew(5deg) scale(0.8);
      overflow: hidden;

      &:hover {
        box-shadow: #22949A 0px 0px 0.25em, #22949A 0px 0.25em 1em;
        transform: rotateY(0deg) rotateX(0deg) scale(1) translateY(5px);

        .card_box {
          bottom: 0;
        }
      }

      &_image {
        min-height: 577px;
      }
    }

    .card_box {
      position: absolute;
      bottom: -250px;
      left: 0;
      padding: 20px 15px 20px;
      width: 100%;
      background-image: $linear_gradient;
      transition: 500ms;

      &_description {
        margin-bottom: 15px;
      }
    }

    .list_link_wrapper{
      flex-direction: row;
      justify-content: space-between;

      .list_link_item {
        min-width: 100px;
        text-align: center;
        padding: 10px 20px;
        color: $text_color;
        background-color: $accent_color;
        background-image: $linear_gradient;
        border-radius: 100%;
        box-shadow: 1px 5px 5px rgba(255, 255, 255, 0.5), 0 0 16px rgba(255, 255, 255, 1) inset;

        transition: 300ms;
        &:hover{
          color: $accent_color;
          transform: scale(1.1);
          box-shadow: 0px 1px 3px rgba(255, 255, 255, 0.5), 0 0 7px rgba(255, 255, 255, 1) inset;
        }
        &:first-child{
          margin-bottom: 0;
        }
      }
    }

  }
}
</style>

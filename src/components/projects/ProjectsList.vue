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
        <h3 class="card_box_title">{{ project.title }}</h3>
        <p class="card_box_description">{{ project.description }}</p>

        <p class="technology_description">
          <span class="technology_title">Technology:</span>
          {{ project.technology }}
        </p>

        <ul class="list_link">
          <li
            class="list_link_item"
            v-if="project.githubLink"
          >
            <a
              tag="li"
              class="link"
              :href="project.githubLink"
              target="_blank"
            >
              {{ project.btnCodename }}
            </a>
          </li>

          <li
            class="list_link_item"
            v-if="project.siteLink"
          >
            <a
              tag="li"
              class="link"
              :href="project.siteLink"
              target="_blank"
            >
              {{ project.btnAppName }}
            </a>

          </li>
        </ul>

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7px;
  max-height: 560px;

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


  .list_link {
    display: flex;
    flex-direction: column;


    .list_link_item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0px 1px 3px $text_color, 0px 1px 3px $text_color;
      transition: 500ms;

      &:first-child {
        margin-bottom: 20px;
      }
    }

    .list_link_item:hover {
      box-shadow: none;
    }

    .list_link_item::before {
      content: '';
      position: absolute;
      width: 600px;
      height: 600px;
      background: linear-gradient($accent_color, $text_color);
      animation: animate 5s linear infinite;
    }

    .link {
      width: 100%;
      height: 100%;
      text-align: center;
      padding: 10px 20px;
      color: $text_color;
      background: $background_color;
      border-radius: 8px;
      background-image: $linear_gradient;
      transition: 300ms;
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
      max-height: 100%;
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

    .list_link {
      flex-direction: row;
      justify-content: space-between;

      .list_link_item:first-child {
        margin-bottom: 0;
      }

      .list_link_item::before {
        width: 200px;
        height: 200px;
      }

      .link {

        &:hover {
          transform: scale(1.1);
        }

        &:first-child {
          margin-bottom: 0;
        }
      }
    }

  }
}
</style>

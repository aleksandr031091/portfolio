<template>
  <section id="skills" class="section section_skills">
    <div class="container">
      <ul class="list_icons">
        <li
          class="list_icons_item"
          v-for="technology in technologyList"
          :key="technology"
        >

          <base-icon
            class="icon"
            :name="technology"
          />
          {{ technology }}

          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import BaseIcon from "@/components/UI/BaseIcon.vue";

const technologyList = [
  "javaScript", "typeScript", "html", "css", "vue", "nuxt", "figma", "firebase", "git", "docker"
];
</script>

<style lang="scss" scoped>
.section.section_skills {
  padding: 50px 0 100px;
}

.list_icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 40px;
  padding: 0 25px;

  &_item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 25px 25px 15px;
    font-size: 17px;
    letter-spacing: 2px;

    transform: rotateX(15deg) rotateY(10deg) rotate(-10deg) skew(15deg);
    box-shadow: #22949A 0px 0px 0.25em, #22949A 0px 0.25em 1em;
    border-radius: 5px;
  }

  .icon {
    margin-bottom: 10px;
  }

  &_item span:nth-child(2),
  &_item span:nth-child(3),
  &_item span:nth-child(4),
  &_item span:nth-child(5),
  &_item span:nth-child(6) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: #22949A 0 0 0.25em, #22949A 0 0.25em 1em;
    transform: translate(-20px, 20px);
    z-index: -1;
    border-radius: 5px;
  }

  &_item span:nth-child(3) {
    transform: translate(-15px, 15px);
  }

  &_item span:nth-child(4) {
    transform: translate(-10px, 10px);
  }

  &_item span:nth-child(5) {
    transform: translate(-5px, 5px);
  }

  &_item span:nth-child(6) {
    transform: translate(-1px, 1px);
  }
}


@include for-size(mobile) {
  .list_icons {
    column-gap: 70px;
  }
}

@include for-size(desktop) {
  .section.section_skills {
    padding: 50px 0 200px;
  }

  .list_icons {
    column-gap: 80px;
  }
}
</style>

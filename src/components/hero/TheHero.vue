<template>
  <section class="section_hero">
    <div class="container">
      <h1 class="title">{{ $t("hero.title") }}</h1>
      <p class="description">{{ $t("hero.description") }}</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.section_hero {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 73px);
  text-align: center;
  background-repeat: no-repeat;
  background-size: 150%;
  background-image: $linear_gradient, url("/images/finger-640.png");
  background-position: center;

  .title {
    display: inline-block;
    margin-bottom: 21px;
    padding: 5px 20px;
    font-size: 30px;
    line-height: 40px;
    border: 3px solid $text_color;
  }

  .description {
    font-size: 16px;
    line-height: 26px;
  }
}

@include for-size(mobile) {
  .section_hero {
    height: calc(100vh - 50px);
    background-size: 120%;
    background-image: $linear_gradient,
    url("/images/finger-640.png");

    .title {
      padding: 10px 40px;
      font-size: 40px;
    }

    .description {
      font-size: 18px;
    }
  }
}

@include for-size(tablet) {
  .section_hero {
    background-size: contain;
    background-image: $linear_gradient,
    url("/images/finger-1280.png")
  }
}

@include for-size(desktop) {
  .section_hero {
    background-image: $linear_gradient,
    url("/images/finger-1820.png");

    .title {
      padding: 20px 70px;
      font-size: 50px;
    }

    .description {
      font-size: 23px;
    }
  }
}

</style>

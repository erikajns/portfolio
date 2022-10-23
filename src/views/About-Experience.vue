<template>
  <div class="about-more page container animate__animated animate__fadeInLeftBig">
    <div class="about-more__experience-detail">
      <h1>{{ this.companyName }}</h1>
      <h3>{{ this.jobTitle }}</h3>
      <div v-for="(experience, index) in experienceInfo" :key="index">
        <p><font-awesome-icon class="icon" :icon="['fas', 'code-commit']" /> {{ experience }}</p>
      </div>
      <router-link to="/experience">Back</router-link>
    </div>
    <div class="about-more__experience-image">
      <img :src="`${publicPath}${this.experienceImage}`" />
    </div>
  </div>
</template>

<script>
export default {
  name: "about-experience-page",
  data() {
    return {
      experienceInfo: this.$route.query.experience,
      publicPath: process.env.BASE_URL,
      experienceImage: this.$route.query.image,
      companyName: this.$route.query.company,
      jobTitle: this.$route.query.position,
    };
  },
};
</script>

<style lang="scss">
@import "./../variables.scss";
.about-more {
  display: flex;
  flex-direction: column-reverse;
  max-width: 100vw;
  text-align: left;
  justify-content: center;

  &__experience-image {
    max-width: 100%;

    img {
      width: 100%;
    }
  }

  .icon{
    color: $main-yellow;
  }

  h1 {
      font-family: Bree Serif;
    }
}

@media (min-width: map-get($grid-breakpoints, "md")) {
  .about-more {
    &__experience-image {
      max-width: 350px;
    }
  }
}

@media (min-width: map-get($grid-breakpoints, "lg")) {
  .about-more {
    flex-direction: row;
    &__experience-detail {
      flex: 1;
      margin-right: 50px;
      max-width: 50%;
    }
    &__experience-image {
      flex: 1;
      max-width: 40%;
      margin-top: 10%;
    }
  }
}
</style>

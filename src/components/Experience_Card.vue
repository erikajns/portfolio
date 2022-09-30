<template>
  <div class="experience-card" :style="{backgroundImage:`url(${publicPath}${this.background})`}">
    <div class="experience-card__overlay">
      <h3 class="experience-card__company-name">{{ this.companyName }}</h3>
      <p class="experience-card__job-position">{{ this.jobPosition }}</p>
      <p class="experience-card__year">{{ this.year }}</p>

      <router-link :to="{path: '/experience/about-experience', query: { experience: this.experience, image: this.image, company: this.companyName, position: this.jobPosition}}">Read More...</router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "experience-card",
  props: {
    companyName: {
      type: String,
      default: "",
    },
    jobPosition: {
      type: String,
      default: "",
    },
    year: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "",
    },
    experience: {
      type: Array,
      default() {
        return [];
      },
    },
    image: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss">
@import "./../variables.scss";

.experience-card {
  width: 250px;
  height: 400px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &__overlay {
    background-color: rgba(25, 25, 25, 0.5);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    color: white;
    height: 100%;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 30px;
  }
}

@media (min-width: map-get($grid-breakpoints, "md")) {
    .experience-card {
        width: 300px;
    }
  }

  @media (min-width: map-get($grid-breakpoints, "xxl")) {
    .experience-card {
        width: 350px;
    }
  }

</style>

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
@import "./../../variables.scss";
@import "/sass/Experience-Card.scss";
</style>

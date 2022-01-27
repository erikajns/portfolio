<template>
  <div class="experience-card" :style="this.backgroundURL">
    <div class="experience-card__overlay">
      <h3 class="experience-card__company-name">{{ this.companyName }}</h3>
      <p class="experience-card__job-position">{{ this.jobPosition }}</p>
      <p class="experience-card__year">{{ this.year }}</p>
      <button>Read more...</button>
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
    backgroundURL: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "./../../variables.scss";
@import "/sass/Experience-Card.scss";
</style>

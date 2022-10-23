<template>
  <div class="experience-title page container">
    <h1>Experience</h1>
  </div>
  <div class="experience container">
    <div v-for="(experience, index) in experienceInfo" :key="index">
      <experience-card
        :companyName="experience.company"
        :jobPosition="experience.position"
        :year="experience.year"
        :experience="experience.experience"
        :image="experience.image"
        :background="experience.bg"
      ></experience-card>
    </div>
  </div>
</template>

<script>
import ExperienceCard from "../components/Experience_Card.vue";
import data from "./../data/data.json";

export default {
  components: { ExperienceCard },
  name: "experience-page",
  data() {
    return {
      experienceInfo: data.Experience,
    };
  },
};
</script>

<style lang="scss">
@import "./../variables.scss";
.experience {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

@media (min-width: map-get($grid-breakpoints, "xxl")) {
  .experience {
    margin-top: 5%;
  }

  .experience-title {
    margin-top: 5%;
  }
}
</style>

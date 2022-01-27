<template>
  <div class="experience-title container">
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
      ></experience-card>
    </div>
  </div>
</template>

<script>
import ExperienceCard from "./../components/Experience-Card/Experience-Card.vue";
import experienceData from "./../data/experience.json";

export default {
  components: { ExperienceCard },
  name: "experience-page",
  data() {
    return {
      experienceInfo: experienceData,
    };
  },
};
</script>

<style lang="scss">
@import "./../variables.scss";
.experience {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10%;
  align-items: center;
  justify-content: space-around;
}
</style>

<template>
  <div class="experience-card" :style="this.backgroundURL">
    <div class="experience-card__overlay">
      <h3 class="experience-card__company-name">{{ this.companyName }}</h3>
      <p class="experience-card__job-position">{{ this.jobPosition }}</p>
      <p class="experience-card__year">{{ this.year }}</p>
      <button @click="openModal">Read more...</button>
      <experience-modal :openModal="this.modalOpen">
        <p>{{ this.experience }}</p>
        <div class="experience-modal__image">
        <img :src="`${publicPath}${this.image}`">
        </div>
      </experience-modal>
    </div>
  </div>
</template>

<script>
import ExperienceModal from "../Modal/Experience-Modal.vue";
export default {
  components: { ExperienceModal },
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
      modalOpen: false,
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
  },
};
</script>

<style lang="scss">
@import "./../../variables.scss";
@import "/sass/Experience-Card.scss";
</style>

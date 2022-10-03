<template>
  <div class="quote-card">
      <p>{{description}}</p>
      <p>{{name}}</p>
      <p>{{job}} at {{company}}</p>
  </div>
</template>

<script>
export default {
  name: "experience-card",
  props: {
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    job: {
      type: String,
      default: "",
    },
    company: {
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

.quote-card{
  width: 250px;
  height: 400px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
}

@media (min-width: map-get($grid-breakpoints, "md")) {
    .quote-card {
        width: 300px;
    }
  }

  @media (min-width: map-get($grid-breakpoints, "xxl")) {
    .quote-card {
        width: 350px;
    }
  }

</style>

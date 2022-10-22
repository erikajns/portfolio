<template>
  <div class="quote-card">
      <p class="quote-card__description">{{description}}</p>
      <p class="quote-card__name">{{name}}</p>
      <p class="quote-card__job">{{job}} at {{company}}</p>
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
};
</script>

<style lang="scss">
@import "./../variables.scss";

.quote-card{
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  border: 1px solid $blue;
  text-align: left;
}

</style>

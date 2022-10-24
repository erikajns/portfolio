<template>
  <div class="quote-card">
    <font-awesome-icon
      class="fas fa-quote-left fa2"
      :icon="['fas', 'quote-left']"
    />
    <div class="text">
      <font-awesome-icon
        class="fas fa-quote-right fa1"
        :icon="['fas', 'quote-left']"
      />
      <div>
        <p class="quote-card__description">{{ description }}</p>
        <h3 class="quote-card__name">{{ name }}</h3>
        <p class="quote-card__job copy-grey">{{ job }} at {{ company }}</p>
      </div>
    </div>
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

<style lang="scss" scoped>
@import "./../variables.scss";

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.quote-card {
  background-color: transparent;
  border-radius: 0.188rem;
  color: #fff;
  width: 18.75rem;
  height: 22.813rem;
  transform-style: preserve-3d;
  perspective: 125rem;
  transition: 0.4s;
  text-align: center;
  margin: 3rem 0;
  &__name {
    margin-top: 1rem;
    font-size: 1rem;
  }
  &__description {
    color: $blue;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    border-top: 1.25rem solid $blue;
    border-left: 1.25rem solid $blue;
    box-sizing: border-box;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1.25rem solid $blue;
    border-right: 1.25rem solid $blue;
    box-sizing: border-box;
  }
  .fas {
    font-size: 1.25rem;
    height: 2.5rem;
    width: 2.5rem;
    background-color: $blue;
    color: $main-yellow;
  }
  .fa2 {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  .text {
    position: absolute;
    top: 1.875rem;
    left: -1.875rem;
    width: calc(100% + 3.75rem);
    height: calc(100% - 3.75rem);
    background-color: #ccc;
    border-radius: 0.188rem;
    transition: 0.4s;
    .fa1 {
      position: absolute;
      top: 0;
      left: 0;
    }
    div {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      text-align: center;
      width: 100%;
      padding: 1.875rem 3.75rem;
      line-height: 1.5;
      box-sizing: border-box;
      p {
        font-size: 0.938rem;
      }
    }
  }
  &:hover {
    .text {
      transform: rotateY(20deg) skewY(-3deg);
    }
    transform: rotateY(-20deg) skewY(3deg);
  }
}
@media (min-width: map-get($grid-breakpoints, "lg")) {
  .quote-card {
    margin: 0 3rem;
    width: 21.875rem;
    height: 18.75rem;
  }
}
</style>

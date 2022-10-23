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
  border-radius: 3px;
  color: #fff;
  width: 300px;
  height: 365px;
  transform-style: preserve-3d;
  perspective: 2000px;
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
    border-top: 20px solid $blue;
    border-left: 20px solid $blue;
    box-sizing: border-box;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 20px solid $blue;
    border-right: 20px solid $blue;
    box-sizing: border-box;
  }
  .fas {
    font-size: 20px;
    height: 40px;
    width: 40px;
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
    top: 30px;
    left: -30px;
    width: calc(100% + 60px);
    height: calc(100% - 60px);
    background-color: #ccc;
    border-radius: 3px;
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
      padding: 30px 60px;
      line-height: 1.5;
      box-sizing: border-box;
      p {
        font-size: 15px;
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
    width: 350px;
    height: 300px;
  }
}
</style>

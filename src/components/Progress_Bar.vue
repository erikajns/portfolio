<template>
  <div class="animate__animated animate__fadeIn">
    <p>{{ label }}</p>
    <progress :value="value" :max="maxValue"></progress>
  </div>
</template>

<script>
export default {
  name: "progress-bar",
  props: {
    value: {
      type: Number,
      default: 10,
    },
    maxValue: {
      type: Number,
      default: 100,
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../variables.scss";

progress {
  -webkit-appearance: none;
  width: 50%;
}

::-webkit-progress-bar {
  background-color: rgba(255, 255, 255, 0.09) !important;
}

::-webkit-progress-value {
  background: $main-yellow;
}
</style>

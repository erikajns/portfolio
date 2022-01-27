<template>
  <div class="experience-modal" v-show="openModal">
      <div class="experience-modal__content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "experience-modal",
  data() {
    return {
    };
  },
  props: {
    openModal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import "./sass/Modal.scss";
</style>

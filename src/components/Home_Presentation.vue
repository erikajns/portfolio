<template>
  <div>
    <h1>
      I'm a
      <span class="typed-text">{{ typeValue }}</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "Frontend Developer.",
        "Aspiring Project Manager.",
        "UI/UX Designer.",
      ],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    /**
     * Function in charge of typing the text
     */
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    /**
     * Function in charge of deleting the text
     */
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    /**
     * Manage the delay when the component is created
     */
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style lang="scss" scoped>
@import "./../variables.scss";

h1 {
  font-size: 2rem;
  font-weight: 600;
  color: #0000;
  margin: 0;
  span.typed-text {
    color: #d2b94b;
  }
  span.cursor {
    display: inline-block;
    margin-left: 0.188rem;
    width: 0.25rem;
    background-color: $blue;
    animation: cursorBlink 1s infinite;
  }
  span.cursor.typing {
    background-color: $blue;
    animation: cursorBlink 1s infinite;
  }
}
@keyframes cursorBlink {
  49% {
    background-color: $blue;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>

<template>
  <form ref="form" @submit.prevent="sendEmail">
    <input type="text" name="user_name" placeholder="Name" />
    <input type="email" name="user_email" placeholder="Email" />
    <textarea name="message" placeholder="Message"></textarea>
    <input type="submit" value="Send" class="submit-button" />
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "contact-form",
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_3kzy1ak",
          "template_z3hc40s",
          this.$refs.form,
          "Ob27sIJCG3grhjWXz"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./../variables.scss";

form {
  display: flex;
  flex-direction: column;
  padding: 3rem;
  background-color: white;
  color: $blue;
  align-items: center;
  input,
  textarea {
    font-family: Muli, sans-serif;
    outline: none;
    margin: 0;
    width: 100%;
    font-size: 14px;
    padding: 16px;
    margin-bottom: 2rem;
    border: 1px solid #e1e1e1;
  }

  textarea {
    height: 100px;
    font-family: Muli, sans-serif;
  }

  .submit-button {
    outline: none;
    width: 5rem;
    background-color: $main-yellow;
    color: $blue;
    border: none;
    font-weight: 700;
    font-size: 1rem;
  }
}

@media (min-width: map-get($grid-breakpoints, "lg")) {
  form {
    width: calc(70vw / 2);
  }
}
</style>

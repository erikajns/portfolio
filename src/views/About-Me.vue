<template>
  <div class="about-me container page">
    <div class="about-me__image">
      <img :src="`${publicPath}me.jpeg`" />
    </div>
    <div class="about-me__detail">
      <div class="about-me__general-information">
        <h1>Who is Erika professionally and personally?</h1>
        <p>
          Technology and business savvy and an achiever; I believe in getting
          stuff done but having a good time along the way!<br />
          I love Frontend development but I aspire to become in the future an
          exceptional Project Coordinator and eventually Technical Project
          Manager contributing with the fullest of my knowledge.<br /><br />
          In my free time I love to travel and meet new people, places and
          cultures, hike, netflix and also I volunteer to give back a little to
          society. <br /><br />
          Feel free to connect with me or contact me for any opportunities,
          <b>I am open and will be thrilled for a relocation to Canada.</b>
        </p>
        <div class="about-me__buttons">
          <a
            target="_blank"
            id="about-me__button"
            href="https://drive.google.com/drive/folders/1OvxS2ue6fDZoO5sDzycT5q1n-MW20w3H?usp=sharing"
            >See Professional Certificates</a
          >
          <a
            target="_blank"
            :href="`${publicPath}Erika_Jones_Resume_Dev_102022.pdf`"
            download="Erika-Jones_Resume"
            >Download Current CV</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="about-me__philosophy">
    <h2>My Philosophy</h2>
    <div class="philosophy">
      <div class="philosophy__info">
        <div class="philosophy__info-number">
          <h2>01</h2>
        </div>
        <div class="philosophy__info-description">
          <h3 class="no-margins">Responsibility</h3>
          <p class="no-margins">
            I do what I say I'll do and I take ownership in the way. <br />I am
            committed to stable values like honesty and loyalty.
          </p>
        </div>
      </div>
      <div class="philosophy__info">
        <div class="philosophy__info-number">
          <h2>02</h2>
        </div>
        <div class="philosophy__info-description">
          <h3 class="no-margins">Achiever</h3>
          <p class="no-margins">
            I work hard and take immerse satisfaction of doing it. <br />I
            believe hard work is the most important factor that leads to
            success.
          </p>
        </div>
      </div>
      <div class="philosophy__info">
        <div class="philosophy__info-number">
          <h2>03</h2>
        </div>
        <div class="philosophy__info-description">
          <h3 class="no-margins">Arranger</h3>
          <p class="no-margins">
            I like to be organized with everything my time, my tasks, my
            schedule: when I am going to start something and when do I have to
            deliver it. <br />But I am also flexible that's a good ability to
            complement.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="about-me__contact-form">
    <div class="contact-form__info">
      <h4>GET IN TOUCH</h4>
      <h2>Let's Work Together!</h2>
      <div class="contact-form__info-contact">
        <div>
          <font-awesome-icon :icon="['fas', 'phone']" />
          Phone: (+506) 8711-5083
        </div>
        <div>
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          Current address: Santa Ana, Costa Rica.
        </div>
      </div>
      <hr />
      <div class="contact-form__info-rrss">
        <div>
          <a
            class="no-background"
            href="https://linkedin.com/in/erikajns"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            LinkedIn
          </a>
        </div>
        <div>
          <a
            class="no-background"
            href="https://github.com/erikajns?tab=repositories"
            target="_blank"
          >
            <font-awesome-icon :icon="['fab', 'github']" />
            Github
          </a>
        </div>
        <div>
          <a
            class="no-background"
            :href="`mailto:${myMail}`"
            target="_blank"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" />
            Email Job opportunities
          </a>
        </div>

      </div>
      <hr />
    </div>
    <contact-form></contact-form>
  </div>
</template>

<script>
import ContactForm from "../components/Contact_Form.vue";

export default {
  name: "about-page",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      myMail: "erika.jns@hotmail.com",
    };
  },
  components: { ContactForm },
};
</script>

<style lang="scss">
@import "./../variables.scss";

.about-me {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  text-align: left;
  justify-content: center;
  margin-bottom: 3rem;

  &__general-information {
    h1 {
      font-family: Bree Serif;
      font-weight: 400;
    }
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    text-align: center;

    a {
      margin-top: 1rem;
      max-width: 300px;
    }
  }

  &__contact-form {
    background-color: $blue;
    padding: 3rem;
    text-align: left;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    hr {
      border-width: 0.5px;
    }

    h2 {
      font-size: 3.2rem;
      font-family: Bree Serif;
      font-weight: 400;
    }

    .contact-form__info {
      margin: 2rem 0;

      &-contact,
      &-rrss {
        display: flex;
        margin: 2rem 0;
      }

      &-contact div {
        width: 350px;
        margin-right: 0.5rem;
      }
    }
  }

  &__philosophy {
    background-color: $main-yellow;
    padding: 1rem;
    text-align: left;

    .philosophy {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 100vw;
      margin: 0 auto 2rem;

      &__info {
        margin: 1rem;

        &-number h2 {
          font-size: 3.5rem;
          margin: 0;
          font-family: Bree Serif;
          font-weight: 400;
          color: white;
        }
      }
    }
  }

  &__image {
    max-width: 100%;

    img {
      width: 100%;
      border-radius: 50% 0;
    }
  }
}

@media (min-width: map-get($grid-breakpoints, "md")) {
  .about-me {
    &__image {
      max-width: 350px;
    }
  }
}

@media (min-width: map-get($grid-breakpoints, "lg")) {
  .about-me {
    flex-direction: row;
    &__detail {
      flex: 1;
      max-width: 50%;
    }
    &__image {
      flex: 1;
      max-width: 26%;
      margin-right: 90px;
    }
    &__buttons {
      flex-direction: row;

      a {
        margin-top: 1rem;
        margin-right: 1rem;
        max-width: 350px;
      }
    }

    &__philosophy {
      text-align: center;
      .philosophy {
        flex-direction: row;
        max-width: 90%;
        align-items: center;
        text-align: left;
        margin: 0 auto 2rem;

        &__info {
          width: 430px;
        }
      }
    }

    &__contact-form {
      flex-direction: row;

      .contact-form__info {
        margin: 0 2rem;
        width: calc(70vw / 2);
      }
    }
  }
}
</style>

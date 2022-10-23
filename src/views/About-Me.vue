<template>
  <div class="about-me container page">
    <div class="about-me__image">
      <img :src="`${publicPath}me.jpeg`" />
    </div>
    <div class="about-me__detail">
      <div class="about-me__general-information">
        <h1>Who is Erika professionally and personally?</h1>
        <p class="no-margins">
          Technology and business savvy and an achiever; I believe in getting
          stuff done but having a good time along the way!<br />
          I love Frontend development but I aspire to become in the future an
          exceptional Project Coordinator and eventually Technical Project Manager
          contributing with the fullest of my knowledge.<br /><br />
          In my free time I love to travel and meet new people, places and
          cultures, hike, netflix and also I volunteer to give back a little to
          society. <br /><br />
          Feel free to connect with me or contact me for any opportunities,
          <b>I am open and will be thrilled for a relocation to Canada.</b>
        </p>
      </div>
    </div>
  </div>
    <div class="about-me__education">
      <h2>Education</h2>
      <div class="education">
      <div class="education__info">
        <h3 class="no-margins">
          B.A - Computer Science and Multimedia Technology
        </h3>
        <p class="no-margins">University of Costa Rica.</p>
        <p class="copy-grey no-margins">2015/03 - 2019/05</p>
      </div>
      <div class="education__info">
        <h3 class="no-margins">
          Project Management Specialization by Google Career Certificates
        </h3>
        <p class="no-margins">Coursera.</p>
        <p class="copy-grey no-margins">2021 - In Course</p>
      </div>
      </div>
      <div class="education">
      <div class="education__info">
        Frontend Master's JavaScript, Webpack, and CSS overall review courses, 2022.
      </div>
      <div class="education__info">
        React Foundations and VueJS, Udemy, 2020. <br /> Modern Javascript, Udemy, 2018
      </div>
      </div>
      <a id="about-me__button" href="https://drive.google.com/drive/folders/1OvxS2ue6fDZoO5sDzycT5q1n-MW20w3H?usp=sharing">See Professional Certificates</a>
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
            I do what I say I'll do and I take ownership in the way. <br />I am committed to stable values like honesty and loyalty. 
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
            I work hard and take immerse satisfaction of doing it. <br />I believe hard work is the most important factor that leads to success.
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
            I like to be organized with everything my time, my tasks, my schedule: when I am going to start something and when do I have to deliver it. <br />But I am also flexible that's a good ability to complement.
          </p>
        </div>
      </div>
    </div>
    </div>
    <div class="about-me__contact-form">FORM</div>
</template>

<script>
export default {
  name: "about-page",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      myMail: 'erika.jns@hotmail.com',
    };
  },
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

  &__education{
    color: $blue;
    background-color: rgb(234, 232, 232);
    padding: 3rem;
    text-align: left;

    .education {
      display: flex;
      flex-direction: column;
      max-width: 100vw;
      margin: 0 auto 2rem;
    }
  }

  &__contact-form {
    background-color: $blue;
  }

  &__philosophy{
    background-color: $main-yellow;
    padding: 3rem;
    text-align: left;

    .philosophy{
     display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 100vw;
      margin: 0 auto 2rem;

      &__info{
        margin: 1rem;

        &-number h2{
          font-size: 3.5rem;
          margin: 0;
          font-family: Bree Serif;
          font-weight: 400;
          color: white;
        }
      }
    }
  }

  &__personal {
  background-color: $pink;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
&__image {
    max-width: 100%;

    img {
      width: 100%;
      border-radius: 50% 0;
    }
  }
}

.about-me a#about-me__button {
    background-color: $main-yellow;
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
      max-width: 24%;
      margin-right: 90px;
    }

    &__education{
       text-align: center;
    .education {
      flex-direction: row;
    justify-content: space-evenly;
    max-width: 90%;
    align-items: center;
    text-align: left;
    margin: 0 auto 2rem;

    &__info{
          width: 430px;
    }
    }
  }

  &__philosophy{
     text-align: center;
    .philosophy{
      flex-direction: row;
      max-width: 90%;
      align-items: center;
    text-align: left;
      margin: 0 auto 2rem;

      &__info{
          width: 430px;
    }
    }
     
  }

  }
}
</style>

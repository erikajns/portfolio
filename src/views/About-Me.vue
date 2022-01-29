<template>
  <div class="about-me container page">
    <div class="about-me__image">
      <h1>Who is Erika professionally and personally?</h1>
      <img :src="`${publicPath}me.jpeg`" />
    </div>
    <div class="about-me__detail">
      <div class="about-me__education">
        <h2 class="pink">Education</h2>
        <h3 class="no-margins">
          B.A - Computer Science and Multimedia Technology
        </h3>
        <p class="no-margins">University of Costa Rica.</p>
        <p class="copy-grey no-margins">2015/03 - 2019/05</p>
        <br />
        <p class="no-margins">
          <b class="pink">Current Course:</b> Frontend Master’s JavaScript,
          Webpack, and CSS overall review courses, 2022.
        </p>
        <p>
          <b
            >Project Management Specialization by Google Career Certificates,
            Coursera, 2021-2022:</b
          >
          <br />
          <b>Obtained Certificates:</b>
          <br />
          - Foundations of Project Management <br />
          - Project Initiation: Starting a Successful Project <br />
          - Project Planning: Putting It All Together.
        </p>
        <p>
          <b>React Foundations and VueJS</b>, Udemy, 2020. <br />
          <b>Modern Javascript</b>, Udemy, 2018.
        </p>
      </div>

      <div class="about-me__personal">
        <h2>So...Erika?</h2>
        <p class="no-margins">
          Technology and business savvy and an achiever; I believe in getting
          stuff done but having a good time along the way!<br />
          I love Frontend development but I aspire to become in the future an
          exceptional Project Coordinator and eventually Project Manager
          contributing with the fullest of my knowledge.<br /><br />
          In my free time I love to travel and meet new people, places and
          cultures, hike, netflix and also I volunteer to give back a little to
          society. <br /><br />
          Feel free to connect with me or contact me for any opportunities,
          <b>I am open and will be thrilled for a relocation to Canada.</b>
        </p>
      </div>
      <br />
      <a :href="`mailto:${myMail}`">Contact Me</a>
    </div>
  </div>
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

<style lang="scss" scoped>
@import "./../variables.scss";

.pink {
  color: $pink;
}

.about-me__personal {
  background-color: $pink;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
.about-me {
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  text-align: left;
  justify-content: center;

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
      max-width: 25%;
      margin-right: 90px;
    }
  }
}
</style>

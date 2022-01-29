<template>
  <div class="wrapper">
    <Flicking :options="{ renderOnlyVisible: true }">
      <div
        v-for="(project, index) in projects"
        class="flicking-panel has-background-primary"
        :key="index"
      >
        <div class="project-image">
          <img :src="`${publicPath}${project.image}`" />
        </div>
        <div class="project-detail">
          <h1>{{ project.title }}</h1>
          <p class="copy-grey">Made on: {{ project.date }}</p>
          <div class="project-detail__description">
          <h3>Description</h3>
          <p>{{ project.description }}</p>
          <p><b>Next Updates:</b> {{ project.updates }}</p>
          </div>
          <a class="project-detail__button" target="_blank" :href="project.url">See project</a>
        </div>
      </div>
    </Flicking>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import projectData from "./../data/projects.json";

export default {
  name: "projects-page",
  components: {
    Flicking: Flicking,
  },
  data() {
    return {
      projects: projectData,
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss">
@import "./../variables.scss";
@import url("./../../node_modules/@egjs/vue-flicking/dist/flicking.css");

.flicking-index {
  min-width: 60px;
  position: relative;
  text-align: center;
}

.flicking-camera {
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  width: 100%;
  z-index: 1;
}

.flicking-panel {
  display: flex;
  flex-direction: column;
  max-width: 90vw;
  text-align: left;
  justify-content: center;
  border: 4px dotted $pink;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 30px 20px;

  .project-image {
    max-width: 100%;

    img {
      width: 100%;
    }
  }

  .project-detail {
    h1 {
      margin-bottom: 0;
    }

    &__description {
      margin-bottom: 65px;
    }
  }
}

@media (min-width: map-get($grid-breakpoints, "md")) {
  .flicking-panel {
    .project-image {
      max-width: 350px;
    }
  }
}

@media (min-width: map-get($grid-breakpoints, "lg")) {
  .flicking-panel {
    flex-direction: row;
    .project-detail {
      flex: 1;
      max-width: 40%;
    }
    .project-image {
      flex: 1;
      max-width: 50%;
      margin-top: 5%;
      margin-bottom: 5%;
      margin-right: 50px;
    }
  }
}
</style>

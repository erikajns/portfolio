<template>
  <div class="wrapper project-wrapper">
    <h2 class="project-wrapper__title">Recent Projects</h2>
    <div
      v-for="(project, index) in projects"
      class="project-panel animate__animated animate__fadeIn"
      :key="index"
    >
      <div class="project-image">
        <img :src="`${publicPath}${project.image}`" />
      </div>
      <div class="project-detail">
        <h1>{{ project.title }}</h1>
        <div class="project-detail__description">
          <h3>Description</h3>
          <p>{{ project.description }}</p>
          <p class="copy-grey" v-if="project.updates !== ''">
            <b>Next Updates:</b> {{ project.updates }}
          </p>
        </div>
        <a class="project-detail__button" target="_blank" :href="project.url"
          >See project</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import projectData from "./../data/projects.json";

export default {
  name: "projects-page",
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

.project-wrapper {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $blue;

  &__title {
    color: white;
  }
}

.project-panel {
  display: flex;
  flex-direction: column;
  max-width: 70vw;
  text-align: left;
  justify-content: center;
  border-radius: 2px;
  box-sizing: border-box;
  background-color: white;
  margin: 2rem 0;

  .project-image {
    max-width: 100%;

    img {
      width: 100%;
    }
  }

  .project-detail {
    padding: 2rem;
    h1 {
      margin: 0;
    }
    h3 {
      margin: 0.5rem 0;
    }
  }
}

@media (min-width: map-get($grid-breakpoints, "lg")) {
  .project-panel {
    flex-direction: row;
    .project-detail {
      flex: 1;
      max-width: 40%;
      margin-left: 2rem;
    }
    .project-image {
      flex: 1;
      display: flex;
      align-items: center;
    }
  }
}
</style>

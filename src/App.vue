<template>
  <div class="content">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/about-me">About</router-link>
    </div>

    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
  </div>
</template>

<style lang="scss">
@import "variables.scss";
@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Mulish:wght@500&display=swap');

#app {
  font-family: 'Mulish', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  h1 {
    color: $blue;
  }

  a {
    color: white;
    padding: 0.625rem;
    background-color: $blue;
    border-radius: 0.25rem;
    font-weight: 900;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: lighten($color: $main-yellow, $amount: 10%);
    }
  }

  a.no-background{
    background-color: transparent;
  }

  button {
    color: white;
    padding: 0.625rem;
    background-color: $blue;
    border: none;
    border-radius: 0.25rem;
    outline: none;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: lighten($color: $main-yellow, $amount: 10%);
    }
  }

  .experience-modal__close {
    font-weight: 900;
    border-radius: 50%;
    margin-bottom: 0;
    font-size: 10.25rem;
    padding: 0.625rem 10.125rem;
  }
}

#nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.875rem;

  a {
    font-weight: bold;
    color: #2c3e50;
    background-color: white;

    &.router-link-exact-active {
      color: $main-yellow;
    }
    &:hover {
      background-color: white;
      color: lighten($color: $main-yellow, $amount: 10%);
    }
  }
}

.container {
  margin: 3.125rem;

  @media (min-width: map-get($grid-breakpoints, "lg")) {
    margin: 0 6.25rem;
  }
}

.about-me {
  margin-top: 0;
}

.copy-grey {
  margin-bottom: 1.875rem;
  margin-top: 0;
  font-size: 0.875rem;
  color: rgb(141, 141, 141);
}

.no-margins {
  margin: 0;
}
</style>

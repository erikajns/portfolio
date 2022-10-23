<template>
  <div class="content">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> |-->
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/about-me">About</router-link>
    </div>

    <router-view v-slot="{ Component }">
      <transition enter-active-class="animate__animated animate__fadeInLeftBig">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
@import "variables.scss";

#app {
  @font-face {
    font-family: "Bree Serif";
    font-weight: 400;
    font-style: normal;
    font-display: auto;
    unicode-range: U+000-5FF;
    src: local("Bree"), url("/fonts/Bree/BreeSerif-Regular.woff") format("woff");
  }

  font-family: Muli, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  h1 {
    color: $blue;
  }

  a {
    color: white;
    padding: 10px;
    background-color: $blue;
    border-radius: 4px;
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
    padding: 10px;
    background-color: $blue;
    border: none;
    border-radius: 4px;
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
    font-size: 14px;
    padding: 10px 12px;
  }
}

#nav {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;

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
  margin: 50px;

  @media (min-width: map-get($grid-breakpoints, "lg")) {
    margin: 0 100px;
  }
}

.about-me {
  margin-top: 0;
}

.copy-grey {
  margin-bottom: 30px;
  margin-top: 0;
  font-size: 14px;
  color: rgb(141, 141, 141);
}

.no-margins {
  margin: 0;
}
</style>

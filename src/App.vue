<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "variables.scss";
#app {
  font-family: Muli, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  h1 {
    color: $pink;
  }

  a {
    color: white;
    padding: 10px;
    background-color: $pink;
    border-radius: 4px;
    text-decoration: none;

    &:hover {
      background-color: lighten($color: $pink, $amount: 10%);
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    background-color: white;

    &.router-link-exact-active {
      color: #e4654d;
    }
    &:hover {
      background-color: white;
      color: lighten($color: $pink, $amount: 10%);
    }
  }
}

.container {
  margin: 50px;

  @media (min-width: map-get($grid-breakpoints, "lg")) {
    margin: 0 100px;
  }
}
</style>

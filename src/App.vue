<template>
  <div id="app">
    <navigation id="nav" />
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: {
    navigation: Navigation
  }
};
</script>

<style>
/*  Global css */
h1 {
  margin-top: 2em;
  margin-bottom: 1em;
  font-size: 50px;
}
.intro {
  font-size: 20px;
  max-width: 900px;
  margin: 2em auto;
}

h2 {
  margin-bottom: 1em;

  font-weight: bold;
}

/* END */

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  padding: 0;
  margin: 0;
}

#nav-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 30px;

  margin: auto;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

/* Transition page */
/* .view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition-delay: 0.5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to,
.view-leave {
  opacity: 1;
} */
</style>
<template>
  <div id="app">
    <navigation id="nav" />
    <transition >
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
.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}

.view-enter-active {
  transition-delay: .5s;
}

.view-enter,
.view-leave-to {
  opacity: 0;
}

.view-enter-to,
.view-leave {
  opacity: 1;
}
</style>

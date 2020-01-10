<template>
  <div>
    <h1>Experience</h1>
    <fleche/>
    <fleche-inverse/>
  </div>
</template>

<script>
import Fleche from "@/components/Fleche.vue";
import FlecheInverse from "@/components/FlecheInverse.vue";

export default {
  name: "experience",
  el: "Experience",
  components: {
    'fleche': Fleche,
    'fleche-inverse': FlecheInverse
  }
};
</script>

<style scoped>
</style>
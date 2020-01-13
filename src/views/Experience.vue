<template>
  <div>
    <h1>Experience</h1>
    <fleche vref="Experience" />
    <fleche-inverse />
  </div>
</template>

<script>
import Fleche from "@/components/Fleche.vue";
import FlecheInverse from "@/components/FlecheInverse.vue";

export default {
  name: "experience",
  el: "Experience",
  components: {
    fleche: Fleche,
    "fleche-inverse": FlecheInverse
  }
};
</script>

<style scoped>
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
</style>
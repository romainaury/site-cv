<template>
  <div class="page">
    <h1>Experience</h1>
    <p>
      Voici une liste de mes expériences dans le milieu du travail.
      <br />Cette liste est vouée à évoluer.
    </p>
    <fleche vref="Experience" />
    <div class="container">
      <div>
        <img height="100" src="../assets/entreprise/mcdonald.png" />
        <h2>McDonald's</h2>
      </div>
      <p>À coté de mes études, je travaille actuellement dans au sein de l'enseigne McDonald's en temps qu'équipier polyvalent. Ce métier m'a permis de développer mes capacités de communication avec les clients, ainsi que mes compétences d'adaptation. J'ai aussi appris à travailler sous la pression.</p>
    </div>
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
/* En-tête */

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

/* Contenu */

.container {
  max-width: 65%;
  margin: 2em auto;
}
.container div {
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.container div img {
  float: left;
}
.container div p {
  text-align: center;
}
.container h2 {
  margin: 1em;
}
</style>
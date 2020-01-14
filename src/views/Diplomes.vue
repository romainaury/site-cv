<template>
  <div class="page">
    <h1>Diplômes</h1>
    <p class="intro">
      Voici une liste des mes différents diplômes obtenus au cours de mes études.
      <br />Cette liste est vouée à évoluer.
    </p>
    <fleche vref="Diplomes" />
    <div class="diplomes" id="Diplomes">
      <h2>
        BAC STI2D SIN, Mention B (LGTI Victor Hugo) |
        <span>2017 - 2018</span>
      </h2>
      <li>
        <ul>Projet contrôle de la salle s'impression 3D au cours de l'année de terminale STI2D.</ul>
      </li>
    </div>
    <div class="diplomes">
      <h2>
        DUT Informatique, 1 an (IUT Orsay) |
        <span>2018 - 2019</span>
      </h2>
      <li>
        <ul>Projet de jeu vidéo en 2D et de site fan MARVEL.</ul>
      </li>
    </div>
    <div class="diplomes">
      <h2>
        DUT Informatique, en cours (IUT Blagnac) |
        <span>2019 - 2020</span>
      </h2>
      <li>
        <ul>Projet site CV en ligne.</ul>
      </li>
    </div>

    <fleche-inverse />
  </div>
</template>

<script>
import Fleche from "@/components/Fleche.vue";
import FlecheInverse from "@/components/FlecheInverse.vue";

export default {
  name: "Diplomes",
  el: "diplomes",
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
.diplomes {
  text-align: left;
  padding: 10px 5%;
  margin: 10px;
  margin-bottom: 2em;
  transition: .1s;
}
.diplomes:hover {
  background-color: #F0F0F0;
  transition: ease .2s;
}
.diplomes h2 {
}
h2 span {
  color: #0088a9;
}
.diplomes li {
  margin-top: 1em;
  margin-left: 2em;
}
</style>
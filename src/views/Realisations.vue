<template>
  <div>
    <h1>Réalisations</h1>
    <p class="intro">
      Ici vous trouverez mes différentes réalisations avec un descriptif.
      <br />Cette liste est vouée à évoluer.
    </p>
    <fleche vref="Realisations" />
    <div class="container" id="Realisations">
      <img class="affiche" src="../assets/site-marvel/1.png" alt="page 1 site marvel" />
      <div class="description">
        <h2>Site fan de MCU</h2>
        <p>
          Dans le cadre d'un projet noté avec pour but de réaliser un site de fan, nous avons décidé de réaliser notre site sur le thème de Marvel, et plus particulièrement le MCU.
          <br />Nous avons dû réaliser un site responsive, en HTML5 et CSS3 sans JavaScript ou JQuerry.
        </p>
      </div>
    </div>
    <fleche-inverse />
  </div>
</template>

<script>
import Fleche from "@/components/Fleche.vue";
import FlecheInverse from "@/components/FlecheInverse.vue";

export default {
  name: "Realisations",
  el: "realisations",
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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  margin-bottom: 1em;
}
img {
  margin: 0;
}
.affiche {
  height: 510px;
  transition: 0.1s;
}
.affiche:hover {
  scale: 1.2;
  transition: 0.18s;
}

.description {
  flex-basis: 40%;

  height: 510px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-left: 10px;
  transition: 0.1s;
  padding: 1em;

  /* border-left: solid black 5px;
  margin-left: 0;
  padding-left: 1em;
  border-radius: 1em; */
}
.description:hover {
  background-color: #eaeaea;
  transition: 0.2s;
}

@media screen and (max-width: 1000px) {
  .container {
    flex-direction: column;
    padding: 5%;
  }
  .description {
    margin-left: 0;
    margin-top: 10px;
  }

  .affiche {
    width: 95%;
    height: auto;
  }
  .affiche:hover {
    scale: 1;
  }
}
</style>
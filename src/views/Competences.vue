<template>
  <div id="competences" class="page">
    <h1>Compétences</h1>
    <p class="intro">
      Voici une liste non-exaustive des différents langages de programmation rencontrés au cours de mes expériences et de mes études, les frameworks que j'ai pu utiliser,
      ainsi que les différents IDE qui m'ont permis de programmer dans de bonnes conditions.
    </p>
    <fleche vref="Langages" />

    <img class="icones" src="../assets/code-icone.png" alt />
    <h2 id="Langages">Langages</h2>
    <div class="container" id="languages">
      <langage class="s-Logo" alt="Logo c++" lang="language/c++" />
      <langage class="s-Logo" alt="Logo java" lang="language/java" />
      <langage class="s-Logo" alt="Logo sql server" lang="language/sql" />
      <langage class="s-Logo" alt="Logo html5" lang="language/html5" />
      <langage class="s-Logo" alt="Logo css3" lang="language/css3" />
      <langage class="s-Logo" alt="Logo css3" lang="language/python" />
    </div>
    <h2>Frameworks</h2>
    <div class="container" id="frameworks">
      <langage class="s-Logo" alt="Logo vuejs" lang="language/vuejs" />
    </div>

    <img class="icones" src="../assets/software-icone.png" alt />
    <h2>Logiciels utilisés</h2>
    <div class="container" id="software">
      <langage class="s-Logo" alt="Logo eclipse" lang="software/eclipse" />
      <langage class="s-Logo" alt="Logo visual studio code" lang="software/vscode" />
      <langage class="s-Logo" alt="Logo visual studio" lang="software/vstudio" />
      <langage class="s-Logo" alt="Logo bluej" lang="software/bluej" />
    </div>
    <fleche-inverse />
  </div>
</template>

<script>
import Langage from "@/components/Langage.vue";
import Fleche from "@/components/Fleche.vue";
import FlecheInverse from "@/components/FlecheInverse.vue";

export default {
  name: "Competences",
  el: "competences",
  components: {
    langage: Langage,
    fleche: Fleche,
    "fleche-inverse": FlecheInverse
  }
};
</script>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Contenu */
.container {
  max-width: 624px;

  background: #eee;
  border-radius: 0.5em;
  border: solid #aaa 2px;

  padding: 0.6em;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  transition: 0.3s;
}

.container .s-Logo {
  padding: 15px;
  cursor: pointer;
}

/* Icones */
.icones {
  width: 100px;
  height: 100px;

  border-radius: 50%;

  padding: 5px;
  margin-bottom: 1em;
  margin-top: 1em;

  transition: 0.4s;
}
.icones:hover {
  background-color: rgba(0, 136, 169, 1);

  -webkit-transform: rotate(360deg) scale(1.15);
  -moz-transform: rotate(360deg) scale(1.15);
  -o-transform: rotate(360deg) scale(1.15);
  -ms-transform: rotate(360deg) scale(1.15);
  transform: rotate(360deg) scale(1.15);

  transition: 0.3s;
}

@media only screen and (min-width: 624px) {
  .container {
    width: 624px;
  }
}

@media only screen and (max-width: 500px) {
  .container {
    flex-direction: column;
    transition: 0.3s;
  }
}
</style>
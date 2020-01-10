<template>
  <div class="comp">
    <h1>Compétences</h1>
    <fleche/>
    <h2>Langages</h2>
    <img class="icones" src="../assets/code-icone.png" alt="">
    <div class="container skills">
      <langage class="s-Logo" alt="Logo c++" lang="language/c++" />
      <langage class="s-Logo" alt="Logo java" lang="language/java" />
      <langage class="s-Logo" alt="Logo sql server" lang="language/sql" />
      <langage class="s-Logo" alt="Logo html5" lang="language/html5" />
      <langage class="s-Logo" alt="Logo css3" lang="language/css3" />
      <langage class="s-Logo" alt="Logo vuejs" lang="language/vuejs" />
    </div>

    <h2>Logiciels utilisés</h2>
    <img class="icones" src="../assets/software-icone.png" alt="">
    <div class="container software">
      <langage class="s-Logo" alt="Logo eclipse" lang="software/eclipse" />
      <langage class="s-Logo" alt="Logo visual studio code" lang="software/vscode" />
      <langage class="s-Logo" alt="Logo visual studio" lang="software/vstudio" />
      <langage class="s-Logo" alt="Logo bluej" lang="software/bluej" />
    </div>
    <fleche-inverse/>
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
    'langage': Langage,
    'fleche' : Fleche,
    'fleche-inverse' : FlecheInverse,
  }
};
</script>

<style scoped>
.comp {
  padding: 2em 1em 0 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 1em;
}
h1 {
  margin: 0.7em 0;
}

h2 {
  margin: 1em 0;

  font-weight: bold;
  font-family: "Montserrat", sans-serif;
}
.container {
  background: #eee;
  border-radius: 0.5em;
  border: solid #aaa 2px;

  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  max-width: 624px;

  padding: 0.6em;

  transition: 0.3s;
}

.s-Logo {
  padding: 15px;
}

.icones {
  width: 100px;
  background-color: rgba(0, 136, 169, 1);
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 50%;
  
}

@media only screen and (max-width: 500px) {
  .container {
    flex-direction: column;

    transition: 0.3s;
  }
}
</style>
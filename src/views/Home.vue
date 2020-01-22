<template>
  <div class="home page">
    <header>
      <h1>ROMAIN AURY</h1>
      <hr />
      <span class="welcome">
        Bienvenue sur mon site internet
        <br />
      </span>
      <fleche vref="informations" />
    </header>
    <div id="informations">
      <h2>À propos de moi</h2>
      <img height="250" src="../assets/RomainA.jpg" alt="Romain Aury" />
      <table>
        <th class="attributes">
          <tr>Nom :</tr>
          <tr>Adresse :</tr>
          <tr>Telephone :</tr>
          <tr>Adresse E-Mail :</tr>
          <tr>Nationnalité :</tr>
          <tr>Date & Lieu de naissance :</tr>
        </th>
        <th class="responses">
          <tr>Romain AURY</tr>
          <tr>7 Boulevard de l'Europe, 31700 BLAGNAC</tr>
          <tr>07 62 16 25 32</tr>
          <tr>romain.aury@hotmail.com</tr>
          <tr>Français</tr>
          <tr>22/02/2000 MASSY (91)</tr>
        </th>
      </table>
    </div>
    <div class="footer">
      <p>
        Ce site a pour but d'adapter mon CV au format Web.
        <br />Chaque page représente une rubrique de mon CV
      </p>
    </div>
    <fleche-inverse />
  </div>
</template>

<script>
// @ is an alias to /src
// import Profile from '@/components/Profile.vue'
import Fleche from "@/components/Fleche.vue";
import FlecheInverse from "@/components/FlecheInverse.vue";

export default {
  el: "Home",
  name: "home",
  components: {
    fleche: Fleche,
    "fleche-inverse": FlecheInverse
  }
};
</script>

<style scoped>
.home {
  margin: auto;
  display: flex;
  flex-direction: column;
}

/* En-tête */
header {
  height: 29em;
}
hr {
  align-self: center;
  margin: 3em auto;
  width: 50%;
}
h1 {
  margin-top: 2em;
  margin-bottom: 1em;
  font-size: 50px;
  animation: half-fading 1s infinite linear alternate;
}
.welcome {
  font-size: 25px;
}

/* Image de profile */
img:not(.fleche) {
  margin: 2em 0;
  border-radius: 50%;
  border: solid rgba(0, 136, 169, 1) 5px;
  background: rgba(0, 136, 169, 1);
  cursor: pointer;
  transition: 0.1s;
}
img:hover:not(.fleche) {
  -webkit-transform: scale(1.02);
  -moz-transform: scale(1.02);
  -o-transform: scale(1.02);
  -ms-transform: scale(1.02);
  transform: scale(1.02);
  transition: 0.2s;
}

/** Profile */
h2 {
  font-size: 35px;
  margin: 1em 0;
}

table {
  margin-top: 1em;
  margin: auto;
}
tr {
  display: block;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
}
.attributes {
  text-align: left;
}
.responses {
  text-align: right;
}

.footer {
  margin: 4em 0 3em 0;
}
@keyframes half-fading {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}
</style>
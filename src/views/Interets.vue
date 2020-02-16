<template>
  <div id="interets" class="page">
    <h1>Intérêts</h1>
    <p class="intro">Voici mes différents points d'intérêts.</p>
    <fleche vref="Interets" />
    <div class="container" id="Interets">
      <h2>Informatique</h2>
      <p>
        Je suis passionné de l'informatique depuis tout petit. En effet, mon père travaillant dans l'informatique, je me suis vite découvert un intérêt pour
        l'informatique et les nouvelles technologies en général. Voici une liste exhaustive des sites que je consulte régulièrement afin de m'informer sur les nouvelles sorties et différentes actualités :
      </p>
      <ul>
        <li>
          <a href="https://www.lesnumeriques.com/" target="_blank">LesNumeriques.com</a>
        </li>
        <li>
          <a href="https://linustechtips.com/main/" target="_blank">LinusTechTips.com</a>
        </li>
      </ul>
    </div>
    <div class="container" id="Interets">
      <h2>Jeux Vidéos - ESport</h2>
      <p>
        Étant un passionné d'informatique, j'ai rapidement développé un autre intérêt pour les jeux vidéo, et notament pour les jeux compétitifs tels que
        <a
          href="https://euw.leagueoflegends.com/fr/"
          target="_blank"
        >League of Legends</a>, ou encore
        <a
          href="https://blog.counter-strike.net/"
          target="_blank"
        >Counter Strike: Global Offensive</a>, ainsi que pour d'autres types de jeux, tels que les Dark Souls et tous les jeux du même type du studio japonais
        <a
          href="https://www.fromsoftware.jp/ww/"
          target="_blank"
        >FromSoftware</a> confondus.
      </p>
    </div>
    <div class="container" id="Interets">
      <h2>Linux</h2>
      <p>
        Linux est un OS (Operating System) basé sur UNIX. Depuis quelques années déjà j'utilise linux sur ma station de travail en OS principal.
        J'ai eu l'occasion de tester plusieurs distributions déjà telles que
        <a
          href="https://ubuntu-fr.org/"
          target="_blank"
        >Ubuntu</a>,
        <a href="https://www.debian.org/" target="_blank">Debian</a>,
        <a href="https://archlinux.fr/" target="_blank">Archlinux</a>,
        <a href="https://neon.kde.org/" target="_blank">KDE Neon</a> ainsi que
        <a href="https://manjaro.org/" target="_blank">Manjaro</a>. Je suis actuellement muni de Manjaro i3. Ce que j'apprécie chez cet OS est sa
        légerté, le fait qu'il soit personnalisable, sa maniabilité mais aussi sa facilité d'utilisation.
        <br />Je suis régulièrement des threads sur le réseau social Reddit, où les utilisateurs postent et partagent des images de leurs configurations :
        <ul>
          <li><a href="https://www.reddit.com/r/unixporn/" target="_blank">r/UnixPorn</a></li>
          <li><a href="https://www.reddit.com/r/linux/" target="_blank">r/Linux</a></li>
          <li><a href="https://www.reddit.com/r/linuxmasterrace/" target="_blank">r/LinuxMasterRace</a></li>
        </ul>
      </p>
    </div>
    <fleche-inverse vref="Interets" />
  </div>
</template>

<script>
import Fleche from "@/components/Fleche.vue";
import FlecheInverse from "@/components/FlecheInverse.vue";

export default {
  name: "Interets",
  el: "interets",
  components: {
    fleche: Fleche,
    "fleche-inverse": FlecheInverse
  }
};
</script>

<style scoped>

ul {
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 10%;
  text-align: left;
}
.container {
  width: 75%;
  margin: 2em auto;
  padding: 10px;
}
.container:hover {
  background-color: #f0f0f0;
  transition: ease 0.2s;
}
.container h2 {
  font-size: 30px;
  margin-bottom: 1em;
}
.container p,
li {
  font-size: 20px;
}
a {
  color: #0088a9;
  text-decoration: none;
  font-weight: bold;
}
</style>
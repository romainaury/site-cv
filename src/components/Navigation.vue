<template>
  <div>
    <header>
      <router-link to="/" class="logo">
        <img src="../assets/logo.svg" heigth="34px" width="200px" />
      </router-link>
      <nav>
        <ul class="nav__links">
          <li class="item">
            <router-link to="/competences">Compétences</router-link>
          </li>
          <li class="item">
            <router-link to="/realisations">Réalisations</router-link>
          </li>
          <li class="item">
            <router-link to="/experience">Expérience</router-link>
          </li>
          <li class="item">
            <router-link to="/diplomes">Diplômes</router-link>
          </li>
          <li class="item">
            <router-link to="/interets">Intérêts</router-link>
          </li>
        </ul>
      </nav>
      <router-link class="cta" to="/">Contact</router-link>
      <p v-on:click="openNav()" class="menu cta">Menu</p>
    </header>
    <div id="mobile__menu" class="overlay">
      <a class="close" v-on:click="closeNav()">&times;</a>
      <div class="overlay__content">
        <router-link to="/">Accueil</router-link>
        <router-link to="/competences">Compétences</router-link>
        <router-link to="/realisations">Réalisations</router-link>
        <router-link to="/experience">Expérience</router-link>
        <router-link to="/diplomes">Diplômes</router-link>
        <router-link to="/interets">Intérêts</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "navigation",

  methods: {
    openNav() {
      document.getElementById("mobile__menu").style.width = "100%";
    },

    closeNav() {
      document.getElementById("mobile__menu").style.width = "0";
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 8%;
  background-color: #24252a;

  transition: ease-in-out 0.3s;
}

.logo {
  cursor: pointer;
  max-height: 34px;
}

.nav__links a,
.cta,
.overlay__content a {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #edf0f1;
  text-decoration: none;
}

.nav__links {
  list-style: none;
  display: flex;
}

.nav__links li {
  padding: 0px 20px;
  transition: 0.25s;
}

.nav__links li a {
  transition: all 0.3s ease 0s;
}

.nav__links li a:hover {
  color: #0088a9;
}

.cta {
  padding: 9px 20px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  color: #edf0f1;
}

.cta:hover {
  background-color: rgba(0, 136, 169, 0.8);
}

/* Mobile Nav */

.menu {
  display: none;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: #24252a;
  overflow-x: hidden;
  transition: all 0.4s ease 0s;
}

.overlay__content {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.overlay a {
  padding: 15px;
  font-size: 36px;
  display: block;
  transition: all 0.2s ease 0s;
}

.overlay a:hover,
.overlay a:focus {
  color: #0088a9;
}
.overlay .close {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
  color: #edf0f1;
}
.close {
  cursor: pointer;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .close {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

@media only screen and (max-width: 1050px) {
  .nav__links li {
    padding: 0px 6px;
    transition: ease-in-out 0.3s;
  }
  header {
    padding: 30px 3%;
  }
}

@media only screen and (max-width: 820px) {
  .nav__links,
  .cta {
    display: none;
  }
  .menu {
    display: initial;
  }
}

a.router-link-exact-active:not(.cta) {
  color: #0088a9;
}
</style>
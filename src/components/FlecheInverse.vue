<template>
  <a href="#nav">
    <div class="click">
      <img class="fleche" src="../assets/fleche.png" height="18" alt="Voir plus" />
    </div>
  </a>
</template>
<style scoped>
.fleche {
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
  animation: up 1s infinite ease-out;
}

.click {
  height: 60px;
  margin-top: 1em;
  margin-bottom: 10em;
}
a {
  z-index: 1;
  width: 100%;
}

@keyframes up {
  0% {
    position: relative;
    top: 40px;
    opacity: 1;
  }
  50% {
    position: relative;
    top: 25px;
    opacity: 0.75;
  }
  100% {
    position: relative;
    top: 10px;
    opacity: 0;
  }
}
</style>
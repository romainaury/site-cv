<template>
    <a href="#nav">
        <div class="click">
          <img class="fleche" src="../assets/fleche.png" height="18" alt="Voir plus" />
        </div>
      </a>
</template>
<style scoped>

.fleche{
  rotate: 180deg;
  animation: up 1s infinite ease-out;
}

.click {
  height: 3em;
  margin-bottom: 7em;
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
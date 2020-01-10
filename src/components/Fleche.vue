<template>
    <a href="#footer">
        <div class="click">
          <img class="fleche" src="../assets/fleche.png" height="18" alt="Voir plus" />
        </div>
      </a>
</template>
<style scoped>

.fleche:not(.inverse){
  animation: down 1s infinite ease-out;
}
.inverse {
  rotate: 180deg;
  animation: up 1s infinite ease-out;

}
.click {
  height: 3em;
  margin-bottom: 7em;
}

@keyframes down {
  0% {
    position: relative;
    top: 0px;
    opacity: 1;
  }
  50% {
    position: relative;
    top: 15px;
    opacity: 0.75;
  }
  100% {
    position: relative;
    top: 30px;
    opacity: 0;
  }
}
@keyframes up {
  0% {
    position: relative;
    top: 40px;
    opacity: 0;
  }
  50% {
    position: relative;
    top: 25px;
    opacity: 0.75;
  }
  100% {
    position: relative;
    top: 10px;
    opacity: 1;
  }
}
</style>
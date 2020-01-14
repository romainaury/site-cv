<template>
  <a  v-bind:href="'#' + vref">
    <div class="click">
      <img class="fleche" src="../assets/fleche.png" height="18" alt="Voir plus" />
    </div>
  </a>
</template>
<script>
export default {
  props: {
    vref: String
  },
};
</script>
<style scoped>
.fleche {
  animation: down 1s infinite ease-out;
}

.click {
  width: 100%;
  height: 60px;

  margin-top: 1em;
  margin-bottom: 8em;
  padding: auto;
}

a {
  width: 100%;
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
</style>
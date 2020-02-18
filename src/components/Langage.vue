<template>
  <div>
    <div class="module">
      <img :title="getName()" height="150px" :src="getPathImg(lang)" />
    </div>
    <span class="name">{{ getName() }}</span>
  </div>
</template>

<script>
export default {
  props: {
    lang: String
  },
  data: function() {
    return {
      imagePath: null
    };
  },
  methods: {
    getPathImg(name) {
      this.imagePath = require("../assets/" + name + ".png");
      return this.imagePath;
    },
    getName() {
      return this.lang.split("/")[1].toUpperCase();
    }
  }
};
</script>

<style scoped>
.module {
  width: 200px;
  transition: 0.2s;
}
.module:hover {
  filter: blur(3px);
  transition-delay: 1.5s;
}

.name {
  filter: opacity(0);
  font-weight: bolder;
  transition: 0.2s;

  display: -moz-inline-stack;
  display: inline-block;
}

.module:hover ~ .name {
  filter: opacity(1);

  animation-name: down;
  animation-duration: 0.15s;
  animation-timing-function: ease-out;
}

img {
  filter: grayscale(0.86);
  transition: 0.15s;
}
img:hover {
  filter: grayscale(0);
  transition: 0.2s;
}

@keyframes down {
  0% {
    transform: translateY(-40px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
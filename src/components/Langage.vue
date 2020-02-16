<template>
  <div >
    <span class="name">{{ getName() }}</span>
    <div class="module">
      <img :title="getName()" height="150px" :src="getPathImg(lang)" />
    </div>
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
  scale: 0;
  transition: .3s;
}

img {
  filter: grayscale(0.9);
  transition: 0.15s;
}
img:hover {
  filter: grayscale(0);
  transition: 0.2s;
}


</style>
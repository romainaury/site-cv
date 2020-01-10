<template>
  <div>
    <img height="150px" :src="getPathImg(lang)" />
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
    }
  }
};
</script>

<style scoped>
div {
  width: 200px;
}
img {
  filter: grayscale(0.9);
  transition: 0.15s;
}

img:hover {
  filter: grayscale(0);
  transition: 0.3s;
}
</style>
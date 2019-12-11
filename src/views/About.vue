<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="langages">
      <langage lang="c++"/>
      <langage lang="java"/>
      <langage lang="sql"/>
      <langage lang="html5"/>
      <langage lang="css3"/>
      <langage lang="vuejs"/>
    </div>

  </div>
</template>

<script>

import Langage from '@/components/Langage.vue'

export default {
    components: {
    'langage': Langage,
  },
}
</script>
<style scoped>
  .langages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 1em;
  }
</style>
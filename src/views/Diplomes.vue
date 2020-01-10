<template>
    <div>
        <h1></h1>
        <fleche/>
        <fleche-inverse/>
    </div>
</template>

<script>
import Fleche from "@/components/Fleche.vue";
import FlecheInverse from "@/components/FlecheInverse.vue";

export default {
    name: 'Diplomes',
    el: 'diplomes',
  components: {
    'fleche': Fleche,
    'fleche-inverse' : FlecheInverse
  }
}
</script>

<style scoped>

</style>
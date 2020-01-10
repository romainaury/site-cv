<template>
    <div>
        <fleche/>
        <fleche-inverse/>
    </div>
</template>

<script>
import Fleche from "@/components/Fleche.vue";
import FlecheInverse from "@/components/FlecheInverse.vue";

export default {
    name: 'Interets',
    el: 'interets',
  components: {
    'fleche': Fleche,
    'fleche-inverse': FlecheInverse,
  }
}
</script>

<style scoped>

</style>
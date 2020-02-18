<template>
  <div class="wrapper">
    <h1>Contactez moi</h1>
    <p class="intro">Voici un formulaire de contact</p>
    <fleche vref="myform"/>
    <div id="error_message"></div>
    <form action id="myform" onsubmit="return validate();">
      <div class="input_field">
        <input type="text" placeholder="Nom" id="nom" />
      </div>
      <div class="input_field">
        <input type="text" placeholder="Objet" id="objet" />
      </div>
      <div class="input_field">
        <input type="text" placeholder="Téléphone" id="telephone" />
      </div>
      <div class="input_field">
        <input type="text" placeholder="Email" id="email" />
      </div>
      <div class="input_field">
        <textarea placeholder="Message" id="message"></textarea>
      </div>
      <div class="btn">
        <input type="submit" />
      </div>
    </form>
    <fleche-inverse/>
  </div>
</template>
<script>
import Fleche from "@/components/Fleche.vue";
import FlecheInverse from "@/components/FlecheInverse.vue";

export default {
  el: "contact",
  components: {
    fleche: Fleche,
    "fleche-inverse": FlecheInverse
  },
};
</script>

<style scoped>
.input_field textarea {
  height: 200px;
}
.input_field textarea, .input_field input{
  width: 300px;
  margin: 6px auto ;
}

.wrapper textarea{
  resize: none;
  height: 80px;
}

.wrapper .btn input[type="submit"]{
  border: 0px;
  margin-top: 15px;
  padding: 10px;
  text-align: center;
  width: 250px;
  background: rgba(0, 136, 169, 1);
  color: #edf0f1;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
}

#error_message{
  margin-bottom: 20px;
  background: #fe8b8e;
  padding: 0px;
  text-align: center;
  font-size: 14px;
  transition: all 0.5s ease;
}
</style>
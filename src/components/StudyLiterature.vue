<template  >
  <router-link to="/study/theory/btree">
    <v-btn
        class="button-back"
        color="white"
        dark
    >
      &lt;
    </v-btn>
  </router-link>
  <router-link to="/structure/tree/b-tree">
    <v-btn
        class="button2S"
        color="grey"
        dark
    >
      STUDY
    </v-btn>
  </router-link>
  <div >
    <h2 class="theorylit">Literature of B-Tree</h2>
    <br><br>
    <ul class="sources theorylit" >
      <li> https://www.postgresql.org/docs/current/btree-behavior.html</li><br>
      <li> https://learningforsustainability.net/conceptual-modelling/</li><br>
      <li> https://learningforsustainability.net/conceptual-modelling/</li><br>
    </ul>
    <v-img src="@/assets/image/source.png" alt="sourceImg" class="img1"/>
    <v-img src="@/assets/image/source.png" alt="sourceImg" class="img2"/>
    <v-img src="@/assets/image/book.png" alt="sourceImg" class="img3"/>
  </div>

</template>

<script>
export default {
  name: 'TheoryLiterature',
};
</script>

<style scoped>

.theorylit{
  font-family: 'Inconsolata', monospace;
  text-align: left;
  margin-top: 40px;
  margin-left: 300px;
  transform: scale(0.9);
  transform-origin: top left;
}
.button2S {
  min-width: fit-content !important;
  max-height: 30px;
  margin-top: 40px;
  border-radius:30px;
  top: -58px;
  right: -1164px;
  transform: scale(0.9);
  transform-origin: top left;
}
.img1{
  max-height: 30px;
  margin-right: 16.6em;
  margin-top: -9.5em;
  z-index: 2;
  transform: scale(0.9);
  transform-origin: top left;
}
.img2{
  max-height: 30px;
  margin-right: 16.6em;
  margin-top: 1.3em;
  z-index: 2;
  transform: scale(0.9);
  transform-origin: top left;
}
.img3{
   max-height: 30px;
   margin-right: 15.9em;
   margin-top: 1.3em;
   z-index: 2;
  transform: scale(0.9);
  transform-origin: top left;
 }

.button-back {
  min-width: 10px;
  max-height: 35px;
  margin-top: 40px;
  border-radius:30px;
  border: 1px solid #bdbbbb; /* Чорне обрамлення */
  right: -260px;
  font-weight: bold;
  font-size: 20px;
  z-index: 4;
}
</style>

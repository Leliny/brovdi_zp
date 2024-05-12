<template >
  <router-link to="/structure/tree/b-tree">
    <v-btn
        class="button2S"
        color="grey"
        dark
    >
      STUDY
    </v-btn>
  </router-link>

  <router-link to="/study/theory/btree/literature">
    <v-btn
        class="button3"
        color="white"
        dark
    >
      Literature
    </v-btn>
  </router-link>
  <router-link to="/study/theory/btree/video">
    <v-btn
        class="button4"
        color="white"
        dark
    >
      Video
    </v-btn>
  </router-link>
  <div class="theory">
    <br><br>
    <h2>Introduction of B-Tree</h2>
    <p>The limitations of traditional binary search trees can be frustrating. Meet the B-Tree, the multi-talented data structure that can <br>handle massive amounts of data with ease. When it comes to storing and searching large amounts of data, traditional binary search trees <br> can become impracticaldue to their poor performance and high memory usage. B-Trees, also known as B-Tree or Balanced Tree,  are a type<br> of self-balancing tree that was specifically designed to overcome these limitations.</p>
    <h2>Time Complexity of B-Tree:</h2>
    <v-img src="@/assets/image/theoryBtree.png" alt="Your Image" max-height="150"/>
    <h2>Time Complexity of B-Tree:</h2>
    <ul>
      <li>All leaves are at the same level.</li>
      <li>B-Tree is defined by the term minimum degree ‘t‘. The value of ‘t‘ depends upon disk block size.</li>
      <li>Every node except the root must contain at least t-1 keys. The root may contain a minimum of 1 key.</li>
      <li>All nodes (including root) may contain at most (2*t – 1) keys.</li>
      <li>Number of children of a node is equal to the number of keys in it plus 1.</li>
      <li>All keys of a node are sorted in increasing order. The child between two keys k1 and k2 contains all keys in the range from k1 and k2.</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'TheoryStudy',
};
</script>

<style scoped>
 .theory{
   font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
   text-align: left; /* Змінює вирівнювання тексту на ліве */
   font-size: 14px;
   margin-top: 80px;
   margin-left: -30px;
   transform: scale(0.98);
   transform-origin: top left;
 }
 .button2S {
   min-width: fit-content !important;
   max-height: 27px;
   margin-top: 40px;
   border-radius:30px;
   top: -58px;
   right: -1214px;
 }

 .button3 {
   min-width: fit-content !important;
   max-height: 30px;
   margin-top: 40px;
   border-radius:30px;
   border: 1px solid black; /* Чорне обрамлення */
   right: -180px;
   transform: scale(0.9);
   transform-origin: top left;
 }

 .button4 {
   min-width: fit-content !important;
   max-height: 30px;
   margin-top: 40px;
   border-radius:30px;
   border: 1px solid black; /* Чорне обрамлення */
   right: -200px;
   transform: scale(0.9);
   transform-origin: top left;
 }
</style>

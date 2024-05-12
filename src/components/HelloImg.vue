<template class="align-center " >
  <v-img src="@/assets/image/helloPC.png" alt="HelloWorld" class="img-h"/>
  <v-img src="@/assets/image/arrow.png" alt="arrow" class="img-a"/> <b class="text">Choose to START</b>
</template>

<script>
export default {
  name: 'HelloImg',
};
</script>

<style scoped>

.text{
  position: absolute;
  font-family: 'Ink Free', monospace;
  min-width: 10em;
  color: #464343;
  margin-top: 3em;
  right: 43em;
  font-size: 1.3em;

}
.img-h{
  max-width: 400px;
  top: 140px;
  left: 40em;
}
.img-a{
  max-width: 50px;
  top: -8em;
  left: -9em;
}
</style>
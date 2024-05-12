<template>
  <v-card
      class="app-header"
      flat
      tile
      height="60px"
      elevation="3"
  >
    <div class="header-logos header-container">
      <v-img
          contain
          class="header-logo logo-1 header-container"
          src="@/assets/logo.png"
      />
      <v-img
          contain
          class="header-logo logo-2 "
          src="@/assets/logotuke.png"
      />
    </div>
  </v-card>
  <v-img v-if="$route.path !== '/'" src="@/assets/image/switchStudyPract.png" alt="ButtonSwitch"  class="img-hd header-container"/>
</template>

<script>
export default {
  name: 'MenuHeader',
};
</script>

<style scoped>

.header-logos {
  display: flex;
  align-items: center; /* Вертикальне вирівнювання */
  justify-content: space-between; /* Рівномірний розподіл елементів */
}
.header-container {
  transform: scale(0.9);
  transform-origin: top left;
}
.header-logo {
  max-width: 100px;
}
.logo-1{
  left: 20px;
}
.logo-2{
  right: -9%;
}
.img-hd{
  max-width:195px;
  max-height: 50px;
  top: 23px;
  left: 85%;
}
.app-header {
  background-color: #ddf1f5 !important;
}
</style>

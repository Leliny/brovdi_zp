<template>
  <v-app>
    <MenuHeader class="app-header" />
    <div id="app" class="flex">
      <MainMenu class="main-component"/>
      <router-view />
    </div>
  </v-app>
</template>

<script>
import MenuHeader from './components/shared/Header.vue';
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: 'App',
  components: {
    MenuHeader,
    MainMenu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff;
  min-height: 450px;
}
.app-header {
  background-color: #ddf1f5 !important;
  height: 80px;
}
.main-component {
  max-width: 300px;
 }
</style>



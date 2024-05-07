<template>
  <v-container
      id="menu-container"
      fluid
  >
    <v-divider class="vertical-divider"></v-divider>

    <!-- Додаємо умову v-if, щоб перевірити, чи ми не на початковій сторінці -->
    <v-img v-if="$route.path !== '/'" src="@/assets/image/menuArrow.png" alt="MenuArr" max-height="150"/>

    <v-container
        fluid
        max-width="200px"
    >
      <StructureItem
          v-for="item in dataStructures"
          :key="item.code"
          :name="item.name"
          :data-structure="item"
      />
    </v-container>
  </v-container>
</template>

<script>
import StructureItem from './StructureItem.vue';

export default {
  name: 'MainMenu',
  components: {
    StructureItem,
  },
  data() {
    return {
      dataStructures: [
        {
          name: 'B Tree',
          code: 'b-tree',
          structureType: 'tree',
        },
        {
          name: 'Hash',
          code: 'static',
          structureType: 'hash',
        },
        {
          name: 'GiST',
          code: 'gist',
          structureType: 'gist',
        },
        {
          name: 'SP-GiST',
          code: 'sp-gist',
          structureType: 'sp-gist',
        },
        {
          name: 'GIN',
          code: 'gin',
          structureType: 'gin',
        },
        {
          name: 'BRIN',
          code: 'brin',
          structureType: 'brin',
        },
      ],
    };
  },
};
</script>

<style scoped>
#menu-container {

}

.vertical-divider {
  width: 620px;
  height: 10px;
  background-color: black;
  transform: rotate(-90deg);
  box-shadow:1px 2px 4px rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 330px;
  left: -120px;
  z-index: 1; /* Нижній шар */
}

.v-img {
  position: relative;
  z-index: 2;
  top: 73px;
  left: -20px;
  max-width: 210px;
}

.v-container {
  float: left;
  position: absolute;
  left: 0;
  top: 70px;
  z-index: 3;
}

</style>

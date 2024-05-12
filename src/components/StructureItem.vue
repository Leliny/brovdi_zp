<template>
  <div
      id="structure-item-container "
      class="item-container flex"
  >
    <h4>
      <router-link :to="'/structure/' + dataStructure.structureType + '/' + dataStructure.code" style="text-decoration: none; max-width: 200px;">
        <span class="link-text">{{ dataStructure.name }}</span>
      </router-link>
    </h4>
  </div>
</template>


<script>
export default {
  name: 'StructureItem',
  props: {
    dataStructure: {
      name: String,
      code: String,
      structureType: String,
    },
  },
};
</script>


<style scoped>
.item-container h4 {
  max-width: 300px;
  line-height: 50px;
  font-weight: unset;
  font-size: 16px;
  font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
  margin-left: 10px;
}

.link-text {
  color: black; /* Змінює колір тексту ссилки на чорний */
}

.item-container h4:hover {
  font-size: 22px;
}
</style>

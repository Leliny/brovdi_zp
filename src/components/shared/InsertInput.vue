<template>
  <div class="flex button-container align-center">

    <v-select
        class="select-field"
        v-model="selectedNumber"
        :items="[2, 3, 4, 5, 6, 7]"
        label="MaxDegree"
        outlined
        dense
    ></v-select>

    <div class="input-container">
      <v-text-field
          class="text-field"
          color="blue"
          placeholder="Insert a Value"
          v-model="insertedValue"
          @keyup.enter="insertValue"
          @mouseover="showInstructionOverlay = true"
          @mouseleave="showInstructionOverlay = false"
      ></v-text-field>
      <div v-if="showInstructionOverlay" class="instruction-overlay">
        To insert multiple values sequentially, type the numbers separated with a comma. Example: 10,20,30
      </div>
    </div>

    <v-btn
        class="button"
        color="#ddf1f5"
        :disabled="disabled"
        dark
        @click="insertValue"
    >
      Insert
    </v-btn>
    <v-btn
        class="buildtree"
        color="#ddf1f5"
        :disabled="disabled"
        dark
        @click="buildTree"
    >
      Build Tree
    </v-btn>
    <router-link to="/study/theory/btree">
      <v-btn
          class="button2"
          color="grey"
          dark
      >
        Practice
      </v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'InsertInput',
  props: {
    disabled: { type: Boolean },
  },
  data() {
    return {
      insertedValue: '',
      selectedNumber: 2,
      showInstructionOverlay: false // Added data property
    };
  },
  methods: {
    insertValue() {
      if (this.insertedValue !== '' && !this.disabled) {
        this.$emit('myEvent', this.insertedValue);
        this.insertedValue = '';
      }
    },
    buildTree(){
      this.insertedValue="10, 20, 30, 35, 45, 50, 60, 70, 80";
      this.insertValue();
    }
  },
};
</script>

<style>
.text-field {
  min-width: 210px;
  min-height: 40px;
  max-width: 180px;
  max-height: 60px;
  margin-top: 50px;
  margin-left: 2em;
  font-family: 'Inconsolata', monospace;
  font-size: 14px; /* Reduced font size */
}

.select-field {
  margin-right: 1rem;
  min-width: 105px;
  min-height: 40px;
  max-width: 180px;
  max-height: 60px;
  margin-top: 50px;
  margin-left: -3em;
  font-family: 'Inconsolata', monospace;
}

.flex {
  display: flex;
  right: 50px;
}

.button-container {
  transform: scale(0.9);
  transform-origin: top left;
}

.text-field {
  margin-right: 1rem;
}

.button {
  min-width: fit-content !important;
  margin-top: 40px;
  right: 5px;
  border-radius:15px;
}

.button2 {
  min-width: fit-content !important;
  max-height: 28px;
  margin-top: 30px;
  border-radius:30px;
  top: -68px;
  right: -608px;
}

.instruction-overlay {
  position: absolute;
  background-color: rgba(200, 200, 200, 0.29);
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  top: 100%;
  left: 63%;
  z-index: 999;
  font-size: 12px; /* Reduced font size */
  display: none; /* Initially hidden */
}

.input-container:hover .instruction-overlay {
  display: block; /* Show on hover */
}

.buildtree{
  min-width: fit-content !important;
  margin-top: 40px;
  right: 0px;
  border-radius:15px;
}
</style>

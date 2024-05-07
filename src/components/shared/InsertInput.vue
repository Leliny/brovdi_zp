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

    <v-text-field
        class="text-field"
        color="blue"
        placeholder="Insert a Value"
        v-model="insertedValue"
        @keyup.enter="insertValue"
        title="To insert multiple values sequentially, type the numbers separated with a comma. Example: 10,20,30"
    ></v-text-field>
    <v-btn
        class="button"
        color="#ddf1f5"
        :disabled="disabled"
        dark
        @click="insertValue"
    >
      Insert
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
    };
  },
  methods: {
    insertValue() {
      if (this.insertedValue !== '' && !this.disabled) {
        this.$emit('myEvent', this.insertedValue);
        this.insertedValue = '';
      }
    },
  },
};
</script>
<style>
.text-field {
  min-width: 230px;
  min-height: 40px;
  max-width: 180px;
  max-height: 60px;
  margin-top: 50px;
  margin-left: 2em;
  font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
}

.select-field {
  margin-right: 1rem;
   min-width: 110px;
   min-height: 40px;
   max-width: 180px;
   max-height: 60px;
   margin-top: 50px;
   margin-left: -3em;
   font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
 }

.text-field::after {
  content: attr(title);
  position: absolute;
  top: 100%; /* Поміщаємо уточнення нижче поля вводу */
  left: 0;
  width: 100%;
  background-color: #fff; /* Колір фону уточнення */
  border: 1px solid #000; /* Рамка уточнення */
  border-radius: 20px; /* Заокруглені краї рамки */
  padding: 5px; /* Відступи внутрішнього вмісту уточнення */
  font-size: 0.8rem; /* Розмір тексту уточнення */
  color: #333; /* Колір тексту уточнення */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Тінь для уточнення */
  z-index: 9999; /* Шар, щоб уточнення було над іншим вмістом */
}
.flex {
  display: flex;
  right: 50px;
}

.button-container {
  width: 100%;
}
.text-field{
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
  max-height: 30px;
  margin-top: 30px;
  border-radius:30px;
  top: -70px;
  right: -692px;
}
/*.error {
  --v-text-field-label-color: red !important;
  --v-text-field-border-color: red !important;
}*/
</style>

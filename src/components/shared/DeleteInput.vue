<template>
  <div class="flex button-container align-center">
    <v-text-field
        v-if="!onlypop"
        color="yellow"
        class="text-field2"
        placeholder="Find a Value"
        :value="findedValue"
        @input="updateFindedValue"
        @keyup.enter="findValue"
    />
    <v-btn
        color="#ddf1f5"
        class="button_find"
        :disabled="disabled"
        @click="deleteValue"
    >
      Find
    </v-btn>


    <v-text-field
        v-if="!onlypop"
        color="error"
        class="text-field1"
        placeholder="Delete a Value"
        :value="deletedValue"
        @input="updateDeletedValue"
        @keyup.enter="deleteValue"
    />
    <v-btn
        color="#ddf1f5"
        class="button_del"
        :disabled="disabled"
        @click="deleteValue"
    >
      Delete
    </v-btn>
    <v-btn
        class="button clear-button"
        color="#E6E6E6"
        dark
        @click="clearValue"
    >
      Clear All
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'DeleteInput',
  props: {
    onlypop: { type: Boolean },
    disabled: { type: Boolean },
  },
  data() {
    return {
      deletedValue: '',
      findedValue: '',
    };
  },
  methods: {
    updateDeletedValue(event) {
      this.deletedValue = event.target.value;
    },
    updateFindedValue(event) {
      this.findedValue = event.target.value;
    },
    deleteValue() {
      this.$emit('myEvent', this.deletedValue);
      this.deletedValue = '';
    },
    findValue() {
      this.$emit('myEvent', this.findedValue);
      this.findedValue = '';
    },
    clearValue() {
      this.insertedValue = ''; // Очищаємо значення поля вводу
      window.location.reload(); // Перезавантажуємо сторінку
    },
  },
};
</script>

<style>
.button-container {
  width: 100%;
  max-width: 200px;
  font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
}
.text-field1{
  border-radius:30px;
  min-width: 160px;
  min-height: 40px;
  max-width: 180px;
  max-height: 60px;
  margin-top: 50px;
  margin-left: 3em;
  font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
}
.text-field2{
  min-width: 150px;
  min-height: 30px;
  max-width: 180px;
  max-height: 60px;
  margin-top: 50px;
  margin-left: -12em;
  font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
}
.button_del {
  min-width: fit-content !important;
  margin-top: 40px;
  right: -0.5em;
  border-radius:15px;
}

.button_find{
  min-width: fit-content !important;
  margin-top: 40px;
  right: -0.5em;
  border-radius:15px;
}
.clear-button{
  min-width: fit-content !important;
  margin-top: 40px;
  right: -3em;
  border-radius:15px;
}


/*.error {
  --v-text-field-label-color: red !important;
  --v-text-field-border-color: red !important;
}*/
</style>


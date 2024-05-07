<template>
  <div>
    <v-select v-model="numberOfSlots" :items="slotOptions" class="hashInputsize" label="Choose number of slots" @change="updateHashTable"></v-select>
    <v-text-field v-model="inputData" class="hashInput" label="Enter data to hash"></v-text-field>
    <v-btn @click="hashData" class="button_hash">Hash Data</v-btn>
    <v-text-field v-model="deleteData" class="hashDelete" label="Delete data to hash"></v-text-field>
    <v-btn @click="deleteDataFromHash" class="button_delete">Delete</v-btn>



    <!-- Опис дій -->
    <div v-html="description"></div>
    <svg ref="svgCanvas" class="hashOutput"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  data() {
    return {
      inputData: '',
      deleteData: '',
      hashTable: [],
      numberOfSlots: '', // Default number of slots
      slotOptions: [5, 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18], // Options for number of slots
      description: '' // Опис дій для відображення на сторінці
    };
  },
  watch: {
    numberOfSlots() {
      if (this.numberOfSlots < 1) {
        this.numberOfSlots = 1; // Мінімальна кількість ячейок - 1
      }
      this.updateHashTable(); // Викликаємо метод для оновлення таблиці
    }
  },
  methods: {
    hashFunction(input) {
      // Simple modulo hashing algorithm
      let hashValue = input
          .split('')
          .reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.hashTable.length;

      // Забезпечення, що хеш не буде від'ємним
      if (hashValue < 0) {
        hashValue += this.hashTable.length;
      }

      return hashValue;
    },

    clearInput() {
      this.inputData = '';
    },
    clearDeleteInput() {
      this.deleteData = '';
    },
    deleteDataFromHash() {
      if (this.deleteData.trim() === '') {
        return;
      }

      // Шукаємо перше входження заданого числа
      let hashValue = this.hashFunction(this.deleteData);
      let deleted = false;

      // Перевіряємо, чи потрібно видалити число з поточної клітинки
      if (this.hashTable[hashValue] === this.deleteData) {
        this.hashTable[hashValue] = null;
        deleted = true;
      }

      // Якщо було видалено хоча б один елемент, оновлюємо таблицю
      if (deleted) {
        this.updateHashTable();
      }

      // Очищаємо поле видалення
      this.clearDeleteInput();
    }
,
    updateHashTable() {
      this.clearInput(); // Очищуємо поле вводу
      this.hashTable = Array(this.numberOfSlots).fill(null); // Оновлюємо таблицю з новою кількістю слотів

      // Візуалізуємо зміни в таблиці
      const svg = d3.select(this.$refs.svgCanvas);
      svg.selectAll("g").remove();

      const rectWidth = 45;
      const rectHeight = 30;

      const group = svg.selectAll('g')
          .data(this.hashTable)
          .enter()
          .append('g')
          .attr('transform', (d, i) => `translate(${i * rectWidth}, 0)`);

      group.append('rect')
          .attr('width', rectWidth)
          .attr('height', rectHeight)
          .style('fill', 'white') // Заливка пустих клітинок
          .style('stroke', 'black')
          .style('stroke-width', 2);

      group.append('text')
          .attr('x', rectWidth / 2)
          .attr('y', rectHeight + 15) // Зміщуємо текст нижче від клітинки
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'central')
          .text((d, i) => i); // Додаємо номер індексу під кожною клітинкою
    },
    hashData() {
      if (this.inputData.trim() === '') {
        return;
      }
      let initialHash = this.hashFunction(this.inputData);
      let hashedData = initialHash;

      // Linear Probing to handle collisions
      while (this.hashTable[hashedData] !== null && this.hashTable[hashedData] !== this.inputData) {
        hashedData = (hashedData + 1) % this.hashTable.length;
      }

      // Оновлюємо дані в таблиці
      this.hashTable[hashedData] = this.inputData;

      // Очищуємо поле вводу
      this.clearInput();

      // Візуалізуємо зміни в таблиці
      const svg = d3.select(this.$refs.svgCanvas);
      svg.selectAll("g").remove();

      const rectWidth = 45;
      const rectHeight = 30;

      const group = svg.selectAll('g')
          .data(this.hashTable)
          .enter()
          .append('g')
          .attr('transform', (d, i) => `translate(${i * rectWidth}, 0)`);

      group.append('rect')
          .attr('width', rectWidth)
          .attr('height', rectHeight)
          .style('fill', (d, i) => i === hashedData ? "#ddf1f5" : (d ? 'gray' : 'white'))
          .style('stroke', 'black')
          .style('stroke-width', 2);

      group.append('text')
          .attr('x', rectWidth / 2)
          .attr('y', rectHeight / 2) // Зміщуємо текст у центр клітинки
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'central')
          .text(d => d ? d : ''); // Виводимо значення під клітинкою

      group.append('text')
          .attr('x', rectWidth / 2)
          .attr('y', rectHeight + 15) // Зміщуємо текст нижче від клітинки
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'central')
          .text((d, i) => i); // Додаємо номер індексу під кожною клітинкою
    }

  }
};
</script>

<style scoped>
.hashInput{
  border-radius:30px;
  min-width: 160px;
  min-height: 40px;
  max-width: 100px;
  max-height: 60px;
  margin-top: -3.7em;
  margin-left: 35em;
  font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
  z-index: 4;
}
.hashDelete{
  border-radius:30px;
  min-width: 160px;
  min-height: 40px;
  max-width: 100px;
  max-height: 60px;
  margin-top: -5.3em;
  margin-left: 60em;
  font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
  z-index: 4;
}
.hashInputsize{
  border-radius:30px;
  min-width: 160px;
  min-height: 40px;
  max-width: 100px;
  max-height: 60px;
  margin-top: 50px;
  margin-left: 20em;
  font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
  z-index: 4;
}

.button_hash {
  max-width: 100px;
  margin-top: -6em;
  right: -17em;
  border-radius:15px;
  z-index: 3;
}
.button_delete {
  max-width: 100px;
  margin-top: -6em;
  margin-right: -90em;
  border-radius:15px;
  z-index: 3;
}
.hashOutput{
  min-width: 90%;
  margin-top: 100px;
  margin-right: -50em;
  border-radius:5px;
  z-index: 1;
}
</style>

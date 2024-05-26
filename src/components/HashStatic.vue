<template>
  <router-link to="/study/theory/btree">
    <v-btn
        class="buttonpractice"
        color="grey"
        dark
    >
      Practice
    </v-btn>
  </router-link>
  <div class="hashcomponents">

    <v-select v-model="numberOfSlots" :items="slotOptions" class="hashInputsize" label="Choose size" @change="updateHashTable"></v-select>
    <v-text-field v-model="inputData" class="hashInput" label="Enter data to hash"></v-text-field>
    <v-btn @click="hashData" color="#ddf1f5" class="button_hash">Hash Data</v-btn>
    <v-text-field v-model="deleteData" class="hashDelete" label="Delete data to hash"></v-text-field>
   <v-btn @click="deleteDataFromHash" color="#ddf1f5" class="button_delete">Delete</v-btn>
    <div v-html="description" class="descript"></div>
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
      slotOptions: [ 6, 7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 25], // Options for number of slots
      description: '' // Опис дій для відображення на сторінці
    };
  },
  watch: {
    numberOfSlots() {
      if (this.numberOfSlots < 1) {
        this.numberOfSlots = 1;       }

      this.updateHashTable();
    }
  },
  methods: {

    hashFunction(input) {
      return input % this.hashTable.length;
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

      // Шукаємо та видаляємо елемент з таблиці
      let hashValue = this.hashFunction(this.deleteData);
      let startIndex = hashValue;
      let elementFound = false; // Флаг, що вказує, чи знайдено елемент у таблиці

      do {
        if (this.hashTable[hashValue] === this.deleteData) {
          this.hashTable[hashValue]='X'; // Заміна елементу на 'X'
          elementFound = true;
          break;
        }
        hashValue = (hashValue + 1) % this.hashTable.length; // Linear Probing
      } while (hashValue !== startIndex);

      if (!elementFound) {
        alert('the number was not found');
        // Тут можна вивести повідомлення користувачеві про те, що введеного числа не знайдено
      }
      this.clearDeleteInput();

      // Візуалізуємо зміни в таблиці

      let hashedData = startIndex;

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
          .style('fill', (d, i) => i === hashedData ? "#ddf1f5" : (d ? 'lightgray' : 'white'))
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


    },
    updateHashTable() {
      this.clearInput();
      this.hashTable = Array(this.numberOfSlots).fill(null);

      const svg = d3.select(this.$refs.svgCanvas);
      const rectWidth = 45;
      const rectHeight = 30;

      const group = svg.selectAll('g')
          .data(this.hashTable, (d, i) => i);

      const newGroup = group.enter()
          .append('g')
          .attr('transform', (d, i) => `translate(${i * rectWidth}, 0)`);

      newGroup.append('rect')
          .attr('width', rectWidth)
          .attr('height', rectHeight)
          .style('fill', 'white')
          .style('stroke', 'black')
          .style('stroke-width', 2);

      newGroup.append('text')
          .attr('x', rectWidth / 2)
          .attr('y', rectHeight + 15)
          .attr('text-anchor', 'middle')
          .attr('alignment-baseline', 'central')
          .text((d, i) => i);

      group.select('text')
          .text((d, i) => this.hashTable[i] !== null ? this.hashTable[i] : "X"); // Оновлення елементів з символом "X"

      group.exit().remove(); // Видаляємо зайві елементи
    },
    hashData() {
      if (this.inputData.trim() === '') {
        return;
      }
      let initialHash = this.hashFunction(this.inputData);
      let hashedData = initialHash;

      // Додамо опис типу "(введене число)%(розмір таблиці)= (індекс)"
      this.description = "(zadané číslo)%(veľkosť tabuľky)= (index)  --->     "+`${this.inputData} % ${this.hashTable.length} = ${initialHash}`;

      if (!this.hashTable.includes(null)) {
        alert('Hash table is full. Cannot add more items.');
        return;
      }

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
          .style('fill', (d, i) => i === hashedData ? "#ddf1f5" : (d ? 'lightgray' : 'white'))
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

.descript{
  font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
  margin-top: 40px;
  margin-right: -30em;
}

.hashcomponents{
  transform: scale(0.9);
  transform-origin: top left;
}

.buttonpractice {
  min-width: fit-content !important;
  max-height: 28px;
  margin-top: 49px;
  border-radius:30px;
  top: -68px;
  right: -1277px;
  transform: scale(0.9);
  font-family: 'Inconsolata', monospace; /* Встановлює шрифт Inconsolata */
}
</style>

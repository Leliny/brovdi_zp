<template>
  <div class="step-interface-container button-container">
    <div >
      <v-btn
        class="button yellow lighten-4"
        :disabled="disabled.backButtonIsDisabled || disabled.isAnimating"
        @click="stepBack"
      >
        <strong>&lt;</strong>
      </v-btn>
      <v-btn
        class="button yellow lighten-4"
        :disabled="disabled.forwardButtonIsDisabled || disabled.isAnimating"
        @click="stepForward"
      >
        <strong>&gt;</strong>
      </v-btn>
    </div>
    <span class="text-sm1" top="10px">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'HistoryButtons',
  props: {
    length: { type: Number, default: 1 },
    currentFrame: { type: Number, default: 0 },
    disabled: { type: Object, default: undefined },
    label: { type: String, default: '' },
  },
  methods: {
    stepBack() {
      this.$emit('HistoryEvents', -1);
    },
    stepForward() {
      this.$emit('HistoryEvents', 1);
    },
  },
};
</script>

<style scoped>
.button-container {
  width: 90%;
  max-width: 200px;
  transform: scale(0.90);
  right: -10px;
}

.button {
  min-width: fit-content !important;
  font-size: 1.5rem !important;
  background-color: gainsboro;
  top:2px;

}
.text-sm1{
  font-family: 'Inconsolata', monospace;
  font-size: 16px; /* Reduced font size */
  margin-top: 20px;
}
</style>

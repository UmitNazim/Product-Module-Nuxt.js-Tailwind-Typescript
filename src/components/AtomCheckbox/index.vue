<template>
  <div class="place-start">
    <input
      :id="label"
      v-model="proxy"
      type="checkbox"
      class="atom-checkbox__input"
      @change="({ target: { checked } }) => $emit('input', proxy)"
    />
    <label class="atom-checkbox__label font-size-14" :for="label" v-text="label" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AtomCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
  },
  data(): { proxy: Boolean } {
    return {
      proxy: false,
    };
  },
  created() {
    this.proxy = this.value;
  },
});
</script>

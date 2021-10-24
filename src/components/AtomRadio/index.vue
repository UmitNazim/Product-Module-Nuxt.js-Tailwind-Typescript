<template>
  <div class="atom-radio place-start ">
    <input
      :id="label"
      :name="name"
      type="radio"
      class="atom-radio__input"
      @change="$emit('on-change')"
      v-bind="$attrs"
    />
    <label class="atom-radio__label font-size-14" :for="label" v-html="label" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AtomRadio',
  props: {
    name: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
});
</script>

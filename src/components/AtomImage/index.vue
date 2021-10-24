<template>
  <img v-bind="options" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AtomImage',
  props: {
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: '',
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [Number, String],
      default: null,
    },
    height: {
      type: [Number, String],
      default: null,
    },
  },
  computed: {
    options(): {
      src: string;
      alt: string;
      width: string | number;
      height: string | number;
    } {
      return {
        src: this.src,
        alt: this.alt,
        width: this.width,
        height: this.height,
        ...this.$attrs,
      };
    },
  },
});
</script>

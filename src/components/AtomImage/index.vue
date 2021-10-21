<template>
  <img v-bind="options" />
</template>

<script>
export default {
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
    options() {
      return {
        src: this.src,
        alt: this.alt,
        width: this.width,
        height: this.height,
        ...this.$attrs,
      };
    },
  },
};
</script>

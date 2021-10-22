<template>
  <hr v-bind="options" />
</template>

<script>
export default {
  name: 'AtomDivider',
  props: {
    color: {
      type: String,
      default: 'mid-grey',
    },
    size: {
      type: String,
      default: 'sm',
      validator: value => ['sm', 'md', 'lg'].includes(value),
    },
  },
  computed: {
    options() {
      return {
        class: {
          'atom-divider': true,
          [`bg-${this.color}`]: this.color,
          [`atom-divider__${this.size}`]: this.size,
        },
      };
    },
  },
};
</script>

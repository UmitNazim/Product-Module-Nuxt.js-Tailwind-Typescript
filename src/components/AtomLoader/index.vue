<template>
  <div class="atom-loader">
    <div v-bind="options" class="atom-loader__bounce-1"></div>
    <div v-bind="options" class="atom-loader__bounce-2"></div>
    <div v-bind="options"></div>
  </div>
</template>

<script>
export default {
  name: 'AtomLoader',
  props: {
    color: {
      type: String,
      default: 'navy-blue',
    },
    size: {
      type: String,
      default: 'sm',
      validator: value => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value),
    },
  },
  computed: {
    options() {
      return {
        class: {
          'atom-loader__bounce': true,
          [`bg-${this.color}`]: true,
          [`atom-loader__${this.size}`]: true,
        },
      };
    },
  },
};
</script>

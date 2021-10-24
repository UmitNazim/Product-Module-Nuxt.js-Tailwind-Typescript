<template>
  <hr v-bind="options" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AtomDivider',
  props: {
    color: {
      type: String,
      default: 'mid-grey',
    },
    size: {
      type: String,
      default: 'sm',
      validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
    },
  },
  computed: {
    options(): {
      class: Record<string, boolean>;
    } {
      return {
        class: {
          'atom-divider': true,
          [`bg-${this.color}`]: true,
          [`atom-divider__${this.size}`]: true,
        },
      };
    },
  },
});
</script>

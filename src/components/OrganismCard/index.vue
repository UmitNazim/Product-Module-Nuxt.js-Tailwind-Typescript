<template>
  <div v-bind="options">
    <header v-if="title">
      <h5 class="organism-card__title">{{ title }}</h5>
    </header>
    <main><slot></slot></main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'OrganismCard',
  props: {
    color: {
      type: String,
      default: 'white',
    },
    flat: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    options(): {
      class: Record<string, boolean>;
    } {
      return {
        class: {
          'organism-card': true,
          [`bg-${this.color}`]: true,
          'organism-card--shadow': this.shadow,
          'organism-card--hover': this.hover,
          'rounded-0': this.flat,
          'p-0': this.noPadding,
        },
      };
    },
  },
});
</script>

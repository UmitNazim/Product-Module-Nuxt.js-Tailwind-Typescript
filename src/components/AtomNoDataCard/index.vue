<template>
  <organism-card :color="color">
    <div
      v-if="description"
      class="atom-no-data-card__title text-rangoon text-center fw-bold font-size-14"
    >
      {{ description }}
    </div>

    <slot></slot>
  </organism-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AtomNoDataCard',
  props: {
    color: {
      type: String,
      default: 'snow-drift',
    },
    description: {
      type: String,
      default: null,
    },
  },
});
</script>

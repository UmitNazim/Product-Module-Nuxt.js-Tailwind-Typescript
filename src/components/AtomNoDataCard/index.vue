<template>
  <organism-card :color="color">
    <div v-if="description" class="text-rangoon text-center fw-bold font-size-14">
      {{ description }}
    </div>

    <slot></slot>
  </organism-card>
</template>

<script>
export default {
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
};
</script>

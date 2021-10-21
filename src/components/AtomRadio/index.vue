<template>
  <div class="atom-radio place-items-start ">
    <input
      :id="label"
      :name="name"
      type="radio"
      class="atom-radio__input"
      @change="$emit('on-change')"
    />
    <label class="atom-radio__label" :for="label" v-html="label" />
  </div>
</template>

<script>
export default {
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
};
</script>

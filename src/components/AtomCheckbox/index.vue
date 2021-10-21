<template>
  <div class="place-items-start">
    <input
      :id="label"
      v-model="proxy"
      type="checkbox"
      class="atom-checkbox__input"
      @change="({ target: { checked } }) => $emit('input', proxy)"
    />
    <label class="atom-checkbox__label" :for="label" v-text="label" />
  </div>
</template>

<script>
export default {
  name: 'AtomCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      proxy: false,
    };
  },
  created() {
    this.proxy = this.value;
  },
};
</script>

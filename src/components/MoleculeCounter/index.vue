<template>
  <div class="place-items-center">
    <atom-button
      class="p-0"
      :disabled="disabled"
      @on-click="
        proxy--;
        $emit('on-change', proxy);
      "
      bg-color="transparent"
    >
      <atom-image :src="require('~/assets/icons/minus-sign.svg')"></atom-image>
    </atom-button>

    <div class="molecule-counter place-items-center">
      <atom-loader
        color="white"
        class="p-2"
        size="xs"
        v-if="onLoader"
      ></atom-loader>
      <span v-else class="molecule-counter__count">{{ proxy }}</span>
    </div>

    <atom-button
      class="p-0"
      bg-color="transparent"
      @on-click="
        proxy++;
        $emit('on-change', proxy);
      "
    >
      <atom-image :src="require('~/assets/icons/plus-sign.svg')" />
    </atom-button>
  </div>
</template>

<script>
export default {
  name: 'MoleculeCounter',
  props: {
    value: {
      type: Number,
      default: 1,
    },
    onLoader: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      proxy: null,
    };
  },
  computed: {
    disabled() {
      return this.proxy === 1;
    },
  },
  created() {
    this.proxy = this.value;
  },
};
</script>

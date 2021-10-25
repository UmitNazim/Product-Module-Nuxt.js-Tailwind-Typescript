<template>
  <div class="p-2 cursor-pointer" style="-webkit-tap-highlight-color: transparent;">
    <div @click="$emit('on-product-detail')">
      <div class="w-100 p-3 rounded-xl border-solid border-grey-300 border-2 h-40 place-center">
        <atom-image class="hover-opacity-7 h-28" :src="product.image" />
      </div>
      <span v-if="product.price" class="font-size-14 mt-2 block text-navy-blue"
        >{{ product.price }} &#8378;</span
      >
      <span v-if="product.title" class="block my-2 font-size-14 h-20" v-text="product.title" />
    </div>
    <atom-button
      block
      :disabled="disabled"
      @on-click="$emit('on-product-add')"
      v-text="$t(disabled ? 'general.added' : 'basket.add')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    disabled(): boolean {
      return this.$store.getters['basket/getBasket'].some(
        ({ id }: { id: number }) => id === this.product.id,
      );
    },
  },
});
</script>

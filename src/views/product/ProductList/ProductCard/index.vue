<template>
  <div class="p-2">
    <div @click="$emit('on-product-detail')">
      <div
        class="w-100 p-3 rounded-xl border-solid border-grey-300 border-2 place-items-center"
      >
        <atom-image
          class="hover-opacity-7"
          style="height:150px"
          :src="product.image"
        />
      </div>
      <span v-if="product.price" class="font-size-14 mt-2 block text-navy-blue"
        >{{ product.price }} &#8378;</span
      >
      <span
        v-if="product.title"
        class="block my-2 font-size-14 h-12 truncate"
        >{{ product.title }}</span
      >
    </div>

    <atom-button
      block
      :disabled="disabled"
      @on-click="$emit('on-product-add')"
      >{{ $t(disabled ? 'general.added' : 'basket.add') }}</atom-button
    >
  </div>
</template>

<script>
export default {
  name: 'MoleculeProduct',
  props: {
    product: {
      type: Object,
      default: {},
    },
  },
  computed: {
    disabled() {
      return this.$store.getters['basket/getBasket'].some(
        ({ id }) => id === this.product.id
      );
    },
  },
};
</script>

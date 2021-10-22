<template>
  <div class="molecule-product">
    <div @click="$emit('on-product-detail')">
      <div class="molecule-product__image place-items-center">
        <atom-image
          class="hover-opacity-7"
          style="height:150px"
          :src="product.image"
        />
      </div>
      <span v-if="product.price" class="molecule-product__price"
        >{{ product.price }} &#8378;</span
      >
      <span v-if="product.title" class="molecule-product__name truncate">{{
        product.title
      }}</span>
    </div>

    <atom-button
      block
      :disabled="isAdded"
      @on-click="$emit('on-product-add'), (isAdded = true)"
      >{{ $t(isAdded ? 'general.added' : 'basket.add') }}</atom-button
    >
  </div>
</template>

<script>
export default {
  name: 'MoleculeProduct',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isAdded: false,
    };
  },
};
</script>

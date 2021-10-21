<template>
  <div class="molecule-product">
    <div @click="$emit('on-product-detail')">
      <div class="molecule-product__image place-items-center">
        <atom-image class="hover-opacity-7" style="height:150px" :src="image" />
      </div>
      <span v-if="price" class="molecule-product__price"
        >&#8378;{{ price }}</span
      >
      <span v-if="name" class="molecule-product__name truncate">{{
        name
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
  props: {
    name: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: '~/assets/images/general/product-placeholder.jpg',
    },
  },
  data() {
    return {
      isAdded: false,
    };
  },
};
</script>

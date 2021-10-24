<template>
  <organism-modal @on-close="$emit('on-close')" close-on-out-side-click size="lg" class="bg-white">
    <div class="flex flex-wrap">
      <div class=" w-full md:w-6/12 p-2">
        <atom-image class="hover-opacity-7" :src="product.image" />
      </div>
      <div class="w-full md:w-6/12 p-2">
        <h1 class="block font-size-16 mb-2">
          <strong>{{ product.title }}</strong>
        </h1>
        <p class="block font-size-12 text-justify mb-2 text-mid-grey">
          {{ product.description }}
        </p>
        <span class="block font-size-14 mb-2 text-mid-grey"
          >{{ $t('product.price') }} : <strong>{{ product.price }} &#8378;</strong></span
        >
        <span class="block font-size-14 mb-2 text-mid-grey"
          >{{ $t('category.name') }} : <strong>{{ product.category }}</strong></span
        >
        <span class="block font-size-14 mb-2 text-mid-grey"
          >{{ $t('product.rating.name') }} : <strong>{{ product.rating.rate }}</strong></span
        >
        <span class="block font-size-12 text-mid-grey"
          >{{ $t('product.rating.countOf') }} : <strong>{{ product.rating.count }}</strong></span
        >
      </div>
    </div>
  </organism-modal>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue';
import { Product } from '@/src/models/product';

export default Vue.extend({
  name: 'ProductDetailModal',
  props: {
    product: <PropOptions<Product>>{
      type: Object,
      default: () => {},
    },
  },
});
</script>

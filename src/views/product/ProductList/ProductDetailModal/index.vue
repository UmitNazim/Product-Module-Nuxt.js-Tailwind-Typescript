<template>
  <organism-modal @on-close="$emit('on-close')" close-on-out-side-click size="lg">
    <div class="flex flex-wrap">
      <atom-image class="hover-opacity-7 w-full md:w-5/12 p-2" :src="product.image" />
      <div class="w-full md:w-7/12 p-2">
        <h1 class="block font-size-16 mb-2">
          <strong>{{ product.title }}</strong>
        </h1>
        <p class="block font-size-12 text-justify mb-2 text-mid-grey">
          {{ product.description }}
        </p>
        <span class="block font-size-14 mb-2 text-mid-grey"
          >Price : <strong>{{ product.price }}</strong></span
        >
        <span class="block font-size-14 mb-2 text-mid-grey"
          >Category : <strong>{{ product.category }}</strong></span
        >
        <span class="block font-size-14 mb-2 text-mid-grey"
          >Rating : <strong>{{ product.rating.rate }}</strong></span
        >
        <span class="block font-size-12 text-mid-grey"
          >Rate People Count : <strong>{{ product.rating.count }}</strong></span
        >
      </div>
    </div>
  </organism-modal>
</template>

<script>
export default {
  name: 'ProductDetailModal',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

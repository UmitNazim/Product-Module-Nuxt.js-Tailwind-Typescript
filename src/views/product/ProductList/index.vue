<template>
  <organism-card color="white" shadow>
    <div class="grid md:grid-row-1 md:grid-cols-4 gap-5 ">
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />

      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
      <molecule-product
        :price="45.454"
        name="ayakkabı"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct"
      />
    </div>
    <organism-pagination
      class="mt-7"
      :per-page="16"
      :total-count="128"
    ></organism-pagination>

    <organism-modal
      close-on-out-side-click
      size="xl"
      @on-close="isOpen = false"
      v-if="isOpen"
    >
      <div class="flex flex-wrap">
        <atom-image
          class="hover-opacity-7 w-full md:w-5/12 p-2"
          :src="require('~/assets/images/general/product-placeholder.jpg')"
        />

        <div class="w-full md:w-7/12 p-2">
          <h1 class="block font-size-16 mb-2">
            <strong>Mens Casual Premium Slim Fit T-Shirts</strong>
          </h1>

          <p class="block font-size-12 text-justify mb-2 text-mid-grey">
            Slim-fitting style, contrast raglan long sleeve, three-button henley
            placket, light weight soft fabric for breathable and comfortable
            wearing. And Solid stitched shirts with round neck made for
            durability and a great fit for casual fashion wear and diehard
            baseball fans. The Henley style round neckline includes a
            three-button placket.
          </p>

          <span class="block font-size-14 mb-2 text-mid-grey"
            >Price : <strong>56 TL</strong></span
          >
          <span class="block font-size-14 mb-2 text-mid-grey"
            >Category : <strong>men's clothing</strong></span
          >
          <span class="block font-size-14 mb-2 text-mid-grey"
            >Rating : <strong>4.1</strong></span
          >
          <span class="block font-size-12 text-mid-grey"
            >Rate People Count : <strong>257</strong></span
          >
        </div>
      </div>
    </organism-modal>
  </organism-card>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedProduct: {},
    };
  },
  methods: {
    onProduct() {
      this.isOpen = true;
      this.selectedProduct = { price: 34.0, name: 'umit' };
    },
  },
};
</script>

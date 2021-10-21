<template>
  <organism-card class="md:p-4" color="white" no-padding shadow>
    <div class="grid md:grid-row-1 md:grid-cols-4 gap-5">
      <molecule-product
        v-for="({ price, title, image, ...rest }, index) in products"
        :key="`product-${index}`"
        :price="price"
        :name="title"
        :image="image"
        class="md:col-span-1 sm:col-span-4"
        @on-product-detail="onProduct({ price, title, image, ...rest })"
      />
    </div>
    <organism-pagination
      class="mt-7"
      :per-page="16"
      :total-count="128"
    ></organism-pagination>
    <product-detail-modal
      v-if="isOpen"
      @on-close="isOpen = false"
      :product="selectedProduct"
    ></product-detail-modal>
  </organism-card>
</template>

<script>
import ProductDetailModal from './ProductDetailModal';
export default {
  components: { ProductDetailModal },
  data() {
    return {
      isOpen: false,
      selectedProduct: {},
    };
  },

  methods: {
    onProduct(selected = {}) {
      this.isOpen = true;
      this.selectedProduct = selected;
    },
  },
  computed: {
    products() {
      return this.$store.getters['product/getProducts'];
    },
  },
  async created() {
    await this.$store.dispatch('product/fetchProducts');
  },
};
</script>

<template>
  <organism-card class="md:p-4" color="white" no-padding shadow>
    <div class="grid md:grid-row-1 md:grid-cols-4 gap-5">
      <molecule-product
        v-for="(product, index) in products"
        :key="`product-${index}`"
        :product="product"
        @on-product-add="addProduductToBasket(product)"
        @on-product-detail="onProduct(product)"
        class="md:col-span-1 sm:col-span-4"
      />
    </div>
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
      onBasket: [],
    };
  },

  methods: {
    addProduductToBasket({ title, price }) {
      this.onBasket.push({ title, price });
      this.$store.dispatch('basket/addProductToBasket', {
        items: [...this.onBasket],
      });
    },
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

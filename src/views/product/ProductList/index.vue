<template>
  <organism-card class="md:p-4" color="white" no-padding shadow>
    <div class="flex flex-wrap">
      <template v-if="isProductFetch || onSort">
        <molecule-content-loader
          v-for="n in 20"
          :key="`product-placeholder-${n}`"
          class="w-full md:w-1/4 p-2 sm:mb-2"
        />
      </template>
      <template v-else>
        <molecule-product
          v-for="(product, index) in products"
          :key="`product-${index}`"
          :product="product"
          @on-product-add="addProduductToBasket(product)"
          @on-product-detail="onProduct(product)"
          class="w-full md:w-1/4 sm:mb-2"
        />
      </template>
    </div>

    <product-detail-modal
      v-if="isOpen"
      @on-close="isOpen = false"
      :product="selectedProduct"
    />
  </organism-card>
</template>

<script>
import ProductDetailModal from './ProductDetailModal';
export default {
  components: { ProductDetailModal },
  props: {
    onSort: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      onBasket: [],
      isOpen: false,
      isProductFetch: false,
      selectedProduct: {},
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
    this.isProductFetch = true;
    await this.$store.dispatch('product/fetchProducts');
    this.isProductFetch = false;
  },
};
</script>

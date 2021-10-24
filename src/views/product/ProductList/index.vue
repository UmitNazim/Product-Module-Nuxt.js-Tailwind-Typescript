<template>
  <organism-card class="md:p-4" color="white" no-padding shadow>
    <div class="flex flex-wrap">
      <template v-if="isProductFetchStart || onSortingStart">
        <molecule-content-loader
          v-for="n in 20"
          :key="`product-placeholder-${n}`"
          class="w-full md:w-1/4 p-2 sm:mb-2"
        />
      </template>
      <template v-else>
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
          @on-product-add="addProduductToBasket(product)"
          @on-product-detail="viewProductDetail(product)"
          class="w-full md:w-1/4 sm:mb-2"
        />
      </template>
    </div>
    <product-detail-modal
      v-if="needsProductDetailModalOpen"
      @on-close="needsProductDetailModalOpen = false"
      :product="selectedProduct"
    />
  </organism-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { Product } from '@/src/models/product';
import ProductDetailModal from './ProductDetailModal/index.vue';
import ProductCard from './ProductCard/index.vue';

export default Vue.extend({
  components: { ProductDetailModal, ProductCard },
  props: {
    onSortingStart: {
      type: Boolean,
      default: false,
    },
  },
  data(): {
    basketProducts: Product[];
    needsProductDetailModalOpen: boolean;
    isProductFetchStart: boolean;
    selectedProduct: Partial<Product>;
  } {
    return {
      basketProducts: [],
      needsProductDetailModalOpen: false,
      isProductFetchStart: false,
      selectedProduct: {},
    };
  },
  methods: {
    addProduductToBasket(product: Product) {
      this.basketProducts.push(product);
      this.$store.dispatch('basket/addProductToBasket', {
        items: [...this.basketProducts],
      });
    },
    viewProductDetail(product = {}) {
      this.needsProductDetailModalOpen = true;
      this.selectedProduct = product;
    },
  },
  computed: {
    products(): Product[] {
      return this.$store.getters['product/getProducts'];
    },
  },
  async created() {
    this.isProductFetchStart = true;
    await this.$store
      .dispatch('product/fetchProducts')
      .then(() => (this.isProductFetchStart = false));
  },
});
</script>

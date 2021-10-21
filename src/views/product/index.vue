<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/5 md:mr-4 md:mb-4">
      <div class="flex flex-wrap">
        <sorting-content class="w-full mb-4" />
        <filter-content class="w-full mb-4 " />
      </div>
    </div>
    <product-list class="w-full md:w-3/5 " />
  </div>
</template>

<script>
import SortingContent from './SortingContent';
import FilterContent from './FilterContent';
import ProductList from './ProductList';

export default {
  name: 'Product',
  components: { SortingContent, FilterContent, ProductList },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

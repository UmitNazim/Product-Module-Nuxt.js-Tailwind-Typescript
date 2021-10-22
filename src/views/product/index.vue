<template>
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/5">
      <div class="flex flex-wrap md:mr-3">
        <sorting-content @on-sort="e => (onSort = e)" class="w-full md:mb-4" />
        <filter-content class="w-full mb-4 " />
      </div>
    </div>
    <product-list :on-sort="onSort" class="w-full md:w-4/5" />
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
      onSort: false,
    };
  },
};
</script>

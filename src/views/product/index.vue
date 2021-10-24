<template>
  <div class="flex flex-wrap">
    <aside class="w-full md:w-1/5">
      <div class="flex flex-wrap md:mr-3">
        <sorting-content @on-sorting-start="e => (isSortingStart = e)" class="w-full md:mb-4" />
        <filter-content class="w-full mb-4 " />
      </div>
    </aside>
    <section class="w-full md:w-4/5">
      <product-list :on-sorting-start="isSortingStart" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import SortingContent from './SortingContent/index.vue';
import FilterContent from './FilterContent/index.vue';
import ProductList from './ProductList/index.vue';

export default Vue.extend({
  name: 'Product',
  components: {
    SortingContent,
    FilterContent,
    ProductList,
  },
  data(): { isSortingStart: boolean } {
    return {
      isSortingStart: false,
    };
  },
});
</script>

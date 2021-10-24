<template>
  <aside>
    <organism-card :title="$t('category.list')" color="bg-white" shadow>
      <template v-if="isProductByCategoryStart">
        <molecule-content-loader
          v-for="n in 4"
          :key="`category-placeholder-${n}`"
          type="category"
          class="mb-2"
        />
      </template>
      <template v-else>
        <atom-checkbox
          v-for="(category, index) in categories"
          :key="`sorting-item-${index}`"
          :label="category"
          class="mb-2 capitalize"
          @input="status => getProductByCategory({ status, category })"
        />
      </template>
    </organism-card>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';
import { Category } from '@/src/models/product';

export default Vue.extend({
  name: 'FilterContent',
  data(): { selectedCategories: Category[]; isProductByCategoryStart: boolean } {
    return {
      selectedCategories: [],
      isProductByCategoryStart: true,
    };
  },
  methods: {
    getProductByCategory({ status = false, category }: { status: boolean; category: Category }) {
      this.isProductByCategoryStart = true;
      if (status) this.selectedCategories.push(category);
      else
        this.selectedCategories = this.selectedCategories.filter((item: any) => item !== category);

      this.$store.dispatch('product/updateSelectedCategories', {
        items: [...(this as any).selectedCategories],
      });
      this.isProductByCategoryStart = false;
    },
  },
  computed: {
    categories(): Array<Category> {
      return this.$store.getters['product/getCategories'];
    },
  },
  async created() {
    this.isProductByCategoryStart = true;
    await this.$store
      .dispatch('product/fetchCategories')
      .then(() => (this.isProductByCategoryStart = false));
  },
});
</script>

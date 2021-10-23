import { Product, Category } from '~/src/models/product';

export default {
  async fetchProducts(
    { commit }: { commit: Function },
    { sort = 'asc', limit }: { sort: string; limit: number },
  ) {
    const { data: items }: { data: Product[] } = await this.$axios.get('products', {
      params: { sort, limit },
    });
    commit('setProducts', { items });
  },
  async fetchCategories({ commit }: { commit: Function }) {
    const { data: items }: { data: Category[] } = await this.$axios.get('products/categories');
    commit('setCategories', { items });
  },

  updateSelectedCategories(
    { commit }: { commit: Function },
    { items = [] }: { items: Category[] },
  ) {
    commit('setSelectedCategories', { items });
  },
};

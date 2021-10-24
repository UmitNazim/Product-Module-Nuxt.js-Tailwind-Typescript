import { Product, Category } from '~/src/models/product';
import { $axios } from '../../utils/api';

export default {
  async fetchProducts(
    { commit }: { commit: Function },
    { sort = 'asc', limit } = {} as { sort: string; limit: number },
  ) {
    const { data: items }: { data: Product[] } = await $axios.get('products', {
      params: { sort, limit },
    });
    commit('setProducts', { items });
  },
  async fetchCategories({ commit }: { commit: Function }) {
    const { data: items }: { data: Category[] } = await $axios.get('products/categories');
    commit('setCategories', { items });
  },

  updateSelectedCategories(
    { commit }: { commit: Function },
    { items = [] }: { items: Category[] },
  ) {
    commit('setSelectedCategories', { items });
  },
};

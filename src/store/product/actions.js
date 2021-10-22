export default {
  async fetchProducts({ commit }, { sort = 'asc', limit } = {}) {
    const { data: items } = await this.$axios.get('products', {
      params: { sort, limit },
    });
    commit('setProducts', { items });
  },
  async fetchCategories({ commit }) {
    const { data: items } = await this.$axios.get('products/categories');
    commit('setCategories', { items });
  },

  updateSelectedCategories({ commit }, { items = [] }) {
    commit('setSelectedCategories', { items });
  },
};

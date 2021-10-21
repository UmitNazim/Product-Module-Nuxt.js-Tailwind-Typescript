export default {
  async fetchProducts({ commit }) {
    const { data: items } = await this.$axios.get('products');
    commit('setProducts', { items });
  },
};

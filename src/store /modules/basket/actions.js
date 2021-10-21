export default {
  async fetchBasket({ commit }) {
    const { data: items } = await $axios.get('basket');
    commit('setBasket', { items });
  },
  fetchBasketSummary({ commit }) {
    commit('setBasketSummary', { name: 'dghh' });
  },
  async deleteBasketProduct(context, { id = null }) {
    return await $axios.delete(`basket/${id}`);
  },
  async updateProductQuantity(context, { item }) {
    return await $axios.put(`basket/${item.id}`, item);
  },
};

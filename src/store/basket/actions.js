export default {
  addProductToBasket({ commit }, { items = [] }) {
    commit('setBasket', { items });
  },
};

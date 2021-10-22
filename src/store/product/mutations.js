export default {
  setProducts(state, { items = [] }) {
    state.products = items;
  },
  setCategories(state, { items = [] }) {
    state.categories = items;
  },

  setSelectedCategories(state, { items = [] }) {
    state.selectedCategories = items;
  },
};

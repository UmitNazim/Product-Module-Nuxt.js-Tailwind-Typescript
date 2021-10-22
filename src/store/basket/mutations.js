export default {
  setBasket(state, { items = [] }) {
    state.basket = items;
  },
};

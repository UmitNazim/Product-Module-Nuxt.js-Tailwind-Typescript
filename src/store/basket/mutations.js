export default {
  setBasket(state, { items = [] }) {
    state.basket = items;
  },
  setBasketSummary(state, { items = {} }) {
    state.summary = items;
  },
};

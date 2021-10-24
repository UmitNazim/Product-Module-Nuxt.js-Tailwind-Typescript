import { Basket } from '~/src/models/product';

export default {
  addProductToBasket({ commit }: { commit: Function }, { items }: { items: Basket }): void {
    commit('setBasket', { items });
  },
};

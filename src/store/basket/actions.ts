import { Basket } from '@/src/types/product';

export default {
  addProductToBasket({ commit }: { commit: Function }, { items }: { items: Basket }): void {
    commit('setBasket', { items });
  },
};

import { State } from './state';
import { Basket } from '@/src/types/product';

export default {
  setBasket(state: State, { items }: { items: Basket[] }): void {
    state.basket = items;
  },
};

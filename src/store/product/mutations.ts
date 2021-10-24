import { State } from './state';
import { Product, Category } from '@/src/types/product';

export default {
  setProducts(state: State, { items = [] }: { items: Product[] }): void {
    state.products = items;
  },
  setCategories(state: State, { items = [] }: { items: Category[] }): void {
    state.categories = items;
  },
  setSelectedCategories(state: State, { items = [] }: { items: Category[] }): void {
    state.selectedCategories = items;
  },
};

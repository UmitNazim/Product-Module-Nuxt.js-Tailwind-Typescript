import { Product, Category } from '~/src/models/product';

export interface State {
  products?: Product[];
  categories?: Category[];
  selectedCategories?: Category[];
}

export default (): State => ({
  products: [],
  categories: [],
  selectedCategories: [],
});

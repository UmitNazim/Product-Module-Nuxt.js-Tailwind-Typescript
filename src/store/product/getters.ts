import { Category, Product } from '~/src/models/product';

export default {
  getProducts: ({
    selectedCategories,
    products,
  }: {
    selectedCategories: Category[];
    products: Product[];
  }): Product[] =>
    selectedCategories.length
      ? products.filter(({ category }): Boolean => selectedCategories.includes(category))
      : products,

  getCategories: ({ categories }: { categories: Category[] }): Category[] => categories,
  getSelectedCategories: ({ selectedCategories }: { selectedCategories: Category[] }): Category[] =>
    selectedCategories,
};

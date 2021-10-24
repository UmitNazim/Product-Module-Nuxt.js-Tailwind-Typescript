import { Category, Product } from '@/src/types/product';

export default {
  getProducts: ({
    selectedCategories,
    products,
  }: {
    selectedCategories: Category[];
    products: Product[];
  }): Product[] =>
    selectedCategories.length
      ? products.filter(({ category }: any) => selectedCategories.includes(category))
      : products,

  getCategories: ({ categories }: { categories: Category[] }): Category[] => categories,
  getSelectedCategories: ({ selectedCategories }: { selectedCategories: Category[] }): Category[] =>
    selectedCategories,
};

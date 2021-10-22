export default {
  getProducts: ({ products, selectedCategories }) =>
    selectedCategories.length
      ? products.filter(({ category }) => selectedCategories.includes(category))
      : products,
  getCategories: ({ categories }) => categories,
  getSelectedCategories: ({ selectedCategories }) => selectedCategories,
};

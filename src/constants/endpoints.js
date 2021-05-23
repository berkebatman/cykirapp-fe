/*
  Group endpoints by resource and HTTP Method
*/

const product = {
  getProducts: () => `/products`,
};

const category = {
  getProductCategories: () => `/categories`,
};

export { product, category };

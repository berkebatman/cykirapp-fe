/*
  Group endpoints by resource and HTTP Method
*/

const product = {
  getProducts: () => `/products`,
  getProductsByCategory: ({ categoryName } ) => `/category/${categoryName}`
};

const category = {
  getProductCategories: () => `/categories`,
};

const blog = {
  getBlogs: () => `/blogs`,
};

export { product, category, blog };

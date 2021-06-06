/*
  Group endpoints by resource and HTTP Method
*/

const product = {
  getProducts: () => `/products`,
  getProductsByCategory: ({ categoryName } ) => `/category/${categoryName}`,
  getProductById: ({ productId }) => `/product/${productId}`,
  postProduct: () => `/products/list-an-item`,
  getProductsByUserId: ({ userId }) => `/productbyuser/${userId}`
};

const category = {
  getProductCategories: () => `/categories`,
};

const blog = {
  getBlogs: () => `/blogs`,
};

const user = {
  register: () => `/register`,
  login: () => `/login`
}

export { product, category, blog, user };

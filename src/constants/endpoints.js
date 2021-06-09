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

const orders = {
  order: () => `/order`,
}

const calendar = {
  getBookedDatesByProductId: () => `/datesbooked`,
  postBookedDate: () => `/bookdates`
}


export { product, category, blog, user , orders, calendar};

import http from "../../../utils/http";
import { product } from "../../../constants/endpoints";

const postProduct = ({
  productName,
      productDescription,
      price,
      image,
      productCity,
      productTown,
      userId,
      categoryId,
}) => {
  const ENDPOINT = product.postProduct({
    productName,
      productDescription,
      price,
      image,
      productCity,
      productTown,
      userId,
      categoryId,
  });
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${ENDPOINT}`, {
    data: {
      productName,
      productDescription,
      price,
      image,
      productCity,
      productTown,
      userId,
      categoryId,
    },
  });
};

export default postProduct;

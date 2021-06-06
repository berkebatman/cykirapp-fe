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
  const ENDPOINT = product.postProduct();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;

  const bodyFormData = new FormData();
 console.log(image, "<<< file")
  bodyFormData.append("productName", productName);
  bodyFormData.append("productDescription", productDescription);
  bodyFormData.append("price", price);
  bodyFormData.append("image", image);
  bodyFormData.append("productCity", productCity);
  bodyFormData.append("productTown", productTown);
  bodyFormData.append("userId", userId);
  bodyFormData.append("categoryId", categoryId);

  return http.post(`${API_BASE_URL}${ENDPOINT}`, {
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export default postProduct;

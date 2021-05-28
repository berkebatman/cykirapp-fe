import http from "../../../utils/http";
import { product } from "../../../constants/endpoints";

const getProductById  = ({ productId }) => {
  // const accountId = getActiveAccountId();
  const ENDPOINT = product.getProductById( { productId });
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getProductById;
import http from "../../../utils/http";
import { product } from "../../../constants/endpoints";

const getProductsByCategory  = ({ categoryName }) => {
  // const accountId = getActiveAccountId();
  const ENDPOINT = product.getProductsByCategory( {categoryName });
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getProductsByCategory;
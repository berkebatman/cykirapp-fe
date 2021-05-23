import http from "../../../utils/http";
import { category } from "../../../constants/endpoints";

const getProductCategories  = () => {
  // const accountId = getActiveAccountId();
  const ENDPOINT = category.getProductCategories();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getProductCategories;

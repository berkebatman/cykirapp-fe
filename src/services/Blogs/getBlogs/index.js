import http from "../../../utils/http";
import { blog } from "../../../constants/endpoints";

const getBlogs  = () => {
  // const accountId = getActiveAccountId();
  const ENDPOINT = blog.getBlogs();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getBlogs;

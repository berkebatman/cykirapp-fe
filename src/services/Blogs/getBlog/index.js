import http from "../../../utils/http";
import { blog } from "../../../constants/endpoints";

const getBlog = ( { slug }) => {
  const ENDPOINT = blog.getBlog( { slug  })
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getBlog;
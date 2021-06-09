import http from "../../../utils/http";
import { calendar } from "../../../constants/endpoints";

const getBookedDatesByProductId  = ({ productId }) => {
  // const accountId = getActiveAccountId();
  const ENDPOINT = calendar.getBookedDatesByProductId( { productId });
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default getBookedDatesByProductId;
import http from "../../../utils/http";
import { orders } from "../../../constants/endpoints";

const myOrders  = ( { userId }) => {
  const ENDPOINT = orders.getOrdersByUserId( { userId });
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.get(`${API_BASE_URL}${ENDPOINT}`);
};

export default myOrders;
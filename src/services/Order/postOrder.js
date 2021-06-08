import http from "../../utils/http";
import { orders } from "../../../src/constants/endpoints";

const postOrder = ({     
   userId,
   productId,
     }) => {
  const ENDPOINT = orders.order();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${ENDPOINT}`, {
    data: { 
      userId,
       productId,
        },
  });
};

export default postOrder;
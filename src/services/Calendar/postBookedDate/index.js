import http from "../../../utils/http";
import { calendar } from "../../../constants/endpoints";

const postBookedDate = ({     
   userId,
   productId,
   date,
     }) => {
  const ENDPOINT = calendar.postBookedDate();
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${ENDPOINT}`, {
    data: { 
      userId,
       productId,
       date,
        },
  });
};

export default postBookedDate;
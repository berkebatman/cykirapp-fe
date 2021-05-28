import http from "../../../utils/http";
import { user } from "../../../constants/endpoints";

const postUser = ({     
  firstName,
  lastName,
  dateOfBirth,
  email,
  password,
  town,
  city,
  phoneNumber
     }) => {
  const POST_USER_ENDPOINT = user.register({     
    firstName,
    lastName,
    dateOfBirth,
    email,
    password,
    town,
    city,
    phoneNumber
    });
  const { REACT_APP_API_BASE_URL: API_BASE_URL } = process.env;
  return http.post(`${API_BASE_URL}${POST_USER_ENDPOINT}`, {
    data: { 
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
      town,
      city,
      phoneNumber
        },
  });
};

export default postUser;



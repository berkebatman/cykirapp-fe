import axios from "axios";



const baseRequest = (url, options = {}) => {
  const { headers = {}, method = "get", ...opts } = options;

  return axios(url, {
    method: method,
    headers: { ...headers },
    ...opts,
  });
};

export default baseRequest;

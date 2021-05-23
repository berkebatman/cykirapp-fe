/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useAPI = (apiCallFn, deps = []) => {
  const [loading, setLoading] = useState(true);
  const [errored, setError] = useState(false);
  const [data, setData] = useState({});
  let fetchData = async () => {
    try {
      const response = await apiCallFn();
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);
  
  return [loading, errored, data, fetchData];
};

export default useAPI;

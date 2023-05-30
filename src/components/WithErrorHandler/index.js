import { useState, useEffect } from "react";
import axios from "axios";


const WithErrorHandler = ({ children }) => {
  const [error, setError] = useState(null);
  const reqInterceptor = axios.interceptors.request.use((req) => {
    setError(null);
    return req;
  });
  const resInterceptor = axios.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      setError(err);
      throw err;
    }
  );
  useEffect(() => {
    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);
  useEffect(() => {
    if (error)
      if (error?.message === "Network Error") {
        console.log('Network Error');
      } else if (error?.response?.status == 401) {
      } else if (error?.response?.status == 403) {
      }
  }, [error]);
  return children;
};
export default WithErrorHandler;

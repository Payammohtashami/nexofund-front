import axios from "axios";

function axiosConfig() {
  axios.defaults.headers = {
    Accept: "application/json",
    "Authorization": token ? "Bearer ".concat(token) : "",
    "Content-Type": "application/json",
  };
  const onRequestSuccess = (config) => {
    return config;
  };
  const onResponseSuccess = (response) => {
    return response;
  };
  const onResponseError = (error) => {
    if (error?.response?.status == 401) {
    }
    if (error?.response?.status == 403) {
    }
    return Promise.reject(error);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
  return {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch,
  };
}
export default axiosConfig;
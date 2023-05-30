import axiosConfig from "./axiosConfig";

const network = {
  get: ({ url, params, ...other }) => axiosConfig(other).get(url, { params }),
  post: ({ url, params, ...other }) => axiosConfig(other).post(url, params),
  put: ({ url, params, ...other }) => axiosConfig(other).put(url, params),
  delete: ({ url, params, ...other }) => axiosConfig(other).delete(url, params),
  patch: ({ url, params, ...other }) => axiosConfig(other).patch(url, params),
};

export default network;
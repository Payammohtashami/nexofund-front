import { getAccessToken } from '../utils/';

export default function axiosConfig(store, axios) {
    // const { dispatch } = store;
    axios.interceptors.request.use(
        (config) => {
            const accessToken = getAccessToken(config);
            if (accessToken) config.headers.authorization = `Bearer ${accessToken}`;
            return config;
        },
        (error) => {
            Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        function(response) {
            return response;
        },
        function (error) {
            const state = store.getState();
            if (error?.response?.status === 401 && !!Object.keys(state.auth.user)?.length) {
                // dispatch(logout());
            };
            return Promise.reject(error);
        }
    );
};
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const Http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 30000,
    timeoutErrorMessage: 'Request Timeout',
    headers: { 'X-Custom-Header': 'foobar' },
});

Http.interceptors.request.use(
    function (config: AxiosRequestConfig | any) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.common['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    function (error: AxiosError) {
        return Promise.reject(error);
    },
);

Http.interceptors.response.use(
    function (response: AxiosResponse) {
        return response;
    },
    function (error: AxiosError) {
        if (error.response) {
            return Promise.reject(error.response);
        }
        return Promise.reject(error);
    },
);

export default Http;

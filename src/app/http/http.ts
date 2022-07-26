import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const Http = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 30000,
    timeoutErrorMessage: 'Request Timeout',
    headers: { 'X-Custom-Header': 'foobar' },
});

Http.interceptors.request.use(
    function (config: AxiosRequestConfig | any) {
        const token = localStorage.getItem('accessToken');
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

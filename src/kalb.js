import axios from "axios";

const FALLBACK_API_BASE_URL = "http://127.0.0.1:8000/api/v1";

export const getBaseURL = () =>
    window.API_BASE_URL || FALLBACK_API_BASE_URL;

export const baseURL = getBaseURL();

export const axiosInstance = axios.create({
    baseURL: FALLBACK_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use((config) => {
    config.baseURL = getBaseURL();

    if (typeof window !== "undefined") {
        const pathLocale = window.location.pathname.split("/")[1];
        const supportedLocales = ["ar", "en"];
        const locale = supportedLocales.includes(pathLocale)
            ? pathLocale
            : localStorage.getItem("lng") || "ar";
        config.headers["Accept-Language"] = locale;
    }

    config.params = {
        ...config.params,
    };

    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            if (typeof window !== "undefined") {
                const pathLocale = window.location.pathname.split("/")[1];
                const supportedLocales = ["ar", "en"];
                const locale = supportedLocales.includes(pathLocale) ? pathLocale : "ar";
                localStorage.removeItem("talep_user");
                window.location.href = `/${locale}`;
            }
        }
        return Promise.reject(error);
    },
);
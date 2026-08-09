import { axiosInstance } from "@/kalb";

export const login = async (email_or_phone, password) => {
    const res = await axiosInstance.post("auth/login", { email_or_phone, password });
    return res.data;
};

export const register = async (payload) => {
    const res = await axiosInstance.post("auth/teacher/register", payload);
    return res.data;
};
export const myProfile = async () => {
    const res = await axiosInstance.get("auth/me");
    return res.data;
};
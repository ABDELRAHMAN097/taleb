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

// Get available subjects
export const getSubjects = async () => {
    const res = await axiosInstance.get("teacher/subjects");
    return res.data;
};

// Get available levels
export const getLevels = async () => {
    const res = await axiosInstance.get("teacher/levels");
    return res.data;
};
// logout
export const logout = async () => {
  const res = await axiosInstance.post("auth/logout");
  return res.data;
};
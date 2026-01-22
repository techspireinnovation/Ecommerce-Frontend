import axiosInstance from "@/utils/axios";
import { LoginTypes } from "../loginTypes";

export const loginSuperAdmin = async ({ email, password }: LoginTypes) => {
  const { data } = await axiosInstance.post(`/api/login`, { email, password });
  return data;
};

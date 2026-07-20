import { api } from "@/lib/axios";
import { LoginRequest, LoginResponse } from "../types/auth";

export const authService = {
  async login(data: LoginRequest) {
    const response = await api.post<LoginResponse>(
      "/login",
      data
    );
  console.log(response)
    return response.data;
  },

  async register(data: unknown) {
    const response = await api.post(
      "/register",
      data
    );

    return response.data;
  },
};
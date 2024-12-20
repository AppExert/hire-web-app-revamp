import { API_CONFIG } from "@/config/api";
import axios from "axios";
import { auth } from "@/lib/firebase";

export const api = axios.create({
  baseURL: API_CONFIG.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await auth.currentUser?.getIdToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
